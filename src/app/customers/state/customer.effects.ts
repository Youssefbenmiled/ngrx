import * as customerActions  from "./customer.actions";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer.model";
import { Action } from "@ngrx/store";


@Injectable({
  providedIn:'root'
})
export class CustomerEffect{

  constructor(private effectAdctions$:Actions,private customerService:CustomerService){}



  loadCustomers$:Observable<Action> = createEffect(() =>
    this.effectAdctions$.pipe(
      ofType<customerActions.LoadCustomers>(customerActions.CustomerActionTypes.LOAD_CUSTOMERS),
      mergeMap(() => this.customerService.getAllCustomers()
      .pipe(
          map((customers:Customer[]) => new customerActions.LoadCustomersSuccess(customers)),
          catchError((err) => of(new customerActions.LoadCustomersFail(err)))
        )
      )
    )
  );

  // loadCustomers$ = createEffect(() =>
  //   this.effectAdctions$.pipe(
  //     ofType<customerActions.LoadCustomers>(customerActions.CustomerActionTypes.LOAD_CUSTOMERS),
  //     mergeMap(() => this.customerService.getAll()
  //     .then((customers:Customer[])=>new customerActions.LoadCustomersSuccess(customers))
  //     .catch((err) => new customerActions.LoadCustomersFail(err)))
  //   )
  // );


  loadCustomer$:Observable<Action> = createEffect(() =>
    this.effectAdctions$.pipe(
      ofType<customerActions.LoadCustomer>(customerActions.CustomerActionTypes.LOAD_CUSTOMER),
      mergeMap((action:customerActions.LoadCustomer) =>
      this.customerService.getCustomerById(action.payload)
      .then((customer:Customer)=>new customerActions.LoadCustomerSuccess(customer))
      .catch((err) => new customerActions.LoadCustomerFail(err)))
      )
    );

    createCustomer$:Observable<Action> = createEffect(() =>
    this.effectAdctions$.pipe(
      ofType<customerActions.CreateCustomer>(customerActions.CustomerActionTypes.CREATE_CUSTOMER),
      map((action:customerActions.CreateCustomer)=>action.payload),
      mergeMap((newCustomer:Customer) =>
      this.customerService.createCustomer(newCustomer)
      .then((newCustomer:Customer)=>new customerActions.CreateCustomerSuccess(newCustomer))
      .catch((err) => new customerActions.CreateCustomerFail(err)))
      )
    );

    updateCustomer$:Observable<Action> = createEffect(() =>
    this.effectAdctions$.pipe(
      ofType<customerActions.UpdateCustomer>(customerActions.CustomerActionTypes.UPDATE_CUSTOMER),
      map((action:customerActions.UpdateCustomer)=>action.payload),
      mergeMap((updatedCustomer:Customer) =>
      this.customerService.updateCustomer(updatedCustomer)

      .then((updatedCustomer:Customer)=>new customerActions.UpdateCustomerSuccess({
        id:updatedCustomer.id,
        changes:updatedCustomer

      }))

      .catch((err) => new customerActions.UpdateCustomerFail(err)))
      )
    );

    deleteCustomer$:Observable<Action> = createEffect(() =>
    this.effectAdctions$.pipe(
      ofType<customerActions.DeleteCustomer>(customerActions.CustomerActionTypes.DELETE_CUSTOMER),
      map((action:customerActions.DeleteCustomer)=>action.payload),
      mergeMap((idCustomer:number) =>this.customerService.deleteCustomer(idCustomer)

      .pipe(
        map(() => new customerActions.DeleteCustomerSuccess(idCustomer)),
        catchError((err) => of(new customerActions.DeleteCustomerFail(err)))
       )

      )
    )
  );
}
