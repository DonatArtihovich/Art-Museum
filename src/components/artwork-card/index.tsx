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
import { ArtworkSaveButton } from "@components/save-button";
import { getDomainСonfidentiality, imagePath } from "@utils/lib";
import imagesObj from "@constants/images";
import {
    ARTWORK_ARTIST_MAX_LENGTH,
    ARTWORK_TITLE_MAX_LENGTH,
    UNKNOWN_ARTIST
} from "@constants/const";
import { Path } from "@constants/router";
import { reduceString } from "@utils/lib/reduce-string";

type ArtworkCardProps = {
    artwork: Artwork
}

export const FullArtworkCard = ({ artwork }: ArtworkCardProps) => {
    const {
        id,
        image_id,
        title,
        artist_title,
        is_public_domain
    } = artwork;

    return (
        <ArtworkCardWrapper imageId={image_id}>
            <ArtworkCardInfoWrapper>
                <ArtworkCardTextInfoWrapper>
                    <ArtworkCardTextHeader>
                        <ArtworkCardTitleLink to={`${Path.ARTWORKS}/${id}`}>
                            {reduceString(title, ARTWORK_TITLE_MAX_LENGTH)}
                        </ArtworkCardTitleLink>
                        <ArtworkArtistName>
                            {artist_title
                                ? reduceString(artist_title, ARTWORK_ARTIST_MAX_LENGTH)
                                : UNKNOWN_ARTIST
                            }</ArtworkArtistName>
                    </ArtworkCardTextHeader>
                    <ArtworkPrivateInfoText>
                        {getDomainСonfidentiality(is_public_domain)}
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
        <ReducedArtworkCardWrapper data-testid="reduced-card">
            <ReducedArtworkInfoWrapper>
                <ReducedArtworkCardImage src={image_id ? imagePath(image_id) : imagesObj.noImageIcon} />
                <ArtworkCardTextInfoWrapper>
                    <ArtworkCardTextHeader>
                        <ArtworkCardTitleLink to={`${Path.ARTWORKS}/${id}`}>
                            {title.length > ARTWORK_TITLE_MAX_LENGTH ?
                                `${title.slice(0, ARTWORK_TITLE_MAX_LENGTH)}...`
                                : title
                            }</ArtworkCardTitleLink>
                        <ArtworkArtistName>{artist_title || UNKNOWN_ARTIST}</ArtworkArtistName>
                    </ArtworkCardTextHeader>
                    <ArtworkPrivateInfoText>
                        {getDomainСonfidentiality(is_public_domain)}
                    </ArtworkPrivateInfoText>
                </ArtworkCardTextInfoWrapper>
            </ReducedArtworkInfoWrapper>
            <ArtworkSaveButton artwork={artwork} />
        </ReducedArtworkCardWrapper>
    )
}