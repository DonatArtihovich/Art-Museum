import { ReducedArtworkCard } from "@components/artwork-card";
import { ListWrapper } from "./styled";

type ReducedArtworksList = {
    artworks: Artwork[];
}

export function ReducedArtworksList({ artworks }: ReducedArtworksList) {
    return (
        <ListWrapper>
            {artworks.map(item =>
                <ReducedArtworkCard
                    id={item.id}
                    image={item.image_id}
                    title={item.title}
                    artist={item.artist_title}
                    isPublic={item.is_public_domain}
                    key={item.id}
                />)}
        </ListWrapper>
    )
}