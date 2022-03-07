import React from 'react'
import Campaign from './campaign'
import Community from './community'
import Experience from './experience'
import Explore from './explore'
import Lifting from './lifting'
import Together from './together'

import styles from  '../../styles/body/body.module.scss'
{`container ${styles.liftingContainer}`}
function Body() {
  return (
    <div className= {`my-5 ${styles.bodyContainer}`} >
      <section>
        <Lifting />
      </section>
      <section>
        <Campaign />
      </section>
      <section>
        <Community />
      </section>
      <section>
        <Explore />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Together />
      </section>
    </div>
  )
}

export default Body
