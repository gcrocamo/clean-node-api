export class ServerError extends Error {
  constructor () {
    super('Internal Server Error, help me')
    this.name = 'ServerError'
  }
}
