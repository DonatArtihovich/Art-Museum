import { KEY } from "@constants/storage";

export function getSavedArtworks(): Artwork[] {
    const artworksJSON = localStorage.getItem(KEY);

    return artworksJSON? JSON.parse(artworksJSON) : [];
}

export function saveArtwork(artwork: Artwork) {
    const artworksJSON = localStorage.getItem(KEY);
    const artworksArr = artworksJSON? JSON.parse(artworksJSON) : [];

    artworksArr.push(artwork);
    localStorage.setItem(KEY, JSON.stringify(artworksArr));
}

export function removeArtwork(id: string) {
    const artworksJSON = localStorage.getItem(KEY);
    if(!artworksJSON) return;

    const artworksArr = JSON.parse(artworksJSON).filter((item: Artwork) => item.id !== id);
    localStorage.setItem(KEY, artworksArr);
}