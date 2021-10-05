exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  config.module.rules = [
    ...config.module.rules.filter(
      (rule) => String(rule.test) !== String(/\.jsx?$/),
    ),
    {
      ...loaders.js(),
      test: /\.js?$/,
      exclude: (modulePath) => /node_modules\/(react-native-elements\/src\/config\/fonts.js)/.test(
        modulePath,
      )
        || (/node_modules/.test(modulePath)
          && !/node_modules\/(react-native-elements|react-native-ratings|react-native-vector-icons)/.test(
            modulePath,
          )),
    },
  ];
  actions.replaceWebpackConfig(config);
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native': 'react-native-web',
        './src/_docs': './src',
      },
    },
  });
};
