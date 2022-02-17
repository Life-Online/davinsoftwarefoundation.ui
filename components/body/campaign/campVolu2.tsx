import Image from "next/image"
import { ArrowRightIcon } from '@heroicons/react/outline'

function campVolu2({data}) {
  return (
    <div className="w-[17rem] h-[13rem] my-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
    <a href="#" className="mt-3">
        <Image width="224px" height="137px"className="rounded-t-lg" src={data.campImg} alt="" />
    </a>
    <div className="p-2 w-[14rem] h-[3rem] flex flex-row justify-between items-center static">
            <h5 className="mb-2 font-bold text-[16px] text-[#EB4C29]  dark:text-white">{data.campText}</h5>
            <ArrowRightIcon className="h-4 w-4 text-[#EB4C29]"/>
    </div>
</div>
  )
}

export default campVolu2
