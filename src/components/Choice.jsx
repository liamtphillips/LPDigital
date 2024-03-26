import React from 'react';
import { digitalData } from '../data.jsx';


const Choice = () => {
    return (
        <div id="choice" className='min-h-screen flex flex-col bg-noise items-center justify-center px-10 lg:px-0 md:mt-0 mt-12'>
            <h1 className='text-2xl lg:text-4xl text-white font-bold mb-24 text-center'>Why choose LP Digital?</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center justify-center'>
                {digitalData.map((data, index) => (
                    <div key={index} className='flex flex-col items-center max-w-md gap-2'>
                        <span className='text-cyan-300 text-7xl mb-6'>{data.icon}</span>
                        <h1 className='text-white text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-400 lg:text-lg text-md'>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Choice;