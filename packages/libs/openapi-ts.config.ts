// https://heyapi.dev/openapi-ts/configuration
import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input:
    './schema/openapi.json',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: '../web-api-fastify',
  },
  plugins: [
    '@hey-api/client-fetch',
    '@hey-api/schemas',
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
    },
  ],
});
