import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/songs/actions';
export const requestReducer = createReducer({ status: 'unsent' })
    .case(actions.fetchLoading, () => ({ status: 'loading' }))
    .case(actions.fetchSuccess, () => ({ status: 'success' }))
    .case(actions.fetchFailure, (_, payload) => ({ status: 'error', error: payload }));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9zb25ncy9yZWR1Y2VyL3JlcXVlc3QvaW5kZXgudHMiLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sS0FBSyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFPaEQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBZSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztLQUM1RSxJQUFJLENBQ0gsT0FBTyxDQUFDLFlBQVksRUFDcEIsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUM5QjtLQUNBLElBQUksQ0FDSCxPQUFPLENBQUMsWUFBWSxFQUNwQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQzlCO0tBQ0EsSUFBSSxDQUNILE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQ3RELENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9zb25ncy9yZWR1Y2VyL3JlcXVlc3QvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdFN0YXR1cywgRm9ybWF0dGVkUmVxdWVzdEVycm9yIH0gZnJvbSAndHlwZXMvcmVxdWVzdCc7XG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnc3RhdGVzL3V0aWxzL3JlZHVjZXInO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdzdGF0ZXMvc29uZ3MvYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGF0ZSA9IHtcbiAgc3RhdHVzOiBSZXF1ZXN0U3RhdHVzO1xuICBlcnJvcj86IEZvcm1hdHRlZFJlcXVlc3RFcnJvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXI8UmVxdWVzdFN0YXRlPih7IHN0YXR1czogJ3Vuc2VudCcgfSlcbiAgLmNhc2UoXG4gICAgYWN0aW9ucy5mZXRjaExvYWRpbmcsXG4gICAgKCkgPT4gKHsgc3RhdHVzOiAnbG9hZGluZycgfSlcbiAgKVxuICAuY2FzZShcbiAgICBhY3Rpb25zLmZldGNoU3VjY2VzcyxcbiAgICAoKSA9PiAoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KVxuICApXG4gIC5jYXNlKFxuICAgIGFjdGlvbnMuZmV0Y2hGYWlsdXJlLFxuICAgIChfLCBwYXlsb2FkKSA9PiAoeyBzdGF0dXM6ICdlcnJvcicsIGVycm9yOiBwYXlsb2FkIH0pXG4gICk7XG4iXSwidmVyc2lvbiI6M30=