import { Breakpoints } from "@constants/style"
import styled, { css } from "styled-components"

export const SearchInputWrapper = styled.div`
    border-radius: 16px;
    box-sizing: border-box;
    padding: 16px;
    width: 762px;
    height: 64px;
    background: rgba(57, 57, 57, 0.05);
    display: flex;
    justify-content: space-between;

    @media(max-width: ${Breakpoints.M}px) {
        width: 500px;
    }

    @media(max-width: ${Breakpoints.S}px) {
        width: 370px;
    }
`

export const SearchInput = styled.input`
    font-weight: 400;
    font-size: 14px;
    border: none;
    background: transparent;
    outline: none;
    width: 90%;

    ${(props) => css`font-family: ${props.theme.fonts.primary};`}

    &::placeholder {
        ${(props) => css`color: ${props.theme.colors.inputPlaceholderText};`}
    }
`

export const SearchImage = styled.img`
    width: 32px;
    height: 32px;
`

export const SearchButton = styled.button`
    background: transparent;
    border: none;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`

export const Wrapper = styled.div`
   position: relative;
`

export const ErrorText = styled.p`
    font-family: var(--second-family);
    ${(props) => css`color: ${props.theme.colors.errorText};`}
    font-size: 16px;
    text-transform: underline;
    position: absolute;
    top: 60px;
`