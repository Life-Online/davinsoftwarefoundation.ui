
import React from 'react'
import styles from '../../../styles/body/lift/liftingCard.module.css'

function LiftingCard({item}) {
  var lastWord = "";
  var x = 0;
  console.log(item.liftHeader.length,"Length")
  console.log(item.liftHeader,"word")

  for(var i = 0;i<item.liftHeader.length;i++) {
    if(item.liftHeader[i] ==  " "){
      lastWord = "";
      x = i;
    }
    lastWord += item.liftHeader[i];
  }
  var header_container = item.liftHeader.slice(0, x)
  console.log(header_container,"clipped")
  console.log(lastWord,"Lastword")


  return (
    <div className={styles.liftingCard}> 
      <div className={styles.liftingHeader}>
        {header_container}
        <span className="text-[#EB4C29]">{lastWord}</span>
        </div>
     <div className={styles.liftingTitle}>{item.liftTitle}</div> 
    </div>
  )
}

export default LiftingCard

