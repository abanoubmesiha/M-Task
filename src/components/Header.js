import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <ul>
                <li><a class="active" href="admin">Admin</a></li>
            </ul>
        </React.Fragment>
    );
};

export default Header;