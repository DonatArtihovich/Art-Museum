import { Link } from "react-router-dom"
import styled, { css, keyframes } from "styled-components"
import imagesObj from "@constants/images"
import { imagePath } from "@utils/lib"
import { Breakpoints } from "@constants/style"

const moveUp = keyframes`
    from {
        bottom: -66px;
    }
    to {
        bottom: 10%;
    }
`

export const ArtworkCardLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background: rgb(0, 0, 0, 0.5);
    border-radius: 5px;
    display: none;
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
    pointer-events: none;

    @media(max-width: ${Breakpoints.XL}px) {
        width: 280px;
        padding: 24px 16px;
    }

    @media(max-width: ${Breakpoints.L}px) {
        width: 220px;
    }

    @media(max-width: ${Breakpoints.M}px) {
        width: 200px;
    }

    @media(max-width: ${Breakpoints.S}px) {
        width: 280px;
    }

    @media(max-width: ${Breakpoints.XS}px) {
        width: 260px;
    }
`

type ArtworkCardWrapperProps = {
    imageId: string;
    children: React.ReactNode;
}
export const ArtworkCardWrapper = styled(
    ({ imageId, children, ...props }: ArtworkCardWrapperProps) =>
        <li {...props}>{children}</li>
)`
    position: relative;
    width: 387px;
    height: 444px;
    background-position: center;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;

    ${({ imageId }) =>
        imageId
            ? css`background-image: url(${imagePath(imageId)});`
            : css`background-image: url(${imagesObj.noImageIcon});`
    }

    &:hover ${ArtworkCardLayer} {
        display: block;
    }

    &:hover ${ArtworkCardInfoWrapper} {
        animation: 0.3s ${moveUp} ease-in;
        bottom: 10%;
    }

    @media(max-width: ${Breakpoints.XL}px) {
        width: 320px;
    }

    @media(max-width: ${Breakpoints.L}px) {
        height: 350px;
        width: 260px;
    }

    @media(max-width: ${Breakpoints.M}px) {
        width: 240px;
    }

    @media(max-width: ${Breakpoints.S}px) {
        width: 320px;
    }

    @media(max-width: ${Breakpoints.XS}px) {
        width: 300px;
    }
`

export const ArtworkCardTextInfoWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
height: 98px;

@media(max-width: ${Breakpoints.XL}px) {
    gap: 0px;
    justify-content: space-between;
}
`

export const ArtworkCardTextHeader = styled.div`
display: flex;
flex-direction: column;
`

export const ArtworkPrivateInfoText = styled.span`
font-weight: 700;
font-size: 15px;
line-height: 171%;
letter-spacing: -0.01em;
${(props) => css`
    color: ${props.theme.colors.primaryText};
    font-family: ${props.theme.fonts.secondary};    
`}
`

export const ArtworkCardTitleLink = styled(Link)`
font-weight: 500;
font-size: 17px;
line-height: 150%;
letter-spacing: -0.03em;
${(props) => css`
    color: ${props.theme.colors.primaryText};
    font-family: ${props.theme.fonts.secondary};    
`}
margin: 0;
text-decoration: none;
pointer-events: auto;

    &:hover {
    text-decoration: underline;
}

@media(max-width: ${Breakpoints.XL}px) {
    font-size: 16px;
}

@media(max-width: ${Breakpoints.M}px) {
    font-size: 14px;
}
`

export const ArtworkArtistName = styled.span`
font-weight: 400;
font-size: 15px;
line-height: 171%;
letter-spacing: -0.01em;
${(props) => css`
    color: ${props.theme.colors.secondaryText};
    font-family: ${props.theme.fonts.secondary};    
`}

@media(max-width: ${Breakpoints.M}px) {
    font-size: 12px;
}
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

@media(max-width: ${Breakpoints.M}px) {
    width: 300px;
}

@media(max-width: ${Breakpoints.S}px) {
    width: 450px;
}

@media(max-width: ${Breakpoints.XS}px) {
    width: 360px;
}
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