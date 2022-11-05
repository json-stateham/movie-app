/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');
const path = require('path');
/* eslint-enable */

// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self';
//   child-src example.com;
//   style-src 'self' example.com;
//   font-src 'self';  
// `;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
//   {
//     key: 'Content-Security-Policy',
//     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
//   }
]

module.exports = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_URL]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
