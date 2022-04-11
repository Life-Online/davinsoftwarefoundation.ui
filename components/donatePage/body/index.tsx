import React from 'react'
import Building from './building'
import styles from '../../../styles/donatePage/body/donateBody.module.scss'


function DonateBody() {
  return (
    <div className={`  ${styles.container} `}>
      <section >
          <Building/>
      </section>
    </div>
  )
}

export default DonateBody
