import {connect} from 'react-redux';
import { searchRestaurant } from './action';

import Dashboard from './dashboard.component';


const mapStateToProps = state => ({
    restaurants:state
});
  
const mapDispatchToProps =  {
  searchRestaurant 
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);