import { ReducedArtworkCard } from "@components/artwork-card";
import { ListWrapper } from "./styled";

type ReducedArtworksList = {
    artworks: Artwork[];
}

export function ReducedArtworksList({ artworks }: ReducedArtworksList) {
    return (
        <ListWrapper>
            {artworks.map(item => <ReducedArtworkCard artwork={item} key={item.id} />)}
        </ListWrapper>
    )
}