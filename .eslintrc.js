module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 0, // 禁止出现未使用过的变量
    'no-console': 'off', // 禁用 console
    'max-classes-per-file': 0, // 强制每个文件中包含的的类的最大数量
    'no-use-before-define': 0,
    'no-shadow': 0,
    'no-restricted-globals': 0,
    'no-undef': 0,
  },
}
