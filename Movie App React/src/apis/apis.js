const apiKey = "85e5ecfc5c100c38bf143afc97e3e39f";


export const apis = {
    popular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${state.currentPage}&api_key=${apiKey}`,
    nowPlaying:`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${state.currentPage}&api_key=${apiKey}`,
    topRated:`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${state.currentPage}&api_key=${apiKey}`,
    upComing:`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${state.currentPage}&api_key=${apiKey}`,
};



