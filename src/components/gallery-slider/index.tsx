import { imagePath } from "@constants/api"
import {
    ActivePageNumber,
    ArrowButton,
    ArtworkArtistName,
    ArtworkCardInfoWrapper,
    ArtworkCardTextInfoWrapper,
    ArtworkCardTitle,
    ArtworkCardWrapper,
    ArtworkCardsList,
    ArtworkSaveButton,
    ArtworkSaveImage,
    GallerySliderWrapper,
    LeftPaginationArrowImage,
    NumbersWrapper,
    PageNumber,
    PaginationWrapper,
    RightPaginationArrowImage
} from "./styled";
import bookmarkImage from '@assets/images/bookmark.svg'
import arrowImage from '@assets/images/arrow.svg'
import { useEffect, useState } from "react";
import { getArtworks } from "@utils/api";

type GallerySliderProps = {
    query: string;
}

type ArtworkCardProps = {
    image: string;
    title: string;
    artist: string;
}

const ArtworkCard = ({
    image,
    title,
    artist
}: ArtworkCardProps) => (
    <ArtworkCardWrapper
        style={{
            backgroundImage: `url(${image})`
        }}
    >
        <ArtworkCardInfoWrapper>
            <ArtworkCardTextInfoWrapper>
                <ArtworkCardTitle>{title.length > 22 ? `${title.slice(0, 23)}...` : title}</ArtworkCardTitle>
                <ArtworkArtistName>{artist}</ArtworkArtistName>
            </ArtworkCardTextInfoWrapper>
            <ArtworkSaveButton>
                <ArtworkSaveImage src={bookmarkImage} />
            </ArtworkSaveButton>
        </ArtworkCardInfoWrapper>
    </ArtworkCardWrapper>
)

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

    console.log(artworks?.data);
    useEffect(() => {
        new Promise(async () => {
            const { pagination: { total_pages: totalPages }, data } = await getArtworks(page, 3, query);
            setArtworks({ totalPages, data });
        })
    }, [query, page])

    return (
        <GallerySliderWrapper>
            <ArtworkCardsList>
                {artworks?.data.map(item => (
                    <ArtworkCard
                        title={item.title}
                        image={imagePath(item.image_id)}
                        artist={item.artist_title}
                        key={item.id}
                    />
                ))}
            </ArtworkCardsList>
            {artworks?.totalPages &&
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={artworks.totalPages}
                />}
        </GallerySliderWrapper>
    )
}