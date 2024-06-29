import { SectionHeader } from "@components/section-header";
import {
    FavoritesWrapper,
    HeaderIcon,
    HeaderText,
    SpecialHeaderText,
    SpecialHeaderTextWrapper,
    NoFavoritesText
} from "./styled";
import { ReducedArtworksList } from "@components/reduced-artworks-list";
import { useRequiredContext } from "@utils/react/hooks";
import { StorageContext } from "@utils/react/storage-context";
import imagesObj from "@constants/images";
import {
    FAVORITES_SECTION_HEADER,
    FAVORITES_SECTION_SUBTITLE,
    NO_FAVORITES_TEXT
} from "@constants/const";

export default function FavoritesContent() {
    const { savedArtworks } = useRequiredContext(StorageContext);

    return (
        <FavoritesWrapper>
            <HeaderText>
                Here are your <br />
                <SpecialHeaderTextWrapper>
                    <HeaderIcon src={imagesObj.favoritesHeaderIcon} />
                    <SpecialHeaderText>Favorites</SpecialHeaderText>
                </SpecialHeaderTextWrapper>
            </HeaderText>
            <section>
                <SectionHeader
                    title={FAVORITES_SECTION_HEADER}
                    subtitle={FAVORITES_SECTION_SUBTITLE}
                />
                {savedArtworks.length
                    ? <ReducedArtworksList artworks={savedArtworks} />
                    : <NoFavoritesText>{NO_FAVORITES_TEXT}</NoFavoritesText>
                }
            </section>
        </FavoritesWrapper>
    )
}