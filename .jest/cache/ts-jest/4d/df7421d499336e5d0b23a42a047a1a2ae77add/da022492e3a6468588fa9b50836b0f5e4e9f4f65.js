import React from 'react';
import { useSelector } from 'react-redux';
import * as albumsSelectors from 'states/albums/selectors';
import Render from 'components/Shared/Render';
import AlbumCardListComponent from 'components/Screens/Albums/Parts/AlbumCardList';
const AlbumCardList = () => {
    const ids = useSelector(albumsSelectors.makeSelectAllIds());
    return (React.createElement(Render, { when: ids.length > 0 },
        React.createElement(AlbumCardListComponent, { ids: ids })));
};
export default AlbumCardList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbnRhaW5lcnMvU2NyZWVucy9BbGJ1bXMvUGFydHMvQWxidW1DYXJkTGlzdC9pbmRleC50c3giLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxLQUFLLGVBQWUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUM5QyxPQUFPLHNCQUFzQixNQUFNLCtDQUErQyxDQUFDO0FBRW5GLE1BQU0sYUFBYSxHQUFjLEdBQUcsRUFBRTtJQUNwQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUU1RCxPQUFPLENBQ0wsb0JBQUMsTUFBTSxJQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDMUIsb0JBQUMsc0JBQXNCLElBQUMsR0FBRyxFQUFFLEdBQUcsR0FBSSxDQUM3QixDQUNWLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLGFBQWEsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMva2Vpc3VrZWtpZG8vcHJvamVjdHMvaXR1bmVzRmV0Y2hlci9zcmMvY29udGFpbmVycy9TY3JlZW5zL0FsYnVtcy9QYXJ0cy9BbGJ1bUNhcmRMaXN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhbGJ1bXNTZWxlY3RvcnMgZnJvbSAnc3RhdGVzL2FsYnVtcy9zZWxlY3RvcnMnO1xuaW1wb3J0IFJlbmRlciBmcm9tICdjb21wb25lbnRzL1NoYXJlZC9SZW5kZXInO1xuaW1wb3J0IEFsYnVtQ2FyZExpc3RDb21wb25lbnQgZnJvbSAnY29tcG9uZW50cy9TY3JlZW5zL0FsYnVtcy9QYXJ0cy9BbGJ1bUNhcmRMaXN0JztcblxuY29uc3QgQWxidW1DYXJkTGlzdDogUmVhY3QuU0ZDID0gKCkgPT4ge1xuICBjb25zdCBpZHMgPSB1c2VTZWxlY3RvcihhbGJ1bXNTZWxlY3RvcnMubWFrZVNlbGVjdEFsbElkcygpKTtcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXIgd2hlbj17aWRzLmxlbmd0aCA+IDB9PlxuICAgICAgPEFsYnVtQ2FyZExpc3RDb21wb25lbnQgaWRzPXtpZHN9IC8+XG4gICAgPC9SZW5kZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUNhcmRMaXN0O1xuIl0sInZlcnNpb24iOjN9