;(self.__BUILD_MANIFEST = (function (s, c, a) {
  return {
    __rewrites: {
      beforeFiles: [],
      afterFiles: [
        { source: '/avocado/:path*', destination: '/product/:path*' },
      ],
      fallback: [],
    },
    '/': [
      s,
      a,
      'static/chunks/105-fba2ca65cc28d13d263f.js',
      c,
      'static/chunks/pages/index-9c73ba26c2e42c1f6a38.js',
    ],
    '/_error': ['static/chunks/pages/_error-737a04e9a0da63c9d162.js'],
    '/about': [s, c, 'static/chunks/pages/about-246dee211bccd8543ac0.js'],
    '/cart': [
      s,
      'static/chunks/868-a81d4ab472df0b27a588.js',
      c,
      'static/chunks/pages/cart-74161310fcffe488e2df.js',
    ],
    '/product/[id]': [
      s,
      a,
      'static/chunks/903-782e52e94666b0468e38.js',
      c,
      'static/chunks/pages/product/[id]-84d82e8b4ce1f406decd.js',
    ],
    '/yes-or-no': [
      s,
      c,
      'static/chunks/pages/yes-or-no-6e04ebc2d4d047417bbe.js',
    ],
    sortedPages: [
      '/',
      '/_app',
      '/_error',
      '/about',
      '/cart',
      '/product/[id]',
      '/yes-or-no',
    ],
  }
})(
  'static/chunks/60-ba23f8b4d504772fbaf0.js',
  'static/chunks/662-0bfed54d47cad382a2db.js',
  'static/chunks/542-6850dc225febf0f732ff.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
