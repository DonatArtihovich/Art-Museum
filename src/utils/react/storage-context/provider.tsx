import { useCallback, useState } from "react";
import { StorageContext } from "./index";
import * as Storage from '@utils/storage'

export default function StorageContextProvider({ children }: { children: React.ReactNode }) {
    const [savedArtworks, setSavedArtworks] = useState<Artwork[]>(Storage.getSavedArtworks());

    const saveArtwork = useCallback((artwork: Artwork) => {
        const newArr = Storage.saveArtwork(artwork);
        if (newArr) setSavedArtworks(newArr);
    }, [setSavedArtworks]);

    const removeArtwork = useCallback((id: string) => {
        const newArr = Storage.removeArtwork(id);
        if (newArr) setSavedArtworks(newArr);
    }, [setSavedArtworks]);

    const isArtworkSaved = useCallback((id: string): boolean => {
        return savedArtworks.findIndex(art => art.id === id) !== -1;
    }, [savedArtworks]);

    return (
        <StorageContext.Provider value={{
            savedArtworks,
            saveArtwork,
            removeArtwork,
            isArtworkSaved
        }}>
            {children}
        </StorageContext.Provider>
    )
}