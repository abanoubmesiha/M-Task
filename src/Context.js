import React, { createContext, Component } from 'react';
import {customers} from './data'; 

const TheContext = React.createContext();
const {Provider, Consumer} = TheContext;

class CustomerProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers:customers
        }
    }
    render() {
        return (
            <Provider value={{
                ...this.state,
                }}>
                {this.props.children}
            </Provider>
        );
    }
}
export { CustomerProvider as default , Consumer as CustomerConsumer };
