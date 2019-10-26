import { createReducer } from 'states/utils/reducer';
import * as actions from 'states/applications/actions';
export const requestReducer = createReducer({ status: 'unsent' })
    .case(actions.applicationsFetchLoading, () => ({ status: 'loading' }))
    .case(actions.applicationsFetchSuccess, () => ({ status: 'success' }))
    .case(actions.applicationsFetchFailure, (_, payload) => ({ status: 'error', error: payload }));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9hcHBsaWNhdGlvbnMvcmVkdWNlci9yZXF1ZXN0L2luZGV4LnRzIiwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEtBQUssT0FBTyxNQUFNLDZCQUE2QixDQUFDO0FBT3ZELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxhQUFhLENBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7S0FDNUUsSUFBSSxDQUNILE9BQU8sQ0FBQyx3QkFBd0IsRUFDaEMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUM5QjtLQUNBLElBQUksQ0FDSCxPQUFPLENBQUMsd0JBQXdCLEVBQ2hDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDOUI7S0FDQSxJQUFJLENBQ0gsT0FBTyxDQUFDLHdCQUF3QixFQUNoQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUN0RCxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZWlzdWtla2lkby9wcm9qZWN0cy9pdHVuZXNGZXRjaGVyL3NyYy9zdGF0ZXMvYXBwbGljYXRpb25zL3JlZHVjZXIvcmVxdWVzdC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0U3RhdHVzLCBGb3JtYXR0ZWRSZXF1ZXN0RXJyb3IgfSBmcm9tICd0eXBlcy9yZXF1ZXN0JztcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdzdGF0ZXMvdXRpbHMvcmVkdWNlcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ3N0YXRlcy9hcHBsaWNhdGlvbnMvYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RTdGF0ZSA9IHtcbiAgc3RhdHVzOiBSZXF1ZXN0U3RhdHVzO1xuICBlcnJvcj86IEZvcm1hdHRlZFJlcXVlc3RFcnJvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXI8UmVxdWVzdFN0YXRlPih7IHN0YXR1czogJ3Vuc2VudCcgfSlcbiAgLmNhc2UoXG4gICAgYWN0aW9ucy5hcHBsaWNhdGlvbnNGZXRjaExvYWRpbmcsXG4gICAgKCkgPT4gKHsgc3RhdHVzOiAnbG9hZGluZycgfSlcbiAgKVxuICAuY2FzZShcbiAgICBhY3Rpb25zLmFwcGxpY2F0aW9uc0ZldGNoU3VjY2VzcyxcbiAgICAoKSA9PiAoeyBzdGF0dXM6ICdzdWNjZXNzJyB9KVxuICApXG4gIC5jYXNlKFxuICAgIGFjdGlvbnMuYXBwbGljYXRpb25zRmV0Y2hGYWlsdXJlLFxuICAgIChfLCBwYXlsb2FkKSA9PiAoeyBzdGF0dXM6ICdlcnJvcicsIGVycm9yOiBwYXlsb2FkIH0pXG4gICk7Il0sInZlcnNpb24iOjN9