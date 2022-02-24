import Image from 'next/image'
import React from 'react'

function TutorsCard({ data }: { data: any }) {
  return (
    <div className="flex justify-evenly items-center my-3" >
      <Image src={data.tutorImg} alt="" />
      <div>
        <h4 className="font-bold text-[16px]">
          {data.tutorName}
        </h4>
        <p className="font-normal text-[12px]" >
          {data.tutorCareer}
        </p>
      </div>
    </div>
  )
}

export default TutorsCard
