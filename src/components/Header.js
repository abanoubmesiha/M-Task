import React from 'react';
import './css/Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <React.Fragment>
            {/* <ul>
                <li><Link to="/admin"><a class="active">Admin</a></Link></li>
            </ul> */}
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title">
                    The Company
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <Link to="/em"><a>Employee Management</a></Link>
                    <Link to="/er"><a>Employee Registration</a></Link>
                    <Link to="/admin"><a class="active">Admin</a></Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;