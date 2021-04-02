// React
import React from 'react';

// Components
import Sidebar from '../../../components/admin/Sidebar';
import dashboardRoutes from '../../../routes/dashboardRoutes';

// Style
import './style.sass';

class Dashboard extends React.Component {
    render() {
        return(
           <div className="dashboard-container">
               <div className="dashboardContainer-sidebar">
                   <Sidebar routes={dashboardRoutes} />
               </div>
               <div className="navbar-main-container">
                   
               </div>
           </div>
        );
    }
}

export default Dashboard;