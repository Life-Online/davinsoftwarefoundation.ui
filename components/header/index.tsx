import React, {useState} from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import styles from '../../styles/header/header.module.scss'
import image from '../../assets/img/Group 2.png'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={styles.navHeader}>
      <nav className='flex items-center flex-wrap '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src={image} className={styles.navHeadImg} alt='' width={170} height={40} />
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-orange-500 rounded lg:hidden text-orange-500 ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:flex lg:justify-between lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start mr-10  flex flex-col lg:h-auto'>
            <Link href='#home'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center '>
                Home
              </a>
            </Link>
            <Link href='#about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center '>
                About
              </a>
            </Link>
            <Link href='#exploring'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center '>
                Campaign
              </a>
            </Link>
            <Link href='#stories'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center '>
                Our Stories
              </a>
            </Link>
            <Link href='#contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center '>
                Contact
              </a>
            </Link>
          </div>
          <button type="button" className=" navBtn text-white bg-[#EB4C29]  focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-7 py-2.5 text-center mb-2">Donate</button>
        </div>
      </nav>
    </div>
  )
}

export default Header


