module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",    // handles <template> blocks
  parserOptions: {
    parser: "@babel/eslint-parser", // handles script blocks
    requireConfigFile: false,        // so it will pick up your babel.config.js automatically
    babelOptions: {
      configFile: "./babel.config.js"
    },
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:vue/vue3-recommended", // or "plugin:vue/vue2-recommended" if you’re on Vue 2
    "eslint:recommended"
  ],
  plugins: [
    "vue"
  ],
  rules: {
    // your custom rules, e.g.:
    // "vue/multi-word-component-names": "off",
  }
}
