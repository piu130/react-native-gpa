const { join } = require('path');

const nodeModulesDir = join(__dirname, 'node_modules')

module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'test'
        }
      }
    ],
    (neutrino) => {
      neutrino.config.module
        .rule('compile')
          .include
            .add(join(nodeModulesDir, 'react-native-elements'))
            .add(join(nodeModulesDir, 'react-native-vector-icons'))
            .add(join(nodeModulesDir, 'react-native-touchable-scale'))
            .end();
    },
    '@neutrinojs/jest'
  ]
};
