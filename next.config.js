/* global require, module, __dirname */
/* eslint @typescript-eslint/no-var-requires: off */

const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
require('ts-node/register')
const { default: config } = require('./src/config/index')

const sharedConfig = {
  baseUrl: config.baseUrl,
  defaultLocale: config.defaultLocale,
  graphqlServer: config.graphqlServer
}

const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    ...sharedConfig,
    rollbarServerToken: config.rollbarServerToken,
    cors: {
      methods: ['GET', 'HEAD', 'POST', 'PATCH', 'PUT', 'DELETE'],
      origin: config.isDevelopment ? '*' : sharedConfig.baseUrl,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      credentials: true // needed if session is passed via cookies
    },
    pages: {
      signInUrl: '/auth/signin',
      // signOutUrl: '/auth/login',
      newUserUrl: '/portal'
    }
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    ...sharedConfig,
    rollbarClientToken: config.rollbarClientToken,
    googleAnalyticsKey: config.googleAnalyticsKey
  },
  i18n: {
    locales: config.locales,
    defaultLocale: config.defaultLocale,
    domains: [
      {
        domain: config.baseUrl,
        defaultLocale: config.defaultLocale
      }
    ]
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias.components = path.resolve(__dirname, 'src/components')
    webpackConfig.resolve.alias.helpers = path.resolve(__dirname, 'src/helpers')
    webpackConfig.resolve.alias.config = path.resolve(__dirname, 'src/config')
    webpackConfig.resolve.alias.queries = path.resolve(__dirname, 'src/queries')
    webpackConfig.resolve.alias.resolvers = path.resolve(__dirname, 'src/resolvers')
    webpackConfig.resolve.alias.generated = path.resolve(__dirname, 'prisma/generated')
    webpackConfig.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })
    webpackConfig.resolve.extensions.push('.graphql')

    // Important: return the modified config
    return webpackConfig
  }
}
const pwaConfig = {
  pwa: {
    dest: 'public',
    runtimeCaching
  }
}

module.exports = config.isDevelopment ? nextConfig : withPWA({ ...nextConfig, ...pwaConfig })
