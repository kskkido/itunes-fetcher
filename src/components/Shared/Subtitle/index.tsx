import styles from './styles';
import React from 'react';
import Heading from 'components/Shared/Heading';

type SubtitleProps = {
  children: string;
};

const Subtitle: React.SFC<SubtitleProps> = ({
  children,
}) => (
  <Heading
    style={styles.base}
    level={5}
    numberOfLines={1}
  >
    {children}
  </Heading>
);

export default Subtitle;
