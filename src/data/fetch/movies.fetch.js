export const getMoviesByGenre = async ({ genre_id, sortType }) => {
   const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=${sortType}.desc&with_genres=${genre_id}`
   );
};
