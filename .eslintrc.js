module.exports = {
  // babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint
  // https://www.npmjs.com/package/babel-eslint
  // http://eslint.org/docs/rules/

  /**
     *  'off' 或 0 - 关闭规则
     *  'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     *  'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    // experimentalDecorators: 0,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [2, 'always'],
    // 禁用 alert、confirm 和 prompt
    'no-alert': 1,
    // 禁用 console
    'no-console': 1,
    // 禁止空语句块
    'no-empty': 2,
    //  禁止不必要的括号 //(a * b) + c;//报错
    'no-extra-parens': 0,
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: [2, 'never'],
    // 要求箭头函数体使用大括号
    'arrow-body-style': 0,
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': [2, 'as-needed'],
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // 不允许对 function 的参数进行重新赋值
    'no-param-reassign': 0,
    // 禁止出现未使用过的变量
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    // 禁止 var 声明 与外层作用域的变量同名
    'no-shadow': 0,
    // 强制一行的最大长度
    'max-len': [1, 400],
    // 要求 require() 出现在顶层模块作用域中
    'global-require': 0,
    // 禁止 if 语句中有 return 之后有 else
    'no-else-return': 0,
    // 强制在 JSX 属性中一致地使用双引号或单引号
    quotes: [2, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 空格
    // 禁止 function 变量和括号之间出现空格
    'no-spaced-func': 'error',
    'func-call-spacing': ['error', 'never'],
    'keyword-spacing': ['error', { before: true }],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never'
      }
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, { functions: 'never' }],

    'array-element-newline': [2, { multiline: true, minItems: 2 }],
    'array-bracket-newline': [2, { multiline: true, minItems: 2 }],

    'import/first': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 'warn',
    'import/extensions': 0,
    'import/no-unresolved': 0,

    'jsx-a11y/label-has-for': 0,

    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-indent-props': [2, 2],
    'no-undef': 0,

    'operator-linebreak': ['error', 'after']

    // 'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
  }
}
