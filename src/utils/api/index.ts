import { 
    ARTWORK_FIELDS,
    ARTWORKS_PATH,
    ARTWORKS_SEARCH_PATH,
    FULL_ARTWORK_FIELDS,
    sortingFields
} from "@constants/api"

export const getArtworksPath = (
    page: number,
    limit = 3
): string => (
    `${ARTWORKS_PATH}?page=${page}&limit=${limit}&${ARTWORK_FIELDS}`
);

export const getArtworkPath = (id: string): string => `${ARTWORKS_PATH}/${id}?${FULL_ARTWORK_FIELDS}`;

export const searchArtworksPath = (
    page: number,
    limit = 3,
    query = '',
    sorting?: string
): string => (
    `${ARTWORKS_SEARCH_PATH}?q=${query}&page=${page}&limit=${limit}&${ARTWORK_FIELDS}${sorting 
        ? `&sort=${sortingFields[sorting]}`
        : ''
    }`
);
 