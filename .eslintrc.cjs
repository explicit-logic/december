module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'key-spacing': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    semi: 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    quotes: ['error', 'single'],
  },
};
