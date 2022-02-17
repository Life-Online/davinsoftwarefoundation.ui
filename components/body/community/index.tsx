import Image from 'next/image'
import React from 'react'
import {CommunityData} from '../../../_data/communityData'
import CommunityCard from './CommunityCard'

function Community() {
    const data = CommunityData
    console.log(data, 'community')
  return (
    <div id="about" className="mb-8" >
      {data.map((data, i) => {
          return <CommunityCard data={data} key={i} />
      })}
    </div>
  )
}

export default Community
