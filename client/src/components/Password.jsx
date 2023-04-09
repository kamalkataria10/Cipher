import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Password = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  // const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      console.log("pw do not match");
      // setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      await axios.put("/change-password", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // setErrors({});
      toast.success("Password Changed Successfully!");
      setRedirect(true);
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      // setErrors(error?.response?.data);
    }
  };

  const changePwHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modal = (
    <Modal closeModal={closeModal}>
      <div className="p-5">
        <div className="flex flex-col gap-3">
          <div>
            <div>Current Password</div>
            <div className="flex items-center bg-slate-100">
              <input
                className="py-2.5 px-4 bg-slate-100 w-full"
                type="password"
                name="currentPassword"
                value={formData?.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {/* {errors?.currentPassword && <p>{errors?.currentPassword}</p>} */}
            </div>
          </div>
          <div>
            <div>New Password</div>
            <div className="flex items-center bg-slate-100">
              <input
                className="py-2.5 px-4 bg-slate-100 w-full"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                type="password"
                placeholder="New Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {/* {errors?.newPassword && <p>{errors?.newPassword}</p>} */}
            </div>
          </div>
          <div>
            <div>Confirm Password</div>
            <div className="flex items-center bg-slate-100">
              <input
                className="py-2.5 px-4 bg-slate-100 w-full"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {/* {errors?.confirmPassword && <p>{errors?.confirmPassword}</p>} */}
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-3">
            <button
              onClick={closeModal}
              className="cursor-pointer p-4 bg-gray-500 text-white text-base"
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
      </div>
    </Modal>
  );

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      {/* console.log({headers}); */}
      {isOpen && modal}
      <div className="mb-2 w-full px-10 py-5">
        <div className="flex justify-between align-center h-10">
          <label className="block text-lg font-semibold pb-1">
            PASSWORD AND SECURITY
          </label>
          <button
            onClick={changePwHandler}
            className="bg-orange-500 hover:bg-orange-600 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white"
          >
            Change
          </button>
        </div>
        <div className="relative rounded-md shadow-sm">
          <input
            type="password"
            name="password"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-lg border-gray-300 rounded-md bg-white"
            value="Password"
            disabled
          />
        </div>
      </div>
    </>
  );
};

export default Password;
