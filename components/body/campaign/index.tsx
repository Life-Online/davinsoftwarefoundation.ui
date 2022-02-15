import React from 'react'
import styles from '../../../styles/body/campaign/campaign.module.css'
import {campaignData} from '../../../_data/campaignData'
import Image from 'next/image';
import ImpactNumbers from './ImpactNumbers';
import CampVolu from './CampVolu';


function Campaign() {
    const data = campaignData
  return (
     <div className="relative">
       {data.map((img, i) =>{
         return (
           <div key={i}>
             <div>
             <Image src={img.campaignBigImg} height={600} alt="" />
             </div>
             <div className="my-8">
               <p className="text-center text-[#EB4C29] font-bold text-[20px]">{img.impactTitle}</p>
               <div className="flex flex-row justify-evenly">
                 <Image src={img.impactImage}/>
                 {img.lists.map((list, i) => {
                    console.log(list.listText, 'what i am expecting to see')
                    return (
                      <div className="mt-8" key={i}>
                      <ImpactNumbers data={list}/>
                      </div>
                    )
                 })}
               </div>
               {img.campVolu.map((list, i) =>{
             return(
               <div key={i}>
                   <CampVolu data={list}/>
               </div>
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
