import React from 'react'
import styles from '../../../styles/body/campaign/campaign.module.css'
import { campaignData } from '../../../_data/campaignData'
import Image from 'next/image';
import ImpactNumbers from './ImpactNumbers';
import CampVolu from './CampVolu';
import CampVolu2 from './campVolu2';


function Campaign() {
  const data = campaignData
  return (
    <div id="" className="relative mb-10">
      {data.map((img, i) => {
        return (
          <div key={i}>
            <div>
              <Image className="opacity-[.8]" src={img.campaignBigImg} height={600} alt="" />
            </div>
            <div className="my-8">
              <p className="text-center text-[#EB4C29] font-bold text-[20px]">{img.impactTitle}</p>
              <div className="flex flex-row justify-evenly">
                <Image src={img.impactImage} alt="" />
                {img.lists.map((list, i) => {
                  console.log(list.listText, 'what i am expecting to see')
                  return (
                    <div className="mt-8" key={i}>
                      <ImpactNumbers data={list} />
                    </div>
                  )
                })}
              </div>

              {img.campVolu.map((list, i) => {
                return (
                  <div className="absolute bottom-[5rem] left-[7rem]" key={i}>
                    <CampVolu data={list} />
                  </div>
                )
              })}
              {img.campVolu2.map((data, i) => {
                return (
                  <div className="absolute right-[0px] top-[10rem]" key={i}> <CampVolu2 data={data} /> </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Campaign
