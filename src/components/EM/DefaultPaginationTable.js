import React , {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {CustomerConsumer} from '../../Context'
// import {customers} from '../data'

class DefaultPaginationTable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CustomerConsumer>
          {(value)=>{
               function imageFormatter(cell, row){
                return (<img style={{width:50}} src={cell}/>)
              }
            return (
              <BootstrapTable data={ value.customers } striped hover condensed pagination> 
                <TableHeaderColumn width='150' dataField='code' filter={ { 
                                                                type: 'NumberFilter', 
                                                                delay: 1000, 
                                                                numberComparators: [ '=', '>', '<' ] ,
                                                                defaultValue: {comparator: '=' } 
                                                              } } isKey>Code</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Name</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='country'filter={ { type: 'TextFilter', delay: 1000 } }>Country</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='job'filter={ { type: 'TextFilter', delay: 1000 } }>Job</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='phone' filter={ { 
                                                              type: 'NumberFilter', 
                                                              delay: 1000, 
                                                              numberComparators: [ '=' ] ,
                                                              defaultValue: {comparator: '=' } 
                                                            } }>Phone</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='image'dataFormat={imageFormatter}>Image</TableHeaderColumn>
                <TableHeaderColumn width='150' dataField='setting'>Setting</TableHeaderColumn>
              </BootstrapTable>
            )
          }}
        </CustomerConsumer>
      </React.Fragment>
      
      
    );
  }
}
  export default DefaultPaginationTable