import { FC } from 'react';
import Link from 'next/link';
import { Box, Thumb } from '@/lib/ui';
import { Text } from '@/components/text'

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
  <div className="flex flexCol">
    <Box className={wrapperClassname}>
      <Link href={link}>
        <Thumb image={image} alt={title} />
      </Link>
    </Box>
    <div className="mt-24">
      <Link href={link}>
        <Text tag="h4" className="fw-700">
          {title}
        </Text>
      </Link>
      <Text tag="p" className="mt-4 fs-14 fw-300">
        {releaseDate}
      </Text>
    </div>
  </div>
);
