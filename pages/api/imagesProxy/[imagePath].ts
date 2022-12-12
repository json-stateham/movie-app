import { processExternalImage } from '@/lib/helpers/processExternalImage';
import { imageUrl } from 'api/images';
import type { ImageUrlProps } from 'api/images';
import type { NextApiRequest, NextApiResponse } from "next";

const imagesProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  const { imagePath, imageType } = req.query;

  const imageBuffer = await processExternalImage(
    imageUrl({ imagePath, imageType } as ImageUrlProps),
  );

  res.status(200).send(imageBuffer);
};

export default imagesProxy;
