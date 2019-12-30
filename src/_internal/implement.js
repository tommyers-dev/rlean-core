import { inspectClass } from './';

export const implement = (testableClass, rulesMap) => {
  const o = inspectClass(testableClass);
  const inspector = new ImplementsInspector();

  inspector.given = o;
  inspector.rules = rulesMap.rules;
  inspector.strictness = rulesMap.strictness;

  // The inspection message we send back to give information about the interface check.
  const inspectionMessage = {
    rules: inspector.rules,
    given: inspector.given,
    strictness: inspector.strictness,
    error: {
      type: '',
      message: '',
      invalidMethods: [],
      methodsNotIncluded: []
    },
    passed: true,
  };

  const weakTest = inspector.weakTest();
  if(!weakTest.passed) {
    inspectionMessage.error.type    = 'MethodError';
    inspectionMessage.passed  = false;
    inspectionMessage.error.invalidMethods = [];
    inspectionMessage.error.methodsNotIncluded = weakTest.methodsNotIncluded;
    inspectionMessage.error.message = `${inspectionMessage.error.type}: In class ${inspectionMessage.given.className}, we could not find required methods ${inspectionMessage.error.methodsNotIncluded}`;
  }

  if(inspector.strictness === 'weak') {
    return inspectionMessage;
  }

  const strongTest = inspector.strongTest();

  // If it failed both
  if(!strongTest.passed && !weakTest.passed) {
    inspectionMessage.error.invalidMethods = strongTest.invalidMethods;
    inspectionMessage.error.message += ` and contained invalid methods ${inspectionMessage.error.invalidMethods}`;
  }

  // If it only failed the strong test
  if(!strongTest.passed) {
    inspectionMessage.error.type = 'MethodError';
    inspectionMessage.passed = false;
    inspectionMessage.error.invalidMethods = strongTest.invalidMethods;
    inspectionMessage.error.message = `${inspectionMessage.error.type}: Class ${inspectionMessage.given.className} contained ${inspectionMessage.error.invalidMethods}`;
  }

  if(inspector.strictness === 'strict') {
    return inspectionMessage;
  }

  throw new Error(`implement() received an invalid strictness value. Value received was ${inspector.strictness}`);
}

class ImplementsInspector {

  set rules(value) {
    this.rulesValue = value;
  }

  set given(value) {
    this.givenValue = {
      className: value.ClassName,
      methods: value.Methods,
      attributes: value.Attributes
    };
  }

  set strictness(value) {
    this.strictnessValue = value || 'strict';
  }

  get rules() {
    return this.rulesValue;
  }

  get given() {
    return this.givenValue;
  }

  get strictness() {
    return this.strictnessValue;
  }

  weakTest() {
    let weakTestResponse = {
      passed: true,
      methodsNotIncluded: []
    };
    // rulesDifferential = rules - given
    const rulesDifferential = this.rules.methods.filter(method => {
      if(this.given.methods.indexOf(method) < 0) return method;
    });

    if(rulesDifferential.length !== 0) {
      weakTestResponse.passed = false;
      weakTestResponse.methodsNotIncluded = rulesDifferential;
    }

    return weakTestResponse;
  }

  strongTest() {
    let strongTestResponse = {
      passed: true,
      invalidMethods: []
    };
    
    const givenDifferential = this.given.methods.filter(method => {
      if(this.rules.methods.indexOf(method) < 0) return method;
    });

    if(givenDifferential.length !== 0) {
      strongTestResponse.passed = false;
      strongTestResponse.invalidMethods = givenDifferential;
    }

    return strongTestResponse;
  }
}
