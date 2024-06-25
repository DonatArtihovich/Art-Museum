import Loader from "@components/loader";
import { ReducedArtworksList } from "@components/reduced-artworks-list";
import { getArtworks } from "@utils/api";
import { useEffect, useState } from "react";

export function AdditionalArtworksSection() {
    const [artworks, setArtworks] = useState<{ totalPages: number, data: Artwork[] } | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);

    useEffect(() => {
        new Promise(async () => {
            const { pagination: { total_pages: totalPages }, data } = await getArtworks(1, 9);
            setArtworks({ totalPages, data });
            setIsPending(false);
        })

        return () => setIsPending(true);
    }, [])

    return isPending || !artworks
        ? <Loader />
        : <ReducedArtworksList artworks={artworks?.data} />
}