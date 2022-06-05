module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0, // 关闭组件命名规则
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 6, // 当开始标签位于单行时，每行的最大属性数
        multiline: {
          max: 1
        } // 当开始标签位于多行时，每行的最大属性数
      }
    ] // 强制每行的最大属性数
  }
}
