import { ActionsOf } from 'types/state';
import * as albumsActions from 'states/albums/actions';
import * as applicationsActions from 'states/applications/actions';
import * as songsActions from 'states/songs/actions';

export type RootActions = (
  ActionsOf<
    typeof albumsActions &
    typeof applicationsActions &
    typeof songsActions
  >
);
