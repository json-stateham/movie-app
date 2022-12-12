export class UrlBuilder extends URL {
  constructor(url: string | URL) {
    super(url);
  }

  addPath(...path: string[]) {
    this.pathname = `${this.pathname}/${path.join('/')}`;
    return this;
  }

  addParams(params: Record<string, string>) {
    for (const [key, value] of Object.entries(params)) {
      this.searchParams.append(key, value);
    }
    return this;
  }

  clone() {
    return Reflect.construct(this.constructor, [this])
  }
}
