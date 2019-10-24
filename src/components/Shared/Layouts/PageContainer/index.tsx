import styles from './styles';
import React from 'react';
import { ScrollView } from 'react-native';

type PageContainerProps = {
  children: React.ReactNode;
};

const PageContainer: React.SFC<PageContainerProps> = ({
  children,
}) => (
  <ScrollView style={styles.base}>
    {children}
  </ScrollView>
);

export default PageContainer;
