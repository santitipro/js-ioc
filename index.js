const awilix = require("awilix");

const container = awilix.createContainer();

const opts = {
  formatName: "camelCase",
  cwd: __dirname,
};
container.loadModules(["services/*.js"], opts);

(async () => {
  const classicalService = container.resolve("userService");
  console.log(await classicalService.getAll());
})();
