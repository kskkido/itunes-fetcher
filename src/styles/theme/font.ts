import { StyleSheet } from 'react-native';
import { scale } from 'utils/viewport';

export const size = StyleSheet.create({
  mini: {
    fontSize: scale(12),
  },
  tiny: {
    fontSize: scale(15),
  },
  small: {
    fontSize: scale(17),
  },
  medium: {
    fontSize: scale(20),
  },
  large: {
    fontSize: scale(24),
  },
});
