
import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import styles from '../../../styles/body/lift/liftingCard.module.scss'

function LiftingCard({ item }: { item: any }) {
  var lastWord = "";
  var x = 0;
  console.log(item.liftHeader.length, "Length")
  console.log(item.liftHeader, "word")

  for (var i = 0; i < item.liftHeader.length; i++) {
    if (item.liftHeader[i] == " ") {
      lastWord = "";
      x = i;
    }
    lastWord += item.liftHeader[i];
  }
  var header_container = item.liftHeader.slice(0, x)
  console.log(header_container, "clipped")
  console.log(lastWord, "Lastword")


  return ( 

    <div className= {`container ${styles.liftingCard}`} >
      <div className="row justify-content-between items-center">
        <div className={`col-8 ${styles.liftingHeader}`}>
        {header_container}
        <span>{lastWord}</span>
        </div>
        <div className={`col-5 text-end  ${styles.liftingTitle} `}>
        {item.liftTitle}
        </div>
      </div>
    </div>
  )
}

export default LiftingCard

