import {
    ArtworkCardsList,
    GallerySliderWrapper,
    NoArtworksText
} from "./styled";
import { searchArtworksPath } from "@utils/api";
import { FullArtworkCard } from "@components/artwork-card";
import Loader from "@components/loader";
import { useWindowWidth } from "@utils/react/hooks";
import { Pagination } from "@components/pagination";
import { useFetch } from "@utils/react/hooks/use-fetch";
import { NOTHING_FIND_TEXT } from "@constants/const";

type GallerySliderProps = {
    query: string;
    sorting: string;
    page: number;
    setPage: (page: number) => void;
}

export default function GallerySlider({ query, sorting, page, setPage }: GallerySliderProps) {
    const windowWidth = useWindowWidth();
    const cardsOnPage = windowWidth > 800
        ? 3
        : windowWidth > 500
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