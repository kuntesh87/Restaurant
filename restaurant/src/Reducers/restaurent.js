import * as actionType from '../ActionsTypes/restaurent';

const initialState={
    restaurent:{},
};

const restaurentReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.FETCH_RESTAURENT:     
      return {
   ...state,
         ...{
           restaurent:action.payload
          }
        };   

      default:
        return state;
    }
  }
  
  export default restaurentReducer