// @ts-check
import globals from 'globals';
import jsPlugin from '@eslint/js';
import tsPlugin from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default [
  jsPlugin.configs.recommended,
  ...tsPlugin.configs.recommended,
  reactPlugin.configs.flat?.recommended,
  reactPlugin.configs.flat?.['jsx-runtime'],
  jsxA11yPlugin.flatConfigs.strict,
  prettierPlugin,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      'react-hooks': hooksPlugin,
      '@next/next': nextPlugin,
    },
  },
  {
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...hooksPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/jsx-max-depth': ['error', { max: 5 }],
      'prefer-const': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['.next/*'],
  },
];
