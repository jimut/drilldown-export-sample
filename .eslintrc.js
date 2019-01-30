module.exports = {
  globals: {
    FusionCharts: true,
  },

  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],

  plugins: [
    'vue',
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    "no-param-reassign": "off",
  }
};
