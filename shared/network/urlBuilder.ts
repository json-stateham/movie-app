export class UrlBuilder extends URL {
  constructor(url: string | URL) {
    super(url);
  }

  addPath(...path: string[]) {
    if (this.pathname === '/') {
      this.pathname = `${path.join('/')}`;
    } else {
      const slashAtStart = this.pathname.endsWith('/') ? '' : '/'
      this.pathname = `${this.pathname}${slashAtStart}${path.join('/')}`;
    }
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
