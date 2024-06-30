import styled from "styled-components";

export const SelectWrapper = styled.select`
    padding: 15px;
    border-radius: 10px;
    border: 2px solid var(--secondary-color);
    outline: none;
    color: #393939;
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
    color: var(--secondary-color);

    &:hover {
        cursor: pointer;
    }
`

export const ErrorText = styled.p`
    font-family: var(--second-family);
    color: red;
    font-size: 16px;
    text-transform: underline;
    position: absolute;
    top: 60px;
`