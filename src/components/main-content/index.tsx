import { AdditionalArtworksSection } from "@components/additional-artworks-section";
import GallerySlider from "@components/gallery-slider";
import { SearchForm } from "@components/search-form";
import { SectionHeader } from "@components/section-header";
import {
    FIRST_PAGE,
    MAIN_GALLERY_SECTION_HEADER,
    MAIN_GALLERY_SECTION_SUBTITLE,
    MAIN_OTHER_SECTION_HEADER,
    MAIN_OTHER_SECTION_SUBTITLE
} from "@constants/const";
import { useState } from "react";

import {
    HeaderText,
    MainWrapper,
    SpecialHeaderText
} from "./styled";

export default function MainContent() {
    const [query, setQuery] = useState<string>('');
    const [sorting, setSorting] = useState<string>('');
    const [page, setPage] = useState<number>(FIRST_PAGE);

    return (
        <MainWrapper>
            <HeaderText>
                let&apos;s find some <SpecialHeaderText>Art</SpecialHeaderText><br />here!
            </HeaderText>
            <SearchForm
                setQuery={setQuery}
                setSorting={setSorting}
                setPage={setPage}
            />
            <section>
                <SectionHeader
                    title={MAIN_GALLERY_SECTION_HEADER}
                    subtitle={MAIN_GALLERY_SECTION_SUBTITLE}
                />
                <GallerySlider
                    query={query}
                    sorting={sorting}
                    page={page}
                    setPage={setPage}
                />
            </section>
            <section>
                <SectionHeader
                    title={MAIN_OTHER_SECTION_HEADER}
                    subtitle={MAIN_OTHER_SECTION_SUBTITLE}
                />
                <AdditionalArtworksSection />
            </section>
        </MainWrapper>
    )
}