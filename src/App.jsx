import React, {useState} from 'react';
import './App.css';
import './index.css';

// imports both components
import { Nav, Body } from './components'

const App = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const handleToggleNav = ()=>{
    setToggleNav(prev => !prev)
  }
  return (
    <div className='w-screen h-screen flex'>
      <Nav  navToggle={toggleNav}/>
      <Body setToggleNav={handleToggleNav} navToggle={toggleNav}/>
    </div>
  )
}

export default App