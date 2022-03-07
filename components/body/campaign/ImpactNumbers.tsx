import React from 'react'
import styles from '../../../styles/body/campaign/impactNumbers.module.scss'

function ImpactNumbers({ data }: { data: any }) {
  console.log(data)
  return (

    <div className={`container mt-2 p-3  ${styles.impactContainer} `}>
      <div className={`row justify-content-end`}>
        <div className={`col ${styles.impactListNumber}`}>
          {data.listNumber}
        </div>
        </div>
        <div className="row ">
        <div className={`col ${styles.impactListText}`}>
          {data.listText}
        </div>
      </div>
    </div>
  )
}

export default ImpactNumbers
