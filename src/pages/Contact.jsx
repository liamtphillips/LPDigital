import React from 'react'
import { FaPhone, FaNewspaper, FaUser, } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/digilogo3.png';

const Contact = () => {
  return (
    <motion.section className='bg-noise'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=' container mx-auto lg:px-20 py-10'>
        <div className="px-10">
          <div className='text-center flex flex-col items-center'>
            <h1 className='text-5xl text-white font-bold mt-28'>Get in touch</h1>
            <p className='text-lg font-semibold text-gray-400 mb-10 mt-5 max-w-2xl'>If you're interested in what we have to offer, message us for more information. Whether you're a solo investor or a business looking to increase your profits, we can help you.</p>
          </div>
          <div className='flex items-center justify-center'>
            <img src={logo} className='absolute pt-52 mt-80 z-[-1] w-80 h-auto' />
          </div>
          <div className='backdrop-blur-md bg-slate-900/50 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col xl:flex-row mt-8 '>
            <form className="w-full xl:w-1/2">
              <h1 className='text-2xl text-white font-semibold mb-4'>General Enquiry</h1>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-500 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none bg-black/50 rounded w-full py-2 px-3 text-gray-500 placeholder-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-500 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none bg-black/50 rounded w-full py-2 px-3 text-gray-500 placeholder-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-500 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="shadow appearance-none bg-black/50 rounded w-full py-2 px-3 text-gray-500 placeholder-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-900 duration-500 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className='px-3 w-full xl:w-1/2 xl:ml-14'>
              <h1 className='text-white text-2xl font-semibold mb-4 mt-10 xl:mt-0'>Contact us</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                <div className="flex gap-2 items-start py-2">
                  <div className='bg-blue-500/30 rounded-md border border-gray-600/50 p-4'>
                    <span className='text-blue-500 text-xl lg:text-4xl'><FaPhone /></span>
                  </div>
                  <div className='flex flex-col ml-4'>
                    <h1 className='whitespace-nowrap text-white mb-2'>Technical Support</h1>
                    <p className='text-gray-500'>support@lpdigital.com</p>
                    <p className='text-gray-500'>+123456789</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start py-2">
                  <div className='bg-blue-500/30 rounded-md border border-gray-600/50 p-4'>
                    <span className='text-blue-500 text-xl lg:text-4xl'><FaUser /></span>
                  </div>
                  <div className='flex flex-col ml-4'>
                    <h1 className='whitespace-nowrap text-white mb-2'>Member Services</h1>
                    <p className='text-gray-500'>members@lpdigital.com</p>
                    <p className='text-gray-500'>+987654321</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start py-2">
                  <div className='bg-blue-500/30 rounded-md border border-gray-600/50 p-4'>
                    <span className='text-blue-500 text-xl lg:text-4xl'><FaNewspaper /></span>
                  </div>
                  <div className='flex flex-col ml-4'>
                    <h1 className='whitespace-nowrap text-white mb-2'>Press</h1>
                    <p className='text-gray-500'>press@lpdigital.com</p>
                    <p className='text-gray-500'>+1122334455</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start py-2">
                  <div className='bg-blue-500/30 rounded-md border border-gray-600/50 p-4'>
                    <span className='text-blue-500 text-xl lg:text-4xl'><FaPhone /></span>
                  </div>
                  <div className='flex flex-col ml-4'>
                    <h1 className='whitespace-nowrap text-white mb-2'>General Inquiry</h1>
                    <p className='text-gray-500'>info@lpdigital.com</p>
                    <p className='text-gray-500'>+9988776655</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact