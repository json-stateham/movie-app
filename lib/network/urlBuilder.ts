export class UrlBuilder extends URL {
  constructor(url: string | URL) {
    super(url);
  }

  addPath(...path: string[]) {
    this.pathname = `${this.pathname}/${path.join('/')}`;
  }

  addParams(params: Record<string, string>) {
    Object.entries(params).forEach(([key, value]) => {
      this.searchParams.append(key, value);
    });
  }

  clone() {
    return new UrlBuilder(this);
  }
}
