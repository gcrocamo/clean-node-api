import bcrypt from 'bcrypt'
import { BcrypAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

describe('Bcrypt Adapter', () => {
  test('should call bcrypt with correct value', async () => {
    const salt = 12
    const sut = new BcrypAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
  test('should return a hash on success', async () => {
    const salt = 12
    const sut = new BcrypAdapter(salt)
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
