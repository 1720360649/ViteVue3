import { camelize } from "./formate.js";
function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    if (name) {
      app.component(name, options);
      app.component(camelize(`-${name}`), options);
    }
  };
  return options;
}
export {
  withInstall
};
