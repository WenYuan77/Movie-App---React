import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';


const apiKey = "85e5ecfc5c100c38bf143afc97e3e39f";

const StyledMovieDetailCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
    gap: 20px;

`
const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledGenres = styled.div`
    display: flex;
    gap: 5px;
    span {
        font-size: 18px;
        color: white;
        border-radius: 5px;
        background-color: rgb(1, 180, 228);
        padding: 4px;
    }
`

const StyledRating = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .ion-star {
        color: rgb(245, 197, 24);
    }
`

const StyledYourRating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    gap: 15px;
    div {
        border: 1px solid rgba(0, 0, 0, 0.23);
        border-radius: 5px;
        padding: 7px 15px;
        &:hover {
            cursor: pointer;
            border-color: #888; 
        }
        &:focus {
        border-color: #1976d2; 
        box-shadow: 0 0 5px rgba(25, 118, 210, 0.5);
        }
    }
`

const StyledRatingSelector = styled.select`
    font-size: 15px;
    padding: 5px 10px; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
    background-color: white; 
    color: #333; 
    cursor: pointer; 
    outline: none; 
    &:hover {
        border-color: #888; 
    }
    &:focus {
        border-color: #1976d2; 
        box-shadow: 0 0 5px rgba(25, 118, 210, 0.5);
    }
`

const MovieDetailCard = ()=> {
    
    const [genreTypes, setGenreTypes] = useState([]);
    const [confirmedGenreTypes, setConfirmedGenreTypes] = useState([]);

    const params = useParams();
    const {movieId} = params;

    const storedData = JSON.parse(localStorage.getItem("movieData"));

    const movieDetail = storedData.find((movie) => {
            return String(movie.id) === movieId; // 一般 params 都是 string，所以需要用 “String” 方法将数字变为 string。
        });


    const getAllGenreTypes = ()=> {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setGenreTypes(data.genres);
            })
        }
    
    const getConfirmedGenreTypes = () => {
        const genreIds = movieDetail.genre_ids;
        const newConfirmedGenreTypes = [];
        genreIds.forEach((genreId) => {
            genreTypes.find((genreType) => {
                if (genreId === genreType.id) {
                    newConfirmedGenreTypes.push(genreType.name);
                }
            })
        })
        setConfirmedGenreTypes(newConfirmedGenreTypes);
    }

    useEffect(()=> {
        getAllGenreTypes();
    }, [])

    useEffect(()=> {
        getConfirmedGenreTypes();
    },[genreTypes])

    return (
        <>
            <StyledMovieDetailCard>
                <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}/>
                <StyledDetails>
                    <h1>{movieDetail.title}</h1>
                    <h3>Release Date:</h3>
                    <span>{movieDetail.release_date}</span>
                    <h3>Overview:</h3>
                    <p>{movieDetail.overview}</p>
                    <h3>Genres:</h3>
                    <StyledGenres>
                        {confirmedGenreTypes.map((genreType) => {
                            return <span> {genreType} </span>
                        })}
                    </StyledGenres>
                    <h3>Average Rating:</h3>
                    <StyledRating>
                        <i class="ion-star"></i>
                        <div>{movieDetail.vote_average}</div>
                    </StyledRating>           
                    <h3>Your Rating:</h3>
                    <span>Not yet</span>
                    <StyledYourRating>
                    <StyledRatingSelector>
                        <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                    </StyledRatingSelector>
                        <div>RATE IT!</div>
                    </StyledYourRating>
                </StyledDetails>
            </StyledMovieDetailCard>
        </>
    )
}

export default MovieDetailCard;