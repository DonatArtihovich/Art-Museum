import styled, { css } from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    ${(props) => css`gap: ${props.theme.paddings.XS}px;`}
`