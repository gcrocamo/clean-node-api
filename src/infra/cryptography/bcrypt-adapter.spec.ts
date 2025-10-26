import bcrypt from 'bcrypt'
import { BcrypAdapter } from './bcrypt-adapter'

describe('Bcrypt Adapter', () => {
  test('should call bcrypt with correct value', () => {
    const salt = 12
    const sut = new BcrypAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
