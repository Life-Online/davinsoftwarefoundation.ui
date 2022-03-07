import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/body/community/community.module.scss'
import {CommunityData} from '../../../_data/communityData'
import CommunityCard from './CommunityCard'

function Community() {
    const data = CommunityData
    console.log(data, 'community')
  return (
    <div id="about" className={`container mt-3 py-4 ${styles.community} `} >
      {data.map((data, i) => {
          return <CommunityCard data={data} key={i} />
      })}
    </div>
  )
}

export default Community
