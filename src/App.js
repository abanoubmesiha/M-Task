import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import LargeColumnTable from './components/LargeColumnTable'
import ER from './components/ER'
import Admin from './components/Admin'
import {Switch, Route, Link} from 'react-router-dom';
import './index.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Sidebar /> */}
      <div className="main">
      <Switch>
        <Route exact path='/' component={Home} />
              <Route path='/em' component={LargeColumnTable} />
              <Route path='/er' component={ER} />
              <Route path='/admin' component={Admin} />
             
        </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
