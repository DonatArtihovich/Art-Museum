import { ARTWORKS_PATH, ARTWORKS_SEARCH_PATH, ARTWORK_FIELDS, FULL_ARTWORK_FIELDS, sortingFields } from "@constants/api"

export async function getArtworks(page: number, limit = 3): Promise<ArtworksResponse> {
    const response = await fetch(`${ARTWORKS_PATH}?page=${page}&limit=${limit}&${ARTWORK_FIELDS}`);
    const artworksRes = await response.json() as ArtworksResponse;

    return artworksRes;
}

export async function getArtwork(id: number): Promise<FullArtwork> {
    const response = await fetch(`${ARTWORKS_PATH}/${id}?${FULL_ARTWORK_FIELDS}`);
    const artworkRes = await response.json();

    return artworkRes.data;
}

export async function searchArtworks(page: number, limit = 3, query = '', sorting?: string): Promise<ArtworksResponse> {
    const response = await fetch(`${ARTWORKS_SEARCH_PATH}?q=${query}&page=${page}&limit=${limit}&${ARTWORK_FIELDS}${sorting ? `&sort=${sortingFields[sorting]}` : ''}`);
    const artworksRes = await response.json() as ArtworksResponse;

    console.log(artworksRes);
    return artworksRes;
}