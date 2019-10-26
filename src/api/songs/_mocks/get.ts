import { GetPayload, Song } from '../types';

const createSong = (id: number): Song => ({
  wrapperType: '',
  artistId: 0,
  trackId: id,
  artistName: '',
  trackName: '',
  trackCensoredName: '',
  artistViewUrl: '',
  trackViewUrl: '',
  previewUrl: '',
  artworkUrl60: '',
  artworkUrl100: '',
  trackPrice: '',
  trackExplicitness: '',
  discCount: 0,
  discNumber: 0,
  trackCount: 0,
  trackTimeMillis: 0,
  country: '',
  currency: '',
  primaryGenreName: '',
});

export const payload: GetPayload = {
  resultCount: 5,
  results: [0,1,2,3,4].map(createSong),
};
