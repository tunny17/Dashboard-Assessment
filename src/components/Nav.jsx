import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
const Nav = ({ navToggle }) => {
  const isAboveRequiredScreen = useMediaQuery("(min-width:1024px)");
  return (
    <>
      {isAboveRequiredScreen && (
        <div className="flex flex-2 flex-col bg-indigo-960 py-10 px-8 nav-container">
          <div className="nav-1">
            <p className="flex justify-center items-center relative border-none rounded-lg">
              Welcome Keerthi
            </p>
            <ul>
              <li className="dashboard">Dashboard</li>
              <li className="settings">Settings</li>
              <li className="activities">Activities</li>
              <li className="users">Users</li>
              <li className="added">Added Users</li>
              <li className="affiliate">Affiliate</li>
            </ul>
          </div>

          <div className="nav-2 flex flex-col justify-between">
            <ul>
              <li className="profile">Profile</li>
              <li className="logout">Logout</li>
            </ul>
            <button className="cursor-pointer rounded-lg uppercase relative border-none">
              new project
            </button>
          </div>
        </div>
      )}
      {!isAboveRequiredScreen && navToggle && (
        <div className="absolute left-0 top-0 flex w-[15rem] h-screen z-50 flex-col bg-indigo-960 py-10 px-8 nav-container">
          <div className="nav-1">
            <p className="flex justify-center items-center relative border-none rounded-lg">
              Welcome Keerthi
            </p>
            <ul>
              <li className="dashboard">Dashboard</li>
              <li className="settings">Settings</li>
              <li className="activities">Activities</li>
              <li className="users">Users</li>
              <li className="added">Added Users</li>
              <li className="affiliate">Affiliate</li>
            </ul>
          </div>

          <div className="nav-2 flex flex-col justify-between">
            <ul>
              <li className="profile">Profile</li>
              <li className="logout">Logout</li>
            </ul>
            <button className="cursor-pointer rounded-lg uppercase relative border-none">
              new project
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
