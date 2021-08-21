
import { Component, OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as customerActions from "../state/customer.actions";
import * as customerSelectorsEntity from "../state/customer.selectors";
import { Customer } from "../customer.model";
import { StoreInterface } from "src/app/store/store";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<String>;

  constructor(private store: Store<StoreInterface>,private actifRoute:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.store.dispatch(new customerActions.LoadCustomers());

    this.customers$ = this.store.select(customerSelectorsEntity.getCustomers);
    this.error$ = this.store.pipe(select(customerSelectorsEntity.getError));
    this.actifRoute.data.subscribe(data=>console.log(data.source));

  }

  deleteCustomer(customer: Customer) {
    if (confirm("Are You Sure You want to Delete the User?")) {
      this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
    }
  }

  editCustomer(customer: Customer) {
    this.store.dispatch(new customerActions.LoadCustomer(customer.id));

  }
}


