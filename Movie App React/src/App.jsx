import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Movies from "./components/Movies";
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router';
import { useState } from "react";
import { useEffect } from "react";
import MovieDetailCard from "./components/MovieDetailCard";


const apiKey = "85e5ecfc5c100c38bf143afc97e3e39f";
const apis = {
    popular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`,
    nowPlaying:`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`,
    topRated:`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`,
    upComing:`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`,
};


function App() {

  const [api, setApi]= useState(`${apis.nowPlaying}`);
  const [movieData, setMovieData] = useState([]);

  const fetchMovieData = () => {
    fetch(api)
      .then(res => {
          return res.json();
          })
      .then(data => {
          const movieData = data.results;
          setMovieData(movieData);

          localStorage.setItem("movieData", JSON.stringify(movieData));
          })
        }
    
  const updateApi = (option)=> {
    if (option === "Now Playing") {
      setApi(apis.nowPlaying);
    } else if (option === "Popular") {
      setApi(apis.popular);
    } else if (option === "Top Rated") {
      setApi(apis.topRated);
    } else {
      setApi(apis.upComing);
    }
  }  

  useEffect(()=> {
          fetchMovieData();
  }, [api])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Movies movieData={movieData} updateApi={updateApi}/>}/>

        <Route path="movie-detail/:movieId" element={<MovieDetailCard movieData={movieData}/>}/>
      </Routes>
    </>
  )
}



export default App;
