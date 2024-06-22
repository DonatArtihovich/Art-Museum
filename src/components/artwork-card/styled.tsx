import styled from "styled-components"

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
    justify-content: space-between;
    height: 98px;
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

export const ReducedArtworkCardWrapper = styled.div`
    border: 1px solid #f0f1f1;
    padding: 16px;
    width: 416px;
    height: 130px;
    background: #fff;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`

export const ReducedArtworkCardImage = styled.img`
    width: 80px;
    height: 80px;
`

export const ReducedArtworkInfoWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`