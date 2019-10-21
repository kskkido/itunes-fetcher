import Container, { ContainerProps } from './Container';
import Media from './Media';
import Meta from './Meta';

export type HorizontalCardProps = (
  ContainerProps
);

export default Object.assign(
  Container,
  {
    Media,
    Meta,
  }
);
