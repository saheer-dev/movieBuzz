import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "../CSS/naviBar.css"
import { Link } from 'react-router-dom'

export default function Ecarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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

  const [trend, settrend] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        settrend(res.data.results);
      });
  }, []);

  return (
    <div className=" h-[90vh] mt-7 flex">

     
      <Carousel
        className="h-[calc(100vh-4rem)] w-[84vw] mx-auto rounded-2xl overflow-hidden"
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
        customTransition={"transform 3000ms ease-in-out"}
        transitionDuration={3000}
      >
        {trend.map((tre) => (
          <div className="relative aspect-[2/1] w-[80vw] mx-auto rounded-2xl overflow-hidden shadow-xl shadow-[#f6f7ff3c]">
            <img
              className="absolute inset-0 w-full h-full object-cover   "
              src={`https://image.tmdb.org/t/p/original/${tre.backdrop_path}`}
            />
            <div className="absolute inset-0 p-6 flex flex-col items-start justify-center bg-gradient-to-r from-black via-transparent gap-10 ">
              <h1 className="text-slate-300 text-4xl">{tre.original_title}</h1>
              <div className="w-[60vh]">
              <p className="text-slate-300 text-base">{tre.overview}</p>
              </div>
              <p className="text-slate-300 text-xs ">
                7 days free, $8.99/month.{" "}
              </p>
              <button className="w-[15rem] h-[2rem] bg-blue-400 rounded-md text-black">
                Watch Now
              </button>
              
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
