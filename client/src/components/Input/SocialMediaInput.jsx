import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

const SocialMediaInput = ({
  platform,
  label,
  placeholder,
  value,
  onChange,
}) => {
  // Map the platform name to its corresponding icon
  const platformIcons = {
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
    youtube: <FaYoutube />,
    linkedin: <FaLinkedin />,
    pinterest: <FaPinterest />,
  };
  const platformIcon = platformIcons[platform];

  return (
    <div className="mb-2 w-1/2 p-2">
      <label className="block text-md font-medium mb-1">{label}</label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {platformIcon}
        </div>
        <input
          type="text"
          name={platform}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 sm:text-lg border-gray-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SocialMediaInput;
