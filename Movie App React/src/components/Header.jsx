import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router';


const StyledHeader = styled.div`
        position: relative;
        height: 15vh;
        background-color: #3f51b5;
        display: flex;
        align-items: center;
        gap: 18px;
    `;

    const StyledImage = styled.img`
        height: 80%;
        width: 20%;
    `;

    const StyledButton = styled.button`
        background: none;   
        border: none;
        font-size: 22px;
        a {
            text-decoration: none;
            color: white;
        }
        &:hover {
            cursor: pointer;
        }
    `
    
    const StyledLogin = styled.button`
        position: absolute;
        right: 10px;
        color: white;
        background: none;   
        border: none;
        font-size: 22px;
        &:hover {
            cursor: pointer;
        }
    `


const Header = ()=> {

    
    return (
        <>
            <StyledHeader>
                <StyledImage src="https://wizardly-carson-f4d936.netlify.app/static/media/logo.de1a664e.svg" alt="Logo"/>
                <StyledButton> <Link to="/">HOME</Link></StyledButton>
                <StyledButton>FAVORITE</StyledButton>
                <StyledButton>RATED</StyledButton>
                <StyledLogin>Login</StyledLogin>
            </StyledHeader>          
        </>
    )
}


export default Header;