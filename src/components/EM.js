import React from 'react';
import './Sidebar+main.css';
import Filter from './Filter'
import Table from './Table'

const EM = () => {
    return (
        <React.Fragment>
            <div className="main">
                <Filter />
                <Table />
               
            </div>
        </React.Fragment>
    );
};

export default EM;