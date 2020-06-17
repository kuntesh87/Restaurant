import React,{ Fragment } from 'react';

function ListItem(props) {
  const restaurants = Array.from(props.restaurants); 
  const listItems = restaurants.map((restaurant) =>
   <Fragment key={restaurant.id}>
      <dt>{restaurant.name}</dt>
      <dd>{restaurant.address}</dd>
      <dd>{restaurant.area}</dd>
      <dd>${restaurant.price}</dd>
      <br/>
    </Fragment>
   
  );
  return (
      <dl>
          <h3>List View</h3>
      {listItems}
    </dl>        
  
  );
}

export default ListItem;
