import { Update } from "@ngrx/entity";
import { Action } from "@ngrx/store";
import { Customer } from "../customer.model";


export enum CustomerActionTypes{
  LOAD_CUSTOMERS='[Customers] Load Customers',
  LOAD_CUSTOMERS_SUCCESS='[Customers] Load Customers Success',
  LOAD_CUSTOMERS_FAIL='[Customers] Load Customers Fail',

  LOAD_CUSTOMER='[Customer] Load Customer',
  LOAD_CUSTOMER_SUCCESS='[Customer] Load Customer Success',
  LOAD_CUSTOMER_FAIL='[Customer] Load Customer Fail',

  CREATE_CUSTOMER='[Customer] create Customer',
  CREATE_CUSTOMER_SUCCESS='[Customer] create Customer Success',
  CREATE_CUSTOMER_FAIL='[Customer] create Customer Fail',

  UPDATE_CUSTOMER='[Customer] update Customer',
  UPDATE_CUSTOMER_SUCCESS='[Customer] update Customer Success',
  UPDATE_CUSTOMER_FAIL='[Customer] update Customer Fail',

  DELETE_CUSTOMER='[Customer] delete Customer',
  DELETE_CUSTOMER_SUCCESS='[Customer] delete Customer Success',
  DELETE_CUSTOMER_FAIL='[Customer] delete Customer Fail',

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


export class LoadCustomer implements Action{
  readonly type=CustomerActionTypes.LOAD_CUSTOMER
  constructor(public payload:number){
  }
}

export class LoadCustomerSuccess implements Action{
  readonly type=CustomerActionTypes.LOAD_CUSTOMER_SUCCESS
  constructor(public payload:Customer){
  }

}

export class LoadCustomerFail implements Action{
  readonly type=CustomerActionTypes.LOAD_CUSTOMER_FAIL
  payload:string

  constructor(payload:string){
    this.payload=payload

  }
}


export class CreateCustomer implements Action{
  readonly type=CustomerActionTypes.CREATE_CUSTOMER
  constructor(public payload:Customer){
  }
}

export class CreateCustomerSuccess implements Action{
  readonly type=CustomerActionTypes.CREATE_CUSTOMER_SUCCESS
  constructor(public payload:Customer){
  }

}

export class CreateCustomerFail implements Action{
  readonly type=CustomerActionTypes.CREATE_CUSTOMER_FAIL
  payload:string

  constructor(payload:string){
    this.payload=payload

  }
}

export class UpdateCustomer implements Action{
  readonly type=CustomerActionTypes.UPDATE_CUSTOMER
  constructor(public payload:Customer){
  }
}

export class UpdateCustomerSuccess implements Action{
  readonly type=CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS
  constructor(public payload:Update<Customer>){
  }

}

export class UpdateCustomerFail implements Action{
  readonly type=CustomerActionTypes.UPDATE_CUSTOMER_FAIL
  payload:string

  constructor(payload:string){
    this.payload=payload

  }
}

export class DeleteCustomer implements Action{
  readonly type=CustomerActionTypes.DELETE_CUSTOMER
  constructor(public payload:number){
  }
}

export class DeleteCustomerSuccess implements Action{
  readonly type=CustomerActionTypes.DELETE_CUSTOMER_SUCCESS
  constructor(public payload:number){
  }

}

export class DeleteCustomerFail implements Action{
  readonly type=CustomerActionTypes.DELETE_CUSTOMER_FAIL
  payload:string

  constructor(payload:string){
    this.payload=payload

  }
}


export type Actions=
LoadCustomers | LoadCustomersSuccess | LoadCustomersFail|
LoadCustomer | LoadCustomerSuccess | LoadCustomerFail|
CreateCustomer | CreateCustomerSuccess | CreateCustomerFail|
UpdateCustomer | UpdateCustomerSuccess | UpdateCustomerFail|
DeleteCustomer | DeleteCustomerSuccess | DeleteCustomerFail
