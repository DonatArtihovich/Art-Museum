import { FullArtworkCard } from "@components/artwork-card";
import Loader from "@components/loader";
import { Pagination } from "@components/pagination";
import { NOTHING_FIND_TEXT } from "@constants/const";
import { Breakpoints } from "@constants/style";
import { searchArtworksPath } from "@utils/api";
import { useWindowWidth } from "@utils/react/hooks";
import { useFetch } from "@utils/react/hooks/use-fetch";

import {
    ArtworkCardsList,
    GallerySliderWrapper,
    NoArtworksText
} from "./styled";

type GallerySliderProps = {
    query: string;
    sorting: string;
    page: number;
    setPage: (_: number) => void;
}

export default function GallerySlider({ query, sorting, page, setPage }: GallerySliderProps) {
    const windowWidth = useWindowWidth();
    const cardsOnPage = windowWidth > Breakpoints.M
        ? 3
        : windowWidth > Breakpoints.S
            ? 2
            : 1;

    const {
        isLoading,
        response,
        error
    } = useFetch<ArtworksResponse>(searchArtworksPath(page, cardsOnPage, query, sorting))

    if (error) throw error;

    const totalPages = response?.pagination.total_pages;
    const artworks = response?.data

    return (
        !isLoading
            ? artworks && artworks.length
                ? <GallerySliderWrapper>
                    <ArtworkCardsList>
                        {artworks.map(item =>
                            <FullArtworkCard
                                artwork={item}
                                key={item.id}
                            />)}
                    </ArtworkCardsList>
                    {totalPages &&
                        <Pagination
                            page={page}
                            setPage={setPage}
                            totalPages={totalPages}
                        />}
                </GallerySliderWrapper>
                : <NoArtworksText>{NOTHING_FIND_TEXT}</NoArtworksText>
            : <Loader />
    )
}