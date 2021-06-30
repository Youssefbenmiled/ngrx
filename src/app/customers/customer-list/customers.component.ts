import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/store/store';
import { Customer } from '../customer.model';
import  * as CustomerActions  from '../state/customer.actions';
import * as CustomerReducerSelector from '../state/customer.reducer';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Observable<Customer[]>;

  constructor(private store:Store<StoreInterface>) { }

  ngOnInit(): void {

   this.store.dispatch(new CustomerActions.LoadCustomers())
  this.customers= this.store.pipe(
      select(CustomerReducerSelector.getCustomers)
    )
  //  this.store.subscribe((state)=>this.customers=state.customers.customers)
  }

}


 //   const customers:Customer[]=[
  //     {
  //     id:70,
  //     address:'rades',
  //     membership:'gold',
  //     name:'mpdam',
  //     phone:'25 589 362'
  //     },
  //     {
  //       id:45,
  //       address:'tunis',
  //       membership:'gold4',
  //       name:'pfe',
  //       phone:'25 789 362'
  //     }
  // ]
