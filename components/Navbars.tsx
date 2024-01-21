import Image from 'next/image'
import Link from 'next/link'
import { IoIosHome } from "react-icons/io";
import { IoTicket } from "react-icons/io5";


import React from 'react'

const Navbars = () => {
  return (
  <nav className='flex justify-between items-center bg-nav p-4'>
    <div className='flex items-center justify-center space-x-4'>
      <Link
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
      </Link>
    </div>
    <div>
      <p className='text-default-text'>Log in</p>
    </div>
  </nav>
    
  )
}

export default Navbars