import { combineEpics } from 'redux-observable';
import { fetchEpic } from './fetch';
export const songsEpic = combineEpics(fetchEpic);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9zb25ncy9lcGljL2luZGV4LnRzIiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBDLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQ25DLFNBQVMsQ0FDVixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZWlzdWtla2lkby9wcm9qZWN0cy9pdHVuZXNGZXRjaGVyL3NyYy9zdGF0ZXMvc29uZ3MvZXBpYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lRXBpY3MgfSBmcm9tICdyZWR1eC1vYnNlcnZhYmxlJztcbmltcG9ydCB7IGZldGNoRXBpYyB9IGZyb20gJy4vZmV0Y2gnO1xuXG5leHBvcnQgY29uc3Qgc29uZ3NFcGljID0gY29tYmluZUVwaWNzKFxuICBmZXRjaEVwaWNcbik7XG4iXSwidmVyc2lvbiI6M30=