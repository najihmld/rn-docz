const path = require('path');

// gatsby-node.js

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native': 'react-native-web',
        './src/_doc': './src',
      },
    },
  });
};
