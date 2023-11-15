"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const formate = require("./formate.js");
function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    if (name) {
      app.component(name, options);
      app.component(formate.camelize(`-${name}`), options);
    }
  };
  return options;
}
exports.withInstall = withInstall;
