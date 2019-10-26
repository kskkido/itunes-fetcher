/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Albums from '../';
const setup = () => ({
    tree: TestRenderer.create(React.createElement(StoreProvider, { state: batchedActionsReducer({}) },
        React.createElement(Albums, null))),
});
describe('Albums', () => {
    it('should render as expected', () => {
        expect(setup().tree.toJSON()).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9BbGJ1bXMvX3Rlc3RzL0FsYnVtcy50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sWUFBWSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sYUFBYSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sTUFBTSxNQUFNLEtBQUssQ0FBQztBQUV6QixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLElBQUksRUFBRSxZQUFZLENBQUMsTUFBTSxDQUN2QixvQkFBQyxhQUFhLElBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFDLEVBQUUsQ0FBQztRQUM3QyxvQkFBQyxNQUFNLE9BQUcsQ0FDSSxDQUNqQjtDQUNGLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLEVBQUU7UUFDbkMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9BbGJ1bXMvX3Rlc3RzL0FsYnVtcy50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImplc3RcIiAvPlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgU3RvcmVQcm92aWRlciBmcm9tICdfdGVzdHMvdXRpbHMvUHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInO1xuaW1wb3J0IHsgYmF0Y2hlZEFjdGlvbnNSZWR1Y2VyIH0gZnJvbSAnX3Rlc3RzL3V0aWxzL3N0YXRlcy9yZWR1Y2VyJztcbmltcG9ydCBBbGJ1bXMgZnJvbSAnLi4vJztcblxuY29uc3Qgc2V0dXAgPSAoKSA9PiAoe1xuICB0cmVlOiBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgIDxTdG9yZVByb3ZpZGVyIHN0YXRlPXtiYXRjaGVkQWN0aW9uc1JlZHVjZXIoe30pfT5cbiAgICAgIDxBbGJ1bXMgLz5cbiAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICksXG59KTtcblxuZGVzY3JpYmUoJ0FsYnVtcycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZW5kZXIgYXMgZXhwZWN0ZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHNldHVwKCkudHJlZS50b0pTT04oKSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=