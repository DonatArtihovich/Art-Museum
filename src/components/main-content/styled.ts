import { Breakpoints } from "@constants/style";
import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
    ${(props) => css`padding: ${props.theme.paddings.XXL}px 0;`}
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: ${Breakpoints.S}px) {
        ${({theme}) => css`padding: ${theme.paddings.L}px 0 ${theme.paddings.XL}px;`}
    }
`

export const HeaderText = styled.h1`
    margin: 0 0 72px;
    font-weight: 700;
    font-size: 64px;
    text-transform: capitalize;
    text-align: center;
    ${(props) => css`
        color: ${props.theme.colors.primaryText};
        font-family: ${props.theme.fonts.secondary};
    `}

    @media(max-width: ${Breakpoints.M}px) {
        font-size: 36px;  
    }
`

export const SpecialHeaderText = styled.span`
    ${(props) => css`color: ${props.theme.colors.special};`}
`