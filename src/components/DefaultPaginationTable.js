import React , {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {customers} from './data'

class DefaultPaginationTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ customers } striped hover condensed pagination> 
          <TableHeaderColumn width='150' dataField='code' isKey>Code</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='country'>Country</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='job'>Job</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='phone'>Phone</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='image'>Image</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='setting'>Setting</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
  export default DefaultPaginationTable