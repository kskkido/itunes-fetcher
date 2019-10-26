/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Songs from '../';

const setup = () => ({
  tree: TestRenderer.create(
    <StoreProvider state={batchedActionsReducer({})}>
      <Songs />
    </StoreProvider>
  ),
});

describe('Songs', () => {
  it('should render as expected', () => {
    expect(setup().tree.toJSON()).toMatchSnapshot();
  });
});
