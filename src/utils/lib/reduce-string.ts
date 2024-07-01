export const reduceString = (str: string, limit: number): string => str.length > limit ? `${str.slice(0, limit + 1)}...` : str;