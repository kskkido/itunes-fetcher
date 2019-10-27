/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { payload } from 'api/albums/_mocks/get';
import { albumsReceive } from 'states/albums/actions';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Albums from '../';
const setup = () => ({
    tree: TestRenderer.create(React.createElement(StoreProvider, { state: batchedActionsReducer({}, [albumsReceive(payload)]) },
        React.createElement(Albums, null))),
});
describe('Albums', () => {
    it('should render as expected', () => {
        expect(setup().tree.toJSON()).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9BbGJ1bXMvX3Rlc3RzL0FsYnVtcy50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sWUFBWSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sYUFBYSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxNQUFNLE1BQU0sS0FBSyxDQUFDO0FBRXpCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkIsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQ3ZCLG9CQUFDLGFBQWEsSUFDWixLQUFLLEVBQUUscUJBQXFCLENBQzFCLEVBQUUsRUFDRixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUN6QjtRQUNELG9CQUFDLE1BQU0sT0FBRyxDQUNJLENBQ2pCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtRQUNuQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMva2Vpc3VrZWtpZG8vcHJvamVjdHMvaXR1bmVzRmV0Y2hlci9zcmMvY29tcG9uZW50cy9TY3JlZW5zL0FsYnVtcy9fdGVzdHMvQWxidW1zLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiamVzdFwiIC8+XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJztcbmltcG9ydCBTdG9yZVByb3ZpZGVyIGZyb20gJ190ZXN0cy91dGlscy9Qcm92aWRlcnMvU3RvcmVQcm92aWRlcic7XG5pbXBvcnQgeyBwYXlsb2FkIH0gZnJvbSAnYXBpL2FsYnVtcy9fbW9ja3MvZ2V0JztcbmltcG9ydCB7IGFsYnVtc1JlY2VpdmUgfSBmcm9tICdzdGF0ZXMvYWxidW1zL2FjdGlvbnMnO1xuaW1wb3J0IHsgYmF0Y2hlZEFjdGlvbnNSZWR1Y2VyIH0gZnJvbSAnX3Rlc3RzL3V0aWxzL3N0YXRlcy9yZWR1Y2VyJztcbmltcG9ydCBBbGJ1bXMgZnJvbSAnLi4vJztcblxuY29uc3Qgc2V0dXAgPSAoKSA9PiAoe1xuICB0cmVlOiBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgIDxTdG9yZVByb3ZpZGVyXG4gICAgICBzdGF0ZT17YmF0Y2hlZEFjdGlvbnNSZWR1Y2VyKFxuICAgICAgICB7fSxcbiAgICAgICAgW2FsYnVtc1JlY2VpdmUocGF5bG9hZCldXG4gICAgICApfT5cbiAgICAgIDxBbGJ1bXMgLz5cbiAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICksXG59KTtcblxuZGVzY3JpYmUoJ0FsYnVtcycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZW5kZXIgYXMgZXhwZWN0ZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHNldHVwKCkudHJlZS50b0pTT04oKSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=