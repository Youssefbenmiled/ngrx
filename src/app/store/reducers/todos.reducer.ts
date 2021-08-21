import { createSelector } from "@ngrx/store"
import { FAILURE, SUCCESS } from "../actions/todos.action"
import { CustomAction, StoreInterface } from "../store"

export interface ToDo{
  userId:number,
  id:number,
  title:string,
  completed:boolean
}
const initialState:ToDo[]=[{
userId:-1,
id:-1,
title:'abcd',
completed:false
}
]


export function toDoReducer(state=initialState,action:CustomAction){
  switch (action.type) {
    case SUCCESS:
      return action.payload

      case FAILURE:
      return state


    default:return state


  }

}


export const selectorApp=(state:StoreInterface)=>state.todos;
export const getTitle=createSelector(selectorApp,(state)=>state[0].title);
