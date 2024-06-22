import styled from "styled-components"

export const FavoritesWrapper = styled.main`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderText = styled.h1`
    margin: 0;
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 64px;
    text-transform: capitalize;
    text-align: center;
    color: #393939;
`

export const SpecialHeaderText = styled.span`
    color: #f17900;
`

export const HeaderIcon = styled.img`
    width: 74px;
    height: 74px;
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