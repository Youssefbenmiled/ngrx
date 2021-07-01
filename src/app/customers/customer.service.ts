import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
        // complete:()=>console.log('Completed')
      })

    })
    return promise;
  }


  getCustomerById(id:number){
    const promise=new Promise((resolve,reject)=>{
      this.httpClient.get<any>(this.url)
      .subscribe
      ({
        next:(customers:any)=>
        {
          const customer:Customer=customers.find(c=>c.id==id)
          return resolve(customer)
        },
        error:(err)=>reject(err),
        complete:()=>console.log('Completed customer by id')
      })

    })
    return promise;
  }

  createCustomer(customer:Customer):Promise<Customer>{
    const promise=new Promise<Customer>((resolve,reject)=>{
     setTimeout(() => {
      //  const customer:Customer={address:'createdAddress',
      //  membership:'createdMship',
      //  name:'createdName',
      //  phone:'createdPhone',
      //  id:58965
      // }
       resolve({...customer,id:11})
     }, 1000);
    })
    return promise;
  }

  updateCustomer(customer:Customer):Promise<Customer>{
    const promise=new Promise<Customer>((resolve,reject)=>{
     setTimeout(() => {
      //  const customer:Customer={address:'createdAddress',
      //  membership:'createdMship',
      //  name:'createdName',
      //  phone:'createdPhone',
      //  id:58965
      // }
       resolve(customer)
     }, 1000);
    })
    return promise;
  }


  deleteCustomer(id:number):Observable<any>{
    return new Observable(
      (sub)=>{
        sub.next('deleted '+id),
        sub.error('err '+id),
        sub.complete()
      }
    )
  }


}
