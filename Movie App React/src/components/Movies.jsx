import styled from 'styled-components';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';


const StyledMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin: 15px;
    gap: 15px;
`

const Movies = (props)=> {

    const [showMovieDetails, setShowMovieDetails] = useState(false);

    const {movieData, updateApi} = props;



    return (
        <>
            {!showMovieDetails && <Pagination updateApi={updateApi}/>}
            <StyledMovies>
                {movieData.map((movie) => {
                    return <MovieCard 
                    key={movie.id} 
                    movieId={movie.id}
                    title={movie.title} 
                    imgPosterPath={movie.poster_path}
                    rating ={movie.vote_average}
                    />
                })}
            </StyledMovies>
            
        </>
    )
}

export default Movies;