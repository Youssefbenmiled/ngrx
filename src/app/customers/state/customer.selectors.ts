import { createSelector } from "@ngrx/store";
import { customerAdapter, CustomerStateEntity, getCustomerFeatureState } from "./customerEntity.reducer";

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
    console.log(state.entities[state.selectedCustomerId])
    return state.entities[state.selectedCustomerId]
  }
)
