import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { ReactThreeFiber } from '@react-three/fiber';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@react-three': ReactThreeFiber,
    },
    ignores: ['node_modules/*'],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      // 'react/no-unknown-property': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
      semi: ['error', 'always'],
      'no-loop-func': ['error'],
      'block-spacing': ['error', 'always'],
      camelcase: ['error'],
      eqeqeq: ['error', 'always'],
      strict: ['error', 'global'],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      'comma-style': ['error', 'last'],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'eol-last': ['error'],
      'func-call-spacing': ['error', 'never'],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          mode: 'minimum',
        },
      ],
      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
          overrides: {
            function: {
              after: false,
            },
          },
        },
      ],
      'max-len': [
        'error',
        {
          code: 80,
          ignoreUrls: true,
        },
      ],
      'max-nested-callbacks': [
        'error',
        {
          max: 7,
        },
      ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: true,
          properties: true,
        },
      ],
      'new-parens': ['error'],
      'no-lonely-if': ['error'],
      'no-trailing-spaces': ['error'],
      'no-unneeded-ternary': ['error'],
      'no-whitespace-before-property': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
          },
        },
      ],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': ['error'],
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
          overrides: {
            typeof: false,
          },
        },
      ],
      'no-unreachable': ['error'],
      'no-global-assign': ['error'],
      'no-self-compare': ['error'],
      'no-unmodified-loop-condition': ['error'],
      'no-constant-condition': [
        'error',
        {
          checkLoops: false,
        },
      ],
      'no-console': ['off'],
      'no-useless-concat': ['error'],
      'no-useless-escape': ['error'],
      'no-shadow-restricted-names': ['error'],
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-spacing': ['error'],
      'no-confusing-arrow': 0,
      'no-useless-computed-key': ['error'],
      'no-useless-rename': ['error'],
      'no-var': ['error'],
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': ['error'],
      'prefer-const': ['error'],
      'prefer-numeric-literals': ['error'],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error'],
      'rest-spread-spacing': ['error', 'never'],
      'template-curly-spacing': ['error', 'never'],
      'consistent-return': [
        'error',
        {
          treatUndefinedAsUnspecified: true,
        },
      ],
      'constructor-super': ['error'],
      'for-direction': ['error'],
      'getter-return': ['error'],
      'no-async-promise-executor': ['error'],
      'no-case-declarations': ['error'],
      'no-class-assign': ['error'],
      'no-compare-neg-zero': ['error'],
      'no-cond-assign': ['error'],
      'no-const-assign': ['error'],
      'no-constant-binary-expression': ['error'],
      'no-control-regex': ['error'],
      'no-debugger': ['error'],
      'no-delete-var': ['error'],
      'no-dupe-args': ['error'],
      'no-dupe-class-members': ['error'],
      'no-dupe-else-if': ['error'],
      'no-dupe-keys': ['error'],
      'no-duplicate-case': ['error'],
      'no-empty': ['error'],
      'no-empty-character-class': ['error'],
      'no-empty-pattern': ['error'],
      'no-empty-static-block': ['error'],
      'no-ex-assign': ['error'],
      'no-extra-boolean-cast': ['error'],
      'no-fallthrough': ['error'],
      'no-func-assign': ['error'],
      'no-import-assign': ['error'],
      'no-invalid-regexp': ['error'],
      'no-irregular-whitespace': ['error'],
      'no-loss-of-precision': ['error'],
      'no-misleading-character-class': ['error'],
      'no-new-native-nonconstructor': ['error'],
      'no-nonoctal-decimal-escape': ['error'],
      'no-obj-calls': ['error'],
      'no-octal': ['error'],
      'no-prototype-builtins': ['error'],
      'no-redeclare': ['error'],
      'no-regex-spaces': ['error'],
      'no-self-assign': ['error'],
      'no-setter-return': ['error'],
      'no-sparse-arrays': ['error'],
      'no-this-before-super': ['error'],
      'no-undef': ['error'],
      'no-unexpected-multiline': 0,
      'no-unsafe-finally': ['error'],
      'no-unsafe-negation': ['error'],
      'no-unsafe-optional-chaining': ['error'],
      'no-unused-labels': ['error'],
      'no-unused-private-class-members': ['error'],
      'no-unused-vars': ['error'],
      'no-useless-backreference': ['error'],
      'no-useless-catch': ['error'],
      'no-with': ['error'],
      'require-yield': ['error'],
      'use-isnan': ['error'],
      'valid-typeof': ['error'],
      curly: ['error', 'multi-line', 'consistent'],
      'space-unary-word-ops': 'off',
      'generator-star': 'off',
      'no-comma-dangle': 'off',
      'no-reserved-keys': 'off',
      'no-space-before-semi': 'off',
      'no-wrap-func': 'off',
      'space-after-function-name': 'off',
      'space-before-function-parentheses': 'off',
      'space-in-brackets': 'off',
      'no-arrow-condition': 'off',
      'space-after-keywords': 'off',
      'space-before-keywords': 'off',
      'space-return-throw-case': 'off',
      'no-spaced-func': 'off',
      'indent-legacy': 'off',
      'array-bracket-newline': 'off',
      'array-bracket-spacing': 'off',
      'array-element-newline': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'computed-property-spacing': 'off',
      'dot-location': 'off',
      'function-call-argument-newline': 'off',
      'function-paren-newline': 'off',
      'generator-star-spacing': 'off',
      'implicit-arrow-linebreak': 'off',
      'jsx-quotes': 'off',
      'lines-around-comment': 0,
      'max-statements-per-line': 'off',
      'multiline-ternary': 'off',
      'newline-per-chained-call': 'off',
      'no-extra-parens': [
        'error',
        'all',
        {
          returnAssign: false,
          nestedBinaryExpressions: false,
          enforceForArrowConditionals: false,
        },
      ],
      'no-extra-semi': 'off',
      'no-floating-decimal': 'off',
      'no-mixed-operators': 0,
      'no-mixed-spaces-and-tabs': 'off',
      'no-multi-spaces': 'off',
      'no-multiple-empty-lines': 'off',
      'no-tabs': 0,
      'nonblock-statement-body-position': 'off',
      'object-curly-newline': 'off',
      'object-property-newline': 'off',
      'one-var-declaration-per-line': 'off',
      'padded-blocks': 'off',
      'quote-props': 'off',
      'semi-style': 'off',
      'switch-colon-spacing': 'off',
      'template-tag-spacing': 'off',
      'wrap-iife': 'off',
      'wrap-regex': 'off',
      'yield-star-spacing': 'off',
      'no-return-assign': ['error'],
      'handle-callback-err': ['error', '^err'],
      'no-nested-ternary': ['error'],
      'no-invalid-this': ['error'],
      'class-methods-use-this': ['warn'],
    },
  },
];