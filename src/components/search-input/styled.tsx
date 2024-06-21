import styled from "styled-components"

export const SearchInputWrapper = styled.div`
    border-radius: 16px;
    box-sizing: border-box;
    padding: 16px;
    width: 762px;
    height: 64px;
    background: rgba(57, 57, 57, 0.05);
    display: flex;
    justify-content: space-between;
`

export const SearchInput = styled.input`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    border: none;
    background: transparent;
    outline: none;
    width: 90%;

    &::placeholder {
        color: rgba(57, 57, 57, 0.5);
    }
`

export const SearchImage = styled.img`
    width: 32px;
    height: 32px;
`