/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  globals: {},
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "airbnb-base"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off"
  }
}
