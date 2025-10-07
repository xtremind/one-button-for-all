// @ts-check

import globals from 'globals'
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
    {ignores: ['dist/**', 'node_modules/**']},
    {languageOptions: {globals: 
        {
            ...globals.browser,
            ...globals.node
    
        }
    }},
    eslint.configs.recommended,
    tseslint.configs.recommended,
);