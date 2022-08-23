import { FC } from 'react';
import Link from 'next/link';
import { Box, Thumb, Text } from 'lib/ui';

interface IProps {
  image: string;
  info: {
    title: string;
    releaseDate: string;
    link: string;
  };
  wrapperClassname?: string;
}

export const Card: FC<IProps> = ({
  image,
  info,
  wrapperClassname = 'coolShadowAnimatedHover',
}) => (
  <Box className={wrapperClassname}>
    <Link href={info.link}>
      <a>
        <Thumb image={image} alt={info.title} />
      </a>
    </Link>
    <div className='p-12'>
    <Link href={info.link}>
      <a>
        <Text tag="h4" className='mb-12'>{info.title}</Text>
      </a>
    </Link>
    <Text tag="p" className='mb-12'>{info.releaseDate}</Text>
    </div>
  </Box>
);
