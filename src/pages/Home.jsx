import React from 'react'
import Reviews from '../components/Reviews';
import Choice from '../components/Choice';
import Banner from '../components/Banner';
import Plans from '../components/Plans';
import InfiniteScroll from '../components/InfiniteScroll';
import Landing from '../components/Landing';

const Home = () => {

  return (
    <>
      <div>
        <Landing />
        <InfiniteScroll />
        <Choice />
        <Plans />
        <Reviews />
        <Banner />
      </div>
    </>
  );
}


export default Home