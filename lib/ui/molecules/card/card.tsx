import { FC } from 'react';
import Link from 'next/link';
import { Box, Thumb, Text } from 'lib/ui';

interface IProps {
  image: string;
  title: string;
  releaseDate: string;
  link: string;
  wrapperClassname?: string;
}

export const Card: FC<IProps> = ({
  image,
  title,
  releaseDate,
  link,
  wrapperClassname = 'coolShadowAnimatedHover',
}) => (
  <div className='flex flexCol'>
  <Box className={wrapperClassname}>
    <Link href={link}>
      <a>
        <Thumb image={image} alt={title} />
      </a>
    </Link>    
  </Box>
  <div className="mt-24">
      <Link href={link}>
        <a>
          <Text tag="h4" className="fw-700">
            {title}
          </Text>
        </a>
      </Link>
      <Text tag="p" className="mt-4 fs-14 fw-300">
        {releaseDate}
      </Text>
    </div>
  </div>
);
