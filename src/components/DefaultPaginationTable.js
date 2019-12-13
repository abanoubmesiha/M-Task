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
      id: 2,
      name: "Item name 2",
      price: 100
  }
  ,];
    return (
      <BootstrapTable data={ products } pagination> 
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
  export default DefaultPaginationTable