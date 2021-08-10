import path from 'path'
import Email from 'email-templates'
import transporter from 'config/nodemailer'
import glob from 'glob'
import config from 'config'

import { toSnakeCase } from '@datage/rest-api'

import type { Transporter, SentMessageInfo } from 'nodemailer'

export interface BaseLocalsProps {
  baseUrl: string
}

class BaseMailer {
  templateName: string | undefined
  subject: string | undefined
  from = config.fromEmail
  to: string | undefined
  locals: Record<string, any> | undefined

  template(): string {
    return this.templateName || toSnakeCase(this.constructor.name.replace(/mailer/i, ''))
  }

  // https://nodemailer.com/message/attachments/
  attachments(): any[] {
    return []
  }

  sendEmail(): boolean {
    return true
  }

  preview(): boolean | { open: { app: string; wait: boolean } } {
    return config.isDevelopment
      ? {
          open: {
            app: 'chrome',
            wait: false
          }
        }
      : false
  }

  transporter(): Transporter<SentMessageInfo> {
    return transporter
  }

  public async send(): Promise<any> {
    const email = new Email({
      transport: this.transporter(),
      send: this.sendEmail(),
      preview: this.preview(),
      message: {
        from: this.from,
        to: this.to,
        attachments: this.attachments()
      },
      views: {
        // directory where email templates reside
        root: path.resolve('src/mailers/templates'),
        options: {
          // default file extension for template
          extension: 'handlebars',
          map: {
            hbs: 'handlebars'
          }
        },
        locals: {
          ...this.locals,
          baseUrl: config.baseUrl
        }
      },
      getPath: (type: string, template: string, _locals: any): string => {
        const files = glob.sync(path.resolve('src/mailers/templates', template, `${type}.*`), {})
        return files[0]
      },
      // render: async (views: string, locals: Record<string, any>) => {
      //   const Component: FC<any> = require(path.resolve('src/mailers/templates', views)).default
      //   console.log(Component)
      //   const value = ReactDOMServer.renderToString(<Component {...locals} />)
      //   console.log(value)
      //   return value
      // },
      htmlToText: false
    })
    return await email.send({
      template: this.template()
    })
  }
}

export default BaseMailer
