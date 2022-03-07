import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/body/together/together.module.scss'
import { TogetherData } from '../../../_data/togetherData'
import TogetherCard from './TogetherCard'

function Together() {
  const data = TogetherData
  return (
    <div id="exploring" className={` container ${styles.together}`} >
      {data.map((data: any, i: number) => {
        return <TogetherCard data={data} key={i} />
      })}
    </div>
  )
}

export default Together
