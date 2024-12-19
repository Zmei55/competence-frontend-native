import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended',
      'plugin:import/recommended',
      'prettier'
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      prettier: fixupPluginRules(prettier),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: '.',
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
      react: {
        version: '18.x',
      },
    },
    rules: {
      semi: ['warn', 'always'],
      'no-unused-vars': 'warn',
      'linebreak-style': 'off',
      'react/prop-types': 0,
      'import/no-named-as-default': 'off',
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          jsxBracketSameLine: false,
          arrowParens: 'avoid',
          proseWrap: 'always',
        },
      ],
      'react-hooks/exhaustive-deps': 'off',
      'object-shorthand': 'error',
      'no-console': 'warn',
      'react/jsx-indent': 0,
      'implicit-arrow-linebreak': 0,
      'function-paren-newline': 0,
      'no-param-reassign': 0,
      'no-nested-ternary': 0,
      'no-confusing-arrow': 0,
      'operator-linebreak': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'react/jsx-one-expression-per-line': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'default-case': 0,
    },
  },
];
