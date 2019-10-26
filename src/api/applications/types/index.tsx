import * as searchTypes from 'api/search/types';

export type GetParams = (
  Pick<searchTypes.GetParams, 'term'>
);

export type GetPayload = (
  searchTypes.GetPayload<Application>
);

export type Application = {
  wrapperType: string;
  artistId: number;
  artistName: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  country: string;
  currency: string;
  primaryGenreName: string;
  trackId: number;
  trackName: string;
  trackViewUrl: string;
};
