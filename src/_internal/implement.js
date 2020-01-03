import { inspectClass } from './';

export const implement = (testableClass, rulesMap) => {
  const o = inspectClass(testableClass);
  const inspector = new ImplementsInspector();

  inspector.given = o;
  inspector.rules = rulesMap.rules;

  // The inspection message we send back to give information about the interface check.
  const inspectionMessage = {
    rules: inspector.rules,
    given: inspector.given,
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

  return inspectionMessage
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
