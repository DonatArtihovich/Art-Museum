import { KEY } from "@constants/storage";

export function getSavedArtworks(): Artwork[] {
    const artworksJSON = localStorage.getItem(KEY);

    return artworksJSON? JSON.parse(artworksJSON) : [];
}

export function saveArtwork(artwork: Artwork): false | Artwork[] {
    const artworksJSON = localStorage.getItem(KEY);
    const artworksArr: Artwork[] = artworksJSON? JSON.parse(artworksJSON) : [];

    if(artworksArr.findIndex(art => art.id === artwork.id) !== -1) return false;

    artworksArr.push(artwork);
    localStorage.setItem(KEY, JSON.stringify(artworksArr));

    return artworksArr;
}

export function removeArtwork(id: string): false | Artwork[] {
    const artworksJSON = localStorage.getItem(KEY);
    if(!artworksJSON) return false;

    const artworksArr = JSON.parse(artworksJSON).filter((item: Artwork) => item.id !== id);
    localStorage.setItem(KEY, JSON.stringify(artworksArr));

    return artworksArr;
}