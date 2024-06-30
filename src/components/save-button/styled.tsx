import { Breakpoints } from "@constants/style";
import { HTMLProps } from "react";
import styled, { css } from "styled-components"

type ArtworkSaveButtonProps = {
    background?: string;
} & HTMLProps<HTMLButtonElement>

export const ArtworkSaveButton = styled((
    {
        background,
        ...props
    }: ArtworkSaveButtonProps) => <button {...props} type='button' />
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
    ${({ background }) => background
        ? css`background: ${background}`
        : css`background: rgba(251, 215, 178, 0.3)`
    }

    &:hover {
        cursor: pointer;
    }

    @media(max-width: ${Breakpoints.M}px) {
        width: 40px;
        height: 40px;
    }
`

export const ArtworkSaveImage = styled.img`
    width: 25px;
    height: 25px;

    @media(max-width: ${Breakpoints.M}px) {
        width: 20px;
        height: 20px;
    }
`
