/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { payload } from 'api/songs/_mocks/get';
import { songsReceive } from 'states/songs/actions';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Songs from '../';

const setup = () => ({
  tree: TestRenderer.create(
    <StoreProvider
      state={batchedActionsReducer(
        {},
        [songsReceive(payload)]
      )}>
      <Songs />
    </StoreProvider>
  ),
});

describe('Songs', () => {
  it('should render as expected', () => {
    expect(setup().tree.toJSON()).toMatchSnapshot();
  });
});
