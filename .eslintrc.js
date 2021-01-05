
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    'plugin:vue/recommended',
    "prettier", // 最後に書く！
  ],
  root: true,
  "parserOptions": {
    "sourceType": "module"
  },
  globals: {
    Vue: true,
    moment: true,
    _: true,
    axios: true,
    bootstrap: true,
  }
};

