import { Action } from "@ngrx/store"

export const SUCCESS="[todos] success"
export const FAILURE="[todos] failure"
export const LOAD="[todos] load"


export class LoadTodosAction implements Action{
  type: string=LOAD

}


export class SuccessTodosAction implements Action{
  type: string=SUCCESS
  payload:any
  constructor(payload:any){
    this.payload=payload
  }

}


export class TodoFailure implements Action{
  type: string=FAILURE
  payload:any
  constructor(payload:any){
    this.payload=payload
  }

}
