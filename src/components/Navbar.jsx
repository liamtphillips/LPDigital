import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import digiLogo from '../assets/digilogo3.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 backdrop-blur-sm bg-black/60'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-4 xl:px-14 container mx-auto'>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center justify-center'>
            <img
              src={digiLogo}
              alt='/'
              className='cursor-pointer w-10 h-10 hidden md:block'
            />
            <p className='font-custom1 text-white ml-2 mt-1'>LP DIGITAL</p>
          </Link>
        </div>

        <div>
          <ul className='hidden md:flex text-gray-300'>
            <li className='ml-10 text-sm font-semibold hover:text-white duration-500 transition-all'>
              <Link to='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm font-semibold hover:text-white duration-500 transition-all'>
              <Link to='/about'>About</Link>
            </li>
            <li className='ml-10 text-sm font-semibold hover:text-white duration-500 transition-all'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='ml-10 text-sm font-semibold hover:text-white duration-500 transition-all'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className='md:hidden text-white'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] h-screen bg-black p-10 ease-in duration-500'
              : 'fixed left-[-100%] w-[75%] h-screen top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between text-white'>
              <Link to='/'>
                  <img
                    src={digiLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-white/50 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='py-4 text-white'>
                We will guide you through the digital maze.
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col text-white'>
            <ul className='font-semibold'>
              <Link to='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link to='/about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link to='/services'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Services
                </li>
              </Link>
              <Link to='/contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase font-custom1 tracking-widest text-white'>
                LP DIGITAL
              </p>                      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;