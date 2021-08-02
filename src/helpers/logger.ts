import colors from 'colors/safe'

const checkError = (args: any[]): any[] => {
  const first = args.shift()
  args.unshift(first instanceof Error ? `${first.message}\n${first.stack}` : first)
  return args
}

const isNode = typeof window === 'undefined'

class Logger {
  log(...args: any[]): void {
    // eslint-disable-next-line
    isNode ? console.log(...this.format(checkError(args), colors.reset)) : console.log(...args)
  }
  warn(...args: any[]): void {
    // eslint-disable-next-line
    isNode ? console.warn(...this.format(checkError(args), colors.yellow)) : console.warn(...args)
  }
  info(...args: any[]): void {
    // eslint-disable-next-line
    isNode ? console.info(...this.format(checkError(args), colors.gray)) : console.info(...args)
  }
  error(...args: any[]): void {
    // eslint-disable-next-line
    isNode ? console.error(...this.format(checkError(args), colors.red)) : console.error(...args)
  }

  private format(args: any[], formatter: (value: string) => string): any[] {
    return args.map((entry: any) => {
      return typeof entry === 'string' ? formatter(entry) : entry
    })
  }
}

// create default logger
export const logger = new Logger()

export default Logger
