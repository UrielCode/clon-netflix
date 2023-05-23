const key = 'a4a045cadc5ad7c90733afd47c064d36';

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-MX&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=es-MX&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-MX&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-MX&query=horror&page=2&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=es-MX&page=2`,
  requestAventure: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-MX&query=aventure&page=2&include_adult=false`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=es-MX&page=2`,

  
}

export default request