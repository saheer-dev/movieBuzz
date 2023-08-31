import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  const [eachi, setEachid] = useState([]);

  const [srchval, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${srchval}&&api_key=efb536b72f026a1ee09ebca3b1a7abff`
      )
      .then((res) => {
        setEachid(res.data.results);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, [srchval]);
  console.log(eachi);
  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-between ">
      <div className="mt-20 w-[70vw] h-[4vh] bg-white rounded-lg flex flex-row justify-center items-center">
        <input
          className="w-[70vw] rounded-bl-lg rounded-tl-lg bg-white p-[.7rem]   "
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Movies, Tv shows and otheres.."
        />
        <button className="w-40   p-[.7rem]  bg-green-600 rounded-tr-lg rounded-br-lg text-white font-mono">
          Search
        </button>
      </div>
          <div className="w-screen  grid grid-cols-4 place-content-center ">
      {eachi.map((se) => (
          <div className="relative h-[35rem] w-screen ">
          <div className="absolute inset-0 w-[15rem] h-[30rem] aspect-[1/2] rounded-xl overflow-hidden shadow-md shadow-[#9e9ea2a7]  ">
          <img
            className=" object-cover overflow-hidden rounded-2xl absolute inset-0"
            src={`https://image.tmdb.org/t/p/original/${se.poster_path}`}
          />
            <div className=" absolute inset-0 p-3 flex flex-col items-center justify-end bg-gradient-to-t gap-4 from-black via-[#0c0c0c53]">
            <h2 className="text-slate-300 text-xl text-left">{se.original_name}</h2>
            <button className="w-52 h-[2rem] bg-white rounded-md text-black  ">
              Watch Now
            </button>
          </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
