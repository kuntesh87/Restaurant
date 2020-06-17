import axios from 'axios';

const api = 'http://opentable.herokuapp.com/api';

export const searchRestaurant = async (query) => {
  try {
    const url = api + '/restaurants';
    const response = await axios.get(url, {
      params: {city: query,per_page:100},
    });
    const {data} = response;
    return data;
  } catch (err) {
    console.log('error in searchRestaurant', err);
  }
};