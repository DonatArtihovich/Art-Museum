import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import {
    ArtistDataWrapper,
    ArtistTitle,
    ArtistYears,
    ArtworkImage,
    ImageWrapper,
    InfoHeader,
    MainWrapper,
    OverviewInfoItem,
    OverviewInfoWrapper,
    SaveButtonWrapper,
    SectionHeader,
    SectionWrapper,
    TextContentWrapper
} from "./styled";
import {
    getArtistYears,
    getArtistNacionality,
    imagePath,
    getDomainСonfidentiality
} from "@utils/lib";
import { ArtworkSaveButton } from "@components/save-button";
import Loader from "@components/loader";
import imagesObj from "@constants/images";
import { useFetch } from "@utils/react/hooks/use-fetch";
import { getArtworkPath } from "@utils/api";
import { Path } from "@constants/router";

export function ArtworkPageContent() {
    const { id } = useParams();
    const navigate = useNavigate()

    if (!id) {
        navigate(Path.MAIN);
        return;
    }

    const {
        isLoading,
        response,
        error
    } = useFetch<ArtworkResponse>(getArtworkPath(id));

    if (error) throw error;
    const artwork = response?.data

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [artwork])

    return (
        <MainWrapper>
            {artwork && !isLoading ?
                <>
                    <ImageWrapper>
                        <ArtworkImage
                            src={artwork.image_id
                                ? imagePath(artwork.image_id)
                                : imagesObj.noImageIcon}
                        />
                        <SaveButtonWrapper>
                            <ArtworkSaveButton
                                artwork={artwork}
                                background={'#fff'}
                            />
                        </SaveButtonWrapper>
                    </ImageWrapper>
                    <TextContentWrapper>
                        <SectionWrapper>
                            <SectionHeader data-testid="artwork-title">{artwork.title}</SectionHeader>
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
                                <OverviewInfoItem>{getDomainСonfidentiality(artwork.is_public_domain)}</OverviewInfoItem>
                            </OverviewInfoWrapper>
                        </SectionWrapper>
                    </TextContentWrapper>
                </>
                : <Loader />
            }
        </MainWrapper>
    )
}