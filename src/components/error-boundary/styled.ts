import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    background: var(--secondary-color);
`

export const ErrorText = styled.h1`
    font-size: 30px;
    font-family: var(--second-family);
`

export const ResetButton = styled.button`
    padding: 15px 30px;
    background: #343333;
    font-family: var(--second-family);
    color: var(--secondary-color);
    border-radius: 10px;
    border: none;
`