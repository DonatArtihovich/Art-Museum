export const getArtistYears = (display: string) => display.split(',').at(-1)?.trim()

export const getArtistNacionality = (display: string) => display.split('\n').at(-1)?.split(',')[0].trim();

