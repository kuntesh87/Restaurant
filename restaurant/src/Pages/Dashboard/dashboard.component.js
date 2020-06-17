import React,{useState, Fragment} from 'react';
import './dashboard.css';
import ListItem from './listItems';

function Dashboard(props) {
  const [city, setCity] = useState("");
  const [filter,setFilter] = useState("");
  const [restaurants, setRestaurants] = useState([]);
   
  if (props.restaurants !== restaurants && restaurants.length === 0 && filter === "") {
        setRestaurants(props.restaurants);
    }
    const handleSubmit = () => {
    props.searchRestaurant(city);
    }
   
  const search = (restaurant,filterValue) => {
   if (restaurant.name.includes(filterValue)) {
        return restaurant;
   }
     if (restaurant.address.includes(filterValue)) {
        return restaurant;
     }
     if (restaurant.area.includes(filterValue)) {
        return restaurant;
      }
  }
  const handleFilter = (filterValue) => {
    setFilter(filterValue);
    const result = props.restaurants.filter(restaurant => (
       search(restaurant,filterValue)
    ));
    setRestaurants(result);
    }
  
  return (
    <div className="dashboard">
      <Fragment>
         <label htmlFor="cityInput">
                  City:
        </label>
      <input id="cityInput" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </Fragment>
      <Fragment>
 <label htmlFor="filterInput">
                  Filter:
        </label>
        <input id="filterInput" type="text" value={filter} onChange={(e) => handleFilter(e.target.value)} />
      </Fragment>
       
      
        <button type="submit" onClick={()=>handleSubmit()} >Submit </button>
        <ListItem restaurants={restaurants} />
    </div>
  );
}
export default Dashboard;
