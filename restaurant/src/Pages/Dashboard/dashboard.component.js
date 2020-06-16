import React,{useState} from 'react';
import './dashboard.css';


function Dashboard() {
const handleSubmit = () => {
    
}

    const [city, setCity] = useState("");
    console.log(city);
  return (
    <div className="dashboard">
      <form onSubmit={handleSubmit}>
        <label>
                  City:
        </label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Dashboard;
