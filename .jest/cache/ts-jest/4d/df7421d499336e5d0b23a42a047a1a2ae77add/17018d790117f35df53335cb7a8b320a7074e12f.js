/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { payload } from 'api/applications/_mocks/get';
import { applicationsReceive } from 'states/applications/actions';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Applications from '../';
const setup = () => ({
    tree: TestRenderer.create(React.createElement(StoreProvider, { state: batchedActionsReducer({}, [applicationsReceive(payload)]) },
        React.createElement(Applications, null))),
});
describe('Applications', () => {
    it('should render as expected', () => {
        expect(setup().tree.toJSON()).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9BcHBsaWNhdGlvbnMvX3Rlc3RzL0FwcGxpY2F0aW9ucy50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sWUFBWSxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sYUFBYSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLFlBQVksTUFBTSxLQUFLLENBQUM7QUFFL0IsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuQixJQUFJLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FDdkIsb0JBQUMsYUFBYSxJQUNaLEtBQUssRUFBRSxxQkFBcUIsQ0FDMUIsRUFBRSxFQUNGLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDL0I7UUFDRCxvQkFBQyxZQUFZLE9BQUcsQ0FDRixDQUNqQjtDQUNGLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO0lBQzVCLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLEVBQUU7UUFDbkMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9BcHBsaWNhdGlvbnMvX3Rlc3RzL0FwcGxpY2F0aW9ucy50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImplc3RcIiAvPlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgU3RvcmVQcm92aWRlciBmcm9tICdfdGVzdHMvdXRpbHMvUHJvdmlkZXJzL1N0b3JlUHJvdmlkZXInO1xuaW1wb3J0IHsgcGF5bG9hZCB9IGZyb20gJ2FwaS9hcHBsaWNhdGlvbnMvX21vY2tzL2dldCc7XG5pbXBvcnQgeyBhcHBsaWNhdGlvbnNSZWNlaXZlIH0gZnJvbSAnc3RhdGVzL2FwcGxpY2F0aW9ucy9hY3Rpb25zJztcbmltcG9ydCB7IGJhdGNoZWRBY3Rpb25zUmVkdWNlciB9IGZyb20gJ190ZXN0cy91dGlscy9zdGF0ZXMvcmVkdWNlcic7XG5pbXBvcnQgQXBwbGljYXRpb25zIGZyb20gJy4uLyc7XG5cbmNvbnN0IHNldHVwID0gKCkgPT4gKHtcbiAgdHJlZTogVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICA8U3RvcmVQcm92aWRlclxuICAgICAgc3RhdGU9e2JhdGNoZWRBY3Rpb25zUmVkdWNlcihcbiAgICAgICAge30sXG4gICAgICAgIFthcHBsaWNhdGlvbnNSZWNlaXZlKHBheWxvYWQpXVxuICAgICAgKX0+XG4gICAgICA8QXBwbGljYXRpb25zIC8+XG4gICAgPC9TdG9yZVByb3ZpZGVyPlxuICApLFxufSk7XG5cbmRlc2NyaWJlKCdBcHBsaWNhdGlvbnMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcmVuZGVyIGFzIGV4cGVjdGVkJywgKCkgPT4ge1xuICAgIGV4cGVjdChzZXR1cCgpLnRyZWUudG9KU09OKCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9