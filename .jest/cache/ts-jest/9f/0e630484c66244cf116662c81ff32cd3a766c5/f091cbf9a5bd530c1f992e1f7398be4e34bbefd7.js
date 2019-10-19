import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(SafeAreaView, null,
            React.createElement(ScrollView, { contentInsetAdjustmentBehavior: "automatic", style: styles.scrollView },
                React.createElement(Header, null),
                React.createElement(View, { style: styles.body },
                    React.createElement(View, { style: styles.sectionContainer },
                        React.createElement(Text, { style: styles.sectionTitle }, "Step One"),
                        React.createElement(Text, { style: styles.sectionDescription },
                            "Edit ",
                            React.createElement(Text, { style: styles.highlight }, "App.js"),
                            " to change this screen and then come back to see your edits.")),
                    React.createElement(View, { style: styles.sectionContainer },
                        React.createElement(Text, { style: styles.sectionTitle }, "See Your Changes"),
                        React.createElement(Text, { style: styles.sectionDescription },
                            React.createElement(ReloadInstructions, null))),
                    React.createElement(View, { style: styles.sectionContainer },
                        React.createElement(Text, { style: styles.sectionTitle }, "Debug"),
                        React.createElement(Text, { style: styles.sectionDescription },
                            React.createElement(DebugInstructions, null))),
                    React.createElement(View, { style: styles.sectionContainer },
                        React.createElement(Text, { style: styles.sectionTitle }, "Learn More"),
                        React.createElement(Text, { style: styles.sectionDescription }, "Read the docs to discover what to do next:")),
                    React.createElement(LearnMoreLinks, null))))));
};
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvQXBwL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEYsT0FBTyxFQUNMLE1BQU0sRUFDTixjQUFjLEVBQ2QsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixrQkFBa0IsR0FDbkIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxNQUFNLEdBQUcsR0FBYyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxDQUNMO1FBQ0Usb0JBQUMsWUFBWTtZQUNYLG9CQUFDLFVBQVUsSUFDVCw4QkFBOEIsRUFBQyxXQUFXLEVBQzFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtnQkFDeEIsb0JBQUMsTUFBTSxPQUFHO2dCQUNWLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQ3RCLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjt3QkFDbEMsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxlQUFpQjt3QkFDakQsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsa0JBQWtCOzs0QkFDL0Isb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxhQUFlOzJGQUU1QyxDQUNGO29CQUNQLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjt3QkFDbEMsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSx1QkFBeUI7d0JBQ3pELG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjs0QkFDcEMsb0JBQUMsa0JBQWtCLE9BQUcsQ0FDakIsQ0FDRjtvQkFDUCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7d0JBQ2xDLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksWUFBYzt3QkFDOUMsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsa0JBQWtCOzRCQUNwQyxvQkFBQyxpQkFBaUIsT0FBRyxDQUNoQixDQUNGO29CQUNQLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjt3QkFDbEMsb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxpQkFBbUI7d0JBQ25ELG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixpREFFL0IsQ0FDRjtvQkFDUCxvQkFBQyxjQUFjLE9BQUcsQ0FDYixDQUNJLENBQ0EsQ0FDZCxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLFVBQVUsRUFBRTtRQUNWLGVBQWUsRUFBRSxNQUFNLENBQUMsT0FBTztLQUNoQztJQUNELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRCxJQUFJLEVBQUU7UUFDSixlQUFlLEVBQUUsTUFBTSxDQUFDLEtBQUs7S0FDOUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixTQUFTLEVBQUUsRUFBRTtRQUNiLGlCQUFpQixFQUFFLEVBQUU7S0FDdEI7SUFDRCxZQUFZLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztLQUNwQjtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLFNBQVMsRUFBRSxDQUFDO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7S0FDbkI7SUFDRCxTQUFTLEVBQUU7UUFDVCxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNELE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO1FBQ1YsWUFBWSxFQUFFLEVBQUU7UUFDaEIsU0FBUyxFQUFFLE9BQU87S0FDbkI7Q0FDRixDQUFDLENBQUM7QUFFSCxlQUFlLEdBQUcsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMva2Vpc3VrZWtpZG8vcHJvamVjdHMvaXR1bmVzRmV0Y2hlci9zcmMvY29udGFpbmVycy9BcHAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTYWZlQXJlYVZpZXcsIFN0eWxlU2hlZXQsIFNjcm9sbFZpZXcsIFZpZXcsIFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHtcbiAgSGVhZGVyLFxuICBMZWFybk1vcmVMaW5rcyxcbiAgQ29sb3JzLFxuICBEZWJ1Z0luc3RydWN0aW9ucyxcbiAgUmVsb2FkSW5zdHJ1Y3Rpb25zLFxufSBmcm9tICdyZWFjdC1uYXRpdmUvTGlicmFyaWVzL05ld0FwcFNjcmVlbic7XG5cbmNvbnN0IEFwcDogUmVhY3QuU0ZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2FmZUFyZWFWaWV3PlxuICAgICAgICA8U2Nyb2xsVmlld1xuICAgICAgICAgIGNvbnRlbnRJbnNldEFkanVzdG1lbnRCZWhhdmlvcj1cImF1dG9tYXRpY1wiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5zY3JvbGxWaWV3fT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfT5TdGVwIE9uZTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIEVkaXQgPFRleHQgc3R5bGU9e3N0eWxlcy5oaWdobGlnaHR9PkFwcC5qczwvVGV4dD4gdG8gY2hhbmdlIHRoaXNcbiAgICAgICAgICAgICAgICBzY3JlZW4gYW5kIHRoZW4gY29tZSBiYWNrIHRvIHNlZSB5b3VyIGVkaXRzLlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0+U2VlIFlvdXIgQ2hhbmdlczwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIDxSZWxvYWRJbnN0cnVjdGlvbnMgLz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9PkRlYnVnPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25EZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgPERlYnVnSW5zdHJ1Y3Rpb25zIC8+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfT5MZWFybiBNb3JlPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25EZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgUmVhZCB0aGUgZG9jcyB0byBkaXNjb3ZlciB3aGF0IHRvIGRvIG5leHQ6XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxMZWFybk1vcmVMaW5rcyAvPlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgPC9TYWZlQXJlYVZpZXc+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHNjcm9sbFZpZXc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy5saWdodGVyLFxuICB9LFxuICBlbmdpbmU6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgfSxcbiAgYm9keToge1xuICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JzLndoaXRlLFxuICB9LFxuICBzZWN0aW9uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiAzMixcbiAgICBwYWRkaW5nSG9yaXpvbnRhbDogMjQsXG4gIH0sXG4gIHNlY3Rpb25UaXRsZToge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250V2VpZ2h0OiAnNjAwJyxcbiAgICBjb2xvcjogQ29sb3JzLmJsYWNrLFxuICB9LFxuICBzZWN0aW9uRGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW5Ub3A6IDgsXG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgIGNvbG9yOiBDb2xvcnMuZGFyayxcbiAgfSxcbiAgaGlnaGxpZ2h0OiB7XG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gIH0sXG4gIGZvb3Rlcjoge1xuICAgIGNvbG9yOiBDb2xvcnMuZGFyayxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgcGFkZGluZzogNCxcbiAgICBwYWRkaW5nUmlnaHQ6IDEyLFxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwidmVyc2lvbiI6M30=