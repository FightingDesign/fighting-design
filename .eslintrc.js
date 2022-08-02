// script: "lint": "eslint 'packages/**/*.{js,ts,vue,jsx,tsx}'"
/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    '@eslint-sets/vue3-ts' // @eslint-sets/eslint-config-vue3-ts
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser', // @typescript-eslint/parser
    sourceType: 'module',
    ecmaVersion: 'latest',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  root: true,
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'one-var': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
    'eol-last': 'error',
    'import/no-unresolved': 'error', // 必须存在真实路径，避免大小写不敏感带来的问题
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        'd.ts': 'never',
        vue: 'never'
      }
    ],
    'prettier/prettier': 'off',
    'no-tabs': 'error',
    indent: 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    semi: ['error', 'never'],
    'object-curly-spacing': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    'import/order': 'off',
    'sort-imports': 'off',
    'lines-between-class-members': 'off',
    'space-before-function-paren': [
      'error',
      // { anonymous: 'never', named: 'never', asyncArrow: 'always' }
      { anonymous: 'ignore', named: 'always', asyncArrow: 'ignore' }
    ],
    'no-debugger': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    // https://eslint.vuejs.org/rules
    'tvue/attributes-order': 'off',
    'vue/script-setup-uses-vars': 'warn',
    'vue/no-v-html': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/no-unused-components': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'any',
          component: 'any'
        }
      }
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/attribute-hyphenation': 'error'
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }]
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'vars-on-top': 'off',
        'no-var': 'off',
        '@typescript-eslint/no-redeclare': 'off'
      }
    }
  ]
}
