/* global module */
/* eslint @typescript-eslint/no-var-requires: off */
require('reflect-metadata')
const { buildSchemaSync } = require('type-graphql')
const { resolvers } = require('./prisma/generated/typegraphql-prisma')
const { printSchema } = require('graphql')

const schema = buildSchemaSync({
  resolvers
})

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended'
  ],
  plugins: ['babel', 'react', 'prettier', 'graphql'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',
    'react/prop-types': 'off',
    'graphql/template-strings': [
      'error',
      {
        // Import default settings for your GraphQL client. Supported values:
        // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
        env: 'apollo',

        // Import your schema JSON here
        // schemaJson: require('./schema.json'),

        // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
        // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

        // OR provide the schema in the Schema Language format
        schemaString: printSchema(schema)

        // tagName is gql by default
      }
    ]
  },
  ignorePatterns: [
    'public/sw.js',
    'public/workbox-*.js',
    'public/sw.js.map',
    'public/workbox-*.js.map'
  ]
}
