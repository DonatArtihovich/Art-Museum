import { KEY } from "@constants/storage";

import { getSavedArtworks, removeArtwork, saveArtwork } from "./index";

const mockArtwork = {
    id: 1,
    title: '',
    artist_title: '',
    image_id: '',
    is_public_domain: true
};

const mockArtwork2 = {
    id: 2,
    title: '',
    artist_title: '',
    image_id: '',
    is_public_domain: true
};

describe('storage', () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    })

    it('should return empty array if no artworks', () => {
        const saved = getSavedArtworks();
        expect(saved).toEqual([])
    })

    it('should return array with saved artwork', () => {
        saveArtwork(mockArtwork);
        expect(localStorage.getItem(KEY)).toBe(JSON.stringify([mockArtwork]));
    })

    it('should return array without removed artwork', () => {
        localStorage.setItem(KEY, JSON.stringify([mockArtwork]));
        removeArtwork(mockArtwork.id);
        expect(localStorage.getItem(KEY)).toBe(JSON.stringify([]));
    })

    it('should work correctly', () => {
        saveArtwork(mockArtwork);
        saveArtwork(mockArtwork2);

        removeArtwork(mockArtwork.id);
        expect(JSON.stringify(getSavedArtworks())).toBe(JSON.stringify([mockArtwork2]));
    })

    it('should work correctly with artworks with same ids', () => {
        saveArtwork(mockArtwork);
        saveArtwork(mockArtwork);

        expect(JSON.stringify(getSavedArtworks())).toBe(JSON.stringify([mockArtwork]));
    })

    it('should work correctly with removing unsaved artworks', () => {
        saveArtwork(mockArtwork);
        removeArtwork(mockArtwork2.id);

        expect(JSON.stringify(getSavedArtworks())).toBe(JSON.stringify([mockArtwork]));
    })

    it('should work correctly with removing artworks without saved artworks', () => {
        removeArtwork(mockArtwork.id);

        expect(JSON.stringify(getSavedArtworks())).toBe(JSON.stringify([]));
    })
})