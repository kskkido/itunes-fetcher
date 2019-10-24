export type SearchParams = {
  term: string;
};

export type SearchPayload = {
  resultCount: number;
  results: SearchResult[];
};

export type SearchResult = {
  wrapperType: string;
  artistId: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionPrice: string;
  collectionExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  country: string;
  currency: string;
  primaryGenreName: string;
};

