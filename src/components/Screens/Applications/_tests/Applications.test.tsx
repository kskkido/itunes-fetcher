/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { payload } from 'api/applications/_mocks/get';
import { applicationsReceive } from 'states/applications/actions';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Applications from '../';

const setup = () => ({
  tree: TestRenderer.create(
    <StoreProvider
      state={batchedActionsReducer(
        {},
        [applicationsReceive(payload)]
      )}>
      <Applications />
    </StoreProvider>
  ),
});

describe('Applications', () => {
  it('should render as expected', () => {
    expect(setup().tree.toJSON()).toMatchSnapshot();
  });
});
