/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import * as albumsGetMock from 'api/albums/_mocks/get';
import * as applicationsGetMock from 'api/applications/_mocks/get';
import * as songsGetMock from 'api/songs/_mocks/get';
import * as albumsActions from 'states/albums/actions';
import * as applicationsActions from 'states/applications/actions';
import * as songsActions from 'states/songs/actions';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Search from '../';

const setup = () => ({
  tree: TestRenderer.create(
    <StoreProvider state={
      batchedActionsReducer(
        {},
        [
          albumsActions.albumsReceive(albumsGetMock.payload),
          applicationsActions.applicationsReceive(applicationsGetMock.payload),
          songsActions.songsReceive(songsGetMock.payload),
        ]
      )}>
      <Search />
    </StoreProvider>
  ),
});

describe('Search', () => {
  it('should render as expected', () => {
    expect(setup().tree.toJSON()).toMatchSnapshot();
  });
});
