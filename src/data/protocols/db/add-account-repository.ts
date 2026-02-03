import type { AddAccountModel } from '../../../domain/usecases/add-account'
import type { AccountModel } from '../../usecases/add-account/db-add-account-protocols'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise <AccountModel>
}
