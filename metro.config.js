const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/* eslint-disable import/no-commonjs */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @type {import('metro-config').MetroConfig}
 */

module.exports = function (baseConfig) {
  const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname));
  const {
    resolver: {assetExts, sourceExts},
  } = defaultConfig;

  return withNativeWind(
    mergeConfig(defaultConfig, {
      resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg', 'cjs', 'mjs'],
        resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
      },
      transformer: {
        babelTransformerPath: require.resolve('./metro.transform.js'),
        assetPlugins: ['react-native-svg-asset-plugin'],
        unstable_allowRequireContext: true,
        svgAssetPlugin: {
          pngCacheDir: '.png-cache',
          scales: [1],
          output: {
            compressionLevel: 6,
          },
        },
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: true,
            inlineRequires: true,
          },
        }),
      },
      resetCache: true,
    }),
    {input: './global.css'},
  );
};
