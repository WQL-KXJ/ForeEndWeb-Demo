module.exports = {
    root: true,
    env: {
      node: true,
    },
    //继承vue3-essential的js规则
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
    parserOptions: {
      parser: "@babel/eslint-parser",
    },
  };