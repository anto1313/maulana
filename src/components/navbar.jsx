import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4 px-2'>
        <div className='flex items-center gap-[1ch]'>
            <div className='w-5 h-5 bg-blue-400 rounded-2xl animate-pulse'/>
            <span className='text-sm font-semibold tracking-widest font-extrabold'>MAULANA</span>
        </div>
        <div className='flex gap-12 text-md text-zinc-400'>
            <Link href="/Page.js" className='text-black font-medium'>Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
        </div>
    </nav>
  )
}
