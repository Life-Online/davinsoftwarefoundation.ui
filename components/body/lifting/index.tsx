import React from 'react'
import { LiftingData } from '../../../_data/liftingData'
import LiftingCard from './LiftingCard'
import styles from '../../../styles/body/lift/lifting.module.css'

function Lifting() {
  const data = LiftingData
  return (
    <>
      {data.map((item: any, id: number) => {
        return (
          <div id="home" key={id} className={styles.liftingContainer}>
            <LiftingCard item={item} />
          </div>
        )
      })}
    </>
  )
}

export default Lifting
