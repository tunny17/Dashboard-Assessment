import React from 'react';
import './App.css';
import './index.css';
import Nav from './components/Nav';
import Body from './components/Body';

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <Body />
    </div>
  )
}

export default App