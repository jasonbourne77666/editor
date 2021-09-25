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
    semi: 'warn',
    'no-debugger': process.env.NODE_ENY === 'production' ? 'warn' : 'off'
  }
};
