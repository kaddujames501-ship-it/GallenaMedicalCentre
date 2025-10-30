var Ld = Object.defineProperty;
var Od = (e, t, n) =>
  t in e ? Ld(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var Ke = (e, t, n) => Od(e, typeof t != 'symbol' ? t + '' : t, n);
function Rd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i && Object.defineProperty(e, l, i.get ? i : { enumerable: !0, get: () => r[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Ol(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Zs = { exports: {} },
  Rl = {},
  Js = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = Symbol.for('react.element'),
  zd = Symbol.for('react.portal'),
  Md = Symbol.for('react.fragment'),
  Id = Symbol.for('react.strict_mode'),
  Dd = Symbol.for('react.profiler'),
  Ad = Symbol.for('react.provider'),
  Fd = Symbol.for('react.context'),
  Ud = Symbol.for('react.forward_ref'),
  $d = Symbol.for('react.suspense'),
  Bd = Symbol.for('react.memo'),
  Hd = Symbol.for('react.lazy'),
  La = Symbol.iterator;
function Vd(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (La && e[La]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var bs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  eu = Object.assign,
  tu = {};
function kn(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = tu), (this.updater = n || bs));
}
kn.prototype.isReactComponent = {};
kn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function nu() {}
nu.prototype = kn.prototype;
function Mo(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = tu), (this.updater = n || bs));
}
var Io = (Mo.prototype = new nu());
Io.constructor = Mo;
eu(Io, kn.prototype);
Io.isPureReactComponent = !0;
var Oa = Array.isArray,
  ru = Object.prototype.hasOwnProperty,
  Do = { current: null },
  lu = { key: !0, ref: !0, __self: !0, __source: !0 };
function iu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      ru.call(t, r) && !lu.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: gr, type: e, key: i, ref: o, props: l, _owner: Do.current };
}
function Wd(e, t) {
  return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ao(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === gr;
}
function Qd(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ra = /\/+/g;
function ei(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Qd('' + e.key) : t.toString(36);
}
function Qr(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case gr:
          case zd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + ei(o, 0) : r),
      Oa(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ra, '$&/') + '/'),
          Qr(l, t, n, '', function (u) {
            return u;
          }))
        : l != null &&
          (Ao(l) &&
            (l = Wd(
              l,
              n +
                (!l.key || (o && o.key === l.key) ? '' : ('' + l.key).replace(Ra, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Oa(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + ei(i, a);
      o += Qr(i, t, n, s, l);
    }
  else if (((s = Vd(e)), typeof s == 'function'))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      ((i = i.value), (s = r + ei(i, a++)), (o += Qr(i, t, n, s, l)));
  else if (i === 'object')
    throw (
      (t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      )
    );
  return o;
}
function jr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Qr(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Kd(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Kr = { transition: null },
  Gd = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Kr, ReactCurrentOwner: Do };
function ou() {
  throw Error('act(...) is not supported in production builds of React.');
}
z.Children = {
  map: jr,
  forEach: function (e, t, n) {
    jr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      jr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ao(e))
      throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
z.Component = kn;
z.Fragment = Md;
z.Profiler = Dd;
z.PureComponent = Mo;
z.StrictMode = Id;
z.Suspense = $d;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gd;
z.act = ou;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
    );
  var r = eu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Do.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      ru.call(t, s) &&
        !lu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ad, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = iu;
z.createFactory = function (e) {
  var t = iu.bind(null, e);
  return ((t.type = e), t);
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Ud, render: e };
};
z.isValidElement = Ao;
z.lazy = function (e) {
  return { $$typeof: Hd, _payload: { _status: -1, _result: e }, _init: Kd };
};
z.memo = function (e, t) {
  return { $$typeof: Bd, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Kr.transition;
  Kr.transition = {};
  try {
    e();
  } finally {
    Kr.transition = t;
  }
};
z.unstable_act = ou;
z.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = '18.3.1';
Js.exports = z;
var S = Js.exports;
const Ve = Ol(S),
  Yd = Rd({ __proto__: null, default: Ve }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd = S,
  qd = Symbol.for('react.element'),
  Zd = Symbol.for('react.fragment'),
  Jd = Object.prototype.hasOwnProperty,
  bd = Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function au(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  (n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Jd.call(t, r) && !ef.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: qd, type: e, key: i, ref: o, props: l, _owner: bd.current };
}
Rl.Fragment = Zd;
Rl.jsx = au;
Rl.jsxs = au;
Zs.exports = Rl;
var c = Zs.exports,
  Ri = {},
  su = { exports: {} },
  Se = {},
  uu = { exports: {} },
  cu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, L) {
    var R = j.length;
    j.push(L);
    e: for (; 0 < R; ) {
      var K = (R - 1) >>> 1,
        Z = j[K];
      if (0 < l(Z, L)) ((j[K] = L), (j[R] = Z), (R = K));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var L = j[0],
      R = j.pop();
    if (R !== L) {
      j[0] = R;
      e: for (var K = 0, Z = j.length, Cr = Z >>> 1; K < Cr; ) {
        var jt = 2 * (K + 1) - 1,
          bl = j[jt],
          Pt = jt + 1,
          Nr = j[Pt];
        if (0 > l(bl, R))
          Pt < Z && 0 > l(Nr, bl)
            ? ((j[K] = Nr), (j[Pt] = R), (K = Pt))
            : ((j[K] = bl), (j[jt] = R), (K = jt));
        else if (Pt < Z && 0 > l(Nr, R)) ((j[K] = Nr), (j[Pt] = R), (K = Pt));
        else break e;
      }
    }
    return L;
  }
  function l(j, L) {
    var R = j.sortIndex - L.sortIndex;
    return R !== 0 ? R : j.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    u = [],
    h = 1,
    f = null,
    v = 3,
    g = !1,
    x = !1,
    w = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(j) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= j) (r(u), (L.sortIndex = L.expirationTime), t(s, L));
      else break;
      L = n(u);
    }
  }
  function y(j) {
    if (((w = !1), m(j), !x))
      if (n(s) !== null) ((x = !0), Zl(C));
      else {
        var L = n(u);
        L !== null && Jl(y, L.startTime - j);
      }
  }
  function C(j, L) {
    ((x = !1), w && ((w = !1), p(_), (_ = -1)), (g = !0));
    var R = v;
    try {
      for (m(L), f = n(s); f !== null && (!(f.expirationTime > L) || (j && !ve())); ) {
        var K = f.callback;
        if (typeof K == 'function') {
          ((f.callback = null), (v = f.priorityLevel));
          var Z = K(f.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof Z == 'function' ? (f.callback = Z) : f === n(s) && r(s),
            m(L));
        } else r(s);
        f = n(s);
      }
      if (f !== null) var Cr = !0;
      else {
        var jt = n(u);
        (jt !== null && Jl(y, jt.startTime - L), (Cr = !1));
      }
      return Cr;
    } finally {
      ((f = null), (v = R), (g = !1));
    }
  }
  var P = !1,
    T = null,
    _ = -1,
    $ = 5,
    O = -1;
  function ve() {
    return !(e.unstable_now() - O < $);
  }
  function Pn() {
    if (T !== null) {
      var j = e.unstable_now();
      O = j;
      var L = !0;
      try {
        L = T(!0, j);
      } finally {
        L ? Tn() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var Tn;
  if (typeof d == 'function')
    Tn = function () {
      d(Pn);
    };
  else if (typeof MessageChannel < 'u') {
    var _a = new MessageChannel(),
      _d = _a.port2;
    ((_a.port1.onmessage = Pn),
      (Tn = function () {
        _d.postMessage(null);
      }));
  } else
    Tn = function () {
      E(Pn, 0);
    };
  function Zl(j) {
    ((T = j), P || ((P = !0), Tn()));
  }
  function Jl(j, L) {
    _ = E(function () {
      j(e.unstable_now());
    }, L);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), Zl(C));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : ($ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (j) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var R = v;
      v = L;
      try {
        return j();
      } finally {
        v = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, L) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var R = v;
      v = j;
      try {
        return L();
      } finally {
        v = R;
      }
    }),
    (e.unstable_scheduleCallback = function (j, L, R) {
      var K = e.unstable_now();
      switch (
        (typeof R == 'object' && R !== null
          ? ((R = R.delay), (R = typeof R == 'number' && 0 < R ? K + R : K))
          : (R = K),
        j)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = R + Z),
        (j = {
          id: h++,
          callback: L,
          priorityLevel: j,
          startTime: R,
          expirationTime: Z,
          sortIndex: -1,
        }),
        R > K
          ? ((j.sortIndex = R),
            t(u, j),
            n(s) === null && j === n(u) && (w ? (p(_), (_ = -1)) : (w = !0), Jl(y, R - K)))
          : ((j.sortIndex = Z), t(s, j), x || g || ((x = !0), Zl(C))),
        j
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (j) {
      var L = v;
      return function () {
        var R = v;
        v = L;
        try {
          return j.apply(this, arguments);
        } finally {
          v = R;
        }
      };
    }));
})(cu);
uu.exports = cu;
var tf = uu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = S,
  we = tf;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var du = new Set(),
  Jn = {};
function Bt(e, t) {
  (mn(e, t), mn(e + 'Capture', t));
}
function mn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) du.add(t[e]);
}
var Je = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  zi = Object.prototype.hasOwnProperty,
  rf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  za = {},
  Ma = {};
function lf(e) {
  return zi.call(Ma, e) ? !0 : zi.call(za, e) ? !1 : rf.test(e) ? (Ma[e] = !0) : ((za[e] = !0), !1);
}
function of(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function af(e, t, n, r) {
  if (t === null || typeof t > 'u' || of(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fo = /[\-:]([a-z])/g;
function Uo(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Fo, Uo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Fo, Uo);
    ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Fo, Uo);
  ne[t] = new ce(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $o(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (af(t, n, l, r) && (n = null),
    r || l === null
      ? lf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for('react.element'),
  Gt = Symbol.for('react.portal'),
  Yt = Symbol.for('react.fragment'),
  Bo = Symbol.for('react.strict_mode'),
  Mi = Symbol.for('react.profiler'),
  fu = Symbol.for('react.provider'),
  pu = Symbol.for('react.context'),
  Ho = Symbol.for('react.forward_ref'),
  Ii = Symbol.for('react.suspense'),
  Di = Symbol.for('react.suspense_list'),
  Vo = Symbol.for('react.memo'),
  lt = Symbol.for('react.lazy'),
  mu = Symbol.for('react.offscreen'),
  Ia = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ia && e[Ia]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var V = Object.assign,
  ti;
function Un(e) {
  if (ti === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ti = (t && t[1]) || '';
    }
  return (
    `
` +
    ti +
    e
  );
}
var ni = !1;
function ri(e, t) {
  if (!e || ni) return '';
  ni = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var l = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((ni = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : '') ? Un(e) : '';
}
function sf(e) {
  switch (e.tag) {
    case 5:
      return Un(e.type);
    case 16:
      return Un('Lazy');
    case 13:
      return Un('Suspense');
    case 19:
      return Un('SuspenseList');
    case 0:
    case 2:
    case 15:
      return ((e = ri(e.type, !1)), e);
    case 11:
      return ((e = ri(e.type.render, !1)), e);
    case 1:
      return ((e = ri(e.type, !0)), e);
    default:
      return '';
  }
}
function Ai(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Yt:
      return 'Fragment';
    case Gt:
      return 'Portal';
    case Mi:
      return 'Profiler';
    case Bo:
      return 'StrictMode';
    case Ii:
      return 'Suspense';
    case Di:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case pu:
        return (e.displayName || 'Context') + '.Consumer';
      case fu:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ho:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Vo:
        return ((t = e.displayName || null), t !== null ? t : Ai(e.type) || 'Memo');
      case lt:
        ((t = e._payload), (e = e._init));
        try {
          return Ai(e(t));
        } catch {}
    }
  return null;
}
function uf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ai(t);
    case 8:
      return t === Bo ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function wt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function hu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function cf(e) {
  var t = hu(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = '' + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Tr(e) {
  e._valueTracker || (e._valueTracker = cf(e));
}
function vu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = hu(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function il(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fi(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Da(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    }));
}
function gu(e, t) {
  ((t = t.checked), t != null && $o(e, 'checked', t, !1));
}
function Ui(e, t) {
  gu(e, t);
  var n = wt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  (t.hasOwnProperty('value')
    ? $i(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && $i(e, t.type, wt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function Aa(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    ((t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n));
}
function $i(e, t, n) {
  (t !== 'number' || il(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var $n = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = '' + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Fa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if ($n(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ''), (n = t));
  }
  e._wrapperState = { initialValue: wt(n) };
}
function yu(e, t) {
  var n = wt(t.value),
    r = wt(t.defaultValue);
  (n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r));
}
function Ua(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function xu(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Hi(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? xu(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var _r,
  wu = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        _r = _r || document.createElement('div'),
          _r.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = _r.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  df = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Vn).forEach(function (e) {
  df.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vn[t] = Vn[e]));
  });
});
function Su(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Vn.hasOwnProperty(e) && Vn[e])
      ? ('' + t).trim()
      : t + 'px';
}
function ku(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Su(n, t[n], r);
      (n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var ff = V(
  { menuitem: !0 },
  {
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
);
function Vi(e, t) {
  if (t) {
    if (ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function Wi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Qi = null;
function Wo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ki = null,
  an = null,
  sn = null;
function $a(e) {
  if ((e = wr(e))) {
    if (typeof Ki != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Al(t)), Ki(e.stateNode, e.type, t));
  }
}
function Eu(e) {
  an ? (sn ? sn.push(e) : (sn = [e])) : (an = e);
}
function Cu() {
  if (an) {
    var e = an,
      t = sn;
    if (((sn = an = null), $a(e), t)) for (e = 0; e < t.length; e++) $a(t[e]);
  }
}
function Nu(e, t) {
  return e(t);
}
function ju() {}
var li = !1;
function Pu(e, t, n) {
  if (li) return e(t, n);
  li = !0;
  try {
    return Nu(e, t, n);
  } finally {
    ((li = !1), (an !== null || sn !== null) && (ju(), Cu()));
  }
}
function er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var Gi = !1;
if (Je)
  try {
    var Ln = {};
    (Object.defineProperty(Ln, 'passive', {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener('test', Ln, Ln),
      window.removeEventListener('test', Ln, Ln));
  } catch {
    Gi = !1;
  }
function pf(e, t, n, r, l, i, o, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var Wn = !1,
  ol = null,
  al = !1,
  Yi = null,
  mf = {
    onError: function (e) {
      ((Wn = !0), (ol = e));
    },
  };
function hf(e, t, n, r, l, i, o, a, s) {
  ((Wn = !1), (ol = null), pf.apply(mf, arguments));
}
function vf(e, t, n, r, l, i, o, a, s) {
  if ((hf.apply(this, arguments), Wn)) {
    if (Wn) {
      var u = ol;
      ((Wn = !1), (ol = null));
    } else throw Error(k(198));
    al || ((al = !0), (Yi = u));
  }
}
function Ht(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Ba(e) {
  if (Ht(e) !== e) throw Error(k(188));
}
function gf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ht(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return (Ba(l), e);
        if (i === r) return (Ba(l), t);
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          ((o = !0), (n = l), (r = i));
          break;
        }
        if (a === r) {
          ((o = !0), (r = l), (n = i));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            ((o = !0), (n = i), (r = l));
            break;
          }
          if (a === r) {
            ((o = !0), (r = i), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function _u(e) {
  return ((e = gf(e)), e !== null ? Lu(e) : null);
}
function Lu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ou = we.unstable_scheduleCallback,
  Ha = we.unstable_cancelCallback,
  yf = we.unstable_shouldYield,
  xf = we.unstable_requestPaint,
  G = we.unstable_now,
  wf = we.unstable_getCurrentPriorityLevel,
  Qo = we.unstable_ImmediatePriority,
  Ru = we.unstable_UserBlockingPriority,
  sl = we.unstable_NormalPriority,
  Sf = we.unstable_LowPriority,
  zu = we.unstable_IdlePriority,
  zl = null,
  We = null;
function kf(e) {
  if (We && typeof We.onCommitFiberRoot == 'function')
    try {
      We.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : Nf,
  Ef = Math.log,
  Cf = Math.LN2;
function Nf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ef(e) / Cf) | 0)) | 0);
}
var Lr = 64,
  Or = 4194304;
function Bn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ul(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Bn(a)) : ((i &= o), i !== 0 && (r = Bn(i)));
  } else ((o = n & ~l), o !== 0 ? (r = Bn(o)) : i !== 0 && (r = Bn(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function jf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Pf(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ae(i),
      a = 1 << o,
      s = l[o];
    (s === -1 ? (!(a & n) || a & r) && (l[o] = jf(a, t)) : s <= t && (e.expiredLanes |= a),
      (i &= ~a));
  }
}
function Xi(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function Mu() {
  var e = Lr;
  return ((Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e);
}
function ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n));
}
function Tf(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ae(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function Ko(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var I = 0;
function Iu(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
}
var Du,
  Go,
  Au,
  Fu,
  Uu,
  qi = !1,
  Rr = [],
  dt = null,
  ft = null,
  pt = null,
  tr = new Map(),
  nr = new Map(),
  ot = [],
  _f =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Va(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      dt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ft = null;
      break;
    case 'mouseover':
    case 'mouseout':
      pt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      tr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      nr.delete(t.pointerId);
  }
}
function On(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = wr(t)), t !== null && Go(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Lf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return ((dt = On(dt, e, t, n, r, l)), !0);
    case 'dragenter':
      return ((ft = On(ft, e, t, n, r, l)), !0);
    case 'mouseover':
      return ((pt = On(pt, e, t, n, r, l)), !0);
    case 'pointerover':
      var i = l.pointerId;
      return (tr.set(i, On(tr.get(i) || null, e, t, n, r, l)), !0);
    case 'gotpointercapture':
      return ((i = l.pointerId), nr.set(i, On(nr.get(i) || null, e, t, n, r, l)), !0);
  }
  return !1;
}
function $u(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tu(n)), t !== null)) {
          ((e.blockedOn = t),
            Uu(e.priority, function () {
              Au(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Qi = r), n.target.dispatchEvent(r), (Qi = null));
    } else return ((t = wr(n)), t !== null && Go(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Wa(e, t, n) {
  Gr(e) && n.delete(t);
}
function Of() {
  ((qi = !1),
    dt !== null && Gr(dt) && (dt = null),
    ft !== null && Gr(ft) && (ft = null),
    pt !== null && Gr(pt) && (pt = null),
    tr.forEach(Wa),
    nr.forEach(Wa));
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qi || ((qi = !0), we.unstable_scheduleCallback(we.unstable_NormalPriority, Of)));
}
function rr(e) {
  function t(l) {
    return Rn(l, e);
  }
  if (0 < Rr.length) {
    Rn(Rr[0], e);
    for (var n = 1; n < Rr.length; n++) {
      var r = Rr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    dt !== null && Rn(dt, e),
      ft !== null && Rn(ft, e),
      pt !== null && Rn(pt, e),
      tr.forEach(t),
      nr.forEach(t),
      n = 0;
    n < ot.length;
    n++
  )
    ((r = ot[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ot.length && ((n = ot[0]), n.blockedOn === null); )
    ($u(n), n.blockedOn === null && ot.shift());
}
var un = nt.ReactCurrentBatchConfig,
  cl = !0;
function Rf(e, t, n, r) {
  var l = I,
    i = un.transition;
  un.transition = null;
  try {
    ((I = 1), Yo(e, t, n, r));
  } finally {
    ((I = l), (un.transition = i));
  }
}
function zf(e, t, n, r) {
  var l = I,
    i = un.transition;
  un.transition = null;
  try {
    ((I = 4), Yo(e, t, n, r));
  } finally {
    ((I = l), (un.transition = i));
  }
}
function Yo(e, t, n, r) {
  if (cl) {
    var l = Zi(e, t, n, r);
    if (l === null) (hi(e, t, r, dl, n), Va(e, r));
    else if (Lf(l, e, t, n, r)) r.stopPropagation();
    else if ((Va(e, r), t & 4 && -1 < _f.indexOf(e))) {
      for (; l !== null; ) {
        var i = wr(l);
        if ((i !== null && Du(i), (i = Zi(e, t, n, r)), i === null && hi(e, t, r, dl, n), i === l))
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else hi(e, t, r, null, n);
  }
}
var dl = null;
function Zi(e, t, n, r) {
  if (((dl = null), (e = Wo(r)), (e = Lt(e)), e !== null))
    if (((t = Ht(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((dl = e), null);
}
function Bu(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (wf()) {
        case Qo:
          return 1;
        case Ru:
          return 4;
        case sl:
        case Sf:
          return 16;
        case zu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null,
  Xo = null,
  Yr = null;
function Hu() {
  if (Yr) return Yr;
  var e,
    t = Xo,
    n = t.length,
    r,
    l = 'value' in st ? st.value : st.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Yr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Xr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zr() {
  return !0;
}
function Qa() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? zr
        : Qa),
      (this.isPropagationStopped = Qa),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = zr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = zr));
      },
      persist: function () {},
      isPersistent: zr,
    }),
    t
  );
}
var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  qo = ke(En),
  xr = V({}, En, { view: 0, detail: 0 }),
  Mf = ke(xr),
  oi,
  ai,
  zn,
  Ml = V({}, xr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== zn &&
            (zn && e.type === 'mousemove'
              ? ((oi = e.screenX - zn.screenX), (ai = e.screenY - zn.screenY))
              : (ai = oi = 0),
            (zn = e)),
          oi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ai;
    },
  }),
  Ka = ke(Ml),
  If = V({}, Ml, { dataTransfer: 0 }),
  Df = ke(If),
  Af = V({}, xr, { relatedTarget: 0 }),
  si = ke(Af),
  Ff = V({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uf = ke(Ff),
  $f = V({}, En, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bf = ke($f),
  Hf = V({}, En, { data: 0 }),
  Ga = ke(Hf),
  Vf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Wf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Qf = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qf[e]) ? !!t[e] : !1;
}
function Zo() {
  return Kf;
}
var Gf = V({}, xr, {
    key: function (e) {
      if (e.key) {
        var t = Vf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Xr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Wf[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zo,
    charCode: function (e) {
      return e.type === 'keypress' ? Xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Xr(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Yf = ke(Gf),
  Xf = V({}, Ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ya = ke(Xf),
  qf = V({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zo,
  }),
  Zf = ke(qf),
  Jf = V({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = ke(Jf),
  ep = V({}, Ml, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tp = ke(ep),
  np = [9, 13, 27, 32],
  Jo = Je && 'CompositionEvent' in window,
  Qn = null;
Je && 'documentMode' in document && (Qn = document.documentMode);
var rp = Je && 'TextEvent' in window && !Qn,
  Vu = Je && (!Jo || (Qn && 8 < Qn && 11 >= Qn)),
  Xa = ' ',
  qa = !1;
function Wu(e, t) {
  switch (e) {
    case 'keyup':
      return np.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Qu(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var Xt = !1;
function lp(e, t) {
  switch (e) {
    case 'compositionend':
      return Qu(t);
    case 'keypress':
      return t.which !== 32 ? null : ((qa = !0), Xa);
    case 'textInput':
      return ((e = t.data), e === Xa && qa ? null : e);
    default:
      return null;
  }
}
function ip(e, t) {
  if (Xt)
    return e === 'compositionend' || (!Jo && Wu(e, t))
      ? ((e = Hu()), (Yr = Xo = st = null), (Xt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Vu && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var op = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!op[e.type] : t === 'textarea';
}
function Ku(e, t, n, r) {
  (Eu(r),
    (t = fl(t, 'onChange')),
    0 < t.length &&
      ((n = new qo('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
}
var Kn = null,
  lr = null;
function ap(e) {
  rc(e, 0);
}
function Il(e) {
  var t = Jt(e);
  if (vu(t)) return e;
}
function sp(e, t) {
  if (e === 'change') return t;
}
var Gu = !1;
if (Je) {
  var ui;
  if (Je) {
    var ci = 'oninput' in document;
    if (!ci) {
      var Ja = document.createElement('div');
      (Ja.setAttribute('oninput', 'return;'), (ci = typeof Ja.oninput == 'function'));
    }
    ui = ci;
  } else ui = !1;
  Gu = ui && (!document.documentMode || 9 < document.documentMode);
}
function ba() {
  Kn && (Kn.detachEvent('onpropertychange', Yu), (lr = Kn = null));
}
function Yu(e) {
  if (e.propertyName === 'value' && Il(lr)) {
    var t = [];
    (Ku(t, lr, e, Wo(e)), Pu(ap, t));
  }
}
function up(e, t, n) {
  e === 'focusin'
    ? (ba(), (Kn = t), (lr = n), Kn.attachEvent('onpropertychange', Yu))
    : e === 'focusout' && ba();
}
function cp(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Il(lr);
}
function dp(e, t) {
  if (e === 'click') return Il(t);
}
function fp(e, t) {
  if (e === 'input' || e === 'change') return Il(t);
}
function pp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == 'function' ? Object.is : pp;
function ir(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!zi.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function es(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ts(e, t) {
  var n = es(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = es(n);
  }
}
function Xu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Xu(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function qu() {
  for (var e = window, t = il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = il(e.document);
  }
  return t;
}
function bo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function mp(e) {
  var t = qu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xu(n.ownerDocument.documentElement, n)) {
    if (r !== null && bo(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ts(n, i)));
        var o = ts(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
  }
}
var hp = Je && 'documentMode' in document && 11 >= document.documentMode,
  qt = null,
  Ji = null,
  Gn = null,
  bi = !1;
function ns(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bi ||
    qt == null ||
    qt !== il(r) ||
    ((r = qt),
    'selectionStart' in r && bo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gn && ir(Gn, r)) ||
      ((Gn = r),
      (r = fl(Ji, 'onSelect')),
      0 < r.length &&
        ((t = new qo('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qt))));
}
function Mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Zt = {
    animationend: Mr('Animation', 'AnimationEnd'),
    animationiteration: Mr('Animation', 'AnimationIteration'),
    animationstart: Mr('Animation', 'AnimationStart'),
    transitionend: Mr('Transition', 'TransitionEnd'),
  },
  di = {},
  Zu = {};
Je &&
  ((Zu = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Zt.animationend.animation,
    delete Zt.animationiteration.animation,
    delete Zt.animationstart.animation),
  'TransitionEvent' in window || delete Zt.transitionend.transition);
function Dl(e) {
  if (di[e]) return di[e];
  if (!Zt[e]) return e;
  var t = Zt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zu) return (di[e] = t[n]);
  return e;
}
var Ju = Dl('animationend'),
  bu = Dl('animationiteration'),
  ec = Dl('animationstart'),
  tc = Dl('transitionend'),
  nc = new Map(),
  rs =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function kt(e, t) {
  (nc.set(e, t), Bt(t, [e]));
}
for (var fi = 0; fi < rs.length; fi++) {
  var pi = rs[fi],
    vp = pi.toLowerCase(),
    gp = pi[0].toUpperCase() + pi.slice(1);
  kt(vp, 'on' + gp);
}
kt(Ju, 'onAnimationEnd');
kt(bu, 'onAnimationIteration');
kt(ec, 'onAnimationStart');
kt('dblclick', 'onDoubleClick');
kt('focusin', 'onFocus');
kt('focusout', 'onBlur');
kt(tc, 'onTransitionEnd');
mn('onMouseEnter', ['mouseout', 'mouseover']);
mn('onMouseLeave', ['mouseout', 'mouseover']);
mn('onPointerEnter', ['pointerout', 'pointerover']);
mn('onPointerLeave', ['pointerout', 'pointerover']);
Bt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Bt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
);
Bt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Bt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Bt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Bt('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Hn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  yp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Hn));
function ls(e, t, n) {
  var r = e.type || 'unknown-event';
  ((e.currentTarget = n), vf(r, t, void 0, e), (e.currentTarget = null));
}
function rc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
          (ls(l, a, u), (i = s));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          (ls(l, a, u), (i = s));
        }
    }
  }
  if (al) throw ((e = Yi), (al = !1), (Yi = null), e);
}
function A(e, t) {
  var n = t[lo];
  n === void 0 && (n = t[lo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (lc(t, e, 2, !1), n.add(r));
}
function mi(e, t, n) {
  var r = 0;
  (t && (r |= 4), lc(n, e, r, t));
}
var Ir = '_reactListening' + Math.random().toString(36).slice(2);
function or(e) {
  if (!e[Ir]) {
    ((e[Ir] = !0),
      du.forEach(function (n) {
        n !== 'selectionchange' && (yp.has(n) || mi(n, !1, e), mi(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ir] || ((t[Ir] = !0), mi('selectionchange', !1, t));
  }
}
function lc(e, t, n, r) {
  switch (Bu(t)) {
    case 1:
      var l = Rf;
      break;
    case 4:
      l = zf;
      break;
    default:
      l = Yo;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Gi || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function hi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Lt(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Pu(function () {
    var u = i,
      h = Wo(n),
      f = [];
    e: {
      var v = nc.get(e);
      if (v !== void 0) {
        var g = qo,
          x = e;
        switch (e) {
          case 'keypress':
            if (Xr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = Yf;
            break;
          case 'focusin':
            ((x = 'focus'), (g = si));
            break;
          case 'focusout':
            ((x = 'blur'), (g = si));
            break;
          case 'beforeblur':
          case 'afterblur':
            g = si;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Ka;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Df;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Zf;
            break;
          case Ju:
          case bu:
          case ec:
            g = Uf;
            break;
          case tc:
            g = bf;
            break;
          case 'scroll':
            g = Mf;
            break;
          case 'wheel':
            g = tp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Bf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Ya;
        }
        var w = (t & 4) !== 0,
          E = !w && e === 'scroll',
          p = w ? (v !== null ? v + 'Capture' : null) : v;
        w = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var y = m.stateNode;
          if (
            (m.tag === 5 &&
              y !== null &&
              ((m = y), p !== null && ((y = er(d, p)), y != null && w.push(ar(d, y, m)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < w.length && ((v = new g(v, x, null, n, h)), f.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          v && n !== Qi && (x = n.relatedTarget || n.fromElement) && (Lt(x) || x[be]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            h.window === h ? h : (v = h.ownerDocument) ? v.defaultView || v.parentWindow : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = u),
              (x = x ? Lt(x) : null),
              x !== null && ((E = Ht(x)), x !== E || (x.tag !== 5 && x.tag !== 6)) && (x = null))
            : ((g = null), (x = u)),
          g !== x)
        ) {
          if (
            ((w = Ka),
            (y = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Ya), (y = 'onPointerLeave'), (p = 'onPointerEnter'), (d = 'pointer')),
            (E = g == null ? v : Jt(g)),
            (m = x == null ? v : Jt(x)),
            (v = new w(y, d + 'leave', g, n, h)),
            (v.target = E),
            (v.relatedTarget = m),
            (y = null),
            Lt(h) === u &&
              ((w = new w(p, d + 'enter', x, n, h)),
              (w.target = m),
              (w.relatedTarget = E),
              (y = w)),
            (E = y),
            g && x)
          )
            t: {
              for (w = g, p = x, d = 0, m = w; m; m = Wt(m)) d++;
              for (m = 0, y = p; y; y = Wt(y)) m++;
              for (; 0 < d - m; ) ((w = Wt(w)), d--);
              for (; 0 < m - d; ) ((p = Wt(p)), m--);
              for (; d--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                ((w = Wt(w)), (p = Wt(p)));
              }
              w = null;
            }
          else w = null;
          (g !== null && is(f, v, g, w, !1), x !== null && E !== null && is(f, E, x, w, !0));
        }
      }
      e: {
        if (
          ((v = u ? Jt(u) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && v.type === 'file'))
        )
          var C = sp;
        else if (Za(v))
          if (Gu) C = fp;
          else {
            C = cp;
            var P = up;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (C = dp);
        if (C && (C = C(e, u))) {
          Ku(f, C, n, h);
          break e;
        }
        (P && P(e, v, u),
          e === 'focusout' &&
            (P = v._wrapperState) &&
            P.controlled &&
            v.type === 'number' &&
            $i(v, 'number', v.value));
      }
      switch (((P = u ? Jt(u) : window), e)) {
        case 'focusin':
          (Za(P) || P.contentEditable === 'true') && ((qt = P), (Ji = u), (Gn = null));
          break;
        case 'focusout':
          Gn = Ji = qt = null;
          break;
        case 'mousedown':
          bi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((bi = !1), ns(f, n, h));
          break;
        case 'selectionchange':
          if (hp) break;
        case 'keydown':
        case 'keyup':
          ns(f, n, h);
      }
      var T;
      if (Jo)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        Xt
          ? Wu(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      (_ &&
        (Vu &&
          n.locale !== 'ko' &&
          (Xt || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && Xt && (T = Hu())
            : ((st = h), (Xo = 'value' in st ? st.value : st.textContent), (Xt = !0))),
        (P = fl(u, _)),
        0 < P.length &&
          ((_ = new Ga(_, e, null, n, h)),
          f.push({ event: _, listeners: P }),
          T ? (_.data = T) : ((T = Qu(n)), T !== null && (_.data = T)))),
        (T = rp ? lp(e, n) : ip(e, n)) &&
          ((u = fl(u, 'onBeforeInput')),
          0 < u.length &&
            ((h = new Ga('onBeforeInput', 'beforeinput', null, n, h)),
            f.push({ event: h, listeners: u }),
            (h.data = T))));
    }
    rc(f, t);
  });
}
function ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = er(e, n)),
      i != null && r.unshift(ar(e, i, l)),
      (i = er(e, t)),
      i != null && r.push(ar(e, i, l))),
      (e = e.return));
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function is(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      l
        ? ((s = er(n, i)), s != null && o.unshift(ar(n, s, a)))
        : l || ((s = er(n, i)), s != null && o.push(ar(n, s, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var xp = /\r\n?/g,
  wp = /\u0000|\uFFFD/g;
function os(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      xp,
      `
`,
    )
    .replace(wp, '');
}
function Dr(e, t, n) {
  if (((t = os(t)), os(e) !== t && n)) throw Error(k(425));
}
function pl() {}
var eo = null,
  to = null;
function no(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ro = typeof setTimeout == 'function' ? setTimeout : void 0,
  Sp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  as = typeof Promise == 'function' ? Promise : void 0,
  kp =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof as < 'u'
        ? function (e) {
            return as.resolve(null).then(e).catch(Ep);
          }
        : ro;
function Ep(e) {
  setTimeout(function () {
    throw e;
  });
}
function vi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          (e.removeChild(l), rr(t));
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  rr(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function ss(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cn = Math.random().toString(36).slice(2),
  He = '__reactFiber$' + Cn,
  sr = '__reactProps$' + Cn,
  be = '__reactContainer$' + Cn,
  lo = '__reactEvents$' + Cn,
  Cp = '__reactListeners$' + Cn,
  Np = '__reactHandles$' + Cn;
function Lt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[be] || n[He])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ss(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = ss(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function wr(e) {
  return (
    (e = e[He] || e[be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Al(e) {
  return e[sr] || null;
}
var io = [],
  bt = -1;
function Et(e) {
  return { current: e };
}
function F(e) {
  0 > bt || ((e.current = io[bt]), (io[bt] = null), bt--);
}
function D(e, t) {
  (bt++, (io[bt] = e.current), (e.current = t));
}
var St = {},
  oe = Et(St),
  pe = Et(!1),
  Dt = St;
function hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return ((e = e.childContextTypes), e != null);
}
function ml() {
  (F(pe), F(oe));
}
function us(e, t, n) {
  if (oe.current !== St) throw Error(k(168));
  (D(oe, t), D(pe, n));
}
function ic(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, uf(e) || 'Unknown', l));
  return V({}, n, r);
}
function hl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Dt = oe.current),
    D(oe, e),
    D(pe, pe.current),
    !0
  );
}
function cs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  (n
    ? ((e = ic(e, t, Dt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(oe),
      D(oe, e))
    : F(pe),
    D(pe, n));
}
var Ye = null,
  Fl = !1,
  gi = !1;
function oc(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function jp(e) {
  ((Fl = !0), oc(e));
}
function Ct() {
  if (!gi && Ye !== null) {
    gi = !0;
    var e = 0,
      t = I;
    try {
      var n = Ye;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ye = null), (Fl = !1));
    } catch (l) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Ou(Qo, Ct), l);
    } finally {
      ((I = t), (gi = !1));
    }
  }
  return null;
}
var en = [],
  tn = 0,
  vl = null,
  gl = 0,
  Ne = [],
  je = 0,
  At = null,
  Xe = 1,
  qe = '';
function Tt(e, t) {
  ((en[tn++] = gl), (en[tn++] = vl), (vl = e), (gl = t));
}
function ac(e, t, n) {
  ((Ne[je++] = Xe), (Ne[je++] = qe), (Ne[je++] = At), (At = e));
  var r = Xe;
  e = qe;
  var l = 32 - Ae(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - Ae(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Xe = (1 << (32 - Ae(t) + l)) | (n << l) | r),
      (qe = i + e));
  } else ((Xe = (1 << i) | (n << l) | r), (qe = e));
}
function ea(e) {
  e.return !== null && (Tt(e, 1), ac(e, 1, 0));
}
function ta(e) {
  for (; e === vl; ) ((vl = en[--tn]), (en[tn] = null), (gl = en[--tn]), (en[tn] = null));
  for (; e === At; )
    ((At = Ne[--je]),
      (Ne[je] = null),
      (qe = Ne[--je]),
      (Ne[je] = null),
      (Xe = Ne[--je]),
      (Ne[je] = null));
}
var xe = null,
  ye = null,
  U = !1,
  Ie = null;
function sc(e, t) {
  var n = Te(5, null, null, 0);
  ((n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ds(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ye = mt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = At !== null ? { id: Xe, overflow: qe } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function oo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ao(e) {
  if (U) {
    var t = ye;
    if (t) {
      var n = t;
      if (!ds(e, t)) {
        if (oo(e)) throw Error(k(418));
        t = mt(n.nextSibling);
        var r = xe;
        t && ds(e, t) ? sc(r, n) : ((e.flags = (e.flags & -4097) | 2), (U = !1), (xe = e));
      }
    } else {
      if (oo(e)) throw Error(k(418));
      ((e.flags = (e.flags & -4097) | 2), (U = !1), (xe = e));
    }
  }
}
function fs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function Ar(e) {
  if (e !== xe) return !1;
  if (!U) return (fs(e), (U = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !no(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (oo(e)) throw (uc(), Error(k(418)));
    for (; t; ) (sc(e, t), (t = mt(t.nextSibling)));
  }
  if ((fs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ye = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = xe ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function uc() {
  for (var e = ye; e; ) e = mt(e.nextSibling);
}
function vn() {
  ((ye = xe = null), (U = !1));
}
function na(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Pp = nt.ReactCurrentBatchConfig;
function Mn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Fr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      k(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
    )
  );
}
function ps(e) {
  var t = e._init;
  return t(e._payload);
}
function cc(e) {
  function t(p, d) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) (t(p, d), (d = d.sibling));
    return null;
  }
  function r(p, d) {
    for (p = new Map(); d !== null; )
      (d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling));
    return p;
  }
  function l(p, d) {
    return ((p = yt(p, d)), (p.index = 0), (p.sibling = null), p);
  }
  function i(p, d, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null ? ((m = m.index), m < d ? ((p.flags |= 2), d) : m) : ((p.flags |= 2), d))
        : ((p.flags |= 1048576), d)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, d, m, y) {
    return d === null || d.tag !== 6
      ? ((d = Ci(m, p.mode, y)), (d.return = p), d)
      : ((d = l(d, m)), (d.return = p), d);
  }
  function s(p, d, m, y) {
    var C = m.type;
    return C === Yt
      ? h(p, d, m.props.children, y, m.key)
      : d !== null &&
          (d.elementType === C ||
            (typeof C == 'object' && C !== null && C.$$typeof === lt && ps(C) === d.type))
        ? ((y = l(d, m.props)), (y.ref = Mn(p, d, m)), (y.return = p), y)
        : ((y = nl(m.type, m.key, m.props, null, p.mode, y)),
          (y.ref = Mn(p, d, m)),
          (y.return = p),
          y);
  }
  function u(p, d, m, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = Ni(m, p.mode, y)), (d.return = p), d)
      : ((d = l(d, m.children || [])), (d.return = p), d);
  }
  function h(p, d, m, y, C) {
    return d === null || d.tag !== 7
      ? ((d = It(m, p.mode, y, C)), (d.return = p), d)
      : ((d = l(d, m)), (d.return = p), d);
  }
  function f(p, d, m) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return ((d = Ci('' + d, p.mode, m)), (d.return = p), d);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case Pr:
          return (
            (m = nl(d.type, d.key, d.props, null, p.mode, m)),
            (m.ref = Mn(p, null, d)),
            (m.return = p),
            m
          );
        case Gt:
          return ((d = Ni(d, p.mode, m)), (d.return = p), d);
        case lt:
          var y = d._init;
          return f(p, y(d._payload), m);
      }
      if ($n(d) || _n(d)) return ((d = It(d, p.mode, m, null)), (d.return = p), d);
      Fr(p, d);
    }
    return null;
  }
  function v(p, d, m, y) {
    var C = d !== null ? d.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return C !== null ? null : a(p, d, '' + m, y);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Pr:
          return m.key === C ? s(p, d, m, y) : null;
        case Gt:
          return m.key === C ? u(p, d, m, y) : null;
        case lt:
          return ((C = m._init), v(p, d, C(m._payload), y));
      }
      if ($n(m) || _n(m)) return C !== null ? null : h(p, d, m, y, null);
      Fr(p, m);
    }
    return null;
  }
  function g(p, d, m, y, C) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return ((p = p.get(m) || null), a(d, p, '' + y, C));
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Pr:
          return ((p = p.get(y.key === null ? m : y.key) || null), s(d, p, y, C));
        case Gt:
          return ((p = p.get(y.key === null ? m : y.key) || null), u(d, p, y, C));
        case lt:
          var P = y._init;
          return g(p, d, m, P(y._payload), C);
      }
      if ($n(y) || _n(y)) return ((p = p.get(m) || null), h(d, p, y, C, null));
      Fr(d, y);
    }
    return null;
  }
  function x(p, d, m, y) {
    for (var C = null, P = null, T = d, _ = (d = 0), $ = null; T !== null && _ < m.length; _++) {
      T.index > _ ? (($ = T), (T = null)) : ($ = T.sibling);
      var O = v(p, T, m[_], y);
      if (O === null) {
        T === null && (T = $);
        break;
      }
      (e && T && O.alternate === null && t(p, T),
        (d = i(O, d, _)),
        P === null ? (C = O) : (P.sibling = O),
        (P = O),
        (T = $));
    }
    if (_ === m.length) return (n(p, T), U && Tt(p, _), C);
    if (T === null) {
      for (; _ < m.length; _++)
        ((T = f(p, m[_], y)),
          T !== null && ((d = i(T, d, _)), P === null ? (C = T) : (P.sibling = T), (P = T)));
      return (U && Tt(p, _), C);
    }
    for (T = r(p, T); _ < m.length; _++)
      (($ = g(T, p, _, m[_], y)),
        $ !== null &&
          (e && $.alternate !== null && T.delete($.key === null ? _ : $.key),
          (d = i($, d, _)),
          P === null ? (C = $) : (P.sibling = $),
          (P = $)));
    return (
      e &&
        T.forEach(function (ve) {
          return t(p, ve);
        }),
      U && Tt(p, _),
      C
    );
  }
  function w(p, d, m, y) {
    var C = _n(m);
    if (typeof C != 'function') throw Error(k(150));
    if (((m = C.call(m)), m == null)) throw Error(k(151));
    for (
      var P = (C = null), T = d, _ = (d = 0), $ = null, O = m.next();
      T !== null && !O.done;
      _++, O = m.next()
    ) {
      T.index > _ ? (($ = T), (T = null)) : ($ = T.sibling);
      var ve = v(p, T, O.value, y);
      if (ve === null) {
        T === null && (T = $);
        break;
      }
      (e && T && ve.alternate === null && t(p, T),
        (d = i(ve, d, _)),
        P === null ? (C = ve) : (P.sibling = ve),
        (P = ve),
        (T = $));
    }
    if (O.done) return (n(p, T), U && Tt(p, _), C);
    if (T === null) {
      for (; !O.done; _++, O = m.next())
        ((O = f(p, O.value, y)),
          O !== null && ((d = i(O, d, _)), P === null ? (C = O) : (P.sibling = O), (P = O)));
      return (U && Tt(p, _), C);
    }
    for (T = r(p, T); !O.done; _++, O = m.next())
      ((O = g(T, p, _, O.value, y)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? _ : O.key),
          (d = i(O, d, _)),
          P === null ? (C = O) : (P.sibling = O),
          (P = O)));
    return (
      e &&
        T.forEach(function (Pn) {
          return t(p, Pn);
        }),
      U && Tt(p, _),
      C
    );
  }
  function E(p, d, m, y) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Yt &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Pr:
          e: {
            for (var C = m.key, P = d; P !== null; ) {
              if (P.key === C) {
                if (((C = m.type), C === Yt)) {
                  if (P.tag === 7) {
                    (n(p, P.sibling), (d = l(P, m.props.children)), (d.return = p), (p = d));
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === lt && ps(C) === P.type)
                ) {
                  (n(p, P.sibling),
                    (d = l(P, m.props)),
                    (d.ref = Mn(p, P, m)),
                    (d.return = p),
                    (p = d));
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === Yt
              ? ((d = It(m.props.children, p.mode, y, m.key)), (d.return = p), (p = d))
              : ((y = nl(m.type, m.key, m.props, null, p.mode, y)),
                (y.ref = Mn(p, d, m)),
                (y.return = p),
                (p = y));
          }
          return o(p);
        case Gt:
          e: {
            for (P = m.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  (n(p, d.sibling), (d = l(d, m.children || [])), (d.return = p), (p = d));
                  break e;
                } else {
                  n(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            ((d = Ni(m, p.mode, y)), (d.return = p), (p = d));
          }
          return o(p);
        case lt:
          return ((P = m._init), E(p, d, P(m._payload), y));
      }
      if ($n(m)) return x(p, d, m, y);
      if (_n(m)) return w(p, d, m, y);
      Fr(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        d !== null && d.tag === 6
          ? (n(p, d.sibling), (d = l(d, m)), (d.return = p), (p = d))
          : (n(p, d), (d = Ci(m, p.mode, y)), (d.return = p), (p = d)),
        o(p))
      : n(p, d);
  }
  return E;
}
var gn = cc(!0),
  dc = cc(!1),
  yl = Et(null),
  xl = null,
  nn = null,
  ra = null;
function la() {
  ra = nn = xl = null;
}
function ia(e) {
  var t = yl.current;
  (F(yl), (e._currentValue = t));
}
function so(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cn(e, t) {
  ((xl = e),
    (ra = nn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), (e.firstContext = null)));
}
function Le(e) {
  var t = e._currentValue;
  if (ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nn === null)) {
      if (xl === null) throw Error(k(308));
      ((nn = e), (xl.dependencies = { lanes: 0, firstContext: e }));
    } else nn = nn.next = e;
  return t;
}
var Ot = null;
function oa(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function fc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), oa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    et(e, r)
  );
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function aa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pc(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ze(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), oa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function qr(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ko(e, n));
  }
}
function ms(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function wl(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      u = s.next;
    ((s.next = null), o === null ? (i = u) : (o.next = u), (o = s));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== o && (a === null ? (h.firstBaseUpdate = u) : (a.next = u), (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var f = l.baseState;
    ((o = 0), (h = u = s = null), (a = i));
    do {
      var v = a.lane,
        g = a.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((v = t), (g = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == 'function')) {
                f = x.call(g, f, v);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = w.payload), (v = typeof x == 'function' ? x.call(g, f, v) : x), v == null))
                break e;
              f = V({}, f, v);
              break e;
            case 2:
              it = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (v = l.effects), v === null ? (l.effects = [a]) : v.push(a));
      } else
        ((g = {
          eventTime: g,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((u = h = g), (s = f)) : (h = h.next = g),
          (o |= v));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((v = a), (a = v.next), (v.next = null), (l.lastBaseUpdate = v), (l.shared.pending = null));
      }
    } while (!0);
    if (
      (h === null && (s = f),
      (l.baseState = s),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Ut |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function hs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Sr = {},
  Qe = Et(Sr),
  ur = Et(Sr),
  cr = Et(Sr);
function Rt(e) {
  if (e === Sr) throw Error(k(174));
  return e;
}
function sa(e, t) {
  switch ((D(cr, t), D(ur, e), D(Qe, Sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hi(null, '');
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hi(t, e)));
  }
  (F(Qe), D(Qe, t));
}
function yn() {
  (F(Qe), F(ur), F(cr));
}
function mc(e) {
  Rt(cr.current);
  var t = Rt(Qe.current),
    n = Hi(t, e.type);
  t !== n && (D(ur, e), D(Qe, n));
}
function ua(e) {
  ur.current === e && (F(Qe), F(ur));
}
var B = Et(0);
function Sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var yi = [];
function ca() {
  for (var e = 0; e < yi.length; e++) yi[e]._workInProgressVersionPrimary = null;
  yi.length = 0;
}
var Zr = nt.ReactCurrentDispatcher,
  xi = nt.ReactCurrentBatchConfig,
  Ft = 0,
  H = null,
  X = null,
  J = null,
  kl = !1,
  Yn = !1,
  dr = 0,
  Tp = 0;
function re() {
  throw Error(k(321));
}
function da(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function fa(e, t, n, r, l, i) {
  if (
    ((Ft = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zr.current = e === null || e.memoizedState === null ? Rp : zp),
    (e = n(r, l)),
    Yn)
  ) {
    i = 0;
    do {
      if (((Yn = !1), (dr = 0), 25 <= i)) throw Error(k(301));
      ((i += 1), (J = X = null), (t.updateQueue = null), (Zr.current = Mp), (e = n(r, l)));
    } while (Yn);
  }
  if (
    ((Zr.current = El),
    (t = X !== null && X.next !== null),
    (Ft = 0),
    (J = X = H = null),
    (kl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function pa() {
  var e = dr !== 0;
  return ((dr = 0), e);
}
function Be() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (J === null ? (H.memoizedState = J = e) : (J = J.next = e), J);
}
function Oe() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) ((J = t), (X = e));
  else {
    if (e === null) throw Error(k(310));
    ((X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e));
  }
  return J;
}
function fr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function wi(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = i.next), (i.next = o));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var a = (o = null),
      s = null,
      u = i;
    do {
      var h = u.lane;
      if ((Ft & h) === h)
        (s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (s === null ? ((a = s = f), (o = r)) : (s = s.next = f), (H.lanes |= h), (Ut |= h));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (s === null ? (o = r) : (s.next = a),
      Ue(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (H.lanes |= i), (Ut |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Si(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== l);
    (Ue(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function hc() {}
function vc(e, t) {
  var n = H,
    r = Oe(),
    l = t(),
    i = !Ue(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    ma(xc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), pr(9, yc.bind(null, n, r, l, t), void 0, null), b === null))
      throw Error(k(349));
    Ft & 30 || gc(n, t, l);
  }
  return l;
}
function gc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function yc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), wc(t) && Sc(e));
}
function xc(e, t, n) {
  return n(function () {
    wc(t) && Sc(e);
  });
}
function wc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Sc(e) {
  var t = et(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function vs(e) {
  var t = Be();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Op.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function kc() {
  return Oe().memoizedState;
}
function Jr(e, t, n, r) {
  var l = Be();
  ((H.flags |= e), (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ul(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && da(r, o.deps))) {
      l.memoizedState = pr(t, n, i, r);
      return;
    }
  }
  ((H.flags |= e), (l.memoizedState = pr(1 | t, n, i, r)));
}
function gs(e, t) {
  return Jr(8390656, 8, e, t);
}
function ma(e, t) {
  return Ul(2048, 8, e, t);
}
function Ec(e, t) {
  return Ul(4, 2, e, t);
}
function Cc(e, t) {
  return Ul(4, 4, e, t);
}
function Nc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jc(e, t, n) {
  return ((n = n != null ? n.concat([e]) : null), Ul(4, 4, Nc.bind(null, t, e), n));
}
function ha() {}
function Pc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && da(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Tc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && da(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _c(e, t, n) {
  return Ft & 21
    ? (Ue(n, t) || ((n = Mu()), (H.lanes |= n), (Ut |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function _p(e, t) {
  var n = I;
  ((I = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = xi.transition;
  xi.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((I = n), (xi.transition = r));
  }
}
function Lc() {
  return Oe().memoizedState;
}
function Lp(e, t, n) {
  var r = gt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Oc(e)))
    Rc(t, n);
  else if (((n = fc(e, t, n, r)), n !== null)) {
    var l = se();
    (Fe(n, e, r, l), zc(n, t, r));
  }
}
function Op(e, t, n) {
  var r = gt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oc(e)) Rc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Ue(a, o))) {
          var s = t.interleaved;
          (s === null ? ((l.next = l), oa(t)) : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = fc(e, t, l, r)), n !== null && ((l = se()), Fe(n, e, r, l), zc(n, t, r)));
  }
}
function Oc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Rc(e, t) {
  Yn = kl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function zc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ko(e, n));
  }
}
var El = {
    readContext: Le,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Rp = {
    readContext: Le,
    useCallback: function (e, t) {
      return ((Be().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Le,
    useEffect: gs,
    useImperativeHandle: function (e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), Jr(4194308, 4, Nc.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return Jr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Jr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Lp.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: vs,
    useDebugValue: ha,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = vs(!1),
        t = e[0];
      return ((e = _p.bind(null, e[1])), (Be().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Be();
      if (U) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(k(349));
        Ft & 30 || gc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        gs(xc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        pr(9, yc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = b.identifierPrefix;
      if (U) {
        var n = qe,
          r = Xe;
        ((n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = dr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':'));
      } else ((n = Tp++), (t = ':' + t + 'r' + n.toString(32) + ':'));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zp = {
    readContext: Le,
    useCallback: Pc,
    useContext: Le,
    useEffect: ma,
    useImperativeHandle: jc,
    useInsertionEffect: Ec,
    useLayoutEffect: Cc,
    useMemo: Tc,
    useReducer: wi,
    useRef: kc,
    useState: function () {
      return wi(fr);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = Oe();
      return _c(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = wi(fr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: hc,
    useSyncExternalStore: vc,
    useId: Lc,
    unstable_isNewReconciler: !1,
  },
  Mp = {
    readContext: Le,
    useCallback: Pc,
    useContext: Le,
    useEffect: ma,
    useImperativeHandle: jc,
    useInsertionEffect: Ec,
    useLayoutEffect: Cc,
    useMemo: Tc,
    useReducer: Si,
    useRef: kc,
    useState: function () {
      return Si(fr);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = Oe();
      return X === null ? (t.memoizedState = e) : _c(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Si(fr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: hc,
    useSyncExternalStore: vc,
    useId: Lc,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    ((t = V({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function uo(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var $l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ht(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = gt(e),
      i = Ze(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (Fe(t, e, l, r), qr(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = gt(e),
      i = Ze(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (Fe(t, e, l, r), qr(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = gt(e),
      l = Ze(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = ht(e, l, r)),
      t !== null && (Fe(t, e, r, n), qr(t, e, r)));
  },
};
function ys(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ir(n, r) || !ir(l, i)
        : !0
  );
}
function Mc(e, t, n) {
  var r = !1,
    l = St,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Le(i))
      : ((l = me(t) ? Dt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? hn(e, l) : St)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xs(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $l.enqueueReplaceState(t, t.state, null));
}
function co(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), aa(e));
  var i = t.contextType;
  (typeof i == 'object' && i !== null
    ? (l.context = Le(i))
    : ((i = me(t) ? Dt : oe.current), (l.context = hn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (uo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
      t !== l.state && $l.enqueueReplaceState(l, l.state, null),
      wl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
}
function xn(e, t) {
  try {
    var n = '',
      r = t;
    do ((n += sf(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ki(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ip = typeof WeakMap == 'function' ? WeakMap : Map;
function Ic(e, t, n) {
  ((n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Nl || ((Nl = !0), (ko = r)), fo(e, t));
    }),
    n
  );
}
function Dc(e, t, n) {
  ((n = Ze(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        fo(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        (fo(e, t), typeof r != 'function' && (vt === null ? (vt = new Set([this])) : vt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function ws(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ip();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Xp.bind(null, e, t, n)), t.then(e, e));
}
function Ss(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ks(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Ze(-1, 1)), (t.tag = 2), ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Dp = nt.ReactCurrentOwner,
  fe = !1;
function ae(e, t, n, r) {
  t.child = e === null ? dc(t, null, n, r) : gn(t, e.child, n, r);
}
function Es(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    cn(t, l),
    (r = fa(e, t, n, r, i, l)),
    (n = pa()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), tt(e, t, l))
      : (U && n && ea(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function Cs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Ea(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ac(e, t, i, r, l))
      : ((e = nl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : ir), n(o, r) && e.ref === t.ref))
      return tt(e, t, l);
  }
  return ((t.flags |= 1), (e = yt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function Ac(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ir(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0)) e.flags & 131072 && (fe = !0);
      else return ((t.lanes = e.lanes), tt(e, t, l));
  }
  return po(e, t, n, r, l);
}
function Fc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(ln, ge),
        (ge |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          D(ln, ge),
          (ge |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(ln, ge),
        (ge |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(ln, ge),
      (ge |= r));
  return (ae(e, t, l, n), t.child);
}
function Uc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function po(e, t, n, r, l) {
  var i = me(n) ? Dt : oe.current;
  return (
    (i = hn(t, i)),
    cn(t, l),
    (n = fa(e, t, n, r, i, l)),
    (r = pa()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), tt(e, t, l))
      : (U && r && ea(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Ns(e, t, n, r, l) {
  if (me(n)) {
    var i = !0;
    hl(t);
  } else i = !1;
  if ((cn(t, l), t.stateNode === null)) (br(e, t), Mc(t, n, r), co(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Le(u))
      : ((u = me(n) ? Dt : oe.current), (u = hn(t, u)));
    var h = n.getDerivedStateFromProps,
      f = typeof h == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || s !== u) && xs(t, o, r, u)),
      (it = !1));
    var v = t.memoizedState;
    ((o.state = v),
      wl(t, r, o, l),
      (s = t.memoizedState),
      a !== r || v !== s || pe.current || it
        ? (typeof h == 'function' && (uo(t, n, h, r), (s = t.memoizedState)),
          (a = it || ys(t, n, a, r, v, s, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1)));
  } else {
    ((o = t.stateNode),
      pc(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ze(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (v = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Le(s))
        : ((s = me(n) ? Dt : oe.current), (s = hn(t, s))));
    var g = n.getDerivedStateFromProps;
    ((h = typeof g == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== f || v !== s) && xs(t, o, r, s)),
      (it = !1),
      (v = t.memoizedState),
      (o.state = v),
      wl(t, r, o, l));
    var x = t.memoizedState;
    a !== f || v !== x || pe.current || it
      ? (typeof g == 'function' && (uo(t, n, g, r), (x = t.memoizedState)),
        (u = it || ys(t, n, u, r, v, x, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return mo(e, t, n, r, i, l);
}
function mo(e, t, n, r, l, i) {
  Uc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && cs(t, n, !1), tt(e, t, i));
  ((r = t.stateNode), (Dp.current = t));
  var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = gn(t, e.child, null, i)), (t.child = gn(t, null, a, i)))
      : ae(e, t, a, i),
    (t.memoizedState = r.state),
    l && cs(t, n, !0),
    t.child
  );
}
function $c(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? us(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && us(e, t.context, !1),
    sa(e, t.containerInfo));
}
function js(e, t, n, r, l) {
  return (vn(), na(l), (t.flags |= 256), ae(e, t, n, r), t.child);
}
var ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    D(B, l & 1),
    e === null)
  )
    return (
      ao(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Vl(o, r, 0, null)),
              (e = It(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = vo(n)),
              (t.memoizedState = ho),
              e)
            : va(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Ap(e, t, o, r, a, l, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling));
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = yt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = yt(a, i)) : ((i = It(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? vo(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ho),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = yt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function va(e, t) {
  return (
    (t = Vl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ur(e, t, n, r) {
  return (
    r !== null && na(r),
    gn(t, e.child, null, n),
    (e = va(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ap(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ki(Error(k(422)))), Ur(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Vl({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = It(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && gn(t, e.child, null, o),
          (t.child.memoizedState = vo(o)),
          (t.memoizedState = ho),
          i);
  if (!(t.mode & 1)) return Ur(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return ((r = a), (i = Error(k(419))), (r = ki(i, r, void 0)), Ur(e, t, o, r));
  }
  if (((a = (o & e.childLanes) !== 0), fe || a)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 && l !== i.retryLane && ((i.retryLane = l), et(e, l), Fe(r, e, l, -1)));
    }
    return (ka(), (r = ki(Error(k(421)))), Ur(e, t, o, r));
  }
  return l.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = qp.bind(null, e)), (l._reactRetry = t), null)
    : ((e = i.treeContext),
      (ye = mt(l.nextSibling)),
      (xe = t),
      (U = !0),
      (Ie = null),
      e !== null &&
        ((Ne[je++] = Xe),
        (Ne[je++] = qe),
        (Ne[je++] = At),
        (Xe = e.id),
        (qe = e.overflow),
        (At = t)),
      (t = va(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ps(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), so(e.return, t, n));
}
function Ei(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Hc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = B.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ps(e, n, t);
        else if (e.tag === 19) Ps(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate), e !== null && Sl(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          Ei(t, !1, l, n, i));
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Sl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Ei(t, !0, n, null, i);
        break;
      case 'together':
        Ei(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function br(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Ut |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      ((e = e.sibling), (n = n.sibling = yt(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Fp(e, t, n) {
  switch (t.tag) {
    case 3:
      ($c(t), vn());
      break;
    case 5:
      mc(t);
      break;
    case 1:
      me(t.type) && hl(t);
      break;
    case 4:
      sa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (D(yl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Bc(e, t, n)
            : (D(B, B.current & 1), (e = tt(e, t, n)), e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Fc(e, t, n));
  }
  return tt(e, t, n);
}
var Vc, go, Wc, Qc;
Vc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
go = function () {};
Wc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Rt(Qe.current));
    var i = null;
    switch (n) {
      case 'input':
        ((l = Fi(e, l)), (r = Fi(e, r)), (i = []));
        break;
      case 'select':
        ((l = V({}, l, { value: void 0 })), (r = V({}, r, { value: void 0 })), (i = []));
        break;
      case 'textarea':
        ((l = Bi(e, l)), (r = Bi(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = pl);
    }
    Vi(n, r);
    var o;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === 'style') {
          var a = l[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Jn.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
            for (o in s) s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
          } else (n || (i || (i = []), i.push(u, n)), (n = s));
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') || (i = i || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Jn.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && A('scroll', e), i || a === s || (i = []))
                  : (i = i || []).push(u, s));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Up(e, t, n) {
  var r = t.pendingProps;
  switch ((ta(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (le(t), null);
    case 1:
      return (me(t.type) && ml(), le(t), null);
    case 3:
      return (
        (r = t.stateNode),
        yn(),
        F(pe),
        F(oe),
        ca(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ar(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (No(Ie), (Ie = null)))),
        go(e, t),
        le(t),
        null
      );
    case 5:
      ua(t);
      var l = Rt(cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Wc(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return (le(t), null);
        }
        if (((e = Rt(Qe.current)), Ar(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[He] = t), (r[sr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              (A('cancel', r), A('close', r));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              A('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Hn.length; l++) A(Hn[l], r);
              break;
            case 'source':
              A('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              (A('error', r), A('load', r));
              break;
            case 'details':
              A('toggle', r);
              break;
            case 'input':
              (Da(r, i), A('invalid', r));
              break;
            case 'select':
              ((r._wrapperState = { wasMultiple: !!i.multiple }), A('invalid', r));
              break;
            case 'textarea':
              (Fa(r, i), A('invalid', r));
          }
          (Vi(n, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && Dr(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 && Dr(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Jn.hasOwnProperty(o) && a != null && o === 'onScroll' && A('scroll', r);
            }
          switch (n) {
            case 'input':
              (Tr(r), Aa(r, i, !0));
              break;
            case 'textarea':
              (Tr(r), Ua(r));
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = pl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = xu(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[He] = t),
            (e[sr] = r),
            Vc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Wi(n, r)), n)) {
              case 'dialog':
                (A('cancel', e), A('close', e), (l = r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                (A('load', e), (l = r));
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Hn.length; l++) A(Hn[l], e);
                l = r;
                break;
              case 'source':
                (A('error', e), (l = r));
                break;
              case 'img':
              case 'image':
              case 'link':
                (A('error', e), A('load', e), (l = r));
                break;
              case 'details':
                (A('toggle', e), (l = r));
                break;
              case 'input':
                (Da(e, r), (l = Fi(e, r)), A('invalid', e));
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  A('invalid', e));
                break;
              case 'textarea':
                (Fa(e, r), (l = Bi(e, r)), A('invalid', e));
                break;
              default:
                l = r;
            }
            (Vi(n, l), (a = l));
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === 'style'
                  ? ku(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && wu(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && bn(e, s)
                        : typeof s == 'number' && bn(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Jn.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && A('scroll', e)
                          : s != null && $o(e, i, s, o));
              }
            switch (n) {
              case 'input':
                (Tr(e), Aa(e, r, !1));
                break;
              case 'textarea':
                (Tr(e), Ua(e));
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + wt(r.value));
                break;
              case 'select':
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? on(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && on(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = pl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (le(t), null);
    case 6:
      if (e && t.stateNode != null) Qc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = Rt(cr.current)), Rt(Qe.current), Ar(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r));
      }
      return (le(t), null);
    case 13:
      if (
        (F(B),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ye !== null && t.mode & 1 && !(t.flags & 128))
          (uc(), vn(), (t.flags |= 98560), (i = !1));
        else if (((i = Ar(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(k(317));
            i[He] = t;
          } else (vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (le(t), (i = !1));
        } else (Ie !== null && (No(Ie), (Ie = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || B.current & 1 ? q === 0 && (q = 3) : ka())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (yn(), go(e, t), e === null && or(t.stateNode.containerInfo), le(t), null);
    case 10:
      return (ia(t.type._context), le(t), null);
    case 17:
      return (me(t.type) && ml(), le(t), null);
    case 19:
      if ((F(B), (i = t.memoizedState), i === null)) return (le(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) In(i, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Sl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    In(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling));
                return (D(B, (B.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            G() > wn &&
            ((t.flags |= 128), (r = !0), In(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Sl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              In(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !U)
            )
              return (le(t), null);
          } else
            2 * G() - i.renderingStartTime > wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), In(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = G()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function $p(e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return (
        me(t.type) && ml(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yn(),
        F(pe),
        F(oe),
        ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ua(t), null);
    case 13:
      if ((F(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        vn();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return (F(B), null);
    case 4:
      return (yn(), null);
    case 10:
      return (ia(t.type._context), null);
    case 22:
    case 23:
      return (Sa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var $r = !1,
  ie = !1,
  Bp = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function yo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Ts = !1;
function Hp(e, t) {
  if (((eo = cl), (e = qu()), bo(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            u = 0,
            h = 0,
            f = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (l !== 0 && f.nodeType !== 3) || (a = o + l),
                f !== i || (r !== 0 && f.nodeType !== 3) || (s = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              ((v = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (v === n && ++u === l && (a = o),
                v === i && ++h === r && (s = o),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = v), (v = f.parentNode));
            }
            f = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (to = { focusedElem: e, selectionRange: n }, cl = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (N = e));
    else
      for (; N !== null; ) {
        t = N;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    E = x.memoizedState,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ze(t.type, w), E);
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (y) {
          W(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (N = e));
          break;
        }
        N = t.return;
      }
  return ((x = Ts), (Ts = !1), x);
}
function Xn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && yo(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Kc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Kc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[He], delete t[sr], delete t[lo], delete t[Cp], delete t[Np])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Gc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _s(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wo(e, t, n), e = e.sibling; e !== null; ) (wo(e, t, n), (e = e.sibling));
}
function So(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (So(e, t, n), e = e.sibling; e !== null; ) (So(e, t, n), (e = e.sibling));
}
var ee = null,
  Me = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) (Yc(e, t, n), (n = n.sibling));
}
function Yc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == 'function')
    try {
      We.onCommitFiberUnmount(zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || rn(n, t);
    case 6:
      var r = ee,
        l = Me;
      ((ee = null),
        rt(e, t, n),
        (ee = r),
        (Me = l),
        ee !== null &&
          (Me
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode)));
      break;
    case 18:
      ee !== null &&
        (Me
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8 ? vi(e.parentNode, n) : e.nodeType === 1 && vi(e, n),
            rr(e))
          : vi(ee, n.stateNode));
      break;
    case 4:
      ((r = ee),
        (l = Me),
        (ee = n.stateNode.containerInfo),
        (Me = !0),
        rt(e, t, n),
        (ee = r),
        (Me = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          ((i = i.tag), o !== void 0 && (i & 2 || i & 4) && yo(n, t, o), (l = l.next));
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (!ie && (rn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (a) {
          W(n, t, a);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), rt(e, t, n), (ie = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function Ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Bp()),
      t.forEach(function (r) {
        var l = Zp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ee = a.stateNode), (Me = !1));
              break e;
            case 3:
              ((ee = a.stateNode.containerInfo), (Me = !0));
              break e;
            case 4:
              ((ee = a.stateNode.containerInfo), (Me = !0));
              break e;
          }
          a = a.return;
        }
        if (ee === null) throw Error(k(160));
        (Yc(i, o, l), (ee = null), (Me = !1));
        var s = l.alternate;
        (s !== null && (s.return = null), (l.return = null));
      } catch (u) {
        W(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Xc(t, e), (t = t.sibling));
}
function Xc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), $e(e), r & 4)) {
        try {
          (Xn(3, e, e.return), Bl(3, e));
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          Xn(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      (Re(t, e), $e(e), r & 512 && n !== null && rn(n, n.return));
      break;
    case 5:
      if ((Re(t, e), $e(e), r & 512 && n !== null && rn(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          bn(l, '');
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            (a === 'input' && i.type === 'radio' && i.name != null && gu(l, i), Wi(a, o));
            var u = Wi(a, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                f = s[o + 1];
              h === 'style'
                ? ku(l, f)
                : h === 'dangerouslySetInnerHTML'
                  ? wu(l, f)
                  : h === 'children'
                    ? bn(l, f)
                    : $o(l, h, f, u);
            }
            switch (a) {
              case 'input':
                Ui(l, i);
                break;
              case 'textarea':
                yu(l, i);
                break;
              case 'select':
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? on(l, !!i.multiple, g, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? on(l, !!i.multiple, i.defaultValue, !0)
                      : on(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[sr] = i;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Re(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((Re(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          rr(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      (Re(t, e), $e(e));
      break;
    case 13:
      (Re(t, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (xa = G())),
        r & 4 && Ls(e));
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (u = ie) || h), Re(t, e), (ie = u)) : Re(t, e),
        $e(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !h && e.mode & 1))
          for (N = e, h = e.child; h !== null; ) {
            for (f = N = h; N !== null; ) {
              switch (((v = N), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xn(4, v, v.return);
                  break;
                case 1:
                  rn(v, v.return);
                  var x = v.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    ((r = v), (n = v.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  rn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Rs(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (N = g)) : Rs(f);
            }
            h = h.sibling;
          }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                ((l = f.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (o = s != null && s.hasOwnProperty('display') ? s.display : null),
                      (a.style.display = Su('display', o))));
              } catch (w) {
                W(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (w) {
                W(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (h === f && (h = null), (f = f.return));
          }
          (h === f && (h = null), (f.sibling.return = f.return), (f = f.sibling));
        }
      }
      break;
    case 19:
      (Re(t, e), $e(e), r & 4 && Ls(e));
      break;
    case 21:
      break;
    default:
      (Re(t, e), $e(e));
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (bn(l, ''), (r.flags &= -33));
          var i = _s(e);
          So(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = _s(e);
          wo(e, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vp(e, t, n) {
  ((N = e), qc(e));
}
function qc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || $r;
      if (!o) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || ie;
        a = $r;
        var u = ie;
        if ((($r = o), (ie = s) && !u))
          for (N = l; N !== null; )
            ((o = N),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? zs(l)
                : s !== null
                  ? ((s.return = o), (N = s))
                  : zs(l));
        for (; i !== null; ) ((N = i), qc(i), (i = i.sibling));
        ((N = l), ($r = a), (ie = u));
      }
      Os(e);
    } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (N = i)) : Os(e);
  }
}
function Os(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && hs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hs(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && rr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && xo(t));
      } catch (v) {
        W(t, t.return, v);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (N = n));
      break;
    }
    N = t.return;
  }
}
function Rs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (N = n));
      break;
    }
    N = t.return;
  }
}
function zs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            xo(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            xo(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (N = a));
      break;
    }
    N = t.return;
  }
}
var Wp = Math.ceil,
  Cl = nt.ReactCurrentDispatcher,
  ga = nt.ReactCurrentOwner,
  _e = nt.ReactCurrentBatchConfig,
  M = 0,
  b = null,
  Y = null,
  te = 0,
  ge = 0,
  ln = Et(0),
  q = 0,
  mr = null,
  Ut = 0,
  Hl = 0,
  ya = 0,
  qn = null,
  de = null,
  xa = 0,
  wn = 1 / 0,
  Ge = null,
  Nl = !1,
  ko = null,
  vt = null,
  Br = !1,
  ut = null,
  jl = 0,
  Zn = 0,
  Eo = null,
  el = -1,
  tl = 0;
function se() {
  return M & 6 ? G() : el !== -1 ? el : (el = G());
}
function gt(e) {
  return e.mode & 1
    ? M & 2 && te !== 0
      ? te & -te
      : Pp.transition !== null
        ? (tl === 0 && (tl = Mu()), tl)
        : ((e = I), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bu(e.type))), e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Zn) throw ((Zn = 0), (Eo = null), Error(k(185)));
  (yr(e, n, r),
    (!(M & 2) || e !== b) &&
      (e === b && (!(M & 2) && (Hl |= n), q === 4 && at(e, te)),
      he(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((wn = G() + 500), Fl && Ct())));
}
function he(e, t) {
  var n = e.callbackNode;
  Pf(e, t);
  var r = ul(e, e === b ? te : 0);
  if (r === 0) (n !== null && Ha(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ha(n), t === 1))
      (e.tag === 0 ? jp(Ms.bind(null, e)) : oc(Ms.bind(null, e)),
        kp(function () {
          !(M & 6) && Ct();
        }),
        (n = null));
    else {
      switch (Iu(r)) {
        case 1:
          n = Qo;
          break;
        case 4:
          n = Ru;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = zu;
          break;
        default:
          n = sl;
      }
      n = ld(n, Zc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Zc(e, t) {
  if (((el = -1), (tl = 0), M & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = ul(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = bc();
    (b !== e || te !== t) && ((Ge = null), (wn = G() + 500), Mt(e, t));
    do
      try {
        Gp();
        break;
      } catch (a) {
        Jc(e, a);
      }
    while (!0);
    (la(), (Cl.current = i), (M = l), Y !== null ? (t = 0) : ((b = null), (te = 0), (t = q)));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Xi(e)), l !== 0 && ((r = l), (t = Co(e, l)))), t === 1))
      throw ((n = mr), Mt(e, 0), at(e, r), he(e, G()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Qp(l) &&
          ((t = Pl(e, r)), t === 2 && ((i = Xi(e)), i !== 0 && ((r = i), (t = Co(e, i)))), t === 1))
      )
        throw ((n = mr), Mt(e, 0), at(e, r), he(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          _t(e, de, Ge);
          break;
        case 3:
          if ((at(e, r), (r & 130023424) === r && ((t = xa + 500 - G()), 10 < t))) {
            if (ul(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (se(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = ro(_t.bind(null, e, de, Ge), t);
            break;
          }
          _t(e, de, Ge);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ae(r);
            ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Wp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ro(_t.bind(null, e, de, Ge), r);
            break;
          }
          _t(e, de, Ge);
          break;
        case 5:
          _t(e, de, Ge);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return (he(e, G()), e.callbackNode === n ? Zc.bind(null, e) : null);
}
function Co(e, t) {
  var n = qn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = Pl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && No(t)),
    e
  );
}
function No(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function Qp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function at(e, t) {
  for (
    t &= ~ya, t &= ~Hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Ms(e) {
  if (M & 6) throw Error(k(327));
  dn();
  var t = ul(e, 0);
  if (!(t & 1)) return (he(e, G()), null);
  var n = Pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xi(e);
    r !== 0 && ((t = r), (n = Co(e, r)));
  }
  if (n === 1) throw ((n = mr), Mt(e, 0), at(e, t), he(e, G()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, de, Ge),
    he(e, G()),
    null
  );
}
function wa(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    ((M = n), M === 0 && ((wn = G() + 500), Fl && Ct()));
  }
}
function $t(e) {
  ut !== null && ut.tag === 0 && !(M & 6) && dn();
  var t = M;
  M |= 1;
  var n = _e.transition,
    r = I;
  try {
    if (((_e.transition = null), (I = 1), e)) return e();
  } finally {
    ((I = r), (_e.transition = n), (M = t), !(M & 6) && Ct());
  }
}
function Sa() {
  ((ge = ln.current), F(ln));
}
function Mt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Sp(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((ta(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ml());
          break;
        case 3:
          (yn(), F(pe), F(oe), ca());
          break;
        case 5:
          ua(r);
          break;
        case 4:
          yn();
          break;
        case 13:
          F(B);
          break;
        case 19:
          F(B);
          break;
        case 10:
          ia(r.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = yt(e.current, null)),
    (te = ge = t),
    (q = 0),
    (mr = null),
    (ya = Hl = Ut = 0),
    (de = qn = null),
    Ot !== null)
  ) {
    for (t = 0; t < Ot.length; t++)
      if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = l), (r.next = o));
        }
        n.pending = r;
      }
    Ot = null;
  }
  return e;
}
function Jc(e, t) {
  do {
    var n = Y;
    try {
      if ((la(), (Zr.current = El), kl)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        kl = !1;
      }
      if (
        ((Ft = 0),
        (J = X = H = null),
        (Yn = !1),
        (dr = 0),
        (ga.current = null),
        n === null || n.return === null)
      ) {
        ((q = 1), (mr = t), (Y = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = te),
          (a.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            h = a,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Ss(o);
          if (g !== null) {
            ((g.flags &= -257), ks(g, o, a, i, t), g.mode & 1 && ws(i, u, t), (t = g), (s = u));
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              (w.add(s), (t.updateQueue = w));
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              (ws(i, u, t), ka());
              break e;
            }
            s = Error(k(426));
          }
        } else if (U && a.mode & 1) {
          var E = Ss(o);
          if (E !== null) {
            (!(E.flags & 65536) && (E.flags |= 256), ks(E, o, a, i, t), na(xn(s, a)));
            break e;
          }
        }
        ((i = s = xn(s, a)), q !== 4 && (q = 2), qn === null ? (qn = [i]) : qn.push(i), (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var p = Ic(i, s, t);
              ms(i, p);
              break e;
            case 1:
              a = s;
              var d = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (vt === null || !vt.has(m))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var y = Dc(i, a, t);
                ms(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      td(n);
    } catch (C) {
      ((t = C), Y === n && n !== null && (Y = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function bc() {
  var e = Cl.current;
  return ((Cl.current = El), e === null ? El : e);
}
function ka() {
  ((q === 0 || q === 3 || q === 2) && (q = 4),
    b === null || (!(Ut & 268435455) && !(Hl & 268435455)) || at(b, te));
}
function Pl(e, t) {
  var n = M;
  M |= 2;
  var r = bc();
  (b !== e || te !== t) && ((Ge = null), Mt(e, t));
  do
    try {
      Kp();
      break;
    } catch (l) {
      Jc(e, l);
    }
  while (!0);
  if ((la(), (M = n), (Cl.current = r), Y !== null)) throw Error(k(261));
  return ((b = null), (te = 0), q);
}
function Kp() {
  for (; Y !== null; ) ed(Y);
}
function Gp() {
  for (; Y !== null && !yf(); ) ed(Y);
}
function ed(e) {
  var t = rd(e.alternate, e, ge);
  ((e.memoizedProps = e.pendingProps), t === null ? td(e) : (Y = t), (ga.current = null));
}
function td(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $p(n, t)), n !== null)) {
        ((n.flags &= 32767), (Y = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((q = 6), (Y = null));
        return;
      }
    } else if (((n = Up(n, t, ge)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function _t(e, t, n) {
  var r = I,
    l = _e.transition;
  try {
    ((_e.transition = null), (I = 1), Yp(e, t, n, r));
  } finally {
    ((_e.transition = l), (I = r));
  }
  return null;
}
function Yp(e, t, n, r) {
  do dn();
  while (ut !== null);
  if (M & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(k(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Tf(e, i),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Br ||
      ((Br = !0),
      ld(sl, function () {
        return (dn(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = _e.transition), (_e.transition = null));
    var o = I;
    I = 1;
    var a = M;
    ((M |= 4),
      (ga.current = null),
      Hp(e, n),
      Xc(n, e),
      mp(to),
      (cl = !!eo),
      (to = eo = null),
      (e.current = n),
      Vp(n),
      xf(),
      (M = a),
      (I = o),
      (_e.transition = i));
  } else e.current = n;
  if (
    (Br && ((Br = !1), (ut = e), (jl = l)),
    (i = e.pendingLanes),
    i === 0 && (vt = null),
    kf(n.stateNode),
    he(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (Nl) throw ((Nl = !1), (e = ko), (ko = null), e);
  return (
    jl & 1 && e.tag !== 0 && dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Eo ? Zn++ : ((Zn = 0), (Eo = e))) : (Zn = 0),
    Ct(),
    null
  );
}
function dn() {
  if (ut !== null) {
    var e = Iu(jl),
      t = _e.transition,
      n = I;
    try {
      if (((_e.transition = null), (I = 16 > e ? 16 : e), ut === null)) var r = !1;
      else {
        if (((e = ut), (ut = null), (jl = 0), M & 6)) throw Error(k(331));
        var l = M;
        for (M |= 4, N = e.current; N !== null; ) {
          var i = N,
            o = i.child;
          if (N.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (N = u; N !== null; ) {
                  var h = N;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xn(8, h, i);
                  }
                  var f = h.child;
                  if (f !== null) ((f.return = h), (N = f));
                  else
                    for (; N !== null; ) {
                      h = N;
                      var v = h.sibling,
                        g = h.return;
                      if ((Kc(h), h === u)) {
                        N = null;
                        break;
                      }
                      if (v !== null) {
                        ((v.return = g), (N = v));
                        break;
                      }
                      N = g;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var E = w.sibling;
                    ((w.sibling = null), (w = E));
                  } while (w !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (N = o));
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                ((p.return = i.return), (N = p));
                break e;
              }
              N = i.return;
            }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          o = N;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) ((m.return = o), (N = m));
          else
            e: for (o = d; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bl(9, a);
                  }
                } catch (C) {
                  W(a, a.return, C);
                }
              if (a === o) {
                N = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                ((y.return = a.return), (N = y));
                break e;
              }
              N = a.return;
            }
        }
        if (((M = l), Ct(), We && typeof We.onPostCommitFiberRoot == 'function'))
          try {
            We.onPostCommitFiberRoot(zl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((I = n), (_e.transition = t));
    }
  }
  return !1;
}
function Is(e, t, n) {
  ((t = xn(n, t)),
    (t = Ic(e, t, 1)),
    (e = ht(e, t, 1)),
    (t = se()),
    e !== null && (yr(e, 1, t), he(e, t)));
}
function W(e, t, n) {
  if (e.tag === 3) Is(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Is(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (vt === null || !vt.has(r)))
        ) {
          ((e = xn(n, e)),
            (e = Dc(t, e, 1)),
            (t = ht(t, e, 1)),
            (e = se()),
            t !== null && (yr(t, 1, e), he(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Xp(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (q === 4 || (q === 3 && (te & 130023424) === te && 500 > G() - xa) ? Mt(e, 0) : (ya |= n)),
    he(e, t));
}
function nd(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Or), (Or <<= 1), !(Or & 130023424) && (Or = 4194304)) : (t = 1));
  var n = se();
  ((e = et(e, t)), e !== null && (yr(e, t, n), he(e, n)));
}
function qp(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), nd(e, n));
}
function Zp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  (r !== null && r.delete(t), nd(e, n));
}
var rd;
rd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((fe = !1), Fp(e, t, n));
      fe = !!(e.flags & 131072);
    }
  else ((fe = !1), U && t.flags & 1048576 && ac(t, gl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (br(e, t), (e = t.pendingProps));
      var l = hn(t, oe.current);
      (cn(t, n), (l = fa(null, t, r, e, l, n)));
      var i = pa();
      return (
        (t.flags |= 1),
        typeof l == 'object' && l !== null && typeof l.render == 'function' && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((i = !0), hl(t)) : (i = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            aa(t),
            (l.updater = $l),
            (t.stateNode = l),
            (l._reactInternals = t),
            co(t, r, e, n),
            (t = mo(null, t, r, !0, i, n)))
          : ((t.tag = 0), U && i && ea(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (br(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = bp(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = po(null, t, r, e, n);
            break e;
          case 1:
            t = Ns(null, t, r, e, n);
            break e;
          case 11:
            t = Es(null, t, r, e, n);
            break e;
          case 14:
            t = Cs(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        po(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Ns(e, t, r, l, n)
      );
    case 3:
      e: {
        if (($c(t), e === null)) throw Error(k(387));
        ((r = t.pendingProps), (i = t.memoizedState), (l = i.element), pc(e, t), wl(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((l = xn(Error(k(423)), t)), (t = js(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = xn(Error(k(424)), t)), (t = js(e, t, r, n, l)));
            break e;
          } else
            for (
              ye = mt(t.stateNode.containerInfo.firstChild),
                xe = t,
                U = !0,
                Ie = null,
                n = dc(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((vn(), r === l)) {
            t = tt(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mc(t),
        e === null && ao(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        no(r, l) ? (o = null) : i !== null && no(r, i) && (t.flags |= 32),
        Uc(e, t),
        ae(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && ao(t), null);
    case 13:
      return Bc(e, t, n);
    case 4:
      return (
        sa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = gn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Es(e, t, r, l, n)
      );
    case 7:
      return (ae(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(yl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ue(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ((s = Ze(-1, n & -n)), (s.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        (h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)),
                          (u.pending = s));
                      }
                    }
                    ((i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      so(i.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  so(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (ae(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        cn(t, n),
        (l = Le(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return ((r = t.type), (l = ze(r, t.pendingProps)), (l = ze(r.type, l)), Cs(e, t, r, l, n));
    case 15:
      return Ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        br(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), hl(t)) : (e = !1),
        cn(t, n),
        Mc(t, r, l),
        co(t, r, l, n),
        mo(null, t, r, !0, e, n)
      );
    case 19:
      return Hc(e, t, n);
    case 22:
      return Fc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function ld(e, t) {
  return Ou(e, t);
}
function Jp(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Te(e, t, n, r) {
  return new Jp(e, t, n, r);
}
function Ea(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function bp(e) {
  if (typeof e == 'function') return Ea(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ho)) return 11;
    if (e === Vo) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Ea(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Yt:
        return It(n.children, l, i, t);
      case Bo:
        ((o = 8), (l |= 8));
        break;
      case Mi:
        return ((e = Te(12, n, t, l | 2)), (e.elementType = Mi), (e.lanes = i), e);
      case Ii:
        return ((e = Te(13, n, t, l)), (e.elementType = Ii), (e.lanes = i), e);
      case Di:
        return ((e = Te(19, n, t, l)), (e.elementType = Di), (e.lanes = i), e);
      case mu:
        return Vl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case fu:
              o = 10;
              break e;
            case pu:
              o = 9;
              break e;
            case Ho:
              o = 11;
              break e;
            case Vo:
              o = 14;
              break e;
            case lt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return ((t = Te(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
}
function It(e, t, n, r) {
  return ((e = Te(7, e, r, t)), (e.lanes = n), e);
}
function Vl(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = mu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ci(e, t, n) {
  return ((e = Te(6, e, null, t)), (e.lanes = n), e);
}
function Ni(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function em(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ii(0)),
    (this.expirationTimes = ii(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ii(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Ca(e, t, n, r, l, i, o, a, s) {
  return (
    (e = new em(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Te(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    aa(i),
    e
  );
}
function tm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function id(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return ic(e, n, t);
  }
  return t;
}
function od(e, t, n, r, l, i, o, a, s) {
  return (
    (e = Ca(n, r, !0, e, l, i, o, a, s)),
    (e.context = id(null)),
    (n = e.current),
    (r = se()),
    (l = gt(n)),
    (i = Ze(r, l)),
    (i.callback = t ?? null),
    ht(n, i, l),
    (e.current.lanes = l),
    yr(e, l, r),
    he(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = gt(l);
  return (
    (n = id(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ht(l, t, o)),
    e !== null && (Fe(e, l, o, i), qr(e, l, o)),
    o
  );
}
function Tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ds(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Na(e, t) {
  (Ds(e, t), (e = e.alternate) && Ds(e, t));
}
function nm() {
  return null;
}
var ad =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ja(e) {
  this._internalRoot = e;
}
Ql.prototype.render = ja.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Wl(e, t, null, null);
};
Ql.prototype.unmount = ja.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ($t(function () {
      Wl(null, e, null, null);
    }),
      (t[be] = null));
  }
};
function Ql(e) {
  this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    (ot.splice(n, 0, e), n === 0 && $u(e));
  }
};
function Pa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function As() {}
function rm(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Tl(o);
        i.call(u);
      };
    }
    var o = od(t, r, e, 0, null, !1, !1, '', As);
    return (
      (e._reactRootContainer = o),
      (e[be] = o.current),
      or(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Tl(s);
      a.call(u);
    };
  }
  var s = Ca(e, 0, !1, null, null, !1, !1, '', As);
  return (
    (e._reactRootContainer = s),
    (e[be] = s.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Wl(t, s, n, r);
    }),
    s
  );
}
function Gl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var s = Tl(o);
        a.call(s);
      };
    }
    Wl(t, o, e, l);
  } else o = rm(n, t, e, l, r);
  return Tl(o);
}
Du = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bn(t.pendingLanes);
        n !== 0 && (Ko(t, n | 1), he(t, G()), !(M & 6) && ((wn = G() + 500), Ct()));
      }
      break;
    case 13:
      ($t(function () {
        var r = et(e, 1);
        if (r !== null) {
          var l = se();
          Fe(r, e, 1, l);
        }
      }),
        Na(e, 1));
  }
};
Go = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = se();
      Fe(t, e, 134217728, n);
    }
    Na(e, 134217728);
  }
};
Au = function (e) {
  if (e.tag === 13) {
    var t = gt(e),
      n = et(e, t);
    if (n !== null) {
      var r = se();
      Fe(n, e, t, r);
    }
    Na(e, t);
  }
};
Fu = function () {
  return I;
};
Uu = function (e, t) {
  var n = I;
  try {
    return ((I = e), t());
  } finally {
    I = n;
  }
};
Ki = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ui(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Al(r);
            if (!l) throw Error(k(90));
            (vu(r), Ui(r, l));
          }
        }
      }
      break;
    case 'textarea':
      yu(e, n);
      break;
    case 'select':
      ((t = n.value), t != null && on(e, !!n.multiple, t, !1));
  }
};
Nu = wa;
ju = $t;
var lm = { usingClientEntryPoint: !1, Events: [wr, Jt, Al, Eu, Cu, wa] },
  Dn = {
    findFiberByHostInstance: Lt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  im = {
    bundleType: Dn.bundleType,
    version: Dn.version,
    rendererPackageName: Dn.rendererPackageName,
    rendererConfig: Dn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = _u(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || nm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber)
    try {
      ((zl = Hr.inject(im)), (We = Hr));
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lm;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pa(t)) throw Error(k(200));
  return tm(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Pa(e)) throw Error(k(299));
  var n = !1,
    r = '',
    l = ad;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ca(e, 1, !1, null, null, n, !1, r, l)),
    (e[be] = t.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    new ja(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return ((e = _u(t)), (e = e === null ? null : e.stateNode), e);
};
Se.flushSync = function (e) {
  return $t(e);
};
Se.hydrate = function (e, t, n) {
  if (!Kl(t)) throw Error(k(200));
  return Gl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Pa(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = ad;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = od(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[be] = t.current),
    or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Ql(t);
};
Se.render = function (e, t, n) {
  if (!Kl(t)) throw Error(k(200));
  return Gl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Kl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? ($t(function () {
        Gl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[be] = null));
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = wa;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Kl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Gl(e, t, n, !1, r);
};
Se.version = '18.3.1-next-f1338f8080-20240426';
function sd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd);
    } catch (e) {
      console.error(e);
    }
}
(sd(), (su.exports = Se));
var om = su.exports,
  Fs = om;
((Ri.createRoot = Fs.createRoot), (Ri.hydrateRoot = Fs.hydrateRoot));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hr() {
  return (
    (hr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hr.apply(this, arguments)
  );
}
var ct;
(function (e) {
  ((e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE'));
})(ct || (ct = {}));
const Us = 'popstate';
function am(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return jo(
      '',
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : _l(l);
  }
  return um(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ud(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sm() {
  return Math.random().toString(36).substr(2, 8);
}
function $s(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function jo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    hr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Nn(t) : t,
      { state: n, key: (t && t.key) || r || sm() },
    )
  );
}
function _l(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Nn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e));
  }
  return t;
}
function um(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = ct.Pop,
    s = null,
    u = h();
  u == null && ((u = 0), o.replaceState(hr({}, o.state, { idx: u }), ''));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = ct.Pop;
    let E = h(),
      p = E == null ? null : E - u;
    ((u = E), s && s({ action: a, location: w.location, delta: p }));
  }
  function v(E, p) {
    a = ct.Push;
    let d = jo(w.location, E, p);
    u = h() + 1;
    let m = $s(d, u),
      y = w.createHref(d);
    try {
      o.pushState(m, '', y);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      l.location.assign(y);
    }
    i && s && s({ action: a, location: w.location, delta: 1 });
  }
  function g(E, p) {
    a = ct.Replace;
    let d = jo(w.location, E, p);
    u = h();
    let m = $s(d, u),
      y = w.createHref(d);
    (o.replaceState(m, '', y), i && s && s({ action: a, location: w.location, delta: 0 }));
  }
  function x(E) {
    let p = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      d = typeof E == 'string' ? E : _l(E);
    return (
      (d = d.replace(/ $/, '%20')),
      Q(p, 'No window.location.(origin|href) available to create URL for href: ' + d),
      new URL(d, p)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(E) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Us, f),
        (s = E),
        () => {
          (l.removeEventListener(Us, f), (s = null));
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: x,
    encodeLocation(E) {
      let p = x(E);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: g,
    go(E) {
      return o.go(E);
    },
  };
  return w;
}
var Bs;
(function (e) {
  ((e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error'));
})(Bs || (Bs = {}));
function cm(e, t, n) {
  return (n === void 0 && (n = '/'), dm(e, t, n));
}
function dm(e, t, n, r) {
  let l = typeof t == 'string' ? Nn(t) : t,
    i = Sn(l.pathname || '/', n);
  if (i == null) return null;
  let o = cd(e);
  fm(o);
  let a = null;
  for (let s = 0; a == null && s < o.length; ++s) {
    let u = Em(i);
    a = Sm(o[s], u);
  }
  return a;
}
function cd(e, t, n, r) {
  (t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ''));
  let l = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (Q(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = xt([r, s.relativePath]),
      h = n.concat(s);
    (i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".'),
      ),
      cd(i.children, t, h, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: xm(u, i.index), routesMeta: h }));
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
      else for (let s of dd(i.path)) l(i, o, s);
    }),
    t
  );
}
function dd(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = dd(r.join('/')),
    a = [];
  return (
    a.push(...o.map((s) => (s === '' ? i : [i, s].join('/')))),
    l && a.push(...o),
    a.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function fm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : wm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const pm = /^:[\w-]+$/,
  mm = 3,
  hm = 2,
  vm = 1,
  gm = 10,
  ym = -2,
  Hs = (e) => e === '*';
function xm(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Hs) && (r += ym),
    t && (r += hm),
    n.filter((l) => !Hs(l)).reduce((l, i) => l + (pm.test(i) ? mm : i === '' ? vm : gm), r)
  );
}
function wm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Sm(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = '/',
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      h = i === '/' ? t : t.slice(i.length) || '/',
      f = Po({ path: s.relativePath, caseSensitive: s.caseSensitive, end: u }, h),
      v = s.route;
    if (!f) return null;
    (Object.assign(l, f.params),
      o.push({
        params: l,
        pathname: xt([i, f.pathname]),
        pathnameBase: Pm(xt([i, f.pathnameBase])),
        route: v,
      }),
      f.pathnameBase !== '/' && (i = xt([i, f.pathnameBase])));
  }
  return o;
}
function Po(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = km(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((u, h, f) => {
      let { paramName: v, isOptional: g } = h;
      if (v === '*') {
        let w = a[f] || '';
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const x = a[f];
      return (g && !x ? (u[v] = void 0) : (u[v] = (x || '').replace(/%2F/g, '/')), u);
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function km(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ud(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    ));
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Em(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ud(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function Sn(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Cm(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: l = '' } = typeof e == 'string' ? Nn(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : Nm(n, t)) : t, search: Tm(r), hash: _m(l) };
}
function Nm(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function ji(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function jm(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function fd(e, t) {
  let n = jm(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function pd(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Nn(e))
    : ((l = hr({}, e)),
      Q(!l.pathname || !l.pathname.includes('?'), ji('?', 'pathname', 'search', l)),
      Q(!l.pathname || !l.pathname.includes('#'), ji('#', 'pathname', 'hash', l)),
      Q(!l.search || !l.search.includes('#'), ji('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith('..')) {
      let v = o.split('/');
      for (; v[0] === '..'; ) (v.shift(), (f -= 1));
      l.pathname = v.join('/');
    }
    a = f >= 0 ? t[f] : '/';
  }
  let s = Cm(l, a),
    u = o && o !== '/' && o.endsWith('/'),
    h = (i || o === '.') && n.endsWith('/');
  return (!s.pathname.endsWith('/') && (u || h) && (s.pathname += '/'), s);
}
const xt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Pm = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Tm = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  _m = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Lm(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const md = ['post', 'put', 'patch', 'delete'];
new Set(md);
const Om = ['get', ...md];
new Set(Om);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vr() {
  return (
    (vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vr.apply(this, arguments)
  );
}
const Yl = S.createContext(null),
  hd = S.createContext(null),
  Nt = S.createContext(null),
  Xl = S.createContext(null),
  Vt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  vd = S.createContext(null);
function Rm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  kr() || Q(!1);
  let { basename: r, navigator: l } = S.useContext(Nt),
    { hash: i, pathname: o, search: a } = ql(e, { relative: n }),
    s = o;
  return (
    r !== '/' && (s = o === '/' ? r : xt([r, o])),
    l.createHref({ pathname: s, search: a, hash: i })
  );
}
function kr() {
  return S.useContext(Xl) != null;
}
function Er() {
  return (kr() || Q(!1), S.useContext(Xl).location);
}
function gd(e) {
  S.useContext(Nt).static || S.useLayoutEffect(e);
}
function zm() {
  let { isDataRoute: e } = S.useContext(Vt);
  return e ? Km() : Mm();
}
function Mm() {
  kr() || Q(!1);
  let e = S.useContext(Yl),
    { basename: t, future: n, navigator: r } = S.useContext(Nt),
    { matches: l } = S.useContext(Vt),
    { pathname: i } = Er(),
    o = JSON.stringify(fd(l, n.v7_relativeSplatPath)),
    a = S.useRef(!1);
  return (
    gd(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, h) {
        if ((h === void 0 && (h = {}), !a.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let f = pd(u, JSON.parse(o), i, h.relative === 'path');
        (e == null && t !== '/' && (f.pathname = f.pathname === '/' ? t : xt([t, f.pathname])),
          (h.replace ? r.replace : r.push)(f, h.state, h));
      },
      [t, r, o, i, e],
    )
  );
}
function ql(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = S.useContext(Nt),
    { matches: l } = S.useContext(Vt),
    { pathname: i } = Er(),
    o = JSON.stringify(fd(l, r.v7_relativeSplatPath));
  return S.useMemo(() => pd(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function Im(e, t) {
  return Dm(e, t);
}
function Dm(e, t, n, r) {
  kr() || Q(!1);
  let { navigator: l } = S.useContext(Nt),
    { matches: i } = S.useContext(Vt),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : '/';
  o && o.route;
  let u = Er(),
    h;
  if (t) {
    var f;
    let E = typeof t == 'string' ? Nn(t) : t;
    (s === '/' || ((f = E.pathname) != null && f.startsWith(s)) || Q(!1), (h = E));
  } else h = u;
  let v = h.pathname || '/',
    g = v;
  if (s !== '/') {
    let E = s.replace(/^\//, '').split('/');
    g = '/' + v.replace(/^\//, '').split('/').slice(E.length).join('/');
  }
  let x = cm(e, { pathname: g }),
    w = Bm(
      x &&
        x.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: xt([
              s,
              l.encodeLocation ? l.encodeLocation(E.pathname).pathname : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === '/'
                ? s
                : xt([
                    s,
                    l.encodeLocation ? l.encodeLocation(E.pathnameBase).pathname : E.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && w
    ? S.createElement(
        Xl.Provider,
        {
          value: {
            location: vr({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, h),
            navigationType: ct.Pop,
          },
        },
        w,
      )
    : w;
}
function Am() {
  let e = Qm(),
    t = Lm(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unexpected Application Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? S.createElement('pre', { style: l }, n) : null,
    null,
  );
}
const Fm = S.createElement(Am, null);
class Um extends S.Component {
  constructor(t) {
    (super(t),
      (this.state = { location: t.location, revalidation: t.revalidation, error: t.error }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Vt.Provider,
          { value: this.props.routeContext },
          S.createElement(vd.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function $m(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = S.useContext(Yl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Vt.Provider, { value: t }, r)
  );
}
function Bm(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let h = o.findIndex((f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
    (h >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, h + 1))));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let f = o[h];
      if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = h), f.route.id)) {
        let { loaderData: v, errors: g } = n,
          x = f.route.loader && v[f.route.id] === void 0 && (!g || g[f.route.id] === void 0);
        if (f.route.lazy || x) {
          ((s = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((h, f, v) => {
    let g,
      x = !1,
      w = null,
      E = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (w = f.route.errorElement || Fm),
      s &&
        (u < 0 && v === 0
          ? (Gm('route-fallback'), (x = !0), (E = null))
          : u === v && ((x = !0), (E = f.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, v + 1)),
      d = () => {
        let m;
        return (
          g
            ? (m = w)
            : x
              ? (m = E)
              : f.route.Component
                ? (m = S.createElement(f.route.Component, null))
                : f.route.element
                  ? (m = f.route.element)
                  : (m = h),
          S.createElement($m, {
            match: f,
            routeContext: { outlet: h, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || v === 0)
      ? S.createElement(Um, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: d(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var yd = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(yd || {}),
  xd = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(xd || {});
function Hm(e) {
  let t = S.useContext(Yl);
  return (t || Q(!1), t);
}
function Vm(e) {
  let t = S.useContext(hd);
  return (t || Q(!1), t);
}
function Wm(e) {
  let t = S.useContext(Vt);
  return (t || Q(!1), t);
}
function wd(e) {
  let t = Wm(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Q(!1), n.route.id);
}
function Qm() {
  var e;
  let t = S.useContext(vd),
    n = Vm(),
    r = wd();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Km() {
  let { router: e } = Hm(yd.UseNavigateStable),
    t = wd(xd.UseNavigateStable),
    n = S.useRef(!1);
  return (
    gd(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (l, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof l == 'number' ? e.navigate(l) : e.navigate(l, vr({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
const Vs = {};
function Gm(e, t, n) {
  Vs[e] || (Vs[e] = !0);
}
function Ym(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Kt(e) {
  Q(!1);
}
function Xm(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = ct.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  kr() && Q(!1);
  let s = t.replace(/^\/*/, '/'),
    u = S.useMemo(
      () => ({ basename: s, navigator: i, static: o, future: vr({ v7_relativeSplatPath: !1 }, a) }),
      [s, a, i, o],
    );
  typeof r == 'string' && (r = Nn(r));
  let { pathname: h = '/', search: f = '', hash: v = '', state: g = null, key: x = 'default' } = r,
    w = S.useMemo(() => {
      let E = Sn(h, s);
      return E == null
        ? null
        : { location: { pathname: E, search: f, hash: v, state: g, key: x }, navigationType: l };
    }, [s, h, f, v, g, x, l]);
  return w == null
    ? null
    : S.createElement(
        Nt.Provider,
        { value: u },
        S.createElement(Xl.Provider, { children: n, value: w }),
      );
}
function qm(e) {
  let { children: t, location: n } = e;
  return Im(To(t), n);
}
new Promise(() => {});
function To(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, l) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === S.Fragment) {
        n.push.apply(n, To(r.props.children, i));
        return;
      }
      (r.type !== Kt && Q(!1), !r.props.index || !r.props.children || Q(!1));
      let o = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = To(r.props.children, i)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ll.apply(this, arguments)
  );
}
function Sd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++) ((l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]));
  return n;
}
function Zm(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Jm(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Zm(e);
}
const bm = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  eh = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'viewTransition',
    'children',
  ],
  th = '6';
try {
  window.__reactRouterVersion = th;
} catch {}
const nh = S.createContext({ isTransitioning: !1 }),
  rh = 'startTransition',
  Ws = Yd[rh];
function lh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = S.useRef();
  i.current == null && (i.current = am({ window: l, v5Compat: !0 }));
  let o = i.current,
    [a, s] = S.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    h = S.useCallback(
      (f) => {
        u && Ws ? Ws(() => s(f)) : s(f);
      },
      [s, u],
    );
  return (
    S.useLayoutEffect(() => o.listen(h), [o, h]),
    S.useEffect(() => Ym(r), [r]),
    S.createElement(Xm, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const ih =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pe = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: s,
        to: u,
        preventScrollReset: h,
        viewTransition: f,
      } = t,
      v = Sd(t, bm),
      { basename: g } = S.useContext(Nt),
      x,
      w = !1;
    if (typeof u == 'string' && oh.test(u) && ((x = u), ih))
      try {
        let m = new URL(window.location.href),
          y = u.startsWith('//') ? new URL(m.protocol + u) : new URL(u),
          C = Sn(y.pathname, g);
        y.origin === m.origin && C != null ? (u = C + y.search + y.hash) : (w = !0);
      } catch {}
    let E = Rm(u, { relative: l }),
      p = sh(u, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: h,
        relative: l,
        viewTransition: f,
      });
    function d(m) {
      (r && r(m), m.defaultPrevented || p(m));
    }
    return S.createElement(
      'a',
      Ll({}, v, { href: x || E, onClick: w || i ? r : d, ref: n, target: s }),
    );
  }),
  Vr = S.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: i = '',
        end: o = !1,
        style: a,
        to: s,
        viewTransition: u,
        children: h,
      } = t,
      f = Sd(t, eh),
      v = ql(s, { relative: f.relative }),
      g = Er(),
      x = S.useContext(hd),
      { navigator: w, basename: E } = S.useContext(Nt),
      p = x != null && uh(v) && u === !0,
      d = w.encodeLocation ? w.encodeLocation(v).pathname : v.pathname,
      m = g.pathname,
      y = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    (l || ((m = m.toLowerCase()), (y = y ? y.toLowerCase() : null), (d = d.toLowerCase())),
      y && E && (y = Sn(y, E) || y));
    const C = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
    let P = m === d || (!o && m.startsWith(d) && m.charAt(C) === '/'),
      T = y != null && (y === d || (!o && y.startsWith(d) && y.charAt(d.length) === '/')),
      _ = { isActive: P, isPending: T, isTransitioning: p },
      $ = P ? r : void 0,
      O;
    typeof i == 'function'
      ? (O = i(_))
      : (O = [i, P ? 'active' : null, T ? 'pending' : null, p ? 'transitioning' : null]
          .filter(Boolean)
          .join(' '));
    let ve = typeof a == 'function' ? a(_) : a;
    return S.createElement(
      Pe,
      Ll({}, f, { 'aria-current': $, className: O, ref: n, style: ve, to: s, viewTransition: u }),
      typeof h == 'function' ? h(_) : h,
    );
  });
var _o;
(function (e) {
  ((e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState'));
})(_o || (_o = {}));
var Qs;
(function (e) {
  ((e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration'));
})(Qs || (Qs = {}));
function ah(e) {
  let t = S.useContext(Yl);
  return (t || Q(!1), t);
}
function sh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    s = zm(),
    u = Er(),
    h = ql(e, { relative: o });
  return S.useCallback(
    (f) => {
      if (Jm(f, n)) {
        f.preventDefault();
        let v = r !== void 0 ? r : _l(u) === _l(h);
        s(e, { replace: v, state: l, preventScrollReset: i, relative: o, viewTransition: a });
      }
    },
    [u, s, h, r, l, n, e, i, o, a],
  );
}
function uh(e, t) {
  t === void 0 && (t = {});
  let n = S.useContext(nh);
  n == null && Q(!1);
  let { basename: r } = ah(_o.useViewTransitionState),
    l = ql(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Sn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Sn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Po(l.pathname, o) != null || Po(l.pathname, i) != null;
}
var ch = typeof Element < 'u',
  dh = typeof Map == 'function',
  fh = typeof Set == 'function',
  ph = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
function rl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    var n, r, l;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!rl(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (dh && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!rl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (fh && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; ) if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (ph && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString();
    if (((l = Object.keys(e)), (n = l.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, l[r])) return !1;
    if (ch && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !((l[r] === '_owner' || l[r] === '__v' || l[r] === '__o') && e.$$typeof) &&
        !rl(e[l[r]], t[l[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var mh = function (t, n) {
  try {
    return rl(t, n);
  } catch (r) {
    if ((r.message || '').match(/stack|recursion/i))
      return (console.warn('react-fast-compare cannot handle circular refs'), !1);
    throw r;
  }
};
const hh = Ol(mh);
var vh = function (e, t, n, r, l, i, o, a) {
    if (!e) {
      var s;
      if (t === void 0)
        s = new Error(
          'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
        );
      else {
        var u = [n, r, l, i, o, a],
          h = 0;
        ((s = new Error(
          t.replace(/%s/g, function () {
            return u[h++];
          }),
        )),
          (s.name = 'Invariant Violation'));
      }
      throw ((s.framesToPop = 1), s);
    }
  },
  gh = vh;
const Ks = Ol(gh);
var yh = function (t, n, r, l) {
  var i = r ? r.call(l, t, n) : void 0;
  if (i !== void 0) return !!i;
  if (t === n) return !0;
  if (typeof t != 'object' || !t || typeof n != 'object' || !n) return !1;
  var o = Object.keys(t),
    a = Object.keys(n);
  if (o.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(n), u = 0; u < o.length; u++) {
    var h = o[u];
    if (!s(h)) return !1;
    var f = t[h],
      v = n[h];
    if (((i = r ? r.call(l, f, v, h) : void 0), i === !1 || (i === void 0 && f !== v))) return !1;
  }
  return !0;
};
const xh = Ol(yh);
var kd = ((e) => (
    (e.BASE = 'base'),
    (e.BODY = 'body'),
    (e.HEAD = 'head'),
    (e.HTML = 'html'),
    (e.LINK = 'link'),
    (e.META = 'meta'),
    (e.NOSCRIPT = 'noscript'),
    (e.SCRIPT = 'script'),
    (e.STYLE = 'style'),
    (e.TITLE = 'title'),
    (e.FRAGMENT = 'Symbol(react.fragment)'),
    e
  ))(kd || {}),
  Pi = {
    link: { rel: ['amphtml', 'canonical', 'alternate'] },
    script: { type: ['application/ld+json'] },
    meta: {
      charset: '',
      name: ['generator', 'robots', 'description'],
      property: [
        'og:type',
        'og:title',
        'og:url',
        'og:image',
        'og:image:alt',
        'og:description',
        'twitter:url',
        'twitter:title',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
        'twitter:card',
        'twitter:site',
      ],
    },
  },
  Gs = Object.values(kd),
  Ta = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  wh = Object.entries(Ta).reduce((e, [t, n]) => ((e[n] = t), e), {}),
  De = 'data-rh',
  fn = {
    DEFAULT_TITLE: 'defaultTitle',
    DEFER: 'defer',
    ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
    ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
    TITLE_TEMPLATE: 'titleTemplate',
    PRIORITIZE_SEO_TAGS: 'prioritizeSeoTags',
  },
  pn = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  Sh = (e) => {
    let t = pn(e, 'title');
    const n = pn(e, fn.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join('')), n && t)) return n.replace(/%s/g, () => t);
    const r = pn(e, fn.DEFAULT_TITLE);
    return t || r || void 0;
  },
  kh = (e) => pn(e, fn.ON_CHANGE_CLIENT_STATE) || (() => {}),
  Ti = (e, t) =>
    t
      .filter((n) => typeof n[e] < 'u')
      .map((n) => n[e])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  Eh = (e, t) =>
    t
      .filter((n) => typeof n.base < 'u')
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const l = Object.keys(r);
          for (let i = 0; i < l.length; i += 1) {
            const a = l[i].toLowerCase();
            if (e.indexOf(a) !== -1 && r[a]) return n.concat(r);
          }
        }
        return n;
      }, []),
  Ch = (e) => console && typeof console.warn == 'function' && console.warn(e),
  An = (e, t, n) => {
    const r = {};
    return n
      .filter((l) =>
        Array.isArray(l[e])
          ? !0
          : (typeof l[e] < 'u' &&
              Ch(`Helmet: ${e} should be of type "Array". Instead found type "${typeof l[e]}"`),
            !1),
      )
      .map((l) => l[e])
      .reverse()
      .reduce((l, i) => {
        const o = {};
        i.filter((s) => {
          let u;
          const h = Object.keys(s);
          for (let v = 0; v < h.length; v += 1) {
            const g = h[v],
              x = g.toLowerCase();
            (t.indexOf(x) !== -1 &&
              !(u === 'rel' && s[u].toLowerCase() === 'canonical') &&
              !(x === 'rel' && s[x].toLowerCase() === 'stylesheet') &&
              (u = x),
              t.indexOf(g) !== -1 &&
                (g === 'innerHTML' || g === 'cssText' || g === 'itemprop') &&
                (u = g));
          }
          if (!u || !s[u]) return !1;
          const f = s[u].toLowerCase();
          return (r[u] || (r[u] = {}), o[u] || (o[u] = {}), r[u][f] ? !1 : ((o[u][f] = !0), !0));
        })
          .reverse()
          .forEach((s) => l.push(s));
        const a = Object.keys(o);
        for (let s = 0; s < a.length; s += 1) {
          const u = a[s],
            h = { ...r[u], ...o[u] };
          r[u] = h;
        }
        return l;
      }, [])
      .reverse();
  },
  Nh = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  jh = (e) => ({
    baseTag: Eh(['href'], e),
    bodyAttributes: Ti('bodyAttributes', e),
    defer: pn(e, fn.DEFER),
    encode: pn(e, fn.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Ti('htmlAttributes', e),
    linkTags: An('link', ['rel', 'href'], e),
    metaTags: An('meta', ['name', 'charset', 'http-equiv', 'property', 'itemprop'], e),
    noscriptTags: An('noscript', ['innerHTML'], e),
    onChangeClientState: kh(e),
    scriptTags: An('script', ['src', 'innerHTML'], e),
    styleTags: An('style', ['cssText'], e),
    title: Sh(e),
    titleAttributes: Ti('titleAttributes', e),
    prioritizeSeoTags: Nh(e, fn.PRIORITIZE_SEO_TAGS),
  }),
  Ed = (e) => (Array.isArray(e) ? e.join('') : e),
  Ph = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1) if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  _i = (e, t) =>
    Array.isArray(e)
      ? e.reduce((n, r) => (Ph(r, t) ? n.priority.push(r) : n.default.push(r), n), {
          priority: [],
          default: [],
        })
      : { default: e, priority: [] },
  Ys = (e, t) => ({ ...e, [t]: void 0 }),
  Th = ['noscript', 'script', 'style'],
  Lo = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;'),
  Cd = (e) =>
    Object.keys(e).reduce((t, n) => {
      const r = typeof e[n] < 'u' ? `${n}="${e[n]}"` : `${n}`;
      return t ? `${t} ${r}` : r;
    }, ''),
  _h = (e, t, n, r) => {
    const l = Cd(n),
      i = Ed(t);
    return l
      ? `<${e} ${De}="true" ${l}>${Lo(i, r)}</${e}>`
      : `<${e} ${De}="true">${Lo(i, r)}</${e}>`;
  },
  Lh = (e, t, n = !0) =>
    t.reduce((r, l) => {
      const i = l,
        o = Object.keys(i)
          .filter((u) => !(u === 'innerHTML' || u === 'cssText'))
          .reduce((u, h) => {
            const f = typeof i[h] > 'u' ? h : `${h}="${Lo(i[h], n)}"`;
            return u ? `${u} ${f}` : f;
          }, ''),
        a = i.innerHTML || i.cssText || '',
        s = Th.indexOf(e) === -1;
      return `${r}<${e} ${De}="true" ${o}${s ? '/>' : `>${a}</${e}>`}`;
    }, ''),
  Nd = (e, t = {}) =>
    Object.keys(e).reduce((n, r) => {
      const l = Ta[r];
      return ((n[l || r] = e[r]), n);
    }, t),
  Oh = (e, t, n) => {
    const r = { key: t, [De]: !0 },
      l = Nd(n, r);
    return [Ve.createElement('title', l, t)];
  },
  ll = (e, t) =>
    t.map((n, r) => {
      const l = { key: r, [De]: !0 };
      return (
        Object.keys(n).forEach((i) => {
          const a = Ta[i] || i;
          if (a === 'innerHTML' || a === 'cssText') {
            const s = n.innerHTML || n.cssText;
            l.dangerouslySetInnerHTML = { __html: s };
          } else l[a] = n[i];
        }),
        Ve.createElement(e, l)
      );
    }),
  Ce = (e, t, n = !0) => {
    switch (e) {
      case 'title':
        return {
          toComponent: () => Oh(e, t.title, t.titleAttributes),
          toString: () => _h(e, t.title, t.titleAttributes, n),
        };
      case 'bodyAttributes':
      case 'htmlAttributes':
        return { toComponent: () => Nd(t), toString: () => Cd(t) };
      default:
        return { toComponent: () => ll(e, t), toString: () => Lh(e, t, n) };
    }
  },
  Rh = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    const l = _i(e, Pi.meta),
      i = _i(t, Pi.link),
      o = _i(n, Pi.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...ll('meta', l.priority),
          ...ll('link', i.priority),
          ...ll('script', o.priority),
        ],
        toString: () =>
          `${Ce('meta', l.priority, r)} ${Ce('link', i.priority, r)} ${Ce('script', o.priority, r)}`,
      },
      metaTags: l.default,
      linkTags: i.default,
      scriptTags: o.default,
    };
  },
  zh = (e) => {
    const {
      baseTag: t,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: l,
      noscriptTags: i,
      styleTags: o,
      title: a = '',
      titleAttributes: s,
      prioritizeSeoTags: u,
    } = e;
    let { linkTags: h, metaTags: f, scriptTags: v } = e,
      g = { toComponent: () => {}, toString: () => '' };
    return (
      u && ({ priorityMethods: g, linkTags: h, metaTags: f, scriptTags: v } = Rh(e)),
      {
        priority: g,
        base: Ce('base', t, r),
        bodyAttributes: Ce('bodyAttributes', n, r),
        htmlAttributes: Ce('htmlAttributes', l, r),
        link: Ce('link', h, r),
        meta: Ce('meta', f, r),
        noscript: Ce('noscript', i, r),
        script: Ce('script', v, r),
        style: Ce('style', o, r),
        title: Ce('title', { title: a, titleAttributes: s }, r),
      }
    );
  },
  Oo = zh,
  Wr = [],
  jd = !!(typeof window < 'u' && window.document && window.document.createElement),
  Ro = class {
    constructor(e, t) {
      Ke(this, 'instances', []);
      Ke(this, 'canUseDOM', jd);
      Ke(this, 'context');
      Ke(this, 'value', {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? Wr : this.instances),
          add: (e) => {
            (this.canUseDOM ? Wr : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? Wr : this.instances).indexOf(e);
            (this.canUseDOM ? Wr : this.instances).splice(t, 1);
          },
        },
      });
      ((this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = Oo({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: '',
            titleAttributes: {},
          })));
    }
  },
  Mh = {},
  Pd = Ve.createContext(Mh),
  zt,
  Td =
    ((zt = class extends S.Component {
      constructor(n) {
        super(n);
        Ke(this, 'helmetData');
        this.helmetData = new Ro(this.props.context || {}, zt.canUseDOM);
      }
      render() {
        return Ve.createElement(Pd.Provider, { value: this.helmetData.value }, this.props.children);
      }
    }),
    Ke(zt, 'canUseDOM', jd),
    zt),
  Qt = (e, t) => {
    const n = document.head || document.querySelector('head'),
      r = n.querySelectorAll(`${e}[${De}]`),
      l = [].slice.call(r),
      i = [];
    let o;
    return (
      t &&
        t.length &&
        t.forEach((a) => {
          const s = document.createElement(e);
          for (const u in a)
            if (Object.prototype.hasOwnProperty.call(a, u))
              if (u === 'innerHTML') s.innerHTML = a.innerHTML;
              else if (u === 'cssText')
                s.styleSheet
                  ? (s.styleSheet.cssText = a.cssText)
                  : s.appendChild(document.createTextNode(a.cssText));
              else {
                const h = u,
                  f = typeof a[h] > 'u' ? '' : a[h];
                s.setAttribute(u, f);
              }
          (s.setAttribute(De, 'true'),
            l.some((u, h) => ((o = h), s.isEqualNode(u))) ? l.splice(o, 1) : i.push(s));
        }),
      l.forEach((a) => {
        var s;
        return (s = a.parentNode) == null ? void 0 : s.removeChild(a);
      }),
      i.forEach((a) => n.appendChild(a)),
      { oldTags: l, newTags: i }
    );
  },
  zo = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n) return;
    const r = n.getAttribute(De),
      l = r ? r.split(',') : [],
      i = [...l],
      o = Object.keys(t);
    for (const a of o) {
      const s = t[a] || '';
      (n.getAttribute(a) !== s && n.setAttribute(a, s), l.indexOf(a) === -1 && l.push(a));
      const u = i.indexOf(a);
      u !== -1 && i.splice(u, 1);
    }
    for (let a = i.length - 1; a >= 0; a -= 1) n.removeAttribute(i[a]);
    l.length === i.length
      ? n.removeAttribute(De)
      : n.getAttribute(De) !== o.join(',') && n.setAttribute(De, o.join(','));
  },
  Ih = (e, t) => {
    (typeof e < 'u' && document.title !== e && (document.title = Ed(e)), zo('title', t));
  },
  Xs = (e, t) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: l,
      linkTags: i,
      metaTags: o,
      noscriptTags: a,
      onChangeClientState: s,
      scriptTags: u,
      styleTags: h,
      title: f,
      titleAttributes: v,
    } = e;
    (zo('body', r), zo('html', l), Ih(f, v));
    const g = {
        baseTag: Qt('base', n),
        linkTags: Qt('link', i),
        metaTags: Qt('meta', o),
        noscriptTags: Qt('noscript', a),
        scriptTags: Qt('script', u),
        styleTags: Qt('style', h),
      },
      x = {},
      w = {};
    (Object.keys(g).forEach((E) => {
      const { newTags: p, oldTags: d } = g[E];
      (p.length && (x[E] = p), d.length && (w[E] = g[E].oldTags));
    }),
      t && t(),
      s(e, x, w));
  },
  Fn = null,
  Dh = (e) => {
    (Fn && cancelAnimationFrame(Fn),
      e.defer
        ? (Fn = requestAnimationFrame(() => {
            Xs(e, () => {
              Fn = null;
            });
          }))
        : (Xs(e), (Fn = null)));
  },
  Ah = Dh,
  qs = class extends S.Component {
    constructor() {
      super(...arguments);
      Ke(this, 'rendered', !1);
    }
    shouldComponentUpdate(t) {
      return !xh(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      (t.remove(this), this.emitChange());
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: n } = this.props.context;
      let r = null;
      const l = jh(
        t.get().map((i) => {
          const o = { ...i.props };
          return (delete o.context, o);
        }),
      );
      (Td.canUseDOM ? Ah(l) : Oo && (r = Oo(l)), n(r));
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      (t.add(this), this.emitChange());
    }
    render() {
      return (this.init(), null);
    }
  },
  Oi,
  jn =
    ((Oi = class extends S.Component {
      shouldComponentUpdate(e) {
        return !hh(Ys(this.props, 'helmetData'), Ys(e, 'helmetData'));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case 'script':
          case 'noscript':
            return { innerHTML: t };
          case 'style':
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`,
            );
        }
      }
      flattenArrayTypeChildren(e, t, n, r) {
        return {
          ...t,
          [e.type]: [...(t[e.type] || []), { ...n, ...this.mapNestedChildrenToProps(e, r) }],
        };
      }
      mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
          case 'title':
            return { ...t, [e.type]: r, titleAttributes: { ...n } };
          case 'body':
            return { ...t, bodyAttributes: { ...n } };
          case 'html':
            return { ...t, htmlAttributes: { ...n } };
          default:
            return { ...t, [e.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let n = { ...t };
        return (
          Object.keys(e).forEach((r) => {
            n = { ...n, [r]: e[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          Ks(
            Gs.some((n) => e.type === n),
            typeof e.type == 'function'
              ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
              : `Only elements types ${Gs.join(', ')} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`,
          ),
          Ks(
            !t ||
              typeof t == 'string' ||
              (Array.isArray(t) && !t.some((n) => typeof n != 'string')),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`,
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let n = {};
        return (
          Ve.Children.forEach(e, (r) => {
            if (!r || !r.props) return;
            const { children: l, ...i } = r.props,
              o = Object.keys(i).reduce((s, u) => ((s[wh[u] || u] = i[u]), s), {});
            let { type: a } = r;
            switch (
              (typeof a == 'symbol' ? (a = a.toString()) : this.warnOnInvalidChildren(r, l), a)
            ) {
              case 'Symbol(react.fragment)':
                t = this.mapChildrenToProps(l, t);
                break;
              case 'link':
              case 'meta':
              case 'noscript':
              case 'script':
              case 'style':
                n = this.flattenArrayTypeChildren(r, n, o, l);
                break;
              default:
                t = this.mapObjectTypeChildren(r, t, o, l);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let n = { ...t },
          { helmetData: r } = t;
        if ((e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof Ro))) {
          const l = r;
          ((r = new Ro(l.context, !0)), delete n.helmetData);
        }
        return r
          ? Ve.createElement(qs, { ...n, context: r.value })
          : Ve.createElement(Pd.Consumer, null, (l) => Ve.createElement(qs, { ...n, context: l }));
      }
    }),
    Ke(Oi, 'defaultProps', { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
    Oi);
function Fh() {
  if (typeof window > 'u') return 'light';
  const e = localStorage.getItem('theme');
  return (
    e ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  );
}
function Uh() {
  const [e, t] = S.useState(Fh());
  return (
    S.useEffect(() => {
      const n = document.documentElement;
      (e === 'dark' ? n.classList.add('dark') : n.classList.remove('dark'),
        localStorage.setItem('theme', e),
        e === 'dark'
          ? (n.style.setProperty('--page-bg', '#0b0b0b'),
            n.style.setProperty('--nav-bg', 'rgba(0,0,0,0.85)'))
          : requestAnimationFrame(() => {
              window.dispatchEvent(new Event('scroll'));
            }));
    }, [e]),
    c.jsx('button', {
      'aria-label': 'Toggle dark mode',
      onClick: () => t((n) => (n === 'dark' ? 'light' : 'dark')),
      className:
        'ml-2 inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100',
      title: e === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
      children: e === 'dark' ? '☀️' : '🌙',
    })
  );
}
function $h() {
  const [e, t] = S.useState(!1),
    [n, r] = S.useState(!1);
  return (
    S.useEffect(() => {
      const l = () => r(window.scrollY > 4);
      return (
        window.addEventListener('scroll', l, { passive: !0 }),
        () => window.removeEventListener('scroll', l)
      );
    }, []),
    c.jsx('header', {
      id: 'site-header',
      className: `sticky top-0 z-40 bg-transparent backdrop-blur border-b border-slate-200 dark:border-slate-700 ${n ? 'shadow' : ''}`,
      children: c.jsxs('div', {
        className: 'container-1120 flex items-center justify-between py-3',
        children: [
          c.jsxs(Pe, {
            to: '/',
            className: 'inline-flex items-center gap-2 no-underline text-slate-900 font-semibold',
            children: [
              c.jsx('span', {
                className:
                  'grid place-items-center w-7 h-7 rounded-lg text-white font-bold bg-gradient-to-tr from-brand-blue to-brand-green',
                children: '+',
              }),
              c.jsx('span', {
                className: 'whitespace-nowrap dark:text-slate-100',
                children: 'Gallena Medical Centre',
              }),
            ],
          }),
          c.jsxs('nav', {
            className: 'relative',
            'aria-label': 'Primary',
            children: [
              c.jsx('button', {
                'aria-expanded': e,
                'aria-controls': 'nav-menu',
                className:
                  'md:hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-slate-100',
                onClick: () => t((l) => !l),
                children: 'Menu',
              }),
              c.jsxs('ul', {
                id: 'nav-menu',
                className: `md:flex gap-5 list-none m-0 p-0 absolute md:static right-0 top-12 bg-white dark:bg-slate-900 md:bg-transparent md:dark:bg-transparent border md:border-0 border-slate-200 dark:border-slate-700 rounded-xl md:rounded-none px-3 py-2 md:p-0 ${e ? 'flex flex-col' : 'hidden md:flex'}`,
                children: [
                  c.jsx('li', {
                    children: c.jsx(Vr, {
                      to: '/services',
                      className:
                        'px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800',
                      children: 'Services',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx(Vr, {
                      to: '/staff',
                      className:
                        'px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800',
                      children: 'Staff',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx(Vr, {
                      to: '/blog',
                      className:
                        'px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800',
                      children: 'Blog',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx(Vr, {
                      to: '/contact',
                      className:
                        'px-2 py-2 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800',
                      children: 'Contact',
                    }),
                  }),
                ],
              }),
            ],
          }),
          c.jsxs('div', {
            className: 'flex items-center',
            children: [
              c.jsx('a', {
                href: '#consultation',
                className: 'btn btn-primary hidden md:inline-flex',
                children: 'Book Consultation',
              }),
              c.jsx(Uh, {}),
            ],
          }),
        ],
      }),
    })
  );
}
function Bh() {
  return (
    new Date().getFullYear(),
    c.jsx('footer', {
      className: 'site-footer',
      children: c.jsxs('div', {
        className:
          'container-1120 flex flex-col md:flex-row justify-between gap-5 py-3 footer-inner',
        children: [
          c.jsxs('div', {
            children: [
              c.jsxs(Pe, {
                to: '/',
                className:
                  'inline-flex items-center gap-2 no-underline text-slate-900 font-semibold',
                children: [
                  c.jsx('span', {
                    className:
                      'grid place-items-center w-7 h-7 rounded-lg text-white font-bold bg-gradient-to-tr from-brand-blue to-brand-green',
                    children: '+',
                  }),
                  c.jsx('span', { children: 'Gallena Medical Centre' }),
                ],
              }),
              c.jsx('p', { className: 'muted text-sm', children: 'We Care to Heal !' }),
            ],
          }),
          c.jsxs('div', {
            children: [
              c.jsxs('ul', {
                className: 'list-none m-0 p-0 flex gap-4 mb-3',
                children: [
                  c.jsx('li', {
                    children: c.jsx(Pe, {
                      to: '/services',
                      className: 'text-slate-900 hover:text-brand-navy',
                      children: 'Services',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx(Pe, {
                      to: '/staff',
                      className: 'text-slate-900 hover:text-brand-navy',
                      children: 'Staff',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx(Pe, {
                      to: '/blog',
                      className: 'text-slate-900 hover:text-brand-navy',
                      children: 'Blog',
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx(Pe, {
                      to: '/contact',
                      className: 'text-slate-900 hover:text-brand-navy',
                      children: 'Contact',
                    }),
                  }),
                ],
              }),
              c.jsxs('ul', {
                className: 'list-none m-0 p-0 flex gap-3',
                children: [
                  c.jsx('li', {
                    children: c.jsx('a', {
                      'aria-label': 'Facebook',
                      href: 'https://facebook.com/',
                      target: '_blank',
                      rel: 'noopener',
                      className:
                        'grid place-items-center w-8 h-8 rounded-lg bg-[#eef8f8] text-brand-navy no-underline',
                      children: c.jsx('svg', {
                        width: '18',
                        height: '18',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        'aria-hidden': 'true',
                        children: c.jsx('path', {
                          d: 'M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22c4.78-.77 8.44-4.93 8.44-9.94z',
                        }),
                      }),
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx('a', {
                      'aria-label': 'WhatsApp',
                      href: 'https://wa.me/256787992588',
                      target: '_blank',
                      rel: 'noopener',
                      className:
                        'grid place-items-center w-8 h-8 rounded-lg bg-[#eef8f8] text-brand-navy no-underline',
                      children: c.jsx('svg', {
                        width: '18',
                        height: '18',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        'aria-hidden': 'true',
                        children: c.jsx('path', {
                          d: 'M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.17 1.6 5.98L0 24l6.26-1.64a11.87 11.87 0 0 0 5.78 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.18-1.24-6.17-3.47-8.43zM12.05 21.2h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.9 9.9 0 0 1-1.55-5.35c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.91 7.01c0 5.47-4.45-9.92-9.92-9.92zm5.64-7.44c-.31-.15-1.84-.9-2.13-1-.29-.1-.5-.15-.71.15-.21.31-.82 1-.99 1.21-.18.21-.36.23-.67.08-.31-.15-1.34-.49-2.55-1.56-.94-.84-1.58-1.88-1.76-2.19-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.15-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55h-.6c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.21 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36z',
                        }),
                      }),
                    }),
                  }),
                  c.jsx('li', {
                    children: c.jsx('a', {
                      'aria-label': 'Email',
                      href: 'mailto:gallenamedicalcentre@gmail.com',
                      className:
                        'grid place-items-center w-8 h-8 rounded-lg bg-[#eef8f8] text-brand-navy no-underline',
                      children: c.jsx('svg', {
                        width: '18',
                        height: '18',
                        viewBox: '0 0 24 24',
                        fill: 'currentColor',
                        'aria-hidden': 'true',
                        children: c.jsx('path', {
                          d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function Hh() {
  return (
    S.useEffect(() => {
      const e = () => {
        const t = document.documentElement;
        t.classList.contains('dark')
          ? (t.style.setProperty('--page-bg', '#0b0b0b'),
            t.style.setProperty('--text-color', '#e2e8f0'),
            t.style.setProperty('--muted-color', '#94a3b8'))
          : (t.style.setProperty('--page-bg', '#ffffff'),
            t.style.setProperty('--text-color', '#0f172a'),
            t.style.setProperty('--muted-color', '#64748b'));
      };
      return (
        e(),
        window.addEventListener('scroll', e, { passive: !0 }),
        window.addEventListener('resize', e),
        () => {
          (window.removeEventListener('scroll', e), window.removeEventListener('resize', e));
        }
      );
    }, []),
    null
  );
}
function Vh(e, t = 4500) {
  const [n, r] = S.useState(0);
  return (
    S.useEffect(() => {
      if (!e) return;
      const l = setInterval(() => r((i) => (i + 1) % e), t);
      return () => clearInterval(l);
    }, [e, t]),
    n
  );
}
function Wh() {
  const e = [
      { q: 'Professional and kind. My surgery and recovery were smooth.', a: '— Ama K.' },
      { q: 'The pediatric team made my child feel safe and happy.', a: '— Joseph N.' },
      { q: 'Easy booking and excellent dental care. Highly recommended!', a: '— Lydia A.' },
    ],
    t = Vh(e.length),
    n = S.useRef(null);
  return (
    S.useEffect(() => {
      var i;
      const r = (i = n.current) == null ? void 0 : i.querySelectorAll('.reveal-up');
      if (!r) return;
      const l = new IntersectionObserver(
        (o) => {
          o.forEach((a) => {
            a.isIntersecting && a.target.classList.add('!opacity-100', '!translate-y-0');
          });
        },
        { threshold: 0.12 },
      );
      return (r.forEach((o) => l.observe(o)), () => l.disconnect());
    }, []),
    c.jsxs('div', {
      ref: n,
      children: [
        c.jsx(jn, {
          children: c.jsx('title', { children: 'Gallena Medical Centre | Healthcare with Trust' }),
        }),
        c.jsx('section', {
          className: 'py-16',
          children: c.jsxs('div', {
            className: 'container-1120 grid md:grid-cols-[1.1fr_.9fr] gap-8',
            children: [
              c.jsxs('div', {
                className: 'space-y-4',
                children: [
                  c.jsx('h1', {
                    className:
                      'text-4xl font-semibold reveal-up opacity-0 translate-y-3 transition',
                    children: 'Compassionate Care, Modern Medicine',
                  }),
                  c.jsx('p', {
                    className:
                      'text-brand-navy font-semibold reveal-up opacity-0 translate-y-3 transition',
                    children: 'We Care to Heal !',
                  }),
                  c.jsx('p', {
                    className: 'muted reveal-up opacity-0 translate-y-3 transition',
                    children:
                      'At Gallena Medical Centre, we deliver trusted, patient-centered healthcare across general medicine, dental, maternity, surgery, and more.',
                  }),
                  c.jsxs('div', {
                    className: 'flex gap-3 reveal-up opacity-0 translate-y-3 transition',
                    children: [
                      c.jsx('a', {
                        href: '#consultation',
                        className: 'btn btn-primary',
                        children: 'Book Consultation',
                      }),
                      c.jsx(Pe, {
                        to: '/services',
                        className: 'btn btn-outline',
                        children: 'Explore Services',
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx('div', {
                'aria-hidden': !0,
                className: 'reveal-up opacity-0 translate-y-3 transition',
                children: c.jsx('div', {
                  className:
                    'w-full h-[280px] rounded-2xl border border-slate-200 shadow-soft bg-[radial-gradient(1200px_300px_at_-10%_-10%,#e6fffb_10%,transparent_40%),conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,.15),rgba(14,165,233,.15),rgba(14,165,233,.06),rgba(16,185,129,.06))]',
                }),
              }),
            ],
          }),
        }),
        c.jsx('section', {
          id: 'about',
          className: 'py-16',
          children: c.jsxs('div', {
            className: 'container-1120',
            children: [
              c.jsxs('div', {
                className:
                  'max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition',
                children: [
                  c.jsx('h2', { className: 'text-3xl font-semibold', children: 'About Us' }),
                  c.jsx('p', {
                    className: 'muted',
                    children:
                      'Gallena Medical Centre is committed to clinical excellence, safety, and compassionate service. Our multi-disciplinary team leverages modern technology to deliver reliable outcomes and a comfortable patient experience.',
                  }),
                ],
              }),
              c.jsx('div', {
                className: 'grid md:grid-cols-3 gap-5',
                children: [
                  {
                    t: 'Modern Facilities',
                    d: 'State-of-the-art diagnostics and surgical suites for better, faster care.',
                  },
                  {
                    t: 'Expert Team',
                    d: 'Board-certified doctors, experienced nurses, and caring support staff.',
                  },
                  {
                    t: 'Patient First',
                    d: 'Personalized treatment plans and transparent communication at every step.',
                  },
                ].map((r, l) =>
                  c.jsxs(
                    'div',
                    {
                      className: 'card reveal-up opacity-0 translate-y-3 transition',
                      children: [
                        c.jsx('h3', { className: 'font-semibold text-lg', children: r.t }),
                        c.jsx('p', { children: r.d }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
        }),
        c.jsx('section', {
          id: 'services',
          className: 'py-16 bg-gradient-to-b from-[#f4fbfb] to-transparent',
          children: c.jsxs('div', {
            className: 'container-1120',
            children: [
              c.jsxs('div', {
                className:
                  'max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition',
                children: [
                  c.jsx('h2', {
                    className: 'text-3xl font-semibold',
                    children: 'Medical Services',
                  }),
                  c.jsx('p', {
                    className: 'muted',
                    children:
                      'Comprehensive services delivered by specialists across key disciplines.',
                  }),
                ],
              }),
              c.jsx('div', {
                className: 'grid gap-5 md:grid-cols-4',
                children: [
                  'General Medicine',
                  'Dental',
                  'Maternity',
                  'Surgery',
                  'Pediatrics',
                  'Cardiology',
                  'Orthopedics',
                  'Laboratory',
                ].map((r, l) =>
                  c.jsxs(
                    'article',
                    {
                      className: 'card reveal-up opacity-0 translate-y-3 transition',
                      children: [
                        c.jsx('h3', { className: 'font-semibold text-lg', children: r }),
                        c.jsxs('p', {
                          className: 'muted',
                          children: ['Learn more about our ', r.toLowerCase(), ' services.'],
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
              c.jsx('div', {
                className: 'text-center mt-6 reveal-up opacity-0 translate-y-3 transition',
                children: c.jsx(Pe, {
                  to: '/services',
                  className: 'btn btn-outline',
                  children: 'View All Services',
                }),
              }),
            ],
          }),
        }),
        c.jsx('section', {
          id: 'consultation',
          className: 'py-16',
          children: c.jsxs('div', {
            className: 'container-1120',
            children: [
              c.jsxs('div', {
                className:
                  'max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition',
                children: [
                  c.jsx('h2', {
                    className: 'text-3xl font-semibold',
                    children: 'Book a Consultation',
                  }),
                  c.jsx('p', {
                    className: 'muted',
                    children:
                      'Complete the form and our team will contact you to confirm your appointment.',
                  }),
                ],
              }),
              c.jsx(Qh, {}),
            ],
          }),
        }),
        c.jsx('section', {
          id: 'staff',
          className: 'py-16 bg-gradient-to-b from-[#f4fbfb] to-transparent',
          children: c.jsxs('div', {
            className: 'container-1120',
            children: [
              c.jsxs('div', {
                className:
                  'max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition',
                children: [
                  c.jsx('h2', { className: 'text-3xl font-semibold', children: 'Our Team' }),
                  c.jsx('p', {
                    className: 'muted',
                    children: 'Dedicated professionals delivering exceptional care.',
                  }),
                ],
              }),
              c.jsx('div', {
                className: 'grid gap-5 md:grid-cols-4',
                children: [
                  {
                    n: 'Dr. Aisha Mensah',
                    t: 'Consultant Physician',
                    d: '15+ years in internal medicine with focus on preventive care.',
                  },
                  {
                    n: 'Dr. David Ofori',
                    t: 'Dental Surgeon',
                    d: 'Comprehensive dental care and cosmetic dentistry specialist.',
                  },
                  {
                    n: 'Matilda Owusu',
                    t: 'Senior Midwife',
                    d: 'Compassionate maternity support from antenatal to postnatal.',
                  },
                  {
                    n: 'Samuel Tetteh',
                    t: 'Head Nurse',
                    d: 'Patient advocacy and quality assurance across wards.',
                  },
                ].map((r, l) =>
                  c.jsxs(
                    'article',
                    {
                      className: 'card reveal-up opacity-0 translate-y-3 transition',
                      children: [
                        c.jsx('div', {
                          className:
                            'w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-100 to-cyan-100 border border-slate-200 mb-2',
                        }),
                        c.jsx('h3', { className: 'font-semibold', children: r.n }),
                        c.jsx('p', { className: 'muted', children: r.t }),
                        c.jsx('p', { children: r.d }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
              c.jsx('div', {
                className: 'text-center mt-6 reveal-up opacity-0 translate-y-3 transition',
                children: c.jsx(Pe, {
                  to: '/staff',
                  className: 'btn btn-outline',
                  children: 'Meet All Staff',
                }),
              }),
            ],
          }),
        }),
        c.jsx('section', {
          id: 'blog',
          className: 'py-16',
          children: c.jsxs('div', {
            className: 'container-1120',
            children: [
              c.jsxs('div', {
                className:
                  'max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition',
                children: [
                  c.jsx('h2', { className: 'text-3xl font-semibold', children: 'From Our Blog' }),
                  c.jsx('p', {
                    className: 'muted',
                    children: 'Health tips, hospital news, and community updates.',
                  }),
                ],
              }),
              c.jsx('div', {
                className: 'grid gap-5 md:grid-cols-3',
                children: [
                  {
                    t: '5 Habits for a Healthier Heart',
                    d: 'Small lifestyle changes that make a big difference.',
                  },
                  {
                    t: 'What to Expect in Prenatal Care',
                    d: 'Your guide to a safe and informed pregnancy journey.',
                  },
                  {
                    t: 'Dental Checkups: Why Twice a Year?',
                    d: 'Prevention and early detection keep you smiling.',
                  },
                ].map((r, l) =>
                  c.jsxs(
                    'article',
                    {
                      className: 'card reveal-up opacity-0 translate-y-3 transition',
                      children: [
                        c.jsx('div', {
                          className:
                            'w-full h-36 rounded-xl bg-gradient-to-tr from-sky-100 to-emerald-100 border border-slate-200 mb-2',
                        }),
                        c.jsx('h3', { className: 'font-semibold', children: r.t }),
                        c.jsx('p', { className: 'muted', children: r.d }),
                        c.jsx(Pe, {
                          to: '/blog',
                          className: 'text-brand-navy font-semibold',
                          children: 'Read more',
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
              c.jsx('div', {
                className: 'text-center mt-6 reveal-up opacity-0 translate-y-3 transition',
                children: c.jsx(Pe, {
                  to: '/blog',
                  className: 'btn btn-outline',
                  children: 'View Blog',
                }),
              }),
            ],
          }),
        }),
        c.jsx('section', {
          id: 'testimonials',
          className: 'py-16 bg-gradient-to-b from-[#f4fbfb] to-transparent',
          children: c.jsxs('div', {
            className: 'container-1120',
            children: [
              c.jsxs('div', {
                className:
                  'max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition',
                children: [
                  c.jsx('h2', {
                    className: 'text-3xl font-semibold',
                    children: 'Patient Testimonials',
                  }),
                  c.jsx('p', { className: 'muted', children: 'Real stories from those we serve.' }),
                ],
              }),
              c.jsx('div', {
                className: 'relative',
                children: c.jsx('div', {
                  className: 'grid grid-cols-1',
                  children: e.map((r, l) =>
                    c.jsxs(
                      'figure',
                      {
                        className: `transition-opacity duration-300 ${l === t ? 'opacity-100' : 'opacity-0 absolute'}`,
                        children: [
                          c.jsx('blockquote', { className: 'text-lg font-medium', children: r.q }),
                          c.jsx('figcaption', { className: 'muted', children: r.a }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function Qh() {
  const [e, t] = S.useState('idle'),
    [n, r] = S.useState('');
  async function l(i) {
    i.preventDefault();
    const o = new FormData(i.currentTarget),
      a = Object.fromEntries(o.entries());
    if (!a.fullName || !a.email || !a.phone || !a.preferredDateTime || !a.department) {
      (r('Please complete all required fields.'), t('err'));
      return;
    }
    try {
      (await new Promise((s) => setTimeout(s, 600)),
        r('Appointment request sent. We will contact you shortly.'),
        t('ok'),
        i.currentTarget.reset());
    } catch {
      (r('Something went wrong. Please try again later or contact us.'), t('err'));
    }
  }
  return c.jsxs('form', {
    onSubmit: l,
    className: 'card reveal-up opacity-0 translate-y-3 transition',
    noValidate: !0,
    children: [
      c.jsxs('div', {
        className: 'grid md:grid-cols-2 gap-4',
        children: [
          c.jsxs('label', {
            className: 'flex flex-col gap-2',
            children: [
              c.jsx('span', { children: 'Full Name' }),
              c.jsx('input', {
                name: 'fullName',
                required: !0,
                className:
                  'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]',
                placeholder: 'Your full name',
              }),
            ],
          }),
          c.jsxs('label', {
            className: 'flex flex-col gap-2',
            children: [
              c.jsx('span', { children: 'Email' }),
              c.jsx('input', {
                type: 'email',
                name: 'email',
                required: !0,
                className:
                  'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]',
                placeholder: 'you@example.com',
              }),
            ],
          }),
          c.jsxs('label', {
            className: 'flex flex-col gap-2',
            children: [
              c.jsx('span', { children: 'Phone Number' }),
              c.jsx('input', {
                name: 'phone',
                required: !0,
                className:
                  'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]',
                placeholder: 'e.g. +1 555 123 4567',
              }),
            ],
          }),
          c.jsxs('label', {
            className: 'flex flex-col gap-2',
            children: [
              c.jsx('span', { children: 'Preferred Date & Time' }),
              c.jsx('input', {
                type: 'datetime-local',
                name: 'preferredDateTime',
                required: !0,
                className:
                  'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]',
              }),
            ],
          }),
          c.jsxs('label', {
            className: 'flex flex-col gap-2 md:col-span-2 md:max-w-md',
            children: [
              c.jsx('span', { children: 'Department / Service' }),
              c.jsxs('select', {
                name: 'department',
                required: !0,
                className:
                  'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]',
                children: [
                  c.jsx('option', {
                    value: '',
                    disabled: !0,
                    selected: !0,
                    children: 'Select a department',
                  }),
                  [
                    'General Medicine',
                    'Dental',
                    'Maternity',
                    'Surgery',
                    'Pediatrics',
                    'Cardiology',
                    'Orthopedics',
                    'Laboratory',
                  ].map((i) => c.jsx('option', { children: i }, i)),
                ],
              }),
            ],
          }),
          c.jsxs('label', {
            className: 'flex flex-col gap-2 md:col-span-2',
            children: [
              c.jsx('span', { children: 'Message (optional)' }),
              c.jsx('textarea', {
                name: 'message',
                rows: 4,
                className:
                  'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]',
                placeholder: 'Any additional details',
              }),
            ],
          }),
        ],
      }),
      c.jsxs('div', {
        className: 'flex items-center gap-3 mt-3',
        children: [
          c.jsx('button', {
            type: 'submit',
            className: 'btn btn-primary',
            children: 'Book Appointment',
          }),
          c.jsx('p', {
            className: 'muted m-0 text-sm',
            children: 'By submitting, you agree to be contacted by our team.',
          }),
        ],
      }),
      e !== 'idle' &&
        c.jsx('p', {
          className: `mt-3 font-medium ${e === 'ok' ? 'text-brand-navy' : 'text-red-700'}`,
          children: n,
        }),
    ],
  });
}
function Kh() {
  const e = [
    {
      t: 'General Medicine',
      d: 'Primary care, chronic disease management, annual physicals, preventive screening.',
    },
    {
      t: 'Dental',
      d: 'Exams, cleaning, fillings, root canals, crowns, cosmetic procedures, oral surgery.',
    },
    {
      t: 'Maternity',
      d: 'Antenatal classes, delivery, postnatal care; lactation support and mother-baby safety.',
    },
    { t: 'Surgery', d: 'General and minimally invasive procedures; pre-op to recovery support.' },
    {
      t: 'Pediatrics',
      d: 'Well-child visits, immunizations, acute and chronic condition management.',
    },
    {
      t: 'Cardiology',
      d: 'ECG, echocardiogram, risk assessment, medication management, ongoing follow-up.',
    },
    {
      t: 'Orthopedics',
      d: 'Fracture care, sports injuries, arthritis, joint replacement referrals, rehab.',
    },
    {
      t: 'Laboratory & Imaging',
      d: 'Blood tests, cultures, X-ray, ultrasound; accurate results supporting quick decisions.',
    },
  ];
  return c.jsxs('section', {
    className: 'py-16',
    children: [
      c.jsx(jn, { children: c.jsx('title', { children: 'Services | Gallena Medical Centre' }) }),
      c.jsxs('div', {
        className: 'container-1120',
        children: [
          c.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-7',
            children: [
              c.jsx('h1', {
                className: 'text-3xl font-semibold',
                children: 'Our Medical Services',
              }),
              c.jsx('p', {
                className: 'muted',
                children:
                  'Comprehensive, patient-centered services delivered by experienced specialists.',
              }),
            ],
          }),
          c.jsx('div', {
            className: 'grid gap-5 md:grid-cols-4',
            children: e.map((t) =>
              c.jsxs(
                'article',
                {
                  className: 'card',
                  children: [
                    c.jsx('h3', { className: 'font-semibold text-lg', children: t.t }),
                    c.jsx('p', { children: t.d }),
                  ],
                },
                t.t,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Gh() {
  const e = [
    {
      n: 'Dr. Aisha Mensah',
      t: 'Consultant Physician',
      d: 'Internal medicine, preventive care, chronic disease management.',
    },
    {
      n: 'Dr. David Ofori',
      t: 'Dental Surgeon',
      d: 'Comprehensive dentistry and cosmetic procedures.',
    },
    { n: 'Matilda Owusu', t: 'Senior Midwife', d: 'Maternal and newborn care with compassion.' },
    {
      n: 'Samuel Tetteh',
      t: 'Head Nurse',
      d: 'Quality assurance and patient advocacy across wards.',
    },
    { n: 'Grace Appiah', t: 'Pediatric Nurse', d: 'Child-centered care with a gentle approach.' },
    {
      n: 'Dr. Kwame Boateng',
      t: 'Cardiologist',
      d: 'Heart health diagnostics and long-term cardiac care.',
    },
    {
      n: 'Dr. Linda Owusu',
      t: 'Orthopedic Specialist',
      d: 'Joint and bone care; sports injury management.',
    },
    { n: 'Kojo Nartey', t: 'Lab Scientist', d: 'Accurate lab diagnostics and timely reporting.' },
  ];
  return c.jsxs('section', {
    className: 'py-16',
    children: [
      c.jsx(jn, { children: c.jsx('title', { children: 'Our Staff | Gallena Medical Centre' }) }),
      c.jsxs('div', {
        className: 'container-1120',
        children: [
          c.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-7',
            children: [
              c.jsx('h1', { className: 'text-3xl font-semibold', children: 'Meet Our Team' }),
              c.jsx('p', {
                className: 'muted',
                children: 'Highly skilled and compassionate professionals dedicated to your care.',
              }),
            ],
          }),
          c.jsx('div', {
            className: 'grid gap-5 md:grid-cols-4',
            children: e.map((t) =>
              c.jsxs(
                'article',
                {
                  className: 'card',
                  children: [
                    c.jsx('div', {
                      className:
                        'w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-100 to-cyan-100 border border-slate-200 mb-2',
                    }),
                    c.jsx('h3', { className: 'font-semibold', children: t.n }),
                    c.jsx('p', { className: 'muted', children: t.t }),
                    c.jsx('p', { children: t.d }),
                  ],
                },
                t.n,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Yh() {
  const e = [
    {
      t: 'Hydration and Heart Health',
      d: 'Why staying hydrated supports cardiovascular function.',
    },
    { t: 'Understanding Blood Pressure', d: 'Know your numbers and what they mean.' },
    { t: 'Childhood Vaccination Guide', d: 'Essential shots and schedules for kids.' },
    { t: 'Oral Hygiene Basics', d: 'Simple daily habits for healthier teeth.' },
    { t: 'Preparing for Surgery', d: 'What to expect from pre-op to recovery.' },
    { t: 'Managing Diabetes', d: 'Diet, exercise, and medication tips.' },
  ];
  return c.jsxs('section', {
    className: 'py-16',
    children: [
      c.jsx(jn, { children: c.jsx('title', { children: 'Blog | Gallena Medical Centre' }) }),
      c.jsxs('div', {
        className: 'container-1120',
        children: [
          c.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-7',
            children: [
              c.jsx('h1', { className: 'text-3xl font-semibold', children: 'Health Tips & News' }),
              c.jsx('p', {
                className: 'muted',
                children: 'Latest updates from our clinicians and community.',
              }),
            ],
          }),
          c.jsx('div', {
            className: 'grid gap-5 md:grid-cols-3',
            children: e.map((t) =>
              c.jsxs(
                'article',
                {
                  className: 'card',
                  children: [
                    c.jsx('div', {
                      className:
                        'w-full h-36 rounded-xl bg-gradient-to-tr from-sky-100 to-emerald-100 border border-slate-200 mb-2',
                    }),
                    c.jsx('h3', { className: 'font-semibold', children: t.t }),
                    c.jsx('p', { className: 'muted', children: t.d }),
                    c.jsx('a', {
                      className: 'text-brand-navy font-semibold',
                      href: '#',
                      children: 'Read more',
                    }),
                  ],
                },
                t.t,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function Xh() {
  const [e, t] = S.useState('idle'),
    [n, r] = S.useState('');
  async function l(i) {
    i.preventDefault();
    const o = new FormData(i.currentTarget),
      a = Object.fromEntries(o.entries());
    if (!a.fullName || !a.email || !a.message) {
      (r('Please fill out all required fields.'), t('err'));
      return;
    }
    try {
      (await new Promise((s) => setTimeout(s, 500)),
        r('Message sent. We will get back to you shortly.'),
        t('ok'),
        i.currentTarget.reset());
    } catch {
      (r('Failed to send. Please try again.'), t('err'));
    }
  }
  return c.jsxs('section', {
    className: 'py-16',
    children: [
      c.jsx(jn, { children: c.jsx('title', { children: 'Contact Us | Gallena Medical Centre' }) }),
      c.jsxs('div', {
        className: 'container-1120',
        children: [
          c.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-7',
            children: [
              c.jsx('h1', { className: 'text-3xl font-semibold', children: 'Contact Us' }),
              c.jsx('p', {
                className: 'muted',
                children: 'We’re here to help. Reach out via the form or the channels below.',
              }),
            ],
          }),
          c.jsxs('div', {
            className: 'grid md:grid-cols-2 gap-5',
            children: [
              c.jsxs('form', {
                onSubmit: l,
                className: 'card',
                noValidate: !0,
                children: [
                  c.jsxs('label', {
                    className: 'flex flex-col gap-2',
                    children: [
                      c.jsx('span', { children: 'Full Name' }),
                      c.jsx('input', {
                        name: 'fullName',
                        required: !0,
                        className:
                          'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500',
                      }),
                    ],
                  }),
                  c.jsxs('label', {
                    className: 'flex flex-col gap-2 mt-3',
                    children: [
                      c.jsx('span', { children: 'Email' }),
                      c.jsx('input', {
                        type: 'email',
                        name: 'email',
                        required: !0,
                        className:
                          'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500',
                      }),
                    ],
                  }),
                  c.jsxs('label', {
                    className: 'flex flex-col gap-2 mt-3',
                    children: [
                      c.jsx('span', { children: 'Message' }),
                      c.jsx('textarea', {
                        name: 'message',
                        rows: 6,
                        required: !0,
                        className:
                          'w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500',
                      }),
                    ],
                  }),
                  c.jsx('div', {
                    className: 'mt-3',
                    children: c.jsx('button', {
                      className: 'btn btn-primary',
                      type: 'submit',
                      children: 'Send Message',
                    }),
                  }),
                  e !== 'idle' &&
                    c.jsx('p', {
                      className: `mt-3 font-medium ${e === 'ok' ? 'text-brand-navy' : 'text-red-700'}`,
                      children: n,
                    }),
                ],
              }),
              c.jsxs('div', {
                className: 'card',
                children: [
                  c.jsx('h3', { className: 'font-semibold text-lg', children: 'Get in touch' }),
                  c.jsxs('p', {
                    className: 'flex items-center gap-2',
                    children: [
                      c.jsx('strong', { children: 'Email:' }),
                      ' ',
                      c.jsxs('a', {
                        className:
                          'inline-flex items-center gap-1 text-white bg-brand-navy rounded-lg px-2 py-1',
                        href: 'mailto:gallenamedicalcentre@gmail.com',
                        children: [
                          c.jsx('svg', {
                            width: '16',
                            height: '16',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                            'aria-hidden': 'true',
                            children: c.jsx('path', {
                              d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
                            }),
                          }),
                          ' ',
                          'gallenamedicalcentre@gmail.com',
                        ],
                      }),
                    ],
                  }),
                  c.jsxs('p', {
                    className: 'flex items-center gap-2',
                    children: [
                      c.jsx('strong', { children: 'WhatsApp:' }),
                      ' ',
                      c.jsxs('a', {
                        className:
                          'inline-flex items-center gap-1 text-white bg-brand-navy rounded-lg px-2 py-1',
                        href: 'https://wa.me/256787992588',
                        target: '_blank',
                        rel: 'noopener',
                        children: [
                          c.jsx('svg', {
                            width: '16',
                            height: '16',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                            'aria-hidden': 'true',
                            children: c.jsx('path', {
                              d: 'M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.17 1.6 5.98L0 24l6.26-1.64a11.87 11.87 0 0 0 5.78 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.18-1.24-6.17-3.47-8.43zM12.05 21.2h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.9 9.9 0 0 1-1.55-5.35c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.91 7.01c0 5.47-4.45 9.92-9.92 9.92zm5.64-7.44c-.31-.15-1.84-.9-2.13-1-.29-.1-.5-.15-.71.15-.21.31-.82 1-.99 1.21-.18.21-.36.23-.67.08-.31-.15-1.34-.49-2.55-1.56-.94-.84-1.58-1.88-1.76-2.19-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.15-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55h-.6c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.21 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36z',
                            }),
                          }),
                          ' ',
                          'Chat on WhatsApp',
                        ],
                      }),
                    ],
                  }),
                  c.jsxs('p', {
                    children: [
                      c.jsx('strong', { children: 'Facebook:' }),
                      ' ',
                      c.jsx('a', {
                        className: 'text-brand-navy',
                        href: 'https://facebook.com/',
                        target: '_blank',
                        rel: 'noopener',
                        children: 'Visit our page',
                      }),
                    ],
                  }),
                  c.jsxs('p', {
                    children: [
                      c.jsx('strong', { children: 'Address:' }),
                      ' 123 Health Avenue, Wellness District, Accra',
                    ],
                  }),
                  c.jsx('div', {
                    className: 'mt-3 border border-slate-200 rounded-xl overflow-hidden',
                    children: c.jsx('iframe', {
                      title: 'Google Map',
                      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.981!2d-0.190!3d5.603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNS42MDMgLTAuMTkw!5e0!3m2!1sen!2sgh!4v1700000000000',
                      width: '100%',
                      height: '260',
                      loading: 'lazy',
                      referrerPolicy: 'no-referrer-when-downgrade',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ee = [
  {
    q: 'What services do you offer?',
    a: 'We offer General Medicine, Dental, Maternity, Surgery, Pediatrics, Cardiology, Orthopedics, and Laboratory services.',
  },
  {
    q: 'How can I book an appointment?',
    a: 'Use the "Book Consultation" form on the Home page. Fill in your details and our team will contact you to confirm.',
  },
  {
    q: 'Where are you located?',
    a: 'Our address is 123 Health Avenue, Wellness District, Accra. See the map on the Contact page.',
  },
  {
    q: 'What are your working hours?',
    a: 'We are open Mon–Fri: 8:00–18:00, Sat: 9:00–14:00. For emergencies, please dial local emergency numbers.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes, we accept a range of insurers. Please bring your insurance card; for specifics, contact our front desk.',
  },
];
function Li(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
}
function qh() {
  const [e, t] = S.useState(!1),
    [n, r] = S.useState(''),
    [l, i] = S.useState([
      { role: 'assistant', text: "Hi, I'm Gallena PDA. How can I help you today?" },
    ]),
    o = S.useRef(null);
  S.useEffect(() => {
    var f;
    (f = o.current) == null || f.scrollIntoView({ behavior: 'smooth' });
  }, [l, e]);
  const a = S.useMemo(() => Ee.map((f) => f.q), []);
  function s(f) {
    const v = Li(f),
      g = Ee.find((x) => Li(x.q).includes(v) || v.includes(Li(x.q)));
    return g
      ? g.a
      : /(book|appointment|consult)/i.test(f) && Ee[1]
        ? Ee[1].a
        : /(service|offer|department)/i.test(f) && Ee[0]
          ? Ee[0].a
          : /(where|address|locat)/i.test(f) && Ee[2]
            ? Ee[2].a
            : /(hour|time|open)/i.test(f) && Ee[3]
              ? Ee[3].a
              : /(insurance|insurer)/i.test(f) && Ee[4]
                ? Ee[4].a
                : "I'm not sure yet. You can try our Services or Contact pages, or ask me another way.";
  }
  function u(f) {
    if (!f.trim()) return;
    const v = { role: 'user', text: f },
      g = { role: 'assistant', text: s(f) };
    i((x) => [...x, v, g]);
  }
  function h(f) {
    (f.preventDefault(), u(n), r(''));
  }
  return c.jsxs('div', {
    className: 'fixed z-50 bottom-4 right-4',
    children: [
      !e &&
        c.jsx('button', {
          onClick: () => t(!0),
          'aria-label': 'Open Gallena PDA',
          className:
            'shadow-soft w-14 h-14 rounded-full bg-[#0b3b4f] text-white text-sm font-semibold',
          children: 'PDA',
        }),
      e &&
        c.jsxs('div', {
          className:
            'w-80 max-w-[92vw] h-[480px] rounded-2xl border border-slate-200 dark:border-slate-700 shadow-soft bg-white dark:bg-slate-900 overflow-hidden flex flex-col',
          children: [
            c.jsxs('div', {
              className:
                'px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-[#0b3b4f]',
              children: [
                c.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    c.jsx('span', {
                      className:
                        'grid place-items-center w-6 h-6 rounded-md text-white text-xs font-bold bg-[#0b3b4f]',
                      children: '+',
                    }),
                    c.jsx('strong', { className: 'text-white', children: 'Gallena PDA' }),
                  ],
                }),
                c.jsx('button', {
                  onClick: () => t(!1),
                  className: 'text-white hover:text-slate-200',
                  children: '✕',
                }),
              ],
            }),
            c.jsxs('div', {
              className: 'flex-1 overflow-auto p-3 space-y-2',
              children: [
                l.map((f, v) =>
                  c.jsx(
                    'div',
                    {
                      className: `max-w-[85%] ${f.role === 'user' ? 'ml-auto' : ''}`,
                      children: c.jsx('div', {
                        className: `${f.role === 'user' ? 'bg-sky-100 text-slate-900' : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100'} px-3 py-2 rounded-xl`,
                        children: f.text,
                      }),
                    },
                    v,
                  ),
                ),
                c.jsx('div', { ref: o }),
              ],
            }),
            c.jsxs('div', {
              className: 'px-3 pb-3',
              children: [
                c.jsx('div', {
                  className: 'flex flex-wrap gap-2 mb-2',
                  children: a.slice(0, 3).map((f) =>
                    c.jsx(
                      'button',
                      {
                        onClick: () => u(f),
                        className:
                          'text-xs px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
                        children: f,
                      },
                      f,
                    ),
                  ),
                }),
                c.jsxs('form', {
                  onSubmit: h,
                  className: 'flex items-center gap-2',
                  children: [
                    c.jsx('input', {
                      value: n,
                      onChange: (f) => r(f.target.value),
                      placeholder: 'Type your question...',
                      className:
                        'flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100',
                    }),
                    c.jsx('button', {
                      type: 'submit',
                      className: 'btn btn-primary',
                      children: 'Send',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Zh() {
  return c.jsxs('div', {
    id: 'app-bg',
    className: 'min-h-screen flex flex-col text-slate-900 dark:text-slate-100',
    children: [
      c.jsxs(jn, {
        children: [
          c.jsx('title', { children: 'Gallena Medical Centre' }),
          c.jsx('meta', {
            name: 'description',
            content:
              'Gallena Medical Centre offers comprehensive healthcare: general medicine, dental, maternity, surgery, and more. Book a consultation today.',
          }),
          c.jsx('meta', { property: 'og:title', content: 'Gallena Medical Centre' }),
          c.jsx('meta', {
            property: 'og:description',
            content: 'Modern, trusted healthcare. Book your consultation online.',
          }),
          c.jsx('meta', { property: 'og:type', content: 'website' }),
        ],
      }),
      c.jsx(Hh, {}),
      c.jsx($h, {}),
      c.jsx('main', {
        className: 'flex-1',
        children: c.jsxs(qm, {
          children: [
            c.jsx(Kt, { path: '/', element: c.jsx(Wh, {}) }),
            c.jsx(Kt, { path: '/services', element: c.jsx(Kh, {}) }),
            c.jsx(Kt, { path: '/staff', element: c.jsx(Gh, {}) }),
            c.jsx(Kt, { path: '/blog', element: c.jsx(Yh, {}) }),
            c.jsx(Kt, { path: '/contact', element: c.jsx(Xh, {}) }),
          ],
        }),
      }),
      c.jsx(Bh, {}),
      c.jsx(qh, {}),
    ],
  });
}
Ri.createRoot(document.getElementById('root')).render(
  c.jsx(Ve.StrictMode, {
    children: c.jsx(Td, { children: c.jsx(lh, { children: c.jsx(Zh, {}) }) }),
  }),
);
