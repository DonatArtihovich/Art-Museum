import { ARTWORKS_PATH } from "@constants/api"

export async function getArtworks(page: number, limit = 3, query = ''): Promise<ArtworksResponse> {
    const response = await fetch(`${ARTWORKS_PATH}?page=${page}&limit=${limit}&q=${query}`);
    const artworksRes = await response.json() as ArtworksResponse;

    return artworksRes;
}