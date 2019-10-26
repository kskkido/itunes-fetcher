/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { payload } from 'api/albums/_mocks/get';
import { receive } from 'states/albums/actions';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Albums from '../';

const setup = () => ({
  tree: TestRenderer.create(
    <StoreProvider
      state={batchedActionsReducer(
        {},
        [receive(payload)]
      )}>
      <Albums />
    </StoreProvider>
  ),
});

describe('Albums', () => {
  it('should render as expected', () => {
    expect(setup().tree.toJSON()).toMatchSnapshot();
  });
});
