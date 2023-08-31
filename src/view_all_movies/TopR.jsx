import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";


export default function TopRate() {

  const [toprate, settoprate] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        settoprate(res.data.results);
      });
  }, []);
  return (
    <div className=" p-16 grid grid-cols-4 gap-36 bg-black">

        {toprate.map((top) => (
            <div className="">
            <div>
            <div className="w-[18rem]  pb-6 rounded-xl overflow-hidden border flex flex-col justify-center items-center gap-6  ">
              <div className="">
              <img
              className=" object-cover overflow-hidden rounded-2xl drop-shadow-md divide-red-200  "
              src={`https://image.tmdb.org/t/p/original/${top.poster_path}`}
            />
            <div className="pl-6 gap-3 mt-3">
            <h2 className="text-white text-xl">{top.original_title}</h2>
              <h2 className="text-white text-sm">{top.original_title}</h2>
              <h2 className="text-white text-sm">{top.vote_average}⭐</h2>
              <h2 className="text-white text-xs">{top.release_date}</h2>
            </div>
                        
         
              
              </div>
              
          
              <button className="w-52 h-[2rem] bg-[#3ed06a] rounded-md text-black  ">
                Watch Now
              </button>
              <div className="h-[10rem] px-3 pb-4 gap-2">
     
              <div className=" ">
              <h2 className="text-white text-lg">Story:</h2>
              <p className= "h-[10rem]  text-justify text-white text-sm ">{top.overview}</p>
   
              </div>
            
          
           
            
              </div>
            

            </div>
            </div>
          </div>
        ))}

    </div>
  )}