import { Action } from "@ngrx/store";



export const INCREAMENT="[COUNTER] increament"
export const DEACREMENT="[COUNTER] decreament"




export class IncrementAction implements Action{
  type: string=INCREAMENT;
  payload: number;
  constructor(payload:number){
    this.payload=payload
  }

}


export class DecrementAction implements Action{
  type: string=DEACREMENT;
  payload: number;
  constructor(payload:number){
    this.payload=payload
  }

}
