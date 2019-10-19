const { compose, tap } = require('ramda');

const config = _ => ({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
});

module.exports = compose(
  config,
  tap(api => api.cache(true)),
);
