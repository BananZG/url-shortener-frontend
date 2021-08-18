module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules: true,
        regenerator: false,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: 'current node',
          },
        ],
      ],
    },
  },
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
};
