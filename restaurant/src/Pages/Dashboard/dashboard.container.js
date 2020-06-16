import {connect} from 'react-redux';
import { searchReasturent } from './action';

import Dashboard from './dashboard.component';


const mapStateToProps = state => ({
    
});
  
const mapDispatchToProps =  {
  searchReasturent 
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);