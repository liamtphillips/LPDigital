
import React, { useRef, useEffect } from 'react';
import airbnb from '../assets/airbnb.svg';
import apple from '../assets/apple.svg';
import disney from '../assets/disney.svg';
import facebook from '../assets/facebook.svg';
import quora from '../assets/quora.svg';
import samsung from '../assets/samsung.svg';
import spark from '../assets/spark.svg';
import sass from '../assets/sass.svg';

const InfiniteScroll = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <main className="relative flex flex-col justify-center bg-noise overflow-hidden px-8 lg:px-0 lg:pb-20 pb-0">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
        <div className="text-center">
            <h1 className='text-xl font-bold py-10 text-white/60'>TRUSTED BY</h1>
          <div
            x-data="{}"
            x-init="$nextTick(() => {
            })"
            className="mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img src={facebook} alt="Facebook Logo" />
              </li>
              <li>
                <img src={disney} alt="Disney Logo" />
              </li>
              <li>
            <img src={airbnb} alt="Airbnb" />
        </li>
        <li>
            <img src={apple} alt="Apple" />
        </li>
        <li>
            <img src={spark} alt="Spark" />
        </li>
        <li>
            <img src={samsung} alt="Samsung" />
        </li>
        <li>
            <img src={quora} alt="Quora" />
        </li>
        <li>
            <img src={sass} alt="Sass" />
        </li>
    </ul>    
          </div>
        </div>
      </div>
    </main>
  );
};

export default InfiniteScroll;