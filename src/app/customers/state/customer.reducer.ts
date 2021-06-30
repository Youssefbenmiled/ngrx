
// const initialState={
// customersList:[
//   {
//     name:"youssef ben miled",
//     phone:"+216 58 233 463",
//     address:"Tunis",
//     membership:"PLat",
//     id:1
//   }
// ],
// loading:false,
// loaded:true


// }

// export function CustomerReducer(state=initialState,action){
  //   switch (action.type) {
    //     case "LOAD_CUSTOMERS":
    //     return{
      //       ...state,loading:true,loaded:false
      //     }

      //     default:
      //       return state
      //   }

      // }

import { Customer } from "../customer.model";
import * as CustomerActions from "./customer.actions"
import { createFeatureSelector,createSelector } from "@ngrx/store";

export interface CustomerState{
  customers:Customer[]
  loading:boolean
  loaded:boolean
  error:string
}

const initialState:CustomerState={
customers:[
  {
    id:0,
    name:'',
    phone:'',
    address:'',
    membership:'',
  }
],
loading:false,
loaded:false,
error:''
}

export function customerReducer(state=initialState,action:CustomerActions.Actions):CustomerState {

  switch (action.type) {
    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS:
      return{...state,loading:true,loaded:false}

    case  CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:
        return{...state,customers:action.payload,loading:false,loaded:true}

    case  CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL:
        return{...state,loading:false,loaded:true,error:action.payload}

    default:
      return state;
  }

}

const getCustomerFeatureState=createFeatureSelector<CustomerState>("customers");

export const getCustomers=createSelector(getCustomerFeatureState,
  (state:CustomerState)=> state.customers
  )


export const getCustomersLoading=createSelector(getCustomerFeatureState,
  (state:CustomerState)=> state.loading
  )

  export const getCustomersLoaded=createSelector(getCustomerFeatureState,
    (state:CustomerState)=> state.loaded
    )
    export const getCustomersError=createSelector(getCustomerFeatureState,
      (state:CustomerState)=> state.error
      )
