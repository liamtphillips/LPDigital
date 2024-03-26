import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Accordion = ({ title, text, accordionText, image }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-slate-900/50 backdrop-blur-sm flex flex-col p-10 rounded-xl max-w-7xl mx-auto mb-10'>
            <div className='flex lg:flex-row flex-col lg:items-center'>
                <img src={image} className='border border-gray-600/50 rounded-xl bg-blue-500/30 w-28 mb-4 lg:mb-0' alt='Tech' />
                <div className='flex flex-col p-0 lg:p-6'>
                    <h1 className='mb-4 md:text-3xl text-xl text-gray-400 font-bold'>{title}</h1>
                    <p className='font-semibold text-gray-400 text-md lg:text-xl'>{text}</p>
                </div>
            </div>
            <div className='flex justify-between items-center cursor-pointer mt-4 lg:mt-0' onClick={toggleAccordion}>
                <h1 className='text-2xl text-blue-500 font-bold '>The Process</h1>
                <h1 className={`text-white text-4xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</h1>
            </div>
            {isOpen && (
                <div className='mt-8'>
                    <p className='text-gray-400 text-md lg:text-xl font-semibold'>{accordionText}</p>
                </div>
            )}
            <div className='border-b border-gray-400/20 mt-10'></div>
            <div className='flex justify-center items-center mt-8'>
                <Link to="/contact">
                <button className='bg-white hover:bg-gray-400 transition-all duration-500 text-xl font-semibold rounded-lg py-2 px-4'>Enquire about this service</button>
                </Link>
            </div>
        </div>
    );
};

export default Accordion;