import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='bg-noise mx-auto lg:p-16'>
            <div className='container mx-auto px-8 lg:px-16'>
                <div className=" bg-maze2 z-10 bg-cover bg-center h-full flex items-center justify-center w-full border
             border-gray-800 rounded-3xl text-white flex-col text-center p-8 gap-6">
                    <h1 className='font-bold text-4xl mb-4 mt-10'>Transcend Noise, Unveil Opportunity</h1>
                    <p className='text-gray-400 max-w-2xl font-semibold text-lg md:text-xl'>Don't settle for surface-level chatter. With LP Digital you won't just stay informed
                        — you'll take the lead with every curated insight. Become a member today and discover why we're revered as industry thought leaders.</p>
                    <div className='flex flex-col lg:flex-row gap-4 py-4 mb-8 mt-4'>
                        <Link to="/about">
                            <button className='px-4 py-3 bg-blue-800 hover:bg-blue-900 duration-500 transition-all text-xl font-semibold rounded-lg'>Dive Deeper Today</button>
                        </Link>
                        <Link to="/contact">
                            <button className='px-4 py-3 bg-white hover:bg-gray-300 duration-500 transition-all text-black text-xl font-semibold rounded-lg'>Contact us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner