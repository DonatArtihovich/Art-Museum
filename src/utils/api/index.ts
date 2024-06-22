import { ARTWORKS_PATH, ARTWORK_FIELDS, FULL_ARTWORK_FIELDS } from "@constants/api"

export async function getArtworks(page: number, limit = 3, query = ''): Promise<ArtworksResponse> {
    const response = await fetch(`${ARTWORKS_PATH}?page=${page}&limit=${limit}&q=${query}&${ARTWORK_FIELDS}`);
    const artworksRes = await response.json() as ArtworksResponse;

    return artworksRes;
}

export async function getArtwork(id: number): Promise<FullArtwork> {
    const response = await fetch(`${ARTWORKS_PATH}/${id}?${FULL_ARTWORK_FIELDS}`);
    const artworkRes = await response.json();

    return artworkRes.data;
}