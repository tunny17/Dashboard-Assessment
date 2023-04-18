import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plus from '../assets/Hero-Nav/Plus.svg';

import TodoCard from './TodoCard';


const Body = () => {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    (async () => {
      try{
        const { data: { todo } } = await axios.get('data.json');
        setTodo(todo);
        console.log(todo);
      }catch(error){
        console.log(error)
      }
    })()
  }, []);


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

          <div className='flex flex-col'>
            {
              todo.map((todo) => <TodoCard key={todo.id} todo={todo} /> )
            }
          </div>

        </div>
        
      </div>

    </div>
  )
}

export default Body