import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import EM from './components/EM'
import Admin from './components/Admin'
import {Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Home} />
              <Route path='/em' component={EM} />
              <Route path='/admin' component={Admin} />
             
        </Switch>
    </React.Fragment>
  );
}

export default App;
