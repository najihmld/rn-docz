module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react', 'react-native'],
  parser: '@babel/eslint-parser',
  rules: {
    'no-console': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 6,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          minProperties: 6,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'react/prop-types': 'warn',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-unused-styles': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/prefer-default-export': 'off',
  },
};
