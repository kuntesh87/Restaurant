import React,{useState} from 'react';
import './dashboard.css';


function Dashboard(props) {
    const [city, setCity] = useState("");
    const [restaurants, setRestaurants] = useState({});
    if (props.restaurants !== restaurants) {
        setRestaurants(props.restaurants);
    }
    const handleSubmit = () => {
        console.log('clicked')
    props.searchRestaurant(city);
}
  return (
    <div className="dashboard">
    
        <label>
                  City:
        </label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit" onClick={()=>handleSubmit()} >Submit </button>
     
    </div>
  );
}
export default Dashboard;
