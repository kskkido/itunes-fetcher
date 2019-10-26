import React from 'react';
import { useSelector } from 'react-redux';
import * as applicationsSelectors from 'states/applications/selectors';
import Render from 'components/Shared/Render';
import ApplicationsComponent from 'components/Screens/Search/Parts/Results/Applications';
const Applications = () => {
    const ids = useSelector(applicationsSelectors.makeSelectAllIds());
    return (React.createElement(Render, { when: ids.length > 0 },
        React.createElement(ApplicationsComponent, { ids: ids.slice(0, 4) })));
};
export default Applications;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvU2NyZWVucy9TZWFyY2gvUGFydHMvUmVzdWx0cy9BcHBsaWNhdGlvbnMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUM5QyxPQUFPLHFCQUFxQixNQUFNLHNEQUFzRCxDQUFDO0FBRXpGLE1BQU0sWUFBWSxHQUFjLEdBQUcsRUFBRTtJQUNuQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBRWxFLE9BQU8sQ0FDTCxvQkFBQyxNQUFNLElBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUMxQixvQkFBQyxxQkFBcUIsSUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUksQ0FDeEMsQ0FDVixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxZQUFZLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvU2NyZWVucy9TZWFyY2gvUGFydHMvUmVzdWx0cy9BcHBsaWNhdGlvbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uc1NlbGVjdG9ycyBmcm9tICdzdGF0ZXMvYXBwbGljYXRpb25zL3NlbGVjdG9ycyc7XG5pbXBvcnQgUmVuZGVyIGZyb20gJ2NvbXBvbmVudHMvU2hhcmVkL1JlbmRlcic7XG5pbXBvcnQgQXBwbGljYXRpb25zQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvU2NyZWVucy9TZWFyY2gvUGFydHMvUmVzdWx0cy9BcHBsaWNhdGlvbnMnO1xuXG5jb25zdCBBcHBsaWNhdGlvbnM6IFJlYWN0LlNGQyA9ICgpID0+IHtcbiAgY29uc3QgaWRzID0gdXNlU2VsZWN0b3IoYXBwbGljYXRpb25zU2VsZWN0b3JzLm1ha2VTZWxlY3RBbGxJZHMoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyIHdoZW49e2lkcy5sZW5ndGggPiAwfT5cbiAgICAgIDxBcHBsaWNhdGlvbnNDb21wb25lbnQgaWRzPXtpZHMuc2xpY2UoMCwgNCl9IC8+XG4gICAgPC9SZW5kZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbnM7XG4iXSwidmVyc2lvbiI6M30=