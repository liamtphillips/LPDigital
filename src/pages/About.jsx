import React from 'react'
import { motion } from 'framer-motion';
import aboutFace from '../assets/aboutFace.jpg';
import aboutFace2 from '../assets/aboutFace2.jpg';
import aboutFace3 from '../assets/aboutFace3.jpg';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <motion.div className='bg-noise'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className='text-center text-white flex flex-col items-center px-6 lg:px-0 container mx-auto'>
        <h1 className='py-2 md:text-5xl text-2xl font-bold max-w-2xl mt-36'>A team of industry experts and enthusiasts.</h1>
        <div className='flex mt-10'>
          <img src={aboutFace} className='w-14 h-14 rounded-full border-2 border-blue-700' />
          <img src={aboutFace2} className='w-14 h-14 rounded-full border-2 border-blue-700' />
          <img src={aboutFace3} className='w-14 h-14 rounded-full border-2 border-blue-700' />
        </div>
      </div>
      <div className='mt-20 max-w-2xl mx-auto px-10 lg:px-0 '>
        <div className='mb-20'>
          <h1 className='font-bold text-left text-3xl md:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 inline-block text-transparent bg-clip-text'>Who</h1>
          <p className='text-white text-md md:text-xl mt-10'>LP Digital boasts a formidable team of crypto research and analysts, renowned for their unrivaled expertise
            in navigating the volatile waters of the digital asset market. Led by seasoned veterans and fueled by a relentless pursuit of innovation,
            the team at LP Digital stays at the forefront of emerging trends and technologies.
            <br></br><br></br>
            Their meticulous analysis and strategic insights serve as a beacon for investors seeking to capitalize on the ever-evolving landscape of cryptocurrencies.
            With a dedication to excellence and a commitment to delivering unparalleled results, LP Digital sets the standard for excellence in the realm of digital
            asset research and analysis.</p>
        </div>
        <div className='mb-20'>
          <h1 className='font-bold text-left text-3xl md:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 inline-block text-transparent bg-clip-text'>What</h1>
          <p className='text-white text-md md:text-xl mt-10'>Within the industry, LP Digital's team of crypto research and analysts play a pivotal role in deciphering complex market dynamics and trends.
            Through in-depth analysis and cutting-edge research methodologies, they provide valuable insights into price movements, market sentiment, and emerging blockchain technologies. <br></br> <br></br>
            Leveraging their expertise, they offer tailored advisory services to institutional investors, hedge funds, and individual traders, empowering them to make informed decisions and optimize their investment strategies. </p>
        </div>
        <div className='mb-20'>
          <h1 className='font-bold text-left text-3xl md:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 inline-block text-transparent bg-clip-text'>Why</h1>
          <p className='text-white text-md md:text-xl mt-10'>At the core of LP Digital's mission lies a fervent belief in the democratization of finance and the transformative power of blockchain technology.
            They recognize the potential of cryptocurrencies to revolutionize traditional financial systems, making them more inclusive, transparent, and efficient.<br></br> <br></br>
            By providing robust research and analysis services, LP Digital seeks to empower investors with the knowledge and tools needed to navigate the complex crypto landscape confidently.
            We are driven by a commitment to fostering widespread adoption of digital assets, envisioning a future where financial opportunities are accessible to all.</p>
        </div>
        <div className='flex items-center  justify-center py-10 '>
          <Link to="/services">
            <button className='px-6 py-3 bg-blue-800 hover:bg-blue-900 transition-all duration-500 text-xl font-semibold rounded-lg text-white mb-10'>Learn more</button>
          </Link>
        </div>
      </div>
    </motion.div>

  )
}

export default About