import crypto from 'crypto'

export const randomToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(48, (err, buffer) => {
      if (err) return reject(err)
      resolve(buffer.toString('hex'))
    })
  })
}
