import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';
export const allIdsReducer = createReducer([])
    .case(actions.songsReceive, (_, payload) => payload.results.map(result => `${result.trackId}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9zb25ncy9yZWR1Y2VyL3JlY29yZHMvYWxsSWRzLnRzIiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEtBQUssT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBSWhELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxhQUFhLENBQWMsRUFBRSxDQUFDO0tBQ3hELElBQUksQ0FDSCxPQUFPLENBQUMsWUFBWSxFQUNwQixDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FDbkUsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMva2Vpc3VrZWtpZG8vcHJvamVjdHMvaXR1bmVzRmV0Y2hlci9zcmMvc3RhdGVzL3NvbmdzL3JlZHVjZXIvcmVjb3Jkcy9hbGxJZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3N0YXRlcy91dGlscy9yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnc3RhdGVzL3NvbmdzL2FjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBBbGxJZHNTdGF0ZSA9IHN0cmluZ1tdO1xuXG5leHBvcnQgY29uc3QgYWxsSWRzUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXI8QWxsSWRzU3RhdGU+KFtdKVxuICAuY2FzZShcbiAgICBhY3Rpb25zLnNvbmdzUmVjZWl2ZSxcbiAgICAoXywgcGF5bG9hZCkgPT4gcGF5bG9hZC5yZXN1bHRzLm1hcChyZXN1bHQgPT4gYCR7cmVzdWx0LnRyYWNrSWR9YClcbiAgKTtcbiJdLCJ2ZXJzaW9uIjozfQ==