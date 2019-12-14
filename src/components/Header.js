import React from 'react';
import './css/Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <React.Fragment>
            <ul>
                <li><Link to="/admin"><a class="active">Admin</a></Link></li>
            </ul>
        </React.Fragment>
    );
};

export default Header;