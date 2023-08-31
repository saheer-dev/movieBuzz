import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function Upcoming() {
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

  const [upcome, setupcome] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        setupcome(res.data.results);
      });
  }, []);

  return (
    <div className="w-screen p-16 h-[45vh]">
    
        <h1 className="text-4xl text-slate-100 mb-4">Upcoming</h1>{" "}
        <hr  />
     
      <Carousel className="p-6" responsive={responsive}>
        {upcome.map((up) => (
          <div>
          <div className="relative h-[25vh] mx-3 aspect-video  rounded-xl overflow-hidden shadow-md shadow-[#f6f7ff3c]  ">
            <img
              className="aspect-video w-72 object-cover overflow-hidden rounded-2xl absolute inset-0 drop-shadow-md divide-red-200  "
              src={`https://image.tmdb.org/t/p/original/${up.backdrop_path}`}
            />
            <div className="absolute inset-0 p-3 flex items-end bg-gradient-to-t from-black via-transparent">
              <h2 className="text-slate-300 text-xl">{up.original_title}</h2>
            </div>
          </div>

          </div>
        ))}
      </Carousel>
 

    </div>
  );
}






















