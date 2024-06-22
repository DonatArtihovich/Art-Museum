import { SectionHeader } from "@components/section-header";
import {
    FavoritesWrapper,
    HeaderIcon,
    HeaderText,
    SpecialHeaderText,
    SpecialHeaderTextWrapper,
    NoFavoritesText
} from "./styled";
import headerIcon from '@assets/images/favorites-header-icon.svg';
import { ReducedArtworksList } from "@components/reduced-artworks-list";
import { useRequiredContext } from "@utils/react/hooks";
import { StorageContext } from "@utils/react/storage-context";

export default function FavoritesContent() {
    const { savedArtworks } = useRequiredContext(StorageContext);

    return (
        <FavoritesWrapper>
            <HeaderText>
                Here are your <br />
                <SpecialHeaderTextWrapper>
                    <HeaderIcon src={headerIcon} />
                    <SpecialHeaderText>Favourites</SpecialHeaderText>
                </SpecialHeaderTextWrapper>
            </HeaderText>
            <section>
                <SectionHeader
                    title='Your favorites list'
                    subtitle='Saved by you'
                />
                {savedArtworks.length
                    ? <ReducedArtworksList artworks={savedArtworks} />
                    : <NoFavoritesText>You haven't saved anything yet</NoFavoritesText>
                }
            </section>
        </FavoritesWrapper>
    )
}