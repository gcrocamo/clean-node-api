import bcrypt from 'bcrypt'
import type { Encrypter } from '../../data/protocols/encrypter'

export class BcrypAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async encrypt (value: string): Promise<string> {
    await bcrypt.hash(value, 12)
    return new Promise(resolve => resolve(''))
  }
}
