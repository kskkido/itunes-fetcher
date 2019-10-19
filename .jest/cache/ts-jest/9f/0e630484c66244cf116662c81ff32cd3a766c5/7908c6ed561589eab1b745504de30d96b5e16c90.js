import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(StatusBar, { barStyle: "dark-content" }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvQXBwL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsVUFBVSxFQUNWLElBQUksRUFDSixJQUFJLEVBQ0osU0FBUyxHQUNWLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFDTCxNQUFNLEVBQ04sY0FBYyxFQUNkLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsa0JBQWtCLEdBQ25CLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsTUFBTSxHQUFHLEdBQWMsR0FBRyxFQUFFO0lBQzFCLE9BQU8sQ0FDTDtRQUNFLG9CQUFDLFNBQVMsSUFBQyxRQUFRLEVBQUMsY0FBYyxHQUFHO1FBQ3JDLG9CQUFDLFlBQVk7WUFDWCxvQkFBQyxVQUFVLElBQ1QsOEJBQThCLEVBQUMsV0FBVyxFQUMxQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7Z0JBQ3hCLG9CQUFDLE1BQU0sT0FBRztnQkFDVixvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO29CQUN0QixvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7d0JBQ2xDLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksZUFBaUI7d0JBQ2pELG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjs7NEJBQy9CLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsYUFBZTsyRkFFNUMsQ0FDRjtvQkFDUCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7d0JBQ2xDLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksdUJBQXlCO3dCQUN6RCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0I7NEJBQ3BDLG9CQUFDLGtCQUFrQixPQUFHLENBQ2pCLENBQ0Y7b0JBQ1Asb0JBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsZ0JBQWdCO3dCQUNsQyxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLFlBQWM7d0JBQzlDLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjs0QkFDcEMsb0JBQUMsaUJBQWlCLE9BQUcsQ0FDaEIsQ0FDRjtvQkFDUCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7d0JBQ2xDLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksaUJBQW1CO3dCQUNuRCxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsaURBRS9CLENBQ0Y7b0JBQ1Asb0JBQUMsY0FBYyxPQUFHLENBQ2IsQ0FDSSxDQUNBLENBQ2QsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixVQUFVLEVBQUU7UUFDVixlQUFlLEVBQUUsTUFBTSxDQUFDLE9BQU87S0FDaEM7SUFDRCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsSUFBSSxFQUFFO1FBQ0osZUFBZSxFQUFFLE1BQU0sQ0FBQyxLQUFLO0tBQzlCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsU0FBUyxFQUFFLEVBQUU7UUFDYixpQkFBaUIsRUFBRSxFQUFFO0tBQ3RCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7S0FDcEI7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO0tBQ25CO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixVQUFVLEVBQUUsS0FBSztRQUNqQixPQUFPLEVBQUUsQ0FBQztRQUNWLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsZUFBZSxHQUFHLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvQXBwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgU2FmZUFyZWFWaWV3LFxuICBTdHlsZVNoZWV0LFxuICBTY3JvbGxWaWV3LFxuICBWaWV3LFxuICBUZXh0LFxuICBTdGF0dXNCYXIsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQge1xuICBIZWFkZXIsXG4gIExlYXJuTW9yZUxpbmtzLFxuICBDb2xvcnMsXG4gIERlYnVnSW5zdHJ1Y3Rpb25zLFxuICBSZWxvYWRJbnN0cnVjdGlvbnMsXG59IGZyb20gJ3JlYWN0LW5hdGl2ZS9MaWJyYXJpZXMvTmV3QXBwU2NyZWVuJztcblxuY29uc3QgQXBwOiBSZWFjdC5TRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGF0dXNCYXIgYmFyU3R5bGU9XCJkYXJrLWNvbnRlbnRcIiAvPlxuICAgICAgPFNhZmVBcmVhVmlldz5cbiAgICAgICAgPFNjcm9sbFZpZXdcbiAgICAgICAgICBjb250ZW50SW5zZXRBZGp1c3RtZW50QmVoYXZpb3I9XCJhdXRvbWF0aWNcIlxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuc2Nyb2xsVmlld30+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuYm9keX0+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0+U3RlcCBPbmU8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICBFZGl0IDxUZXh0IHN0eWxlPXtzdHlsZXMuaGlnaGxpZ2h0fT5BcHAuanM8L1RleHQ+IHRvIGNoYW5nZSB0aGlzXG4gICAgICAgICAgICAgICAgc2NyZWVuIGFuZCB0aGVuIGNvbWUgYmFjayB0byBzZWUgeW91ciBlZGl0cy5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5zZWN0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uVGl0bGV9PlNlZSBZb3VyIENoYW5nZXM8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICA8UmVsb2FkSW5zdHJ1Y3Rpb25zIC8+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuc2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuc2VjdGlvblRpdGxlfT5EZWJ1ZzwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIDxEZWJ1Z0luc3RydWN0aW9ucyAvPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnNlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnNlY3Rpb25UaXRsZX0+TGVhcm4gTW9yZTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5zZWN0aW9uRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIFJlYWQgdGhlIGRvY3MgdG8gZGlzY292ZXIgd2hhdCB0byBkbyBuZXh0OlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8TGVhcm5Nb3JlTGlua3MgLz5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgIDwvU2FmZUFyZWFWaWV3PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICBzY3JvbGxWaWV3OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBDb2xvcnMubGlnaHRlcixcbiAgfSxcbiAgZW5naW5lOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIGJvZHk6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9ycy53aGl0ZSxcbiAgfSxcbiAgc2VjdGlvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogMzIsXG4gICAgcGFkZGluZ0hvcml6b250YWw6IDI0LFxuICB9LFxuICBzZWN0aW9uVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgY29sb3I6IENvbG9ycy5ibGFjayxcbiAgfSxcbiAgc2VjdGlvbkRlc2NyaXB0aW9uOiB7XG4gICAgbWFyZ2luVG9wOiA4LFxuICAgIGZvbnRTaXplOiAxOCxcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICBjb2xvcjogQ29sb3JzLmRhcmssXG4gIH0sXG4gIGhpZ2hsaWdodDoge1xuICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICBjb2xvcjogQ29sb3JzLmRhcmssXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgcGFkZGluZ1JpZ2h0OiAxMixcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInZlcnNpb24iOjN9