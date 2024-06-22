import {
    ArtworkArtistName,
    ArtworkCardInfoWrapper,
    ArtworkCardLayer,
    ArtworkCardTextHeader,
    ArtworkCardTextInfoWrapper,
    ArtworkCardTitleLink,
    ArtworkCardWrapper,
    ArtworkPrivateInfoText,
    ReducedArtworkCardImage,
    ReducedArtworkCardWrapper,
    ReducedArtworkInfoWrapper
} from "./styled";
import noImage from '@assets/images/no-image.svg'
import { ArtworkSaveButton } from "@components/save-button";
import { imagePath } from "@utils/lib";

type ArtworkCardProps = {
    artwork: Artwork
}

export const FullArtworkCard = ({
    artwork
}: ArtworkCardProps) => {
    const {
        id,
        image_id,
        title,
        artist_title,
        is_public_domain
    } = artwork;

    return (
        <ArtworkCardWrapper
            style={{
                backgroundImage: `url(${image_id ? imagePath(image_id) : noImage})`
            }}
        >
            <ArtworkCardInfoWrapper>
                <ArtworkCardTextInfoWrapper>
                    <ArtworkCardTextHeader>
                        <ArtworkCardTitleLink to={`/artworks/${id}`}>{title.length > 22 ? `${title.slice(0, 23)}...` : title}</ArtworkCardTitleLink>
                        <ArtworkArtistName>{artist_title}</ArtworkArtistName>
                    </ArtworkCardTextHeader>
                    <ArtworkPrivateInfoText>
                        {is_public_domain ? 'Public' : 'Private'}
                    </ArtworkPrivateInfoText>
                </ArtworkCardTextInfoWrapper>
                <ArtworkSaveButton artwork={artwork} />
            </ArtworkCardInfoWrapper>
            <ArtworkCardLayer />
        </ArtworkCardWrapper>
    )
}

export const ReducedArtworkCard = ({
    artwork
}: ArtworkCardProps) => {
    const {
        id,
        image_id,
        title,
        artist_title,
        is_public_domain
    } = artwork;

    return (
        <ReducedArtworkCardWrapper>
            <ReducedArtworkInfoWrapper>
                <ReducedArtworkCardImage src={image_id ? imagePath(image_id) : noImage} />
                <ArtworkCardTextInfoWrapper>
                    <ArtworkCardTextHeader>
                        <ArtworkCardTitleLink to={`/artworks/${id}`}>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</ArtworkCardTitleLink>
                        <ArtworkArtistName>{artist_title}</ArtworkArtistName>
                    </ArtworkCardTextHeader>
                    <ArtworkPrivateInfoText>
                        {is_public_domain ? 'Public' : 'Private'}
                    </ArtworkPrivateInfoText>
                </ArtworkCardTextInfoWrapper>
            </ReducedArtworkInfoWrapper>
            <ArtworkSaveButton artwork={artwork} />
        </ReducedArtworkCardWrapper>
    )
}