export const getGenres = async () => {
   const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
   );
   const data = await response.json();
   return data;
};
