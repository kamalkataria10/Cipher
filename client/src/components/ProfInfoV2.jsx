import React from "react";
import SocialMediaInput from "./Input/SocialMediaInput";
import DropDownInput from "./Input/DropDownInput";
const ProfInfoV2 = () => {
  const educationOptions = [
    { label: "High School", value: "high-school" },
    { label: "Associate's Degree", value: "associates-degree" },
    { label: "Bachelor's Degree", value: "bachelors-degree" },
    { label: "Master's Degree", value: "masters-degree" },
    { label: "Doctorate", value: "doctorate" },
  ];
  const jobOptions = [
    { label: "Student", value: "student" },
    { label: "Employed", value: "employed" },
    { label: "Self-employed", value: "self-employed" },
    { label: "Unemployed", value: "unemployed" },
    { label: "Retired", value: "retired" },
    { label: "Other", value: "other" },
  ];

  return (
    <div className="px-10 py-5">
      <div className="flex justify-between">
        <h2 class="text-lg font-semibold pb-1">PROFESSIONAL INFORMATION</h2>
        <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer h-7 flex items-center justify-center leading-none w-20 rounded-md text-white">
          Edit
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        <DropDownInput
          label="Highest Education"
          placeholder="Select Education"
          options={educationOptions}
        />
        <DropDownInput
          label="What do you do currently?"
          placeholder="Select Role"
          options={jobOptions}
        />
      </div>
    </div>
  );
};

export default ProfInfoV2;
