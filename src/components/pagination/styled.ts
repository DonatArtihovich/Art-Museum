import { Breakpoints } from "@constants/style"
import styled, { css } from "styled-components"

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    align-self: flex-end;

    @media(max-width: ${Breakpoints.XS}px) {
        align-self: center;
    }
`

export const NumbersWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const LeftPaginationArrowImage = styled.img`
    transform: rotate(180deg);
    width: 10px;
    height: 13px;
`

export const RightPaginationArrowImage = styled.img`
    width: 10px;
    height: 13px;
`

export const PageNumber = styled.button`
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    font-weight: 300;
    font-size: 18px;
    line-height: 133%;
    ${(props) => css`
        color: ${props.theme.colors.primaryText};
        font-family: ${props.theme.fonts.secondary};
    `}
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`

export const ActivePageNumber = styled(PageNumber)`
    border-radius: 4px;    
    background: #f17900;
    font-weight: 600;
    line-height: 128%;
    ${(props) => css`
        color: ${props.theme.colors.otherText};
        font-family: ${props.theme.fonts.secondary};
    `}
`

export const ArrowButton = styled.button`
    background: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    }
`