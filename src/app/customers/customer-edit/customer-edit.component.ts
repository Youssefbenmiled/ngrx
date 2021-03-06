import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import * as customerActions from "../state/customer.actions";
import * as customerSelectorsEntity from "../state/customer.selectors";
import { Customer } from "../customer.model";
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<StoreInterface>
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      membership: ["", Validators.required],
      id: -1
    })


  }

  updateCustomer() {
    const customer$: Observable<Customer> = this.store.select(
      customerSelectorsEntity.getCurrentCustomer
    )

    customer$.subscribe(currentCustomer => {

      if (currentCustomer) {
        this.customerForm.setValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          membership: 'currentCustomer.membership',
          id: currentCustomer.id
        });
      }
    })
    const updatedCustomer: Customer = {
      name: this.customerForm.get("name").value,
      phone: this.customerForm.get("phone").value,
      address: this.customerForm.get("address").value,
      membership: this.customerForm.get("membership").value,
      id: this.customerForm.get("id").value
    };

    this.store.dispatch(new customerActions.UpdateCustomer(updatedCustomer))
  }

}
