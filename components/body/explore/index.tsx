import React from 'react'
import { ExploreData } from '../../../_data/exploreData'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowRightIcon } from '@heroicons/react/outline'
import ExploreCard from './ExploreCard'

function Explore() {
  const data = ExploreData
  return (
    <div className="my-6">
      {data.map((data: any, i: number) => {
        return (
          <div key={i}>
            <button className="bg-[#F5F5F5] text-[#EB4C29] font-normal py-2 px-4 rounded">
              {data.title}
            </button>
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-[56px] w-[540px] h-[146px] leading-[4rem] ">{data.titleHeader}</h2>
              <p className="w-[540px] h-[48px] text-black">{data.text}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex ">
                <ArrowCircleLeftIcon className="h-7 w-7 text-[#EB4C29] hover:fill-[#EB4C29]  hover:text-[#fff] mr-2 " />
                <ArrowCircleRightIcon className="h-7 w-7  text-[#EB4C29]  hover:fill-[#EB4C29] hover:text-[#fff]" />
              </div>
              <div className="flex flex-row items-center cursor-pointer text-[#EB4C29] font-medium">
                <p>View All</p>  <ArrowRightIcon className="h-4 w-4 ml-3" />
              </div>
            </div>
            <div className="my-4 flex justify-center">
              {data.campaignCard.map((data: any, i: number) => {
                return (
                  <ExploreCard data={data} key={i} />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Explore
