import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      const data = await fetchMovieReview(movieId);
      setReviews(data.results);
    };
    getData();
  }, [movieId]);

  if (!reviews) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map((user) => (
            <li className={s.item} key={user.id}>
              <h3 className={s.title}>Author: {user.author}</h3>
              <p className={s.text}>{user.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className={s.title}>We don’t have any reviews for this movie</h3>
      )}
    </div>
  );
};

export default MovieReviews;
