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
  ids: [];
}

const defaultCustomer: CustomerStateEntity = {
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: '',
  entities: null,
  ids: [],
};

const customerAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>();

const initialState: CustomerStateEntity =
  customerAdapter.getInitialState(defaultCustomer);

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

const getCustomerFeatureState = createFeatureSelector<CustomerStateEntity>('customers');

export const getCustomers = createSelector(
  getCustomerFeatureState,
  customerAdapter.getSelectors().selectAll
);


export const getError = createSelector(
  getCustomerFeatureState,
  (state: CustomerStateEntity) => state.error
);

export const getCustomersLoading = createSelector(
  getCustomerFeatureState,
  (state: CustomerStateEntity) => state.loading
);

export const getCustomersLoaded = createSelector(
  getCustomerFeatureState,
  (state: CustomerStateEntity) => state.loaded
);
export const getCustomersError = createSelector(
  getCustomerFeatureState,
  (state: CustomerStateEntity) => state.error
);

//------current customer id----------------//
export const getCurrentCustomerId=createSelector(
  getCustomerFeatureState,
  (state:CustomerStateEntity)=>state.selectedCustomerId
)

export const getCurrentCustomer=createSelector(
  getCustomerFeatureState,
  getCurrentCustomerId,
  (state)=>{
    console.log(state.entities)
    return state.entities[state.selectedCustomerId]
  }
)

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
