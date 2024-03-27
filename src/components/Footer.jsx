import React from 'react';
import logo from '../assets/digilogo3.png';

const Footer = () => {
  return (
    <footer
      className="text-center lg:text-left text-white bg-black/20">
      <div className='max-w-screen-2xl mx-auto p-6'>
        <div className="mx-6 py-10 text-center md:text-left lg:px-4">
          <img src={logo} alt="logo" className='w-12 mb-6' />
          <div className="flex flex-col md:flex-row justify-between text-left ">
            <div>
              <p className="mb-4 max-w-md text-gray-400 text-xs">
                Copyright © 2024 LP Digital Solutions Ltd. All rights reserved.
                LP Digital Solutions Ltd is registered in the UK under company number 12345678.
                Registered address: LP Digital Solutions Ltd, Mersey House, 10-14 Water Street, Liverpool, L1 8JW.
              </p>
            </div>
            <div className=''>
              <p className="mb-4 flex text-gray-400 md:justify-start">
                01 234 567 89
              </p>
              <p className="mb-4 flex text-gray-400 md:justify-start">
                contact@lpdigital.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer