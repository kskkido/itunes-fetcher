import { StyleSheet } from 'react-native';
import { size } from 'styles/theme/font';

export default StyleSheet.create({
  base: {
    marginBottom: 0,
    fontWeight: '600',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  1: size.large,
  2: size.medium,
  3: size.small,
  4: size.tiny,
  5: size.mini,
});
