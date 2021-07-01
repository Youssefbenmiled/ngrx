import { ActionReducerMap } from '@ngrx/store';
import { customerReducer, CustomerState  } from '../customers/state/customer.reducer';
import { customerReducerEntity, CustomerStateEntity } from '../customers/state/customerEntity.reducer';
import { Counter, counterReducer } from './reducers/counter.reducer';
import { ToDo, toDoReducer } from './reducers/todos.reducer';

//needed in app.module and component's store type
export interface StoreInterface {
  counter: Counter;
  todos:ToDo[],
  customers:CustomerStateEntity
}

// reducer common action (deprecated)
export interface CustomAction {
  type: string;
  payload: any;
}

export const reducers: ActionReducerMap<StoreInterface> = {
  counter: counterReducer,
  todos: toDoReducer,
  customers: customerReducerEntity,

};
