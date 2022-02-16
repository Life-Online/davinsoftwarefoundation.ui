import Image from 'next/image'
import React from 'react'

function ExploreCard({data}) {
  return (
    <div className="shadow-lg flex flex-row justify-between items-center pl-2 mr-4 rounded-lg ">
      <div>
          <Image src={data.cardImg} alt="" className="" />
      </div>
      <div className="w-[360px] p-5 ">
          <h2 className="font-bold text-[26px] leading-8 ">{data.cardHeader}</h2>
          <p className="text-[14px]"  >{data.cardText}</p>
          <p className="text-[12px] my-2" >{data.cardDate}</p>
          <button className="bg-[#EB4C29] text-[12px]  text-white font-normal py-1 px-4 mt-1 rounded-full">
                {data.cardBtn}
           </button>
      </div>
    </div>
  )
}

export default ExploreCard
