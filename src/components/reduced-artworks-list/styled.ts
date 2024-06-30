import { Breakpoints } from "@constants/style";
import styled from "styled-components";

export const ListWrapper = styled.ul`
    margin: 0 auto;
    list-style: none;    
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1280px;
    padding: 0;

    @media(max-width: ${Breakpoints.XL}px) {
        justify-content: center;
    }
`