import { combineEpics } from 'redux-observable';
import { fetchEpic } from './fetch';
export const applicationsEpic = combineEpics(fetchEpic);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3N0YXRlcy9hcHBsaWNhdGlvbnMvZXBpYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVwQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQzFDLFNBQVMsQ0FDVixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZWlzdWtla2lkby9wcm9qZWN0cy9pdHVuZXNGZXRjaGVyL3NyYy9zdGF0ZXMvYXBwbGljYXRpb25zL2VwaWMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZUVwaWNzIH0gZnJvbSAncmVkdXgtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmZXRjaEVwaWMgfSBmcm9tICcuL2ZldGNoJztcblxuZXhwb3J0IGNvbnN0IGFwcGxpY2F0aW9uc0VwaWMgPSBjb21iaW5lRXBpY3MoXG4gIGZldGNoRXBpY1xuKTtcbiJdLCJ2ZXJzaW9uIjozfQ==