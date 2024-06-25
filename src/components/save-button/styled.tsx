import styled, { css } from "styled-components"

export const ArtworkSaveButton = styled((
    {
        background,
        ...props
    }: {
        background: string;
        [key: string]: any;
    }) => <button {...props} />
)`
    border-radius: 35px;
    padding: 17px;
    width: 59px;
    height: 59px;
    border: none;
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ background }) => css`background: ${background}`}

    &:hover {
        cursor: pointer;
    }

    @media(max-width: 960px) {
        width: 40px;
        height: 40px;
    }
`

export const ArtworkSaveImage = styled.img`
    width: 25px;
    height: 25px;

    @media(max-width: 960px) {
        width: 20px;
        height: 20px;
    }
`
