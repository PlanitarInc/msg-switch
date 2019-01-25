module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      useBuiltIns: 'usage',
      // debug: true,
    }],
    '@vue/app',
  ],
};
