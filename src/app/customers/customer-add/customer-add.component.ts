import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControlName } from "@angular/forms";
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerForm:FormGroup;
  constructor(private fb: FormBuilder,) {
   }


  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      membership: ["", Validators.required]
    });
  }

  createCustomer(){}

}
