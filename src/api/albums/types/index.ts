import * as searchTypes from 'api/search/types';

export type GetParams = (
  Pick<searchTypes.GetParams, 'term'>
);

export type GetPayload = (
  searchTypes.GetPayload<Album>
);

export type Album = {
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

