import { useState } from 'react';
import styled from 'styled-components';

const StyledPagination = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding-top: 25px;
        padding-bottom: 15px;
    `

    const StyledButton = styled.button`
        background: none;
        border: #3f51b5, solid, 0.5px;
        border-radius: 5px;
        padding: 10px;
        color:  #3f51b5;
        &:hover {
            cursor: pointer;
        }
    `

    const StyledCategory = styled.select`
        position: absolute;
        font-size: 15px;
        right: 15px;
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

    
const Pagination = (props)=> {

    const [option, setOption] = useState("Now Playing")

    const {updateApi} = props;

    const handleOptionChange = (e) => {
        const newOption = e.target.value;
        setOption(newOption);
        updateApi(option);
    }

    
    return (
        <>
            <StyledPagination>
                <StyledButton>PREV</StyledButton>
                PAGE NUMBER
                <StyledButton>NEXT</StyledButton>
                <StyledCategory onChange={handleOptionChange}>
                {/* 只需要对 select 添加事件即可，不需要逐一对每个 option 添加。 */}

                    <option value="Now Playing">Now Playing</option>
                    <option value="Popular">Popular</option>
                    <option value="Top Rated">Top Rated</option>
                    <option value="Upcoming">Upcoming</option>
                </StyledCategory>
            </StyledPagination>
        </>
    )
}

export default Pagination;