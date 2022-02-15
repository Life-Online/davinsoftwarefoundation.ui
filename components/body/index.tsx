import React from 'react'
import Campaign from './campaign'
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
    </div>
  )
}

export default Body
