import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customers.component';
import { Routes,RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from "@angular/forms";


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from './state/customer.effects';
import { customerReducerEntity } from './state/customerEntity.reducer';
import { customerReducer } from './state/customer.reducer';

const routes:Routes=[
  {
    path:"",
    component:CustomerComponent
  }
]
@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature("customers",customerReducerEntity),
    EffectsModule.forFeature([CustomerEffect]),

  ]
})
export class CustomersModule { }
