import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";




@Injectable({
  providedIn: "root"
})
export class CustomerService{
  private url:string='https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient){}

  getAllCustomers(){
    return this.httpClient.get<Customer[]>(this.url)
  }

  getAll(){
    const promise=new Promise((resolve,reject)=>{
      this.httpClient.get<Customer[]>(this.url)
      .subscribe
      ({
        next:(customers:Customer[])=>resolve(customers),
        error:(err)=>reject(err),
        complete:()=>console.log('Completed')
      })

    })
    return promise;
  }

}
