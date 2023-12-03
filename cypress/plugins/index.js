module.exports = (on, config) => {
  on(
    'file:preprocessor',
    require('@cypress/webpack-preprocessor')({
      webpackOptions: {
        module: {
          rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
          ],
        },
      },
    })
  );
};
