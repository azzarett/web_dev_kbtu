module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:all',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-magic-numbers': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-max-depth': 'off',
    'react/jsx-no-literals': 'off',
    'react/button-has-type': 'off',
    'react/jsx-no-bind': 'off',
    'sort-imports': 'off',
    'react/forbid-component-props': 'off',
    'one-var': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'react/prefer-read-only-props': 'off',
    'react/jsx-sort-props': 'off',
    'no-ternary': 'off',
    'sort-keys': 'off',
    'react/no-array-index-key': 'off',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
};
