const axios = require("axios");

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// NOTE: When using ES6 import-export, you can simply use `export default`.
module.exports = function (opts) {
  return {
    get: instance.get,
  };
};
