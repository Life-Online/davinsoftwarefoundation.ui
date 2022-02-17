import React from 'react'
import { ExperienceData } from '../../../_data/experienceData'
import ExperienceCard from './ExperienceCard'

function Experience() {
    const data = ExperienceData
  return (
    <div id="stories" className="py-10 my-7 ">
       {data.map((data, i) => {
           return (
               <>
               <div key={i} className="flex flex-col items-center w-5/12  mx-auto my-5 leading-norma; leading-tight " >
            <button className="bg-[#F5F5F5] text-[16px]  text-[#EB4C29] font-normal py-1 px-4 my-2  ">
                {data.title}
           </button>
           <h2 className="font-medium text-[45px] text-center w-8/12 my-3 ">
               {data.bigHeader}
           </h2>
           <p className='text-center text-[16px] font-normal ' >
               {data.text}
           </p>
               </div>
               <div className="flex justify-around">
               {data.training.map((data, i) => {
                   return   <ExperienceCard data={data} key={i} />
               })}
               </div>
             
             </>
               
           )
       })}
    </div>
  )
}

export default Experience


