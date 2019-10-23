export type SearchParams = {
  term: string;
};

export type SearchPayload = {
  resultCount: number;
  results: SearchResult[];
};

export type SearchResult = {
  wrapperType: string;
  kind: Kind; // union type?
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  colectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionPrice: string;
  trackPrice: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
};

export type Kind = (
  'songs' |
  'albums'
);
