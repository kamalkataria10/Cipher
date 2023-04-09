import React, { useContext, useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { UserContext } from "../UserContext";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Browse from "./Browse";
const browseOptions = [
  { label: "App Development" },
  { label: "Web Development" },
  { label: "Game Development" },
  { label: "Data Structures" },
  { label: "Programming" },
  { label: "Machine Learning" },
  { label: "Data Sciences" },
  { label: "Others" },
];

const Header = () => {
  const [redirect, setRedirect] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const logoutHandler = async () => {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  };
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <header className="bg-white h-14 flex items-center justify-between p-4">
        <div className="mr-2 flex items-center">
          <Link to="/">
            <img
              className="h-9 ml-4"
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              alt="img"
            ></img>
          </Link>
          <h1 className="pl-1 font-bold text-xl">CipherSchools</h1>
          <Browse />
        </div>
        <div className="flex items-center flex-row gap-6 pr-10 justify-center">
          <div className="max-w-md hidden lg:block mx-auto ">
            <div className="relative flex items-center w-full h-9 rounded-3xl focus-within:shadow-lg bg-[#F2F5FA] overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#F2F5FA]"
                type="text"
                id="search"
                placeholder="Search and Learn"
              />
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
          <div className="h-5 w-5 cursor-pointer">
            <img
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 m-1 flex items-center cursor-pointer">
              <img
                src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg"
                alt=""
              />
            </div>
            <span className="text-orange-500 font-bold">0</span>
          </div>
          {(!user && (
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-5 rounded">
              <Link to="/login">Login</Link>
            </button>
          )) || (
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-5 rounded"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
