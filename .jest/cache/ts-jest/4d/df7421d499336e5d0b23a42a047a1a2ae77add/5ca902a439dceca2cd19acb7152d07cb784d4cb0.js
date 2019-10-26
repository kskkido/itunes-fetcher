import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/albums/actions';
export const byIdReducer = createReducer({})
    .case(actions.albumsReceive, (_, payload) => (payload.results.reduce((acc, result) => (acc[`${result.collectionId}`] = result, acc), {})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9hbGJ1bXMvcmVkdWNlci9yZWNvcmRzL2J5SWQudHMiLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sS0FBSyxPQUFPLE1BQU0sdUJBQXVCLENBQUM7QUFNakQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBWSxFQUFFLENBQUM7S0FDcEQsSUFBSSxDQUNILE9BQU8sQ0FBQyxhQUFhLEVBQ3JCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDZCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDcEIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFDOUQsRUFBZSxDQUNoQixDQUNGLENBQ0YsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMva2Vpc3VrZWtpZG8vcHJvamVjdHMvaXR1bmVzRmV0Y2hlci9zcmMvc3RhdGVzL2FsYnVtcy9yZWR1Y2VyL3JlY29yZHMvYnlJZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGJ1bSB9IGZyb20gJ2FwaS9hbGJ1bXMvdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3N0YXRlcy91dGlscy9yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnc3RhdGVzL2FsYnVtcy9hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgQnlJZFN0YXRlID0gKFxuICBSZWNvcmQ8c3RyaW5nLCBBbGJ1bT5cbik7XG5cbmV4cG9ydCBjb25zdCBieUlkUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXI8QnlJZFN0YXRlPih7fSlcbiAgLmNhc2UoXG4gICAgYWN0aW9ucy5hbGJ1bXNSZWNlaXZlLFxuICAgIChfLCBwYXlsb2FkKSA9PiAoXG4gICAgICBwYXlsb2FkLnJlc3VsdHMucmVkdWNlKFxuICAgICAgICAoYWNjLCByZXN1bHQpID0+IChhY2NbYCR7cmVzdWx0LmNvbGxlY3Rpb25JZH1gXSA9IHJlc3VsdCwgYWNjKSxcbiAgICAgICAge30gYXMgQnlJZFN0YXRlXG4gICAgICApXG4gICAgKVxuICApO1xuIl0sInZlcnNpb24iOjN9