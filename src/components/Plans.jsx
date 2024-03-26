import React from 'react'
import PlanCard from './PlanCard'
import { planData } from '../data'



const Plans = () => {
    return (
        <section className=' bg-noise mx-auto py-10 items-center justify-center flex flex-col px-8 lg:px-0'>
            <h1 className='text-white text-4xl mb-20 font-bold '>Our plans</h1>
            <div className=''>
                <div className='flex flex-wrap justify-center gap-16'>
                    {planData.map((item, index) => (
                        <div key={index} className='w-full max-w-2xl flex justify-center flex-grow mb-10'>
                            <PlanCard
                                key={index}
                                title={item.title}
                                imageSrc={item.imageSrc}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
                </div>
          
        </section>
    )
}

export default Plans