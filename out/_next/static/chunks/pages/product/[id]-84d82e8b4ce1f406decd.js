;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [360],
  {
    9796: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, {
          __N_SSG: function () {
            return P
          },
          default: function () {
            return S
          },
        })
      var t = r(7294),
        c = r(6662),
        s = r(4942),
        i = r(8188),
        o = r(7401),
        a = r(5861),
        u = r(7757),
        l = r.n(u),
        d = r(416),
        j = r(1722),
        h = r(5382),
        p = r(6245),
        f = r(5893),
        x = function (e) {
          var n = ''
          return e < 1 && (n = "Can't be blank"), n
        },
        m = function (e) {
          var n = e.product,
            r = (0, t.useState)(!1),
            c = r[0],
            s = r[1],
            i = (0, t.useState)(''),
            o = i[0],
            u = i[1],
            m = (0, t.useState)(1),
            b = m[0],
            Z = m[1],
            v = (0, t.useState)(!1),
            w = v[0],
            O = v[1],
            y = (0, p.mS)().addToCart,
            g = (function () {
              var e = (0, a.Z)(
                l().mark(function e() {
                  var r
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ;(r = x(b)),
                            u(r),
                            r ||
                              (s(!0),
                              new Promise(function (e, n) {
                                window.setTimeout(e, 600)
                              })
                                .then(function () {
                                  y(n, b),
                                    s(!1),
                                    Z(b),
                                    O(!0),
                                    setTimeout(function () {
                                      O(!1)
                                    }, 1e3)
                                })
                                .catch(function (e) {
                                  u('Error: '.concat(e) || 0), s(!1)
                                }))
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(d.Z, {
                type: 'number',
                placeholder: 'Quantity',
                value: b,
                min: 1,
                step: 1,
                error: !!o,
                onChange: function (e) {
                  var n = e.target
                  return Z(parseInt(n.value, 10))
                },
                action: {
                  color: 'green',
                  content: 'Add to Cart',
                  icon: 'plus cart',
                  onClick: g,
                  loading: c,
                  disabled: c,
                },
              }),
              o &&
                (0, f.jsx)('div', {
                  style: { color: 'red', position: 'absolute' },
                  children: o,
                }),
              (0, f.jsx)(j.Z, {
                duration: { hide: 500, show: 500 },
                visible: w,
                children: (0, f.jsxs)('div', {
                  style: { color: 'green', position: 'absolute' },
                  children: [
                    (0, f.jsx)(h.Z, { name: 'check' }),
                    'Added to cart',
                  ],
                }),
              }),
            ],
          })
        },
        b = r(5987),
        Z = r(5988),
        v = r(9445),
        w = r(970),
        O = r(1300),
        y = ['description'],
        g = function (e) {
          var n = e.description,
            r = (0, b.Z)(e, y)
          return (0, f.jsxs)('section', {
            className: 'jsx-4249965129 container',
            children: [
              (0, f.jsx)(v.Z, { as: 'h3', children: 'About this avocado' }),
              (0, f.jsx)('p', { className: 'jsx-4249965129', children: n }),
              (0, f.jsx)(w.Z, {}),
              (0, f.jsxs)(O.Z, {
                celled: !0,
                children: [
                  (0, f.jsx)(O.Z.Header, {
                    children: (0, f.jsx)(O.Z.Row, {
                      children: (0, f.jsx)(O.Z.HeaderCell, {
                        colSpan: '2',
                        children: 'Attributes',
                      }),
                    }),
                  }),
                  (0, f.jsx)(O.Z.Body, {
                    children: Object.keys(r).map(function (e) {
                      return (0,
                      f.jsxs)(O.Z.Row, { children: [(0, f.jsx)(O.Z.Cell, { className: 'attr-name', children: e }), (0, f.jsx)(O.Z.Cell, { children: r[e] })] }, e)
                    }),
                  }),
                ],
              }),
              (0, f.jsx)(Z.default, {
                id: '4249965129',
                children: [
                  '.container.jsx-4249965129 .attr-name{text-transform:capitalize;}',
                ],
              }),
            ],
          })
        }
      function _(e, n) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            r.push.apply(r, t)
        }
        return r
      }
      function k(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? _(Object(r), !0).forEach(function (n) {
                ;(0, s.Z)(e, n, r[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(r, n)
                )
              })
        }
        return e
      }
      var C = function (e) {
          var n = e.product
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(i.Z.Group, {
                as: 'section',
                children: (0, f.jsxs)(i.Z, {
                  style: { alignItems: 'center' },
                  children: [
                    (0, f.jsx)(i.Z.Image, {
                      size: 'medium',
                      children: (0, f.jsx)('img', {
                        src: n.image,
                        alt: n.name,
                      }),
                    }),
                    (0, f.jsxs)(i.Z.Content, {
                      children: [
                        (0, f.jsx)(i.Z.Header, { as: 'h1', children: n.name }),
                        (0, f.jsxs)(i.Z.Description, {
                          children: [
                            (0, f.jsx)('p', { children: n.price }),
                            (0, f.jsx)(o.Z, {
                              children: 'SKU: '.concat(n.sku),
                            }),
                          ],
                        }),
                        (0, f.jsx)(i.Z.Extra, {
                          children: (0, f.jsx)(m, { product: n }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(g, k({}, n.attributes)),
            ],
          })
        },
        P = !0,
        S = function (e) {
          var n = e.product
          return (0, f.jsx)(c.Z, {
            children: null == n ? null : (0, f.jsx)(C, { product: n }),
          })
        }
    },
    6247: function (e, n, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/product/[id]',
        function () {
          return r(9796)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 60, 542, 903, 662, 888, 179], function () {
      return (n = 6247), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
