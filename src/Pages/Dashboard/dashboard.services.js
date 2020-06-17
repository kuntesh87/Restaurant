export const search = (restaurant, filterValue) => {
   if (restaurant.name.toLowerCase().includes(filterValue) || restaurant.name.includes(filterValue)) {
        return restaurant;
   }
     if (restaurant.address.toLowerCase().includes(filterValue) || restaurant.address.includes(filterValue)) {
        return restaurant;
     }
     if (restaurant.area.toLowerCase().includes(filterValue) || restaurant.area.includes(filterValue)) {
        return restaurant;
      }
  }