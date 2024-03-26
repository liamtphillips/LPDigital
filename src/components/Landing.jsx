import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import bgline2 from '../assets/maze.svg';
import mockup from '../assets/dash.png';
import { Link as ScrollLink } from "react-scroll";
import { motion } from 'framer-motion';


const Landing = () => {
    return (
        <motion.section className=' bg-noise bg-cover lg:min-h-screen lg:px-0 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className=''>
                <img src={bgline2} className='absolute top-0 opacity-40 lg:opacity-10 z-[-1] max-w-screen mx-auto' />
            </div>
            <div className='flex flex-col justify-center items-center px-10'>
                <div className='flex flex-col text-center mt-36'>
                    <h1 className='text-white font-bold text-2xl lg:text-5xl'>We will guide you<br></br>through the digital maze</h1>
                </div>
                <p className='lg:max-w-2xl md:max-w-md mt-6 text-center text-gray-400 text-sm lg:text-lg font-semibold'>We are trusted by industry leaders to simplify the intricacies of the crypto world, offering comprehensive research and analysis that's both actionable and insightful for investors and innovators alike.</p>
                <div className='mt-8 '>
                    <ScrollLink to="choice" smooth={true} duration={1000} offset={-80}>
                        <button
                            className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-blue-800 py-1 pl-6 pr-14 font-medium text-neutral-50 ">
                            <span className="z-10 pr-2 font-semibold">Explore Now</span>
                            <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-900 duration-300 transition-[width] group-hover:w-[calc(100%-8px)]">
                                <div className="mr-4 flex items-center justify-center">
                                    <FaArrowDown />
                                </div>
                            </div>
                        </button>
                    </ScrollLink>
                </div>
            </div>
            <div className='flex items-center justify-center mt-20'>
                <img src={mockup} className='max-w-9xl ' />
            </div>
        </motion.section>
    )
}

export default Landing