export const API_PATH = 'https://api.artic.edu/api/v1'

export const ARTWORKS_PATH = API_PATH + '/artworks'
export const IMAGES_PATH = API_PATH + '/images'

export const imagePath = (id: string) => `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`