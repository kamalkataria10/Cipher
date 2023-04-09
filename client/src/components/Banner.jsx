import React, { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import { UserContext } from "../UserContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Banner = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const editHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "John",
    lastName: user?.lastName || "Doe",
    email: user?.email || "admin@gmail.com",
    phoneNo: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      await axios.put("/change-profile", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("details updated");
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  const modal = (
    <Modal closeModal={closeModal}>
      <div className="p-5">
        <div className="flex justify-between">
          <span className="text-bold">Profile Update</span>
          <span onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="h-36 w-36">
              <img
                src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-3">
              <div>
                <div>First Name</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="text"
                  name="firstName"
                  value={formData?.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>Last Name</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="text"
                  name="lastName"
                  value={formData?.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>Email Address</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="text"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>Mobile Number</div>
                <input
                  className="py-2.5 px-4 bg-slate-100 w-full"
                  type="tel"
                  name="phoneNo"
                  placeholder="Mobile Number"
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-3">
          <button
            onClick={closeModal}
            className="cursor-pointer p-4 bg-gray-500 text-white text-base "
          >
            Cancel
          </button>
          <button
            className="cursor-pointer p-4 bg-orange-500 text-white text-base"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
  // if (redirect) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <>
      {isOpen && modal}
      <div className="bg-gray-100 h-24 py-1.5 px-10 flex justify-between items-center relative">
        <div className="flex items-center">
          <div className=" flex items-center justify-center">
            <img
              className="h-16 "
              src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
              alt="img"
            />
            <div
              className="absolute bg-black rounded-3xl h-5 w-5 bottom-2 flex justify-center items-center cursor-pointer"
              onClick={editHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
          </div>
          <div className="inline ml-3 text-md">
            <span className="block">Hello,</span>
            <span className="block font-bold text-lg">
              {" "}
              {(user && `${user.firstName} ${user.lastName}`) ||
                "Cipher Schools"}
            </span>
            <span>{(user && user.email) || "*******@gmail.com"}</span>
          </div>
        </div>

        <Link
          to="/followers"
          className="border border-orange-500 p-2 rounded-lg"
        >
          <button className="font-bold text-base">45 Followers</button>
        </Link>
      </div>
    </>
  );
};

export default Banner;
