;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    3063: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return k
          },
          default: function () {
            return v
          },
        })
      var i = t(5988),
        s = t(7294),
        r = t(1664),
        c = t(6662),
        a = t(6274),
        o = t(9445),
        l = t(1722),
        u = t(5186),
        d = t(5893),
        x = function (e) {
          var n = e.visible,
            t = e.onClick,
            i = e.onComplete
          return (0, d.jsxs)(o.Z, {
            size: 'huge',
            as: 'h1',
            onClick: t,
            children: [
              'Platzi',
              (0, d.jsx)(l.Z, {
                animation: 'jiggle',
                visible: n,
                duration: 900,
                onComplete: i,
                children: (0, d.jsx)(u.dd, { size: '58px' }),
              }),
              'Avo',
            ],
          })
        },
        f = function () {
          return (0, d.jsxs)(o.Z, {
            size: 'huge',
            as: 'h1',
            children: ['Platzi', (0, d.jsx)(u.nw, { size: '58px' }), 'Avo'],
          })
        },
        h = t(4309),
        j = function () {
          return (0, d.jsxs)('div', {
            className: 'jsx-3586822566 container',
            children: [
              (0, d.jsx)(h.Z, {
                columns: 2,
                children: (0, d.jsxs)(h.Z.Row, {
                  verticalAlign: 'middle',
                  children: [
                    (0, d.jsx)(h.Z.Column, {
                      width: '5',
                      children: (0, d.jsx)(u.nw, { size: '154px' }),
                    }),
                    (0, d.jsxs)(h.Z.Column, {
                      width: '11',
                      children: [
                        (0, d.jsx)(o.Z, {
                          as: 'h2',
                          children: 'Mataste el aguacate',
                        }),
                        (0, d.jsx)('p', {
                          className: 'jsx-3586822566',
                          children: 'Lo tocaste tanto que lo mataste.',
                        }),
                        (0, d.jsx)('p', {
                          className: 'jsx-3586822566',
                          children:
                            'Por otro lado, eres una persona muy curiosa y has descubierto esto. :)',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, d.jsx)(i.default, {
                id: '3586822566',
                children: ['.container.jsx-3586822566{padding:2rem;}'],
              }),
            ],
          })
        },
        m = function () {
          var e = (0, s.useState)(!0),
            n = e[0],
            t = e[1],
            r = (0, s.useState)(!1),
            c = r[0],
            o = r[1],
            l = (0, s.useState)(!1),
            u = l[0],
            h = l[1],
            m = (0, s.useState)(0),
            p = m[0],
            w = m[1],
            b = function () {
              return h(!1)
            },
            g = function () {
              return t(function (e) {
                return !e
              })
            }
          return (
            (0, s.useEffect)(function () {
              window.setTimeout(g, 350)
            }, []),
            (0, s.useEffect)(
              function () {
                4 === p && (o(!0), h(!0))
              },
              [p]
            ),
            (0, d.jsxs)('div', {
              className: 'jsx-2277576641 container',
              children: [
                c
                  ? (0, d.jsx)(f, {})
                  : (0, d.jsx)(x, {
                      visible: n,
                      onClick: g,
                      onComplete: function () {
                        return w(function (e) {
                          return e + 1
                        })
                      },
                    }),
                (0, d.jsx)(a.Z, {
                  open: u,
                  content: { children: j },
                  onCancel: b,
                  onConfirm: b,
                  cancelButton: 'Ay, lo siento',
                  confirmButton: 'OK',
                  closeOnDimmerClick: !1,
                }),
                (0, d.jsx)(i.default, {
                  id: '2277576641',
                  children: [
                    '.container.jsx-2277576641{margin:2rem 0;}',
                    '.container.jsx-2277576641 .header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                  ],
                }),
              ],
            })
          )
        },
        p = t(3626),
        w = t(5675),
        b = function (e) {
          return e.map(function (e) {
            var n = e.name,
              t = e.id,
              i = e.price,
              s = e.image
            return (0,
            d.jsx)(r.default, { href: '/product/'.concat(t), passHref: !0, children: (0, d.jsx)(p.Z, { as: 'a', header: n, image: { children: (0, d.jsx)(w.default, { src: s, width: 333, height: 333 }) }, meta: { children: (0, d.jsx)(p.Z.Meta, { style: { color: 'dimgray' }, children: i }) } }) }, t)
          })
        },
        g = function (e) {
          var n = e.products
          return (0, d.jsx)(p.Z.Group, {
            itemsPerRow: 2,
            stackable: !0,
            children: b(n),
          })
        },
        k = !0,
        v = function (e) {
          var n = e.productList
          return (0, d.jsxs)(c.Z, {
            children: [
              (0, d.jsx)(m, {}),
              (0, d.jsx)('section', {
                className: 'jsx-488565440',
                children: (0, d.jsx)(r.default, {
                  href: '/yes-or-no',
                  children: (0, d.jsx)('a', {
                    className: 'jsx-488565440',
                    children: '\xbfDeberia comer un avo hoy?',
                  }),
                }),
              }),
              (0, d.jsx)(g, { products: n }),
              (0, d.jsx)(i.default, {
                id: '488565440',
                children: [
                  'section.jsx-488565440{text-align:center;margin-bottom:2rem;}',
                ],
              }),
            ],
          })
        }
    },
    5301: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(3063)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 60, 542, 105, 662, 888, 179], function () {
      return (n = 5301), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
