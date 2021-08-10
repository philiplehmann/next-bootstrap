export { createApolloClient } from './apollo_client'
// export { elasticsearch } from './elasticsearch'

class Config {
  get env(): string {
    return this.fetch('NODE_ENV', 'development')
  }

  get isDevelopment(): boolean {
    return this.env === 'development'
  }

  get isProduction(): boolean {
    return this.env === 'production'
  }

  get baseUrl(): string {
    return this.fetch('BASE_URL', 'http://localhost:5000')
  }

  port(defaultPort: string) {
    return this.fetch('PORT', defaultPort)
  }

  get corsOrigin(): string {
    return this.fetch('CORS_ORIGIN', this.baseUrl)
  }

  get corsMethods(): string {
    return this.fetch('CORS_METHODS', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  }

  get graphqlServer(): string {
    return this.fetch('GRAPHQL_SERVER', 'http://lcoalhost:5100/graphql')
  }

  get locales(): string[] {
    const locales = this.fetch('LOCALES', 'en')
    return locales.split(',')
  }

  get defaultLocale(): string {
    return this.fetch('DEFAULT_LOCALE', 'en')
  }

  get rollbarServerToken(): string | null {
    return this.fetch('ROLLBAR_SERVER_TOKEN', null)
  }

  get rollbarClientToken(): string | null {
    return this.fetch('ROLLBAR_CLIENT_TOKEN', null)
  }

  get googleAnalyticsKey(): string | null {
    return this.fetch('GOOGLE_ANALYTICS_KEY', null)
  }

  get elasticsearchUrl(): string {
    return this.fetch('ELASTICSEARCH_URL', 'http://localhost:9200')
  }

  get nextAuthSecret(): string {
    return this.fetch('NEXTAUTH_SECRET')
  }

  get fromEmail(): string {
    return this.fetch('FROM_EMAIL', 'noreply@example.com')
  }

  private fetch<T>(key: string, defaultValue?: T): string | T {
    const value = process.env[key]
    if (value) return value
    if (defaultValue !== undefined) return defaultValue
    throw new Error(`ENV ${key} is not defined`)
  }
}

export default new Config()
