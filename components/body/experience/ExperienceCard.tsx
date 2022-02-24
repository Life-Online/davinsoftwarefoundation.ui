import Image from 'next/image'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import TutorsCard from './TutorsCard'

function ExperienceCard({ data }: { data: any }) {
  return (
    <Card style={{ width: '18rem' }} className=" p-2 my-5 bg-white rounded-lg border border-gray-200 shadow-xl  flex flex-col items-center" >
      <Image src={data.traningImg} alt="" />
      <Card.Body>
        <Card.Text className="my-2 font-normal text-[12px] text-[#EB4C29]  dark:text-white" >{data.smallText}</Card.Text>
        <Card.Title className="font-bold text-[20px]  my-2 ">{data.heading}</Card.Title>
        <Card.Text className="font-normal text-[16px]" >
          {data.text}
        </Card.Text>
        {data.tutors.map((data: any, i: number) => {
          return <TutorsCard data={data} key={i} />
        })}
      </Card.Body>
    </Card>
  )
}

export default ExperienceCard
