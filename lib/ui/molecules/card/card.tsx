import { FC } from 'react';
import { Box, Thumb } from 'lib/ui';

interface IProps {
    image: string;
    alt: string;
    wrapperClassname?: string;
}

export const Card: FC<IProps> = ({
  image,
  alt,
  wrapperClassname = 'coolShadowAnimatedHover',
}) => (
  <Box className={wrapperClassname}>
    <Thumb image={image} alt={alt} />
  </Box>
);
