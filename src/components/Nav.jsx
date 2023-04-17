import React from 'react';

const Nav = () => {
  return (
    <div className='nav-container bg-orange-800'>

      <div className="nav-1">
        <p>Welcome Keerthi</p>
        <ul>
          <li className='dashboard'>Dashboard</li>
          <li className='settings'>Settings</li>
          <li className='activities'>Activities</li>
          <li className='users'>Users</li>
          <li className='added'>Added Users</li>
          <li className='affiliate'>Affiliate</li>
        </ul>
      </div>

      <div className="nav-2">
        <ul>
          <li className='profile'>Profile</li>
          <li className='logout'>Logout</li>
        </ul>
        <button className='hover:bg-sky-700'>new project</button>
      </div>

    </div>
  )
}

export default Nav