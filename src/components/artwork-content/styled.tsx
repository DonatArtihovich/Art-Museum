import styled from "styled-components";

export const MainWrapper = styled.main`
    padding: 120px 0;
    min-width: 60vh;
    display: flex;
    gap: 80px;
    justify-content: center;
`

export const ImageWrapper = styled.div`
    position: relative;
`

export const SaveButtonWrapper = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const ArtworkImage = styled.img`
    width: 497px;
    height: 570px;
`

export const TextContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const SectionHeader = styled.h2`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 32px;
    color: #393939;
    margin: 0;
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
`

export const OverviewInfoItem = styled.li`
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    color: #393939;
`

export const InfoHeader = styled.span`
    color: #e0a449;
`