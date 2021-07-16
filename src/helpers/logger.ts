import colors from 'colors/safe'

class Logger {
  log(...args: any[]): void {
    // eslint-disable-next-line
    console.log(...this.format(args, colors.reset))
  }
  warn(...args: any[]): void {
    // eslint-disable-next-line
    console.log(...this.format(args, colors.yellow))
  }
  info(...args: any[]): void {
    // eslint-disable-next-line
    console.log(...this.format(args, colors.gray))
  }
  error(...args: any[]): void {
    // eslint-disable-next-line
    console.log(...this.format(args, colors.red))
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
