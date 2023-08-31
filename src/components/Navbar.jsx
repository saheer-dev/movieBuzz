import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { List } from '@phosphor-icons/react'

export default function Navbar() {
  return (
    <div className='fixed z-[50000]'>
       <div>
       <div  className='w-screen h-[4rem] p-3 flex flex-row items-center justify-between bg-[#070318]'>
       <List size={32} color='white' />

            <Link to='/'>
            <div>
            <img className='h-14 pl-5' src={logo} alt="" />
            </div></Link>

            <div className='flex gap-16 justify-center items-center'>
              <Link to='/'>
            <h2 className='text-slate-100 font-bold text-lg'>Movies</h2>
              </Link>
           <Link to='Tvshow'>
           <h2 className='text-slate-100 font-bold text-lg'>TV Show</h2></Link>
            
            <h2 className='text-slate-100 font-bold text-sm'>More..</h2>
           </div>

            <div className='flex gap-8 items-center pr-4'>
                
            <div className='border-1'> 
            <button className='bg-[#0ac744] text-white w-64 h-10 rounded-sm'>START WITH YOUR FREE TRAIL</button>
            </div>
            <div className='animate-pulse flex space-y-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

            </div>
            <div>
                <p className='text-gray-100'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</p>

            </div>
            </div>

            
        </div>
       </div>
      
    </div>
  )
}
