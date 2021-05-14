export const getMoviesByGenre = async (genre_id, sortType, page) => {
   const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&.desc&page=${page}&with_genres=${genre_id}&sort_by=${sortType}`
   );
   const data = await response.json();

   return data.results;
};

export const getMovie = async movie_id => {
   const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
   );
   const data = await response.json();

   return data;
};

export const getMovieRecomendations = async movie_id => {
   const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
   );
   const data = await response.json();

   return data.results;
};

export const getMovieTrailer = async movie_id => {
   const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
   );
   const data = await response.json();
   return data.results[0];
};
