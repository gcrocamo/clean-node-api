import { InvalidParamError } from '../../errors'
import type { Validation } from '../../protocols/validation'
import type { EmailValidator } from '../../protocols/email-validator'

export class EmailValidation implements Validation {
  private readonly fieldName: string
  private readonly emailValidator: EmailValidator

  constructor (fieldName: string, emailValidator: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidator = emailValidator
  }

  validate (input: any): Error | null {
    const isValid = this.emailValidator.isValid(input[this.fieldName] as string)
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}
