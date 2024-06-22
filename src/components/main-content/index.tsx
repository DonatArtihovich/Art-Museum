import { Input } from "@components/search-input";
import {
    HeaderText,
    MainWrapper,
    SpecialHeaderText
} from "./styled";
import GallerySlider from "@components/gallery-slider";
import { useEffect, useState } from "react";
import { getArtworks } from "@utils/api";
import { SectionHeader } from "@components/section-header";
import { ReducedArtworksList } from "@components/reduced-artworks-list";

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
                <SectionHeader
                    title='Our special gallery'
                    subtitle='Topics for you'
                />
                <GallerySlider query={query} />
            </section>
            {artworks &&
                <section>
                    <SectionHeader
                        title='Other works for you'
                        subtitle='Here some more'
                    />
                    <ReducedArtworksList
                        artworks={artworks?.data}
                    />
                </section>
            }
        </MainWrapper >
    )
}