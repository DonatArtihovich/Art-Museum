import styled from "styled-components";

export const MainWrapper = styled.main`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderText = styled.h1`
    margin: 0 0 72px;
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

export const SectionHeader = styled.header`
    margin: 120px 0 40px;
    display: flex;
    flex-direction: column;
`

export const SectionHeaderTitle = styled.h2`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 32px;
    color: #393939;
    margin: 0;
    text-align: center;
`

export const SectionHeaderSubtitle = styled.span`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    color: #e0a449;
    text-align: center;
`

export const ReducedArtworksList = styled.ul`
    margin: 0 auto;
    list-style: none;    
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1280px;
`