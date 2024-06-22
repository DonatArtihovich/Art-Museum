import {
    HeaderText,
    MainWrapper,
    SpecialHeaderText
} from "./styled";
import GallerySlider from "@components/gallery-slider";
import { useState } from "react";
import { SectionHeader } from "@components/section-header";
import { AdditionalArtworksSection } from "@components/additional-artworks-section";
import { SearchForm } from "@components/search-form";

export default function MainContent() {
    const [query, setQuery] = useState<string>('');
    return (
        <MainWrapper>
            <HeaderText>
                let's find some <SpecialHeaderText>Art</SpecialHeaderText><br />here!
            </HeaderText>
            <SearchForm query={query} setQuery={setQuery} />
            <section>
                <SectionHeader
                    title='Our special gallery'
                    subtitle='Topics for you'
                />
                <GallerySlider query={query} />
            </section>
            <section>
                <SectionHeader
                    title='Other works for you'
                    subtitle='Here some more'
                />
                <AdditionalArtworksSection />
            </section>
        </MainWrapper >
    )
}