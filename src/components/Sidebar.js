import React from 'react';
import './css/Sidebar+main.css';
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return (
        <React.Fragment>
            <div class="sidenav">
            <Link to="/em"><a>Employee Management</a></Link>
            <Link to="/er"><a>Employee Registration</a></Link>
            </div>

        </React.Fragment>
    );
};

export default Sidebar;