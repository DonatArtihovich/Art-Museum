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
import { saveArtwork } from "@utils/storage";
import { imagePath } from "@constants/api";

type ArtworkCardProps = {
    id: string;
    image: string;
    title: string;
    artist: string;
    isPublic: boolean;
}

export const FullArtworkCard = ({
    id,
    image,
    title,
    artist,
    isPublic
}: ArtworkCardProps) => (
    <ArtworkCardWrapper
        style={{
            backgroundImage: `url(${image ? imagePath(image) : noImage})`
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
            <ArtworkSaveButton
                onClick={() => saveArtwork({
                    id,
                    image_id: image,
                    title,
                    artist_title: artist,
                    is_public_domain: isPublic
                })}
            >
                <ArtworkSaveImage src={bookmarkImage} />
            </ArtworkSaveButton>
        </ArtworkCardInfoWrapper>
    </ArtworkCardWrapper>
)

export const ReducedArtworkCard = ({
    id,
    image,
    title,
    artist,
    isPublic
}: ArtworkCardProps) => (
    <ReducedArtworkCardWrapper>
        <ReducedArtworkInfoWrapper>
            <ReducedArtworkCardImage src={image ? imagePath(image) : noImage} />
            <ArtworkCardTextInfoWrapper>
                <ArtworkCardTextHeader>
                    <ArtworkCardTitle>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</ArtworkCardTitle>
                    <ArtworkArtistName>{artist}</ArtworkArtistName>
                </ArtworkCardTextHeader>
                <ArtworkPrivateInfoText>
                    {isPublic ? 'Public' : 'Private'}
                </ArtworkPrivateInfoText>
            </ArtworkCardTextInfoWrapper>
        </ReducedArtworkInfoWrapper>

        <ArtworkSaveButton
            onClick={() => saveArtwork({
                id,
                image_id: image,
                title,
                artist_title: artist,
                is_public_domain: isPublic
            })}
        >
            <ArtworkSaveImage src={bookmarkImage} />
        </ArtworkSaveButton>
    </ReducedArtworkCardWrapper>
)