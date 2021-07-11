import { buildFeatureState, IEntityState } from "@briebug/ngrx-auto-entity";
import { createFeatureSelector } from "@ngrx/store";
import { Domaine } from "./domaine.model";




export const DOMAINE_CONST='DOMAINE'

export interface IEntityDomaine{
  domaine:IEntityState<Domaine>
}

export const domaineFeatureSelector=createFeatureSelector<IEntityDomaine>(DOMAINE_CONST)

export const {initialState:domaineInitalState,facade:domaineFacade,selectors}=buildFeatureState(
  Domaine,
  DOMAINE_CONST,
  domaineFeatureSelector
  )

  export function domaineReducer(state=domaineInitalState):IEntityState<Domaine>{
    return state
  }
