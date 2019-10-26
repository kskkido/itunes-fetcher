import React from 'react';
import ListColumn from 'components/Shared/ListColumn';
import AlbumCard from 'containers/Screens/Albums/Parts/AlbumCard';
const AlbumCardList = ({ ids, }) => (React.createElement(ListColumn, null, ids.map(id => React.createElement(AlbumCard, { key: id, id: id }))));
export default AlbumCardList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2NyZWVucy9BbGJ1bXMvUGFydHMvQWxidW1DYXJkTGlzdC9pbmRleC50c3giLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sVUFBVSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RELE9BQU8sU0FBUyxNQUFNLDJDQUEyQyxDQUFDO0FBTWxFLE1BQU0sYUFBYSxHQUFrQyxDQUFDLEVBQ3BELEdBQUcsR0FDSixFQUFFLEVBQUUsQ0FBQyxDQUNKLG9CQUFDLFVBQVUsUUFDUixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQUMsU0FBUyxJQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBSSxDQUFDLENBQ25DLENBQ2QsQ0FBQztBQUVGLGVBQWUsYUFBYSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZWlzdWtla2lkby9wcm9qZWN0cy9pdHVuZXNGZXRjaGVyL3NyYy9jb21wb25lbnRzL1NjcmVlbnMvQWxidW1zL1BhcnRzL0FsYnVtQ2FyZExpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdENvbHVtbiBmcm9tICdjb21wb25lbnRzL1NoYXJlZC9MaXN0Q29sdW1uJztcbmltcG9ydCBBbGJ1bUNhcmQgZnJvbSAnY29udGFpbmVycy9TY3JlZW5zL0FsYnVtcy9QYXJ0cy9BbGJ1bUNhcmQnO1xuXG50eXBlIEFsYnVtQ2FyZExpc3RQcm9wcyA9IHtcbiAgaWRzOiBzdHJpbmdbXTtcbn07XG5cbmNvbnN0IEFsYnVtQ2FyZExpc3Q6IFJlYWN0LlNGQzxBbGJ1bUNhcmRMaXN0UHJvcHM+ID0gKHtcbiAgaWRzLFxufSkgPT4gKFxuICA8TGlzdENvbHVtbj5cbiAgICB7aWRzLm1hcChpZCA9PiA8QWxidW1DYXJkIGtleT17aWR9IGlkPXtpZH0gLz4pfVxuICA8L0xpc3RDb2x1bW4+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bUNhcmRMaXN0O1xuIl0sInZlcnNpb24iOjN9