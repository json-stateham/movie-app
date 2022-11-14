export const IMAGE_CONFIG = {
  URL: process.env.NEXT_PUBLIC_IMAGE_URL as string,
  FALLBACK: '/images/no_image.jpg'
};

export const BACKDROP: Record<string, string> = {
  S: '300',
  M: '700',
  L: '1280',
  ORIGINAL: 'original',
}

export const THUMB: Record<string, string> = {
  XS: '92',
  S: '154',
  M: '185',
  L: '342',
  XL: '500',
  XXL: '700',
  ORIGINAL: 'original',
}
