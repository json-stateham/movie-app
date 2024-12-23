module.exports = {
  plugins: [
    [
      'postcss-simple-vars',
      {
        variables: require('./styles/variables/breakpoints.cjs'),
      },
    ],
  ],
};
