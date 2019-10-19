const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testRegex: 'tests/.*\\.test\\.(?:jsx?|tsx?)$',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|react-navigation-tabs|react-navigation-redux-helpers|react-native-safari-view|react-native-linear-gradient|react-native-blur|react-native-animatable|react-native-wkwebview-reborn|react-native-safe-area-view|react-native-popup-menu|redux-persist)/)',
  ],
};
