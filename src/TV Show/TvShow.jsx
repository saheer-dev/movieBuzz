import React from 'react'
import Tcarousel from './Tvcomponets/TCarousel'
import Today from './Tvcomponets/Today'
import TopRated from './Tvcomponets/TopRated'
import PopularTV from './Tvcomponets/PopularTV'

export default function TvShow() {
  return (
    <div className='bg-black'>
        <Tcarousel/>
        <Today/>
        <TopRated/>
        <PopularTV/>
      
    </div>
  )
}
