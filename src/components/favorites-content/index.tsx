import { SectionHeader } from "@components/section-header";
import { FavoritesWrapper, HeaderIcon, HeaderText, SpecialHeaderText, SpecialHeaderTextWrapper } from "./styled";
import headerIcon from '@assets/images/favorites-header-icon.svg';
import { getSavedArtworks } from "@utils/storage";
import { ReducedArtworksList } from "@components/reduced-artworks-list";

export default function FavoritesContent() {
    const savedArtworks = getSavedArtworks();

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
                <ReducedArtworksList artworks={savedArtworks} />
            </section>
        </FavoritesWrapper>
    )
}