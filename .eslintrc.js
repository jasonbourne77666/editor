module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    // semi: 'warn',
    'no-unused-vars': 0,
    'no-debugger': process.env.NODE_ENY === 'production' ? 'warn' : 'off'
  }
};
