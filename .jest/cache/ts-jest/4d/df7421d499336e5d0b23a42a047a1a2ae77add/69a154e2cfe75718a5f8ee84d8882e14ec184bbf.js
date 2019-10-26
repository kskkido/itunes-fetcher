import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import Title from 'components/Shared/Title';
import Subtitle from 'components/Shared/Subtitle';
import HorizontalCard from 'components/Shared/Cards/HorizontalCard';
const HorizontalDataCard = ({ artwork = '', title = '-', subtitle = '-', url, }) => (React.createElement(HorizontalCard, { onPress: useCallback(() => url && Linking.openURL(url), [url]) },
    React.createElement(HorizontalCard.Media, { source: { uri: artwork } }),
    React.createElement(HorizontalCard.Meta, null,
        React.createElement(Title, null, title),
        React.createElement(Subtitle, null, subtitle))));
export default HorizontalDataCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2hhcmVkL0NhcmRzL0hvcml6b250YWxEYXRhQ2FyZC9pbmRleC50c3giLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEtBQUssTUFBTSx5QkFBeUIsQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRCxPQUFPLGNBQWMsTUFBTSx3Q0FBd0MsQ0FBQztBQVNwRSxNQUFNLGtCQUFrQixHQUF1QyxDQUFDLEVBQzlELE9BQU8sR0FBRyxFQUFFLEVBQ1osS0FBSyxHQUFHLEdBQUcsRUFDWCxRQUFRLEdBQUcsR0FBRyxFQUNkLEdBQUcsR0FDSixFQUFFLEVBQUUsQ0FBQyxDQUNKLG9CQUFDLGNBQWMsSUFBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUUsb0JBQUMsY0FBYyxDQUFDLEtBQUssSUFBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUc7SUFDakQsb0JBQUMsY0FBYyxDQUFDLElBQUk7UUFDbEIsb0JBQUMsS0FBSyxRQUNILEtBQUssQ0FDQTtRQUNSLG9CQUFDLFFBQVEsUUFDTixRQUFRLENBQ0EsQ0FDUyxDQUNQLENBQ2xCLENBQUM7QUFFRixlQUFlLGtCQUFrQixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZWlzdWtla2lkby9wcm9qZWN0cy9pdHVuZXNGZXRjaGVyL3NyYy9jb21wb25lbnRzL1NoYXJlZC9DYXJkcy9Ib3Jpem9udGFsRGF0YUNhcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmtpbmcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFRpdGxlIGZyb20gJ2NvbXBvbmVudHMvU2hhcmVkL1RpdGxlJztcbmltcG9ydCBTdWJ0aXRsZSBmcm9tICdjb21wb25lbnRzL1NoYXJlZC9TdWJ0aXRsZSc7XG5pbXBvcnQgSG9yaXpvbnRhbENhcmQgZnJvbSAnY29tcG9uZW50cy9TaGFyZWQvQ2FyZHMvSG9yaXpvbnRhbENhcmQnO1xuXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsRGF0YUNhcmRQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuICBhcnR3b3JrPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBIb3Jpem9udGFsRGF0YUNhcmQ6IFJlYWN0LlNGQzxIb3Jpem9udGFsRGF0YUNhcmRQcm9wcz4gPSAoe1xuICBhcnR3b3JrID0gJycsXG4gIHRpdGxlID0gJy0nLFxuICBzdWJ0aXRsZSA9ICctJyxcbiAgdXJsLFxufSkgPT4gKFxuICA8SG9yaXpvbnRhbENhcmQgb25QcmVzcz17dXNlQ2FsbGJhY2soKCkgPT4gdXJsICYmIExpbmtpbmcub3BlblVSTCh1cmwpLCBbdXJsXSl9PlxuICAgIDxIb3Jpem9udGFsQ2FyZC5NZWRpYSBzb3VyY2U9e3sgdXJpOiBhcnR3b3JrIH19Lz5cbiAgICA8SG9yaXpvbnRhbENhcmQuTWV0YT5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxTdWJ0aXRsZT5cbiAgICAgICAge3N1YnRpdGxlfVxuICAgICAgPC9TdWJ0aXRsZT5cbiAgICA8L0hvcml6b250YWxDYXJkLk1ldGE+XG4gIDwvSG9yaXpvbnRhbENhcmQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsRGF0YUNhcmQ7XG4iXSwidmVyc2lvbiI6M30=