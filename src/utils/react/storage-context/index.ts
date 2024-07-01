import { createContext } from 'react';

type StorageContext = {
  savedArtworks: Artwork[];
  saveArtwork: (_: Artwork) => void;
  removeArtwork: (_: number) => void;
  isArtworkSaved: (_: number) => boolean;
};

export const StorageContext = createContext<StorageContext | null>(null);
