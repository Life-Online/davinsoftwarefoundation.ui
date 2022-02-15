
import React from 'react'
import styles from '../../../styles/body/lift/liftingCard.module.css'

function LiftingCard({item}) {
  return (
    <div className={styles.liftingCard}> 
      <div className={styles.liftingHeader}>{item.liftHeader}</div>
     <div className={styles.liftingTitle}>{item.liftTitle}</div> 
    </div>
  )
}

export default LiftingCard

