const path = require('path')

module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // storybookBaseConfig.module.rules.push({
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   loaders: ["standard"]
  // });

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    loaders: ["style-loader", "css-loader"],
    include: path.resolve(__dirname, '../')
  });

  // Return the altered config
  return storybookBaseConfig;
};

// module.exports = {
//   plugins: [
//
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['babel-preset-env']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader?modules']
//       }
//     ],
//   },
// };
