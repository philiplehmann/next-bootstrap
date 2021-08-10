import nodemailer from 'nodemailer'
import config from 'config'

// configuration on https://nodemailer.com/
const production = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail'
})

const development = nodemailer.createTransport({
  port: 1025,
  host: 'localhost',
  ignoreTLS: true
})

export default config.isProduction ? production : development
