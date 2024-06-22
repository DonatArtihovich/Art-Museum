import { createContext } from "react";

type StorageContext = {
    savedArtworks: Artwork[];
    saveArtwork: (artwork: Artwork) => void;
    removeArtwork: (id: string) => void;
    isArtworkSaved: (id: string) => boolean;
}

export const StorageContext = createContext<StorageContext | null>(null)