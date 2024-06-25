import { 
    getArtistNacionality,
    getArtistYears, 
    imagePath, 
    debounce
} from "./index";

describe(getArtistYears, () => {

    it('returns correct value', () => {
        const mockString = 'Vincent van Gogh\nDutch, 1853-1890';

        expect(getArtistYears(mockString)).toBe('1853-1890')
    })

    it('returns correct value', () => {
        const mockString = 'Alma Thomas\nAmerican, 1891–1978';

        expect(getArtistYears(mockString)).toBe('1891–1978')
    })

    it('returns correct value', () => {
        const mockString = 'India\nTamil Nadu, near Nagapattinam';

        expect(getArtistYears(mockString)).toBe('near Nagapattinam')
    })
})

describe(getArtistNacionality, () => {

    it('returns correct value', () => {
        const mockString = 'Vincent van Gogh\nDutch, 1853-1890';

        expect(getArtistNacionality(mockString)).toBe('Dutch');
    })

    it('returns correct value', () => {
        const mockString = 'Alma Thomas\nAmerican, 1891–1978';

        expect(getArtistNacionality(mockString)).toBe('American');
    })

    it('returns correct value', () => {
        const mockString = 'India\nTamil Nadu, near Nagapattinam';

        expect(getArtistNacionality(mockString)).toBe('Tamil Nadu');
    })
})

describe(imagePath, () => {

    it('returns correct value', () => {
        const mockId = 'e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9';

        expect(imagePath(mockId)).toBe('https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg');
    })

    it('returns correct value', () => {
        const mockId = 'd94d0e3d-5d89-ce07-ee0f-7fa6d8def8ab';

        expect(imagePath(mockId)).toBe('https://www.artic.edu/iiif/2/d94d0e3d-5d89-ce07-ee0f-7fa6d8def8ab/full/843,/0/default.jpg');
    })

     it('returns correct value', () => {
        const mockId = '96e26f4f-c578-b14c-2714-2a565f19e0d0';

        expect(imagePath(mockId)).toBe('https://www.artic.edu/iiif/2/96e26f4f-c578-b14c-2714-2a565f19e0d0/full/843,/0/default.jpg');
    })
})

jest.useFakeTimers();
describe(debounce, () => {
    let mockCallback: jest.Mock;

    beforeEach(() => {
        mockCallback = jest.fn();
    })

    it('should call the callback after the specified time', () => {
        debounce(mockCallback, 500);
        jest.advanceTimersByTime(500);
        expect(mockCallback).toHaveBeenCalled();
    })


})