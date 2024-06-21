import { Input } from "@components/search-input";
import {
    HeaderText,
    MainWrapper,
    ReducedArtworksList,
    SectionHeader,
    SectionHeaderSubtitle,
    SectionHeaderTitle,
    SpecialHeaderText
} from "./styled";
import GallerySlider from "@components/gallery-slider";
import { useEffect, useState } from "react";
import { getArtworks } from "@utils/api";
import { ReducedArtworkCard } from "@components/artwork-card";
import { imagePath } from "@constants/api";

export default function MainContent() {
    const [query, setQuery] = useState<string>('');
    const [artworks, setArtworks] = useState<{ totalPages: number, data: Artwork[] } | null>(null);

    useEffect(() => {
        new Promise(async () => {
            const { pagination: { total_pages: totalPages }, data } = await getArtworks(1, 9);
            setArtworks({ totalPages, data });
        })
    }, [])


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
            <section>
                <SectionHeader>
                    <SectionHeaderSubtitle>Here some more</SectionHeaderSubtitle>
                    <SectionHeaderTitle>Other works for you</SectionHeaderTitle>
                </SectionHeader>
                <ReducedArtworksList>
                    {artworks?.data.map(item => <ReducedArtworkCard
                        image={imagePath(item.image_id)}
                        title={item.title}
                        artist={item.artist_title}
                        isPublic={item.is_public_domain}
                        key={item.id}
                    />)}
                </ReducedArtworksList>
            </section>
        </MainWrapper>
    )
}