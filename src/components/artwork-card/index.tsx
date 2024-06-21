import {
    ArtworkArtistName,
    ArtworkCardInfoWrapper,
    ArtworkCardTextHeader,
    ArtworkCardTextInfoWrapper,
    ArtworkCardTitle,
    ArtworkCardWrapper,
    ArtworkPrivateInfoText,
    ArtworkSaveButton,
    ArtworkSaveImage,
    ReducedArtworkCardImage,
    ReducedArtworkCardWrapper,
    ReducedArtworkInfoWrapper
} from "./styled";
import noImage from '@assets/images/no-image.svg'
import bookmarkImage from '@assets/images/bookmark.svg'

type ArtworkCardProps = {
    image: string;
    title: string;
    artist: string;
    isPublic: boolean;
}

export const FullArtworkCard = ({
    image,
    title,
    artist,
    isPublic
}: ArtworkCardProps) => (
    <ArtworkCardWrapper
        style={{
            backgroundImage: `url(${image ?? noImage})`
        }}
    >
        <ArtworkCardInfoWrapper>
            <ArtworkCardTextInfoWrapper>
                <ArtworkCardTextHeader>
                    <ArtworkCardTitle>{title.length > 22 ? `${title.slice(0, 23)}...` : title}</ArtworkCardTitle>
                    <ArtworkArtistName>{artist}</ArtworkArtistName>
                </ArtworkCardTextHeader>
                <ArtworkPrivateInfoText>
                    {isPublic ? 'Public' : 'Private'}
                </ArtworkPrivateInfoText>
            </ArtworkCardTextInfoWrapper>
            <ArtworkSaveButton>
                <ArtworkSaveImage src={bookmarkImage} />
            </ArtworkSaveButton>
        </ArtworkCardInfoWrapper>
    </ArtworkCardWrapper>
)

export const ReducedArtworkCard = ({
    image,
    title,
    artist,
    isPublic
}: ArtworkCardProps) => (
    <ReducedArtworkCardWrapper>
        <ReducedArtworkInfoWrapper>
            <ReducedArtworkCardImage src={image ?? noImage} />
            <ArtworkCardTextInfoWrapper>
                <ArtworkCardTextHeader>
                    <ArtworkCardTitle>{title.length > 22 ? `${title.slice(0, 23)}...` : title}</ArtworkCardTitle>
                    <ArtworkArtistName>{artist}</ArtworkArtistName>
                </ArtworkCardTextHeader>
                <ArtworkPrivateInfoText>
                    {isPublic ? 'Public' : 'Private'}
                </ArtworkPrivateInfoText>
            </ArtworkCardTextInfoWrapper>
        </ReducedArtworkInfoWrapper>

        <ArtworkSaveButton>
            <ArtworkSaveImage src={bookmarkImage} />
        </ArtworkSaveButton>
    </ReducedArtworkCardWrapper>
)