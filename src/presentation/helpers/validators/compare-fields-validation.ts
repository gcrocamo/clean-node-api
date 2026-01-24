import { InvalidParamError } from '../../errors'
import type { Validation } from './validation'

export class CompareFieldValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldToCompareName: string

  constructor (fieldName: string, fielToCompareName: string) {
    this.fieldName = fieldName
    this.fieldToCompareName = fielToCompareName
  }

  validate (input: any): Error | null {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
    return null
  }
}
