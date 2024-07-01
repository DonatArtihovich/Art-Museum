import Loader from "@components/loader";
import { ReducedArtworksList } from "@components/reduced-artworks-list";
import { ADDITIONAL_ARTWORKS_COUNT, FIRST_PAGE } from "@constants/const";
import { getArtworksPath } from "@utils/api";
import { useFetch } from "@utils/react/hooks/use-fetch";

export function AdditionalArtworksSection() {
    const {
        isLoading,
        response,
        error
    } = useFetch<ArtworksResponse>(getArtworksPath(FIRST_PAGE, ADDITIONAL_ARTWORKS_COUNT));

    if (error) {
        throw error;
    }

    const artworks = response?.data

    return (
        isLoading || !artworks
            ? <Loader />
            : <ReducedArtworksList artworks={artworks} />
    )
}