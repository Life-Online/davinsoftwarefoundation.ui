import React from 'react'

function ImpactNumbers({data}) {
  console.log(data)
  return (
    <div className="flex flex-col  items-start w-[9rem]">
      <div className="font-bold text-[42px]">
      <p>{data.listNumber}</p>
      </div>
      <div className="text-[16px] font-normal text-black">
      <p>{data.listText}</p>
      </div>
    </div>
  )
}

export default ImpactNumbers
