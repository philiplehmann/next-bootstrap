/* global require, module, __dirname, process */
/* eslint @typescript-eslint/no-var-requires: off */

require('reflect-metadata')
const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const sharedConfig = {
  env: process.env.NODE_ENV || 'development',
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  defaultLocale: process.env.DEFAULT_LOCALE || 'en'
}

module.exports = withPWA({
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    ...sharedConfig,
    rollbarServerToken: process.env.ROLLBAR_SERVER_TOKEN,
    cors: {
      // methods: ['GET', 'HEAD'],
      origin: sharedConfig.baseUrl,
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    ...sharedConfig,
    rollbarClientToken: process.env.ROLLBAR_CLIENT_TOKEN,
    googleAnalyticsKey: process.env.GOOGLE_ANALYTICS_KEY
  },
  i18n: {
    locales: ['en'],
    defaultLocale: sharedConfig.defaultLocale,
    domains: [
      {
        domain: sharedConfig.baseUrl,
        defaultLocale: sharedConfig.defaultLocale
      }
    ]
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  webpack: (config) => {
    config.resolve.alias.components = path.resolve(__dirname, 'components')
    config.resolve.alias.helpers = path.resolve(__dirname, 'helpers')
    config.resolve.alias.config = path.resolve(__dirname, 'config')
    config.resolve.alias.generated = path.resolve(__dirname, 'prisma/generated')

    // Important: return the modified config
    return config
  }
})
