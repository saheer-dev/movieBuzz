import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function PopularTV() {
  const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [popular, setpopular] = useState([]);
  useEffect(() => {
    axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        setpopular(res.data.results);
      });
  }, []);

  return (
    
    <div className=" w-screen p-10">
        <div className="flex justify-between items-center">
         
      <h1 className="text-4xl text-slate-100 mb-4">Popular</h1>{" "}

   
    <div className="flex  mt-8 items-center ">
    <p className="text-slate-100  font-bold text-lg">View All</p><div className="animate-pulse flex space-x-4">
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg>
      </div>

</div>
    

      </div>
      <hr />
      <Carousel
        className="p-6"
        responsive={responsive}
      >
        {popular.map((pop) => (
          <div className="relative mx-3 aspect-video  rounded-xl overflow-hidden shadow-md shadow-[#f6f7ff3c] mb-4">
            <img 
              className="aspect-video w-72 object-cover overflow-hidden rounded-2xl absolute inset-0  " 
              src={`https://image.tmdb.org/t/p/original/${pop.backdrop_path}`}
            />


             <div className="absolute inset-0 p-3 flex items-end bg-gradient-to-t from-black via-transparent" >
              <h2 className="text-slate-300 text-xl">{pop.original_name}</h2>
            </div>
            

            
          </div>
        ))}
      </Carousel>
      
    </div>
  );
}