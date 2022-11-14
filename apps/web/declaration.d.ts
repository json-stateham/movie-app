declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare global {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    NODE_ENV: 'development' | 'production';
    NEXT_PUBLIC_IMAGE_URL: string;
    API_KEY: string;
  }
}
