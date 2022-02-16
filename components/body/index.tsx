import React from 'react'
import Campaign from './campaign'
import Community from './community'
import Explore from './explore'
import Lifting from './lifting'

function Body() {
  return (
    <div>
      <section>
        <Lifting/>
      </section>
      <section>
        <Campaign/>
      </section>
      <section>
        <Community/>
      </section>
      <section>
        <Explore/>
      </section>
    </div>
  )
}

export default Body
