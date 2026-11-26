import js from '@eslint/js'
import react from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import { reactRefresh } from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig(
  globalIgnores(['dist/']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended],
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    extends: [react.configs.recommended],
    settings: { 'react-x': { version: '18.2' } },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['src/**/*.jsx'],
    ignores: ['src/CartSlice.jsx'],
    plugins: { 'react-refresh': reactRefresh.plugin },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
)
