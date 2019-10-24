import React from 'react';
import Title from 'components/Shared/Title';
import Subtitle from 'components/Shared/Subtitle';
import HorizontalCard, { HorizontalCardProps } from 'components/Shared/Cards/HorizontalCard';

export type HorizontalDataCardProps = {
  title?: string;
  subtitle?: string;
  artwork?: string;
  onPress?: HorizontalCardProps['onPress'];
};

const HorizontalDataCard: React.SFC<HorizontalDataCardProps> = ({
  artwork,
  title,
  subtitle,
  onPress,
}) => (
  <HorizontalCard onPress={onPress}>
    <HorizontalCard.Media source={{ uri: artwork || '' }}/>
    <HorizontalCard.Meta>
      <Title>
        {title || '-'}
      </Title>
      <Subtitle>
        {subtitle || '-'}
      </Subtitle>
    </HorizontalCard.Meta>
  </HorizontalCard>
);

export default HorizontalDataCard;
