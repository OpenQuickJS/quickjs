/*! For license information please see sonic.js.LICENSE.txt */
!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "//y.qq.com/sonic/client/sonicDemo/demo2/"),
    r((r.s = 192));
})([
  function (t, e, r) {
    "use strict";
    t.exports = r(183);
  },
  function (t, e, r) {
    var n = r(81),
      o = n.all;
    t.exports = n.IS_HTMLDDA
      ? function (t) {
          return "function" == typeof t || t === o;
        }
      : function (t) {
          return "function" == typeof t;
        };
  },
  function (t, e, r) {
    var n = r(37),
      o = Function.prototype,
      i = o.call,
      a = n && o.bind.bind(i, i);
    t.exports = n
      ? a
      : function (t) {
          return function () {
            return i.apply(t, arguments);
          };
        };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    var n = r(5),
      o = r(26),
      i = r(7),
      a = r(59),
      c = r(22),
      u = r(80),
      s = n.Symbol,
      l = o("wks"),
      f = u ? s.for || s : (s && s.withoutSetter) || a;
    t.exports = function (t) {
      return i(l, t) || (l[t] = c && i(s, t) ? s[t] : f("Symbol." + t)), l[t];
    };
  },
  function (t, e, r) {
    (function (e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }).call(this, r(130));
  },
  function (t, e, r) {
    var n = r(5),
      o = r(23).f,
      i = r(32),
      a = r(19),
      c = r(58),
      u = r(137),
      s = r(92);
    t.exports = function (t, e) {
      var r,
        l,
        f,
        p,
        h,
        d = t.target,
        v = t.global,
        m = t.stat;
      if ((r = v ? n : m ? n[d] || c(d, {}) : (n[d] || {}).prototype))
        for (l in e) {
          if (
            ((p = e[l]),
            (f = t.dontCallGetSet ? (h = o(r, l)) && h.value : r[l]),
            !s(v ? l : d + (m ? "." : "#") + l, t.forced) && void 0 !== f)
          ) {
            if (typeof p == typeof f) continue;
            u(p, f);
          }
          (t.sham || (f && f.sham)) && i(p, "sham", !0), a(r, l, p, t);
        }
    };
  },
  function (t, e, r) {
    var n = r(2),
      o = r(27),
      i = n({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return i(o(t), e);
      };
  },
  function (t, e, r) {
    var n = r(37),
      o = Function.prototype.call;
    t.exports = n
      ? o.bind(o)
      : function () {
          return o.apply(o, arguments);
        };
  },
  function (t, e, r) {
    var n = r(185)();
    t.exports = n;
    try {
      regeneratorRuntime = n;
    } catch (t) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = n)
        : Function("r", "regeneratorRuntime = r")(n);
    }
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, r) {
    var n = r(18),
      o = String,
      i = TypeError;
    t.exports = function (t) {
      if (n(t)) return t;
      throw i(o(t) + " is not an object");
    };
  },
  function (t, e, r) {
    var n = r(78);
    (t.exports = function (t, e, r) {
      return (
        (e = n(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    var n = r(10),
      o = r(84),
      i = r(83),
      a = r(11),
      c = r(42),
      u = TypeError,
      s = Object.defineProperty,
      l = Object.getOwnPropertyDescriptor,
      f = "enumerable",
      p = "configurable",
      h = "writable";
    e.f = n
      ? i
        ? function (t, e, r) {
            if (
              (a(t),
              (e = c(e)),
              a(r),
              "function" == typeof t &&
                "prototype" === e &&
                "value" in r &&
                h in r &&
                !r[h])
            ) {
              var n = l(t, e);
              n &&
                n[h] &&
                ((t[e] = r.value),
                (r = {
                  configurable: p in r ? r[p] : n[p],
                  enumerable: f in r ? r[f] : n[f],
                  writable: !1,
                }));
            }
            return s(t, e, r);
          }
        : s
      : function (t, e, r) {
          if ((a(t), (e = c(e)), a(r), o))
            try {
              return s(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r) throw u("Accessors not supported");
          return "value" in r && (t[e] = r.value), t;
        };
  },
  function (t, e, r) {
    var n = r(55),
      o = r(56);
    t.exports = function (t) {
      return n(o(t));
    };
  },
  function (t, e, r) {
    var n = r(5),
      o = r(1);
    t.exports = function (t, e) {
      return arguments.length < 2
        ? ((r = n[t]), o(r) ? r : void 0)
        : n[t] && n[t][e];
      var r;
    };
  },
  function (t, e) {
    function r(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    (t.exports = function (t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, n);
          function c(t) {
            r(a, o, i, c, u, "next", t);
          }
          function u(t) {
            r(a, o, i, c, u, "throw", t);
          }
          c(void 0);
        });
      };
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, r) {
    var n = r(1),
      o = r(81),
      i = o.all;
    t.exports = o.IS_HTMLDDA
      ? function (t) {
          return "object" == typeof t ? null !== t : n(t) || t === i;
        }
      : function (t) {
          return "object" == typeof t ? null !== t : n(t);
        };
  },
  function (t, e, r) {
    var n = r(1),
      o = r(13),
      i = r(90),
      a = r(58);
    t.exports = function (t, e, r, c) {
      c || (c = {});
      var u = c.enumerable,
        s = void 0 !== c.name ? c.name : e;
      if ((n(r) && i(r, s, c), c.global)) u ? (t[e] = r) : a(e, r);
      else {
        try {
          c.unsafe ? t[e] && (u = !0) : delete t[e];
        } catch (t) {}
        u
          ? (t[e] = r)
          : o.f(t, e, {
              value: r,
              enumerable: !1,
              configurable: !c.nonConfigurable,
              writable: !c.nonWritable,
            });
      }
      return t;
    };
  },
  function (t, e, r) {
    var n = r(1),
      o = r(29),
      i = TypeError;
    t.exports = function (t) {
      if (n(t)) return t;
      throw i(o(t) + " is not a function");
    };
  },
  function (t, e, r) {
    var n = r(2),
      o = n({}.toString),
      i = n("".slice);
    t.exports = function (t) {
      return i(o(t), 8, -1);
    };
  },
  function (t, e, r) {
    var n = r(60),
      o = r(3);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && n && n < 41)
        );
      });
  },
  function (t, e, r) {
    var n = r(10),
      o = r(8),
      i = r(89),
      a = r(33),
      c = r(14),
      u = r(42),
      s = r(7),
      l = r(84),
      f = Object.getOwnPropertyDescriptor;
    e.f = n
      ? f
      : function (t, e) {
          if (((t = c(t)), (e = u(e)), l))
            try {
              return f(t, e);
            } catch (t) {}
          if (s(t, e)) return a(!o(i.f, t, e), t[e]);
        };
  },
  function (t, e, r) {
    var n = r(49),
      o = String;
    t.exports = function (t) {
      if ("Symbol" === n(t))
        throw TypeError("Cannot convert a Symbol value to a string");
      return o(t);
    };
  },
  function (t, e, r) {
    var n = r(124),
      o = r(125),
      i = r(126),
      a = r(128);
    (t.exports = function (t, e) {
      return n(t) || o(t, e) || i(t, e) || a();
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    var n = r(17),
      o = r(57);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.29.0",
      mode: n ? "pure" : "global",
      copyright: "Â© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  },
  function (t, e, r) {
    var n = r(56),
      o = Object;
    t.exports = function (t) {
      return o(n(t));
    };
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = n({}.isPrototypeOf);
  },
  function (t, e) {
    var r = String;
    t.exports = function (t) {
      try {
        return r(t);
      } catch (t) {
        return "Object";
      }
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n,
      o,
      i,
      a = r(136),
      c = r(5),
      u = r(18),
      s = r(32),
      l = r(7),
      f = r(57),
      p = r(46),
      h = r(45),
      d = "Object already initialized",
      v = c.TypeError,
      m = c.WeakMap;
    if (a || f.state) {
      var y = f.state || (f.state = new m());
      (y.get = y.get),
        (y.has = y.has),
        (y.set = y.set),
        (n = function (t, e) {
          if (y.has(t)) throw v(d);
          return (e.facade = t), y.set(t, e), e;
        }),
        (o = function (t) {
          return y.get(t) || {};
        }),
        (i = function (t) {
          return y.has(t);
        });
    } else {
      var g = p("state");
      (h[g] = !0),
        (n = function (t, e) {
          if (l(t, g)) throw v(d);
          return (e.facade = t), s(t, g, e), e;
        }),
        (o = function (t) {
          return l(t, g) ? t[g] : {};
        }),
        (i = function (t) {
          return l(t, g);
        });
    }
    t.exports = {
      set: n,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : n(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!u(e) || (r = o(e)).type !== t)
            throw v("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    };
  },
  function (t, e, r) {
    var n = r(10),
      o = r(13),
      i = r(33);
    t.exports = n
      ? function (t, e, r) {
          return o.f(t, e, i(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, r) {
    var n = r(5);
    t.exports = n.Promise;
  },
  function (t, e, r) {
    var n = r(5),
      o = r(34),
      i = r(1),
      a = r(92),
      c = r(65),
      u = r(4),
      s = r(155),
      l = r(104),
      f = r(17),
      p = r(60),
      h = o && o.prototype,
      d = u("species"),
      v = !1,
      m = i(n.PromiseRejectionEvent),
      y = a("Promise", function () {
        var t = c(o),
          e = t !== String(o);
        if (!e && 66 === p) return !0;
        if (f && (!h.catch || !h.finally)) return !0;
        if (!p || p < 51 || !/native code/.test(t)) {
          var r = new o(function (t) {
              t(1);
            }),
            n = function (t) {
              t(
                function () {},
                function () {}
              );
            };
          if (
            (((r.constructor = {})[d] = n),
            !(v = r.then(function () {}) instanceof n))
          )
            return !0;
        }
        return !e && (s || l) && !m;
      });
    t.exports = { CONSTRUCTOR: y, REJECTION_EVENT: m, SUBCLASSING: v };
  },
  function (t, e, r) {
    "use strict";
    var n = r(20),
      o = TypeError,
      i = function (t) {
        var e, r;
        (this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== r) throw o("Bad Promise constructor");
          (e = t), (r = n);
        })),
          (this.resolve = n(e)),
          (this.reject = n(r));
      };
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = !n(function () {
      var t = function () {}.bind();
      return "function" != typeof t || t.hasOwnProperty("prototype");
    });
  },
  function (t, e) {
    t.exports = function (t) {
      return null == t;
    };
  },
  function (t, e) {
    t.exports =
      ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
  },
  function (t, e, r) {
    var n,
      o = r(11),
      i = r(82),
      a = r(64),
      c = r(45),
      u = r(87),
      s = r(41),
      l = r(46),
      f = "prototype",
      p = "script",
      h = l("IE_PROTO"),
      d = function () {},
      v = function (t) {
        return "<" + p + ">" + t + "</" + p + ">";
      },
      m = function (t) {
        t.write(v("")), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      y = function () {
        try {
          n = new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e, r;
        y =
          "undefined" != typeof document
            ? document.domain && n
              ? m(n)
              : ((e = s("iframe")),
                (r = "java" + p + ":"),
                (e.style.display = "none"),
                u.appendChild(e),
                (e.src = String(r)),
                (t = e.contentWindow.document).open(),
                t.write(v("document.F=Object")),
                t.close(),
                t.F)
            : m(n);
        for (var o = a.length; o--; ) delete y[f][a[o]];
        return y();
      };
    (c[h] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((d[f] = o(t)), (r = new d()), (d[f] = null), (r[h] = t))
              : (r = y()),
            void 0 === e ? r : i.f(r, e)
          );
        });
  },
  function (t, e, r) {
    var n = r(5),
      o = r(18),
      i = n.document,
      a = o(i) && o(i.createElement);
    t.exports = function (t) {
      return a ? i.createElement(t) : {};
    };
  },
  function (t, e, r) {
    var n = r(131),
      o = r(43);
    t.exports = function (t) {
      var e = n(t, "string");
      return o(e) ? e : e + "";
    };
  },
  function (t, e, r) {
    var n = r(15),
      o = r(1),
      i = r(28),
      a = r(80),
      c = Object;
    t.exports = a
      ? function (t) {
          return "symbol" == typeof t;
        }
      : function (t) {
          var e = n("Symbol");
          return o(e) && i(e.prototype, c(t));
        };
  },
  function (t, e, r) {
    var n = r(135);
    t.exports = function (t) {
      return n(t.length);
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n = r(26),
      o = r(59),
      i = n("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e, r) {
    var n = r(10),
      o = r(7),
      i = Function.prototype,
      a = n && Object.getOwnPropertyDescriptor,
      c = o(i, "name"),
      u = c && "something" === function () {}.name,
      s = c && (!n || (n && a(i, "name").configurable));
    t.exports = { EXISTS: c, PROPER: u, CONFIGURABLE: s };
  },
  function (t, e, r) {
    var n = r(13).f,
      o = r(7),
      i = r(4)("toStringTag");
    t.exports = function (t, e, r) {
      t && !r && (t = t.prototype),
        t && !o(t, i) && n(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e, r) {
    var n = r(69),
      o = r(1),
      i = r(21),
      a = r(4)("toStringTag"),
      c = Object,
      u =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        );
    t.exports = n
      ? i
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = c(t)), a))
            ? r
            : u
            ? i(e)
            : "Object" == (n = i(e)) && o(e.callee)
            ? "Arguments"
            : n;
        };
  },
  function (t, e, r) {
    (function (e) {
      var n = r(21);
      t.exports = void 0 !== e && "process" == n(e);
    }).call(this, r(144));
  },
  function (t, e, r) {
    var n = r(149),
      o = r(20),
      i = r(37),
      a = n(n.bind);
    t.exports = function (t, e) {
      return (
        o(t),
        void 0 === e
          ? t
          : i
          ? a(t, e)
          : function () {
              return t.apply(e, arguments);
            }
      );
    };
  },
  function (t, e, r) {
    var n = r(51),
      o = r(2),
      i = r(55),
      a = r(27),
      c = r(44),
      u = r(175),
      s = o([].push),
      l = function (t) {
        var e = 1 == t,
          r = 2 == t,
          o = 3 == t,
          l = 4 == t,
          f = 6 == t,
          p = 7 == t,
          h = 5 == t || f;
        return function (d, v, m, y) {
          for (
            var g,
              b,
              w = a(d),
              x = i(w),
              _ = n(v, m),
              O = c(x),
              S = 0,
              E = y || u,
              k = e ? E(d, O) : r || p ? E(d, 0) : void 0;
            O > S;
            S++
          )
            if ((h || S in x) && ((b = _((g = x[S]), S, w)), t))
              if (e) k[S] = b;
              else if (b)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return g;
                  case 6:
                    return S;
                  case 2:
                    s(k, g);
                }
              else
                switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    s(k, g);
                }
          return f ? -1 : o || l ? l : k;
        };
      };
    t.exports = {
      forEach: l(0),
      map: l(1),
      filter: l(2),
      some: l(3),
      every: l(4),
      find: l(5),
      findIndex: l(6),
      filterReject: l(7),
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = r(0),
      o = function (t, e) {
        return (
          (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            }),
          o(t, e)
        );
      };
    function i(t, e) {
      function r() {
        this.constructor = t;
      }
      o(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var a = function () {
      return (
        (a =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var o in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }),
        a.apply(this, arguments)
      );
    };
    function c(t, e) {
      for (var r in t) if (t[r] !== e[r]) return !1;
      for (var r in e) if (!(r in t)) return !1;
      return !0;
    }
    function u(t, e, r) {
      return "object" == typeof t
        ? null
        : new Error("Invalid prop " + e + " supplied to " + r);
    }
    function s(t, e) {
      return function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return "function" == typeof e.middleware
          ? e.middleware(e, t, r)
          : (function (t, e) {
              if (null != e) {
                if (e.then) return e.then(t.setState);
                t.setState(e);
              }
            })(e, t.apply(void 0, [e.getState()].concat(r)));
      };
    }
    var l = (function (t) {
      function e(e, r) {
        var n = t.call(this, e, r) || this;
        return (
          (n.update = function () {
            var t = n.getProps(n.props, n.context);
            c(t, n.state) || n.setState(t);
          }),
          (n.state = n.getProps(e, r)),
          (n.actions = n.getActions()),
          n
        );
      }
      return (
        i(e, t),
        (e.prototype.UNSAFE_componentWillMount = function () {
          this.unsubscribe = this.context.store.subscribe(this.update);
        }),
        (e.prototype.componentWillUnmount = function () {
          this.unsubscribe(this.update);
        }),
        (e.prototype.UNSAFE_componentWillReceiveProps = function (t, e) {
          var r = this.getProps(t, e);
          c(r, this.state) || this.setState(r);
        }),
        (e.prototype.getProps = function (t, e) {
          var r = t.mapToProps,
            n = (e.store && e.store.getState()) || {};
          return r ? r(n, t) : n;
        }),
        (e.prototype.getActions = function () {
          return (function (t, e, r) {
            t = "function" == typeof t ? t(e, r) : t;
            var n = {};
            for (var o in t) {
              var i = t[o];
              n[o] = s(i, e);
            }
            return n;
          })(this.props.actions, this.context.store, this.props);
        }),
        (e.prototype.render = function () {
          return this.props.children(
            a({ store: this.context.store }, this.state, this.actions)
          );
        }),
        (e.contextTypes = { store: u }),
        e
      );
    })(n.Component);
    var f =
        "createContext" in n
          ? n.createContext(void 0)
          : {
              Provider: function (t) {
                var e = t.children;
                return n.Children.only(e);
              },
            },
      p = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          i(e, t),
          (e.prototype.getChildContext = function () {
            return { store: this.props.store };
          }),
          (e.prototype.render = function () {
            var t = this.props,
              e = t.store,
              r = t.children;
            return n.createElement(f.Provider, { value: e }, r);
          }),
          (e.childContextTypes = { store: u }),
          e
        );
      })(n.Component);
    function h() {
      return n.useContext(f);
    }
    var d = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
    (e.connect = function (t, e) {
      return (
        void 0 === e && (e = {}),
        function (r) {
          return (function (o) {
            function c() {
              return (null !== o && o.apply(this, arguments)) || this;
            }
            return (
              i(c, o),
              (c.prototype.render = function () {
                var o = this.props;
                return n.createElement(
                  l,
                  a({}, o, { mapToProps: t, actions: e }),
                  function (t) {
                    return n.createElement(r, a({}, t, o));
                  }
                );
              }),
              c
            );
          })(n.Component);
        }
      );
    }),
      (e.Provider = p),
      (e.Connect = l),
      (e.useStore = h),
      (e.useSelector = function (t) {
        var e,
          r = h(),
          o = n.useReducer(function (t) {
            return t + 1;
          }, 0)[1],
          i = n.useRef(void 0),
          a = n.useRef(void 0),
          c = n.useRef(void 0);
        try {
          e = i.current !== t || c.current ? t(r.getState()) : a.current;
        } catch (t) {
          var u =
            "An error occurred while selecting the store state: " +
            t.message +
            ".";
          throw (
            (c.current &&
              (u +=
                "\nThe error may be related with this previous error:\n" +
                c.current.stack +
                "\n\nOriginal stack trace:"),
            new Error(u))
          );
        }
        return (
          d(function () {
            (i.current = t), (a.current = e), (c.current = void 0);
          }),
          d(
            function () {
              var t = function () {
                  try {
                    var t = i.current(r.getState());
                    if (t === a.current) return;
                    a.current = t;
                  } catch (t) {
                    c.current = t;
                  }
                  o({});
                },
                e = r.subscribe(t);
              return (
                t(),
                function () {
                  return e();
                }
              );
            },
            [r]
          ),
          e
        );
      }),
      (e.useAction = function (t) {
        var e = h();
        return n.useMemo(
          function () {
            return s(t, e);
          },
          [e, t]
        );
      });
  },
  function (t, e) {
    function r(e) {
      return (
        (t.exports = r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        r(e)
      );
    }
    (t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    var n = r(2),
      o = r(3),
      i = r(21),
      a = Object,
      c = n("".split);
    t.exports = o(function () {
      return !a("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == i(t) ? c(t, "") : a(t);
        }
      : a;
  },
  function (t, e, r) {
    var n = r(38),
      o = TypeError;
    t.exports = function (t) {
      if (n(t)) throw o("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, r) {
    var n = r(5),
      o = r(58),
      i = "__core-js_shared__",
      a = n[i] || o(i, {});
    t.exports = a;
  },
  function (t, e, r) {
    var n = r(5),
      o = Object.defineProperty;
    t.exports = function (t, e) {
      try {
        o(n, t, { value: e, configurable: !0, writable: !0 });
      } catch (r) {
        n[t] = e;
      }
      return e;
    };
  },
  function (t, e, r) {
    var n = r(2),
      o = 0,
      i = Math.random(),
      a = n((1).toString);
    t.exports = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
    };
  },
  function (t, e, r) {
    var n,
      o,
      i = r(5),
      a = r(39),
      c = i.process,
      u = i.Deno,
      s = (c && c.versions) || (u && u.version),
      l = s && s.v8;
    l && (o = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
      !o &&
        a &&
        (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
        (n = a.match(/Chrome\/(\d+)/)) &&
        (o = +n[1]),
      (t.exports = o);
  },
  function (t, e, r) {
    var n = r(20),
      o = r(38);
    t.exports = function (t, e) {
      var r = t[e];
      return o(r) ? void 0 : n(r);
    };
  },
  function (t, e, r) {
    var n = r(85),
      o = r(64);
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, o);
      };
  },
  function (t, e, r) {
    var n = r(134);
    t.exports = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : n(e);
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, r) {
    var n = r(2),
      o = r(1),
      i = r(57),
      a = n(Function.toString);
    o(i.inspectSource) ||
      (i.inspectSource = function (t) {
        return a(t);
      }),
      (t.exports = i.inspectSource);
  },
  function (t, e, r) {
    var n = r(85),
      o = r(64).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, o);
      };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    var n = r(69),
      o = r(19),
      i = r(142);
    n || o(Object.prototype, "toString", i, { unsafe: !0 });
  },
  function (t, e, r) {
    var n = {};
    (n[r(4)("toStringTag")] = "z"), (t.exports = "[object z]" === String(n));
  },
  function (t, e, r) {
    var n = r(90),
      o = r(13);
    t.exports = function (t, e, r) {
      return (
        r.get && n(r.get, e, { getter: !0 }),
        r.set && n(r.set, e, { setter: !0 }),
        o.f(t, e, r)
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    };
  },
  function (t, e, r) {
    var n = r(6),
      o = r(27),
      i = r(62);
    n(
      {
        target: "Object",
        stat: !0,
        forced: r(3)(function () {
          i(1);
        }),
      },
      {
        keys: function (t) {
          return i(o(t));
        },
      }
    );
  },
  function (t, e, r) {
    r(169), r(177), r(178), r(179), r(181);
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(52).filter;
    n(
      { target: "Array", proto: !0, forced: !r(114)("filter") },
      {
        filter: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(6),
      o = r(3),
      i = r(14),
      a = r(23).f,
      c = r(10);
    n(
      {
        target: "Object",
        stat: !0,
        forced:
          !c ||
          o(function () {
            a(1);
          }),
        sham: !c,
      },
      {
        getOwnPropertyDescriptor: function (t, e) {
          return a(i(t), e);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(5),
      o = r(108),
      i = r(109),
      a = r(182),
      c = r(32),
      u = function (t) {
        if (t && t.forEach !== a)
          try {
            c(t, "forEach", a);
          } catch (e) {
            t.forEach = a;
          }
      };
    for (var s in o) o[s] && u(n[s] && n[s].prototype);
    u(i);
  },
  function (t, e, r) {
    var n = r(6),
      o = r(10),
      i = r(91),
      a = r(14),
      c = r(23),
      u = r(110);
    n(
      { target: "Object", stat: !0, sham: !o },
      {
        getOwnPropertyDescriptors: function (t) {
          for (
            var e, r, n = a(t), o = c.f, s = i(n), l = {}, f = 0;
            s.length > f;

          )
            void 0 !== (r = o(n, (e = s[f++]))) && u(l, e, r);
          return l;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(54).default,
      o = r(123);
    (t.exports = function (t) {
      var e = o(t, "string");
      return "symbol" === n(e) ? e : String(e);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    "use strict";
    var n = r(14),
      o = r(129),
      i = r(30),
      a = r(31),
      c = r(13).f,
      u = r(88),
      s = r(96),
      l = r(17),
      f = r(10),
      p = "Array Iterator",
      h = a.set,
      d = a.getterFor(p);
    t.exports = u(
      Array,
      "Array",
      function (t, e) {
        h(this, { type: p, target: n(t), index: 0, kind: e });
      },
      function () {
        var t = d(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), s(void 0, !0))
          : s("keys" == r ? n : "values" == r ? e[n] : [n, e[n]], !1);
      },
      "values"
    );
    var v = (i.Arguments = i.Array);
    if ((o("keys"), o("values"), o("entries"), !l && f && "values" !== v.name))
      try {
        c(v, "name", { value: "values" });
      } catch (t) {}
  },
  function (t, e, r) {
    var n = r(22);
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e) {
    var r = "object" == typeof document && document.all,
      n = void 0 === r && void 0 !== r;
    t.exports = { all: r, IS_HTMLDDA: n };
  },
  function (t, e, r) {
    var n = r(10),
      o = r(83),
      i = r(13),
      a = r(11),
      c = r(14),
      u = r(62);
    e.f =
      n && !o
        ? Object.defineProperties
        : function (t, e) {
            a(t);
            for (var r, n = c(e), o = u(e), s = o.length, l = 0; s > l; )
              i.f(t, (r = o[l++]), n[r]);
            return t;
          };
  },
  function (t, e, r) {
    var n = r(10),
      o = r(3);
    t.exports =
      n &&
      o(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  },
  function (t, e, r) {
    var n = r(10),
      o = r(3),
      i = r(41);
    t.exports =
      !n &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var n = r(2),
      o = r(7),
      i = r(14),
      a = r(133).indexOf,
      c = r(45),
      u = n([].push);
    t.exports = function (t, e) {
      var r,
        n = i(t),
        s = 0,
        l = [];
      for (r in n) !o(c, r) && o(n, r) && u(l, r);
      for (; e.length > s; ) o(n, (r = e[s++])) && (~a(l, r) || u(l, r));
      return l;
    };
  },
  function (t, e, r) {
    var n = r(63),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var r = n(t);
      return r < 0 ? o(r + e, 0) : i(r, e);
    };
  },
  function (t, e, r) {
    var n = r(15);
    t.exports = n("document", "documentElement");
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(8),
      i = r(17),
      a = r(47),
      c = r(1),
      u = r(138),
      s = r(94),
      l = r(95),
      f = r(48),
      p = r(32),
      h = r(19),
      d = r(4),
      v = r(30),
      m = r(93),
      y = a.PROPER,
      g = a.CONFIGURABLE,
      b = m.IteratorPrototype,
      w = m.BUGGY_SAFARI_ITERATORS,
      x = d("iterator"),
      _ = "keys",
      O = "values",
      S = "entries",
      E = function () {
        return this;
      };
    t.exports = function (t, e, r, a, d, m, k) {
      u(r, e, a);
      var j,
        P,
        L,
        C = function (t) {
          if (t === d && F) return F;
          if (!w && t in I) return I[t];
          switch (t) {
            case _:
            case O:
            case S:
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        N = e + " Iterator",
        T = !1,
        I = t.prototype,
        A = I[x] || I["@@iterator"] || (d && I[d]),
        F = (!w && A) || C(d),
        R = ("Array" == e && I.entries) || A;
      if (
        (R &&
          (j = s(R.call(new t()))) !== Object.prototype &&
          j.next &&
          (i || s(j) === b || (l ? l(j, b) : c(j[x]) || h(j, x, E)),
          f(j, N, !0, !0),
          i && (v[N] = E)),
        y &&
          d == O &&
          A &&
          A.name !== O &&
          (!i && g
            ? p(I, "name", O)
            : ((T = !0),
              (F = function () {
                return o(A, this);
              }))),
        d)
      )
        if (((P = { values: C(O), keys: m ? F : C(_), entries: C(S) }), k))
          for (L in P) (w || T || !(L in I)) && h(I, L, P[L]);
        else n({ target: e, proto: !0, forced: w || T }, P);
      return (i && !k) || I[x] === F || h(I, x, F, { name: d }), (v[e] = F), P;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !n.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  function (t, e, r) {
    var n = r(2),
      o = r(3),
      i = r(1),
      a = r(7),
      c = r(10),
      u = r(47).CONFIGURABLE,
      s = r(65),
      l = r(31),
      f = l.enforce,
      p = l.get,
      h = String,
      d = Object.defineProperty,
      v = n("".slice),
      m = n("".replace),
      y = n([].join),
      g =
        c &&
        !o(function () {
          return 8 !== d(function () {}, "length", { value: 8 }).length;
        }),
      b = String(String).split("String"),
      w = (t.exports = function (t, e, r) {
        "Symbol(" === v(h(e), 0, 7) &&
          (e = "[" + m(h(e), /^Symbol\(([^)]*)\)/, "$1") + "]"),
          r && r.getter && (e = "get " + e),
          r && r.setter && (e = "set " + e),
          (!a(t, "name") || (u && t.name !== e)) &&
            (c ? d(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
          g &&
            r &&
            a(r, "arity") &&
            t.length !== r.arity &&
            d(t, "length", { value: r.arity });
        try {
          r && a(r, "constructor") && r.constructor
            ? c && d(t, "prototype", { writable: !1 })
            : t.prototype && (t.prototype = void 0);
        } catch (t) {}
        var n = f(t);
        return (
          a(n, "source") || (n.source = y(b, "string" == typeof e ? e : "")), t
        );
      });
    Function.prototype.toString = w(function () {
      return (i(this) && p(this).source) || s(this);
    }, "toString");
  },
  function (t, e, r) {
    var n = r(15),
      o = r(2),
      i = r(66),
      a = r(67),
      c = r(11),
      u = o([].concat);
    t.exports =
      n("Reflect", "ownKeys") ||
      function (t) {
        var e = i.f(c(t)),
          r = a.f;
        return r ? u(e, r(t)) : e;
      };
  },
  function (t, e, r) {
    var n = r(3),
      o = r(1),
      i = /#|\.prototype\./,
      a = function (t, e) {
        var r = u[c(t)];
        return r == l || (r != s && (o(e) ? n(e) : !!e));
      },
      c = (a.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase();
      }),
      u = (a.data = {}),
      s = (a.NATIVE = "N"),
      l = (a.POLYFILL = "P");
    t.exports = a;
  },
  function (t, e, r) {
    "use strict";
    var n,
      o,
      i,
      a = r(3),
      c = r(1),
      u = r(18),
      s = r(40),
      l = r(94),
      f = r(19),
      p = r(4),
      h = r(17),
      d = p("iterator"),
      v = !1;
    [].keys &&
      ("next" in (i = [].keys())
        ? (o = l(l(i))) !== Object.prototype && (n = o)
        : (v = !0)),
      !u(n) ||
      a(function () {
        var t = {};
        return n[d].call(t) !== t;
      })
        ? (n = {})
        : h && (n = s(n)),
      c(n[d]) ||
        f(n, d, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: v });
  },
  function (t, e, r) {
    var n = r(7),
      o = r(1),
      i = r(27),
      a = r(46),
      c = r(139),
      u = a("IE_PROTO"),
      s = Object,
      l = s.prototype;
    t.exports = c
      ? s.getPrototypeOf
      : function (t) {
          var e = i(t);
          if (n(e, u)) return e[u];
          var r = e.constructor;
          return o(r) && e instanceof r
            ? r.prototype
            : e instanceof s
            ? l
            : null;
        };
  },
  function (t, e, r) {
    var n = r(140),
      o = r(11),
      i = r(141);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = n(Object.prototype, "__proto__", "set"))(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, n) {
              return o(r), i(n), e ? t(r, n) : (r.__proto__ = n), r;
            };
          })()
        : void 0);
  },
  function (t, e) {
    t.exports = function (t, e) {
      return { value: t, done: e };
    };
  },
  function (t, e, r) {
    r(143), r(156), r(161), r(162), r(163), r(164);
  },
  function (t, e, r) {
    var n = r(2),
      o = r(3),
      i = r(1),
      a = r(49),
      c = r(15),
      u = r(65),
      s = function () {},
      l = [],
      f = c("Reflect", "construct"),
      p = /^\s*(?:class|function)\b/,
      h = n(p.exec),
      d = !p.exec(s),
      v = function (t) {
        if (!i(t)) return !1;
        try {
          return f(s, l, t), !0;
        } catch (t) {
          return !1;
        }
      },
      m = function (t) {
        if (!i(t)) return !1;
        switch (a(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return d || !!h(p, u(t));
        } catch (t) {
          return !0;
        }
      };
    (m.sham = !0),
      (t.exports =
        !f ||
        o(function () {
          var t;
          return (
            v(v.call) ||
            !v(Object) ||
            !v(function () {
              t = !0;
            }) ||
            t
          );
        })
          ? m
          : v);
  },
  function (t, e, r) {
    var n,
      o,
      i,
      a,
      c = r(5),
      u = r(100),
      s = r(51),
      l = r(1),
      f = r(7),
      p = r(3),
      h = r(87),
      d = r(101),
      v = r(41),
      m = r(150),
      y = r(102),
      g = r(50),
      b = c.setImmediate,
      w = c.clearImmediate,
      x = c.process,
      _ = c.Dispatch,
      O = c.Function,
      S = c.MessageChannel,
      E = c.String,
      k = 0,
      j = {},
      P = "onreadystatechange";
    p(function () {
      n = c.location;
    });
    var L = function (t) {
        if (f(j, t)) {
          var e = j[t];
          delete j[t], e();
        }
      },
      C = function (t) {
        return function () {
          L(t);
        };
      },
      N = function (t) {
        L(t.data);
      },
      T = function (t) {
        c.postMessage(E(t), n.protocol + "//" + n.host);
      };
    (b && w) ||
      ((b = function (t) {
        m(arguments.length, 1);
        var e = l(t) ? t : O(t),
          r = d(arguments, 1);
        return (
          (j[++k] = function () {
            u(e, void 0, r);
          }),
          o(k),
          k
        );
      }),
      (w = function (t) {
        delete j[t];
      }),
      g
        ? (o = function (t) {
            x.nextTick(C(t));
          })
        : _ && _.now
        ? (o = function (t) {
            _.now(C(t));
          })
        : S && !y
        ? ((a = (i = new S()).port2),
          (i.port1.onmessage = N),
          (o = s(a.postMessage, a)))
        : c.addEventListener &&
          l(c.postMessage) &&
          !c.importScripts &&
          n &&
          "file:" !== n.protocol &&
          !p(T)
        ? ((o = T), c.addEventListener("message", N, !1))
        : (o =
            P in v("script")
              ? function (t) {
                  h.appendChild(v("script"))[P] = function () {
                    h.removeChild(this), L(t);
                  };
                }
              : function (t) {
                  setTimeout(C(t), 0);
                })),
      (t.exports = { set: b, clear: w });
  },
  function (t, e, r) {
    var n = r(37),
      o = Function.prototype,
      i = o.apply,
      a = o.call;
    t.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (n
        ? a.bind(i)
        : function () {
            return a.apply(i, arguments);
          });
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = n([].slice);
  },
  function (t, e, r) {
    var n = r(39);
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
  },
  function (t, e) {
    var r = function () {
      (this.head = null), (this.tail = null);
    };
    (r.prototype = {
      add: function (t) {
        var e = { item: t, next: null },
          r = this.tail;
        r ? (r.next = e) : (this.head = e), (this.tail = e);
      },
      get: function () {
        var t = this.head;
        if (t)
          return null === (this.head = t.next) && (this.tail = null), t.item;
      },
    }),
      (t.exports = r);
  },
  function (t, e) {
    t.exports =
      "object" == typeof Deno && Deno && "object" == typeof Deno.version;
  },
  function (t, e, r) {
    var n = r(51),
      o = r(8),
      i = r(11),
      a = r(29),
      c = r(157),
      u = r(44),
      s = r(28),
      l = r(158),
      f = r(106),
      p = r(159),
      h = TypeError,
      d = function (t, e) {
        (this.stopped = t), (this.result = e);
      },
      v = d.prototype;
    t.exports = function (t, e, r) {
      var m,
        y,
        g,
        b,
        w,
        x,
        _,
        O = r && r.that,
        S = !(!r || !r.AS_ENTRIES),
        E = !(!r || !r.IS_RECORD),
        k = !(!r || !r.IS_ITERATOR),
        j = !(!r || !r.INTERRUPTED),
        P = n(e, O),
        L = function (t) {
          return m && p(m, "normal", t), new d(!0, t);
        },
        C = function (t) {
          return S
            ? (i(t), j ? P(t[0], t[1], L) : P(t[0], t[1]))
            : j
            ? P(t, L)
            : P(t);
        };
      if (E) m = t.iterator;
      else if (k) m = t;
      else {
        if (!(y = f(t))) throw h(a(t) + " is not iterable");
        if (c(y)) {
          for (g = 0, b = u(t); b > g; g++)
            if ((w = C(t[g])) && s(v, w)) return w;
          return new d(!1);
        }
        m = l(t, y);
      }
      for (x = E ? t.next : m.next; !(_ = o(x, m)).done; ) {
        try {
          w = C(_.value);
        } catch (t) {
          p(m, "throw", t);
        }
        if ("object" == typeof w && w && s(v, w)) return w;
      }
      return new d(!1);
    };
  },
  function (t, e, r) {
    var n = r(49),
      o = r(61),
      i = r(38),
      a = r(30),
      c = r(4)("iterator");
    t.exports = function (t) {
      if (!i(t)) return o(t, c) || o(t, "@@iterator") || a[n(t)];
    };
  },
  function (t, e, r) {
    var n = r(34),
      o = r(160),
      i = r(35).CONSTRUCTOR;
    t.exports =
      i ||
      !o(function (t) {
        n.all(t).then(void 0, function () {});
      });
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, r) {
    var n = r(41)("span").classList,
      o = n && n.constructor && n.constructor.prototype;
    t.exports = o === Object.prototype ? void 0 : o;
  },
  function (t, e, r) {
    "use strict";
    var n = r(42),
      o = r(13),
      i = r(33);
    t.exports = function (t, e, r) {
      var a = n(e);
      a in t ? o.f(t, a, i(0, r)) : (t[a] = r);
    };
  },
  function (t, e, r) {
    var n = r(4);
    e.f = n;
  },
  function (t, e, r) {
    var n = r(21);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == n(t);
      };
  },
  function (t, e, r) {
    var n = r(22);
    t.exports = n && !!Symbol.for && !!Symbol.keyFor;
  },
  function (t, e, r) {
    var n = r(3),
      o = r(4),
      i = r(60),
      a = o("species");
    t.exports = function (t) {
      return (
        i >= 51 ||
        !n(function () {
          var e = [];
          return (
            ((e.constructor = {})[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(3);
    t.exports = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        n(function () {
          r.call(
            null,
            e ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var n = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    t.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, r = 0; r < 10; r++)
          e["_" + String.fromCharCode(r)] = r;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (
            var r,
              a,
              c = (function (t) {
                if (null == t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              })(t),
              u = 1;
            u < arguments.length;
            u++
          ) {
            for (var s in (r = Object(arguments[u])))
              o.call(r, s) && (c[s] = r[s]);
            if (n) {
              a = n(r);
              for (var l = 0; l < a.length; l++)
                i.call(r, a[l]) && (c[a[l]] = r[a[l]]);
            }
          }
          return c;
        };
  },
  function (t, e, r) {
    "use strict";
    t.exports = r(184);
  },
  function (t, e, r) {
    "use strict";
    var n = function () {
      return (
        (n =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var o in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }),
        n.apply(this, arguments)
      );
    };
    t.exports = function (t, e) {
      void 0 === t && (t = {}), void 0 === e && (e = null);
      var r = t || {},
        o = [];
      function i() {
        o.forEach(function (t) {
          return t(r);
        });
      }
      return {
        middleware: e,
        setState: function (t) {
          (r = n({}, r, "function" == typeof t ? t(r) : t)), i();
        },
        subscribe: function (t) {
          return (
            o.push(t),
            function () {
              o.splice(o.indexOf(t), 1);
            }
          );
        },
        getState: function () {
          return r;
        },
        reset: function () {
          (r = t), i();
        },
      };
    };
  },
  function (t, e) {
    t.exports = (t, e) =>
      `<!doctype html><html lang="zh-cn"><head><meta charset="utf-8"><title>SonicDemo - å•æ›²å”®å–</title><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"><meta name="format-detection" content="telephone=no"><script>window.init_timestamp = Date.now()<\/script><link rel="stylesheet" href="https://y.qq.com/mediastyle/mobile/project_v9/buy_song_4fcf1a89.css?max_age=604800"><link rel="stylesheet" href="https://y.qq.com/mediastyle/mobile/project_v9/skin_2.css?max_age=604800"><script>!function () { "use strict"; function n(t) { return "function" == typeof t } var o, a, e, i = document, c = setTimeout, t = window, r = window, u = r.innerHeight, f = r.localStorage, s = r.MutationObserver, d = r.performance, m = r.Promise, v = (d && d.timing || {}).navigationStart, g = location.pathname, l = JSON.parse, h = JSON.stringify, p = t.TTI_LIMIT, I = !!(v && s && m), E = p || 1e4, y = 50, S = "spd-" + g; function T(t) { if (t) try { f.setItem(S, h(t)) } catch (t) { } } function w() { try { return f.removeItem(S) } catch (t) { } } function L(t) { return (0 < t ? t : Date.now()) - v } function N(t) { var n = t.textContent; return n && n.trim() } function M(t) { var n = t && t.tagName; return n && !/^(?:HEAD|META|LINK|STYLE|SCRIPT)$/.test(n) } i.addEventListener("DOMContentLoaded", function () { o = !0, a && a() }); var b, C, k, D, O = [], P = [], x = {}, A = {}, G = [], H = 1, J = !1; function R(t) { var n, e, r = 0; return t !== i.body && (n = t.getBoundingClientRect()).top < u && 0 < n.width && 0 < n.height && ("IMG" !== t.tagName ? !N(t) && "none" === getComputedStyle(t).backgroundImage || (r = 1, (e = t.childNodes) && e[0] && (r += Y(e))) : t.src && (r = 1)), r } function _() { var t, n, e, r, i; function o() { r = L(), (i = r - e) - H < 10 ? H < 16 ? H *= 2 : H < 25 ? H += 1 : H = 25 : 50 < i && (H = Math.max(1, H / 2)), 50 < r - e && (n = r), r - n < 1e3 && r < E ? a() : J || (A.tti = n, T(A)) } function a() { J || (e = L(), t = t || (n = e), D = c(o, H)) } clearTimeout(D), a() } function B(t) { if (0 < t) { var n = L(), e = { t: n, s: t, m: 0, p: b }; b = e, A.fcp = A.fcp || n; for (var r = e; e = e.p;)n - e.t > y ? delete e.p : (t += e.s, e.s > r.s && (r = e)); (C ? C.m : 0) <= t && (r.m = t, C !== r && (C = r, A.fmp = r.t, i = _, o ? i() : a = i)) } var i } function K() { B(R(this)), this.removeEventListener("load", K) } function Y(t) { for (var n, e = 0, r = 0, i = t.length; r < i; r++) { var o = t[r]; "IMG" === o.tagName ? o.addEventListener("load", K) : M(o) ? e += R(o) : (n = o) && 1 === n.nodeType && N(n) && M(n.parentElement) && (e += 1) } return e } function $(t, n) { v && 0 < t && 0 <= n && n < 3e4 && (n |= 0, !I || 22 != t && 23 != t ? P[t] = n : (A[22 == t ? "fmp" : "tti"] = n, T(A), J = !0, k && k.disconnect())) } function j() { var t = e.report; n(t) && t() } e = { version: 4, enabled: I, flag: O, timing: P, _timing: P, start: v, now: L, last: function () { try { var t = f.getItem(S); return t = t && l(t) } catch (t) { } }(), result: A, ready: function (t) { n(t) && (G ? G.push(t) : t(A)) }, init: function (t) { for (var n = 0, e = t && t.flag || []; n < e.length; n++)O[n] = e[n] }, mark: function (t, n) { $(t, L(n)), j() }, markStart: function (t, n) { x[t] = L(n) }, markEnd: function (t, n) { 0 <= x[t] && ($(t, L(n) - x[t]), j()) } }, I && (w(), (k = new s(function (t) { var n = 0; t.forEach(function (t) { n += Y(t.addedNodes) }), B(n) })).observe(i, { childList: !0, subtree: !0 }), c(function () { G && (w(), k.disconnect(), A.tti || J || (A.tti = L()), G.forEach(function (t) { return t(A) }), J = !0, G = null) }, E)), t.SPD = e }();<\/script><style>.mod_loading {\n                  position: relative;\n                  display: -webkit-box;\n                  -webkit-box-pack: center;\n                  -webkit-box-align: center;\n                  height: 55px\n                }\n\n                .loading__icon {\n                  display: block;\n                  width: 16px;\n                  height: 16px;\n                  background: currentColor;\n                  -webkit-mask-image: url(//y.gtimg.cn/mediastyle/mod/mobile/img/system_loading.svg?max_age=2592000)\n                }\n\n                .loading__text {\n                  display: block;\n                  margin: 5px;\n                  font-size: 14px\n                }\n\n                .mod_loading_fixed {\n                  position: fixed;\n                  left: 0;\n                  top: 50%;\n                  width: 100%;\n                  margin-top: -26px;\n                  z-index: 100\n                }\n\n                .mod_loading_full {\n                  position: fixed;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  z-index: 100;\n                  background-color: rgba(0, 0, 0, .5)\n                }\n\n                .mod_loading_full .loading__text {\n                  color: rgba(255, 255, 255, .6)\n                }</style><script>var ua = navigator.userAgent,\n                  ipad = ua.match(new RegExp("(iPad).*OS\\s([\\d_]+)",'i'));\n                if (ipad) {\n                  var ipadCss = 'https://y.qq.com/mediastyle//mobile/project_v9/ipad_adapter.css?max_age=2592000';\n                  document.write(\n                    '<link id="js_ipad_adapter" rel="stylesheet" href="' +\n                    ipadCss +\n                    '" data-retry="' +\n                    ipadCss +\n                    '&retry=1' +\n                    '" onerror="this.href=this.dataset.retry;this.onerror=null;">',\n                  );\n                }\n                ; (function () {\n                  var ua = navigator.userAgent,\n                    skin = ua.match(new RegExp("skinid\\[(\\d+)\\]",'i')),\n                    color = ua.match(new RegExp("Mcolor\\/(\\w+)",'i')),\n                    cssfile = ua.match(new RegExp("skin_css\\/([\\w.]+)",'i')),\n                    style = [];\n                  skin = skin && skin[1] > 0 ? skin[1] : (/black/i.test(ua) ? 1 : 2);\n                  color = color && color[1];\n                  cssfile = cssfile && cssfile[1];\n                  window.personalSkin = skin;\n\n                  var fixColor = function (color) {\n                    if (/^[0-9a-f]{1,8}$/i.test(color)) {\n                      // è¡¥é½é«˜ä½ç¼ºå¤±çš„0\n                      for (var index = 0, length = 8 - color.length; index < length; index++) {\n                        color = '0' + color;\n                      }\n                      return color.replace(/(?:[0-9a-f]{2})/ig, function (s, i) { return s = parseInt(s, 16), i == 0 ? 'rgba(' + s : ',' + (i < 6 ? s : s / 255 + ')') });\n                    }\n                    return '';\n                  };\n\n                  color = fixColor(color);\n                  if (!!color) {\n                    window.personalColor = color;\n                    style.push('.c_txt3{color:' + color + '}');\n                  }\n\n                  if (skin == 4) {\n                    var bcolor = ua.match(new RegExp("Bcolor\\/(\\w+)",'i'));\n                    bcolor = bcolor && bcolor[1];\n                    window.personalBcolor = bcolor;\n                    bcolor = fixColor(bcolor);\n                    if (!!bcolor) {\n                      style.push('.c_bg3{background-color:' + bcolor + '}');\n                    }\n                  }\n                  style = '<style id="js_theme_style">' + style.join('') + '</style>';\n                  var link = 'https://y.gtimg.cn/mediastyle/musiccm/skin/' + (cssfile ? cssfile : 'skin_' + skin) + '.css?max_age=2592000';\n                  document.write('<link id="js_theme_link" rel="stylesheet" href="' + link + '" data-retry="' + link + '&retry=1' + '" onerror="this.href=this.dataset.retry;this.onerror=null;">' + style);\n                  window.pageFollowSkin = true;\n                })();<\/script><script>(function (e, d, a) { var b = "orientationchange" in e ? "orientationchange" : "resize", f = d.documentElement; f.style = "width:100vw"; if (f.style.width.match("vw")) { return true } function c() { switch (a) { case "height": var h = Math.max(f.clientHeight, e.innerHeight), g = 100 * (h / 667) || 100; break; default: var h = Math.max(f.clientWidth, e.innerWidth), g = 100 * (h / 375) || 100 }if (g < 60) { g = 60 } if (g > 120) { g = 120 } f.style.fontSize = g + "px" } e.addEventListener(b, c, false); c() })(window, document, "width");<\/script></head><body class="page_downright skin_2"><div class="wrap" id="js_app">${t}</div><script src="https://y.qq.com/lib/commercial/h5/polyfill-new.min.js?max_age=2592000"><\/script><script src="https://y.qq.com/lib/commercial/h5/react-16.8.6.min.js?max_age=2592000"><\/script><script src="https://y.qq.com/lib/commercial/h5/react-dom-16.8.6.min.js?max_age=2592000&v=20211223"><\/script><script src="https://y.qq.com/lib/commercial/h5/music-react-2.4.0.min.js?max_age=604800&v=20211223"><\/script><script src="https://y.qq.com/sonic/lib/clientSdk.js"><\/script><script src="https://y.gtimg.cn/music/h5/lib/js/module/vconsole.min.js?max_age=2592000"><\/script><script>window.__IS_SONIC_ENV__ = true<\/script><script src="//y.qq.com/sonic/client/sonicDemo/demo2/js/main.1993d4a4bcea597c49aa.js"><\/script></body></html>`;
  },
  function (t, e) {
    t.exports = (t, e) =>
      '<!doctype html><html lang="zh-cn"><head><meta charset="utf-8"><title>SonicDemo - å•æ›²å”®å–</title><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"><meta name="format-detection" content="telephone=no"><script>window.init_timestamp = Date.now()</script><link rel="stylesheet" href="https://y.qq.com/mediastyle/mobile/project_v9/buy_song_4fcf1a89.css?max_age=604800"><link rel="stylesheet" href="https://y.qq.com/mediastyle/mobile/project_v9/skin_2.css?max_age=604800"><script>!function () { "use strict"; function n(t) { return "function" == typeof t } var o, a, e, i = document, c = setTimeout, t = window, r = window, u = r.innerHeight, f = r.localStorage, s = r.MutationObserver, d = r.performance, m = r.Promise, v = (d && d.timing || {}).navigationStart, g = location.pathname, l = JSON.parse, h = JSON.stringify, p = t.TTI_LIMIT, I = !!(v && s && m), E = p || 1e4, y = 50, S = "spd-" + g; function T(t) { if (t) try { f.setItem(S, h(t)) } catch (t) { } } function w() { try { return f.removeItem(S) } catch (t) { } } function L(t) { return (0 < t ? t : Date.now()) - v } function N(t) { var n = t.textContent; return n && n.trim() } function M(t) { var n = t && t.tagName; return n && !/^(?:HEAD|META|LINK|STYLE|SCRIPT)$/.test(n) } i.addEventListener("DOMContentLoaded", function () { o = !0, a && a() }); var b, C, k, D, O = [], P = [], x = {}, A = {}, G = [], H = 1, J = !1; function R(t) { var n, e, r = 0; return t !== i.body && (n = t.getBoundingClientRect()).top < u && 0 < n.width && 0 < n.height && ("IMG" !== t.tagName ? !N(t) && "none" === getComputedStyle(t).backgroundImage || (r = 1, (e = t.childNodes) && e[0] && (r += Y(e))) : t.src && (r = 1)), r } function _() { var t, n, e, r, i; function o() { r = L(), (i = r - e) - H < 10 ? H < 16 ? H *= 2 : H < 25 ? H += 1 : H = 25 : 50 < i && (H = Math.max(1, H / 2)), 50 < r - e && (n = r), r - n < 1e3 && r < E ? a() : J || (A.tti = n, T(A)) } function a() { J || (e = L(), t = t || (n = e), D = c(o, H)) } clearTimeout(D), a() } function B(t) { if (0 < t) { var n = L(), e = { t: n, s: t, m: 0, p: b }; b = e, A.fcp = A.fcp || n; for (var r = e; e = e.p;)n - e.t > y ? delete e.p : (t += e.s, e.s > r.s && (r = e)); (C ? C.m : 0) <= t && (r.m = t, C !== r && (C = r, A.fmp = r.t, i = _, o ? i() : a = i)) } var i } function K() { B(R(this)), this.removeEventListener("load", K) } function Y(t) { for (var n, e = 0, r = 0, i = t.length; r < i; r++) { var o = t[r]; "IMG" === o.tagName ? o.addEventListener("load", K) : M(o) ? e += R(o) : (n = o) && 1 === n.nodeType && N(n) && M(n.parentElement) && (e += 1) } return e } function $(t, n) { v && 0 < t && 0 <= n && n < 3e4 && (n |= 0, !I || 22 != t && 23 != t ? P[t] = n : (A[22 == t ? "fmp" : "tti"] = n, T(A), J = !0, k && k.disconnect())) } function j() { var t = e.report; n(t) && t() } e = { version: 4, enabled: I, flag: O, timing: P, _timing: P, start: v, now: L, last: function () { try { var t = f.getItem(S); return t = t && l(t) } catch (t) { } }(), result: A, ready: function (t) { n(t) && (G ? G.push(t) : t(A)) }, init: function (t) { for (var n = 0, e = t && t.flag || []; n < e.length; n++)O[n] = e[n] }, mark: function (t, n) { $(t, L(n)), j() }, markStart: function (t, n) { x[t] = L(n) }, markEnd: function (t, n) { 0 <= x[t] && ($(t, L(n) - x[t]), j()) } }, I && (w(), (k = new s(function (t) { var n = 0; t.forEach(function (t) { n += Y(t.addedNodes) }), B(n) })).observe(i, { childList: !0, subtree: !0 }), c(function () { G && (w(), k.disconnect(), A.tti || J || (A.tti = L()), G.forEach(function (t) { return t(A) }), J = !0, G = null) }, E)), t.SPD = e }();</script><style>.mod_loading {\n                  position: relative;\n                  display: -webkit-box;\n                  -webkit-box-pack: center;\n                  -webkit-box-align: center;\n                  height: 55px\n                }\n\n                .loading__icon {\n                  display: block;\n                  width: 16px;\n                  height: 16px;\n                  background: currentColor;\n                  -webkit-mask-image: url(//y.gtimg.cn/mediastyle/mod/mobile/img/system_loading.svg?max_age=2592000)\n                }\n\n                .loading__text {\n                  display: block;\n                  margin: 5px;\n                  font-size: 14px\n                }\n\n                .mod_loading_fixed {\n                  position: fixed;\n                  left: 0;\n                  top: 50%;\n                  width: 100%;\n                  margin-top: -26px;\n                  z-index: 100\n                }\n\n                .mod_loading_full {\n                  position: fixed;\n                  left: 0;\n                  top: 0;\n                  width: 100%;\n                  height: 100%;\n                  z-index: 100;\n                  background-color: rgba(0, 0, 0, .5)\n                }\n\n                .mod_loading_full .loading__text {\n                  color: rgba(255, 255, 255, .6)\n                }</style><script>var ua = navigator.userAgent,\n                  ipad = ua.match(new RegExp("(iPad).*OS\\s([\\d_]+)",\'i\'));\n                if (ipad) {\n                  var ipadCss = \'https://y.qq.com/mediastyle//mobile/project_v9/ipad_adapter.css?max_age=2592000\';\n                  document.write(\n                    \'<link id="js_ipad_adapter" rel="stylesheet" href="\' +\n                    ipadCss +\n                    \'" data-retry="\' +\n                    ipadCss +\n                    \'&retry=1\' +\n                    \'" onerror="this.href=this.dataset.retry;this.onerror=null;">\',\n                  );\n                }\n                ; (function () {\n                  var ua = navigator.userAgent,\n                    skin = ua.match(new RegExp("skinid\\[(\\d+)\\]",\'i\')),\n                    color = ua.match(new RegExp("Mcolor\\/(\\w+)",\'i\')),\n                    cssfile = ua.match(new RegExp("skin_css\\/([\\w.]+)",\'i\')),\n                    style = [];\n                  skin = skin && skin[1] > 0 ? skin[1] : (/black/i.test(ua) ? 1 : 2);\n                  color = color && color[1];\n                  cssfile = cssfile && cssfile[1];\n                  window.personalSkin = skin;\n\n                  var fixColor = function (color) {\n                    if (/^[0-9a-f]{1,8}$/i.test(color)) {\n                      // è¡¥é½é«˜ä½ç¼ºå¤±çš„0\n                      for (var index = 0, length = 8 - color.length; index < length; index++) {\n                        color = \'0\' + color;\n                      }\n                      return color.replace(/(?:[0-9a-f]{2})/ig, function (s, i) { return s = parseInt(s, 16), i == 0 ? \'rgba(\' + s : \',\' + (i < 6 ? s : s / 255 + \')\') });\n                    }\n                    return \'\';\n                  };\n\n                  color = fixColor(color);\n                  if (!!color) {\n                    window.personalColor = color;\n                    style.push(\'.c_txt3{color:\' + color + \'}\');\n                  }\n\n                  if (skin == 4) {\n                    var bcolor = ua.match(new RegExp("Bcolor\\/(\\w+)",\'i\'));\n                    bcolor = bcolor && bcolor[1];\n                    window.personalBcolor = bcolor;\n                    bcolor = fixColor(bcolor);\n                    if (!!bcolor) {\n                      style.push(\'.c_bg3{background-color:\' + bcolor + \'}\');\n                    }\n                  }\n                  style = \'<style id="js_theme_style">\' + style.join(\'\') + \'</style>\';\n                  var link = \'https://y.gtimg.cn/mediastyle/musiccm/skin/\' + (cssfile ? cssfile : \'skin_\' + skin) + \'.css?max_age=2592000\';\n                  document.write(\'<link id="js_theme_link" rel="stylesheet" href="\' + link + \'" data-retry="\' + link + \'&retry=1\' + \'" onerror="this.href=this.dataset.retry;this.onerror=null;">\' + style);\n                  window.pageFollowSkin = true;\n                })();</script><script>(function (e, d, a) { var b = "orientationchange" in e ? "orientationchange" : "resize", f = d.documentElement; f.style = "width:100vw"; if (f.style.width.match("vw")) { return true } function c() { switch (a) { case "height": var h = Math.max(f.clientHeight, e.innerHeight), g = 100 * (h / 667) || 100; break; default: var h = Math.max(f.clientWidth, e.innerWidth), g = 100 * (h / 375) || 100 }if (g < 60) { g = 60 } if (g > 120) { g = 120 } f.style.fontSize = g + "px" } e.addEventListener(b, c, false); c() })(window, document, "width");</script></head><body class="page_downright skin_2"><div class="wrap" id="js_app"></div><script src="https://y.qq.com/lib/commercial/h5/polyfill-new.min.js?max_age=2592000"></script><script src="https://y.qq.com/lib/commercial/h5/react-16.8.6.min.js?max_age=2592000"></script><script src="https://y.qq.com/lib/commercial/h5/react-dom-16.8.6.min.js?max_age=2592000&v=20211223"></script><script src="https://y.qq.com/lib/commercial/h5/music-react-2.4.0.min.js?max_age=604800&v=20211223"></script><script src="https://y.qq.com/sonic/lib/clientSdk.js"></script><script src="https://y.gtimg.cn/music/h5/lib/js/module/vconsole.min.js?max_age=2592000"></script><script src="//y.qq.com/sonic/client/sonicDemo/demo2/js/main.1993d4a4bcea597c49aa.js"></script></body></html>';
  },
  function (t, e, r) {
    var n = r(78);
    function o(t, e) {
      for (var r = 0; r < e.length; r++) {
        var o = e[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, n(o.key), o);
      }
    }
    (t.exports = function (t, e, r) {
      return (
        e && o(t.prototype, e),
        r && o(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    (t.exports = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    var n = r(54).default;
    (t.exports = function (t, e) {
      if ("object" !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var o = r.call(t, e || "default");
        if ("object" !== n(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    (t.exports = function (t) {
      if (Array.isArray(t)) return t;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    (t.exports = function (t, e) {
      var r =
        null == t
          ? null
          : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
      if (null != r) {
        var n,
          o,
          i,
          a,
          c = [],
          u = !0,
          s = !1;
        try {
          if (((i = (r = r.call(t)).next), 0 === e)) {
            if (Object(r) !== r) return;
            u = !1;
          } else
            for (
              ;
              !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e);
              u = !0
            );
        } catch (t) {
          (s = !0), (o = t);
        } finally {
          try {
            if (!u && null != r.return && ((a = r.return()), Object(a) !== a))
              return;
          } finally {
            if (s) throw o;
          }
        }
        return c;
      }
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    var n = r(127);
    (t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return n(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(t)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? n(t, e)
            : void 0
        );
      }
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    (t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e) {
    (t.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    var n = r(4),
      o = r(40),
      i = r(13).f,
      a = n("unscopables"),
      c = Array.prototype;
    null == c[a] && i(c, a, { configurable: !0, value: o(null) }),
      (t.exports = function (t) {
        c[a][t] = !0;
      });
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(8),
      o = r(18),
      i = r(43),
      a = r(61),
      c = r(132),
      u = r(4),
      s = TypeError,
      l = u("toPrimitive");
    t.exports = function (t, e) {
      if (!o(t) || i(t)) return t;
      var r,
        u = a(t, l);
      if (u) {
        if ((void 0 === e && (e = "default"), (r = n(u, t, e)), !o(r) || i(r)))
          return r;
        throw s("Can't convert object to primitive value");
      }
      return void 0 === e && (e = "number"), c(t, e);
    };
  },
  function (t, e, r) {
    var n = r(8),
      o = r(1),
      i = r(18),
      a = TypeError;
    t.exports = function (t, e) {
      var r, c;
      if ("string" === e && o((r = t.toString)) && !i((c = n(r, t)))) return c;
      if (o((r = t.valueOf)) && !i((c = n(r, t)))) return c;
      if ("string" !== e && o((r = t.toString)) && !i((c = n(r, t)))) return c;
      throw a("Can't convert object to primitive value");
    };
  },
  function (t, e, r) {
    var n = r(14),
      o = r(86),
      i = r(44),
      a = function (t) {
        return function (e, r, a) {
          var c,
            u = n(e),
            s = i(u),
            l = o(a, s);
          if (t && r != r) {
            for (; s > l; ) if ((c = u[l++]) != c) return !0;
          } else
            for (; s > l; l++)
              if ((t || l in u) && u[l] === r) return t || l || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports =
      Math.trunc ||
      function (t) {
        var e = +t;
        return (e > 0 ? n : r)(e);
      };
  },
  function (t, e, r) {
    var n = r(63),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(n(t), 9007199254740991) : 0;
    };
  },
  function (t, e, r) {
    var n = r(5),
      o = r(1),
      i = n.WeakMap;
    t.exports = o(i) && /native code/.test(String(i));
  },
  function (t, e, r) {
    var n = r(7),
      o = r(91),
      i = r(23),
      a = r(13);
    t.exports = function (t, e, r) {
      for (var c = o(e), u = a.f, s = i.f, l = 0; l < c.length; l++) {
        var f = c[l];
        n(t, f) || (r && n(r, f)) || u(t, f, s(e, f));
      }
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(93).IteratorPrototype,
      o = r(40),
      i = r(33),
      a = r(48),
      c = r(30),
      u = function () {
        return this;
      };
    t.exports = function (t, e, r, s) {
      var l = e + " Iterator";
      return (
        (t.prototype = o(n, { next: i(+!s, r) })),
        a(t, l, !1, !0),
        (c[l] = u),
        t
      );
    };
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = !n(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, r) {
    var n = r(2),
      o = r(20);
    t.exports = function (t, e, r) {
      try {
        return n(o(Object.getOwnPropertyDescriptor(t, e)[r]));
      } catch (t) {}
    };
  },
  function (t, e, r) {
    var n = r(1),
      o = String,
      i = TypeError;
    t.exports = function (t) {
      if ("object" == typeof t || n(t)) return t;
      throw i("Can't set " + o(t) + " as a prototype");
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(69),
      o = r(49);
    t.exports = n
      ? {}.toString
      : function () {
          return "[object " + o(this) + "]";
        };
  },
  function (t, e, r) {
    "use strict";
    var n,
      o,
      i,
      a = r(6),
      c = r(17),
      u = r(50),
      s = r(5),
      l = r(8),
      f = r(19),
      p = r(95),
      h = r(48),
      d = r(145),
      v = r(20),
      m = r(1),
      y = r(18),
      g = r(146),
      b = r(147),
      w = r(99).set,
      x = r(151),
      _ = r(154),
      O = r(71),
      S = r(103),
      E = r(31),
      k = r(34),
      j = r(35),
      P = r(36),
      L = "Promise",
      C = j.CONSTRUCTOR,
      N = j.REJECTION_EVENT,
      T = j.SUBCLASSING,
      I = E.getterFor(L),
      A = E.set,
      F = k && k.prototype,
      R = k,
      D = F,
      M = s.TypeError,
      q = s.document,
      G = s.process,
      U = P.f,
      H = U,
      B = !!(q && q.createEvent && s.dispatchEvent),
      $ = "unhandledrejection",
      z = function (t) {
        var e;
        return !(!y(t) || !m((e = t.then))) && e;
      },
      V = function (t, e) {
        var r,
          n,
          o,
          i = e.value,
          a = 1 == e.state,
          c = a ? t.ok : t.fail,
          u = t.resolve,
          s = t.reject,
          f = t.domain;
        try {
          c
            ? (a || (2 === e.rejection && K(e), (e.rejection = 1)),
              !0 === c
                ? (r = i)
                : (f && f.enter(), (r = c(i)), f && (f.exit(), (o = !0))),
              r === t.promise
                ? s(M("Promise-chain cycle"))
                : (n = z(r))
                ? l(n, r, u, s)
                : u(r))
            : s(i);
        } catch (t) {
          f && !o && f.exit(), s(t);
        }
      },
      W = function (t, e) {
        t.notified ||
          ((t.notified = !0),
          x(function () {
            for (var r, n = t.reactions; (r = n.get()); ) V(r, t);
            (t.notified = !1), e && !t.rejection && Y(t);
          }));
      },
      J = function (t, e, r) {
        var n, o;
        B
          ? (((n = q.createEvent("Event")).promise = e),
            (n.reason = r),
            n.initEvent(t, !1, !0),
            s.dispatchEvent(n))
          : (n = { promise: e, reason: r }),
          !N && (o = s["on" + t])
            ? o(n)
            : t === $ && _("Unhandled promise rejection", r);
      },
      Y = function (t) {
        l(w, s, function () {
          var e,
            r = t.facade,
            n = t.value;
          if (
            Q(t) &&
            ((e = O(function () {
              u ? G.emit("unhandledRejection", n, r) : J($, r, n);
            })),
            (t.rejection = u || Q(t) ? 2 : 1),
            e.error)
          )
            throw e.value;
        });
      },
      Q = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      K = function (t) {
        l(w, s, function () {
          var e = t.facade;
          u ? G.emit("rejectionHandled", e) : J("rejectionhandled", e, t.value);
        });
      },
      Z = function (t, e, r) {
        return function (n) {
          t(e, n, r);
        };
      },
      X = function (t, e, r) {
        t.done ||
          ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), W(t, !0));
      },
      tt = function (t, e, r) {
        if (!t.done) {
          (t.done = !0), r && (t = r);
          try {
            if (t.facade === e) throw M("Promise can't be resolved itself");
            var n = z(e);
            n
              ? x(function () {
                  var r = { done: !1 };
                  try {
                    l(n, e, Z(tt, r, t), Z(X, r, t));
                  } catch (e) {
                    X(r, e, t);
                  }
                })
              : ((t.value = e), (t.state = 1), W(t, !1));
          } catch (e) {
            X({ done: !1 }, e, t);
          }
        }
      };
    if (
      C &&
      ((D = (R = function (t) {
        g(this, D), v(t), l(n, this);
        var e = I(this);
        try {
          t(Z(tt, e), Z(X, e));
        } catch (t) {
          X(e, t);
        }
      }).prototype),
      ((n = function (t) {
        A(this, {
          type: L,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: new S(),
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = f(D, "then", function (t, e) {
        var r = I(this),
          n = U(b(this, R));
        return (
          (r.parent = !0),
          (n.ok = !m(t) || t),
          (n.fail = m(e) && e),
          (n.domain = u ? G.domain : void 0),
          0 == r.state
            ? r.reactions.add(n)
            : x(function () {
                V(n, r);
              }),
          n.promise
        );
      })),
      (o = function () {
        var t = new n(),
          e = I(t);
        (this.promise = t), (this.resolve = Z(tt, e)), (this.reject = Z(X, e));
      }),
      (P.f = U =
        function (t) {
          return t === R || undefined === t ? new o(t) : H(t);
        }),
      !c && m(k) && F !== Object.prototype)
    ) {
      (i = F.then),
        T ||
          f(
            F,
            "then",
            function (t, e) {
              var r = this;
              return new R(function (t, e) {
                l(i, r, t, e);
              }).then(t, e);
            },
            { unsafe: !0 }
          );
      try {
        delete F.constructor;
      } catch (t) {}
      p && p(F, D);
    }
    a({ global: !0, constructor: !0, wrap: !0, forced: C }, { Promise: R }),
      h(R, L, !1, !0),
      d(L);
  },
  function (t, e) {
    var r,
      n,
      o = (t.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function c(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === i || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0);
      try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        r = i;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        n = a;
      }
    })();
    var u,
      s = [],
      l = !1,
      f = -1;
    function p() {
      l &&
        u &&
        ((l = !1), u.length ? (s = u.concat(s)) : (f = -1), s.length && h());
    }
    function h() {
      if (!l) {
        var t = c(p);
        l = !0;
        for (var e = s.length; e; ) {
          for (u = s, s = []; ++f < e; ) u && u[f].run();
          (f = -1), (e = s.length);
        }
        (u = null),
          (l = !1),
          (function (t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === a || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t);
            try {
              return n(t);
            } catch (e) {
              try {
                return n.call(null, t);
              } catch (e) {
                return n.call(this, t);
              }
            }
          })(t);
      }
    }
    function d(t, e) {
      (this.fun = t), (this.array = e);
    }
    function v() {}
    (o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      s.push(new d(t, e)), 1 !== s.length || l || c(h);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = v),
      (o.addListener = v),
      (o.once = v),
      (o.off = v),
      (o.removeListener = v),
      (o.removeAllListeners = v),
      (o.emit = v),
      (o.prependListener = v),
      (o.prependOnceListener = v),
      (o.listeners = function (t) {
        return [];
      }),
      (o.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (t, e, r) {
    "use strict";
    var n = r(15),
      o = r(70),
      i = r(4),
      a = r(10),
      c = i("species");
    t.exports = function (t) {
      var e = n(t);
      a &&
        e &&
        !e[c] &&
        o(e, c, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, r) {
    var n = r(28),
      o = TypeError;
    t.exports = function (t, e) {
      if (n(e, t)) return t;
      throw o("Incorrect invocation");
    };
  },
  function (t, e, r) {
    var n = r(11),
      o = r(148),
      i = r(38),
      a = r(4)("species");
    t.exports = function (t, e) {
      var r,
        c = n(t).constructor;
      return void 0 === c || i((r = n(c)[a])) ? e : o(r);
    };
  },
  function (t, e, r) {
    var n = r(98),
      o = r(29),
      i = TypeError;
    t.exports = function (t) {
      if (n(t)) return t;
      throw i(o(t) + " is not a constructor");
    };
  },
  function (t, e, r) {
    var n = r(21),
      o = r(2);
    t.exports = function (t) {
      if ("Function" === n(t)) return o(t);
    };
  },
  function (t, e) {
    var r = TypeError;
    t.exports = function (t, e) {
      if (t < e) throw r("Not enough arguments");
      return t;
    };
  },
  function (t, e, r) {
    var n,
      o,
      i,
      a,
      c,
      u = r(5),
      s = r(51),
      l = r(23).f,
      f = r(99).set,
      p = r(103),
      h = r(102),
      d = r(152),
      v = r(153),
      m = r(50),
      y = u.MutationObserver || u.WebKitMutationObserver,
      g = u.document,
      b = u.process,
      w = u.Promise,
      x = l(u, "queueMicrotask"),
      _ = x && x.value;
    if (!_) {
      var O = new p(),
        S = function () {
          var t, e;
          for (m && (t = b.domain) && t.exit(); (e = O.get()); )
            try {
              e();
            } catch (t) {
              throw (O.head && n(), t);
            }
          t && t.enter();
        };
      h || m || v || !y || !g
        ? !d && w && w.resolve
          ? (((a = w.resolve(void 0)).constructor = w),
            (c = s(a.then, a)),
            (n = function () {
              c(S);
            }))
          : m
          ? (n = function () {
              b.nextTick(S);
            })
          : ((f = s(f, u)),
            (n = function () {
              f(S);
            }))
        : ((o = !0),
          (i = g.createTextNode("")),
          new y(S).observe(i, { characterData: !0 }),
          (n = function () {
            i.data = o = !o;
          })),
        (_ = function (t) {
          O.head || n(), O.add(t);
        });
    }
    t.exports = _;
  },
  function (t, e, r) {
    var n = r(39);
    t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
  },
  function (t, e, r) {
    var n = r(39);
    t.exports = /web0s(?!.*chrome)/i.test(n);
  },
  function (t, e) {
    t.exports = function (t, e) {
      try {
        1 == arguments.length ? console.error(t) : console.error(t, e);
      } catch (t) {}
    };
  },
  function (t, e, r) {
    var n = r(104),
      o = r(50);
    t.exports =
      !n && !o && "object" == typeof window && "object" == typeof document;
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(8),
      i = r(20),
      a = r(36),
      c = r(71),
      u = r(105);
    n(
      { target: "Promise", stat: !0, forced: r(107) },
      {
        all: function (t) {
          var e = this,
            r = a.f(e),
            n = r.resolve,
            s = r.reject,
            l = c(function () {
              var r = i(e.resolve),
                a = [],
                c = 0,
                l = 1;
              u(t, function (t) {
                var i = c++,
                  u = !1;
                l++,
                  o(r, e, t).then(function (t) {
                    u || ((u = !0), (a[i] = t), --l || n(a));
                  }, s);
              }),
                --l || n(a);
            });
          return l.error && s(l.value), r.promise;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(4),
      o = r(30),
      i = n("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  function (t, e, r) {
    var n = r(8),
      o = r(20),
      i = r(11),
      a = r(29),
      c = r(106),
      u = TypeError;
    t.exports = function (t, e) {
      var r = arguments.length < 2 ? c(t) : e;
      if (o(r)) return i(n(r, t));
      throw u(a(t) + " is not iterable");
    };
  },
  function (t, e, r) {
    var n = r(8),
      o = r(11),
      i = r(61);
    t.exports = function (t, e, r) {
      var a, c;
      o(t);
      try {
        if (!(a = i(t, "return"))) {
          if ("throw" === e) throw r;
          return r;
        }
        a = n(a, t);
      } catch (t) {
        (c = !0), (a = t);
      }
      if ("throw" === e) throw r;
      if (c) throw a;
      return o(a), r;
    };
  },
  function (t, e, r) {
    var n = r(4)("iterator"),
      o = !1;
    try {
      var i = 0,
        a = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            o = !0;
          },
        };
      (a[n] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var r = !1;
      try {
        var i = {};
        (i[n] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(i);
      } catch (t) {}
      return r;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(17),
      i = r(35).CONSTRUCTOR,
      a = r(34),
      c = r(15),
      u = r(1),
      s = r(19),
      l = a && a.prototype;
    if (
      (n(
        { target: "Promise", proto: !0, forced: i, real: !0 },
        {
          catch: function (t) {
            return this.then(void 0, t);
          },
        }
      ),
      !o && u(a))
    ) {
      var f = c("Promise").prototype.catch;
      l.catch !== f && s(l, "catch", f, { unsafe: !0 });
    }
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(8),
      i = r(20),
      a = r(36),
      c = r(71),
      u = r(105);
    n(
      { target: "Promise", stat: !0, forced: r(107) },
      {
        race: function (t) {
          var e = this,
            r = a.f(e),
            n = r.reject,
            s = c(function () {
              var a = i(e.resolve);
              u(t, function (t) {
                o(a, e, t).then(r.resolve, n);
              });
            });
          return s.error && n(s.value), r.promise;
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(8),
      i = r(36);
    n(
      { target: "Promise", stat: !0, forced: r(35).CONSTRUCTOR },
      {
        reject: function (t) {
          var e = i.f(this);
          return o(e.reject, void 0, t), e.promise;
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(15),
      i = r(17),
      a = r(34),
      c = r(35).CONSTRUCTOR,
      u = r(165),
      s = o("Promise"),
      l = i && !c;
    n(
      { target: "Promise", stat: !0, forced: i || c },
      {
        resolve: function (t) {
          return u(l && this === s ? a : this, t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(11),
      o = r(18),
      i = r(36);
    t.exports = function (t, e) {
      if ((n(t), o(e) && e.constructor === t)) return e;
      var r = i.f(t);
      return (0, r.resolve)(e), r.promise;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(167).charAt,
      o = r(24),
      i = r(31),
      a = r(88),
      c = r(96),
      u = "String Iterator",
      s = i.set,
      l = i.getterFor(u);
    a(
      String,
      "String",
      function (t) {
        s(this, { type: u, string: o(t), index: 0 });
      },
      function () {
        var t,
          e = l(this),
          r = e.string,
          o = e.index;
        return o >= r.length
          ? c(void 0, !0)
          : ((t = n(r, o)), (e.index += t.length), c(t, !1));
      }
    );
  },
  function (t, e, r) {
    var n = r(2),
      o = r(63),
      i = r(24),
      a = r(56),
      c = n("".charAt),
      u = n("".charCodeAt),
      s = n("".slice),
      l = function (t) {
        return function (e, r) {
          var n,
            l,
            f = i(a(e)),
            p = o(r),
            h = f.length;
          return p < 0 || p >= h
            ? t
              ? ""
              : void 0
            : (n = u(f, p)) < 55296 ||
              n > 56319 ||
              p + 1 === h ||
              (l = u(f, p + 1)) < 56320 ||
              l > 57343
            ? t
              ? c(f, p)
              : n
            : t
            ? s(f, p, p + 2)
            : l - 56320 + ((n - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: l(!1), charAt: l(!0) };
  },
  function (t, e, r) {
    var n = r(5),
      o = r(108),
      i = r(109),
      a = r(79),
      c = r(32),
      u = r(4),
      s = u("iterator"),
      l = u("toStringTag"),
      f = a.values,
      p = function (t, e) {
        if (t) {
          if (t[s] !== f)
            try {
              c(t, s, f);
            } catch (e) {
              t[s] = f;
            }
          if ((t[l] || c(t, l, e), o[e]))
            for (var r in a)
              if (t[r] !== a[r])
                try {
                  c(t, r, a[r]);
                } catch (e) {
                  t[r] = a[r];
                }
        }
      };
    for (var h in o) p(n[h] && n[h].prototype, h);
    p(i, "DOMTokenList");
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(5),
      i = r(8),
      a = r(2),
      c = r(17),
      u = r(10),
      s = r(22),
      l = r(3),
      f = r(7),
      p = r(28),
      h = r(11),
      d = r(14),
      v = r(42),
      m = r(24),
      y = r(33),
      g = r(40),
      b = r(62),
      w = r(66),
      x = r(170),
      _ = r(67),
      O = r(23),
      S = r(13),
      E = r(82),
      k = r(89),
      j = r(19),
      P = r(70),
      L = r(26),
      C = r(46),
      N = r(45),
      T = r(59),
      I = r(4),
      A = r(111),
      F = r(172),
      R = r(174),
      D = r(48),
      M = r(31),
      q = r(52).forEach,
      G = C("hidden"),
      U = "Symbol",
      H = "prototype",
      B = M.set,
      $ = M.getterFor(U),
      z = Object[H],
      V = o.Symbol,
      W = V && V[H],
      J = o.TypeError,
      Y = o.QObject,
      Q = O.f,
      K = S.f,
      Z = x.f,
      X = k.f,
      tt = a([].push),
      et = L("symbols"),
      rt = L("op-symbols"),
      nt = L("wks"),
      ot = !Y || !Y[H] || !Y[H].findChild,
      it =
        u &&
        l(function () {
          return (
            7 !=
            g(
              K({}, "a", {
                get: function () {
                  return K(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, r) {
              var n = Q(z, e);
              n && delete z[e], K(t, e, r), n && t !== z && K(z, e, n);
            }
          : K,
      at = function (t, e) {
        var r = (et[t] = g(W));
        return (
          B(r, { type: U, tag: t, description: e }), u || (r.description = e), r
        );
      },
      ct = function (t, e, r) {
        t === z && ct(rt, e, r), h(t);
        var n = v(e);
        return (
          h(r),
          f(et, n)
            ? (r.enumerable
                ? (f(t, G) && t[G][n] && (t[G][n] = !1),
                  (r = g(r, { enumerable: y(0, !1) })))
                : (f(t, G) || K(t, G, y(1, {})), (t[G][n] = !0)),
              it(t, n, r))
            : K(t, n, r)
        );
      },
      ut = function (t, e) {
        h(t);
        var r = d(e),
          n = b(r).concat(pt(r));
        return (
          q(n, function (e) {
            (u && !i(st, r, e)) || ct(t, e, r[e]);
          }),
          t
        );
      },
      st = function (t) {
        var e = v(t),
          r = i(X, this, e);
        return (
          !(this === z && f(et, e) && !f(rt, e)) &&
          (!(r || !f(this, e) || !f(et, e) || (f(this, G) && this[G][e])) || r)
        );
      },
      lt = function (t, e) {
        var r = d(t),
          n = v(e);
        if (r !== z || !f(et, n) || f(rt, n)) {
          var o = Q(r, n);
          return (
            !o || !f(et, n) || (f(r, G) && r[G][n]) || (o.enumerable = !0), o
          );
        }
      },
      ft = function (t) {
        var e = Z(d(t)),
          r = [];
        return (
          q(e, function (t) {
            f(et, t) || f(N, t) || tt(r, t);
          }),
          r
        );
      },
      pt = function (t) {
        var e = t === z,
          r = Z(e ? rt : d(t)),
          n = [];
        return (
          q(r, function (t) {
            !f(et, t) || (e && !f(z, t)) || tt(n, et[t]);
          }),
          n
        );
      };
    s ||
      ((V = function () {
        if (p(W, this)) throw J("Symbol is not a constructor");
        var t =
            arguments.length && void 0 !== arguments[0]
              ? m(arguments[0])
              : void 0,
          e = T(t),
          r = function (t) {
            this === z && i(r, rt, t),
              f(this, G) && f(this[G], e) && (this[G][e] = !1),
              it(this, e, y(1, t));
          };
        return u && ot && it(z, e, { configurable: !0, set: r }), at(e, t);
      }),
      j((W = V[H]), "toString", function () {
        return $(this).tag;
      }),
      j(V, "withoutSetter", function (t) {
        return at(T(t), t);
      }),
      (k.f = st),
      (S.f = ct),
      (E.f = ut),
      (O.f = lt),
      (w.f = x.f = ft),
      (_.f = pt),
      (A.f = function (t) {
        return at(I(t), t);
      }),
      u &&
        (P(W, "description", {
          configurable: !0,
          get: function () {
            return $(this).description;
          },
        }),
        c || j(z, "propertyIsEnumerable", st, { unsafe: !0 }))),
      n(
        { global: !0, constructor: !0, wrap: !0, forced: !s, sham: !s },
        { Symbol: V }
      ),
      q(b(nt), function (t) {
        F(t);
      }),
      n(
        { target: U, stat: !0, forced: !s },
        {
          useSetter: function () {
            ot = !0;
          },
          useSimple: function () {
            ot = !1;
          },
        }
      ),
      n(
        { target: "Object", stat: !0, forced: !s, sham: !u },
        {
          create: function (t, e) {
            return void 0 === e ? g(t) : ut(g(t), e);
          },
          defineProperty: ct,
          defineProperties: ut,
          getOwnPropertyDescriptor: lt,
        }
      ),
      n(
        { target: "Object", stat: !0, forced: !s },
        { getOwnPropertyNames: ft }
      ),
      R(),
      D(V, U),
      (N[G] = !0);
  },
  function (t, e, r) {
    var n = r(21),
      o = r(14),
      i = r(66).f,
      a = r(171),
      c =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return c && "Window" == n(t)
        ? (function (t) {
            try {
              return i(t);
            } catch (t) {
              return a(c);
            }
          })(t)
        : i(o(t));
    };
  },
  function (t, e, r) {
    var n = r(86),
      o = r(44),
      i = r(110),
      a = Array,
      c = Math.max;
    t.exports = function (t, e, r) {
      for (
        var u = o(t),
          s = n(e, u),
          l = n(void 0 === r ? u : r, u),
          f = a(c(l - s, 0)),
          p = 0;
        s < l;
        s++, p++
      )
        i(f, p, t[s]);
      return (f.length = p), f;
    };
  },
  function (t, e, r) {
    var n = r(173),
      o = r(7),
      i = r(111),
      a = r(13).f;
    t.exports = function (t) {
      var e = n.Symbol || (n.Symbol = {});
      o(e, t) || a(e, t, { value: i.f(t) });
    };
  },
  function (t, e, r) {
    var n = r(5);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(8),
      o = r(15),
      i = r(4),
      a = r(19);
    t.exports = function () {
      var t = o("Symbol"),
        e = t && t.prototype,
        r = e && e.valueOf,
        c = i("toPrimitive");
      e &&
        !e[c] &&
        a(
          e,
          c,
          function (t) {
            return n(r, this);
          },
          { arity: 1 }
        );
    };
  },
  function (t, e, r) {
    var n = r(176);
    t.exports = function (t, e) {
      return new (n(t))(0 === e ? 0 : e);
    };
  },
  function (t, e, r) {
    var n = r(112),
      o = r(98),
      i = r(18),
      a = r(4)("species"),
      c = Array;
    t.exports = function (t) {
      var e;
      return (
        n(t) &&
          ((e = t.constructor),
          ((o(e) && (e === c || n(e.prototype))) ||
            (i(e) && null === (e = e[a]))) &&
            (e = void 0)),
        void 0 === e ? c : e
      );
    };
  },
  function (t, e, r) {
    var n = r(6),
      o = r(15),
      i = r(7),
      a = r(24),
      c = r(26),
      u = r(113),
      s = c("string-to-symbol-registry"),
      l = c("symbol-to-string-registry");
    n(
      { target: "Symbol", stat: !0, forced: !u },
      {
        for: function (t) {
          var e = a(t);
          if (i(s, e)) return s[e];
          var r = o("Symbol")(e);
          return (s[e] = r), (l[r] = e), r;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(6),
      o = r(7),
      i = r(43),
      a = r(29),
      c = r(26),
      u = r(113),
      s = c("symbol-to-string-registry");
    n(
      { target: "Symbol", stat: !0, forced: !u },
      {
        keyFor: function (t) {
          if (!i(t)) throw TypeError(a(t) + " is not a symbol");
          if (o(s, t)) return s[t];
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(6),
      o = r(15),
      i = r(100),
      a = r(8),
      c = r(2),
      u = r(3),
      s = r(1),
      l = r(43),
      f = r(101),
      p = r(180),
      h = r(22),
      d = String,
      v = o("JSON", "stringify"),
      m = c(/./.exec),
      y = c("".charAt),
      g = c("".charCodeAt),
      b = c("".replace),
      w = c((1).toString),
      x = /[\uD800-\uDFFF]/g,
      _ = /^[\uD800-\uDBFF]$/,
      O = /^[\uDC00-\uDFFF]$/,
      S =
        !h ||
        u(function () {
          var t = o("Symbol")();
          return (
            "[null]" != v([t]) || "{}" != v({ a: t }) || "{}" != v(Object(t))
          );
        }),
      E = u(function () {
        return (
          '"\\udf06\\ud834"' !== v("\udf06\ud834") ||
          '"\\udead"' !== v("\udead")
        );
      }),
      k = function (t, e) {
        var r = f(arguments),
          n = p(e);
        if (s(n) || (void 0 !== t && !l(t)))
          return (
            (r[1] = function (t, e) {
              if ((s(n) && (e = a(n, this, d(t), e)), !l(e))) return e;
            }),
            i(v, null, r)
          );
      },
      j = function (t, e, r) {
        var n = y(r, e - 1),
          o = y(r, e + 1);
        return (m(_, t) && !m(O, o)) || (m(O, t) && !m(_, n))
          ? "\\u" + w(g(t, 0), 16)
          : t;
      };
    v &&
      n(
        { target: "JSON", stat: !0, arity: 3, forced: S || E },
        {
          stringify: function (t, e, r) {
            var n = f(arguments),
              o = i(S ? k : v, null, n);
            return E && "string" == typeof o ? b(o, x, j) : o;
          },
        }
      );
  },
  function (t, e, r) {
    var n = r(2),
      o = r(112),
      i = r(1),
      a = r(21),
      c = r(24),
      u = n([].push);
    t.exports = function (t) {
      if (i(t)) return t;
      if (o(t)) {
        for (var e = t.length, r = [], n = 0; n < e; n++) {
          var s = t[n];
          "string" == typeof s
            ? u(r, s)
            : ("number" != typeof s && "Number" != a(s) && "String" != a(s)) ||
              u(r, c(s));
        }
        var l = r.length,
          f = !0;
        return function (t, e) {
          if (f) return (f = !1), e;
          if (o(this)) return e;
          for (var n = 0; n < l; n++) if (r[n] === t) return e;
        };
      }
    };
  },
  function (t, e, r) {
    var n = r(6),
      o = r(22),
      i = r(3),
      a = r(67),
      c = r(27);
    n(
      {
        target: "Object",
        stat: !0,
        forced:
          !o ||
          i(function () {
            a.f(1);
          }),
      },
      {
        getOwnPropertySymbols: function (t) {
          var e = a.f;
          return e ? e(c(t)) : [];
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(52).forEach,
      o = r(115)("forEach");
    t.exports = o
      ? [].forEach
      : function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        };
  },
  function (t, e, r) {
    "use strict";
    var n = r(116),
      o = "function" == typeof Symbol && Symbol.for,
      i = o ? Symbol.for("react.element") : 60103,
      a = o ? Symbol.for("react.portal") : 60106,
      c = o ? Symbol.for("react.fragment") : 60107,
      u = o ? Symbol.for("react.strict_mode") : 60108,
      s = o ? Symbol.for("react.profiler") : 60114,
      l = o ? Symbol.for("react.provider") : 60109,
      f = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.forward_ref") : 60112,
      h = o ? Symbol.for("react.suspense") : 60113,
      d = o ? Symbol.for("react.memo") : 60115,
      v = o ? Symbol.for("react.lazy") : 60116,
      m = "function" == typeof Symbol && Symbol.iterator;
    function y(t) {
      for (
        var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
          r = 1;
        r < arguments.length;
        r++
      )
        e += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      b = {};
    function w(t, e, r) {
      (this.props = t),
        (this.context = e),
        (this.refs = b),
        (this.updater = r || g);
    }
    function x() {}
    function _(t, e, r) {
      (this.props = t),
        (this.context = e),
        (this.refs = b),
        (this.updater = r || g);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function (t, e) {
        if ("object" != typeof t && "function" != typeof t && null != t)
          throw Error(y(85));
        this.updater.enqueueSetState(this, t, e, "setState");
      }),
      (w.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (x.prototype = w.prototype);
    var O = (_.prototype = new x());
    (O.constructor = _), n(O, w.prototype), (O.isPureReactComponent = !0);
    var S = { current: null },
      E = Object.prototype.hasOwnProperty,
      k = { key: !0, ref: !0, __self: !0, __source: !0 };
    function j(t, e, r) {
      var n,
        o = {},
        a = null,
        c = null;
      if (null != e)
        for (n in (void 0 !== e.ref && (c = e.ref),
        void 0 !== e.key && (a = "" + e.key),
        e))
          E.call(e, n) && !k.hasOwnProperty(n) && (o[n] = e[n]);
      var u = arguments.length - 2;
      if (1 === u) o.children = r;
      else if (1 < u) {
        for (var s = Array(u), l = 0; l < u; l++) s[l] = arguments[l + 2];
        o.children = s;
      }
      if (t && t.defaultProps)
        for (n in (u = t.defaultProps)) void 0 === o[n] && (o[n] = u[n]);
      return {
        $$typeof: i,
        type: t,
        key: a,
        ref: c,
        props: o,
        _owner: S.current,
      };
    }
    function P(t) {
      return "object" == typeof t && null !== t && t.$$typeof === i;
    }
    var L = /\/+/g,
      C = [];
    function N(t, e, r, n) {
      if (C.length) {
        var o = C.pop();
        return (
          (o.result = t),
          (o.keyPrefix = e),
          (o.func = r),
          (o.context = n),
          (o.count = 0),
          o
        );
      }
      return { result: t, keyPrefix: e, func: r, context: n, count: 0 };
    }
    function T(t) {
      (t.result = null),
        (t.keyPrefix = null),
        (t.func = null),
        (t.context = null),
        (t.count = 0),
        10 > C.length && C.push(t);
    }
    function I(t, e, r, n) {
      var o = typeof t;
      ("undefined" !== o && "boolean" !== o) || (t = null);
      var c = !1;
      if (null === t) c = !0;
      else
        switch (o) {
          case "string":
          case "number":
            c = !0;
            break;
          case "object":
            switch (t.$$typeof) {
              case i:
              case a:
                c = !0;
            }
        }
      if (c) return r(n, t, "" === e ? "." + F(t, 0) : e), 1;
      if (((c = 0), (e = "" === e ? "." : e + ":"), Array.isArray(t)))
        for (var u = 0; u < t.length; u++) {
          var s = e + F((o = t[u]), u);
          c += I(o, s, r, n);
        }
      else if (
        (null === t || "object" != typeof t
          ? (s = null)
          : (s =
              "function" == typeof (s = (m && t[m]) || t["@@iterator"])
                ? s
                : null),
        "function" == typeof s)
      )
        for (t = s.call(t), u = 0; !(o = t.next()).done; )
          c += I((o = o.value), (s = e + F(o, u++)), r, n);
      else if ("object" === o)
        throw (
          ((r = "" + t),
          Error(
            y(
              31,
              "[object Object]" === r
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : r,
              ""
            )
          ))
        );
      return c;
    }
    function A(t, e, r) {
      return null == t ? 0 : I(t, "", e, r);
    }
    function F(t, e) {
      return "object" == typeof t && null !== t && null != t.key
        ? (function (t) {
            var e = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + t).replace(/[=:]/g, function (t) {
                return e[t];
              })
            );
          })(t.key)
        : e.toString(36);
    }
    function R(t, e) {
      t.func.call(t.context, e, t.count++);
    }
    function D(t, e, r) {
      var n = t.result,
        o = t.keyPrefix;
      (t = t.func.call(t.context, e, t.count++)),
        Array.isArray(t)
          ? M(t, n, r, function (t) {
              return t;
            })
          : null != t &&
            (P(t) &&
              (t = (function (t, e) {
                return {
                  $$typeof: i,
                  type: t.type,
                  key: e,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner,
                };
              })(
                t,
                o +
                  (!t.key || (e && e.key === t.key)
                    ? ""
                    : ("" + t.key).replace(L, "$&/") + "/") +
                  r
              )),
            n.push(t));
    }
    function M(t, e, r, n, o) {
      var i = "";
      null != r && (i = ("" + r).replace(L, "$&/") + "/"),
        A(t, D, (e = N(e, i, n, o))),
        T(e);
    }
    var q = { current: null };
    function G() {
      var t = q.current;
      if (null === t) throw Error(y(321));
      return t;
    }
    var U = {
      ReactCurrentDispatcher: q,
      ReactCurrentBatchConfig: { suspense: null },
      ReactCurrentOwner: S,
      IsSomeRendererActing: { current: !1 },
      assign: n,
    };
    (e.Children = {
      map: function (t, e, r) {
        if (null == t) return t;
        var n = [];
        return M(t, n, null, e, r), n;
      },
      forEach: function (t, e, r) {
        if (null == t) return t;
        A(t, R, (e = N(null, null, e, r))), T(e);
      },
      count: function (t) {
        return A(
          t,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (t) {
        var e = [];
        return (
          M(t, e, null, function (t) {
            return t;
          }),
          e
        );
      },
      only: function (t) {
        if (!P(t)) throw Error(y(143));
        return t;
      },
    }),
      (e.Component = w),
      (e.Fragment = c),
      (e.Profiler = s),
      (e.PureComponent = _),
      (e.StrictMode = u),
      (e.Suspense = h),
      (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
      (e.cloneElement = function (t, e, r) {
        if (null == t) throw Error(y(267, t));
        var o = n({}, t.props),
          a = t.key,
          c = t.ref,
          u = t._owner;
        if (null != e) {
          if (
            (void 0 !== e.ref && ((c = e.ref), (u = S.current)),
            void 0 !== e.key && (a = "" + e.key),
            t.type && t.type.defaultProps)
          )
            var s = t.type.defaultProps;
          for (l in e)
            E.call(e, l) &&
              !k.hasOwnProperty(l) &&
              (o[l] = void 0 === e[l] && void 0 !== s ? s[l] : e[l]);
        }
        var l = arguments.length - 2;
        if (1 === l) o.children = r;
        else if (1 < l) {
          s = Array(l);
          for (var f = 0; f < l; f++) s[f] = arguments[f + 2];
          o.children = s;
        }
        return {
          $$typeof: i,
          type: t.type,
          key: a,
          ref: c,
          props: o,
          _owner: u,
        };
      }),
      (e.createContext = function (t, e) {
        return (
          void 0 === e && (e = null),
          ((t = {
            $$typeof: f,
            _calculateChangedBits: e,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: l, _context: t }),
          (t.Consumer = t)
        );
      }),
      (e.createElement = j),
      (e.createFactory = function (t) {
        var e = j.bind(null, t);
        return (e.type = t), e;
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (t) {
        return { $$typeof: p, render: t };
      }),
      (e.isValidElement = P),
      (e.lazy = function (t) {
        return { $$typeof: v, _ctor: t, _status: -1, _result: null };
      }),
      (e.memo = function (t, e) {
        return { $$typeof: d, type: t, compare: void 0 === e ? null : e };
      }),
      (e.useCallback = function (t, e) {
        return G().useCallback(t, e);
      }),
      (e.useContext = function (t, e) {
        return G().useContext(t, e);
      }),
      (e.useDebugValue = function () {}),
      (e.useEffect = function (t, e) {
        return G().useEffect(t, e);
      }),
      (e.useImperativeHandle = function (t, e, r) {
        return G().useImperativeHandle(t, e, r);
      }),
      (e.useLayoutEffect = function (t, e) {
        return G().useLayoutEffect(t, e);
      }),
      (e.useMemo = function (t, e) {
        return G().useMemo(t, e);
      }),
      (e.useReducer = function (t, e, r) {
        return G().useReducer(t, e, r);
      }),
      (e.useRef = function (t) {
        return G().useRef(t);
      }),
      (e.useState = function (t) {
        return G().useState(t);
      }),
      (e.version = "16.14.0");
  },
  function (t, e, r) {
    "use strict";
    var n = r(116),
      o = r(0);
    function i(t) {
      for (
        var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
          r = 1;
        r < arguments.length;
        r++
      )
        e += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var a = "function" == typeof Symbol && Symbol.for,
      c = a ? Symbol.for("react.portal") : 60106,
      u = a ? Symbol.for("react.fragment") : 60107,
      s = a ? Symbol.for("react.strict_mode") : 60108,
      l = a ? Symbol.for("react.profiler") : 60114,
      f = a ? Symbol.for("react.provider") : 60109,
      p = a ? Symbol.for("react.context") : 60110,
      h = a ? Symbol.for("react.concurrent_mode") : 60111,
      d = a ? Symbol.for("react.forward_ref") : 60112,
      v = a ? Symbol.for("react.suspense") : 60113,
      m = a ? Symbol.for("react.suspense_list") : 60120,
      y = a ? Symbol.for("react.memo") : 60115,
      g = a ? Symbol.for("react.lazy") : 60116,
      b = a ? Symbol.for("react.block") : 60121,
      w = a ? Symbol.for("react.fundamental") : 60117,
      x = a ? Symbol.for("react.scope") : 60119;
    function _(t) {
      if (null == t) return null;
      if ("function" == typeof t) return t.displayName || t.name || null;
      if ("string" == typeof t) return t;
      switch (t) {
        case u:
          return "Fragment";
        case c:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if ("object" == typeof t)
        switch (t.$$typeof) {
          case p:
            return "Context.Consumer";
          case f:
            return "Context.Provider";
          case d:
            var e = t.render;
            return (
              (e = e.displayName || e.name || ""),
              t.displayName ||
                ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
          case y:
            return _(t.type);
          case b:
            return _(t.render);
          case g:
            if ((t = 1 === t._status ? t._result : null)) return _(t);
        }
      return null;
    }
    var O = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    O.hasOwnProperty("ReactCurrentDispatcher") ||
      (O.ReactCurrentDispatcher = { current: null }),
      O.hasOwnProperty("ReactCurrentBatchConfig") ||
        (O.ReactCurrentBatchConfig = { suspense: null });
    var S = {};
    function E(t, e) {
      for (var r = 0 | t._threadCount; r <= e; r++)
        (t[r] = t._currentValue2), (t._threadCount = r + 1);
    }
    for (var k = new Uint16Array(16), j = 0; 15 > j; j++) k[j] = j + 1;
    k[15] = 0;
    var P =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      L = Object.prototype.hasOwnProperty,
      C = {},
      N = {};
    function T(t) {
      return (
        !!L.call(N, t) ||
        (!L.call(C, t) && (P.test(t) ? (N[t] = !0) : ((C[t] = !0), !1)))
      );
    }
    function I(t, e, r, n, o, i) {
      (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
        (this.attributeName = n),
        (this.attributeNamespace = o),
        (this.mustUseProperty = r),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = i);
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (t) {
        A[t] = new I(t, 0, !1, t, null, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (t) {
        var e = t[0];
        A[e] = new I(e, 1, !1, t[1], null, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        t
      ) {
        A[t] = new I(t, 2, !1, t.toLowerCase(), null, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (t) {
        A[t] = new I(t, 2, !1, t, null, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (t) {
          A[t] = new I(t, 3, !1, t.toLowerCase(), null, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (t) {
        A[t] = new I(t, 3, !0, t, null, !1);
      }),
      ["capture", "download"].forEach(function (t) {
        A[t] = new I(t, 4, !1, t, null, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (t) {
        A[t] = new I(t, 6, !1, t, null, !1);
      }),
      ["rowSpan", "start"].forEach(function (t) {
        A[t] = new I(t, 5, !1, t.toLowerCase(), null, !1);
      });
    var F = /[\-:]([a-z])/g;
    function R(t) {
      return t[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (t) {
        var e = t.replace(F, R);
        A[e] = new I(e, 1, !1, t, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (t) {
          var e = t.replace(F, R);
          A[e] = new I(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
        var e = t.replace(F, R);
        A[e] = new I(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (t) {
        A[t] = new I(t, 1, !1, t.toLowerCase(), null, !1);
      }),
      (A.xlinkHref = new I(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
      ["src", "href", "action", "formAction"].forEach(function (t) {
        A[t] = new I(t, 1, !1, t.toLowerCase(), null, !0);
      });
    var D = /["'&<>]/;
    function M(t) {
      if ("boolean" == typeof t || "number" == typeof t) return "" + t;
      t = "" + t;
      var e = D.exec(t);
      if (e) {
        var r,
          n = "",
          o = 0;
        for (r = e.index; r < t.length; r++) {
          switch (t.charCodeAt(r)) {
            case 34:
              e = "&quot;";
              break;
            case 38:
              e = "&amp;";
              break;
            case 39:
              e = "&#x27;";
              break;
            case 60:
              e = "&lt;";
              break;
            case 62:
              e = "&gt;";
              break;
            default:
              continue;
          }
          o !== r && (n += t.substring(o, r)), (o = r + 1), (n += e);
        }
        t = o !== r ? n + t.substring(o, r) : n;
      }
      return t;
    }
    function q(t, e) {
      var r,
        n = A.hasOwnProperty(t) ? A[t] : null;
      return (
        (r = "style" !== t) &&
          (r =
            null !== n
              ? 0 === n.type
              : 2 < t.length &&
                ("o" === t[0] || "O" === t[0]) &&
                ("n" === t[1] || "N" === t[1])),
        r ||
        (function (t, e, r, n) {
          if (
            null == e ||
            (function (t, e, r, n) {
              if (null !== r && 0 === r.type) return !1;
              switch (typeof e) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !n &&
                    (null !== r
                      ? !r.acceptsBooleans
                      : "data-" !== (t = t.toLowerCase().slice(0, 5)) &&
                        "aria-" !== t)
                  );
                default:
                  return !1;
              }
            })(t, e, r, n)
          )
            return !0;
          if (n) return !1;
          if (null !== r)
            switch (r.type) {
              case 3:
                return !e;
              case 4:
                return !1 === e;
              case 5:
                return isNaN(e);
              case 6:
                return isNaN(e) || 1 > e;
            }
          return !1;
        })(t, e, n, !1)
          ? ""
          : null !== n
          ? ((t = n.attributeName),
            3 === (r = n.type) || (4 === r && !0 === e)
              ? t + '=""'
              : (n.sanitizeURL && (e = "" + e), t + '="' + M(e) + '"'))
          : T(t)
          ? t + '="' + M(e) + '"'
          : ""
      );
    }
    var G =
        "function" == typeof Object.is
          ? Object.is
          : function (t, e) {
              return (
                (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
              );
            },
      U = null,
      H = null,
      B = null,
      $ = !1,
      z = !1,
      V = null,
      W = 0;
    function J() {
      if (null === U) throw Error(i(321));
      return U;
    }
    function Y() {
      if (0 < W) throw Error(i(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function Q() {
      return (
        null === B
          ? null === H
            ? (($ = !1), (H = B = Y()))
            : (($ = !0), (B = H))
          : null === B.next
          ? (($ = !1), (B = B.next = Y()))
          : (($ = !0), (B = B.next)),
        B
      );
    }
    function K(t, e, r, n) {
      for (; z; ) (z = !1), (W += 1), (B = null), (r = t(e, n));
      return (H = U = null), (W = 0), (B = V = null), r;
    }
    function Z(t, e) {
      return "function" == typeof e ? e(t) : e;
    }
    function X(t, e, r) {
      if (((U = J()), (B = Q()), $)) {
        var n = B.queue;
        if (((e = n.dispatch), null !== V && void 0 !== (r = V.get(n)))) {
          V.delete(n), (n = B.memoizedState);
          do {
            (n = t(n, r.action)), (r = r.next);
          } while (null !== r);
          return (B.memoizedState = n), [n, e];
        }
        return [B.memoizedState, e];
      }
      return (
        (t =
          t === Z
            ? "function" == typeof e
              ? e()
              : e
            : void 0 !== r
            ? r(e)
            : e),
        (B.memoizedState = t),
        (t = (t = B.queue = { last: null, dispatch: null }).dispatch =
          tt.bind(null, U, t)),
        [B.memoizedState, t]
      );
    }
    function tt(t, e, r) {
      if (!(25 > W)) throw Error(i(301));
      if (t === U)
        if (
          ((z = !0),
          (t = { action: r, next: null }),
          null === V && (V = new Map()),
          void 0 === (r = V.get(e)))
        )
          V.set(e, t);
        else {
          for (e = r; null !== e.next; ) e = e.next;
          e.next = t;
        }
    }
    function et() {}
    var rt = 0,
      nt = {
        readContext: function (t) {
          var e = rt;
          return E(t, e), t[e];
        },
        useContext: function (t) {
          J();
          var e = rt;
          return E(t, e), t[e];
        },
        useMemo: function (t, e) {
          if (((U = J()), (e = void 0 === e ? null : e), null !== (B = Q()))) {
            var r = B.memoizedState;
            if (null !== r && null !== e) {
              t: {
                var n = r[1];
                if (null === n) n = !1;
                else {
                  for (var o = 0; o < n.length && o < e.length; o++)
                    if (!G(e[o], n[o])) {
                      n = !1;
                      break t;
                    }
                  n = !0;
                }
              }
              if (n) return r[0];
            }
          }
          return (t = t()), (B.memoizedState = [t, e]), t;
        },
        useReducer: X,
        useRef: function (t) {
          U = J();
          var e = (B = Q()).memoizedState;
          return null === e ? ((t = { current: t }), (B.memoizedState = t)) : e;
        },
        useState: function (t) {
          return X(Z, t);
        },
        useLayoutEffect: function () {},
        useCallback: function (t) {
          return t;
        },
        useImperativeHandle: et,
        useEffect: et,
        useDebugValue: et,
        useResponder: function (t, e) {
          return { props: e, responder: t };
        },
        useDeferredValue: function (t) {
          return J(), t;
        },
        useTransition: function () {
          return (
            J(),
            [
              function (t) {
                t();
              },
              !1,
            ]
          );
        },
      },
      ot = "http://www.w3.org/1999/xhtml";
    function it(t) {
      switch (t) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    var at = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
      ct = n({ menuitem: !0 }, at),
      ut = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      st = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ut).forEach(function (t) {
      st.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (ut[e] = ut[t]);
      });
    });
    var lt = /([A-Z])/g,
      ft = /^ms-/,
      pt = o.Children.toArray,
      ht = O.ReactCurrentDispatcher,
      dt = { listing: !0, pre: !0, textarea: !0 },
      vt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      mt = {},
      yt = {};
    var gt = Object.prototype.hasOwnProperty,
      bt = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null,
        suppressHydrationWarning: null,
      };
    function wt(t, e) {
      if (void 0 === t) throw Error(i(152, _(e) || "Component"));
    }
    function xt(t, e, r) {
      function a(o, a) {
        var c = a.prototype && a.prototype.isReactComponent,
          u = (function (t, e, r, n) {
            if (n && "object" == typeof (n = t.contextType) && null !== n)
              return E(n, r), n[r];
            if ((t = t.contextTypes)) {
              for (var o in ((r = {}), t)) r[o] = e[o];
              e = r;
            } else e = S;
            return e;
          })(a, e, r, c),
          s = [],
          l = !1,
          f = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {
              if (null === s) return null;
            },
            enqueueReplaceState: function (t, e) {
              (l = !0), (s = [e]);
            },
            enqueueSetState: function (t, e) {
              if (null === s) return null;
              s.push(e);
            },
          };
        if (c) {
          if (
            ((c = new a(o.props, u, f)),
            "function" == typeof a.getDerivedStateFromProps)
          ) {
            var p = a.getDerivedStateFromProps.call(null, o.props, c.state);
            null != p && (c.state = n({}, c.state, p));
          }
        } else if (
          ((U = {}),
          (c = a(o.props, u, f)),
          null == (c = K(a, o.props, c, u)) || null == c.render)
        )
          return void wt((t = c), a);
        if (
          ((c.props = o.props),
          (c.context = u),
          (c.updater = f),
          void 0 === (f = c.state) && (c.state = f = null),
          "function" == typeof c.UNSAFE_componentWillMount ||
            "function" == typeof c.componentWillMount)
        )
          if (
            ("function" == typeof c.componentWillMount &&
              "function" != typeof a.getDerivedStateFromProps &&
              c.componentWillMount(),
            "function" == typeof c.UNSAFE_componentWillMount &&
              "function" != typeof a.getDerivedStateFromProps &&
              c.UNSAFE_componentWillMount(),
            s.length)
          ) {
            f = s;
            var h = l;
            if (((s = null), (l = !1), h && 1 === f.length)) c.state = f[0];
            else {
              p = h ? f[0] : c.state;
              var d = !0;
              for (h = h ? 1 : 0; h < f.length; h++) {
                var v = f[h];
                null !=
                  (v = "function" == typeof v ? v.call(c, p, o.props, u) : v) &&
                  (d ? ((d = !1), (p = n({}, p, v))) : n(p, v));
              }
              c.state = p;
            }
          } else s = null;
        if (
          (wt((t = c.render()), a),
          "function" == typeof c.getChildContext &&
            "object" == typeof (o = a.childContextTypes))
        ) {
          var m = c.getChildContext();
          for (var y in m)
            if (!(y in o)) throw Error(i(108, _(a) || "Unknown", y));
        }
        m && (e = n({}, e, m));
      }
      for (; o.isValidElement(t); ) {
        var c = t,
          u = c.type;
        if ("function" != typeof u) break;
        a(c, u);
      }
      return { child: t, context: e };
    }
    var _t = (function () {
        function t(t, e) {
          o.isValidElement(t)
            ? t.type !== u
              ? (t = [t])
              : ((t = t.props.children),
                (t = o.isValidElement(t) ? [t] : pt(t)))
            : (t = pt(t)),
            (t = {
              type: null,
              domNamespace: ot,
              children: t,
              childIndex: 0,
              context: S,
              footer: "",
            });
          var r = k[0];
          if (0 === r) {
            var n = k,
              a = 2 * (r = n.length);
            if (!(65536 >= a)) throw Error(i(304));
            var c = new Uint16Array(a);
            for (c.set(n), (k = c)[0] = r + 1, n = r; n < a - 1; n++)
              k[n] = n + 1;
            k[a - 1] = 0;
          } else k[0] = k[r];
          (this.threadID = r),
            (this.stack = [t]),
            (this.exhausted = !1),
            (this.currentSelectValue = null),
            (this.previousWasTextNode = !1),
            (this.makeStaticMarkup = e),
            (this.suspenseDepth = 0),
            (this.contextIndex = -1),
            (this.contextStack = []),
            (this.contextValueStack = []);
        }
        var e = t.prototype;
        return (
          (e.destroy = function () {
            if (!this.exhausted) {
              (this.exhausted = !0), this.clearProviders();
              var t = this.threadID;
              (k[t] = k[0]), (k[0] = t);
            }
          }),
          (e.pushProvider = function (t) {
            var e = ++this.contextIndex,
              r = t.type._context,
              n = this.threadID;
            E(r, n);
            var o = r[n];
            (this.contextStack[e] = r),
              (this.contextValueStack[e] = o),
              (r[n] = t.props.value);
          }),
          (e.popProvider = function () {
            var t = this.contextIndex,
              e = this.contextStack[t],
              r = this.contextValueStack[t];
            (this.contextStack[t] = null),
              (this.contextValueStack[t] = null),
              this.contextIndex--,
              (e[this.threadID] = r);
          }),
          (e.clearProviders = function () {
            for (var t = this.contextIndex; 0 <= t; t--)
              this.contextStack[t][this.threadID] = this.contextValueStack[t];
          }),
          (e.read = function (t) {
            if (this.exhausted) return null;
            var e = rt;
            rt = this.threadID;
            var r = ht.current;
            ht.current = nt;
            try {
              for (var n = [""], o = !1; n[0].length < t; ) {
                if (0 === this.stack.length) {
                  this.exhausted = !0;
                  var a = this.threadID;
                  (k[a] = k[0]), (k[0] = a);
                  break;
                }
                var c = this.stack[this.stack.length - 1];
                if (o || c.childIndex >= c.children.length) {
                  var u = c.footer;
                  if (
                    ("" !== u && (this.previousWasTextNode = !1),
                    this.stack.pop(),
                    "select" === c.type)
                  )
                    this.currentSelectValue = null;
                  else if (
                    null != c.type &&
                    null != c.type.type &&
                    c.type.type.$$typeof === f
                  )
                    this.popProvider(c.type);
                  else if (c.type === v) {
                    this.suspenseDepth--;
                    var s = n.pop();
                    if (o) {
                      o = !1;
                      var l = c.fallbackFrame;
                      if (!l) throw Error(i(303));
                      this.stack.push(l),
                        (n[this.suspenseDepth] += "\x3c!--$!--\x3e");
                      continue;
                    }
                    n[this.suspenseDepth] += s;
                  }
                  n[this.suspenseDepth] += u;
                } else {
                  var p = c.children[c.childIndex++],
                    h = "";
                  try {
                    h += this.render(p, c.context, c.domNamespace);
                  } catch (t) {
                    if (null != t && "function" == typeof t.then)
                      throw Error(i(294));
                    throw t;
                  }
                  n.length <= this.suspenseDepth && n.push(""),
                    (n[this.suspenseDepth] += h);
                }
              }
              return n[0];
            } finally {
              (ht.current = r), (rt = e);
            }
          }),
          (e.render = function (t, e, r) {
            if ("string" == typeof t || "number" == typeof t)
              return "" === (r = "" + t)
                ? ""
                : this.makeStaticMarkup
                ? M(r)
                : this.previousWasTextNode
                ? "\x3c!-- --\x3e" + M(r)
                : ((this.previousWasTextNode = !0), M(r));
            if (
              ((t = (e = xt(t, e, this.threadID)).child),
              (e = e.context),
              null === t || !1 === t)
            )
              return "";
            if (!o.isValidElement(t)) {
              if (null != t && null != t.$$typeof) {
                if ((r = t.$$typeof) === c) throw Error(i(257));
                throw Error(i(258, r.toString()));
              }
              return (
                (t = pt(t)),
                this.stack.push({
                  type: null,
                  domNamespace: r,
                  children: t,
                  childIndex: 0,
                  context: e,
                  footer: "",
                }),
                ""
              );
            }
            var a = t.type;
            if ("string" == typeof a) return this.renderDOM(t, e, r);
            switch (a) {
              case s:
              case h:
              case l:
              case m:
              case u:
                return (
                  (t = pt(t.props.children)),
                  this.stack.push({
                    type: null,
                    domNamespace: r,
                    children: t,
                    childIndex: 0,
                    context: e,
                    footer: "",
                  }),
                  ""
                );
              case v:
                throw Error(i(294));
            }
            if ("object" == typeof a && null !== a)
              switch (a.$$typeof) {
                case d:
                  U = {};
                  var b = a.render(t.props, t.ref);
                  return (
                    (b = K(a.render, t.props, b, t.ref)),
                    (b = pt(b)),
                    this.stack.push({
                      type: null,
                      domNamespace: r,
                      children: b,
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    ""
                  );
                case y:
                  return (
                    (t = [o.createElement(a.type, n({ ref: t.ref }, t.props))]),
                    this.stack.push({
                      type: null,
                      domNamespace: r,
                      children: t,
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    ""
                  );
                case f:
                  return (
                    (r = {
                      type: t,
                      domNamespace: r,
                      children: (a = pt(t.props.children)),
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    this.pushProvider(t),
                    this.stack.push(r),
                    ""
                  );
                case p:
                  (a = t.type), (b = t.props);
                  var _ = this.threadID;
                  return (
                    E(a, _),
                    (a = pt(b.children(a[_]))),
                    this.stack.push({
                      type: t,
                      domNamespace: r,
                      children: a,
                      childIndex: 0,
                      context: e,
                      footer: "",
                    }),
                    ""
                  );
                case w:
                  throw Error(i(338));
                case g:
                  switch (
                    ((function (t) {
                      if (-1 === t._status) {
                        t._status = 0;
                        var e = t._ctor;
                        (e = e()),
                          (t._result = e),
                          e.then(
                            function (e) {
                              0 === t._status &&
                                ((e = e.default),
                                (t._status = 1),
                                (t._result = e));
                            },
                            function (e) {
                              0 === t._status &&
                                ((t._status = 2), (t._result = e));
                            }
                          );
                      }
                    })((a = t.type)),
                    a._status)
                  ) {
                    case 1:
                      return (
                        (t = [
                          o.createElement(
                            a._result,
                            n({ ref: t.ref }, t.props)
                          ),
                        ]),
                        this.stack.push({
                          type: null,
                          domNamespace: r,
                          children: t,
                          childIndex: 0,
                          context: e,
                          footer: "",
                        }),
                        ""
                      );
                    case 2:
                      throw a._result;
                    default:
                      throw Error(i(295));
                  }
                case x:
                  throw Error(i(343));
              }
            throw Error(i(130, null == a ? a : typeof a, ""));
          }),
          (e.renderDOM = function (t, e, r) {
            var a = t.type.toLowerCase();
            if ((r === ot && it(a), !mt.hasOwnProperty(a))) {
              if (!vt.test(a)) throw Error(i(65, a));
              mt[a] = !0;
            }
            var c = t.props;
            if ("input" === a)
              c = n({ type: void 0 }, c, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != c.value ? c.value : c.defaultValue,
                checked: null != c.checked ? c.checked : c.defaultChecked,
              });
            else if ("textarea" === a) {
              var u = c.value;
              if (null == u) {
                u = c.defaultValue;
                var s = c.children;
                if (null != s) {
                  if (null != u) throw Error(i(92));
                  if (Array.isArray(s)) {
                    if (!(1 >= s.length)) throw Error(i(93));
                    s = s[0];
                  }
                  u = "" + s;
                }
                null == u && (u = "");
              }
              c = n({}, c, { value: void 0, children: "" + u });
            } else if ("select" === a)
              (this.currentSelectValue =
                null != c.value ? c.value : c.defaultValue),
                (c = n({}, c, { value: void 0 }));
            else if ("option" === a) {
              s = this.currentSelectValue;
              var l = (function (t) {
                if (null == t) return t;
                var e = "";
                return (
                  o.Children.forEach(t, function (t) {
                    null != t && (e += t);
                  }),
                  e
                );
              })(c.children);
              if (null != s) {
                var f = null != c.value ? c.value + "" : l;
                if (((u = !1), Array.isArray(s))) {
                  for (var p = 0; p < s.length; p++)
                    if ("" + s[p] === f) {
                      u = !0;
                      break;
                    }
                } else u = "" + s === f;
                c = n({ selected: void 0, children: void 0 }, c, {
                  selected: u,
                  children: l,
                });
              }
            }
            if ((u = c)) {
              if (
                ct[a] &&
                (null != u.children || null != u.dangerouslySetInnerHTML)
              )
                throw Error(i(137, a, ""));
              if (null != u.dangerouslySetInnerHTML) {
                if (null != u.children) throw Error(i(60));
                if (
                  "object" != typeof u.dangerouslySetInnerHTML ||
                  !("__html" in u.dangerouslySetInnerHTML)
                )
                  throw Error(i(61));
              }
              if (null != u.style && "object" != typeof u.style)
                throw Error(i(62, ""));
            }
            for (w in ((u = c),
            (s = this.makeStaticMarkup),
            (l = 1 === this.stack.length),
            (f = "<" + t.type),
            u))
              if (gt.call(u, w)) {
                var h = u[w];
                if (null != h) {
                  if ("style" === w) {
                    p = void 0;
                    var d = "",
                      v = "";
                    for (p in h)
                      if (h.hasOwnProperty(p)) {
                        var m = 0 === p.indexOf("--"),
                          y = h[p];
                        if (null != y) {
                          if (m) var g = p;
                          else if (((g = p), yt.hasOwnProperty(g))) g = yt[g];
                          else {
                            var b = g
                              .replace(lt, "-$1")
                              .toLowerCase()
                              .replace(ft, "-ms-");
                            g = yt[g] = b;
                          }
                          (d += v + g + ":"),
                            (v = p),
                            (d += m =
                              null == y || "boolean" == typeof y || "" === y
                                ? ""
                                : m ||
                                  "number" != typeof y ||
                                  0 === y ||
                                  (ut.hasOwnProperty(v) && ut[v])
                                ? ("" + y).trim()
                                : y + "px"),
                            (v = ";");
                        }
                      }
                    h = d || null;
                  }
                  p = null;
                  t: if (((m = a), (y = u), -1 === m.indexOf("-")))
                    m = "string" == typeof y.is;
                  else
                    switch (m) {
                      case "annotation-xml":
                      case "color-profile":
                      case "font-face":
                      case "font-face-src":
                      case "font-face-uri":
                      case "font-face-format":
                      case "font-face-name":
                      case "missing-glyph":
                        m = !1;
                        break t;
                      default:
                        m = !0;
                    }
                  m
                    ? bt.hasOwnProperty(w) ||
                      (p = T((p = w)) && null != h ? p + '="' + M(h) + '"' : "")
                    : (p = q(w, h)),
                    p && (f += " " + p);
                }
              }
            s || (l && (f += ' data-reactroot=""'));
            var w = f;
            (u = ""),
              at.hasOwnProperty(a)
                ? (w += "/>")
                : ((w += ">"), (u = "</" + t.type + ">"));
            t: {
              if (null != (s = c.dangerouslySetInnerHTML)) {
                if (null != s.__html) {
                  s = s.__html;
                  break t;
                }
              } else if (
                "string" == typeof (s = c.children) ||
                "number" == typeof s
              ) {
                s = M(s);
                break t;
              }
              s = null;
            }
            return (
              null != s
                ? ((c = []),
                  dt.hasOwnProperty(a) && "\n" === s.charAt(0) && (w += "\n"),
                  (w += s))
                : (c = pt(c.children)),
              (t = t.type),
              (r =
                null == r || "http://www.w3.org/1999/xhtml" === r
                  ? it(t)
                  : "http://www.w3.org/2000/svg" === r && "foreignObject" === t
                  ? "http://www.w3.org/1999/xhtml"
                  : r),
              this.stack.push({
                domNamespace: r,
                type: a,
                children: c,
                childIndex: 0,
                context: e,
                footer: u,
              }),
              (this.previousWasTextNode = !1),
              w
            );
          }),
          t
        );
      })(),
      Ot = {
        renderToString: function (t) {
          t = new _t(t, !1);
          try {
            return t.read(1 / 0);
          } finally {
            t.destroy();
          }
        },
        renderToStaticMarkup: function (t) {
          t = new _t(t, !0);
          try {
            return t.read(1 / 0);
          } finally {
            t.destroy();
          }
        },
        renderToNodeStream: function () {
          throw Error(i(207));
        },
        renderToStaticNodeStream: function () {
          throw Error(i(208));
        },
        version: "16.14.0",
      };
    t.exports = Ot.default || Ot;
  },
  function (t, e, r) {
    var n = r(54).default;
    function o() {
      "use strict";
      (t.exports = o =
        function () {
          return e;
        }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
      var e = {},
        r = Object.prototype,
        i = r.hasOwnProperty,
        a =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        c = "function" == typeof Symbol ? Symbol : {},
        u = c.iterator || "@@iterator",
        s = c.asyncIterator || "@@asyncIterator",
        l = c.toStringTag || "@@toStringTag";
      function f(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        f({}, "");
      } catch (t) {
        f = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function p(t, e, r, n) {
        var o = e && e.prototype instanceof v ? e : v,
          i = Object.create(o.prototype),
          c = new P(n || []);
        return a(i, "_invoke", { value: S(t, r, c) }), i;
      }
      function h(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = p;
      var d = {};
      function v() {}
      function m() {}
      function y() {}
      var g = {};
      f(g, u, function () {
        return this;
      });
      var b = Object.getPrototypeOf,
        w = b && b(b(L([])));
      w && w !== r && i.call(w, u) && (g = w);
      var x = (y.prototype = v.prototype = Object.create(g));
      function _(t) {
        ["next", "throw", "return"].forEach(function (e) {
          f(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function O(t, e) {
        function r(o, a, c, u) {
          var s = h(t[o], t, a);
          if ("throw" !== s.type) {
            var l = s.arg,
              f = l.value;
            return f && "object" == n(f) && i.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    r("next", t, c, u);
                  },
                  function (t) {
                    r("throw", t, c, u);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (l.value = t), c(l);
                  },
                  function (t) {
                    return r("throw", t, c, u);
                  }
                );
          }
          u(s.arg);
        }
        var o;
        a(this, "_invoke", {
          value: function (t, n) {
            function i() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          },
        });
      }
      function S(t, e, r) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return C();
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var c = E(a, r);
              if (c) {
                if (c === d) continue;
                return c;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var u = h(t, e, r);
            if ("normal" === u.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), u.arg === d))
                continue;
              return { value: u.arg, done: r.done };
            }
            "throw" === u.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
          }
        };
      }
      function E(t, e) {
        var r = e.method,
          n = t.iterator[r];
        if (void 0 === n)
          return (
            (e.delegate = null),
            ("throw" === r &&
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              E(t, e),
              "throw" === e.method)) ||
              ("return" !== r &&
                ((e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            d
          );
        var o = h(n, t.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d;
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              d)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            d);
      }
      function k(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function j(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function P(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(k, this),
          this.reset(!0);
      }
      function L(t) {
        if (t) {
          var e = t[u];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              n = function e() {
                for (; ++r < t.length; )
                  if (i.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (n.next = n);
          }
        }
        return { next: C };
      }
      function C() {
        return { value: void 0, done: !0 };
      }
      return (
        (m.prototype = y),
        a(x, "constructor", { value: y, configurable: !0 }),
        a(y, "constructor", { value: m, configurable: !0 }),
        (m.displayName = f(y, l, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === m || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, y)
              : ((t.__proto__ = y), f(t, l, "GeneratorFunction")),
            (t.prototype = Object.create(x)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        _(O.prototype),
        f(O.prototype, s, function () {
          return this;
        }),
        (e.AsyncIterator = O),
        (e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new O(p(t, r, n, o), i);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        _(x),
        f(x, l, "Generator"),
        f(x, u, function () {
          return this;
        }),
        f(x, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (e.values = L),
        (P.prototype = {
          constructor: P,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(j),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  i.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function r(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n],
                a = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var c = i.call(o, "catchLoc"),
                  u = i.call(o, "finallyLoc");
                if (c && u) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                i.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              d
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), j(r), d;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  j(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: L(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              d
            );
          },
        }),
        e
      );
    }
    (t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(2),
      i = r(55),
      a = r(14),
      c = r(115),
      u = o([].join);
    n(
      { target: "Array", proto: !0, forced: i != Object || !c("join", ",") },
      {
        join: function (t) {
          return u(a(this), void 0 === t ? "," : t);
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(6),
      o = r(52).map;
    n(
      { target: "Array", proto: !0, forced: !r(114)("map") },
      {
        map: function (t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(10),
      o = r(47).EXISTS,
      i = r(2),
      a = r(70),
      c = Function.prototype,
      u = i(c.toString),
      s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
      l = i(s.exec);
    n &&
      !o &&
      a(c, "name", {
        configurable: !0,
        get: function () {
          try {
            return l(s, u(this))[1];
          } catch (t) {
            return "";
          }
        },
      });
  },
  function (t, e, r) {
    "use strict";
    var n = r(47).PROPER,
      o = r(19),
      i = r(11),
      a = r(24),
      c = r(3),
      u = r(190),
      s = "toString",
      l = RegExp.prototype[s],
      f = c(function () {
        return "/a/b" != l.call({ source: "a", flags: "b" });
      }),
      p = n && l.name != s;
    (f || p) &&
      o(
        RegExp.prototype,
        s,
        function () {
          var t = i(this);
          return "/" + a(t.source) + "/" + a(u(t));
        },
        { unsafe: !0 }
      );
  },
  function (t, e, r) {
    var n = r(8),
      o = r(7),
      i = r(28),
      a = r(191),
      c = RegExp.prototype;
    t.exports = function (t) {
      var e = t.flags;
      return void 0 !== e || "flags" in c || o(t, "flags") || !i(c, t)
        ? e
        : n(a, t);
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(11);
    t.exports = function () {
      var t = n(this),
        e = "";
      return (
        t.hasIndices && (e += "d"),
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.unicodeSets && (e += "v"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, r) {
    "use strict";
    r.r(e);
    var n,
      o,
      i,
      a,
      c,
      u = r(12),
      s = r.n(u),
      l = r(25),
      f = r.n(l),
      p =
        (r(79),
        r(68),
        r(97),
        r(166),
        r(168),
        r(72),
        r(73),
        r(74),
        r(75),
        r(76),
        r(77),
        r(0)),
      h = r.n(p),
      d = r(117),
      v = r.n(d),
      m = r(118),
      y = r.n(m),
      g = r(53);
    !(function (t) {
      (t.Sonic = "sonic"), (t.Util = "util");
    })(n || (n = {})),
      (function (t) {
        (t.GetHeader = "getHeader"),
          (t.RenderHtml = "renderHtml"),
          (t.RenderData = "renderData");
      })(o || (o = {})),
      (function (t) {
        (t.Log = "log"), (t.Request = "request");
      })(i || (i = {})),
      (function (t) {
        (t[(t.Success = 0)] = "Success"),
          (t[(t.Fail = 1)] = "Fail"),
          (t[(t.ExecuteFail = -1)] = "ExecuteFail");
      })(a || (a = {})),
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Init = 1)] = "Init"),
          (t[(t.TemplateChanged = 2)] = "TemplateChanged"),
          (t[(t.TemplateNotChanged = 3)] = "TemplateNotChanged");
      })(c || (c = {}));
    var b,
      w = function (t) {
        try {
          return JSON.parse(t);
        } catch (t) {
          return { code: a.Fail, message: "JOSNæ ¼å¼é”™è¯¯", data: {} };
        }
      };
    !(function (t) {
      (t[(t.Debug = 0)] = "Debug"),
        (t[(t.Info = 1)] = "Info"),
        (t[(t.Error = 2)] = "Error");
    })(b || (b = {}));
    var x,
      _ = function (t) {
        for (
          var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1;
          o < e;
          o++
        )
          r[o - 1] = arguments[o];
        var a = {
          level: t,
          message: (r || [])
            .map(function (t) {
              return "string" != typeof t ? JSON.stringify(t) : t;
            })
            .join(","),
        };
        sonicNativeBridgeCore.invoke(n.Util, i.Log, a);
      },
      O = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        _.apply(void 0, [b.Info].concat(e));
      },
      S = function (t, e, r, o) {
        var c = (o || {}).headers,
          u = {
            url: t,
            method: e,
            headers: void 0 === c ? {} : c,
            body: r || {},
          };
        return new Promise(function (e, r) {
          sonicNativeBridgeCore.invoke(n.Util, i.Request, u, function (n) {
            O("ðŸš€", t, n);
            var o = w(n),
              i = o.code,
              c = o.message,
              u = o.data;
            (i === a.Success && u) ||
              r({
                code: i,
                message:
                  null != c ? c : "ðŸ’¥ æ‰§è¡Œ sonic request æ–¹æ³•å¤±è´¥",
              }),
              e(u);
          });
        });
      },
      E = function () {
        return (
          x ||
            (x = new Promise(function (t, e) {
              sonicNativeBridgeCore.invoke(
                n.Sonic,
                o.GetHeader,
                {},
                function (r) {
                  var n = w(r),
                    o = n.code,
                    i = n.message,
                    c = n.data;
                  i && e({ code: a.Fail, message: i }),
                    (o === a.Success && c) ||
                      e({
                        code: o,
                        message:
                          null != i ? i : "ðŸ’¥ æ‰§è¡Œ getHeader æ–¹æ³•å¤±è´¥",
                      }),
                    O(
                      "ðŸš€ ~ file: getHeader.ts ~ line 44 ~ sonicNativeBridgeCore.invoke ~ data",
                      JSON.stringify(c)
                    ),
                    t(c);
                }
              );
            })),
          x
        );
      };
    var k = function (t, e) {
        if (!t || !e) return "";
        try {
          var r = e.match(RegExp("(^|;\\s*)".concat(t, "=([^;]*)(;|$)")));
          if (r)
            return (function (t) {
              var e = t;
              if (!e) return e;
              e !== decodeURIComponent(e) && (e = decodeURIComponent(e));
              for (
                var r = [
                    "<",
                    ">",
                    "'",
                    '"',
                    "%3c",
                    "%3e",
                    "%27",
                    "%22",
                    "%253c",
                    "%253e",
                    "%2527",
                    "%2522",
                  ],
                  n = [
                    "&#x3c;",
                    "&#x3e;",
                    "&#x27;",
                    "&#x22;",
                    "%26%23x3c%3B",
                    "%26%23x3e%3B",
                    "%26%23x27%3B",
                    "%26%23x22%3B",
                    "%2526%2523x3c%253B",
                    "%2526%2523x3e%253B",
                    "%2526%2523x27%253B",
                    "%2526%2523x22%253B",
                  ],
                  o = 0;
                o < r.length;
                o += 1
              )
                e = e.replace(new RegExp(r[o], "gi"), n[o]);
              return e;
            })(decodeURIComponent(r ? r[2] : ""));
        } catch (t) {
          return "";
        }
      },
      j = function (t) {
        var e,
          r = k("login_type", t);
        return (
          (e = k("2" === r ? "wxuin" : "uin", t)) || (e = k("p_uin", t)),
          e &&
            (0 === e.indexOf("o") && (e = e.substring(1, e.length)),
            !/^\d+$/.test(e) || +e < 1e4
              ? (e = 0)
              : e.length < 14 && (e = parseInt(e, 10))),
          e || ""
        );
      };
    function P(t, e) {
      var r = {},
        n = {};
      if (!t) return { os: r, browser: n };
      var o = t,
        i = o.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        a = o.match(/(Android);?[\s\/]+([\d.]+)?/),
        c = !!o.match(/\(Macintosh\; Intel /),
        u = o.match(/(iPad).*OS\s([\d_]+)/),
        s = o.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !u && o.match(/(iPhone\sOS)\s([\d_]+)/),
        f = o.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        p = /Win\d{2}|Windows/.test(e),
        h = o.match(/(Windows Phone|Windows Phone OS) ([\d.]+)/),
        d = f && o.match(/TouchPad/),
        v = o.match(/Kindle\/([\d.]+)/),
        m = o.match(/Silk\/([\d._]+)/),
        y = o.match(/(BlackBerry).*Version\/([\d.]+)/),
        g = o.match(/(BB10).*Version\/([\d.]+)/),
        b = o.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        w = o.match(/PlayBook/),
        x = o.match(/Chrome\/([\d.]+)/) || o.match(/CriOS\/([\d.]+)/),
        _ = o.match(/Firefox\/([\d.]+)/),
        O = o.match(/(?:Mobile|Tablet); rv:([\d.]+).*Firefox\/[\d.]+/),
        S =
          o.match(/MSIE\s([\d.]+)/) ||
          o.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        E = !x && o.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        k =
          E ||
          o.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
      return (
        (n.webkit = !!i) && (n.version = i[1]),
        a && ((r.android = !0), (r.version = a[2])),
        l &&
          !s &&
          ((r.ios = r.iphone = !0), (r.version = l[2].replace(/_/g, "."))),
        u && ((r.ios = r.ipad = !0), (r.version = u[2].replace(/_/g, "."))),
        s &&
          ((r.ios = r.ipod = !0),
          (r.version = s[3] ? s[3].replace(/_/g, ".") : null)),
        h && ((r.wp = !0), (r.version = h[2])),
        f && ((r.webos = !0), (r.version = f[2])),
        d && (r.touchpad = !0),
        y && ((r.blackberry = !0), (r.version = y[2])),
        g && ((r.bb10 = !0), (r.version = g[2])),
        b && ((r.rimtabletos = !0), (r.version = b[2])),
        w && (n.playbook = !0),
        v && ((r.kindle = !0), (r.version = v[1])),
        m && ((n.silk = !0), (n.version = m[1])),
        !m && r.android && o.match(/Kindle Fire/) && (n.silk = !0),
        x && ((n.chrome = !0), (n.version = x[1])),
        _ && ((n.firefox = !0), (n.version = _[1])),
        O && ((r.firefoxos = !0), (r.version = O[1])),
        S && ((n.ie = !0), (n.version = S[1])),
        k &&
          (c || r.ios || p) &&
          ((n.safari = !0), r.ios || (n.version = k[1])),
        E && (n.webview = !0),
        (r.tablet = !!(
          u ||
          w ||
          (v && r.version >= 3) ||
          (m &&
            o.match(
              /Silk.*Accelerated|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)/
            )) ||
          (a && !o.match(/Mobile/)) ||
          (_ && o.match(/Tablet/)) ||
          d ||
          (S && !o.match(/Phone/) && o.match(/Touch/))
        )),
        (r.phone = !(
          r.tablet ||
          r.ipod ||
          !(
            a ||
            l ||
            f ||
            y ||
            g ||
            h ||
            (x && o.match(/Android/)) ||
            (x && o.match(/CriOS\/([\d.]+)/)) ||
            (_ && o.match(/Mobile/)) ||
            (S && o.match(/Touch/))
          )
        )),
        { os: r, browser: n }
      );
    }
    var L = function (t) {
        try {
          var e;
          return (
            (null === (e = P(t, "")) || void 0 === e ? void 0 : e.os) || {}
          );
        } catch (t) {
          return {};
        }
      },
      C = function (t, e) {
        var r = e || "";
        if (!r) return "";
        var n = (r || location.href).split("#")[0],
          o = new RegExp("(\\?|&)".concat(t, "=(.*?)(#|&|$)"), "i"),
          i = n.match(o);
        return decodeURIComponent(i ? i[2] : "");
      };
    function N() {
      N = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return E();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = w(a, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = s(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var d = {};
      c(d, o, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        m = v && v(v(S([])));
      m && m !== e && r.call(m, o) && (d = m);
      var y = (h.prototype = f.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(t, e) {
        function n(o, i, a, c) {
          var u = s(t[o], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              f = l.value;
            return f && "object" == typeof f && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (l.value = t), a(l);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (t, r) {
          function i() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = s(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function S(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = h),
        c(y, "constructor", h),
        c(h, "constructor", p),
        (p.displayName = c(h, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(b.prototype),
        c(b.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(y),
        c(y, a, "Generator"),
        c(y, o, function () {
          return this;
        }),
        c(y, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function T(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    function I(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            T(i, n, o, a, c, "next", t);
          }
          function c(t) {
            T(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var A = (function () {
        var t = I(
          N().mark(function t() {
            var e, r, n, o, i;
            return N().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), E();
                  case 2:
                    return (
                      (r = t.sent),
                      (t.next = 5),
                      L((null == r ? void 0 : r.Cookie) || "")
                    );
                  case 5:
                    return (
                      (n = t.sent),
                      (o = (null == r ? void 0 : r["User-Agent"]) || ""),
                      (i =
                        null != n && n.ios
                          ? o.match(/(?:iPad).*OS\s([\d_]+)/) ||
                            o.match(/(?:iPod)(?:.*OS\s([\d_]+))?/) ||
                            o.match(/(?:iPhone\sOS)\s([\d_]+)/)
                          : o.match(/(?:Android);?[\s\/]+([\d.]+)?/)),
                      t.abrupt(
                        "return",
                        i
                          ? null === (e = i) || void 0 === e
                            ? void 0
                            : e[1]
                          : ""
                      )
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      F = (function () {
        var t = I(
          N().mark(function t() {
            var e, r, n;
            return N().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), E();
                  case 2:
                    return (
                      (e = t.sent),
                      (r = (null == e ? void 0 : e["User-Agent"]) || ""),
                      (n = r.match(/QQMUSIC\/(\d[\.\d]*)/i)),
                      t.abrupt("return", n ? n[1] : "")
                    );
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      R = (function () {
        var t = I(
          N().mark(function t() {
            var e, r, n;
            return N().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), E();
                  case 2:
                    return (
                      (e = t.sent),
                      (r = (null == e ? void 0 : e["User-Agent"]) || ""),
                      (n = r.match(/\bNetType\/(\w+)/i)),
                      t.abrupt("return", n ? n[1] : "unknown")
                    );
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      D = (function () {
        var t = I(
          N().mark(function t() {
            var e, r, n, o, i, a, c, u, s, l, f;
            return N().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), E();
                  case 2:
                    return (
                      (e = t.sent),
                      (r = e.Cookie),
                      (n = e.referer),
                      (t.next = 7),
                      j(r)
                    );
                  case 7:
                    return (o = t.sent), (t.next = 10), L(r);
                  case 10:
                    return (i = t.sent), (t.next = 13), k("login_type", r);
                  case 13:
                    return (a = t.sent), (t.next = 16), A();
                  case 16:
                    return (c = t.sent), (t.next = 19), F();
                  case 19:
                    return (u = t.sent), (t.next = 22), C("channelId", n);
                  case 22:
                    return (s = t.sent), (t.next = 25), R();
                  case 25:
                    return (
                      (l = t.sent),
                      (f = {
                        _appid: "qqmusic",
                        _uid: o,
                        _platform: null != i && i.ios ? 1 : 11,
                        _account_source: a,
                        _os_version: c || "",
                        _app_version: u || "",
                        _channelid: s,
                        _os: null != i && i.ios ? "ios" : "android",
                        _app: "music",
                        _opertime: ((Date.now() / 1e3) | 0).toString(),
                        _network_type: (l || "").toLocaleLowerCase(),
                      }),
                      t.abrupt("return", f)
                    );
                  case 28:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
    function M() {
      M = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return E();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = w(a, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = s(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var d = {};
      c(d, o, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        m = v && v(v(S([])));
      m && m !== e && r.call(m, o) && (d = m);
      var y = (h.prototype = f.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(t, e) {
        function n(o, i, a, c) {
          var u = s(t[o], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              f = l.value;
            return f && "object" == typeof f && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (l.value = t), a(l);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (t, r) {
          function i() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = s(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function S(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = h),
        c(y, "constructor", h),
        c(h, "constructor", p),
        (p.displayName = c(h, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(b.prototype),
        c(b.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(y),
        c(y, a, "Generator"),
        c(y, o, function () {
          return this;
        }),
        c(y, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function q(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function G(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? q(Object(r), !0).forEach(function (e) {
              U(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : q(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function U(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function H(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    function B(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            H(i, n, o, a, c, "next", t);
          }
          function c(t) {
            H(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var $ = (function () {
        var t = B(
          M().mark(function t(e) {
            var r, n, o, i;
            return M().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), D();
                  case 2:
                    return (r = t.sent), (t.next = 5), E();
                  case 5:
                    (n = t.sent),
                      (o = [
                        G(
                          {
                            _key: "web_error",
                            _opertime: ((Date.now() / 1e3) | 0).toString(),
                          },
                          e
                        ),
                      ]),
                      (i = {
                        Cookie: n.Cookie,
                        "User-Agent": n["User-Agent"],
                        "Content-Type": "text/plain;charset=UTF-8",
                      }),
                      O(
                        "ðŸš€ ~ file: reportError.ts ~ line 19 ~ send ~ JSON.stringify({ common, items })",
                        JSON.stringify({ common: r, items: o })
                      ),
                      S(
                        "https://stat6.y.qq.com/sdk/fcgi-bin/sdk.fcg",
                        "POST",
                        JSON.stringify({ common: r, items: o }),
                        { headers: i }
                      );
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      z = (function () {
        var t = B(
          M().mark(function t(e, r) {
            var n, o, i, a, c, u;
            return M().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = /(http|https):\/\/(.*?)(\/.*?)(\?.*)/gi),
                      (t.next = 3),
                      E()
                    );
                  case 3:
                    (o = t.sent),
                      (i = (null == o ? void 0 : o.referer) || ""),
                      (a = n.exec(i)),
                      (c = null == o ? void 0 : o.traceId),
                      (u = G(
                        {
                          protocol: (null == a ? void 0 : a[1]) || "",
                          host: (null == a ? void 0 : a[2]) || "",
                          pathname: (null == a ? void 0 : a[3]) || "",
                          search: (null == a ? void 0 : a[4]) || "",
                          message: encodeURIComponent(e),
                          fqm_id: "0ddad32e-1486-48a3-b48d-5e28e9eb69fc",
                          tracer_id: c,
                        },
                        r
                      )),
                      $(u);
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e, r) {
          return t.apply(this, arguments);
        };
      })(),
      V = function (t) {
        if (t.stack) {
          var e = (function (t) {
            try {
              if (t.stack) {
                var e = t.stack.match("https?://[^\n]+"),
                  r = e ? e[0] : "",
                  n = r.match(":(\\d+):(\\d+)");
                n || (n = [0, 0, 0]);
                var o = (function (t) {
                  var e = t.stack
                      .replace(/\n/gi, "")
                      .split(/\bat\b/)
                      .slice(0, 100)
                      .join("@")
                      .replace(/\?[^:]+/gi, ""),
                    r = t.toString();
                  return (
                    e.indexOf(r) < 0 && (e = "".concat(r, "@").concat(e)), e
                  );
                })(t);
                return {
                  msg: o,
                  rowNum: n[1],
                  colNum: n[2],
                  fileName: r.replace(n[0], ""),
                };
              }
              return t.name && t.message
                ? { msg: JSON.stringify(t) }
                : {
                    msg:
                      (null == t ? void 0 : t.message) || "unhandledrejection",
                    rowNum: 0,
                    colNum: 0,
                    fileName: "",
                  };
            } catch (t) {
              return {
                msg: "unhandledrejection",
                rowNum: 0,
                colNum: 0,
                fileName: "",
              };
            }
          })(t);
          z(t.message || e.msg, {
            line: e.rowNum || "",
            colunm: e.colNum || "",
            file_host: "",
            file_pathname: "",
            file_search: "",
            stack: e.msg || t.message || "unhandledrejection",
          });
        } else
          z(t.message || "unhandledrejection", {
            line: "",
            colunm: "",
            file_host: "",
            file_pathname: "",
            file_search: "",
            stack: t.message || "unhandledrejection",
          });
      };
    function W() {
      W = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return E();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = w(a, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = s(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var d = {};
      c(d, o, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        m = v && v(v(S([])));
      m && m !== e && r.call(m, o) && (d = m);
      var y = (h.prototype = f.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(t, e) {
        function n(o, i, a, c) {
          var u = s(t[o], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              f = l.value;
            return f && "object" == typeof f && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (l.value = t), a(l);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (t, r) {
          function i() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = s(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function S(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = h),
        c(y, "constructor", h),
        c(h, "constructor", p),
        (p.displayName = c(h, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(b.prototype),
        c(b.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(y),
        c(y, a, "Generator"),
        c(y, o, function () {
          return this;
        }),
        c(y, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function J(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    var Y = (function () {
      var t,
        e =
          ((t = W().mark(function t() {
            var e, r, n, o, i;
            return W().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), E();
                    case 3:
                      if (
                        ((e = t.sent),
                        (r = e["User-Agent"]),
                        (n = r.match(/(iPad).*OS\s([\d_]+)/)),
                        (o = !n && r.match(/(iPhone\sOS)\s([\d_]+)/)),
                        (i = r.match(/(iPod)(.*OS\s([\d_]+))?/)),
                        !(o || n || i))
                      ) {
                        t.next = 10;
                        break;
                      }
                      return t.abrupt("return", !0);
                    case 10:
                      return t.abrupt("return", !1);
                    case 13:
                      return (
                        (t.prev = 13),
                        (t.t0 = t.catch(0)),
                        t.abrupt("return", !1)
                      );
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 13]]
            );
          })),
          function () {
            var e = this,
              r = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(e, r);
              function a(t) {
                J(i, n, o, a, c, "next", t);
              }
              function c(t) {
                J(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          });
      return function () {
        return e.apply(this, arguments);
      };
    })();
    function Q() {
      Q = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return E();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = w(a, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = s(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var d = {};
      c(d, o, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        m = v && v(v(S([])));
      m && m !== e && r.call(m, o) && (d = m);
      var y = (h.prototype = f.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(t, e) {
        function n(o, i, a, c) {
          var u = s(t[o], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              f = l.value;
            return f && "object" == typeof f && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (l.value = t), a(l);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (t, r) {
          function i() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = s(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function S(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = h),
        c(y, "constructor", h),
        c(h, "constructor", p),
        (p.displayName = c(h, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(b.prototype),
        c(b.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(y),
        c(y, a, "Generator"),
        c(y, o, function () {
          return this;
        }),
        c(y, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function K(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    function Z(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            K(i, n, o, a, c, "next", t);
          }
          function c(t) {
            K(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var X = function (t, e) {
        O(
          "ðŸš€ ~ file: renderHtml.ts ~ line 28 ~ useWebRender ~ error",
          null == e ? void 0 : e.toString()
        ),
          V(e),
          sonicNativeBridgeCore.invoke(n.Sonic, o.RenderHtml, {
            body: t,
            statusCode: 200,
            header: { sonicMode: c.None },
          });
      },
      tt = (function () {
        var t = Z(
          Q().mark(function t(e, r, n, o) {
            return Q().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (n) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return", c.Init);
                  case 2:
                    if (e === r) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return", c.TemplateChanged);
                  case 4:
                    if (n === o) {
                      t.next = 6;
                      break;
                    }
                    return t.abrupt("return", c.TemplateNotChanged);
                  case 6:
                    return t.abrupt("return", c.TemplateNotChanged);
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e, r, n, o) {
          return t.apply(this, arguments);
        };
      })(),
      et = (function () {
        var t = Z(
          Q().mark(function t(e, r, i, a) {
            var u, s, l, f, p, h, d, v, m, y, g;
            return Q().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (u = (a || {}).needRenderData),
                        (s = void 0 === u || u),
                        (t.next = 4),
                        Y()
                      );
                    case 4:
                      return t.sent, (t.next = 7), E();
                    case 7:
                      return (
                        (l = t.sent),
                        (f = l.sonic),
                        (p = null == f ? void 0 : f.eTag),
                        (h = null == f ? void 0 : f["template-tag"]),
                        (d =
                          /src\=\"[^\"]*\/[A-Za-z|.]{4,20}\.([0-9A-Za-z]{6,20})\.js/g.exec(
                            e
                          )),
                        (v = ""
                          .concat((d && d[1]) || "", "_")
                          .concat(i.length)),
                        (m = ""
                          .concat(v, "_")
                          .concat(e.length, "_")
                          .concat(i.length)),
                        (t.next = 16),
                        tt(h, v, p, m)
                      );
                    case 16:
                      (y = t.sent),
                        O(
                          "ðŸš€ ~ file: renderHtml.ts ~ line 148 ~ renderHtml ~ sonicMode",
                          "".concat(y)
                        ),
                        (g = {
                          header: {
                            "accept-diff": "1",
                            debugSonicMode: "0",
                            sonicMode: y,
                            "template-tag": v,
                            eTag: m,
                            "sonic-link": "",
                            "Cache-Offline":
                              "false" === f.refresh ? "store" : "true",
                            diffts: "".concat(Date.now()),
                            "template-change":
                              y === c.TemplateChanged ? "true" : "false",
                            "Content-Type": "text/html; charset=utf-8",
                          },
                        }),
                        [c.Init, c.TemplateChanged].includes(y)
                          ? ((g.body = e), (g.statusCode = 200))
                          : ((g.body = { data: r, template: e }),
                            (g.statusCode = p === m ? 304 : 200)),
                        console.log(
                          "ðŸš€ ~ file: renderHtml.ts:105 ~ renderHtml ~ renderHtmlParams.statusCode",
                          "".concat(g.statusCode)
                        ),
                        (g.header["cache-mode"] = s ? "0" : "1"),
                        sonicNativeBridgeCore.invoke(n.Sonic, o.RenderHtml, g),
                        (t.next = 28);
                      break;
                    case 25:
                      (t.prev = 25), (t.t0 = t.catch(0)), X(i, t.t0);
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 25]]
            );
          })
        );
        return function (e, r, n, o) {
          return t.apply(this, arguments);
        };
      })(),
      rt = function (t) {
        sonicNativeBridgeCore.invoke(n.Sonic, o.RenderData, { data: t });
      };
    function nt(t) {
      return Object.prototype.toString.call(t);
    }
    function ot(t) {
      return "[object Array]" === nt(t);
    }
    function it(t) {
      return (
        !!(function (t) {
          var e = typeof t;
          return null != t && ("object" === e || "function" === e);
        })(t) && "[object Function]" === nt(t)
      );
    }
    function at(t) {
      return null != t && "object" == typeof t;
    }
    var ct =
      Number.isFinite ||
      function (t) {
        return "number" == typeof t && ct(t);
      };
    function ut(t) {
      return Function.prototype.toString.call(t);
    }
    function st(t) {
      if (!at(t) || "[object Object]" !== nt(t)) return !1;
      var e = Object.getPrototypeOf(t);
      if (null === e) return !0;
      var r =
        Object.prototype.hasOwnProperty.call(e, "constructor") && e.constructor;
      return "function" == typeof r && r instanceof r && ut(r) === ut(Object);
    }
    function lt(t, e, r) {
      ot(e)
        ? Array.prototype.forEach.call(e, function (e, n) {
            /\[\]$/.test(t)
              ? r(t, e)
              : lt(t + "[" + ("object" == typeof e ? n : "") + "]", e, r);
          })
        : st(e)
        ? Object.keys(e).forEach(function (n) {
            lt(t + "[" + n + "]", e[n], r);
          })
        : r(t, e);
    }
    function ft(t, e) {
      var r = [],
        n = function (t, e) {
          var n = it(e) ? e() : e;
          r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(n);
        };
      return (
        ot(t)
          ? Array.prototype.forEach.call(t, function (t) {
              n(t.name, t.value);
            })
          : Object.keys(t).forEach(function (e) {
              lt(e, t[e], n);
            }),
        e ? r.join("&").replace(/%20/g, "+") : r.join("&")
      );
    }
    function pt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ht(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pt(Object(r), !0).forEach(function (e) {
              s()(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : pt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var dt = function (t) {
        try {
          var e = (function (t) {
              if (!t) return {};
              var e = {},
                r =
                  t.match(/\bQQMUSIC\/(\d[\.\d]*)/i) ||
                  t.match(/QQMUSIC\/(\d[\.\d]*)/i),
                n = t.match(/MicroMessenger\/(\d[\.\d]*)/i),
                o = t.match(/(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/),
                i = t.match(/\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/),
                a = t.match(/Qzone\/V1_(AND|IPH)_QZ_([\d\._]*\d)/i),
                c = t.match(/\bqmkege\/(\d[\.\d]*)/i),
                u = /WeSecure|MQQSecure/.test(t),
                s = /weibo\ \(*/i.test(t),
                l = /QQbrowser\//i.test(t),
                f =
                  t.match(/\bQMfanlive\/(\d[\.\d]*)/i) ||
                  t.match(/QMfanlive\/(\d[\.\d]*)/i);
              if (r) {
                (e.platform = "music"), (e.music = !0);
                var p = r[1];
                return (
                  p &&
                    (parseInt(p, 10) < 1e3
                      ? (e.appVer = p)
                      : (e.appVer = p.replace("0", "."))),
                  /\bReleased\[0\]/i.test(t) && (e.iosReviewing = !0),
                  e
                );
              }
              if (f) {
                (e.platform = "qmlive"), (e.qmlive = !0);
                var h = f[1];
                return (
                  h && (e.appVer = h),
                  /\bReleased\[0\]/i.test(t) && (e.iosReviewing = !0),
                  e
                );
              }
              if (n) {
                (e.platform = "weixin"), (e.weixin = !0);
                var d = n[1];
                return d && (e.appVer = d), e;
              }
              if (o || i) {
                if (((e.platform = "mqq"), (e.mqq = !0), o)) e.appVer = o[3];
                else {
                  var v = i[1],
                    m = i[3];
                  (function (t, e) {
                    for (
                      t = ("" + t).split("."), e = ("" + e).split(".");
                      t.length + e.length;

                    ) {
                      var r = t.shift() || "0",
                        n = e.shift() || "0";
                      if ((r >= 0 && n >= 0 && ((r = ~~r), (n = ~~n)), r > n))
                        return 1;
                      if (r < n) return -1;
                    }
                    return 0;
                  })(v, m) >= 0
                    ? (e.appVer = v)
                    : (e.appVer = m);
                }
                return e;
              }
              if (a) {
                (e.platform = "qzone"), (e.qzone = !0);
                var y = a[2];
                return (e.appVer = y.replace("_", ".")), e;
              }
              if (c) {
                (e.platform = "qmkege"), (e.qmkege = !0);
                var g = c[1];
                return g && (e.appVer = g), e;
              }
              return u
                ? ((e.platform = "tcs"), (e.tcs = !0), e)
                : (s && ((e.platform = "weibo"), (e.weibo = !0)),
                  l ? ((e.platform = "qqbrowser"), (e.qqbrowser = !0), e) : e);
            })(t),
            r = P(t, "").browser;
          return ht(ht({}, e), r);
        } catch (t) {
          return {};
        }
      },
      vt = r(16),
      mt = r.n(vt),
      yt = r(9),
      gt = r.n(yt);
    function bt(t, e) {
      if ("undefined" == typeof location && !e) return e || "";
      var r = e || location.href;
      if (!t) return r;
      var n = t;
      return (
        st(t) && (n = ft(t, !1)),
        /\?/.test(r) || /#/.test(r)
          ? /\?/.test(r) && !/#/.test(r)
            ? r + "&" + n
            : !/\?/.test(r) && /#/.test(r)
            ? r.replace("#", "?" + n + "#")
            : r.replace("?", "?" + n + "&")
          : r + "?" + n
      );
    }
    var wt,
      xt,
      _t,
      Ot,
      St,
      Et = (function () {
        var t = mt()(
          gt.a.mark(function t(e, r, n) {
            var o, i, a, c, u, s, l, f, p, h;
            return gt.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (o = ""), (t.next = 3), k("qqmusic_key", e);
                  case 3:
                    return (i = t.sent), (t.next = 6), k("p_skey", e);
                  case 6:
                    return (a = t.sent), (t.next = 9), k("skey", e);
                  case 9:
                    return (c = t.sent), (t.next = 12), k("p_lskey", e);
                  case 12:
                    return (u = t.sent), (t.next = 15), k("lskey", e);
                  case 15:
                    return (s = t.sent), (t.next = 18), k(r || "", e);
                  case 18:
                    if (
                      ((l = t.sent),
                      (f = 5381),
                      (o = n ? i || a || c || u || s : l || c || i))
                    )
                      for (p = 0, h = o.length; p < h; p += 1)
                        f += (f << 5) + o.charCodeAt(p);
                    return t.abrupt("return", 2147483647 & f);
                  case 23:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e, r, n) {
          return t.apply(this, arguments);
        };
      })();
    !(function (t) {
      (t.Sonic = "sonic"), (t.Util = "util");
    })(wt || (wt = {})),
      (function (t) {
        (t.GetHeader = "getHeader"),
          (t.RenderHtml = "renderHtml"),
          (t.RenderData = "renderData");
      })(xt || (xt = {})),
      (function (t) {
        (t.Log = "log"), (t.Request = "request");
      })(_t || (_t = {})),
      (function (t) {
        (t[(t.Success = 0)] = "Success"),
          (t[(t.Fail = 1)] = "Fail"),
          (t[(t.ExecuteFail = -1)] = "ExecuteFail");
      })(Ot || (Ot = {})),
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Init = 1)] = "Init"),
          (t[(t.TemplateChanged = 2)] = "TemplateChanged"),
          (t[(t.TemplateNotChanged = 3)] = "TemplateNotChanged");
      })(St || (St = {}));
    var kt,
      jt = function (t) {
        try {
          return JSON.parse(t);
        } catch (t) {
          return { code: Ot.Fail, message: "JOSNæ ¼å¼é”™è¯¯", data: {} };
        }
      };
    !(function (t) {
      (t[(t.Debug = 0)] = "Debug"),
        (t[(t.Info = 1)] = "Info"),
        (t[(t.Error = 2)] = "Error");
    })(kt || (kt = {}));
    var Pt,
      Lt,
      Ct = function (t) {
        for (
          var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        var o = {
          level: t,
          message: (r || [])
            .map(function (t) {
              return "string" != typeof t ? JSON.stringify(t) : t;
            })
            .join(","),
        };
        sonicNativeBridgeCore.invoke(wt.Util, _t.Log, o);
      },
      Nt = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        Ct.apply(void 0, [kt.Info].concat(e));
      },
      Tt = function (t, e, r, n) {
        var o = (n || {}).headers,
          i = {
            url: t,
            method: e,
            headers: void 0 === o ? {} : o,
            body: r || {},
          };
        return new Promise(function (e, r) {
          sonicNativeBridgeCore.invoke(wt.Util, _t.Request, i, function (n) {
            Nt("ðŸš€", t, n);
            var o = jt(n),
              i = o.code,
              a = o.message,
              c = o.data;
            (i === Ot.Success && c) ||
              r({
                code: i,
                message:
                  null != a ? a : "ðŸ’¥ æ‰§è¡Œ sonic request æ–¹æ³•å¤±è´¥",
              }),
              e(c);
          });
        });
      };
    !(function (t) {
      (t.Test = "test"), (t.Prod = "prod");
    })(Pt || (Pt = {}));
    function It(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function At(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? It(Object(r), !0).forEach(function (e) {
              s()(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : It(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var Ft = {
      script:
        "text/javascript, application/javascript, application/x-javascript",
      json: "application/json",
      xml: "application/xml, text/xml",
      html: "text/html",
      text: "text/plain",
    };
    function Rt(t, e) {
      var r,
        n = JSON.stringify(t);
      e &&
        /[^\u4e00-\u9fa5|\u0000-\u0080|\u2014|\u2018|\u2019|\u201c|\u201d|\u2026|\u3001|\u3002|\u3008-\u3011|\u3014|\u3015|\ufe43|\ufe44|\ufe4f|\uff01|\uff08|\uff09|\uff0c|\uff1a|\uff1b|\uff1f|\uff5e|\uffe5]/.test(
          n
        ) &&
        (n =
          (null === (r = n) || void 0 === r ? void 0 : r.normalize("NFC")) ||
          n);
      return n;
    }
    var Dt,
      Mt,
      qt,
      Gt = (function () {
        var t = mt()(
          gt.a.mark(function t(e) {
            var r,
              n,
              o,
              i,
              a,
              c,
              u,
              s,
              l,
              f,
              p,
              h,
              d,
              v,
              m,
              y,
              g,
              b,
              w,
              x,
              _,
              O,
              S,
              E,
              k,
              P;
            return gt.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = e.url),
                      (n = e.comm),
                      (o = void 0 === n ? {} : n),
                      (i = e.type),
                      (a = void 0 === i ? "GET" : i),
                      (c = e.data),
                      (u = e.dataType),
                      (s = void 0 === u ? "json" : u),
                      (l = e.headers),
                      (f = void 0 === l ? {} : l),
                      (p =
                        /^(https?:)?\/\/u6\.y\.qq\.com/.test((L = r)) ||
                        /^(https?:)?\/\/u\.y\.qq\.com/.test(L) ||
                        /^(https?:)?\/\/ut\.y\.qq\.com/.test(L) ||
                        /^(https?:)?\/\/ud\.y\.qq\.com/.test(L) ||
                        /^(https?:)?\/\/vc\.y\.qq\.com\/cgi-bin\/musicu.fcg/.test(
                          L
                        )),
                      (h = a.toUpperCase()),
                      (d = s.toLowerCase()),
                      (v = bt({ _: Date.now() }, r)),
                      p && (v = r.replace(/^(https?:)?\/\//, "https://")),
                      (m =
                        /shop\.y\.qq\.com/.test(r) ||
                        /c\.y\.qq\.com\/shop/.test(r)
                          ? "p_skey"
                          : "skey"),
                      (t.next = 9),
                      Lt ||
                        (Lt = new Promise(function (t, e) {
                          sonicNativeBridgeCore.invoke(
                            wt.Sonic,
                            xt.GetHeader,
                            {},
                            function (r) {
                              var n = jt(r),
                                o = n.code,
                                i = n.message,
                                a = n.data;
                              i && e({ code: Ot.Fail, message: i }),
                                (o === Ot.Success && a) ||
                                  e({
                                    code: o,
                                    message:
                                      null != i
                                        ? i
                                        : "ðŸ’¥ æ‰§è¡Œ getHeader æ–¹æ³•å¤±è´¥",
                                  }),
                                Nt(
                                  "ðŸš€ ~ file: getHeader.ts ~ line 44 ~ sonicNativeBridgeCore.invoke ~ data",
                                  JSON.stringify(a)
                                ),
                                t(a);
                            }
                          );
                        })),
                      Lt
                    );
                  case 9:
                    return (y = t.sent), (t.next = 12), Et(y.Cookie, m, p);
                  case 12:
                    return (g = t.sent), (t.next = 15), j(y.Cookie);
                  case 15:
                    return (b = t.sent), (t.next = 18), dt(y["User-Agent"]);
                  case 18:
                    if (
                      ((w = t.sent),
                      (x = {
                        g_tk: g,
                        uin: b,
                        format: "json",
                        inCharset: "utf-8",
                        outCharset: "utf-8",
                        notice: 0,
                        platform: "h5",
                        needNewCode: 1,
                        type: h,
                        ct: 23,
                        cv: 0,
                      }),
                      (w.music || w.qmlive) && ((x.ct = 23), (x.cv = 0)),
                      !w.qmkege)
                    ) {
                      t.next = 25;
                      break;
                    }
                    return (t.next = 24), Et(y.Cookie, "openkey", p);
                  case 24:
                    x.g_tk_openkey = t.sent;
                  case 25:
                    return (
                      (_ = At(At({}, x), o)),
                      (O = {}),
                      (O = At(p ? { comm: _ } : At({}, _), c)),
                      (S = /\/cgi-bin\/musics.fcg/.test(r)),
                      (E = Rt(O, S)),
                      "GET" === h
                        ? ((v = p ? bt("data=".concat(E), v) : bt(O, r)),
                          (k = ""))
                        : (k = p ? E : ft(O)),
                      (P = {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: y.Cookie,
                        "User-Agent": y["User-Agent"],
                        Accept: Ft[d] || "*/*",
                      }),
                      t.abrupt(
                        "return",
                        Tt(v, h, k, { headers: At(At({}, P), f) })
                          .then(function (t) {
                            if (200 !== t.respCode)
                              return Promise.reject({
                                code: -1,
                                message:
                                  t.respMessage ||
                                  "ç½‘ç»œé”™è¯¯ï¼Œè¯·æ±‚å¤±è´¥",
                              });
                            if ("json" !== d) return t.respData;
                            try {
                              return JSON.parse(t.respData);
                            } catch (e) {
                              return Promise.reject({
                                code: -1,
                                message:
                                  t.respMessage ||
                                  "è¿”å›žå€¼jsonæ ¼å¼é”™è¯¯ï¼Œè¯·æ±‚å¤±è´¥",
                              });
                            }
                          })
                          .catch(function (t) {
                            return Promise.reject(t);
                          })
                      )
                    );
                  case 33:
                  case "end":
                    return t.stop();
                }
              var L;
            }, t);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      Ut = function (t) {
        var e = (t || {}).url,
          r = void 0 === e ? "https://u6.y.qq.com/cgi-bin/musicu.fcg" : e,
          n = t || {},
          o = n.comm,
          i = void 0 === o ? {} : o,
          a = n.type,
          c = void 0 === a ? "POST" : a,
          u = n.headers,
          s = c.toUpperCase(),
          l = 0,
          f = {},
          p = function () {},
          h = function () {},
          d = [],
          v = (function () {
            var t = mt()(
              gt.a.mark(function t() {
                var e;
                return gt.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (e = bt(
                          { _webcgikey: d.join("_") },
                          r.replace(/^(https:)?\/\//i, "http://")
                        )),
                          Gt({ comm: i, url: e, type: s, data: f, headers: u })
                            .then(function (t) {
                              p(t);
                            })
                            .catch(function (t) {
                              h(t);
                            });
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return {
          request(t) {
            return (
              (function (t) {
                t.param || (t.param = {});
                var e = "req_".concat(l++);
                (f[e] = t), d.push(t.method);
              })(t),
              this
            );
          },
          then(t) {
            return (p = t), v(), this;
          },
          catch(t) {
            return (h = t), this;
          },
        };
      },
      Ht = r(119),
      Bt = r.n(Ht),
      $t = r(120),
      zt = r.n($t);
    r(186), r(187), r(188);
    !(function (t) {
      (t.Sonic = "sonic"), (t.Util = "util");
    })(Dt || (Dt = {})),
      (function (t) {
        t.GetDiffData = "getDiffData";
      })(Mt || (Mt = {})),
      (function (t) {
        (t.GetInitWebviewTime = "getInitWebviewTime"),
          (t.SonicReport = "sonicReport");
      })(qt || (qt = {}));
    var Vt = function (t) {
        var e = t.albummid,
          r = t.songName,
          n = void 0 === r ? "" : r,
          o = t.singerName,
          i = void 0 === o ? "" : o,
          a = Object(p.useMemo)(
            function () {
              return (
                (t = "album"),
                (n = 300),
                (o =
                  "https://y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000"),
                "string" == typeof (r = e) &&
                  r.length >= 14 &&
                  (o =
                    "https://y.gtimg.cn/music/photo_new/" +
                    (t = "album" === t ? "T002" : "singer" === t ? "T001" : t) +
                    "R" +
                    (n || 68) +
                    "x" +
                    (n || 68) +
                    "M000" +
                    r +
                    ".jpg?max_age=2592000"),
                o
              );
              var t, r, n, o;
            },
            [e]
          );
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            "section",
            { className: "song_info" },
            h.a.createElement(
              "span",
              { className: "song_info__cover" },
              h.a.createElement("img", {
                src: a,
                className: "song_info__cover_img",
                alt: "",
              })
            ),
            h.a.createElement(
              "h2",
              {
                className: "song_info__tit c_txt2",
                style: { height: "20px", visibility: n ? "unset" : "hidden" },
              },
              "".concat(n)
            ),
            h.a.createElement(
              "h2",
              {
                className: "song_info__tit c_txt2",
                style: { height: "20px", visibility: n ? "unset" : "hidden" },
              },
              i
            )
          )
        );
      },
      Wt = Object(p.memo)(function () {
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            "article",
            { className: "tips" },
            h.a.createElement(
              "header",
              { className: "tips__hd" },
              h.a.createElement(
                "h2",
                { className: "tips__tit c_txt1" },
                "è´­ä¹°æç¤º"
              )
            ),
            h.a.createElement(
              "section",
              { className: "tips__bd" },
              h.a.createElement(
                "div",
                { className: "tips__txt c_txt2" },
                h.a.createElement(
                  "p",
                  null,
                  "1.æ‚¨æ­£åœ¨è¿›è¡Œå•æ›²è´­ä¹°æ“ä½œï¼Œè´­ä¹°æˆåŠŸåŽï¼Œå°†èŽ·å¾—å½“å‰æ­Œæ›²çš„æ°¸ä¹…ä¸‹è½½åŠå¯¼å‡ºè‡³ç¬¬ä¸‰æ–¹è®¾å¤‡æ’­æ”¾æƒç›Šï¼ˆå› ç‰¹æ®Šè§£ç åŽŸå› ï¼Œ360RAæš‚ä¸æ”¯æŒå¯¼å‡ºè‡³ç¬¬ä¸‰æ–¹è®¾å¤‡æ’­æ”¾ï¼‰ï¼›"
                ),
                h.a.createElement(
                  "p",
                  null,
                  "2.å¼€é€šè±ªåŽç»¿é’»è¿žç»­åŒ…æœˆèµ é€å•æ›²ä»…é™å½“å‰é¡µé¢è´­ä¹°ï¼Œå¦‚æ— éœ€å•æ›²ä¹°æ–­ï¼Œå¯æŸ¥çœ‹",
                  h.a.createElement(
                    "a",
                    {
                      href: "javascript:;",
                      className: "c_txt3",
                      onClick: function () {
                        var t;
                        null === (t = Music) ||
                          void 0 === t ||
                          t.client.open("ui", "openUrl", {
                            url: "https://y.qq.com/n/m/myservice/index.html",
                            miniBar: "hide",
                            target: "_blank",
                          });
                      },
                    },
                    "æ›´å¤šä¼šå‘˜ä»·æ ¼>"
                  )
                ),
                h.a.createElement(
                  "p",
                  null,
                  "3.è´­ä¹°æˆåŠŸåŽï¼Œå¯åœ¨æˆ‘çš„éŸ³ä¹-å·²è´­éŸ³ä¹æŸ¥çœ‹å·²è´­å•æ›²ï¼›"
                ),
                h.a.createElement(
                  "p",
                  null,
                  "4.è´­ä¹°åŽï¼Œå¦‚æ— æ³•æ­£å¸¸æ’­æ”¾å’Œä¸‹è½½ï¼Œå¯å°è¯•é‡å¯QQéŸ³ä¹å®¢æˆ·ç«¯ï¼›"
                ),
                h.a.createElement(
                  "p",
                  null,
                  "5.è±ªåŽç»¿é’»æ”¯ä»˜å®ŒæˆåŽï¼ŒæœåŠ¡å°†åœ¨5åˆ†é’Ÿå†…ç”Ÿæ•ˆï¼Œéƒ¨åˆ†éŸ³ä¹ä¸‹è½½åŽä»…ä¼šå‘˜æœŸå†…æœ‰æ•ˆï¼›"
                ),
                h.a.createElement(
                  "p",
                  null,
                  "6.ç”±äºŽè‹¹æžœæ”¯ä»˜é™åˆ¶ï¼ŒiOSç”¨æˆ·ä»…è´­ä¹°å•æ›²æ—¶ï¼Œä»…é™ä¹å¸æ”¯ä»˜ã€‚å½“ä¹å¸ä½™é¢å……è¶³æ—¶ï¼Œå•æ›²è´­ä¹°å°†ç›´æŽ¥å…‘æ¢ï¼Œæ— éœ€é‡æ–°æ”¯ä»˜ã€‚"
                )
              )
            )
          )
        );
      }),
      Jt = function () {
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            "div",
            { className: "buy_info__grid buy_info__grid--special" },
            h.a.createElement(
              "div",
              { className: "buy_info__grid_bd" },
              h.a.createElement(
                "h3",
                { className: "buy_info__grid_tit" },
                "è¿žç»­åŒ…æœˆ",
                h.a.createElement("span", null, "Â· èµ é€å½“å‰å•æ›²")
              ),
              h.a.createElement(
                "div",
                { className: "buy_info__grid_txt" },
                h.a.createElement("p", null, "å•æ›²æ°¸ä¹…ä¸‹è½½ï½œéšå¿ƒå¯¼å‡º"),
                h.a.createElement("p", null, "æ¯æœˆå¦äº«300é¦–VIPæ­Œæ›²ä¸‹è½½")
              )
            ),
            h.a.createElement(
              "a",
              { href: "javascript:;", className: "buy_info__grid_btn c_btn2" },
              "æŒ‰é’®"
            )
          )
        );
      },
      Yt = function () {
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            "div",
            { className: "buy_info__grid border_radius c_txt1" },
            h.a.createElement(
              "div",
              { className: "buy_info__grid_bd" },
              h.a.createElement(
                "h3",
                { className: "buy_info__grid_tit c_txt1" },
                "è´­ä¹°å•æ›²"
              ),
              h.a.createElement(
                "p",
                { className: "buy_info__grid_txt c_txt2" },
                "è´­ä¹°åŽæ°¸ä¹…æ’­æ”¾åŠä¸‹è½½"
              )
            ),
            h.a.createElement(
              "a",
              {
                className:
                  "buy__btn disable js_buy buy_info__grid_btn border_radius c_txt3 disable",
                "custom-aid": "newsfw.ios.dqh5cgkt.danqu",
                href: "javascript:;",
              },
              "æŒ‰é’®"
            )
          )
        );
      };
    r(189);
    function Qt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function Kt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Qt(Object(r), !0).forEach(function (e) {
              s()(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Qt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var Zt = function (t) {
      return new Promise(function (e, r) {
        Ut()
          .request({
            module: "music.trackInfo.UniformRuleCtrl",
            method: "CgiGetTrackInfo",
            param: { ids: [t], types: [0] },
          })
          .then(function (t) {
            var n,
              o,
              i,
              a,
              c,
              u = t || {},
              s = u.code,
              l = u.req_0;
            0 === s &&
            0 === (null == l ? void 0 : l.code) &&
            null != l &&
            null !== (n = l.data) &&
            void 0 !== n &&
            n.tracks &&
            null != l &&
            null !== (o = l.data) &&
            void 0 !== o &&
            null !== (i = o.tracks) &&
            void 0 !== i &&
            i.length
              ? (null == l ||
                  null === (a = l.data) ||
                  void 0 === a ||
                  a.tracks.forEach(function (t) {
                    var e,
                      r,
                      n = ((e = t.action.icons),
                      (r = e > 0 ? e.toString(2).split("") : []),
                      r.reverse(),
                      r)[13],
                      o =
                        t.pay.pay_month > 0 &&
                        (t.pay.pay_play > 0 || t.pay.pay_down > 0) &&
                        4009 == t.fnote;
                    (t.isBuffer = !!n), (t.isMonthly = !!o);
                  }),
                e(
                  null == l || null === (c = l.data) || void 0 === c
                    ? void 0
                    : c.tracks[0]
                ))
              : r(t);
          })
          .catch(function (t) {
            t &&
              r(
                Kt(
                  Kt({}, t),
                  {},
                  {
                    errMsg:
                      "æœåŠ¡å¼‚å¸¸ï¼ŒæŸ¥è¯¢æ­Œæ›²ä¿¡æ¯å¤±è´¥ï¼Œè¯·ç¨åŽå†è¯•",
                  }
                )
              );
          });
      });
    };
    function Xt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function te(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Xt(Object(r), !0).forEach(function (e) {
              s()(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Xt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    var ee = function (t) {
        return te(
          te(
            {
              initPageData: function (t, e) {
                return te(te({}, t), e);
              },
            },
            {
              getTrackInfo:
                ((r = mt()(
                  gt.a.mark(function t(e, r) {
                    var n;
                    return gt.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), Zt(r);
                            case 3:
                              return (
                                (n = t.sent),
                                t.abrupt("return", { trackInfo: n })
                              );
                            case 7:
                              return (
                                (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                t.abrupt("return", { trackInfo: void 0 })
                              );
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                )),
                function (t, e) {
                  return r.apply(this, arguments);
                }),
            }
          ),
          {
            getCommonState:
              ((e = mt()(
                gt.a.mark(function t(e) {
                  var r, n, o;
                  return gt.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), C("songid");
                        case 2:
                          return (r = t.sent), (t.next = 5), L();
                        case 5:
                          return (n = t.sent), (t.next = 8), dt();
                        case 8:
                          return (
                            (o = t.sent),
                            t.abrupt("return", {
                              common: {
                                songId: r,
                                settled: !0,
                                isIapEnv: !(
                                  null == n ||
                                  !n.ios ||
                                  null == o ||
                                  !o.music
                                ),
                              },
                            })
                          );
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )),
              function (t) {
                return e.apply(this, arguments);
              }),
          }
        );
        var e, r;
      },
      re = Object(g.connect)(function (t) {
        return { trackInfo: t.trackInfo, common: t.common };
      }, ee)(function (t) {
        var e,
          r = t.trackInfo,
          n = t.common,
          o = n.songId,
          i = n.settled,
          a = Object(p.useState)(0),
          c = f()(a, 2),
          u = c[0],
          s = c[1],
          l = Object(p.useState)(0),
          d = f()(l, 2),
          v = (d[0], d[1]),
          m = Object(p.useState)(0),
          y = f()(m, 2),
          g = y[0],
          b = y[1],
          w = Object(p.useMemo)(
            function () {
              var t = (null == r ? void 0 : r.singer) || [];
              return 0 === t.length || t.length > 5
                ? ""
                : t
                    .map(function (t) {
                      return t.name;
                    })
                    .join("/");
            },
            [null == r ? void 0 : r.singer]
          );
        return (
          Object(p.useEffect)(
            function () {
              !i || o || Music.alert("ç¼ºå°‘å¿…è¦å‚æ•°ï¼šsongid");
            },
            [o, i]
          ),
          Object(p.useEffect)(function () {
            var t, e, r, n, o, i;
            new Promise(function (t, e) {
              var r, n, o, i;
              if (
                null !== (r = window) &&
                void 0 !== r &&
                r.sonicNativeBridgeCore
              ) {
                var a = {
                  tag: "navigationStart",
                  timestamp:
                    null === (n = performance) ||
                    void 0 === n ||
                    null === (o = n.timing) ||
                    void 0 === o
                      ? void 0
                      : o.navigationStart,
                  url: location.href,
                };
                null === (i = window) ||
                  void 0 === i ||
                  i.sonicNativeBridgeCore.invoke(
                    Dt.Util,
                    qt.GetInitWebviewTime,
                    a,
                    function (r) {
                      var n;
                      0 === r.code && r.data
                        ? t(
                            (null === (n = r.data) || void 0 === n
                              ? void 0
                              : n.time) || 0
                          )
                        : e({ msg: "Fail to getWebviewInitTime" });
                    }
                  );
              } else e({ msg: "sonicNativeBridgeCore is not defined" });
            }).then(function (t) {
              s(t);
            }),
              v(
                null === (t = window) ||
                  void 0 === t ||
                  null === (e = t.SPD) ||
                  void 0 === e ||
                  null === (r = e.result) ||
                  void 0 === r
                  ? void 0
                  : r.fcp
              ),
              b(
                null === (n = window) ||
                  void 0 === n ||
                  null === (o = n.SPD) ||
                  void 0 === o ||
                  null === (i = o.result) ||
                  void 0 === i
                  ? void 0
                  : i.fmp
              );
          }, []),
          h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(
              "div",
              { style: { color: "red", position: "absolute" } },
              h.a.createElement("p", null, "fmp:", g),
              h.a.createElement("p", null, "webview:", u)
            ),
            h.a.createElement(Vt, {
              albummid:
                (null == r || null === (e = r.album) || void 0 === e
                  ? void 0
                  : e.mid) || "",
              songName:
                (null == r ? void 0 : r.songname) ||
                (null == r ? void 0 : r.songtitle) ||
                (null == r ? void 0 : r.title) ||
                "",
              singerName: w,
            }),
            h.a.createElement(
              "section",
              { className: "buy_info" },
              h.a.createElement(Jt, null),
              h.a.createElement(Yt, null)
            ),
            h.a.createElement(Wt, null)
          )
        );
      }),
      ne = r(121),
      oe = r.n(ne),
      ie = r(122),
      ae = r.n(ie),
      ce = oe()(function t() {
        ae()(this, t),
          s()(this, "trackInfo", void 0),
          s()(this, "common", { songId: "", settled: !1 });
      });
    new ce();
    function ue(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    var se,
      le,
      fe,
      pe,
      he,
      de = zt()(),
      ve = function (t) {
        O("ðŸ™ˆ preFetchData", JSON.stringify(t));
        var e = Date.now(),
          r = t.url,
          n = C("songid", r),
          o = ee().getTrackInfo,
          i = new ce();
        return Promise.all([o(i, +n)])
          .then(function (t) {
            var e = f()(t, 1)[0];
            Date.now();
            rt(
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? ue(Object(r), !0).forEach(function (e) {
                        s()(t, e, r[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : ue(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e)
                        );
                      });
                }
                return t;
              })({}, e)
            );
          })
          .catch(function (t) {
            var r = Date.now();
            O("ðŸ™‰ è¯·æ±‚è€—æ—¶:", "".concat(r - e)), rt({});
          });
      };
    !(function (t) {
      (t.Sonic = "sonic"), (t.Util = "util");
    })(se || (se = {})),
      (function (t) {
        (t.GetHeader = "getHeader"),
          (t.RenderHtml = "renderHtml"),
          (t.RenderData = "renderData");
      })(le || (le = {})),
      (function (t) {
        (t.Log = "log"), (t.Request = "request");
      })(fe || (fe = {})),
      (function (t) {
        (t[(t.Success = 0)] = "Success"),
          (t[(t.Fail = 1)] = "Fail"),
          (t[(t.ExecuteFail = -1)] = "ExecuteFail");
      })(pe || (pe = {})),
      (function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Init = 1)] = "Init"),
          (t[(t.TemplateChanged = 2)] = "TemplateChanged"),
          (t[(t.TemplateNotChanged = 3)] = "TemplateNotChanged");
      })(he || (he = {}));
    var me,
      ye = function (t) {
        try {
          return JSON.parse(t);
        } catch (t) {
          return { code: pe.Fail, message: "JOSNæ ¼å¼é”™è¯¯", data: {} };
        }
      };
    !(function (t) {
      (t[(t.Debug = 0)] = "Debug"),
        (t[(t.Info = 1)] = "Info"),
        (t[(t.Error = 2)] = "Error");
    })(me || (me = {}));
    var ge,
      be,
      we = function (t) {
        for (
          var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        var o = {
          level: t,
          message: (r || [])
            .map(function (t) {
              return "string" != typeof t ? JSON.stringify(t) : t;
            })
            .join(","),
        };
        sonicNativeBridgeCore.invoke(se.Util, fe.Log, o);
      },
      xe = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        we.apply(void 0, [me.Info].concat(e));
      },
      _e = function (t, e, r, n) {
        var o = (n || {}).headers,
          i = {
            url: t,
            method: e,
            headers: void 0 === o ? {} : o,
            body: r || {},
          };
        return new Promise(function (e, r) {
          sonicNativeBridgeCore.invoke(se.Util, fe.Request, i, function (n) {
            xe("ðŸš€", t, n);
            var o = ye(n),
              i = o.code,
              a = o.message,
              c = o.data;
            (i === pe.Success && c) ||
              r({
                code: i,
                message:
                  null != a ? a : "ðŸ’¥ æ‰§è¡Œ sonic request æ–¹æ³•å¤±è´¥",
              }),
              e(c);
          });
        });
      };
    !(function (t) {
      (t.Test = "test"), (t.Prod = "prod");
    })(ge || (ge = {}));
    var Oe = function () {
      return (
        be ||
          (be = new Promise(function (t, e) {
            sonicNativeBridgeCore.invoke(
              se.Sonic,
              le.GetHeader,
              {},
              function (r) {
                var n = ye(r),
                  o = n.code,
                  i = n.message,
                  a = n.data;
                i && e({ code: pe.Fail, message: i }),
                  (o === pe.Success && a) ||
                    e({
                      code: o,
                      message:
                        null != i ? i : "ðŸ’¥ æ‰§è¡Œ getHeader æ–¹æ³•å¤±è´¥",
                    }),
                  xe(
                    "ðŸš€ ~ file: getHeader.ts ~ line 44 ~ sonicNativeBridgeCore.invoke ~ data",
                    JSON.stringify(a)
                  ),
                  t(a);
              }
            );
          })),
        be
      );
    };
    var Se = function (t, e) {
        if (!t || !e) return "";
        try {
          var r = e.match(RegExp("(^|;\\s*)".concat(t, "=([^;]*)(;|$)")));
          if (r)
            return (function (t) {
              var e = t;
              if (!e) return e;
              e !== decodeURIComponent(e) && (e = decodeURIComponent(e));
              for (
                var r = [
                    "<",
                    ">",
                    "'",
                    '"',
                    "%3c",
                    "%3e",
                    "%27",
                    "%22",
                    "%253c",
                    "%253e",
                    "%2527",
                    "%2522",
                  ],
                  n = [
                    "&#x3c;",
                    "&#x3e;",
                    "&#x27;",
                    "&#x22;",
                    "%26%23x3c%3B",
                    "%26%23x3e%3B",
                    "%26%23x27%3B",
                    "%26%23x22%3B",
                    "%2526%2523x3c%253B",
                    "%2526%2523x3e%253B",
                    "%2526%2523x27%253B",
                    "%2526%2523x22%253B",
                  ],
                  o = 0;
                o < r.length;
                o += 1
              )
                e = e.replace(new RegExp(r[o], "gi"), n[o]);
              return e;
            })(decodeURIComponent(r ? r[2] : ""));
        } catch (t) {
          return "";
        }
      },
      Ee = function (t) {
        var e,
          r = Se("login_type", t);
        return (
          (e = Se("2" === r ? "wxuin" : "uin", t)) || (e = Se("p_uin", t)),
          e &&
            (0 === e.indexOf("o") && (e = e.substring(1, e.length)),
            !/^\d+$/.test(e) || +e < 1e4
              ? (e = 0)
              : e.length < 14 && (e = parseInt(e, 10))),
          e || ""
        );
      };
    var ke = function (t) {
        try {
          var e;
          return (
            (null ===
              (e = (function (t, e) {
                var r = {},
                  n = {};
                if (!t) return { os: r, browser: n };
                var o = t,
                  i = o.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                  a = o.match(/(Android);?[\s\/]+([\d.]+)?/),
                  c = !!o.match(/\(Macintosh\; Intel /),
                  u = o.match(/(iPad).*OS\s([\d_]+)/),
                  s = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                  l = !u && o.match(/(iPhone\sOS)\s([\d_]+)/),
                  f = o.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                  p = /Win\d{2}|Windows/.test(e),
                  h = o.match(/(Windows Phone|Windows Phone OS) ([\d.]+)/),
                  d = f && o.match(/TouchPad/),
                  v = o.match(/Kindle\/([\d.]+)/),
                  m = o.match(/Silk\/([\d._]+)/),
                  y = o.match(/(BlackBerry).*Version\/([\d.]+)/),
                  g = o.match(/(BB10).*Version\/([\d.]+)/),
                  b = o.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                  w = o.match(/PlayBook/),
                  x = o.match(/Chrome\/([\d.]+)/) || o.match(/CriOS\/([\d.]+)/),
                  _ = o.match(/Firefox\/([\d.]+)/),
                  O = o.match(
                    /(?:Mobile|Tablet); rv:([\d.]+).*Firefox\/[\d.]+/
                  ),
                  S =
                    o.match(/MSIE\s([\d.]+)/) ||
                    o.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                  E =
                    !x &&
                    o.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                  k =
                    E ||
                    o.match(
                      /Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/
                    );
                return (
                  (n.webkit = !!i) && (n.version = i[1]),
                  a && ((r.android = !0), (r.version = a[2])),
                  l &&
                    !s &&
                    ((r.ios = r.iphone = !0),
                    (r.version = l[2].replace(/_/g, "."))),
                  u &&
                    ((r.ios = r.ipad = !0),
                    (r.version = u[2].replace(/_/g, "."))),
                  s &&
                    ((r.ios = r.ipod = !0),
                    (r.version = s[3] ? s[3].replace(/_/g, ".") : null)),
                  h && ((r.wp = !0), (r.version = h[2])),
                  f && ((r.webos = !0), (r.version = f[2])),
                  d && (r.touchpad = !0),
                  y && ((r.blackberry = !0), (r.version = y[2])),
                  g && ((r.bb10 = !0), (r.version = g[2])),
                  b && ((r.rimtabletos = !0), (r.version = b[2])),
                  w && (n.playbook = !0),
                  v && ((r.kindle = !0), (r.version = v[1])),
                  m && ((n.silk = !0), (n.version = m[1])),
                  !m && r.android && o.match(/Kindle Fire/) && (n.silk = !0),
                  x && ((n.chrome = !0), (n.version = x[1])),
                  _ && ((n.firefox = !0), (n.version = _[1])),
                  O && ((r.firefoxos = !0), (r.version = O[1])),
                  S && ((n.ie = !0), (n.version = S[1])),
                  k &&
                    (c || r.ios || p) &&
                    ((n.safari = !0), r.ios || (n.version = k[1])),
                  E && (n.webview = !0),
                  /kraken\//i.test(o) && (r.ios = r.iphone = /ios/i.test(o)),
                  (r.tablet = !!(
                    u ||
                    w ||
                    (v && r.version >= 3) ||
                    (m &&
                      o.match(
                        /Silk.*Accelerated|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)/
                      )) ||
                    (a && !o.match(/Mobile/)) ||
                    (_ && o.match(/Tablet/)) ||
                    d ||
                    (S && !o.match(/Phone/) && o.match(/Touch/))
                  )),
                  (r.phone = !(
                    r.tablet ||
                    r.ipod ||
                    !(
                      a ||
                      l ||
                      f ||
                      y ||
                      g ||
                      h ||
                      (x && o.match(/Android/)) ||
                      (x && o.match(/CriOS\/([\d.]+)/)) ||
                      (_ && o.match(/Mobile/)) ||
                      (S && o.match(/Touch/))
                    )
                  )),
                  { os: r, browser: n }
                );
              })(t, "")) || void 0 === e
              ? void 0
              : e.os) || {}
          );
        } catch (t) {
          return {};
        }
      },
      je = function (t, e) {
        var r = e || "";
        if (!r) return "";
        var n = (r || location.href).split("#")[0],
          o = new RegExp("(\\?|&)".concat(t, "=(.*?)(#|&|$)"), "i"),
          i = n.match(o);
        return decodeURIComponent(i ? i[2] : "");
      };
    function Pe() {
      Pe = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return E();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = w(a, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = s(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var d = {};
      c(d, o, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        m = v && v(v(S([])));
      m && m !== e && r.call(m, o) && (d = m);
      var y = (h.prototype = f.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(t, e) {
        function n(o, i, a, c) {
          var u = s(t[o], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              f = l.value;
            return f && "object" == typeof f && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (l.value = t), a(l);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (t, r) {
          function i() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = s(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function S(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = h),
        c(y, "constructor", h),
        c(h, "constructor", p),
        (p.displayName = c(h, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(b.prototype),
        c(b.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(y),
        c(y, a, "Generator"),
        c(y, o, function () {
          return this;
        }),
        c(y, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function Le(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    function Ce(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            Le(i, n, o, a, c, "next", t);
          }
          function c(t) {
            Le(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var Ne = (function () {
        var t = Ce(
          Pe().mark(function t() {
            var e, r, n, o, i;
            return Pe().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), ke();
                  case 2:
                    return (r = t.sent), (t.next = 5), Oe();
                  case 5:
                    return (
                      (n = t.sent),
                      (o = (null == n ? void 0 : n["User-Agent"]) || ""),
                      (i =
                        null != r && r.ios
                          ? o.match(/(?:iPad).*OS\s([\d_]+)/) ||
                            o.match(/(?:iPod)(?:.*OS\s([\d_]+))?/) ||
                            o.match(/(?:iPhone\sOS)\s([\d_]+)/)
                          : o.match(/(?:Android);?[\s\/]+([\d.]+)?/)),
                      t.abrupt(
                        "return",
                        i
                          ? null === (e = i) || void 0 === e
                            ? void 0
                            : e[1]
                          : ""
                      )
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      Te = (function () {
        var t = Ce(
          Pe().mark(function t() {
            var e, r, n;
            return Pe().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Oe();
                  case 2:
                    return (
                      (e = t.sent),
                      (r = (null == e ? void 0 : e["User-Agent"]) || ""),
                      (n = r.match(/QQMUSIC\/(\d[\.\d]*)/i)),
                      t.abrupt("return", n ? n[1] : "")
                    );
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      Ie = (function () {
        var t = Ce(
          Pe().mark(function t() {
            var e, r, n;
            return Pe().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Oe();
                  case 2:
                    return (
                      (e = t.sent),
                      (r = (null == e ? void 0 : e["User-Agent"]) || ""),
                      (n = r.match(/\bNetType\/(\w+)/i)),
                      t.abrupt("return", n ? n[1] : "unknown")
                    );
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      Ae = (function () {
        var t = Ce(
          Pe().mark(function t() {
            var e, r, n, o, i, a, c, u;
            return Pe().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Ee();
                  case 2:
                    return (e = t.sent), (t.next = 5), ke();
                  case 5:
                    return (r = t.sent), (t.next = 8), Se("login_type");
                  case 8:
                    return (n = t.sent), (t.next = 11), Ne();
                  case 11:
                    return (o = t.sent), (t.next = 14), Te();
                  case 14:
                    return (i = t.sent), (t.next = 17), je("channelId");
                  case 17:
                    return (a = t.sent), (t.next = 20), Ie();
                  case 20:
                    return (
                      (c = t.sent),
                      (u = {
                        _appid: "qqmusic",
                        _uid: e,
                        _platform: null != r && r.ios ? 1 : 11,
                        _account_source: n,
                        _os_version: o || "",
                        _app_version: i || "",
                        _channelid: a,
                        _os: null != r && r.ios ? "ios" : "android",
                        _app: "music",
                        _opertime: ((Date.now() / 1e3) | 0).toString(),
                        _network_type: (c || "").toLocaleLowerCase(),
                      }),
                      t.abrupt("return", u)
                    );
                  case 23:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
    function Fe() {
      Fe = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new O(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return E();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = w(a, r);
                  if (c) {
                    if (c === l) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = s(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function s(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var d = {};
      c(d, o, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        m = v && v(v(S([])));
      m && m !== e && r.call(m, o) && (d = m);
      var y = (h.prototype = f.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function b(t, e) {
        function n(o, i, a, c) {
          var u = s(t[o], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              f = l.value;
            return f && "object" == typeof f && r.call(f, "__await")
              ? e.resolve(f.__await).then(
                  function (t) {
                    n("next", t, a, c);
                  },
                  function (t) {
                    n("throw", t, a, c);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (l.value = t), a(l);
                  },
                  function (t) {
                    return n("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (t, r) {
          function i() {
            return new e(function (e, o) {
              n(t, r, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function w(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              w(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = s(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function _(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function S(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = h),
        c(y, "constructor", h),
        c(h, "constructor", p),
        (p.displayName = c(h, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(y)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(b.prototype),
        c(b.prototype, i, function () {
          return this;
        }),
        (t.AsyncIterator = b),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new b(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(y),
        c(y, a, "Generator"),
        c(y, o, function () {
          return this;
        }),
        c(y, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = S),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(_),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), _(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: S(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    }
    function Re(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function De(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Re(Object(r), !0).forEach(function (e) {
              Me(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Re(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function Me(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function qe(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    function Ge(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            qe(i, n, o, a, c, "next", t);
          }
          function c(t) {
            qe(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var Ue = (function () {
        var t = Ge(
          Fe().mark(function t(e) {
            var r, n, o, i;
            return Fe().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Ae();
                  case 2:
                    return (r = t.sent), (t.next = 5), Oe();
                  case 5:
                    (n = t.sent),
                      (o = [
                        De(
                          {
                            _key: "web_error",
                            _opertime: ((Date.now() / 1e3) | 0).toString(),
                          },
                          e
                        ),
                      ]),
                      (i = {
                        Cookie: n.Cookie,
                        "User-Agent": n["User-Agent"],
                        "Content-Type": "text/plain;charset=UTF-8",
                      }),
                      xe(
                        "ðŸš€ ~ file: reportError.ts ~ line 19 ~ send ~ JSON.stringify({ common, items })",
                        JSON.stringify({ common: r, items: o })
                      ),
                      _e(
                        "https://stat6.y.qq.com/sdk/fcgi-bin/sdk.fcg",
                        "POST",
                        JSON.stringify({ common: r, items: o }),
                        { headers: i }
                      );
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      He = (function () {
        var t = Ge(
          Fe().mark(function t(e, r) {
            var n, o, i, a, c, u;
            return Fe().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = /(http|https):\/\/(.*?)(\/.*?)(\?.*)/gi),
                      (t.next = 3),
                      Oe()
                    );
                  case 3:
                    (o = t.sent),
                      (i = (null == o ? void 0 : o.referer) || ""),
                      (a = n.exec(i)),
                      (c = null == o ? void 0 : o.traceId),
                      (u = De(
                        {
                          protocol: (null == a ? void 0 : a[1]) || "",
                          host: (null == a ? void 0 : a[2]) || "",
                          pathname: (null == a ? void 0 : a[3]) || "",
                          search: (null == a ? void 0 : a[4]) || "",
                          message: encodeURIComponent(e),
                          fqm_id: "0ddad32e-1486-48a3-b48d-5e28e9eb69fc",
                          tracer_id: c,
                        },
                        r
                      )),
                      Ue(u);
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e, r) {
          return t.apply(this, arguments);
        };
      })(),
      Be = function (t) {
        if (t.stack) {
          var e = (function (t) {
            try {
              if (t.stack) {
                var e = t.stack.match("https?://[^\n]+"),
                  r = e ? e[0] : "",
                  n = r.match(":(\\d+):(\\d+)");
                n || (n = [0, 0, 0]);
                var o = (function (t) {
                  var e = t.stack
                      .replace(/\n/gi, "")
                      .split(/\bat\b/)
                      .slice(0, 100)
                      .join("@")
                      .replace(/\?[^:]+/gi, ""),
                    r = t.toString();
                  return (
                    e.indexOf(r) < 0 && (e = "".concat(r, "@").concat(e)), e
                  );
                })(t);
                return {
                  msg: o,
                  rowNum: n[1],
                  colNum: n[2],
                  fileName: r.replace(n[0], ""),
                };
              }
              return t.name && t.message
                ? { msg: JSON.stringify(t) }
                : {
                    msg:
                      (null == t ? void 0 : t.message) || "unhandledrejection",
                    rowNum: 0,
                    colNum: 0,
                    fileName: "",
                  };
            } catch (t) {
              return {
                msg: "unhandledrejection",
                rowNum: 0,
                colNum: 0,
                fileName: "",
              };
            }
          })(t);
          He(t.message || e.msg, {
            line: e.rowNum || "",
            colunm: e.colNum || "",
            file_host: "",
            file_pathname: "",
            file_search: "",
            stack: e.msg || t.message || "unhandledrejection",
          });
        } else
          He(t.message || "unhandledrejection", {
            line: "",
            colunm: "",
            file_host: "",
            file_pathname: "",
            file_search: "",
            stack: t.message || "unhandledrejection",
          });
      };
    var $e = function (t, e) {
      xe(
        "ðŸš€ ~ file: renderHtml.ts ~ line 28 ~ useWebRender ~ error",
        null == e ? void 0 : e.toString()
      ),
        Be(e),
        sonicNativeBridgeCore.invoke(se.Sonic, le.RenderHtml, {
          body: t,
          statusCode: 200,
          header: { sonicMode: he.None },
        });
    };
    (async () => {
      try {
        const o = await Oe(),
          i = { url: o.referer, userAgent: o["User-Agent"], cookie: o.Cookie };
        xe("ðŸš€ sonicGlobalEnv:", JSON.stringify(i)),
          ve(i),
          (t = new ce()),
          (e = y()(t)),
          (r = v.a.renderToString(
            h.a.createElement(
              g.Provider,
              { store: e },
              h.a.createElement(re, null)
            )
          )),
          (n = Bt()(r, "")),
          et(n, t, de, { needRenderData: !1 });
      } catch (t) {
        $e(de, t);
      }
      var t, e, r, n;
    })();
  },
]);
//# sourceMappingURL=sonic.js.map