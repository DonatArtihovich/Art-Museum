import styled from "styled-components";

export const MainWrapper = styled.main`
    padding: 120px 0;
    min-height: 60vh;
    display: flex;
    gap: 80px;
    justify-content: center;

    @media(max-width: 960px) {
        gap: 40px;
    }
      
    @media(max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    height: fit-content;
`

export const SaveButtonWrapper = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const ArtworkImage = styled.img`
    min-width: 400px;
    max-width: 497px;
    height: auto;

    @media(max-width: 1200px) {
        max-width: 400px;
    }

    @media(max-width: 960px) {
    min-width: 40vw;
        max-width: 300px;
    }

    @media(max-width: 700px) {
        min-width: 50vw;
        max-width: 300px;
    }
`

export const TextContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 1200px) {
        width: 30vw;
    }

    @media(max-width: 960px) {
        width: 40vw;
    }

    @media(max-width: 700px) {
        width: 70vw;
        gap: 100px;
    }
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media(max-width: 1200px) {
        gap: 8px;
    }
`

export const SectionHeader = styled.h2`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 32px;
    color: #393939;
    margin: 0;
    max-width: 500px;

    @media(max-width: 960px) {
        font-size: 24px;
    }

    @media(max-width: 700px) {
        font-size: 32px;
    }
`

export const ArtistDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ArtistTitle = styled.p`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 24px;
    color: #e0a449;
    margin: 0;
`

export const ArtistYears = styled.p`
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 16px;
    color: #393939;
    margin: 0;
`

export const OverviewInfoWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
    margin: 0;
`

export const OverviewInfoItem = styled.li`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    color: #393939;
    max-width: 500px;
`

export const InfoHeader = styled.span`
    color: #e0a449;
`