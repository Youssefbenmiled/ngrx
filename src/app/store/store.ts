import { IEntityState } from '@briebug/ngrx-auto-entity';
import { ActionReducerMap } from '@ngrx/store';
import { customerReducer, CustomerState  } from '../customers/state/customer.reducer';
import { customerReducerEntity, CustomerStateEntity } from '../customers/state/customerEntity.reducer';
import { userReducer } from '../users/user.state';
import { User } from '../users/user.model';
import { Counter, counterReducer } from './reducers/counter.reducer';
import { ToDo, toDoReducer } from './reducers/todos.reducer';

//needed in app.module and component's store type
export interface StoreInterface {
  counter: Counter;
  todos:ToDo[],
  customers:CustomerStateEntity,
  user:IEntityState<User>;
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
  user:userReducer

};
