export const getMoviesByGenre = async (genre_id, sortType, page) => {
   const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&.desc&page=${page}&with_genres=${genre_id}&sort_by=${sortType}`
   );
   const data = await response.json();

   return data.results;
};
