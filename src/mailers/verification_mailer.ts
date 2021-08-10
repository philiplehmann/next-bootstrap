import BaseMailer from './base_mailer'
import config from 'config'

import type { User } from 'generated/typegraphql-prisma'

class VerificationMailer extends BaseMailer {
  constructor(user: User) {
    super()
    if (!user.emailVerificationToken) throw new Error('user does not have an emailVerificationToken')
    this.to = user.email || ''
    this.templateName = 'verification'
    this.locals = {
      user,
      baseUrl: config.baseUrl
    }
  }
}

export default VerificationMailer
