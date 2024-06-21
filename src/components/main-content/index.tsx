import { Input } from "@components/search-input";
import {
    HeaderText,
    MainWrapper,
    SectionHeader,
    SectionHeaderSubtitle,
    SectionHeaderTitle,
    SpecialHeaderText
} from "./styled";
import GallerySlider from "@components/gallery-slider";
import { useState } from "react";

export default function MainContent() {
    const [query, setQuery] = useState<string>('');

    return (
        <MainWrapper>
            <HeaderText>
                let's find some <SpecialHeaderText>Art</SpecialHeaderText> <br />here!
            </HeaderText>

            <Input
                placeholder='Search art, artist, work...'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                value={query}
            />

            <section>
                <SectionHeader>
                    <SectionHeaderSubtitle>Topics for you</SectionHeaderSubtitle>
                    <SectionHeaderTitle>Our special gallery</SectionHeaderTitle>
                </SectionHeader>
                <GallerySlider query={query} />
            </section>
        </MainWrapper>
    )
}