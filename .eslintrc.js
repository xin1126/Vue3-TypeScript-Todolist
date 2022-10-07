module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'global-require': 'off',
  },
};
