import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { defaultImg, fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  const movieYear = new Date(movie.release_date).getFullYear();

  return (
    <div className={s.box}>
      <Link className={s.btn} to={goBackRef.current}>
        Go back
      </Link>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
        width={250}
      />
      <h2 className={s.title}>
        {movie.title} ({movieYear})
      </h2>
      <p className={s.text}>Runtime: {movie.runtime} min</p>
      <h3 className={s.subtitle}>Overview</h3>
      <p className={s.text}>{movie.overview}</p>
      <h3 className={s.subtitle}>Genres</h3>
      <p className={s.text}>
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>

      <nav>
        <h3 className={s.subtitle}>Additional information</h3>
        <ul className={s.list}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
