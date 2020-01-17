export const inspectClass = obj => {
  let objClass, className;
  let classProto;
  let methods = [];
  let attributes = {};
  let t;

  try {
    if (typeof obj !== 'function') {
      objClass = obj.constructor;
    } else {
      objClass = obj;
    }

    className = objClass.name;
    classProto = objClass.prototype;

    Object.getOwnPropertyNames(classProto).forEach(function(m) {
      t = typeof classProto[m];

      if (t === 'function') {
        methods.push(m);
      } else {
        attributes[m] = classProto[m];
      }
    });
  } catch (err) {
    className = 'undefined';
    console.error(err);
  }

  return { ClassName: className, Methods: methods, Attributes: attributes };
};
