export const getMoviesByGenre = async (genre_id, sortType, page) => {
   const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=${sortType}.desc&page=${page}&with_genres=${genre_id}`
   );
   const data = await response.json();

   return data.results;
};
