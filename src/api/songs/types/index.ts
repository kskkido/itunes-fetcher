import * as searchTypes from 'api/search/types';

export type GetParams = (
  Pick<searchTypes.GetParams, 'term'>
);

export type GetPayload = (
  searchTypes.GetPayload<Song>
);

export type Song = {
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

