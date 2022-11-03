module.exports = {
  root: true,
  extends: '@react-native-community',
  'eslint:recommended': any,
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', // <--- THIS IS THE NEW RULE
  },
};
