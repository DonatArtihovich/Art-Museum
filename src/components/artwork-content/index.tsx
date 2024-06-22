import { getArtwork } from "@utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ArtistDataWrapper, ArtistTitle, ArtistYears, ArtworkImage, ImageWrapper, InfoHeader, MainWrapper, OverviewInfoItem, OverviewInfoWrapper, SaveButtonWrapper, SectionHeader, SectionWrapper, TextContentWrapper } from "./styled";
import { getArtistYears, imagePath } from "@utils/lib";
import { ArtworkSaveButton } from "@components/save-button";
import { getArtistNacionality } from "@utils/lib/artist-info";
import Loader from "@components/loader";

export function ArtworkPageContent() {
    const { id } = useParams();
    const [artwork, setArtwork] = useState<FullArtwork | null>(null)
    const [isPending, setIsPending] = useState<boolean>(true);

    useEffect(() => {
        new Promise(async () => {
            if (id) {
                const res = await getArtwork(Number(id));
                setArtwork(res);
                setIsPending(false);
            }
        })

        return () => setIsPending(true);
    }, [])

    console.log(artwork);

    return (
        <>
            {artwork && !isPending ?
                <MainWrapper>
                    <ImageWrapper>
                        <ArtworkImage src={imagePath(artwork.image_id)} />
                        <SaveButtonWrapper>
                            <ArtworkSaveButton
                                artwork={artwork}
                                background={'#fff'}
                            />
                        </SaveButtonWrapper>
                    </ImageWrapper>
                    <TextContentWrapper>
                        <SectionWrapper>
                            <SectionHeader>{artwork.title}</SectionHeader>
                            <ArtistDataWrapper>
                                <ArtistTitle>{artwork.artist_title}</ArtistTitle>
                                <ArtistYears>{getArtistYears(artwork.artist_display)}</ArtistYears>
                            </ArtistDataWrapper>
                        </SectionWrapper>
                        <SectionWrapper>
                            <SectionHeader>Overview</SectionHeader>
                            <OverviewInfoWrapper>
                                <OverviewInfoItem><InfoHeader>Artist nacionality:</InfoHeader> {getArtistNacionality(artwork.artist_display)}</OverviewInfoItem>
                                <OverviewInfoItem><InfoHeader>Dimensions: Sheet:</InfoHeader> {artwork.dimensions}</OverviewInfoItem>
                                <OverviewInfoItem><InfoHeader>Credit Line:</InfoHeader> {artwork.credit_line}</OverviewInfoItem>
                                <OverviewInfoItem><InfoHeader>Repository: </InfoHeader> {artwork.place_of_origin}</OverviewInfoItem>
                                <OverviewInfoItem>{artwork.is_public_domain ? 'Public' : 'Private'}</OverviewInfoItem>
                            </OverviewInfoWrapper>
                        </SectionWrapper>
                    </TextContentWrapper>
                </MainWrapper>
                : <Loader />
            }
        </>
    )
}