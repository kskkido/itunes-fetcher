import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import Title from 'components/Shared/Title';
import Subtitle from 'components/Shared/Subtitle';
import HorizontalCard from 'components/Shared/Cards/HorizontalCard';

export type HorizontalDataCardProps = {
  title?: string;
  subtitle?: string;
  artwork?: string;
  url?: string;
};

const HorizontalDataCard: React.SFC<HorizontalDataCardProps> = ({
  artwork = '',
  title = '-',
  subtitle = '-',
  url,
}) => (
  <HorizontalCard onPress={useCallback(() => url && Linking.openURL(url), [url])}>
    <HorizontalCard.Media source={{ uri: artwork }}/>
    <HorizontalCard.Meta>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </HorizontalCard.Meta>
  </HorizontalCard>
);

export default HorizontalDataCard;
