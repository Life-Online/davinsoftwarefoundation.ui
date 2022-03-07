import React from 'react'
import { ExploreData } from '../../../_data/exploreData'
import styles from '../../../styles/body/explore/explore.module.scss'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowRightIcon } from '@heroicons/react/outline'
import ExploreCard from './ExploreCard'

function Explore() {
  const data = ExploreData
  return (
    <>
    {data.map((data: any, i: number) => {
      return(
        <>
        <div key={i} className={`container my-4 py-4`}>
        <button className="bg-[#F5F5F5] text-[#EB4C29] font-normal py-2 px-4 rounded">
               {data.title}
             </button>
        <div className="row">
          <div className="col">
         <div className="row align-items-end">
           <div className="col col-md-6 col-sm-12">
           <h2 className={`${styles.exploreHeader}`}>{data.titleHeader}</h2>
           </div>
           <div className="col col-md-6 col-sm-12">
           <p className={ ` text-black ${styles.exploreText} `}>{data.text}</p>
           </div>
           <div className={`flex  justify-between ${styles.iconContainer}`}>
             <div className="flex">
             <ArrowCircleLeftIcon className="h-7 w-7 text-[#EB4C29] hover:fill-[#EB4C29]  hover:text-[#fff] mr-2 " />
                <ArrowCircleRightIcon className="h-7 w-7  text-[#EB4C29]  hover:fill-[#EB4C29] hover:text-[#fff]" />
             </div>
             <div className="flex justify-content-center cursor-pointer text-[#EB4C29] font-medium  ">
             <p>View All</p>  
             <ArrowRightIcon className="h-4 w-4 ml-3 center mt-1" />
             </div>
           </div>
         </div>
         <div className="    flex flex-row justify-evenly ">
          
          {data.campaignCard.map((data: any, i: number) => {
            console.log(data, i, 'this wan for campaign card');
               return (
                 <>
                 <div className="  ">
                 <ExploreCard data={data} key={i} />
                 </div>
                 </>
               )
             })}
       </div>
         </div>
         </div>
        </div>
      </>
      )
    })}
    </>
    

  )
}

export default Explore
