import React from 'react';

function ListItem(props) {
    console.log('listItems',props.restaurants)
    const restaurants = Array.from(props.restaurants); 
  const listItems = restaurants.map((restaurant) =>
   <div key={restaurant.id}>
      <h3>{restaurant.name}</h3>
          <p>{restaurant.address}</p>
          <p>${restaurant.price}</p>
    </div>
   
  );
  return (
      <div>
          <h3>List View</h3>
          {listItems}</div>
          
  
  );
}

export default ListItem;
