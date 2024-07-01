import { Breakpoints } from "@constants/style"
import styled, { css } from "styled-components"

export const SectionHeader = styled.header`
    ${({theme}) => css`margin: ${theme.paddings.XXL}px 0 ${theme.paddings.L}px;`}
    display: flex;
    flex-direction: column;

    @media(max-width: ${Breakpoints.S}px) {
        ${({theme}) => css`margin: ${theme.paddings.XL}px 0 ${theme.paddings.M}px;`}
    }
`

export const SectionHeaderTitle = styled.h2`
    font-weight: 400;
    font-size: 32px;
    ${(props) => css`
        color: ${props.theme.colors.primaryText};
        font-family: ${props.theme.fonts.secondary};
    `}
    margin: 0;
    text-align: center;
`

export const SectionHeaderSubtitle = styled.span`
    font-weight: 400;
    font-size: 16px;
    ${(props) => css`
        color: ${props.theme.colors.secondaryText};
        font-family: ${props.theme.fonts.secondary};
    `}
    text-align: center;
`