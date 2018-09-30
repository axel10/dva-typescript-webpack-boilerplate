import { Address } from 'src/types/Index/Address'
import { Company } from 'src/types/Index/Company'

export class User {
  public id: number
  public name: string
  public email: string
  public address: Address
  public phone: string
  public website: string
  public company: Company
}
