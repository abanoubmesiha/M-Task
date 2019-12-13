import React from 'react';
import './Sidebar+main.css';
import Filter from './Filter'
import Table from './Table'
import DefaultPaginationTable from './DefaultPaginationTable'

const EM = () => {
    return (
        <React.Fragment>
            <div className="main">
                <Filter />
                <Table />
                <DefaultPaginationTable />
               
            </div>
        </React.Fragment>
    );
};

export default EM;