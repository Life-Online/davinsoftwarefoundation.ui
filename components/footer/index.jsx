
import React from 'react'
import Image from 'next/image'
import image from '../../assets/img/Group 2.png'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import CopyRight from './CopyRight'
import Link from 'next/link';

function Footer() {
  return (
    <div id="contact" className="w-full h-[452px] bg-[#2A2B2A] p-0 flex  flex-col " >
      <div className="   w-[80%] m-auto flex justify-around " >
        <div className="  w-[331px] h-[192px] mr-6 flex flex-col justify-evenly items-start ">
          <Link href="#home" >
            <a>
          <Image  src={image} alt=""  />
          </a>
          </Link>
          <p className="text-[16px] font-normal text-[#fff] " >We’re bridging the technological gap that exists in African communities.</p>
          <div className="w-[104px] h-[24px] flex justify-around items-center " >
               <FaFacebookF className="text-[#807c7c] text-[20px]" />
               <FaInstagram className="text-[#807c7c] text-[20px]" />
               <FaTwitter  className="text-[#807c7c] text-[20px]" />
          </div>
        </div>
        <div className=" w-[555px] h-[214px] pt-5 flex flex-col justify-around">
        <div className="  flex flex-row justify-between " > 
          <div className="flex flex-col" >
          <h5 className="font-bold text-[#807c7c] mb-3">Foundation</h5>
          <ul >
            <li className="flex flex-row justify-evenly mb-3">
              <Link href="#home">
              <a className="mr-4 text-[#fff] hover:text-[#807c7c] ">Home</a>
              </Link>
              <Link href="#home">
              <a className="mr-4 text-[#fff] hover:text-[#807c7c] ">Campaign</a>
              </Link>
              <Link href="#home">
              <a className="mr-4 text-[#fff] hover:text-[#807c7c] ">Careers</a>
              </Link>
            </li>

            <li>
            <Link href="#home">
              <a className="mr-4 text-[#fff] hover:text-[#807c7c]">About</a>
              </Link>
              <Link href="#home">
              <a className="mr-4 text-[#fff] hover:text-[#807c7c] ">Our Stories</a>
              </Link>
            </li>
          </ul>
          </div>
          <div>
          <h5 className="font-bold text-[#807c7c] mb-3">Get Involved</h5>
          <ul>
            <li className="text-[#fff] mb-5 hover:text-[#807c7c]" >
            <Link href="#home">
             <a> Donate </a>
             </Link>
              </li>
            <li className="text-[#fff] mb-5 hover:text-[#807c7c] ">
            <Link href="#home">
            <a> Volounteer </a> 
            </Link>
              </li>
          </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#807c7c] mb-3">Help</h5>
            <ul> 
              <li className="text-[#fff] mb-5 hover:text-[#807c7c] ">
              <Link href="#home">
              <a> Contact </a> 
              </Link>
                </li>
              <li  className="text-[#fff] mb-5 hover:text-[#807c7c] ">
              <Link href="#home">
               <a> FAQs </a>
               </Link>
                </li>
            </ul>
          </div>
        </div>
        <div className=" mt-4 pt-2">
          <p className="font-bold text-[#807c7c] text-[16px] center my-2" >Sign Up for newsletter</p>
          <div className="mb-3 pt-0 w-[315px] h-[82px]">
            <form className="flex flex-row grow-[2] relative items-center">
               <input type="text" placeholder="Enter your email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded-full text-sm border border-blueGray-300 outline-none  w-full" />
               <button className="bg-[#EB4C29] text-[12px] absolute right-0 text-[#fff] font-normal py-2 px-5 m-2 rounded-full  ">
                Sign Up
                </button>
            </form>
          </div>
        </div>
        </div>
      </div>
      <CopyRight/>
    </div>
  )
}

export default Footer


