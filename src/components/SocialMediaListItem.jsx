import React from 'react';

const SocialMediaListItem = ({ profileLink, imageSrc, name, role, description }) => {
  return (
    <li className="text-sm leading-6">
      <div className="relative group">
        <div className="absolute transition-all duration-500 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-blue-600/50 to-indigo-600/50 blur group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#1A1D25]/70 ring-1 ring-gray-900/5">
            <div className="flex items-center space-x-4">
              <img src={imageSrc} className="w-12 h-12 bg-center bg-cover rounded-full" alt={name} />
              <div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-gray-500 text-md">{role}</p>
              </div>
            </div>
            <p className="leading-normal text-gray-300 lg:text-lg">{description}</p>
          </div>
        
      </div>
    </li>
  );
};

export default SocialMediaListItem;