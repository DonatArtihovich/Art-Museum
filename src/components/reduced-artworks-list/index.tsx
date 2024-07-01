import { ReducedArtworkCard } from "@components/artwork-card";

import { ListWrapper } from "./styled";

type ReducedArtworksListProps = {
    artworks: Artwork[];
}

export function ReducedArtworksList({ artworks }: ReducedArtworksListProps) {
    return (
        <ListWrapper>
            {artworks.map(item =>
                <ReducedArtworkCard
                    artwork={item}
                    key={item.id}
                />)}
        </ListWrapper>
    )
}