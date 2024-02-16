import React from "react";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

const MovieDisplay = ({ isEmpty, movies, search, setSearch }) => {
  return (
    <div className="ml-[17.8rem] bg-gradient-to-tr from-slate-200 to-gray-200 p-20">
      <SearchBar search={search} setSearch={setSearch} />

      {movies.length ? (
        <div className="grid lg:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-3xl text-gray-600">No results found!</p>
      )}
    </div>
  );
};

export default MovieDisplay;
