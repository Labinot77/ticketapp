import { asideMenu } from '@/constants'
import Link from 'next/link'
import React from 'react'


const Bottombar = () => {
  return (
    <div className='lg:hidden p-4'>
      <ul className='flex justify-between items-center gap-6'>
        {asideMenu.map((item, index) => (
          <Link
          href={item.href}>
            <p>{item.title} </p>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Bottombar