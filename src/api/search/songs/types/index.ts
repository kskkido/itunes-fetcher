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
  trackId: number;
  artistName: string;
  trackName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  trackPrice: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
};

