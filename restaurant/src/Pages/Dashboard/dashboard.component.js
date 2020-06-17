import React,{useState} from 'react';
import './dashboard.css';
import ListItem from './listItems';

function Dashboard(props) {
    const [city, setCity] = useState("");
    const handleSubmit = () => {
    props.searchRestaurant(city);
}
  return (
    <div className="dashboard">
    
        <label>
                  City:
        </label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit" onClick={()=>handleSubmit()} >Submit </button>
        <ListItem restaurants={props.restaurants} />
    </div>
  );
}
export default Dashboard;
