/**
 * @type {import('@react-native-community/cli-types').UserDependencyConfig}
 */
module.exports = {
  dependency: {
    platforms: {
      android: {
        cmakeListsPath: 'generated/jni/CMakeLists.txt',
      },
    },
  },
  iosAssets: ['./src/assets/fonts'],
  androidAssets: ['./src/assets/fonts'],
  assets: ['./src/assets/fonts'],
};
