import { Entity, Key } from "@briebug/ngrx-auto-entity";

@Entity({modelName:'user',uriName:'users'})
export class User{
  @Key id:number
  name:string
  username:string
  email:string
  phone:string
}
