import { MissingParamError } from '../../errors'
import { ValidationComposite } from './validation-composite'
import type { Validation } from './validation'

const makeSut = (): ValidationComposite => {
  return new ValidationComposite([new ValidationStub()])
}

class ValidationStub implements Validation {
  validate (input: any): Error {
    return new MissingParamError('field')
  }
}
describe('ValidationComposite', () => {
  test('Should return an error if any validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
