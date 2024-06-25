import styled from "styled-components";

export const ListWrapper = styled.ul`
    margin: 0 auto;
    list-style: none;    
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1280px;
    padding: 0;

    @media(max-width: 1440px) {
        justify-content: center;
    }
`