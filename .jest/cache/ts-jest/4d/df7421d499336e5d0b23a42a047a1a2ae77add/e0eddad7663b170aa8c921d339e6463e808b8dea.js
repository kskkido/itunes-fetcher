/// <reference types="jest" />
import React from 'react';
import TestRenderer from 'react-test-renderer';
import StoreProvider from '_tests/utils/Providers/StoreProvider';
import { payload } from 'api/songs/_mocks/get';
import { receive } from 'states/songs/actions';
import { batchedActionsReducer } from '_tests/utils/states/reducer';
import Songs from '../';
const setup = () => ({
    tree: TestRenderer.create(React.createElement(StoreProvider, { state: batchedActionsReducer({}, [receive(payload)]) },
        React.createElement(Songs, null))),
});
describe('Songs', () => {
    it('should render as expected', () => {
        expect(setup().tree.toJSON()).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9Tb25ncy9fdGVzdHMvU29uZ3MudGVzdC50c3giLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLFlBQVksTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLGFBQWEsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sS0FBSyxNQUFNLEtBQUssQ0FBQztBQUV4QixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLElBQUksRUFBRSxZQUFZLENBQUMsTUFBTSxDQUN2QixvQkFBQyxhQUFhLElBQ1osS0FBSyxFQUFFLHFCQUFxQixDQUMxQixFQUFFLEVBQ0YsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDbkI7UUFDRCxvQkFBQyxLQUFLLE9BQUcsQ0FDSyxDQUNqQjtDQUNGLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLEVBQUU7UUFDbkMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9Tb25ncy9fdGVzdHMvU29uZ3MudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJqZXN0XCIgLz5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuaW1wb3J0IFN0b3JlUHJvdmlkZXIgZnJvbSAnX3Rlc3RzL3V0aWxzL1Byb3ZpZGVycy9TdG9yZVByb3ZpZGVyJztcbmltcG9ydCB7IHBheWxvYWQgfSBmcm9tICdhcGkvc29uZ3MvX21vY2tzL2dldCc7XG5pbXBvcnQgeyByZWNlaXZlIH0gZnJvbSAnc3RhdGVzL3NvbmdzL2FjdGlvbnMnO1xuaW1wb3J0IHsgYmF0Y2hlZEFjdGlvbnNSZWR1Y2VyIH0gZnJvbSAnX3Rlc3RzL3V0aWxzL3N0YXRlcy9yZWR1Y2VyJztcbmltcG9ydCBTb25ncyBmcm9tICcuLi8nO1xuXG5jb25zdCBzZXR1cCA9ICgpID0+ICh7XG4gIHRyZWU6IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgPFN0b3JlUHJvdmlkZXJcbiAgICAgIHN0YXRlPXtiYXRjaGVkQWN0aW9uc1JlZHVjZXIoXG4gICAgICAgIHt9LFxuICAgICAgICBbcmVjZWl2ZShwYXlsb2FkKV1cbiAgICAgICl9PlxuICAgICAgPFNvbmdzIC8+XG4gICAgPC9TdG9yZVByb3ZpZGVyPlxuICApLFxufSk7XG5cbmRlc2NyaWJlKCdTb25ncycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZW5kZXIgYXMgZXhwZWN0ZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHNldHVwKCkudHJlZS50b0pTT04oKSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=