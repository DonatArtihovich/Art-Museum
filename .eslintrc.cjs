module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-simple-import-sort', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, {'extensions': ['.tsx']}],
    'import/prefer-default-export': 'off',
    'import/extensions': [
        'error',
        'ignorePackages',
        {
        'ts': 'never',
        'tsx': 'never'
        }
    ],
    'simple-import-sort/imports': 'error'   ,
    'simple-import-sort/exports': 'error'
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 'latest'
  }
}
