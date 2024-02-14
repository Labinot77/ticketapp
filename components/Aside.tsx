import { asideMenu } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Aside = () => {
  return (
    <aside className='hidden lg:flex ml-12 px-4 py-12 border-r-[1px] border-nav'>
      <div className='flex flex-col gap-12'>
        <h4 className='text-3xl'>Tickets</h4>

        <div>
          <ul className='flex flex-col p-2 gap-4'>
            {asideMenu.map((item, index) => (

              <Link
              href={item.href}>
                <p className='text-lg'>
                  {item.title}
                  </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Aside