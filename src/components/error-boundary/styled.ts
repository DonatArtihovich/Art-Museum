import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    ${(props) => css`background: ${props.theme.colors.secondary};`}
`

export const ErrorText = styled.h1`
    font-size: 30px;
    ${(props) => css`font-family: ${props.theme.fonts.secondary}`};
`

export const ResetButton = styled.button`
    padding: 15px 30px;
    background: #343333;
    ${(props) => css`
        background: ${props.theme.colors.secondary};
        font-family: ${props.theme.fonts.secondary};
    `}
    border-radius: 10px;
    border: none;
`