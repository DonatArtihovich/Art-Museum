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

export const ArtworkCardWrapper = styled.li`
    position: relative;
    width: 387px;
    height: 444px;
    background-position: center;
`

export const ArtworkCardInfoWrapper = styled.div`
    border: 1px solid #f0f1f1;
    box-sizing: border-box;
    padding: 32px 24px;
    width: 334px;
    height: 132px;
    display: flex;
    gap: 8px;
    position: absolute;
    bottom: -66px;
    left: 6%;
    background: #fff;
    z-index: 10;
    justify-content: space-between;
`

export const ArtworkCardTextInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ArtworkCardTextHeader = styled.div`
    display: flex;
    flex-direction: column;
`

export const ArtworkPrivateInfoText = styled.span`
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 15px;
    line-height: 171%;
    letter-spacing: -0.01em;
    color: #393939;
`

export const ArtworkCardTitle = styled.h3`
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: -0.03em;
    color: #393939;
    margin: 0;
`

export const ArtworkArtistName = styled.span`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 15px;
    line-height: 171%;
    letter-spacing: -0.01em;
    color: #e0a449;
`

export const ArtworkSaveButton = styled.button`
    border-radius: 35px;
    padding: 17px;
    width: 59px;
    height: 59px;
    background: rgba(251, 215, 178, 0.3);
    border: none;

    &:hover {
        cursor: pointer;
    }
`

export const ArtworkSaveImage = styled.img`
    width: 25px;
    height: 25px;
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