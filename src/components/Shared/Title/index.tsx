import styles from './styles';
import React from 'react';
import Heading from 'components/Shared/Heading';

type TitleProps = {
  children: string;
};

const Title: React.SFC<TitleProps> = ({
  children,
}) => (
  <Heading
    style={styles.base}
    level={4}
    numberOfLines={1}
  >
    {children}
  </Heading>
);

export default Title;
