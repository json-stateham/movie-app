import { blob2buffer } from './blob2buffer';
const Sharp = require('sharp');

export const processExternalImage = async (
  imgSrc: string,
  imageExt = 'webp',
): Promise<Buffer> => {
  if (!imgSrc) {
    throw new Error('imgSrc is not provided', {
      cause: 'processExternalImage',
    });
  }

  const imageBlob = await (await fetch(imgSrc)).blob();
  const buffer = await blob2buffer(imageBlob);
  const imageBuffer = await Sharp(buffer).toFormat(imageExt).toBuffer();
  
  return imageBuffer;
};
