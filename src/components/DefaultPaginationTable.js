import React , {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class DefaultPaginationTable extends React.Component {
  render() {
    var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  }
  ,{
    id: 2,
    name: "Item name 2",
    price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
      id: 2,
      name: "Item name 2",
      price: 100
  },{
    id: 2,
    name: "Item name 2",
    price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
  id: 2,
  name: "Item name 2",
  price: 100
},{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,];
    return (
      <BootstrapTable data={ products } striped hover condensed pagination> 
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