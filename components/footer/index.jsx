
import React from 'react'
import Image from 'next/image'
import image from '../../assets/img/Group 2.png'

function Footer() {
  return (
    <div className="w-full h-[452px] bg-[#2A2B2A] p-0 flex  flex-col " >
      <div className="   w-[80%] m-auto flex justify-around " >
        <div className="  w-[331px] h-[192px] mr-6 flex flex-col justify-evenly items-start ">
          <Image  src={image} alt=""  />
          <p className="text-[16px] font-normal text-[#fff] " >We’re bridging the technological gap that exists in African communities.</p>
        </div>
        <div className=" w-[555px] h-[214px] flex flex-row justify-between " > 
          <div className="flex flex-col" >
          <h5 className="font-bold text-[#807c7c] mb-3">Foundation</h5>
          <ul >
            <li className="flex flex-row justify-evenly mb-3">
              <a className="mr-4 text-[#fff] ">Home</a>
              <a className="mr-4 text-[#fff] ">Campaign</a>
              <a className="mr-4 text-[#fff] ">Careers</a>
            </li>
            <li>
              <a className="mr-4 text-[#fff]">About</a>
              <a className="mr-4 text-[#fff] ">Our Stories</a>
            </li>
          </ul>
          </div>
          <div>
          <h5 className="font-bold text-[#807c7c] mb-3">Get Involved</h5>
          <ul>
            <li className="text-[#fff]" >Donate</li>
            <li className="text-[#fff] ">Volounteer</li>
          </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#807c7c] mb-3">Help</h5>
            <ul>
              <li className="text-[#fff] ">Contact</li>
              <li  className="text-[#fff] ">FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


