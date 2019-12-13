import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
