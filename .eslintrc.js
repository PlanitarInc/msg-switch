module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },

  extends: [
    process.env.NODE_ENV === 'production' || process.env.CI === 'true' ?
      '@plntr/eslint-config/vue' : '@plntr/eslint-config/vue-dev',
  ],
};
