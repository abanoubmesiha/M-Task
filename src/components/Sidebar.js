import React from 'react';
import './Sidebar+main.css';

const Sidebar = () => {
    return (
        <React.Fragment>
            <div class="sidenav">
                <a href="em">Employee Management</a>
                <a href="er">Employee Registration</a>
            </div>

        </React.Fragment>
    );
};

export default Sidebar;