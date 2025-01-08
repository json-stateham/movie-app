import { processExternalImage } from 'shared/helpers/processExternalImage';
import { imageUrl } from 'api/images';
import { ImageUrlProps } from 'api/images/types';

import type { NextApiRequest, NextApiResponse } from 'next';

const imagesProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  const { imagePath, imageType, imageSize = 'L' } = req.query;

  const isMobile = req.headers['sec-ch-ua-mobile'] === '?1';

  const imageBuffer = await processExternalImage(
    imageUrl({
      imagePath,
      imageType,
      size: isMobile ? 'MOBILE' : imageSize,
    } as ImageUrlProps),
  );

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  res.status(200).send(imageBuffer);
};

export default imagesProxy;
