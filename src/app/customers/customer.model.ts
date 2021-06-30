export class Customer{
  id?:number
  name:string;
  phone:string;
  address:string;
  membership:string;
  constructor(name:string,phone:string,address:string,membership:string,id?:number){
    this.name=name;
    this.phone=phone;
    this.address=address;
    this.membership=membership;
    this.id=id

  }
}

export interface Customer{
  id?:number
  name:string;
  phone:string;
  address:string;
  membership:string;
}
