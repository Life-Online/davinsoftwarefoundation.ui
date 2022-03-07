import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '../../../styles/body/campaign/campaign.module.scss'
import { campaignData } from '../../../_data/campaignData'
import Image from 'next/image';
import ImpactNumbers from './ImpactNumbers';
import CampVolu from './CampVolu';
import CampVolu2 from './campVolu2';


function Campaign() {
  const data = campaignData
  return (
    <div className={`container  my-3 py-3  ${styles.campaignContainer}`}>
      {data.map((img, i) =>{
        return(
           <>
          <div className="row ml-5 ">
          <div className="col py-2 mt-2">
          <Image className="" src={img.campaignBigImg} height={520} width={1080} alt="" />
          </div>
        </div>
        <p className={`text-center ${styles.campaignText} `}>{img.impactTitle}</p> 
        <div className="row p-3 ">
          <div className="col ">
          <Image src={img.impactImage} alt="" />
          </div>
          {img.lists.map((list, i) => {
                  return (
                    <div className={`col mt-3 p-2    ${styles.impactNumber} `} key={i}>
                      <ImpactNumbers data={list} />
                    </div>
                  )
                })}
        </div>
        {img.campVolu.map((list, i) => {
                return (
                  <div className={`absolute ${styles.campVolu}`}key={i}>
                    <CampVolu data={list} />
                  </div>
                )
              })}
                {img.campVolu2.map((data, i) => {
                return (
                  <div className={` ${styles.campVolu2} `} key={i}> <CampVolu2 data={data} /> </div>
                )
              })}
        </>
        )
      })}
    
    </div>
  )
}

export default Campaign
