import React from 'react'
import styles from '../../../styles/body/together/togetherCard.module.scss'

function TogetherCard({ data }: { data: any }) {
  return (
    <div className={` p-5  ${styles.togetherCardContainer} `} >
      <div className={` p-0 m-auto   ${styles.togetherCardWrapper} `} >
        <h3 className={` w-8/12 text-white leading-tight mb-4 ${styles.togetherCardTitle} `} >{data.title}</h3>
        <button className="bg-[#fff] text-[12px]  text-[#EB4C29] font-bold py-2 px-4 mt-1 mr-3 rounded-full hover:text-[#fff] hover:bg-[#EB4C29] ">
          {data.btnText1}
        </button>
        <button className="bg-[#fff] text-[12px]  text-[#EB4C29] font-bold py-2 px-4 mt-1 rounded-full hover:text-[#fff] hover:bg-[#EB4C29]  ">
          {data.btnText2}
        </button>
      </div>
    </div>
  )
}

export default TogetherCard
