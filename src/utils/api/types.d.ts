type Artwork = {
    id: number;
    title: string;
    artist_title: string;
    image_id: string;
    is_public_domain: boolean;
}

type ArtworksResponse = {
    data: Artwork[];
    pagination: {
        current_page: number;
        limit: number;
        total: number;
        total_pages: 10493;
    }
}

type FullArtwork = {
    id: number;
    title: string;
    artist_title: string;
    artist_display: string;
    dimensions: string;
    credit_line: string;
    place_of_origin: string;
    is_public_domain: boolean;
    image_id: string;
}