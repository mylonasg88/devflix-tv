module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/*': './src/*',
            // '@': './src',
            // '@components': './src/components',
            // '@screens': './src/screens',
            // '@navigation': './src/navigation',
            // '@containers': './src/containers',
            // '@styles': './src/styles',
            // '@api': './src/api',
            // '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
