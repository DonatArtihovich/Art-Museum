import styled from "styled-components"

export const FavoritesWrapper = styled.main`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 700px) {
        padding: 60px 0 100px;
    }
`

export const HeaderText = styled.h1`
    margin: 0;
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 64px;
    text-transform: capitalize;
    text-align: center;
    color: #393939;

    @media(max-width: 960px) {
        font-size: 36px;  
    }
`

export const SpecialHeaderText = styled.span`
    color: #f17900;
`

export const HeaderIcon = styled.img`
    width: 74px;
    height: 74px;

    @media(max-width: 960px) {
        width: 50px;
        height: 50px; 
    }
`

export const SpecialHeaderTextWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const NoFavoritesText = styled.p`
    margin: 0;
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 34px;
    text-transform: capitalize;
    text-align: center;
    color: #393939;
`