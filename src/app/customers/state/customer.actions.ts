import { Action } from "@ngrx/store";
import { Customer } from "../customer.model";


export enum CustomerActionTypes{
  LOAD_CUSTOMERS='[Customer] Load Customers',
  LOAD_CUSTOMERS_SUCCESS='[Customer] Load Customers Success',
  LOAD_CUSTOMERS_FAIL='[Customer] Load Customers Fail'

}

export class LoadCustomers implements Action{
  readonly type=CustomerActionTypes.LOAD_CUSTOMERS

}

export class LoadCustomersSuccess implements Action{
  readonly type=CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS
  payload:Customer[]
  constructor(payload:Customer[]){
    this.payload=payload
  }

}

export class LoadCustomersFail implements Action{
  readonly type=CustomerActionTypes.LOAD_CUSTOMERS_FAIL
  payload:string

  constructor(payload:string){
    this.payload=payload

  }
}


export type Actions=LoadCustomers | LoadCustomersSuccess | LoadCustomersFail
