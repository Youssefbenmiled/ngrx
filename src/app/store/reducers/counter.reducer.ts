import { DEACREMENT, INCREAMENT } from "../actions/counter.action";
import { CustomAction } from "../store";




const initialState={
  n:0,
  changes:0
}


export interface Counter{
  n:number,
  changes:number
}

export function counterReducer(state=initialState,action:CustomAction) {

  switch (action.type) {
        case INCREAMENT:
            return{...state,
              n:state.n+action.payload
            }
            case DEACREMENT:
              return{...state,
                n:state.n-action.payload
              }
        default:
          return state
    }

}



