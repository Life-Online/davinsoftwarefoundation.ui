import React from 'react'
import Campaign from './campaign'
import Community from './community'
import Experience from './experience'
import Explore from './explore'
import Lifting from './lifting'
import Together from './together'

function Body() {
  return (
    <div className="mb-10 " >
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
