import axios from "axios";
import { createContext, useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTVkMTUxNjEyZWNjZTQxMjNiZWVhZDRiZTkzM2Y5MCIsInN1YiI6IjY1Y2NjZWNmNGEwYjE5MDE2M2NlNjRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.66XejO_svOeQ4-NlX7JZYsQ41drPR5TL0wXqr7NCkBU",
          },
        }
      );

      setIsEmpty(false);
      setMovies(response.data.results);
    };
    fetchData();
  }, [search]);
  return (
    <>
      <SideNav />
      <MovieDisplay
        isEmpty={isEmpty}
        movies={movies}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}

export default App;
