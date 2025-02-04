import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { defaultImg, fetchMovieCast } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data.cast);
    };
    getData();
  }, [movieId]);

  if (!cast) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li className={s.item} key={actor.id}>
            <img
              className={s.image}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width={150}
            />
            <p className={s.text}>
              {actor.name} - {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
