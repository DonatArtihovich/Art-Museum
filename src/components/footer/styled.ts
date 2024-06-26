import { Breakpoints } from "@constants/style";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    max-width: 1280px;
    height: 127px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media(max-width: ${Breakpoints.XL}px) {
        padding: 0 20px;
        width: auto;
    }

    @media(max-width: ${Breakpoints.XS}px) {
        flex-direction: column;
        gap: 20px;
        padding-bottom: 30px;
    }
`

export const LogoImage = styled.img`
    width: 206px;
    height: 63px;
`

export const ModsenImage = styled.img`
    width: 164px;
    height: 59px;
`
