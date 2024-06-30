import { Breakpoints } from "@constants/style";
import styled from "styled-components";

export const MainWrapper = styled.main`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: ${Breakpoints.S}px) {
        padding: 60px 0 100px;
    }
`

export const HeaderText = styled.h1`
    margin: 0 0 72px;
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 64px;
    text-transform: capitalize;
    text-align: center;
    color: #393939;

    @media(max-width: ${Breakpoints.M}px) {
        font-size: 36px;  
    }
`

export const SpecialHeaderText = styled.span`
    color: #f17900;
`