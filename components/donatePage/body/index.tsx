import React from 'react'
import Building from './building'
import styles from '../../../styles/donatePage/body/donateBody.module.scss'


// import styles from  '../../../styles/body/body.module.scss'
// {`container ${styles.liftingContainer}`}
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
