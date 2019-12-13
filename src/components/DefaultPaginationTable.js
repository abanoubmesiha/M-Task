import React , {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class DefaultPaginationTable extends React.Component {
  render() {
    var products = [{
      code: 0,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'000012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'01hgs2',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'ashgsd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asshgd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'ashfd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Itemhgf name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Itemasdf name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asdg'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'01f2',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'ahsd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Itfem name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'0d12',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'assd'
  }
  ,{
      code: 2,
      name: "Item name 2",
      country: 100,
      job:'asd',
      phone:'012',
      image:'asd',
      setting:'asd'
  }
  ,{
      code: 2,
      name: "Item aname 2",
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