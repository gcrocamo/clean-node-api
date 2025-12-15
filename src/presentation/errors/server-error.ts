export class ServerError extends Error {
  constructor (stack: string) {
    super('Internal Server Error, help me')
    this.name = 'ServerError'
    this.stack = stack
  }
}
