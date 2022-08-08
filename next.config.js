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
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_URL],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
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
