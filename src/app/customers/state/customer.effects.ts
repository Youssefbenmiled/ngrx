import * as customerActions  from "./customer.actions";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer.model";


@Injectable({
  providedIn:'root'
})
export class CustomerEffect{

  constructor(private actions$:Actions,private customerService:CustomerService){

  }



  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
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
  //   this.actions$.pipe(
  //     ofType<customerActions.LoadCustomers>(customerActions.CustomerActionTypes.LOAD_CUSTOMERS),
  //     mergeMap(() => this.customerService.getAll()
  //     .then((customers:Customer[])=>new customerActions.LoadCustomersSuccess(customers))
  //     .catch((err) => new customerActions.LoadCustomersFail(err)))
  //   )
  // );

}
