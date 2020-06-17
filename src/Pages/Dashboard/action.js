
import * as ReasturantApi from '../../Api/restaurant';
import * as ActionTypes from '../../ActionsTypes/restaurant'; 


const fetchRestaurants= (restaurants) => ({  
    type : ActionTypes.FETCH_RESTAURANTS,
    payload: restaurants

})

export const searchRestaurant = (city) => async (dispatch, getState) => {
    try {
        const { restaurants } = await ReasturantApi.searchRestaurant(city);
        dispatch(fetchRestaurants(restaurants));
    }
    catch (err) {
        console.log('error in searchRestaurant');
    }
}