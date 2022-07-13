// NOT CONVERTED
export const inspectClass = (obj) => {
  let className;
  let attributes = {};
  const methods = [];

  try {
    let objClass;

    if (typeof obj !== "function") {
      objClass = obj.constructor;
    } else {
      objClass = obj;
    }

    className = objClass.name;
    const classProto = objClass.prototype;

    Object.getOwnPropertyNames(classProto).forEach(function (m) {
      const t = typeof classProto[m];

      if (t === "function") {
        methods.push(m);
      } else {
        attributes[m] = classProto[m];
      }
    });
  } catch (err) {
    className = "undefined";
    console.error(err);
  }

  return { ClassName: className, Methods: methods, Attributes: attributes };
};
