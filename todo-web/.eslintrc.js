module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  extends: ['standard-with-typescript', 'react-app'],
  plugins: ['react'],
  rules: {},
};
