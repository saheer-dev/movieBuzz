import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function Tcarousel() {
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

  const [onAir, setonAir] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        setonAir(res.data.results);
      });
  }, []);

  return (
    <div className="h-screen pt-10 ">
      <Carousel
        className="h-[calc(100vh-4rem)] mx-auto rounded-2xl overflow-hidden"
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
        customTransition={"transform 3000ms ease-in-out"}
        transitionDuration={3000}
      >
        {onAir.map((on) => (
          <div className="relative h-screen w-screen mx-auto overflow-hidden mt-5">
            <img
              className="absolute inset-0 w-full h-full object-cover overflow-hidden   "
              src={`https://image.tmdb.org/t/p/original/${on.backdrop_path}`}
            />
            <div className="absolute inset-0 p-6 flex flex-col items-start justify-center bg-gradient-to-r from-black via-blue/50 gap-10 ">
              <h1 className="text-slate-300 text-4xl">{on.original_name}</h1>
              <div className="w-[60vh]">
              <p className="text-slate-300 text-base">{on.overview}</p>
              </div>
              <p className="text-white text-lg ">{on.first_air_date}</p>
              <button className="w-[15rem] h-[2rem] bg-blue-400 rounded-md text-black">
                Notify Me
              </button>
              
              <p className="text-slate-300 text-xs ">
                7 days free, $8.99/month.{" "}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
