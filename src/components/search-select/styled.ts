import styled, { css } from "styled-components";

export const SelectWrapper = styled.select`
    padding: 15px;
    border-radius: 10px;
    ${(props) => css`border: 2px solid ${props.theme.colors.secondary};`}
    outline: none;
    ${(props) => css`color: ${props.theme.colors.primaryText};`}
    font-family: var(--second-family);
    align-self: flex-end;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    &::dropdown {
        border: 1px solid red;
    }
`

export const SelectOption = styled.option`
    ${(props) => css`color: ${props.theme.colors.secondary};`}

    &:hover {
        cursor: pointer;
    }
`

export const ErrorText = styled.p`
    ${(props) => css`
        color: ${props.theme.colors.errorText};
        font-family: ${props.theme.fonts.secondary};
    `}
    font-size: 16px;
    text-transform: underline;
    position: absolute;
    top: 60px;
`