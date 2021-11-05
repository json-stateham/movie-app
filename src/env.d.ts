interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly APP_BASE_URL: string
  readonly APP_IMAGES_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
