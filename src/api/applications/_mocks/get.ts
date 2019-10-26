import { GetPayload, Application } from '../types';

const createApplication = (id: number): Application => ({
  wrapperType: '',
  artistId: 0,
  artistName: '',
  artworkUrl60: '',
  artworkUrl100: '',
  country: '',
  currency: '',
  primaryGenreName: '',
  trackId: id,
  trackName: '',
  trackViewUrl: '',
});

export const payload: GetPayload = {
  resultCount: 5,
  results: [0,1,2,3,4].map(createApplication),
};
