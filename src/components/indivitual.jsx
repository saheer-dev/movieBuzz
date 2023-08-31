import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Indivitual() {
  const loc = useLocation();

  const [trend, setrend] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${loc.state.id}?api_key=efb536b72f026a1ee09ebca3b1a7abff`
      )
      .then((res) => {
        console.log(res.data.results);
        setrend(res.data);
      });
  }, []);
  console.log(trend);


  return (
    <div className='  w-[100vw] bg-white flex flex-col items-center justify-center mt-11'>
    <div className=' relative  w-[100vw] h-[95vh] my-[6.5vh] overflow-hidden'>
        <img
        src={`https://image.tmdb.org/t/p/original/${trend.backdrop_path}`}
        className='absolute inset-0  object-cover'
        alt="" />
        <div className='absolute inset-0 bg-gradient-to-t from-[#aca6a649] to-[#a69f9f31]'></div>
        <div className='absolute inset-0 flex '>
            <div className=' my-auto ml-[5rem] flex md:flex-col items-center justify-center'>
                <img
                src={`https://image.tmdb.org/t/p/original/${trend.poster_path}`}
                className='aspect-[3/4] w-[20rem] rounded-xl '
                alt="" />
            </div>
            <div className='w-[70vw] h-[10] p-[5rem] font-lato text-white'>
                <h1 className='text-[3rem]'>{trend.original_title}</h1>
                <h1 className=''>{trend.release_date}</h1>
                <h1 className='w-[30rem] text-justify leading-6'>{trend.overview}</h1>
            </div>
        </div>
    </div>
</div>
  );
}
