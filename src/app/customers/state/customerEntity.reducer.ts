import { Customer } from '../customer.model';
import * as CustomerActions from './customer.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface CustomerStateEntity extends EntityState<Customer> {
  selectedCustomerId: null | number;
  loading: boolean;
  loaded: boolean;
  error: string;
  entities: {};
  ids: number[];
}





const defaultCustomer: CustomerStateEntity = {
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: '',
  entities: null,
  ids: [],
};


export const customerAdapter: EntityAdapter<Customer> =createEntityAdapter<Customer>();

const initialState: CustomerStateEntity = customerAdapter.getInitialState(defaultCustomer);


export function customerReducerEntity(
  state = initialState,
  action: CustomerActions.Actions
): CustomerStateEntity {
  switch (action.type) {
    // case CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS:
    //   return{...state,loading:true,loaded:false}

    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:
      // return{...state,customers:action.payload,loading:false,loaded:true}
      return customerAdapter.addMany(action.payload, {
        ...state,
        selectedCustomerId: null,
        loading: false,
        loaded: true,
        error: '',
      });

    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload,
      };

    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCESS:

    // return{...state,customers:action.payload,loading:false,loaded:true}
      return customerAdapter.addOne(action.payload, {
        ...state,
        selectedCustomerId: action.payload.id,
      });

    case CustomerActions.CustomerActionTypes.LOAD_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case CustomerActions.CustomerActionTypes.CREATE_CUSTOMER_SUCCESS:
      return customerAdapter.addOne(action.payload, state);

    case CustomerActions.CustomerActionTypes.CREATE_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CustomerActions.CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS:
      return customerAdapter.updateOne(action.payload, state);

    case CustomerActions.CustomerActionTypes.UPDATE_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CustomerActions.CustomerActionTypes.DELETE_CUSTOMER_SUCCESS:
      return customerAdapter.removeOne(action.payload, state);

    case CustomerActions.CustomerActionTypes.DELETE_CUSTOMER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export const getCustomerFeatureState = createFeatureSelector<CustomerStateEntity>('customers');// initial state is CustomerStateEntity













interface A {
  a: number;
  c: number;
  d: number;
}
class D {
  a: number;
  c: number;
  d: number;
}

interface b extends D {
  x: string;
  y: string;
}

const x: b = {
  x: '',
  y: '',
  a: 0,
  c: 0,
  d: 0,
};


