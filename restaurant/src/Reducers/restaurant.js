import * as actionType from '../ActionsTypes/restaurant';

const initialState={
    restaurants:[],
};

const restaurant = (state = initialState, action) => {
    switch (action.type) {
      case actionType.FETCH_RESTAURANTS:     
      return {
   ...state,
         ...{
           restaurants:action.payload
          }
        };   

      default:
        return state;
    }
  }
  
  export default restaurant