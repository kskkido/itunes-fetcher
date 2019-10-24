import styles from './styles';
import React from 'react';
import { Image } from 'react-native';

type MediaProps = (
  Pick<Image['props'], 'source'>
);

const Media: React.SFC<MediaProps> = ({
  source,
}) => (
  <Image
    style={styles.base}
    source={source}
  />
);

export default Media;
