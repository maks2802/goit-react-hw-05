import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await fetchMovies(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  const handleSearch = async (newQuery) => {
    if (query === newQuery) return;
    if (!newQuery) {
      return setSearchParams({});
    }
    setSearchParams({
      query: newQuery,
    });
  };

  return (
    <div className={s.box}>
      <SearchBar onSearch={handleSearch} initialQuery={query} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
