import React, { useState, useEffect } from 'react';
// component imports
import { TodoCard, CompletedCard, ProgressCard } from '../components'
import axios from 'axios';
import Plus from '../assets/Hero-Nav/Plus.svg';




const Body = () => {

  // states to store respective data for each card to enhance reusability
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);


  // fetch request to the local json file where the data is stored
  useEffect(() => {
    (async () => {
      try{
        const { data: { todo, progress, completed } } = await axios.get('data.json');

        // stores destructured data into each state
        setTodo(todo);
        setProgress(progress);
        setCompleted(completed);

      }catch(error){
        console.log(error)
      }
    })()
  }, []);


  return (
    <div className='body-container'>

      {/* the top part of the body */}

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

      {/* the body (the three cards) */}
      <div className="body flex flex-row justify-between">

        {/* Todo Card */}
        <div className="card">
          <div className="heading mb-3">
            To Do
          </div>

          {/* This maps through the todo state and creates a Card component passing toto's data as a prop */}
          <div className='flex flex-col'>
            {
              todo?.map((todo) => <TodoCard key={todo.id} todo={todo} /> )
            }
            <button className='flex justify-center items-center'><img src={Plus} alt="" className='mr-3' /> Add Task</button>
          </div>

        </div>

        {/* Inprogress Card */}
        <div className="card">
          <div className="heading inprogress mb-3">
            Inprogress
          </div>

          {/* This maps through the progress state and creates a Card component passing progress's data as a prop */}
          <div className='flex flex-col'>
            {
              progress?.map((progress) => <ProgressCard key={progress.id} progress={progress} /> )
            }
            <button className='flex justify-center items-center'><img src={Plus} alt="" className='mr-3' /> Add Task</button>
          </div>

        </div>

        {/* Completed Card */}
        <div className="card">
          <div className="heading completed mb-3">
            Completed
          </div>

          {/* This maps through the completed state and creates a Card component passing completed's data as a prop */}
          <div className='flex flex-col'>
            {
              completed?.map((completed) => <CompletedCard key={completed.id} completed={completed} /> )
            }
            <button className='flex justify-center items-center'><img src={Plus} alt="" className='mr-3' /> Add Task</button>
          </div>

        </div>
        
      </div>

    </div>
  )
}

export default Body