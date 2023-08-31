import React from 'react'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'


export default function Footer() {
  return (
    <div className='w-screen flex flex-col items-center mt-7 bg-black '>
      <div className=' w-[33vw] h-[10rem] box-border flex flex-col gap-3 items-center border-b mt-7'>
        <h1 className='text-5xl font-bold text-slate-200'>Select your plan</h1>
        <p className='text-slate-200 text-base mt-5'>No hidden fees,equipment rentals, or installation appointments.</p>
        <p className='text-slate-200 font-bold'>Switch plans or cancel anytime.**</p>
      </div>
      <div className='mt-10 flex flex-col items-center'>
        <button className='w-44 h-10 flex box-border justify-center items-center bg-green-600 rounded-full text-slate-900 font-light'>MOST POPULAR</button>
        <div className='flex h-48'>
          <div className='w-80 h-72 flex flex-col gap-4 mt-8 items-center'>
            <p className='text-slate-200'> 30 DAY FREE TRAILS</p>
            <p className='text-slate-200 font-bold'>MovieBuzz(With Ads)</p>
            <button className='bg-slate-100 w-60 h-10 rounded-t-sm font-thin'>$7.99/MONTH</button>
          </div>
          <div>
          <div className='w-80 h-72 flex flex-col gap-4 mt-8 items-center'>
            <p className='text-slate-200'> 30 DAY FREE TRAILS</p>
            <p className='text-slate-200 font-bold'>MovieBuzz(No Ads)</p>
            <button className='bg-slate-100 w-60 h-10 rounded-t-sm font-thin'>$14.99/MONTH</button>
          </div>
          </div>
        </div>
      </div>

      <div className='w-screen h-[75vh] bg-white flex flex-col pl-28'>

       <div className=' flex items-center gap-28 pl-20 w-[83vw] h-[40vh] border-b-2'>
       <div className='flex flex-col'>
          <p className='font-bold '>BROWSE</p>
          <p className='font-thin'>Streaming Libarary</p>
          <p className='font-thin'>Live TV</p>
          <p className='font-thin'>Live News</p>
          <p className='font-thin'>Live Sports</p>
        </div>

        <div className='flex flex-col mt-3'>
          
          <p className='font-thin'>TV Show</p>
          <p className='font-thin'>Movies</p>
          <p className='font-thin'>Originals</p>
          <p className='font-thin'>Networks</p>
          <p className='font-thin'>Kids</p>
          <p className='font-thin'>FX</p>
        </div>
        
        <div className='flex flex-col'>
          
          <p className='font-thin'>Max</p>
          <p className='font-thin'>Cinemax</p>
          <p className='font-thin'>Showtime</p>
          <p className='font-thin'>STARZ</p>
        </div>
        <div className='flex flex-col'>
          
          <p className='font-thin'>Disney Bundle Trio Basic</p>
          <p className='font-thin'>Disney Bundle Trio<br/>Premium </p>
          <p className='font-thin'>Disney Bundle Duo Basic</p>
          <p className='font-thin'>Student Discount</p>
        </div>

        <div className='flex flex-col'>
          <p className='font-bold '>CREDITS</p>
          <p className='font-thin'>Sumayya CP</p>
          <p className='font-thin'>Kaviya M</p>
          <p className='font-thin'>Rashid MP</p>
          <p className='font-thin'>Sachin </p>
          <p className='font-thin'>Anshed K </p>
          <p className='font-thin'>LevelX</p>
        </div>

        <div className='flex flex-col'>
          <p className='font-bold '>ABOUT US</p>
          <p className='font-thin'>LevelX</p>
          <p className='font-thin'>Accadamy</p>
          <p className='font-thin'>Jobs</p>
          <p className='font-thin'>Contact</p>
        </div>
       </div>

       <div className='w-[20vw] h-[6rem]  flex items-center justify-center gap-10'>
         <img className='w-7' src={facebook} alt="" />
          <img className='w-7' src={twitter} alt="" />
           <img className='w-8' src={youtube} alt="" />
             <img className='w-6' src={instagram} alt="" />
         </div>

         <div className='flex gap-20 pt-32 '>
          <p className='font-thin text-xs'>2023 MovieBuzz,LLC</p>
          <p className='font-thin text-xs'>About Ads</p>
          <p className='font-thin text-xs'>Subscriber Agreement</p>
          <p className='font-thin text-xs'>Privacy Policy</p>
          <p className='font-thin text-xs'>Do Not Sell Personal Information</p>
          <p className='font-thin text-xs'>Your Privecy Rights</p>
          <p className='font-thin text-xs'>TV Parental Guidelines</p>
          <p className='font-thin text-xs'>sitemap</p>
         </div>

        

      </div>
      
      
    </div>
  )
}
