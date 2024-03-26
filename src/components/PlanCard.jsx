import React from 'react';
import { Link } from 'react-router-dom';
const PlanCard = ({ title, imageSrc, description, ctaText }) => {
  return (
    <div className='flex flex-col max-w-2xl bg-black rounded-3xl border border-gray-800'>
      <img src={imageSrc} className='rounded-t-3xl  h-[200px] object-cover' />
      <div className='px-6'>
        <h1 className='text-3xl font-bold text-gray-300 mt-4'>{title}</h1>
        <p className='md:text-xl text-md text-gray-400 font-medium mt-4 mb-4'>{description}</p>
        <Link to="/contact">
          <h2 className='font-bold text-xl text-blue-500 mb-6 cursor-pointer hover:text-blue-700 transition-all duration-200'>
            Join LP Digtal
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;