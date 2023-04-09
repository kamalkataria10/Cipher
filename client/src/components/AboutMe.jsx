import React from "react";

const AboutMe = () => {
  return (
    <div className="px-10 pt-7 pb-5">
      <div className="flex justify-between align-center">
        {/* <h2 className="uppercase font-bold text-base leading-6">about me</h2> */}
        <label className="block text-lg font-semibold mb-4">ABOUT ME</label>
        <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white">
          Edit
        </button>
      </div>
      <textarea
        className="p-4 w-full bg-white rounded-lg disabled"
        rows="4"
        placeholder="Add something about you."
      ></textarea>
    </div>
  );
};

export default AboutMe;
