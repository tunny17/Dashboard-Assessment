import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// component imports
import { TodoCard, CompletedCard, ProgressCard } from "../components";
import axios from "axios";
import Plus from "../assets/Hero-Nav/Plus.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const Body = ({ setToggleNav, navToggle }) => {
  const isAboveRequiredScreen = useMediaQuery("(min-width: 1025px)");

  // states to store respective data for each card to enhance reusability
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  // fetch request to the local json file where the data is stored
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { todo, progress, completed },
        } = await axios.get("data.json");

        // stores destructured data into each state
        setTodo(todo);
        setProgress(progress);
        setCompleted(completed);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="flex-3 overflow-y-scroll">
      {/* the top part of the body */}

      <div className="w-full px-[7%] py-[3%] sticky top-0 z-[5] bg-white">
        <div className="hero-heading flex flex-col sm:flex-row sm:items-center  ">
          <div>
            <h1 className="text-4xl font-semibold">New Campaign Run </h1>
            <p className="sub-heading-text   text-sm font-normal line-clamp-6">
              A new campaign launch work for brand new feature in May month
            </p>
          </div>
          <div className="ml-auto flex items-center w-full sm:w-auto mt-2 sm:mt-0">
            <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg">
              ADD MEMBERS
            </button>
            {!isAboveRequiredScreen && (
              <button className="ml-auto sm:ml-4" onClick={setToggleNav}>
                {!navToggle ? (
                  <Bars3Icon className="text-black w-6 " />
                ) : ( 
                  <XMarkIcon className="text-black w-6" /> 
               )}
              </button>
            )}
          </div>
        </div>

        <div className="hero-heading-nav flex flex-row justify-between">
          <p>
            <span className="sm:block hidden">8 members</span>
          </p>
          <ul className="flex flex-row justify-between">
            <li>
              <span className="sm:block hidden">Participants View</span>
            </li>
            <li className="board">
              <span className="sm:block hidden">Board View</span>
            </li>
            <li className="list">
              <span className="sm:block hidden">List View</span>
            </li>
            <li className="power">
              <span className="sm:block hidden">Power View</span>
            </li>
            <li>
              <img src={Plus} alt="" />
            </li>
          </ul>
        </div>
      </div>

      {/* the body (the three cards) */}
      <div className="body grid md:grid-cols-3 gap-8 sm:grid-cols-2 grid-col-1">
        {/* Todo Card */}
        <div className="card">
          <div className="heading mb-3">To Do</div>

          {/* This maps through the todo state and creates a Card component passing toto's data as a prop */}
          <div className="flex flex-col">
            {todo?.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
            <button className="flex justify-center items-center">
              <img src={Plus} alt="" className="mr-3" /> Add Task
            </button>
          </div>
        </div>

        {/* Inprogress Card */}
        <div className="card">
          <div className="heading inprogress mb-3">Inprogress</div>

          {/* This maps through the progress state and creates a Card component passing progress's data as a prop */}
          <div className="flex flex-col">
            {progress?.map((progress) => (
              <ProgressCard key={progress.id} progress={progress} />
            ))}
            <button className="flex justify-center items-center">
              <img src={Plus} alt="" className="mr-3" /> Add Task
            </button>
          </div>
        </div>

        {/* Completed Card */}
        <div className="card">
          <div className="heading completed mb-3">Completed</div>

          {/* This maps through the completed state and creates a Card component passing completed's data as a prop */}
          <div className="flex flex-col">
            {completed?.map((completed) => (
              <CompletedCard key={completed.id} completed={completed} />
            ))}
            <button className="flex justify-center items-center">
              <img src={Plus} alt="" className="mr-3" /> Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
