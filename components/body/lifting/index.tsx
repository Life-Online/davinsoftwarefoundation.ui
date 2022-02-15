import React from 'react'
import {LiftingData} from '../../../_data/liftingData'
import LiftingCard from './LiftingCard'
import styles from '../../../styles/body/lift/lifting.module.css'

function Lifting() {
  const data = LiftingData
  // console.log(data)
  return (
    <>
      {data.map((item, id) =>{
        return(
          <div key={id} className={styles.liftingContainer}>
             <LiftingCard item={item}/>        
          </div> 
        )  
      })}
      </>  
  )
}

export default Lifting
