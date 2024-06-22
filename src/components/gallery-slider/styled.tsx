import styled from "styled-components";

export const GallerySliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ArtworkCardsList = styled.ul`
    margin: 0 0 94px;
    list-style: none;
    display: flex;
    gap: 60px;
`
export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    align-self: flex-end;
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

export const NoArtworksText = styled.p`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 24px;
    color: #393939;
    margin: 0;
    text-align: center;
`