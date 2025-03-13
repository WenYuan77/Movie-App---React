import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router';

const StyledMovieCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    gap: 5px;
    img {   
        width: 100%;
        height: auto;
    }
    `

const StyledReviewSection = styled.div`
    width: 100%;
    position: relative; 
    display: flex;
    justify-content: flex-start;
    .ion-star {
        color: rgb(245, 197, 24);
    }
    .ion-ios-heart-outline {
        position: absolute;
        right: 5px;
    }
    `

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    `
const MovieCard = (props)=> {

    const {title, imgPosterPath ,rating, movieId} = props;



    return (
        <>  
            <StyledMovieCard>
                <img src={`https://image.tmdb.org/t/p/w500${imgPosterPath}`} alt="picture unavailable"></img>
                <span> <StyledLink to={`movie-detail/${movieId}`}> {title} </StyledLink> </span>

                <StyledReviewSection>
                    <i class="ion-star"></i>
                    <div>{rating}</div>
                    <i class="ion-ios-heart-outline"></i>
                    
                </StyledReviewSection>
            </StyledMovieCard>
        </>
    )
}

export default MovieCard;