import { createContext } from "react";

type StorageContext = {
    savedArtworks: Artwork[];
    saveArtwork: (artwork: Artwork) => void;
    removeArtwork: (id: number) => void;
    isArtworkSaved: (id: number) => boolean;
}

export const StorageContext = createContext<StorageContext | null>(null)