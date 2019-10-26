import { createActionCreator } from 'states/utils/action';
export const albumsFetch = createActionCreator('albumsFetch');
export const albumsFetchLoading = createActionCreator('albumsFetchLoading');
export const albumsFetchSuccess = createActionCreator('albumsFetchSuccess');
export const albumsFetchFailure = createActionCreator('albumsFetchFailure');
export const albumsReceive = createActionCreator('albumsReceive');
export const albumsClear = createActionCreator('albumsResultsClear');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9hbGJ1bXMvYWN0aW9ucy9pbmRleC50cyIsIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUxRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsbUJBQW1CLENBQXdCLGFBQWEsQ0FBQyxDQUFDO0FBQ3JGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDNUUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM1RSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBd0Isb0JBQW9CLENBQUMsQ0FBQztBQUNuRyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQXlCLGVBQWUsQ0FBQyxDQUFDO0FBQzFGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZWlzdWtla2lkby9wcm9qZWN0cy9pdHVuZXNGZXRjaGVyL3NyYy9zdGF0ZXMvYWxidW1zL2FjdGlvbnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWxidW1zVHlwZXMgZnJvbSAnYXBpL2FsYnVtcy90eXBlcyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRSZXF1ZXN0RXJyb3IgfSBmcm9tICd0eXBlcy9yZXF1ZXN0JztcbmltcG9ydCB7IGNyZWF0ZUFjdGlvbkNyZWF0b3IgfSBmcm9tICdzdGF0ZXMvdXRpbHMvYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGFsYnVtc0ZldGNoID0gY3JlYXRlQWN0aW9uQ3JlYXRvcjxhbGJ1bXNUeXBlcy5HZXRQYXJhbXM+KCdhbGJ1bXNGZXRjaCcpO1xuZXhwb3J0IGNvbnN0IGFsYnVtc0ZldGNoTG9hZGluZyA9IGNyZWF0ZUFjdGlvbkNyZWF0b3IoJ2FsYnVtc0ZldGNoTG9hZGluZycpO1xuZXhwb3J0IGNvbnN0IGFsYnVtc0ZldGNoU3VjY2VzcyA9IGNyZWF0ZUFjdGlvbkNyZWF0b3IoJ2FsYnVtc0ZldGNoU3VjY2VzcycpO1xuZXhwb3J0IGNvbnN0IGFsYnVtc0ZldGNoRmFpbHVyZSA9IGNyZWF0ZUFjdGlvbkNyZWF0b3I8Rm9ybWF0dGVkUmVxdWVzdEVycm9yPignYWxidW1zRmV0Y2hGYWlsdXJlJyk7XG5leHBvcnQgY29uc3QgYWxidW1zUmVjZWl2ZSA9IGNyZWF0ZUFjdGlvbkNyZWF0b3I8YWxidW1zVHlwZXMuR2V0UGF5bG9hZD4oJ2FsYnVtc1JlY2VpdmUnKTtcbmV4cG9ydCBjb25zdCBhbGJ1bXNDbGVhciA9IGNyZWF0ZUFjdGlvbkNyZWF0b3IoJ2FsYnVtc1Jlc3VsdHNDbGVhcicpO1xuIl0sInZlcnNpb24iOjN9