import { createStackNavigator } from 'react-navigation-stack';
import * as navigations from 'routes/navigations';
import Root from './Root';
const Home = createStackNavigator({
    [navigations.NAVIGATION_HOME.name]: {
        screen: Root,
        navigationOptions: { title: 'Home' },
    },
}, {
    initialRouteName: navigations.NAVIGATION_HOME.name,
});
export default Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvUm91dGVzL0hvbWUvaW5kZXgudHN4IiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sS0FBSyxXQUFXLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBRTFCLE1BQU0sSUFBSSxHQUFHLG9CQUFvQixDQUMvQjtJQUNFLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsQyxNQUFNLEVBQUUsSUFBSTtRQUNaLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtLQUNyQztDQUNGLEVBQ0Q7SUFDRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUk7Q0FDbkQsQ0FDRixDQUFDO0FBRUYsZUFBZSxJQUFJLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvUm91dGVzL0hvbWUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0YWNrTmF2aWdhdG9yIH0gZnJvbSAncmVhY3QtbmF2aWdhdGlvbi1zdGFjayc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9ucyBmcm9tICdyb3V0ZXMvbmF2aWdhdGlvbnMnO1xuXG5pbXBvcnQgUm9vdCBmcm9tICcuL1Jvb3QnO1xuXG5jb25zdCBIb21lID0gY3JlYXRlU3RhY2tOYXZpZ2F0b3IoXG4gIHtcbiAgICBbbmF2aWdhdGlvbnMuTkFWSUdBVElPTl9IT01FLm5hbWVdOiB7XG4gICAgICBzY3JlZW46IFJvb3QsXG4gICAgICBuYXZpZ2F0aW9uT3B0aW9uczogeyB0aXRsZTogJ0hvbWUnIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGluaXRpYWxSb3V0ZU5hbWU6IG5hdmlnYXRpb25zLk5BVklHQVRJT05fSE9NRS5uYW1lLFxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInZlcnNpb24iOjN9