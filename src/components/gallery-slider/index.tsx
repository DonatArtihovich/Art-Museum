import {
    ArtworkCardsList,
    GallerySliderWrapper,
    NoArtworksText
} from "./styled";
import { useEffect, useState } from "react";
import { searchArtworks } from "@utils/api";
import { FullArtworkCard } from "@components/artwork-card";
import Loader from "@components/loader";
import { useWindowWidth } from "@utils/react/hooks";
import { Pagination } from "@components/pagination";

type GallerySliderProps = {
    query: string;
    sorting: string;
    page: number;
    setPage: (page: number) => void;
}

export default function GallerySlider({ query, sorting, page, setPage }: GallerySliderProps) {
    const [artworks, setArtworks] = useState<{ totalPages: number, data: Artwork[] } | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);

    const windowWidth = useWindowWidth();

    const cardsOnPage = windowWidth > 800
        ? 3
        : windowWidth > 500
            ? 2
            : 1

    useEffect(() => {
        new Promise(async () => {
            const { pagination: { total_pages: totalPages }, data } = await searchArtworks(page, cardsOnPage, query, sorting);
            setArtworks({ totalPages, data });
            setIsPending(false);
            console.log(data);
        })

        return () => setIsPending(true);
    }, [query, page, sorting, cardsOnPage])

    return (
        !isPending
            ? artworks && artworks.data.length
                ? <GallerySliderWrapper>
                    <ArtworkCardsList>
                        {artworks?.data.map(item => <FullArtworkCard artwork={item} key={item.id} />)}
                    </ArtworkCardsList>
                    {artworks?.totalPages &&
                        <Pagination
                            page={page}
                            setPage={setPage}
                            totalPages={artworks.totalPages}
                        />}
                </GallerySliderWrapper>
                : <NoArtworksText>We didn't find anything</NoArtworksText>
            : <Loader />
    )
}