import React,{useState, Fragment} from 'react';
import './dashboard.css';
import ListItem from './listItems';
import { search } from './dashboard.services';

function Dashboard(props) {
  const [city, setCity] = useState("");
  const [filter,setFilter] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cssClass, setCssClass] = useState("");
  
  if (props.restaurants !== restaurants && restaurants.length === 0 && filter === "") {
        setRestaurants(props.restaurants);
    }
  const handleSubmit = () => {
    if (city !== "") {
      props.searchRestaurant(city); 
      setCssClass("success");
      setErrorMessage("Succeed.")      
    } else {
      setIsError(true);
      setCssClass("error");
      setErrorMessage("Error- City is Required.")
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
      <Fragment >
        <div className={cssClass}>
        <label htmlFor="cityInput">
                  City:
        </label>
        <input id="cityInput" className={cssClass} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <br />{isError ? <span className={cssClass}>{errorMessage}</span> : null}
        </div>
         
      </Fragment>
      <Fragment>
        <div>
          <label htmlFor="filterInput">
                  Filter:
        </label>
        <input id="filterInput" type="text" value={filter} onChange={(e) => handleFilter(e.target.value)} />
        </div>
 
      </Fragment>
       
      
        <button type="submit" onClick={()=>handleSubmit()} >Submit </button>
        <ListItem restaurants={restaurants} />
    </div>
  );
}
export default Dashboard;
