import { GetPayload, Album } from '../types';

const createAlbum = (id: number): Album => ({
  wrapperType: '',
  artistId: id,
  collectionId: id,
  artistName: '',
  collectionName: '',
  collectionCensoredName: '',
  artistViewUrl: '',
  collectionViewUrl: '',
  artworkUrl60: '',
  artworkUrl100: '',
  collectionPrice: '',
  collectionExplicitness: '',
  discCount: 0,
  discNumber: 0,
  trackCount: 0,
  country: '',
  currency: '',
  primaryGenreName: '',
});

export const payload: GetPayload = {
  resultCount: 5,
  results: [0,1,2,3,4].map(createAlbum),
};
