import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/body/explore/exploreCard.module.scss'

function ExploreCard({ data }: { data: any }) {
  console.log(data, 'for explore')
  return (


    <div className={`container  p-3 ${styles.exploreCardContainer} `}>
    <div className="row  shadow-lg p-1">
      <div className="flex col col-md-6 col-sm-12  ">
      <Image src={data.cardImg} alt="" className="w-[100px] h-[100px] " />
      </div>
      <div className="col col-md-6 col-sm-12">
      <p className="font-bold text-[18px] leading-8 ">{data.cardHeader}</p>
      <p className="text-[14px]"  >{data.cardText}</p>
      <p className="text-[12px] my-2" >{data.cardDate}</p>
      <button className="bg-[#EB4C29] text-[12px]  text-white font-normal py-1 px-4 mt-1 rounded-full">
           {data.cardBtn}
         </button>
      </div>
    </div>
    </div>
  )
}

export default ExploreCard
