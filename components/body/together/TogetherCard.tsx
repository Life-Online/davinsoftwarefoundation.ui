import React from 'react'

function TogetherCard({data}) {
  return (
    <div className=" p-5 w-[800px] h-[334px] " >
        <div className=" items-center p-0 m-auto mt-9 w-[609px] h-[206px]  ">
      <h3 className="font-medium text-[50px] w-8/12 text-white leading-tight mb-4 " >{data.title}</h3>
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
