import {
    ActivePageNumber,
    ArrowButton,
    ArtworkCardsList,
    GallerySliderWrapper,
    LeftPaginationArrowImage,
    NoArtworksText,
    NumbersWrapper,
    PageNumber,
    PaginationWrapper,
    RightPaginationArrowImage
} from "./styled";
import arrowImage from '@assets/images/arrow.svg'
import { useEffect, useState } from "react";
import { searchArtworks } from "@utils/api";
import { FullArtworkCard } from "@components/artwork-card";
import Loader from "@components/loader";

type GallerySliderProps = {
    query: string;
}

const Pagination = ({ page, setPage, totalPages }: {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}) => (
    <PaginationWrapper>
        {page > 1 &&
            <ArrowButton onClick={() => setPage(page - 1)}>
                <LeftPaginationArrowImage src={arrowImage} />
            </ArrowButton>}
        <NumbersWrapper>
            {Array.from({ length: 4 }).map((_, idx) => {
                const number = Math.floor((page - 1) / 4) * 4 + idx + 1;
                console.log(number);
                return number !== page
                    ? <PageNumber
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </PageNumber>
                    : <ActivePageNumber key={number}>{number}</ActivePageNumber>
            })}
        </NumbersWrapper>
        {page < totalPages &&
            <ArrowButton onClick={() => setPage(page + 1)}>
                <RightPaginationArrowImage src={arrowImage} />
            </ArrowButton>
        }
    </PaginationWrapper>
)

export default function GallerySlider({ query }: GallerySliderProps) {
    const [page, setPage] = useState<number>(1);
    const [artworks, setArtworks] = useState<{ totalPages: number, data: Artwork[] } | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);

    useEffect(() => {
        new Promise(async () => {
            const { pagination: { total_pages: totalPages }, data } = await searchArtworks(page, 3, query);
            setArtworks({ totalPages, data });
            setIsPending(false);
            console.log(data);
        })

        return () => setIsPending(true);
    }, [query, page])

    return (
        !isPending
            ? artworks && artworks.data.length
                ? <GallerySliderWrapper>
                    <ArtworkCardsList>
                        {artworks?.data.map(item => <FullArtworkCard artwork={item} />)}
                    </ArtworkCardsList>
                    {artworks?.totalPages &&
                        <Pagination
                            page={page}
                            setPage={setPage}
                            totalPages={artworks.totalPages}
                        />}
                </GallerySliderWrapper>
                : <NoArtworksText>We haven't searched anything</NoArtworksText>
            : <Loader />
    )
}