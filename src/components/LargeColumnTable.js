import React , {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {CustomerConsumer} from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
 
class LargeColumnTable  extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CustomerConsumer>
          {(value)=>{
               function imageFormatter(cell, row){
                return (<img style={{width:50}} src={cell}/>)
              }
               function editFormatter(){
                return (<FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>)
              }
               function deleteFormatter(){
                return (<FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon>)
              }
            return (
              
              <BootstrapTable data={ value.customers } striped hover condensed pagination 
                  // tableStyle={ { border: '#0000FF 2.5px solid' } }
                  // containerStyle={ { border: '#FFBB73 2.5px solid' } }
                  headerStyle={ { background: '#4f9bff',color: '#FFFFFF' } }
                  bodyStyle={ { background: '#fff',color: '#000' } }
                  >
                <TableHeaderColumn width='auto' dataAlign='center' headerAlign='center' dataField='code' filter={ { 
                                                                type: 'NumberFilter', 
                                                                delay: 1000, 
                                                                numberComparators: [ '=', '>', '<' ] ,
                                                                defaultValue: {comparator: '=' } 
                                                              } } isKey>Code</TableHeaderColumn>
                <TableHeaderColumn width='auto' dataAlign='center' headerAlign='center' dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Name</TableHeaderColumn>
                <TableHeaderColumn width='auto' dataAlign='center' headerAlign='center' dataField='country'filter={ { type: 'TextFilter', delay: 1000 } }>Country</TableHeaderColumn>
                <TableHeaderColumn width='auto' dataAlign='center' headerAlign='center' dataField='job'filter={ { type: 'TextFilter', delay: 1000 } }>Job</TableHeaderColumn>
                <TableHeaderColumn width='auto' dataAlign='center' headerAlign='center' dataField='phone' filter={ { 
                                                              type: 'NumberFilter', 
                                                              delay: 1000, 
                                                              numberComparators: [ '=' ] ,
                                                              defaultValue: {comparator: '=' } 
                                                            } }>Phone</TableHeaderColumn>
                <TableHeaderColumn width='70' dataAlign='center' headerAlign='center' dataField='image' dataFormat={imageFormatter}>Image</TableHeaderColumn>
                <TableHeaderColumn width='70' dataAlign='center' headerAlign='center' dataField='edit' dataFormat={editFormatter}>Edit</TableHeaderColumn>
                <TableHeaderColumn width='70' dataAlign='center' headerAlign='center' dataField='delete' dataFormat={deleteFormatter}>Delete</TableHeaderColumn>
                
              </BootstrapTable>
            )
          }}
        </CustomerConsumer>
      </React.Fragment>
      
      
    );
  }
}
  export default LargeColumnTable 