import Image from 'next/image'
import Link from 'next/link'
import { IoIosHome } from "react-icons/io";
import { IoTicket } from "react-icons/io5";


import React from 'react'
import { asideMenu } from '@/constants';
import { UserButton } from '@clerk/nextjs';

const Navbars = () => {
  return (
  <nav className='hidden lg:flex justify-between items-center bg-nav p-4'>
    <div className='flex items-center justify-center space-x-4'>
      {/* <Link
      className='flex items-center justify-center gap-2' 
      href='/'>
        <IoIosHome 
        className='icon'/>
        Home
      </Link>
      <Link
      href='/TicketPage/new'
      className='flex items-center justify-center gap-2'>
        <IoTicket
  className='icon'
          />
          Tickets
      </Link> */}
      {asideMenu.map((item, i) => (
    
        <Link 
        href={item.href}>
          <p>{item.title}</p>
          <Image
          src={item.icon}
          width={24}
          height={24}
          alt='asda'
          className='text-white' />
        </Link>
      ))}
    </div>
    <div>
    <UserButton afterSignOutUrl="/"/>
    </div>
  </nav>
    
  )
}

export default Navbars