import React from 'react';

const Nav = () => {
  return (
    <div className='nav-container flex flex-col items-start'>

      <div className="nav-1">
        <p className='flex justify-center items-center relative border-none rounded-lg pl-3'>Welcome Keerthi</p>
        <ul>
          <li className='dashboard'>Dashboard</li>
          <li className='settings'>Settings</li>
          <li className='activities'>Activities</li>
          <li className='users'>Users</li>
          <li className='added'>Added Users</li>
          <li className='affiliate'>Affiliate</li>
        </ul>
      </div>

      <div className="nav-2 flex flex-col justify-between">
        <ul>
          <li className='profile'>Profile</li>
          <li className='logout'>Logout</li>
        </ul>
        <button className='cursor-pointer rounded-lg uppercase relative border-none'>new project</button>
      </div>

    </div>
  )
}

export default Nav