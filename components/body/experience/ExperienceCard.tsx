import Image from 'next/image'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import TutorsCard from './TutorsCard'
import styles from '../../../styles/body/experience/experinceCard.module.scss'

function ExperienceCard({ data }: { data: any }) {
  return (
    <>
    <div className="container"> 
      <div className="row">
        <div className="col col-md-4 col-sm-12 col-xs-12">
    <Card style={{ width: '' }} className={` p-2 my-5 bg-white rounded-lg border border-gray-200 shadow-xl   ${styles.experienceCardContainer}`} >
      <Image src={data.traningImg} className={`${styles.experienceCardImg}`} alt="" />
      <Card.Body>
        <Card.Text className={`my-2  text-[#EB4C29]  dark:text-white ${styles.experienceSmallText} `  }>{data.smallText}</Card.Text>
        <Card.Title className={` my-2 ${styles.experienceCardTitle} `}>{data.heading}</Card.Title>
        <Card.Text className={` ${styles.experienceText} `} >
          {data.text}
        </Card.Text>
        {data.tutors.map((data: any, i: number) => {
          return <TutorsCard data={data} key={i} />
        })}
      </Card.Body>
    </Card>
      </div>
      </div>
     </div>
   </>
  )
}

export default ExperienceCard
