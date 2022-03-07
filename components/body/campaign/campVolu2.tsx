import Image from "next/image"
import styles from '../../../styles/body/campaign/campVolu2.module.scss'
import { ArrowRightIcon } from '@heroicons/react/outline'

function campVolu2({ data }: { data: any }) {
  return (
    <div className= {`card p-2   ${styles.campVoluCard}`}>
    <Image src={data.campImg} className={`card-img-top p-1 ${styles.campImg} `} alt=""/>
    <div className={` p-2 mx-2   ${styles.campCardBody}`}>
      <p className={`card-text  ${styles.campVoluText} `}>{data.campText}</p>
      <ArrowRightIcon className="h-4 w-4 mb-3  text-[#EB4C29]" />
    </div>
  </div>
  )
}

export default campVolu2
