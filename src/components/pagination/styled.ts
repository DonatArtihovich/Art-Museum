import styled from "styled-components"

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    align-self: flex-end;

    @media(max-width: 500px) {
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

    &:hover {
        cursor: pointer;
    }
`

export const ActivePageNumber = styled.button`
    border-radius: 4px;    
    width: 30px;
    height: 30px;
    background: #f17900;
    border: none;
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 18px;
    line-height: 128%;
    color: #fff;

    &:hover {
        cursor: pointer;
    }
`

export const ArrowButton = styled.button`
    background: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    }
`