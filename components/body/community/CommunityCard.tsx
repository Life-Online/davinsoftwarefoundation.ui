import Image from 'next/image'
import React from 'react'

function CommunityCard({ data }: { data: any }) {
  return (
    <div className="flex flex-row  items-center justify-between">
      <div>
        <Image src={data.communityImg} alt="" />
      </div>
      <div className="w-2/4">
        <button className="bg-[#F5F5F5] text-[#EB4C29] font-normal py-2 px-4 rounded">
          {data.title}
        </button>
        <p className="font-bold text-[46px] leading-[130%] tracking-normal mt-2 ">{data.header}</p>
        <p className="text-[16px] font-normal my-3">{data.text}</p>
        <button className="bg-[#EB4C29]  text-white font-normal py-2 px-4 mt-4 rounded-full">
          {data.btnText}
        </button>
      </div>
    </div>
  )
}

export default CommunityCard
