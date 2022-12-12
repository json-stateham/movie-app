export const buffer2base64 = (buffer: Buffer, extesion = 'webp') =>
  `data:image/${extesion};base64,${buffer.toString('base64')}`;
