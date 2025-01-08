module.exports = {
  plugins: [
    [
      'postcss-simple-vars',
      {
        variables: require('./src/shared/styles/variables/breakpoints.cjs'),
      },
    ],
  ],
};
