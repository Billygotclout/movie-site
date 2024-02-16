import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search for a movie"
        className="px-20 py-5 w-full outline outline-3 lg:w-1/2 outline-[#ECBB83] rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
