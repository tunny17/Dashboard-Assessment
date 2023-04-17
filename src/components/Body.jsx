import React from 'react';
import Plus from '../assets/Hero-Nav/Plus.svg';

const Body = () => {
  return (
    <div className='body-container'>

      <div className="body-hero">

        <div className="hero-heading   flex flex-row align-middle justify-between">
          <div>
            <h1 className='text-4xl font-semibold'>New Campaign Run </h1>
            <p className='sub-heading-text   text-sm font-normal'>A new campaign launch work for brand new feature in May month</p>
          </div>
          <button className='flex items-center justify-center'>ADD MEMBERS</button>
        </div>

        <div className="hero-heading-nav   flex flex-row align-middle justify-between">
          <p>8 members</p>
          <ul className='flex flex-row align-middle justify-between'>
            <li>Participants View</li>
            <li className='board'>Board View</li>
            <li className='list'>List View</li>
            <li className='power'>Power View</li>
            <li><img src={Plus} alt="" /></li>
          </ul>
        </div>

      </div>

      <div className="body">
        <div className="todo">
          <div className="heading">
            To Do
          </div>

          <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
            <caption></caption>
            <span>
              <p>Progress</p>
              <p>2/10</p>
            </span>
            <span>
              <p>7</p>
              
            </span>
          </figure>
        </div>

        <div className="progress">
          <div className="heading">
            Inprogress
          </div>
        </div>

        <div className="completed">
          <div className="heading">
            Completed
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Body