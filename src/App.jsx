import React from 'react';
import './App.css';
import './index.css';
// imports both components
import { Nav, Body } from './components'

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
      <Body />
    </div>
  )
}

export default App