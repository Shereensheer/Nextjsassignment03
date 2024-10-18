'use client'

import React from 'react'
import Link from 'next/link'

function NAVBAR() {
  return (
    <div className='bg-fuchsia-800 h-14'>
        <div className='text-white flex justify-between items-center'>

        <h1 className='m-2 text-4xl'>SHEREEN WEB</h1>
        <ul className='flex gap-20 mr-3 text-2xl '>
            <Link href=""  className='hover:text-slate-400'>HOME</Link>
            <Link href="/about" className='hover:text-slate-400' >ABOUT</Link>
            <Link href="/contact" className='hover:text-slate-400' >CONTACT</Link>
            <Link href="/skills"  className='hover:text-slate-400'>SKILLS</Link>
        </ul>
    </div></div>
  )
}

export default NAVBAR