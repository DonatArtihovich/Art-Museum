import { Breakpoints } from "@constants/style"
import styled from "styled-components"

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
    font-family: var(--second-family);
    font-weight: 300;
    font-size: 18px;
    line-height: 133%;
    color: #393939;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`

export const ActivePageNumber = styled(PageNumber)`
    border-radius: 4px;    
    background: #f17900;
    font-family: var(--second-family);
    font-weight: 600;
    line-height: 128%;
    color: #fff;
`

export const ArrowButton = styled.button`
    background: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    }
`