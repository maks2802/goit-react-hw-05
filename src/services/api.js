import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmNhZTBlNjE5YjBiYmQ2NTZmYzIzYmJhZjJhM2NkZSIsIm5iZiI6MTczODQyNzI4MS44MzAwMDAyLCJzdWIiOiI2NzllNGI5MTBkMTlmMzBhYzE5NTQ4ZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7JR38KyXHIHU2nQQjs_ik_T0HFFCYRyWZfcCtw47_tw",
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US`,
    options
  );
  return data.results;
};

export const fetchMovies = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

export const fetchMovieReview = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};

export const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
