import React from "react";

const MovieCard = ({ movie }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="m-20 ">
      <img src={imgUrl} alt="" className="w-full   rounded-2xl " />
      <div className="mt-3 flex space-x-20">
        <div>
          <h3 className="font-bold text-2xl">{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
        </div>
        <div className="grid space-y-3">
          <button className="bg-[#D97706] px-3 text-white rounded-md">
            Add to favourites
          </button>
          <button className="bg-[#D97706] px-3 text-white rounded-md">
            {" "}
            Add to watch later
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
