import { buildFeatureState, buildState, IEntityState } from "@briebug/ngrx-auto-entity";
import { createFeatureSelector } from "@ngrx/store";
import { User } from "./user.model";


// export const initialState=buildState(User).initialState
// export const UserFacadeBase=buildState(User).facade

export interface IEntityUser {
  user: IEntityState<User>;
}

export const USER_CONST='USER'

export const userFeatureSelector = createFeatureSelector<IEntityUser>(
  USER_CONST
  );

export const { initialState: initialUserState, selectors, facade: UserFacadeBase } = buildFeatureState(
  User,
  USER_CONST,
  userFeatureSelector
);

export function userReducer(state=initialUserState):IEntityState<User> {
  return state
}
