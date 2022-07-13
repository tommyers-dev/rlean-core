import { inspectClass } from "./";
// NOT CONVERTED
export const implement = (testableClass, rules) => {
  const given = inspectClass(testableClass);

  // The inspection message we send back to give information about the interface check.
  const inspectionMessage = {
    rules,
    given,
    error: {
      type: "",
      message: "",
      invalidMethods: [],
      methodsNotIncluded: [],
    },
    passed: true,
  };

  const rulesDifferential = rules.methods.filter((method) => {
    if (given.Methods.indexOf(method) < 0) {
      return method;
    }
  });

  if (rulesDifferential.length !== 0) {
    inspectionMessage.error.type = "MethodError";
    inspectionMessage.passed = false;
    inspectionMessage.error.invalidMethods = [];
    inspectionMessage.error.methodsNotIncluded = rulesDifferential;
    inspectionMessage.error.message = `${inspectionMessage.error.type}: In class ${inspectionMessage.given.ClassName}, we could not find required methods ${inspectionMessage.error.methodsNotIncluded}`;
  }

  return inspectionMessage;
};
