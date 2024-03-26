import React from 'react';
import Accordion from '../components/Accordion';
import { motion } from 'framer-motion';
import { servicesArray, accordionArray } from '../data.jsx';

const Services = () => {

  return (
    <motion.section className='flex flex-col bg-noise lg:min-h-screen px-6 py-5 lg:px-0'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
      <div className='text-center text-white mx-auto mt-32'>
      <h1 className='py-2 text-2xl md:text-5xl font-bold max-w-2xl'>Consulting Services</h1>
        <p className='text-md font-semibold lg:text-xl text-gray-400 mt-5 mb-10 px-2 '
        >Partnering with LP Digital means we become an integral part of your team, dedicated to assisting you in achieving your overarching objectives and mission.</p>
      </div>
      <div className='mt-10'>
        <div>

          {accordionArray.map((item, index) => (
            <Accordion key={index} title={item.title} text={item.text} accordionText={item.accordionText} image={item.image} />
          ))}
        </div>
      </div>
      <div className='text-center text-white mt-24 mx-auto'>
      <h1 className='py-2 text-2xl md:text-5xl font-bold max-w-2xl'>The LP Advantage</h1>
        <p className='text-md font-semibold lg:text-xl text-gray-400 max-w-xl mt-5 mb-10 px-2'>Partnering with LP Digital means we become an integral part of your team, dedicated to assisting you in achieving your overarching objectives and mission.</p>
      </div>
      <div className='container mx-auto mt-10 mb-10'>
        <div className='gap-4 flex flex-col'>

          {servicesArray.map(({ title, text }, index) => (
            <div className='bg-slate-900/50 backdrop-blur-sm flex flex-col p-10 rounded-xl max-w-7xl mx-auto' key={index}>
              <h1 className='text-3xl text-gray-400 font-bold'>{title}</h1>
              <p className='text-gray-400 font-semibold lg:text-xl text-md mt-4'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Services