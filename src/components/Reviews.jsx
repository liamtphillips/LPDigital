import React from "react";
import SocialMediaListItem from "./SocialMediaListItem";
import { socialMediaData, socialMediaData2, socialMediaData3 } from "../data.jsx";

const Reviews = () => {
  return (
    <section id="testimonies" className="py-20 px-8 lg:px-0 bg-noise">
      <div className="container lg:px-16 px-0 mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center flex items-center justify-center flex-col">
            <h1 className="text-4xl font-bold text-white">
              Voices from the Industry
            </h1>
            <p className="md:text-xl text-md text-gray-300 md:text-center max-w-xl">
              From seasoned traders to industry pioneers,
              find out why Delphi is their go-to for crypto research & insights.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8 mt-6">
            {socialMediaData.map((data, index) => (
              <SocialMediaListItem key={index} {...data} />
            ))}
          </ul>
          <ul className="hidden space-y-8 sm:block">
            {socialMediaData2.map((data, index) => (
              <SocialMediaListItem key={index} {...data} />
            ))}
          </ul>
          <ul className="hidden space-y-8 lg:block mt-4">
            {socialMediaData3.map((data, index) => (
              <SocialMediaListItem key={index} {...data} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Reviews;
