module.exports = {
  root: true,
  extends: [
    '@metamask/eslint-config',
    'eslint-config-airbnb',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  env: {'react-native/react-native': true},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@metamask/eslint-config-typescript'],
      parserOptions: {project: './tsconfig.json'},
    },
    {
      files: ['*.js'],
      parserOptions: {sourceType: 'script'},
      extends: ['@metamask/eslint-config-nodejs'],
    },
    {
      files: ['yarn.config.cjs'],
      parserOptions: {sourceType: 'script', ecmaVersion: 2020},
      settings: {jsdoc: {mode: 'typescript'}},
      extends: ['@metamask/eslint-config-nodejs'],
    },
    {
      files: ['*.test.ts', '*.test.tsx', '*.test.js'],
      extends: [
        '@metamask/eslint-config-jest',
        '@metamask/eslint-config-nodejs',
        'plugin:testing-library/react',
        'plugin:jest/recommended',
      ],
      env: {'jest/globals': true},
    },
  ],
  ignorePatterns: [
    '!.eslintrc.js',
    '!.prettierrc.js',
    'dist/',
    'docs/',
    '.yarn/',
  ],
  settings: {react: {version: 'detect'}},
  rules: {
    'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.tsx']}],
    'import/extensions': ['error', 'never', {ts: 'never', tsx: 'never'}],
    'import/no-unresolved': 'off',
    'react-native/no-raw-text': 'off',
    'react/prop-types': 'off',
  },
};
