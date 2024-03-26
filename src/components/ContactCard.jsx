import React from 'react';


const ContactCard = ({ icon, title, email, phone }) => {
  return (
    <div className="flex gap-2 items-start py-2">
      <div className='bg-blue-500/30 rounded-md border border-gray-600/50 p-4'>
        <span className='text-blue-500 text-xl lg:text-4xl'>{icon}</span>
      </div>
      <div className='flex flex-col ml-4'>
        <h1 className='whitespace-nowrap text-white mb-2'>{title}</h1>
        <p className='text-gray-500'>{email}</p>
        <p className='text-gray-500'>{phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
