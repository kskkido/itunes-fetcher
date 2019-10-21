import { Dimensions, Platform, PixelRatio } from 'react-native';
import * as R from 'ramda';

export const scale = R.compose(
  R.cond([
    [R.always(Platform.OS === 'ios'), size => Math.round(PixelRatio.roundToNearestPixel(size))],
    [R.T, size => Math.round(PixelRatio.roundToNearestPixel(size)) - 2],
  ]),
  R.multiply(Dimensions.get('window').width / 320)
);
