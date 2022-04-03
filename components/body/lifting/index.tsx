import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { LiftingData } from '../../../_data/liftingData'
import LiftingCard from './LiftingCard'
import styles from '../../../styles/body/lift/lifting.module.scss'

function Lifting() {
  const data = LiftingData
  return (
    <>
      {data.map((item: any, id: number) => {
        return (
          <>
          <div className={`container py-3 mb-2  fluid ${styles.liftingContainer}`} id="home" key={id}  >
                <LiftingCard item={item} />
          </div>
          </>
        )
      })}
    </>
  )
}

export default Lifting
