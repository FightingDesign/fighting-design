// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    /**
     * vue.js 规则
     * 参考文档：https://eslint.vuejs.org/rules/
     * 
     *  0 = off, 1 = warn, 2 = error 
     */
    // 关闭名称校验 https://eslint.vuejs.org/rules/multi-word-component-names.html
    'vue/multi-word-component-names': 'off',
    // 强制每行的最大属性数 https://eslint.vuejs.org/rules/max-attributes-per-line.html
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 30
      },
      'multiline': {
        'max': 30
      }
    }],
    // 组件标签顺序 https://eslint.vuejs.org/rules/component-tags-order.html
    'vue/component-tags-order': ['error', {
      'order': ['script', 'template', 'style']
    }],
    // 禁止使用 v-html 来防止 XSS 攻击 https://eslint.vuejs.org/rules/no-v-html.html
    'vue/no-v-html': 'error',
    // v-bind 当 value 为时需要简写形式属性 true https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
    'vue/prefer-true-attribute-shorthand': 'error',
    // 禁止注册不在模板中使用的组件 https://eslint.vuejs.org/rules/no-unused-components.html
    'vue/no-unused-components': 'error',
    // 可以使用单标签的强制使用单标签 https://eslint.vuejs.org/rules/html-self-closing.html
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    // 强制 html 闭合标签 https://eslint.vuejs.org/rules/html-end-tags.html
    'vue/html-end-tags': 'error',
    // template 的缩进规则 https://eslint.vuejs.org/rules/html-indent.html#vue-html-indent
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    // 为模板中的组件命名样式强制执行特定的大小写 https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false
      }
    ],
    // 对模板中的自定义组件强制执行属性命名样式 https://eslint.vuejs.org/rules/attribute-hyphenation.html#vue-attribute-hyphenation
    'vue/attribute-hyphenation': 'error',
    // Prop 名称强制使用特定大小写 https://eslint.vuejs.org/rules/prop-name-casing.html
    'vue/prop-name-casing': 'error',
    // 强制执行 v-on 事件命名样式 https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
    'vue/v-on-event-hyphenation': 'error',
    // 不允许字段名称重复 https://eslint.vuejs.org/rules/no-dupe-keys.html
    "vue/no-dupe-keys": "error",
    // 禁止 v-if / v-else-if 链中的重复条件
    'vue/no-dupe-v-else-if': 'error',
    // 不允许重复属性 https://eslint.vuejs.org/rules/no-duplicate-attributes.html
    'vue/no-duplicate-attributes': ["error", {
      "allowCoexistClass": true,
      "allowCoexistStyle": true
    }],
    // 不允许 export 进入 <script setup> https://eslint.vuejs.org/rules/no-export-in-script-setup.html
    'vue/no-export-in-script-setup': 'error'

  },

  parser: 'vue-eslint-parser', // https://stackoverflow.com/questions/66597732/eslint-vue-3-parsing-error-expected-eslint
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解决引入 type {} 报错问题
  }
}