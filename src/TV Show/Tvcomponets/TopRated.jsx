
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
export default function TopRated() {
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
  const [topRated, settopRated] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        settopRated(res.data.results);
      });
  }, []);
  return (
    <div className="w-screen pl-7  mx-auto ">
        <h1 className="text-4xl text-slate-100 mb-4">Top Rated</h1>{" "}
        <hr  />
      <Carousel className="p-6 " responsive={responsive}
    //    autoPlay={true}
       infinite={true}
      
      
      >
        {topRated.map((top) => (
            <div className="relative h-[30rem] mb-[5rem]  ">
            <div>
            <div className="absolute inset-0 w-[15rem] h-[30rem] aspect-[1/2] rounded-xl overflow-hidden shadow-md shadow-[#9e9ea2a7]  ">
            <img
              className=" object-cover overflow-hidden rounded-2xl absolute inset-0"
              src={`https://image.tmdb.org/t/p/original/${top.poster_path}`}
            />
              <div className=" absolute inset-0 p-3 flex flex-col items-center justify-end bg-gradient-to-t gap-4 from-black via-[#0c0c0c53]">
              <h2 className="text-slate-300 text-xl text-left">{top.original_name}</h2>
              <button className="w-52 h-[2rem] bg-white rounded-md text-black  ">
                Watch Now
              </button>
            </div>
            </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}