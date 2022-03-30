import React from 'react'
import styles from '../../../styles/donatePage/home/donateHomePage.module.scss'
import Header from '../../layout/Header/Header'
import DonateBody from '../../donatePage/body'

function DonatePage() {
  return (
    <div className={` ${styles.container} `}>
      <div>
        <Header/>
      </div>
      <div>
        <DonateBody />
      </div>
      <div> 
      </div>
    </div>
  )
}

export default DonatePage