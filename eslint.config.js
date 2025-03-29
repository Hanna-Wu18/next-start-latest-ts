import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/.next',
      '**/node_modules',
      '**/.vscode',
      '**/package-lock.json',
      '**/eslint.config.js',
      '**/dist',
      '**/pnpm-lock.yaml',
      '**/yarn.lock',
      '**/.temp',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'next',
      'next/typescript',
      'next/core-web-vitals',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended'
    )
  ),
  {
    plugins: {
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      react: fixupPluginRules(react),
      prettier: fixupPluginRules(prettier),
      'typescript-eslint': fixupPluginRules(ts),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        createDefaultProgram: false,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        alias: {
          map: [['@', '.']],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.css',
            '.module.css',
            '.scss',
            '.json',
          ],
        },
      },
    },
    rules: {
      // unused vars rules replaced with typescript-eslint rules
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/label-has-for': 'off',
      'prettier/prettier': 'warn',
    },
  },
]
