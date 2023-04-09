import React from "react";

const DropDownInput = ({ label, options, placeholder, value, onChange }) => {
  return (
    <div className="mb-2 w-1/2 p-2">
      <label className="block text-md font-medium mb-1">{label}</label>
      <div className="relative rounded-md shadow-sm">
        <select
          type="select"
          name={label}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-md border-gray-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDownInput;
