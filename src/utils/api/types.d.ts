type Artwork = {
    id: string;
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