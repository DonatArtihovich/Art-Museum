import { Breakpoints } from "@constants/style";
import styled, { css } from "styled-components";

export const GallerySliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArtworkCardsList = styled.ul`
    margin: 0 0 94px;
    list-style: none;
    display: flex;
    gap: 60px;
    padding: 0;

    @media(max-width: ${Breakpoints.M}px) {
        gap: 30px;    
    }
`

export const NoArtworksText = styled.p`
    font-weight: 400;
    font-size: 24px;
    ${(props) => css`
        color: ${props.theme.colors.secondaryText};
        font-family: ${props.theme.fonts.secondary};
    `}
    margin: 0;
    text-align: center;
`