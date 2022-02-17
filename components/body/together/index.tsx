import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/body/together/together.module.css'
import { TogetherData } from '../../../_data/togetherData'
import TogetherCard from './TogetherCard'

function Together() {
    const data = TogetherData
  return (
    <div className= {styles.together} >
        {data.map((data, i) => {
            return <TogetherCard data={data} key={i}  />
        })}
    </div>
  )
}

export default Together
