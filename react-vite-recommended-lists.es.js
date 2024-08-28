var Yu = Object.defineProperty;
var Ku = (e, t, n) => t in e ? Yu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var dn = (e, t, n) => Ku(e, typeof t != "symbol" ? t + "" : t, n);
import * as F from "react";
import Ue, { forwardRef as cc, useContext as Ne, Children as Gu, isValidElement as sr, cloneElement as ar, createContext as on, useLayoutEffect as Hu, useEffect as to, useRef as Ai, useInsertionEffect as qu, useCallback as lc, useMemo as Rr, Fragment as uc, createElement as Xu, useId as Zu, Component as Ju, useState as ts } from "react";
function Qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ri = { exports: {} }, hn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns;
function ef() {
  if (ns) return hn;
  ns = 1;
  var e = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, f = {}, d = null, g = null;
    l !== void 0 && (d = "" + l), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (u in c) r.call(c, u) && !o.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: a, key: d, ref: g, props: f, _owner: i.current };
  }
  return hn.Fragment = n, hn.jsx = s, hn.jsxs = s, hn;
}
var pn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs;
function tf() {
  return rs || (rs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ue, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, v = "@@iterator";
    function y(m) {
      if (m === null || typeof m != "object")
        return null;
      var O = b && m[b] || m[v];
      return typeof O == "function" ? O : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(m) {
      {
        for (var O = arguments.length, $ = new Array(O > 1 ? O - 1 : 0), z = 1; z < O; z++)
          $[z - 1] = arguments[z];
        x("error", m, $);
      }
    }
    function x(m, O, $) {
      {
        var z = S.ReactDebugCurrentFrame, se = z.getStackAddendum();
        se !== "" && (O += "%s", $ = $.concat([se]));
        var me = $.map(function(re) {
          return String(re);
        });
        me.unshift("Warning: " + O), Function.prototype.apply.call(console[m], console, me);
      }
    }
    var C = !1, p = !1, M = !1, _ = !1, V = !1, h;
    h = Symbol.for("react.module.reference");
    function A(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === o || V || m === i || m === l || m === u || _ || m === g || C || p || M || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === f || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === h || m.getModuleId !== void 0));
    }
    function I(m, O, $) {
      var z = m.displayName;
      if (z)
        return z;
      var se = O.displayName || O.name || "";
      return se !== "" ? $ + "(" + se + ")" : $;
    }
    function j(m) {
      return m.displayName || "Context";
    }
    function K(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var O = m;
            return j(O) + ".Consumer";
          case s:
            var $ = m;
            return j($._context) + ".Provider";
          case c:
            return I(m, m.render, "ForwardRef");
          case f:
            var z = m.displayName || null;
            return z !== null ? z : K(m.type) || "Memo";
          case d: {
            var se = m, me = se._payload, re = se._init;
            try {
              return K(re(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, G = 0, J, pe, be, we, R, k, L;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function B() {
      {
        if (G === 0) {
          J = console.log, pe = console.info, be = console.warn, we = console.error, R = console.group, k = console.groupCollapsed, L = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        G++;
      }
    }
    function Q() {
      {
        if (G--, G === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, m, {
              value: J
            }),
            info: Z({}, m, {
              value: pe
            }),
            warn: Z({}, m, {
              value: be
            }),
            error: Z({}, m, {
              value: we
            }),
            group: Z({}, m, {
              value: R
            }),
            groupCollapsed: Z({}, m, {
              value: k
            }),
            groupEnd: Z({}, m, {
              value: L
            })
          });
        }
        G < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = S.ReactCurrentDispatcher, U;
    function H(m, O, $) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (se) {
            var z = se.stack.trim().match(/\n( *(at )?)/);
            U = z && z[1] || "";
          }
        return `
` + U + m;
      }
    }
    var ee = !1, q;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Se();
    }
    function P(m, O) {
      if (!m || ee)
        return "";
      {
        var $ = q.get(m);
        if ($ !== void 0)
          return $;
      }
      var z;
      ee = !0;
      var se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = W.current, W.current = null, B();
      try {
        if (O) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (Fe) {
              z = Fe;
            }
            Reflect.construct(m, [], re);
          } else {
            try {
              re.call();
            } catch (Fe) {
              z = Fe;
            }
            m.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            z = Fe;
          }
          m();
        }
      } catch (Fe) {
        if (Fe && z && typeof Fe.stack == "string") {
          for (var ne = Fe.stack.split(`
`), Be = z.stack.split(`
`), Pe = ne.length - 1, Oe = Be.length - 1; Pe >= 1 && Oe >= 0 && ne[Pe] !== Be[Oe]; )
            Oe--;
          for (; Pe >= 1 && Oe >= 0; Pe--, Oe--)
            if (ne[Pe] !== Be[Oe]) {
              if (Pe !== 1 || Oe !== 1)
                do
                  if (Pe--, Oe--, Oe < 0 || ne[Pe] !== Be[Oe]) {
                    var Xe = `
` + ne[Pe].replace(" at new ", " at ");
                    return m.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", m.displayName)), typeof m == "function" && q.set(m, Xe), Xe;
                  }
                while (Pe >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        ee = !1, W.current = me, Q(), Error.prepareStackTrace = se;
      }
      var Lt = m ? m.displayName || m.name : "", Mt = Lt ? H(Lt) : "";
      return typeof m == "function" && q.set(m, Mt), Mt;
    }
    function Re(m, O, $) {
      return P(m, !1);
    }
    function D(m) {
      var O = m.prototype;
      return !!(O && O.isReactComponent);
    }
    function _e(m, O, $) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return P(m, D(m));
      if (typeof m == "string")
        return H(m);
      switch (m) {
        case l:
          return H("Suspense");
        case u:
          return H("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return Re(m.render);
          case f:
            return _e(m.type, O, $);
          case d: {
            var z = m, se = z._payload, me = z._init;
            try {
              return _e(me(se), O, $);
            } catch {
            }
          }
        }
      return "";
    }
    var qe = Object.prototype.hasOwnProperty, Rt = {}, Ot = S.ReactDebugCurrentFrame;
    function nt(m) {
      if (m) {
        var O = m._owner, $ = _e(m.type, m._source, O ? O.type : null);
        Ot.setExtraStackFrame($);
      } else
        Ot.setExtraStackFrame(null);
    }
    function Zr(m, O, $, z, se) {
      {
        var me = Function.call.bind(qe);
        for (var re in m)
          if (me(m, re)) {
            var ne = void 0;
            try {
              if (typeof m[re] != "function") {
                var Be = Error((z || "React class") + ": " + $ + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              ne = m[re](O, re, z, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ne = Pe;
            }
            ne && !(ne instanceof Error) && (nt(se), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", $, re, typeof ne), nt(null)), ne instanceof Error && !(ne.message in Rt) && (Rt[ne.message] = !0, nt(se), w("Failed %s type: %s", $, ne.message), nt(null));
          }
      }
    }
    var Gn = Array.isArray;
    function un(m) {
      return Gn(m);
    }
    function X(m) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, $ = O && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return $;
      }
    }
    function Hn(m) {
      try {
        return qn(m), !1;
      } catch {
        return !0;
      }
    }
    function qn(m) {
      return "" + m;
    }
    function fn(m) {
      if (Hn(m))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X(m)), qn(m);
    }
    var Nt = S.ReactCurrentOwner, Au = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ko, Go, Jr;
    Jr = {};
    function Ru(m) {
      if (qe.call(m, "ref")) {
        var O = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Ou(m) {
      if (qe.call(m, "key")) {
        var O = Object.getOwnPropertyDescriptor(m, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Mu(m, O) {
      if (typeof m.ref == "string" && Nt.current && O && Nt.current.stateNode !== O) {
        var $ = K(Nt.current.type);
        Jr[$] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Nt.current.type), m.ref), Jr[$] = !0);
      }
    }
    function _u(m, O) {
      {
        var $ = function() {
          Ko || (Ko = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        $.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function ku(m, O) {
      {
        var $ = function() {
          Go || (Go = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        $.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var $u = function(m, O, $, z, se, me, re) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: O,
        ref: $,
        props: re,
        // Record the component responsible for creating this element.
        _owner: me
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Vu(m, O, $, z, se) {
      {
        var me, re = {}, ne = null, Be = null;
        $ !== void 0 && (fn($), ne = "" + $), Ou(O) && (fn(O.key), ne = "" + O.key), Ru(O) && (Be = O.ref, Mu(O, se));
        for (me in O)
          qe.call(O, me) && !Au.hasOwnProperty(me) && (re[me] = O[me]);
        if (m && m.defaultProps) {
          var Pe = m.defaultProps;
          for (me in Pe)
            re[me] === void 0 && (re[me] = Pe[me]);
        }
        if (ne || Be) {
          var Oe = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ne && _u(re, Oe), Be && ku(re, Oe);
        }
        return $u(m, ne, Be, se, z, Nt.current, re);
      }
    }
    var Qr = S.ReactCurrentOwner, Ho = S.ReactDebugCurrentFrame;
    function Ft(m) {
      if (m) {
        var O = m._owner, $ = _e(m.type, m._source, O ? O.type : null);
        Ho.setExtraStackFrame($);
      } else
        Ho.setExtraStackFrame(null);
    }
    var ei;
    ei = !1;
    function ti(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function qo() {
      {
        if (Qr.current) {
          var m = K(Qr.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Du(m) {
      return "";
    }
    var Xo = {};
    function Iu(m) {
      {
        var O = qo();
        if (!O) {
          var $ = typeof m == "string" ? m : m.displayName || m.name;
          $ && (O = `

Check the top-level render call using <` + $ + ">.");
        }
        return O;
      }
    }
    function Zo(m, O) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var $ = Iu(O);
        if (Xo[$])
          return;
        Xo[$] = !0;
        var z = "";
        m && m._owner && m._owner !== Qr.current && (z = " It was passed a child from " + K(m._owner.type) + "."), Ft(m), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, z), Ft(null);
      }
    }
    function Jo(m, O) {
      {
        if (typeof m != "object")
          return;
        if (un(m))
          for (var $ = 0; $ < m.length; $++) {
            var z = m[$];
            ti(z) && Zo(z, O);
          }
        else if (ti(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var se = y(m);
          if (typeof se == "function" && se !== m.entries)
            for (var me = se.call(m), re; !(re = me.next()).done; )
              ti(re.value) && Zo(re.value, O);
        }
      }
    }
    function ju(m) {
      {
        var O = m.type;
        if (O == null || typeof O == "string")
          return;
        var $;
        if (typeof O == "function")
          $ = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === f))
          $ = O.propTypes;
        else
          return;
        if ($) {
          var z = K(O);
          Zr($, m.props, "prop", z, m);
        } else if (O.PropTypes !== void 0 && !ei) {
          ei = !0;
          var se = K(O);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", se || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bu(m) {
      {
        for (var O = Object.keys(m.props), $ = 0; $ < O.length; $++) {
          var z = O[$];
          if (z !== "children" && z !== "key") {
            Ft(m), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), Ft(null);
            break;
          }
        }
        m.ref !== null && (Ft(m), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var Qo = {};
    function es(m, O, $, z, se, me) {
      {
        var re = A(m);
        if (!re) {
          var ne = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = Du();
          Be ? ne += Be : ne += qo();
          var Pe;
          m === null ? Pe = "null" : un(m) ? Pe = "array" : m !== void 0 && m.$$typeof === t ? (Pe = "<" + (K(m.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof m, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ne);
        }
        var Oe = Vu(m, O, $, se, me);
        if (Oe == null)
          return Oe;
        if (re) {
          var Xe = O.children;
          if (Xe !== void 0)
            if (z)
              if (un(Xe)) {
                for (var Lt = 0; Lt < Xe.length; Lt++)
                  Jo(Xe[Lt], m);
                Object.freeze && Object.freeze(Xe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jo(Xe, m);
        }
        if (qe.call(O, "key")) {
          var Mt = K(m), Fe = Object.keys(O).filter(function(zu) {
            return zu !== "key";
          }), ni = Fe.length > 0 ? "{key: someKey, " + Fe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qo[Mt + ni]) {
            var Uu = Fe.length > 0 ? "{" + Fe.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ni, Mt, Uu, Mt), Qo[Mt + ni] = !0;
          }
        }
        return m === r ? Bu(Oe) : ju(Oe), Oe;
      }
    }
    function Nu(m, O, $) {
      return es(m, O, $, !0);
    }
    function Fu(m, O, $) {
      return es(m, O, $, !1);
    }
    var Lu = Fu, Wu = Nu;
    pn.Fragment = r, pn.jsx = Lu, pn.jsxs = Wu;
  }()), pn;
}
process.env.NODE_ENV === "production" ? Ri.exports = ef() : Ri.exports = tf();
var te = Ri.exports;
const An = {
  black: "#000",
  white: "#fff"
}, Wt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ut = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, zt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Yt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Kt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, mn = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, nf = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function xt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const fc = "$$material";
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mr.apply(null, arguments);
}
function dc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var rf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, of = /* @__PURE__ */ dc(
  function(e) {
    return rf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), sf = !1;
function af(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function cf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var lf = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !sf : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(cf(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = af(i);
      try {
        o.insertRule(r, o.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), De = "-ms-", gr = "-moz-", ie = "-webkit-", hc = "comm", no = "rule", ro = "decl", uf = "@import", pc = "@keyframes", ff = "@layer", df = Math.abs, Or = String.fromCharCode, hf = Object.assign;
function pf(e, t) {
  return $e(e, 0) ^ 45 ? (((t << 2 ^ $e(e, 0)) << 2 ^ $e(e, 1)) << 2 ^ $e(e, 2)) << 2 ^ $e(e, 3) : 0;
}
function mc(e) {
  return e.trim();
}
function mf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, n) {
  return e.replace(t, n);
}
function Oi(e, t) {
  return e.indexOf(t);
}
function $e(e, t) {
  return e.charCodeAt(t) | 0;
}
function Rn(e, t, n) {
  return e.slice(t, n);
}
function it(e) {
  return e.length;
}
function io(e) {
  return e.length;
}
function Xn(e, t) {
  return t.push(e), e;
}
function gf(e, t) {
  return e.map(t).join("");
}
var Mr = 1, tn = 1, gc = 0, ze = 0, Me = 0, sn = "";
function _r(e, t, n, r, i, o, s) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: Mr, column: tn, length: s, return: "" };
}
function gn(e, t) {
  return hf(_r("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function yf() {
  return Me;
}
function vf() {
  return Me = ze > 0 ? $e(sn, --ze) : 0, tn--, Me === 10 && (tn = 1, Mr--), Me;
}
function Ke() {
  return Me = ze < gc ? $e(sn, ze++) : 0, tn++, Me === 10 && (tn = 1, Mr++), Me;
}
function at() {
  return $e(sn, ze);
}
function cr() {
  return ze;
}
function In(e, t) {
  return Rn(sn, e, t);
}
function On(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function yc(e) {
  return Mr = tn = 1, gc = it(sn = e), ze = 0, [];
}
function vc(e) {
  return sn = "", e;
}
function lr(e) {
  return mc(In(ze - 1, Mi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bf(e) {
  for (; (Me = at()) && Me < 33; )
    Ke();
  return On(e) > 2 || On(Me) > 3 ? "" : " ";
}
function xf(e, t) {
  for (; --t && Ke() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return In(e, cr() + (t < 6 && at() == 32 && Ke() == 32));
}
function Mi(e) {
  for (; Ke(); )
    switch (Me) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mi(Me);
        break;
      case 40:
        e === 41 && Mi(e);
        break;
      case 92:
        Ke();
        break;
    }
  return ze;
}
function Sf(e, t) {
  for (; Ke() && e + Me !== 57; )
    if (e + Me === 84 && at() === 47)
      break;
  return "/*" + In(t, ze - 1) + "*" + Or(e === 47 ? e : Ke());
}
function Tf(e) {
  for (; !On(at()); )
    Ke();
  return In(e, ze);
}
function Cf(e) {
  return vc(ur("", null, null, null, [""], e = yc(e), 0, [0], e));
}
function ur(e, t, n, r, i, o, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, g = 0, b = 0, v = 1, y = 1, S = 1, w = 0, x = "", C = i, p = o, M = r, _ = x; y; )
    switch (b = w, w = Ke()) {
      case 40:
        if (b != 108 && $e(_, f - 1) == 58) {
          Oi(_ += oe(lr(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += lr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += bf(b);
        break;
      case 92:
        _ += xf(cr() - 1, 7);
        continue;
      case 47:
        switch (at()) {
          case 42:
          case 47:
            Xn(wf(Sf(Ke(), cr()), t, n), c);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * v:
        a[l++] = it(_) * S;
      case 125 * v:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            y = 0;
          case 59 + u:
            S == -1 && (_ = oe(_, /\f/g, "")), g > 0 && it(_) - f && Xn(g > 32 ? os(_ + ";", r, n, f - 1) : os(oe(_, " ", "") + ";", r, n, f - 2), c);
            break;
          case 59:
            _ += ";";
          default:
            if (Xn(M = is(_, t, n, l, u, i, a, x, C = [], p = [], f), o), w === 123)
              if (u === 0)
                ur(_, t, M, M, C, o, f, a, p);
              else
                switch (d === 99 && $e(_, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ur(e, M, M, r && Xn(is(e, M, M, 0, 0, i, a, x, i, C = [], f), p), i, p, f, a, r ? C : p);
                    break;
                  default:
                    ur(_, M, M, M, [""], p, 0, a, p);
                }
        }
        l = u = g = 0, v = S = 1, x = _ = "", f = s;
        break;
      case 58:
        f = 1 + it(_), g = b;
      default:
        if (v < 1) {
          if (w == 123)
            --v;
          else if (w == 125 && v++ == 0 && vf() == 125)
            continue;
        }
        switch (_ += Or(w), w * v) {
          case 38:
            S = u > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            a[l++] = (it(_) - 1) * S, S = 1;
            break;
          case 64:
            at() === 45 && (_ += lr(Ke())), d = at(), u = f = it(x = _ += Tf(cr())), w++;
            break;
          case 45:
            b === 45 && it(_) == 2 && (v = 0);
        }
    }
  return o;
}
function is(e, t, n, r, i, o, s, a, c, l, u) {
  for (var f = i - 1, d = i === 0 ? o : [""], g = io(d), b = 0, v = 0, y = 0; b < r; ++b)
    for (var S = 0, w = Rn(e, f + 1, f = df(v = s[b])), x = e; S < g; ++S)
      (x = mc(v > 0 ? d[S] + " " + w : oe(w, /&\f/g, d[S]))) && (c[y++] = x);
  return _r(e, t, n, i === 0 ? no : a, c, l, u);
}
function wf(e, t, n) {
  return _r(e, t, n, hc, Or(yf()), Rn(e, 2, -2), 0);
}
function os(e, t, n, r) {
  return _r(e, t, n, ro, Rn(e, 0, r), Rn(e, r + 1, -1), r);
}
function Qt(e, t) {
  for (var n = "", r = io(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Pf(e, t, n, r) {
  switch (e.type) {
    case ff:
      if (e.children.length) break;
    case uf:
    case ro:
      return e.return = e.return || e.value;
    case hc:
      return "";
    case pc:
      return e.return = e.value + "{" + Qt(e.children, r) + "}";
    case no:
      e.value = e.props.join(",");
  }
  return it(n = Qt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ef(e) {
  var t = io(e);
  return function(n, r, i, o) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, i, o) || "";
    return s;
  };
}
function Af(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Rf = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = at(), i === 38 && o === 12 && (n[r] = 1), !On(o); )
    Ke();
  return In(t, ze);
}, Of = function(t, n) {
  var r = -1, i = 44;
  do
    switch (On(i)) {
      case 0:
        i === 38 && at() === 12 && (n[r] = 1), t[r] += Rf(ze - 1, n, r);
        break;
      case 2:
        t[r] += lr(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = at() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Or(i);
    }
  while (i = Ke());
  return t;
}, Mf = function(t, n) {
  return vc(Of(yc(t), n));
}, ss = /* @__PURE__ */ new WeakMap(), _f = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ss.get(r)) && !i) {
      ss.set(t, !0);
      for (var o = [], s = Mf(n, o), a = r.props, c = 0, l = 0; c < s.length; c++)
        for (var u = 0; u < a.length; u++, l++)
          t.props[l] = o[c] ? s[c].replace(/&\f/g, a[u]) : a[u] + " " + s[c];
    }
  }
}, kf = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function bc(e, t) {
  switch (pf(e, t)) {
    case 5103:
      return ie + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ie + e + gr + e + De + e + e;
    case 6828:
    case 4268:
      return ie + e + De + e + e;
    case 6165:
      return ie + e + De + "flex-" + e + e;
    case 5187:
      return ie + e + oe(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + De + "flex-$1$2") + e;
    case 5443:
      return ie + e + De + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return ie + e + De + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ie + e + De + oe(e, "shrink", "negative") + e;
    case 5292:
      return ie + e + De + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return ie + "box-" + oe(e, "-grow", "") + ie + e + De + oe(e, "grow", "positive") + e;
    case 4554:
      return ie + oe(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, ie + "$1$`$1");
    case 4968:
      return oe(oe(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + De + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (it(e) - 1 - t > 6) switch ($e(e, t + 1)) {
        case 109:
          if ($e(e, t + 4) !== 45) break;
        case 102:
          return oe(e, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + gr + ($e(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Oi(e, "stretch") ? bc(oe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if ($e(e, t + 1) !== 115) break;
    case 6444:
      switch ($e(e, it(e) - 3 - (~Oi(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + ie) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ie + ($e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + De + "$2box$3") + e;
      }
      break;
    case 5936:
      switch ($e(e, t + 11)) {
        case 114:
          return ie + e + De + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ie + e + De + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ie + e + De + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ie + e + De + e + e;
  }
  return e;
}
var $f = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ro:
      t.return = bc(t.value, t.length);
      break;
    case pc:
      return Qt([gn(t, {
        value: oe(t.value, "@", "@" + ie)
      })], i);
    case no:
      if (t.length) return gf(t.props, function(o) {
        switch (mf(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Qt([gn(t, {
              props: [oe(o, /:(read-\w+)/, ":" + gr + "$1")]
            })], i);
          case "::placeholder":
            return Qt([gn(t, {
              props: [oe(o, /:(plac\w+)/, ":" + ie + "input-$1")]
            }), gn(t, {
              props: [oe(o, /:(plac\w+)/, ":" + gr + "$1")]
            }), gn(t, {
              props: [oe(o, /:(plac\w+)/, De + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Vf = [$f], Df = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var y = v.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Vf, o = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var y = v.getAttribute("data-emotion").split(" "), S = 1; S < y.length; S++)
        o[y[S]] = !0;
      a.push(v);
    }
  );
  var c, l = [_f, kf];
  {
    var u, f = [Pf, Af(function(v) {
      u.insert(v);
    })], d = Ef(l.concat(i, f)), g = function(y) {
      return Qt(Cf(y), d);
    };
    c = function(y, S, w, x) {
      u = w, g(y ? y + "{" + S.styles + "}" : S.styles), x && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new lf({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: c
  };
  return b.sheet.hydrate(a), b;
}, _i = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as;
function If() {
  if (as) return ae;
  as = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(p) {
    if (typeof p == "object" && p !== null) {
      var M = p.$$typeof;
      switch (M) {
        case t:
          switch (p = p.type, p) {
            case c:
            case l:
            case r:
            case o:
            case i:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case u:
                case b:
                case g:
                case s:
                  return p;
                default:
                  return M;
              }
          }
        case n:
          return M;
      }
    }
  }
  function C(p) {
    return x(p) === l;
  }
  return ae.AsyncMode = c, ae.ConcurrentMode = l, ae.ContextConsumer = a, ae.ContextProvider = s, ae.Element = t, ae.ForwardRef = u, ae.Fragment = r, ae.Lazy = b, ae.Memo = g, ae.Portal = n, ae.Profiler = o, ae.StrictMode = i, ae.Suspense = f, ae.isAsyncMode = function(p) {
    return C(p) || x(p) === c;
  }, ae.isConcurrentMode = C, ae.isContextConsumer = function(p) {
    return x(p) === a;
  }, ae.isContextProvider = function(p) {
    return x(p) === s;
  }, ae.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ae.isForwardRef = function(p) {
    return x(p) === u;
  }, ae.isFragment = function(p) {
    return x(p) === r;
  }, ae.isLazy = function(p) {
    return x(p) === b;
  }, ae.isMemo = function(p) {
    return x(p) === g;
  }, ae.isPortal = function(p) {
    return x(p) === n;
  }, ae.isProfiler = function(p) {
    return x(p) === o;
  }, ae.isStrictMode = function(p) {
    return x(p) === i;
  }, ae.isSuspense = function(p) {
    return x(p) === f;
  }, ae.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === l || p === o || p === i || p === f || p === d || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === g || p.$$typeof === s || p.$$typeof === a || p.$$typeof === u || p.$$typeof === y || p.$$typeof === S || p.$$typeof === w || p.$$typeof === v);
  }, ae.typeOf = x, ae;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function jf() {
  return cs || (cs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === r || P === l || P === o || P === i || P === f || P === d || typeof P == "object" && P !== null && (P.$$typeof === b || P.$$typeof === g || P.$$typeof === s || P.$$typeof === a || P.$$typeof === u || P.$$typeof === y || P.$$typeof === S || P.$$typeof === w || P.$$typeof === v);
    }
    function C(P) {
      if (typeof P == "object" && P !== null) {
        var Re = P.$$typeof;
        switch (Re) {
          case t:
            var D = P.type;
            switch (D) {
              case c:
              case l:
              case r:
              case o:
              case i:
              case f:
                return D;
              default:
                var _e = D && D.$$typeof;
                switch (_e) {
                  case a:
                  case u:
                  case b:
                  case g:
                  case s:
                    return _e;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var p = c, M = l, _ = a, V = s, h = t, A = u, I = r, j = b, K = g, Z = n, G = o, J = i, pe = f, be = !1;
    function we(P) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(P) || C(P) === c;
    }
    function R(P) {
      return C(P) === l;
    }
    function k(P) {
      return C(P) === a;
    }
    function L(P) {
      return C(P) === s;
    }
    function Y(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function B(P) {
      return C(P) === u;
    }
    function Q(P) {
      return C(P) === r;
    }
    function W(P) {
      return C(P) === b;
    }
    function U(P) {
      return C(P) === g;
    }
    function H(P) {
      return C(P) === n;
    }
    function ee(P) {
      return C(P) === o;
    }
    function q(P) {
      return C(P) === i;
    }
    function Se(P) {
      return C(P) === f;
    }
    ce.AsyncMode = p, ce.ConcurrentMode = M, ce.ContextConsumer = _, ce.ContextProvider = V, ce.Element = h, ce.ForwardRef = A, ce.Fragment = I, ce.Lazy = j, ce.Memo = K, ce.Portal = Z, ce.Profiler = G, ce.StrictMode = J, ce.Suspense = pe, ce.isAsyncMode = we, ce.isConcurrentMode = R, ce.isContextConsumer = k, ce.isContextProvider = L, ce.isElement = Y, ce.isForwardRef = B, ce.isFragment = Q, ce.isLazy = W, ce.isMemo = U, ce.isPortal = H, ce.isProfiler = ee, ce.isStrictMode = q, ce.isSuspense = Se, ce.isValidElementType = x, ce.typeOf = C;
  }()), ce;
}
process.env.NODE_ENV === "production" ? _i.exports = If() : _i.exports = jf();
var Bf = _i.exports, xc = Bf, Nf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ff = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sc = {};
Sc[xc.ForwardRef] = Nf;
Sc[xc.Memo] = Ff;
var Lf = !0;
function Wf(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " ";
  }), r;
}
var Tc = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Lf === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Uf = function(t, n, r) {
  Tc(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function zf(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Yf = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Kf = !1, Gf = /[A-Z]|^ms/g, Hf = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Cc = function(t) {
  return t.charCodeAt(1) === 45;
}, ls = function(t) {
  return t != null && typeof t != "boolean";
}, ri = /* @__PURE__ */ dc(function(e) {
  return Cc(e) ? e : e.replace(Gf, "-$&").toLowerCase();
}), us = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Hf, function(r, i, o) {
          return ot = {
            name: i,
            styles: o,
            next: ot
          }, i;
        });
  }
  return Yf[t] !== 1 && !Cc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, qf = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mn(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return ot = {
          name: i.name,
          styles: i.styles,
          next: ot
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ot = {
              name: s.name,
              styles: s.styles,
              next: ot
            }, s = s.next;
        var a = o.styles + ";";
        return a;
      }
      return Xf(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = ot, l = n(e);
        return ot = c, Mn(e, t, l);
      }
      break;
    }
  }
  var u = n;
  if (t == null)
    return u;
  var f = t[u];
  return f !== void 0 ? f : u;
}
function Xf(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Mn(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += o + "{" + t[a] + "}" : ls(a) && (r += ri(o) + ":" + us(o, a) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && Kf)
          throw new Error(qf);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            ls(s[c]) && (r += ri(o) + ":" + us(o, s[c]) + ";");
        else {
          var l = Mn(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += ri(o) + ":" + l + ";";
              break;
            }
            default:
              r += o + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var fs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ot;
function wc(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  ot = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += Mn(n, t, o);
  else {
    var s = o;
    i += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (i += Mn(n, t, e[a]), r) {
      var c = o;
      i += c[a];
    }
  fs.lastIndex = 0;
  for (var l = "", u; (u = fs.exec(i)) !== null; )
    l += "-" + u[1];
  var f = zf(i) + l;
  return {
    name: f,
    styles: i,
    next: ot
  };
}
var Zf = function(t) {
  return t();
}, Jf = F.useInsertionEffect ? F.useInsertionEffect : !1, Qf = Jf || Zf, Pc = /* @__PURE__ */ F.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Df({
    key: "css"
  }) : null
);
Pc.Provider;
var ed = function(t) {
  return /* @__PURE__ */ cc(function(n, r) {
    var i = Ne(Pc);
    return t(n, i, r);
  });
}, Ec = /* @__PURE__ */ F.createContext({});
function oo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return wc(t);
}
var jn = function() {
  var t = oo.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, td = of, nd = function(t) {
  return t !== "theme";
}, ds = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? td : nd;
}, hs = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(s) {
      return t.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, rd = !1, id = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Tc(n, r, i), Qf(function() {
    return Uf(n, r, i);
  }), null;
}, od = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, s;
  n !== void 0 && (o = n.label, s = n.target);
  var a = hs(t, n, r), c = a || ds(i), l = !c("as");
  return function() {
    var u = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0)
      f.push.apply(f, u);
    else {
      f.push(u[0][0]);
      for (var d = u.length, g = 1; g < d; g++)
        f.push(u[g], u[0][g]);
    }
    var b = ed(function(v, y, S) {
      var w = l && v.as || i, x = "", C = [], p = v;
      if (v.theme == null) {
        p = {};
        for (var M in v)
          p[M] = v[M];
        p.theme = F.useContext(Ec);
      }
      typeof v.className == "string" ? x = Wf(y.registered, C, v.className) : v.className != null && (x = v.className + " ");
      var _ = wc(f.concat(C), y.registered, p);
      x += y.key + "-" + _.name, s !== void 0 && (x += " " + s);
      var V = l && a === void 0 ? ds(w) : c, h = {};
      for (var A in v)
        l && A === "as" || V(A) && (h[A] = v[A]);
      return h.className = x, S && (h.ref = S), /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(id, {
        cache: y,
        serialized: _,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ F.createElement(w, h));
    });
    return b.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = i, b.__emotion_styles = f, b.__emotion_forwardProp = a, Object.defineProperty(b, "toString", {
      value: function() {
        return s === void 0 && rd ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), b.withComponent = function(v, y) {
      return e(v, mr({}, n, y, {
        shouldForwardProp: hs(b, y, !0)
      })).apply(void 0, f);
    }, b;
  };
}, sd = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ki = od.bind();
sd.forEach(function(e) {
  ki[e] = ki(e);
});
var $i = { exports: {} }, Zn = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function ad() {
  if (ps) return le;
  ps = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(p) {
    if (typeof p == "object" && p !== null) {
      var M = p.$$typeof;
      switch (M) {
        case t:
          switch (p = p.type, p) {
            case c:
            case l:
            case r:
            case o:
            case i:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case u:
                case b:
                case g:
                case s:
                  return p;
                default:
                  return M;
              }
          }
        case n:
          return M;
      }
    }
  }
  function C(p) {
    return x(p) === l;
  }
  return le.AsyncMode = c, le.ConcurrentMode = l, le.ContextConsumer = a, le.ContextProvider = s, le.Element = t, le.ForwardRef = u, le.Fragment = r, le.Lazy = b, le.Memo = g, le.Portal = n, le.Profiler = o, le.StrictMode = i, le.Suspense = f, le.isAsyncMode = function(p) {
    return C(p) || x(p) === c;
  }, le.isConcurrentMode = C, le.isContextConsumer = function(p) {
    return x(p) === a;
  }, le.isContextProvider = function(p) {
    return x(p) === s;
  }, le.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, le.isForwardRef = function(p) {
    return x(p) === u;
  }, le.isFragment = function(p) {
    return x(p) === r;
  }, le.isLazy = function(p) {
    return x(p) === b;
  }, le.isMemo = function(p) {
    return x(p) === g;
  }, le.isPortal = function(p) {
    return x(p) === n;
  }, le.isProfiler = function(p) {
    return x(p) === o;
  }, le.isStrictMode = function(p) {
    return x(p) === i;
  }, le.isSuspense = function(p) {
    return x(p) === f;
  }, le.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === l || p === o || p === i || p === f || p === d || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === g || p.$$typeof === s || p.$$typeof === a || p.$$typeof === u || p.$$typeof === y || p.$$typeof === S || p.$$typeof === w || p.$$typeof === v);
  }, le.typeOf = x, le;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function cd() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === r || P === l || P === o || P === i || P === f || P === d || typeof P == "object" && P !== null && (P.$$typeof === b || P.$$typeof === g || P.$$typeof === s || P.$$typeof === a || P.$$typeof === u || P.$$typeof === y || P.$$typeof === S || P.$$typeof === w || P.$$typeof === v);
    }
    function C(P) {
      if (typeof P == "object" && P !== null) {
        var Re = P.$$typeof;
        switch (Re) {
          case t:
            var D = P.type;
            switch (D) {
              case c:
              case l:
              case r:
              case o:
              case i:
              case f:
                return D;
              default:
                var _e = D && D.$$typeof;
                switch (_e) {
                  case a:
                  case u:
                  case b:
                  case g:
                  case s:
                    return _e;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var p = c, M = l, _ = a, V = s, h = t, A = u, I = r, j = b, K = g, Z = n, G = o, J = i, pe = f, be = !1;
    function we(P) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(P) || C(P) === c;
    }
    function R(P) {
      return C(P) === l;
    }
    function k(P) {
      return C(P) === a;
    }
    function L(P) {
      return C(P) === s;
    }
    function Y(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function B(P) {
      return C(P) === u;
    }
    function Q(P) {
      return C(P) === r;
    }
    function W(P) {
      return C(P) === b;
    }
    function U(P) {
      return C(P) === g;
    }
    function H(P) {
      return C(P) === n;
    }
    function ee(P) {
      return C(P) === o;
    }
    function q(P) {
      return C(P) === i;
    }
    function Se(P) {
      return C(P) === f;
    }
    ue.AsyncMode = p, ue.ConcurrentMode = M, ue.ContextConsumer = _, ue.ContextProvider = V, ue.Element = h, ue.ForwardRef = A, ue.Fragment = I, ue.Lazy = j, ue.Memo = K, ue.Portal = Z, ue.Profiler = G, ue.StrictMode = J, ue.Suspense = pe, ue.isAsyncMode = we, ue.isConcurrentMode = R, ue.isContextConsumer = k, ue.isContextProvider = L, ue.isElement = Y, ue.isForwardRef = B, ue.isFragment = Q, ue.isLazy = W, ue.isMemo = U, ue.isPortal = H, ue.isProfiler = ee, ue.isStrictMode = q, ue.isSuspense = Se, ue.isValidElementType = x, ue.typeOf = C;
  }()), ue;
}
var gs;
function Ac() {
  return gs || (gs = 1, process.env.NODE_ENV === "production" ? Zn.exports = ad() : Zn.exports = cd()), Zn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ii, ys;
function ld() {
  if (ys) return ii;
  ys = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ii = i() ? Object.assign : function(o, s) {
    for (var a, c = r(o), l, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var f in a)
        t.call(a, f) && (c[f] = a[f]);
      if (e) {
        l = e(a);
        for (var d = 0; d < l.length; d++)
          n.call(a, l[d]) && (c[l[d]] = a[l[d]]);
      }
    }
    return c;
  }, ii;
}
var oi, vs;
function so() {
  if (vs) return oi;
  vs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return oi = e, oi;
}
var si, bs;
function Rc() {
  return bs || (bs = 1, si = Function.call.bind(Object.prototype.hasOwnProperty)), si;
}
var ai, xs;
function ud() {
  if (xs) return ai;
  xs = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = so(), n = {}, r = Rc();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(o, s, a, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (r(o, u)) {
          var f;
          try {
            if (typeof o[u] != "function") {
              var d = Error(
                (c || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = o[u](s, u, c, a, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var g = l ? l() : "";
            e(
              "Failed " + a + " type: " + f.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ai = i, ai;
}
var ci, Ss;
function fd() {
  if (Ss) return ci;
  Ss = 1;
  var e = Ac(), t = ld(), n = so(), r = Rc(), i = ud(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ci = function(a, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(R) {
      var k = R && (l && R[l] || R[u]);
      if (typeof k == "function")
        return k;
    }
    var d = "<<anonymous>>", g = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: x,
      element: C(),
      elementType: p(),
      instanceOf: M,
      node: A(),
      objectOf: V,
      oneOf: _,
      oneOfType: h,
      shape: j,
      exact: K
    };
    function b(R, k) {
      return R === k ? R !== 0 || 1 / R === 1 / k : R !== R && k !== k;
    }
    function v(R, k) {
      this.message = R, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function y(R) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, L = 0;
      function Y(Q, W, U, H, ee, q, Se) {
        if (H = H || d, q = q || U, Se !== n) {
          if (c) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = H + ":" + U;
            !k[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Re] = !0, L++);
          }
        }
        return W[U] == null ? Q ? W[U] === null ? new v("The " + ee + " `" + q + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new v("The " + ee + " `" + q + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : R(W, U, H, ee, q);
      }
      var B = Y.bind(null, !1);
      return B.isRequired = Y.bind(null, !0), B;
    }
    function S(R) {
      function k(L, Y, B, Q, W, U) {
        var H = L[Y], ee = J(H);
        if (ee !== R) {
          var q = pe(H);
          return new v(
            "Invalid " + Q + " `" + W + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return y(k);
    }
    function w() {
      return y(s);
    }
    function x(R) {
      function k(L, Y, B, Q, W) {
        if (typeof R != "function")
          return new v("Property `" + W + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var U = L[Y];
        if (!Array.isArray(U)) {
          var H = J(U);
          return new v("Invalid " + Q + " `" + W + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected an array."));
        }
        for (var ee = 0; ee < U.length; ee++) {
          var q = R(U, ee, B, Q, W + "[" + ee + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return y(k);
    }
    function C() {
      function R(k, L, Y, B, Q) {
        var W = k[L];
        if (!a(W)) {
          var U = J(W);
          return new v("Invalid " + B + " `" + Q + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(R);
    }
    function p() {
      function R(k, L, Y, B, Q) {
        var W = k[L];
        if (!e.isValidElementType(W)) {
          var U = J(W);
          return new v("Invalid " + B + " `" + Q + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(R);
    }
    function M(R) {
      function k(L, Y, B, Q, W) {
        if (!(L[Y] instanceof R)) {
          var U = R.name || d, H = we(L[Y]);
          return new v("Invalid " + Q + " `" + W + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return y(k);
    }
    function _(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(L, Y, B, Q, W) {
        for (var U = L[Y], H = 0; H < R.length; H++)
          if (b(U, R[H]))
            return null;
        var ee = JSON.stringify(R, function(Se, P) {
          var Re = pe(P);
          return Re === "symbol" ? String(P) : P;
        });
        return new v("Invalid " + Q + " `" + W + "` of value `" + String(U) + "` " + ("supplied to `" + B + "`, expected one of " + ee + "."));
      }
      return y(k);
    }
    function V(R) {
      function k(L, Y, B, Q, W) {
        if (typeof R != "function")
          return new v("Property `" + W + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var U = L[Y], H = J(U);
        if (H !== "object")
          return new v("Invalid " + Q + " `" + W + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected an object."));
        for (var ee in U)
          if (r(U, ee)) {
            var q = R(U, ee, B, Q, W + "." + ee, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return y(k);
    }
    function h(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < R.length; k++) {
        var L = R[k];
        if (typeof L != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(L) + " at index " + k + "."
          ), s;
      }
      function Y(B, Q, W, U, H) {
        for (var ee = [], q = 0; q < R.length; q++) {
          var Se = R[q], P = Se(B, Q, W, U, H, n);
          if (P == null)
            return null;
          P.data && r(P.data, "expectedType") && ee.push(P.data.expectedType);
        }
        var Re = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new v("Invalid " + U + " `" + H + "` supplied to " + ("`" + W + "`" + Re + "."));
      }
      return y(Y);
    }
    function A() {
      function R(k, L, Y, B, Q) {
        return Z(k[L]) ? null : new v("Invalid " + B + " `" + Q + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return y(R);
    }
    function I(R, k, L, Y, B) {
      return new v(
        (R || "React class") + ": " + k + " type `" + L + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function j(R) {
      function k(L, Y, B, Q, W) {
        var U = L[Y], H = J(U);
        if (H !== "object")
          return new v("Invalid " + Q + " `" + W + "` of type `" + H + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var ee in R) {
          var q = R[ee];
          if (typeof q != "function")
            return I(B, Q, W, ee, pe(q));
          var Se = q(U, ee, B, Q, W + "." + ee, n);
          if (Se)
            return Se;
        }
        return null;
      }
      return y(k);
    }
    function K(R) {
      function k(L, Y, B, Q, W) {
        var U = L[Y], H = J(U);
        if (H !== "object")
          return new v("Invalid " + Q + " `" + W + "` of type `" + H + "` " + ("supplied to `" + B + "`, expected `object`."));
        var ee = t({}, L[Y], R);
        for (var q in ee) {
          var Se = R[q];
          if (r(R, q) && typeof Se != "function")
            return I(B, Q, W, q, pe(Se));
          if (!Se)
            return new v(
              "Invalid " + Q + " `" + W + "` key `" + q + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(L[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var P = Se(U, q, B, Q, W + "." + q, n);
          if (P)
            return P;
        }
        return null;
      }
      return y(k);
    }
    function Z(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(Z);
          if (R === null || a(R))
            return !0;
          var k = f(R);
          if (k) {
            var L = k.call(R), Y;
            if (k !== R.entries) {
              for (; !(Y = L.next()).done; )
                if (!Z(Y.value))
                  return !1;
            } else
              for (; !(Y = L.next()).done; ) {
                var B = Y.value;
                if (B && !Z(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(R, k) {
      return R === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function J(R) {
      var k = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : G(k, R) ? "symbol" : k;
    }
    function pe(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var k = J(R);
      if (k === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function be(R) {
      var k = pe(R);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function we(R) {
      return !R.constructor || !R.constructor.name ? d : R.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, ci;
}
var li, Ts;
function dd() {
  if (Ts) return li;
  Ts = 1;
  var e = so();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, li = function() {
    function r(s, a, c, l, u, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, li;
}
if (process.env.NODE_ENV !== "production") {
  var hd = Ac(), pd = !0;
  $i.exports = fd()(hd.isElement, pd);
} else
  $i.exports = dd()();
var md = $i.exports;
const T = /* @__PURE__ */ Qu(md);
/**
 * @mui/styled-engine v6.0.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Oc(e, t) {
  const n = ki(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const gd = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function st(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Mc(e) {
  if (!st(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Mc(e[n]);
  }), t;
}
function Ge(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return st(e) && st(t) && Object.keys(t).forEach((i) => {
    st(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && st(e[i]) ? r[i] = Ge(e[i], t[i], n) : n.clone ? r[i] = st(t[i]) ? Mc(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const yd = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function vd(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5,
    ...i
  } = e, o = yd(t), s = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function c(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function l(d, g) {
    const b = s.indexOf(g);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : g) - r / 100}${n})`;
  }
  function u(d) {
    return s.indexOf(d) + 1 < s.length ? l(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const g = s.indexOf(d);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? c(s[g]) : l(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: o,
    up: a,
    down: c,
    between: l,
    only: u,
    not: f,
    unit: n,
    ...i
  };
}
function bd(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var s, a;
    const o = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(o)) == null ? void 0 : s[1]) || 0) - +(((a = i.match(o)) == null ? void 0 : a[1]) || 0);
  });
  return n.length ? n.reduce((r, i) => {
    const o = t[i];
    return delete r[i], r[i] = o, r;
  }, {
    ...t
  }) : t;
}
function xd(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Sd(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : xt(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(o);
}
function Td(e) {
  const t = (o, s) => o.replace("@media", s ? `@container ${s}` : "@container");
  function n(o, s) {
    o.up = (...a) => t(e.breakpoints.up(...a), s), o.down = (...a) => t(e.breakpoints.down(...a), s), o.between = (...a) => t(e.breakpoints.between(...a), s), o.only = (...a) => t(e.breakpoints.only(...a), s), o.not = (...a) => {
      const c = t(e.breakpoints.not(...a), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const r = {}, i = (o) => (n(r, o), r);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const Cd = {
  borderRadius: 4
}, Pt = process.env.NODE_ENV !== "production" ? T.oneOfType([T.number, T.string, T.object, T.array]) : {};
function Tn(e, t) {
  return t ? Ge(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const kr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Cs = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${kr[e]}px)`
}, wd = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : kr[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function yt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Cs;
    return t.reduce((s, a, c) => (s[o.up(o.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Cs;
    return Object.keys(t).reduce((s, a) => {
      if (xd(o.keys, a)) {
        const c = Sd(r.containerQueries ? r : wd, a);
        c && (s[c] = n(t[a], a));
      } else if (Object.keys(o.values || kr).includes(a)) {
        const c = o.up(a);
        s[c] = n(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function Pd(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function Ed(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function We(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : xt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $r(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function yr(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = $r(e, n) || r, t && (i = t(i, r, e)), i;
}
function Ae(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, l = $r(c, r) || {};
    return yt(s, a, (f) => {
      let d = yr(l, i, f);
      return f === d && typeof f == "string" && (d = yr(l, i, `${t}${f === "default" ? "" : We(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Pt
  } : {}, o.filterProps = [t], o;
}
function Ad(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Rd = {
  m: "margin",
  p: "padding"
}, Od = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ws = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Md = Ad((e) => {
  if (e.length > 2)
    if (ws[e])
      e = ws[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Rd[t], i = Od[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), Vr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Dr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], _d = [...Vr, ...Dr];
function Bn(e, t, n, r) {
  const i = $r(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${o}.`), typeof i == "string" ? `calc(${o} * ${i})` : i * o) : Array.isArray(i) ? (o) => {
    if (typeof o == "string")
      return o;
    const s = Math.abs(o);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = i[s];
    return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ao(e) {
  return Bn(e, "spacing", 8, "spacing");
}
function Nn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function kd(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Nn(t, n), r), {});
}
function $d(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = Md(n), o = kd(i, r), s = e[n];
  return yt(e, s, o);
}
function _c(e, t) {
  const n = ao(e.theme);
  return Object.keys(e).map((r) => $d(e, t, r, n)).reduce(Tn, {});
}
function Te(e) {
  return _c(e, Vr);
}
Te.propTypes = process.env.NODE_ENV !== "production" ? Vr.reduce((e, t) => (e[t] = Pt, e), {}) : {};
Te.filterProps = Vr;
function Ce(e) {
  return _c(e, Dr);
}
Ce.propTypes = process.env.NODE_ENV !== "production" ? Dr.reduce((e, t) => (e[t] = Pt, e), {}) : {};
Ce.filterProps = Dr;
process.env.NODE_ENV !== "production" && _d.reduce((e, t) => (e[t] = Pt, e), {});
function kc(e = 8, t = ao({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((o) => {
    const s = t(o);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Ir(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? Tn(i, t[o](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function et(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function tt(e, t) {
  return Ae({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Vd = tt("border", et), Dd = tt("borderTop", et), Id = tt("borderRight", et), jd = tt("borderBottom", et), Bd = tt("borderLeft", et), Nd = tt("borderColor"), Fd = tt("borderTopColor"), Ld = tt("borderRightColor"), Wd = tt("borderBottomColor"), Ud = tt("borderLeftColor"), zd = tt("outline", et), Yd = tt("outlineColor"), jr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Bn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Nn(t, r)
    });
    return yt(e, e.borderRadius, n);
  }
  return null;
};
jr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Pt
} : {};
jr.filterProps = ["borderRadius"];
Ir(Vd, Dd, Id, jd, Bd, Nd, Fd, Ld, Wd, Ud, jr, zd, Yd);
const Br = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Bn(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Nn(t, r)
    });
    return yt(e, e.gap, n);
  }
  return null;
};
Br.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Pt
} : {};
Br.filterProps = ["gap"];
const Nr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Bn(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Nn(t, r)
    });
    return yt(e, e.columnGap, n);
  }
  return null;
};
Nr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Pt
} : {};
Nr.filterProps = ["columnGap"];
const Fr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Bn(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Nn(t, r)
    });
    return yt(e, e.rowGap, n);
  }
  return null;
};
Fr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Pt
} : {};
Fr.filterProps = ["rowGap"];
const Kd = Ae({
  prop: "gridColumn"
}), Gd = Ae({
  prop: "gridRow"
}), Hd = Ae({
  prop: "gridAutoFlow"
}), qd = Ae({
  prop: "gridAutoColumns"
}), Xd = Ae({
  prop: "gridAutoRows"
}), Zd = Ae({
  prop: "gridTemplateColumns"
}), Jd = Ae({
  prop: "gridTemplateRows"
}), Qd = Ae({
  prop: "gridTemplateAreas"
}), eh = Ae({
  prop: "gridArea"
});
Ir(Br, Nr, Fr, Kd, Gd, Hd, qd, Xd, Zd, Jd, Qd, eh);
function en(e, t) {
  return t === "grey" ? t : e;
}
const th = Ae({
  prop: "color",
  themeKey: "palette",
  transform: en
}), nh = Ae({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: en
}), rh = Ae({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: en
});
Ir(th, nh, rh);
function Ye(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ih = Ae({
  prop: "width",
  transform: Ye
}), co = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, o, s, a, c;
      const r = ((s = (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : o.values) == null ? void 0 : s[n]) || kr[n];
      return r ? ((c = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Ye(n)
      };
    };
    return yt(e, e.maxWidth, t);
  }
  return null;
};
co.filterProps = ["maxWidth"];
const oh = Ae({
  prop: "minWidth",
  transform: Ye
}), sh = Ae({
  prop: "height",
  transform: Ye
}), ah = Ae({
  prop: "maxHeight",
  transform: Ye
}), ch = Ae({
  prop: "minHeight",
  transform: Ye
});
Ae({
  prop: "size",
  cssProperty: "width",
  transform: Ye
});
Ae({
  prop: "size",
  cssProperty: "height",
  transform: Ye
});
const lh = Ae({
  prop: "boxSizing"
});
Ir(ih, co, oh, sh, ah, ch, lh);
const Fn = {
  // borders
  border: {
    themeKey: "borders",
    transform: et
  },
  borderTop: {
    themeKey: "borders",
    transform: et
  },
  borderRight: {
    themeKey: "borders",
    transform: et
  },
  borderBottom: {
    themeKey: "borders",
    transform: et
  },
  borderLeft: {
    themeKey: "borders",
    transform: et
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: et
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: jr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: en
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: en
  },
  backgroundColor: {
    themeKey: "palette",
    transform: en
  },
  // spacing
  p: {
    style: Ce
  },
  pt: {
    style: Ce
  },
  pr: {
    style: Ce
  },
  pb: {
    style: Ce
  },
  pl: {
    style: Ce
  },
  px: {
    style: Ce
  },
  py: {
    style: Ce
  },
  padding: {
    style: Ce
  },
  paddingTop: {
    style: Ce
  },
  paddingRight: {
    style: Ce
  },
  paddingBottom: {
    style: Ce
  },
  paddingLeft: {
    style: Ce
  },
  paddingX: {
    style: Ce
  },
  paddingY: {
    style: Ce
  },
  paddingInline: {
    style: Ce
  },
  paddingInlineStart: {
    style: Ce
  },
  paddingInlineEnd: {
    style: Ce
  },
  paddingBlock: {
    style: Ce
  },
  paddingBlockStart: {
    style: Ce
  },
  paddingBlockEnd: {
    style: Ce
  },
  m: {
    style: Te
  },
  mt: {
    style: Te
  },
  mr: {
    style: Te
  },
  mb: {
    style: Te
  },
  ml: {
    style: Te
  },
  mx: {
    style: Te
  },
  my: {
    style: Te
  },
  margin: {
    style: Te
  },
  marginTop: {
    style: Te
  },
  marginRight: {
    style: Te
  },
  marginBottom: {
    style: Te
  },
  marginLeft: {
    style: Te
  },
  marginX: {
    style: Te
  },
  marginY: {
    style: Te
  },
  marginInline: {
    style: Te
  },
  marginInlineStart: {
    style: Te
  },
  marginInlineEnd: {
    style: Te
  },
  marginBlock: {
    style: Te
  },
  marginBlockStart: {
    style: Te
  },
  marginBlockEnd: {
    style: Te
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Br
  },
  rowGap: {
    style: Fr
  },
  columnGap: {
    style: Nr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ye
  },
  maxWidth: {
    style: co
  },
  minWidth: {
    transform: Ye
  },
  height: {
    transform: Ye
  },
  maxHeight: {
    transform: Ye
  },
  minHeight: {
    transform: Ye
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function uh(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function fh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dh() {
  function e(n, r, i, o) {
    const s = {
      [n]: r,
      theme: i
    }, a = o[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: l,
      transform: u,
      style: f
    } = a;
    if (r == null)
      return null;
    if (l === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = $r(i, l) || {};
    return f ? f(s) : yt(s, r, (b) => {
      let v = yr(d, u, b);
      return b === v && typeof b == "string" && (v = yr(d, u, `${n}${b === "default" ? "" : We(b)}`, b)), c === !1 ? v : {
        [c]: v
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: i = {}
    } = n || {};
    if (!r)
      return null;
    const o = i.unstable_sxConfig ?? Fn;
    function s(a) {
      let c = a;
      if (typeof a == "function")
        c = a(i);
      else if (typeof a != "object")
        return a;
      if (!c)
        return null;
      const l = Pd(i.breakpoints), u = Object.keys(l);
      let f = l;
      return Object.keys(c).forEach((d) => {
        const g = fh(c[d], i);
        if (g != null)
          if (typeof g == "object")
            if (o[d])
              f = Tn(f, e(d, g, i, o));
            else {
              const b = yt({
                theme: i
              }, g, (v) => ({
                [d]: v
              }));
              uh(b, g) ? f[d] = t({
                sx: g,
                theme: i
              }) : f = Tn(f, b);
            }
          else
            f = Tn(f, e(d, g, i, o));
      }), bd(i, Ed(u, f));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const an = dh();
an.filterProps = ["sx"];
function hh(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return (i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    };
  }
  return n.palette.mode === e ? t : {};
}
function lo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {},
    ...s
  } = e, a = vd(n), c = kc(i);
  let l = Ge({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: c,
    shape: {
      ...Cd,
      ...o
    }
  }, s);
  return l = Td(l), l.applyStyles = hh, l = t.reduce((u, f) => Ge(u, f), l), l.unstable_sxConfig = {
    ...Fn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, l.unstable_sx = function(f) {
    return an({
      sx: f,
      theme: this
    });
  }, l;
}
function ph(e) {
  return Object.keys(e).length === 0;
}
function mh(e = null) {
  const t = F.useContext(Ec);
  return !t || ph(t) ? e : t;
}
const gh = lo();
function yh(e = gh) {
  return mh(e);
}
const vh = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Fn;
  return Object.keys(e).forEach((i) => {
    n[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function bh(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: i
  } = vh(n);
  let o;
  return Array.isArray(t) ? o = [r, ...t] : typeof t == "function" ? o = (...s) => {
    const a = t(...s);
    return st(a) ? {
      ...r,
      ...a
    } : r;
  } : o = {
    ...r,
    ...t
  }, {
    ...i,
    sx: o
  };
}
const Ps = (e) => e, xh = () => {
  let e = Ps;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ps;
    }
  };
}, $c = xh();
function Vc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Vc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Le() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Vc(e)) && (r && (r += " "), r += t);
  return r;
}
function Sh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, o = Oc("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(an);
  return /* @__PURE__ */ F.forwardRef(function(c, l) {
    const u = yh(n), {
      className: f,
      component: d = "div",
      ...g
    } = bh(c);
    return /* @__PURE__ */ te.jsx(o, {
      as: d,
      ref: l,
      className: Le(f, i ? i(r) : r),
      theme: t && u[t] || u,
      ...g
    });
  });
}
const Th = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ln(e, t, n = "Mui") {
  const r = Th[t];
  return r ? `${n}-${r}` : `${$c.generate(e)}-${t}`;
}
function Wn(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Ln(e, i, n);
  }), r;
}
var Vi = { exports: {} }, fe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Es;
function Ch() {
  if (Es) return fe;
  Es = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function v(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case e:
          switch (y = y.type, y) {
            case n:
            case i:
            case r:
            case l:
            case u:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case s:
                case c:
                case d:
                case f:
                case o:
                  return y;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return fe.ContextConsumer = s, fe.ContextProvider = o, fe.Element = e, fe.ForwardRef = c, fe.Fragment = n, fe.Lazy = d, fe.Memo = f, fe.Portal = t, fe.Profiler = i, fe.StrictMode = r, fe.Suspense = l, fe.SuspenseList = u, fe.isAsyncMode = function() {
    return !1;
  }, fe.isConcurrentMode = function() {
    return !1;
  }, fe.isContextConsumer = function(y) {
    return v(y) === s;
  }, fe.isContextProvider = function(y) {
    return v(y) === o;
  }, fe.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, fe.isForwardRef = function(y) {
    return v(y) === c;
  }, fe.isFragment = function(y) {
    return v(y) === n;
  }, fe.isLazy = function(y) {
    return v(y) === d;
  }, fe.isMemo = function(y) {
    return v(y) === f;
  }, fe.isPortal = function(y) {
    return v(y) === t;
  }, fe.isProfiler = function(y) {
    return v(y) === i;
  }, fe.isStrictMode = function(y) {
    return v(y) === r;
  }, fe.isSuspense = function(y) {
    return v(y) === l;
  }, fe.isSuspenseList = function(y) {
    return v(y) === u;
  }, fe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === i || y === r || y === l || y === u || y === g || typeof y == "object" && y !== null && (y.$$typeof === d || y.$$typeof === f || y.$$typeof === o || y.$$typeof === s || y.$$typeof === c || y.$$typeof === b || y.getModuleId !== void 0);
  }, fe.typeOf = v, fe;
}
var de = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function wh() {
  return As || (As = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = !1, v = !1, y = !1, S = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function C(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === i || w || D === r || D === l || D === u || S || D === g || b || v || y || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === f || D.$$typeof === o || D.$$typeof === s || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === x || D.getModuleId !== void 0));
    }
    function p(D) {
      if (typeof D == "object" && D !== null) {
        var _e = D.$$typeof;
        switch (_e) {
          case e:
            var qe = D.type;
            switch (qe) {
              case n:
              case i:
              case r:
              case l:
              case u:
                return qe;
              default:
                var Rt = qe && qe.$$typeof;
                switch (Rt) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case f:
                  case o:
                    return Rt;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var M = s, _ = o, V = e, h = c, A = n, I = d, j = f, K = t, Z = i, G = r, J = l, pe = u, be = !1, we = !1;
    function R(D) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(D) {
      return we || (we = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(D) {
      return p(D) === s;
    }
    function Y(D) {
      return p(D) === o;
    }
    function B(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function Q(D) {
      return p(D) === c;
    }
    function W(D) {
      return p(D) === n;
    }
    function U(D) {
      return p(D) === d;
    }
    function H(D) {
      return p(D) === f;
    }
    function ee(D) {
      return p(D) === t;
    }
    function q(D) {
      return p(D) === i;
    }
    function Se(D) {
      return p(D) === r;
    }
    function P(D) {
      return p(D) === l;
    }
    function Re(D) {
      return p(D) === u;
    }
    de.ContextConsumer = M, de.ContextProvider = _, de.Element = V, de.ForwardRef = h, de.Fragment = A, de.Lazy = I, de.Memo = j, de.Portal = K, de.Profiler = Z, de.StrictMode = G, de.Suspense = J, de.SuspenseList = pe, de.isAsyncMode = R, de.isConcurrentMode = k, de.isContextConsumer = L, de.isContextProvider = Y, de.isElement = B, de.isForwardRef = Q, de.isFragment = W, de.isLazy = U, de.isMemo = H, de.isPortal = ee, de.isProfiler = q, de.isStrictMode = Se, de.isSuspense = P, de.isSuspenseList = Re, de.isValidElementType = C, de.typeOf = p;
  }()), de;
}
process.env.NODE_ENV === "production" ? Vi.exports = Ch() : Vi.exports = wh();
var Rs = Vi.exports;
function Dc(e, t = "") {
  return e.displayName || e.name || t;
}
function Os(e, t, n) {
  const r = Dc(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Ph(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Dc(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Rs.ForwardRef:
          return Os(e, e.render, "ForwardRef");
        case Rs.Memo:
          return Os(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Eh = lo();
function ui(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Di(e, t, n) {
  return Oh(t) ? n : t[e] || t;
}
const Jn = Symbol("mui.processed_props");
function Qn(e, t, n) {
  if (Jn in e)
    return e[Jn];
  const r = {
    ...e,
    theme: Di(t, e.theme, n)
  };
  return e[Jn] = r, r[Jn] = r, r;
}
function Ah(e) {
  return e ? (t, n) => n[e] : null;
}
function fr(e, t) {
  var r;
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n))
    return n.flatMap((i) => fr(i, t));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    const {
      variants: i,
      ...o
    } = n;
    let s = o, a;
    e: for (let c = 0; c < i.length; c += 1) {
      const l = i[c];
      if (typeof l.props == "function") {
        if (a ?? (a = {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }), !l.props(a))
          continue;
      } else
        for (const u in l.props)
          if (t[u] !== l.props[u] && ((r = t.ownerState) == null ? void 0 : r[u]) !== l.props[u])
            continue e;
      Array.isArray(s) || (s = [s]), typeof l.style == "function" ? (a ?? (a = {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }), s.push(l.style(a))) : s.push(l.style);
    }
    return s;
  }
  return n;
}
function Rh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Eh,
    rootShouldForwardProp: r = ui,
    slotShouldForwardProp: i = ui
  } = e, o = (a) => an(Qn(a, t, n));
  return o.__mui_systemSx = !0, (a, c = {}) => {
    gd(a, (M) => M.filter((_) => !(_ != null && _.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: f,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = Ah(Ms(u)),
      ...b
    } = c, v = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = d || !1;
    let S;
    process.env.NODE_ENV !== "production" && l && (S = `${l}-${Ms(u || "Root")}`);
    let w = ui;
    u === "Root" || u === "root" ? w = r : u ? w = i : Mh(a) && (w = void 0);
    const x = Oc(a, {
      shouldForwardProp: w,
      label: S,
      ...b
    }), C = (M) => typeof M == "function" && M.__emotion_real !== M || st(M) ? (_) => fr(M, Qn(_, t, n)) : M, p = (M, ..._) => {
      let V = C(M);
      const h = _ ? _.map(C) : [];
      l && g && h.push((j) => {
        const K = Di(t, j.theme, n);
        if (!K.components || !K.components[l] || !K.components[l].styleOverrides)
          return null;
        const Z = K.components[l].styleOverrides, G = {}, J = Qn(j, t, n);
        for (const pe in Z)
          G[pe] = fr(Z[pe], J);
        return g(j, G);
      }), l && !v && h.push((j) => {
        var G, J;
        const K = Di(t, j.theme, n), Z = (J = (G = K == null ? void 0 : K.components) == null ? void 0 : G[l]) == null ? void 0 : J.variants;
        return Z ? fr({
          variants: Z
        }, Qn(j, t, n)) : null;
      }), y || h.push(o);
      const A = h.length - _.length;
      if (Array.isArray(M) && A > 0) {
        const j = new Array(A).fill("");
        V = [...M, ...j], V.raw = [...M.raw, ...j];
      }
      const I = x(V, ...h);
      if (process.env.NODE_ENV !== "production") {
        let j;
        l && (j = `${l}${We(u || "")}`), j === void 0 && (j = `Styled(${Ph(a)})`), I.displayName = j;
      }
      return a.muiName && (I.muiName = a.muiName), I;
    };
    return x.withConfig && (p.withConfig = x.withConfig), p;
  };
}
function Oh(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Mh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ms(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function vr(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const o = e[i], s = t[i];
        if (!s)
          n[i] = o || {};
        else if (!o)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const a in o)
            if (Object.prototype.hasOwnProperty.call(o, a)) {
              const c = a;
              n[i][c] = vr(o[c], s[c]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const _h = typeof window < "u" ? F.useLayoutEffect : F.useEffect;
function kh(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function uo(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), kh(e, t, n);
}
function $h(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function St(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return St($h(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : xt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : xt(10, i));
  } else
    r = r.split(",");
  return r = r.map((o) => parseFloat(o)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Vh = (e) => {
  const t = St(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, vn = (e, t) => {
  try {
    return Vh(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Lr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ic(e) {
  e = St(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, o = r * Math.min(i, 1 - i), s = (l, u = (l + n / 30) % 12) => i - o * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), Lr({
    type: a,
    values: c
  });
}
function Ii(e) {
  e = St(e);
  let t = e.type === "hsl" || e.type === "hsla" ? St(Ic(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function _s(e, t) {
  const n = Ii(e), r = Ii(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Vt(e, t) {
  return e = St(e), t = uo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Lr(e);
}
function er(e, t, n) {
  try {
    return Vt(e, t);
  } catch {
    return e;
  }
}
function fo(e, t) {
  if (e = St(e), t = uo(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Lr(e);
}
function ge(e, t, n) {
  try {
    return fo(e, t);
  } catch {
    return e;
  }
}
function ho(e, t) {
  if (e = St(e), t = uo(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Lr(e);
}
function ye(e, t, n) {
  try {
    return ho(e, t);
  } catch {
    return e;
  }
}
function Dh(e, t = 0.15) {
  return Ii(e) > 0.5 ? fo(e, t) : ho(e, t);
}
function tr(e, t, n) {
  try {
    return Dh(e, t);
  } catch {
    return e;
  }
}
function Ih(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function jh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Bh(e, t, n, r, i) {
  const o = e[t], s = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof o == "function" && !jh(o) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Nh = Ih(T.elementType, Bh), Fh = T.oneOfType([T.func, T.object]);
function Lh(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function nr(e) {
  const t = F.useRef(e);
  return _h(() => {
    t.current = e;
  }), F.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ks(...e) {
  return F.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Lh(n, t);
    });
  }, e);
}
const $s = {};
function jc(e, t) {
  const n = F.useRef($s);
  return n.current === $s && (n.current = e(t)), n;
}
const Wh = [];
function Uh(e) {
  F.useEffect(e, Wh);
}
class po {
  constructor() {
    dn(this, "currentId", null);
    dn(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    dn(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new po();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function zh() {
  const e = jc(po.create).current;
  return Uh(e.disposeEffect), e;
}
function Vs(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function mo(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const o = e[i];
    let s = "";
    for (let a = 0; a < o.length; a += 1) {
      const c = o[a];
      c && (s += t(c) + " ", n && n[c] && (s += n[c] + " "));
    }
    r[i] = s;
  }
  return r;
}
const Yh = /* @__PURE__ */ F.createContext(void 0);
process.env.NODE_ENV !== "production" && (T.node, T.object);
function Kh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? vr(i.defaultProps, r) : !i.styleOverrides && !i.variants ? vr(i, r) : r;
}
function Gh({
  props: e,
  name: t
}) {
  const n = F.useContext(Yh);
  return Kh({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function Hh(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const Ds = (e, t, n, r = []) => {
  let i = e;
  t.forEach((o, s) => {
    s === t.length - 1 ? Array.isArray(i) ? i[Number(o)] = n : i && typeof i == "object" && (i[o] = n) : i && typeof i == "object" && (i[o] || (i[o] = r.includes(o) ? [] : {}), i = i[o]);
  });
}, qh = (e, t, n) => {
  function r(i, o = [], s = []) {
    Object.entries(i).forEach(([a, c]) => {
      (!n || n && !n([...o, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? r(c, [...o, a], Array.isArray(c) ? [...s, a] : s) : t([...o, a], c, s));
    });
  }
  r(e);
}, Xh = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function fi(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, o = {}, s = {};
  return qh(
    e,
    (a, c, l) => {
      if ((typeof c == "string" || typeof c == "number") && (!r || !r(a, c))) {
        const u = `--${n ? `${n}-` : ""}${a.join("-")}`, f = Xh(a, c);
        Object.assign(i, {
          [u]: f
        }), Ds(o, a, `var(${u})`, l), Ds(s, a, `var(${u}, ${f})`, l);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: o,
    varsWithDefaults: s
  };
}
function Zh(e, t = {}) {
  const {
    getSelector: n = y,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: o = {},
    components: s,
    defaultColorScheme: a = "light",
    ...c
  } = e, {
    vars: l,
    css: u,
    varsWithDefaults: f
  } = fi(c, t);
  let d = f;
  const g = {}, {
    [a]: b,
    ...v
  } = o;
  if (Object.entries(v || {}).forEach(([x, C]) => {
    const {
      vars: p,
      css: M,
      varsWithDefaults: _
    } = fi(C, t);
    d = Ge(d, _), g[x] = {
      css: M,
      vars: p
    };
  }), b) {
    const {
      css: x,
      vars: C,
      varsWithDefaults: p
    } = fi(b, t);
    d = Ge(d, p), g[a] = {
      css: x,
      vars: C
    };
  }
  function y(x, C) {
    var M, _;
    let p = i;
    if (i === "class" && (p = ".%s"), i === "data" && (p = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (p = `[${i}="%s"]`), x) {
      if (p === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((_ = (M = o[x]) == null ? void 0 : M.palette) == null ? void 0 : _.mode) || x})`]: {
            ":root": C
          }
        };
      if (p)
        return e.defaultColorScheme === x ? `:root, ${p.replace("%s", String(x))}` : p.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: d,
    generateThemeVars: () => {
      let x = {
        ...l
      };
      return Object.entries(g).forEach(([, {
        vars: C
      }]) => {
        x = Ge(x, C);
      }), x;
    },
    generateStyleSheets: () => {
      var V, h;
      const x = [], C = e.defaultColorScheme || "light";
      function p(A, I) {
        Object.keys(I).length && x.push(typeof A == "string" ? {
          [A]: {
            ...I
          }
        } : A);
      }
      p(n(void 0, {
        ...u
      }), u);
      const {
        [C]: M,
        ..._
      } = g;
      if (M) {
        const {
          css: A
        } = M, I = (h = (V = o[C]) == null ? void 0 : V.palette) == null ? void 0 : h.mode, j = !r && I ? {
          colorScheme: I,
          ...A
        } : {
          ...A
        };
        p(n(C, {
          ...j
        }), j);
      }
      return Object.entries(_).forEach(([A, {
        css: I
      }]) => {
        var Z, G;
        const j = (G = (Z = o[A]) == null ? void 0 : Z.palette) == null ? void 0 : G.mode, K = !r && j ? {
          colorScheme: j,
          ...I
        } : {
          ...I
        };
        p(n(A, {
          ...K
        }), K);
      }), x;
    }
  };
}
function Jh(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Is = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: An.white,
    default: An.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, di = {
  text: {
    primary: An.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: An.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function js(e, t, n, r) {
  const i = r.light || r, o = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = ho(e.main, i) : t === "dark" && (e.dark = fo(e.main, o)));
}
function Qh(e = "light") {
  return e === "dark" ? {
    main: zt[200],
    light: zt[50],
    dark: zt[400]
  } : {
    main: zt[700],
    light: zt[400],
    dark: zt[800]
  };
}
function ep(e = "light") {
  return e === "dark" ? {
    main: Ut[200],
    light: Ut[50],
    dark: Ut[400]
  } : {
    main: Ut[500],
    light: Ut[300],
    dark: Ut[700]
  };
}
function tp(e = "light") {
  return e === "dark" ? {
    main: Wt[500],
    light: Wt[300],
    dark: Wt[700]
  } : {
    main: Wt[700],
    light: Wt[400],
    dark: Wt[800]
  };
}
function np(e = "light") {
  return e === "dark" ? {
    main: Yt[400],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[700],
    light: Yt[500],
    dark: Yt[900]
  };
}
function rp(e = "light") {
  return e === "dark" ? {
    main: Kt[400],
    light: Kt[300],
    dark: Kt[700]
  } : {
    main: Kt[800],
    light: Kt[500],
    dark: Kt[900]
  };
}
function ip(e = "light") {
  return e === "dark" ? {
    main: mn[400],
    light: mn[300],
    dark: mn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: mn[500],
    dark: mn[900]
  };
}
function go(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, o = e.primary || Qh(t), s = e.secondary || ep(t), a = e.error || tp(t), c = e.info || np(t), l = e.success || rp(t), u = e.warning || ip(t);
  function f(v) {
    const y = _s(v, di.text.primary) >= n ? di.text.primary : Is.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = _s(v, y);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${y} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const d = ({
    color: v,
    name: y,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: x = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[S] && (v.main = v[S]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : xt(11, y ? ` (${y})` : "", S));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : xt(12, y ? ` (${y})` : "", JSON.stringify(v.main)));
    return js(v, "light", w, r), js(v, "dark", x, r), v.contrastText || (v.contrastText = f(v.main)), v;
  }, g = {
    dark: di,
    light: Is
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ge({
    // A collection of common colors.
    common: {
      ...An
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: o,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: nf,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...g[t]
  }, i);
}
function op(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, o] = r;
    typeof o == "object" && (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
  }), t;
}
function sp(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ap(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Bs = {
  textTransform: "uppercase"
}, Ns = '"Roboto", "Helvetica", "Arial", sans-serif';
function cp(e, t) {
  const {
    fontFamily: n = Ns,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: u,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const d = r / 14, g = u || ((y) => `${y / c * d}rem`), b = (y, S, w, x, C) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: g(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ns ? {
      letterSpacing: `${ap(x / S)}em`
    } : {},
    ...C,
    ...l
  }), v = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(o, 48, 1.167, 0),
    h4: b(o, 34, 1.235, 0.25),
    h5: b(o, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(o, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(o, 16, 1.5, 0.15),
    body2: b(o, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, Bs),
    caption: b(o, 12, 1.66, 0.4),
    overline: b(o, 12, 2.66, 1, Bs),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ge({
    htmlFontSize: c,
    pxToRem: g,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: o,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...v
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const lp = 0.2, up = 0.14, fp = 0.12;
function ve(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${lp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${up})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fp})`].join(",");
}
const dp = ["none", ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], hp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, pp = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Fs(e) {
  return `${Math.round(e)}ms`;
}
function mp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function gp(e) {
  const t = {
    ...hp,
    ...e.easing
  }, n = {
    ...pp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: mp,
    create: (i = ["all"], o = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: c = 0,
        ...l
      } = o;
      if (process.env.NODE_ENV !== "production") {
        const u = (d) => typeof d == "string", f = (d) => !Number.isNaN(parseFloat(d));
        !u(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !u(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), u(a) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !u(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((u) => `${u} ${typeof s == "string" ? s : Fs(s)} ${a} ${typeof c == "string" ? c : Fs(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const yp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Bc(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: o = {},
    transitions: s = {},
    typography: a = {},
    shape: c,
    ...l
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : xt(20));
  const u = go(o), f = lo(e);
  let d = Ge(f, {
    mixins: sp(f.breakpoints, r),
    palette: u,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: dp.slice(),
    typography: cp(u, a),
    transitions: gp(s),
    zIndex: {
      ...yp
    }
  });
  if (d = Ge(d, l), d = t.reduce((g, b) => Ge(g, b), d), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (v, y) => {
      let S;
      for (S in v) {
        const w = v[S];
        if (g.includes(S) && Object.keys(w).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = Ln("", S);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${S}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: w
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[S] = {};
        }
      }
    };
    Object.keys(d.components).forEach((v) => {
      const y = d.components[v].styleOverrides;
      y && v.startsWith("Mui") && b(y, v);
    });
  }
  return d.unstable_sxConfig = {
    ...Fn,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, d.unstable_sx = function(b) {
    return an({
      sx: b,
      theme: this
    });
  }, d;
}
function vp(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const bp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const n = vp(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Nc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Fc(e) {
  return e === "dark" ? bp : [];
}
function xp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, o = go(t);
  return {
    palette: o,
    opacity: {
      ...Nc(o.mode),
      ...n
    },
    overlays: r || Fc(o.mode),
    ...i
  };
}
function Sp(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Tp = (e) => [...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Cp = (e) => (t, n) => {
  const r = e.colorSchemeSelector;
  let i = r;
  if (r === "class" && (i = ".%s"), r === "data" && (i = "[data-%s]"), r != null && r.startsWith("data-") && !r.includes("%s") && (i = `[${r}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const o = {};
      return Tp(e.cssVarPrefix).forEach((s) => {
        o[s] = n[s], delete n[s];
      }), i === "media" ? {
        ":root": n,
        "@media (prefers-color-scheme: dark)": {
          ":root": o
        }
      } : i ? {
        [i.replace("%s", t)]: o,
        [`:root, ${i.replace("%s", t)}`]: n
      } : {
        ":root": {
          ...n,
          ...o
        }
      };
    }
    if (i && i !== "media")
      return `:root, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          ":root": n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return ":root";
};
function wp(e) {
  return st(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Pp(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let o = 0; o < i.length; o++) {
      const [s, a] = i[o];
      !wp(a) || s.startsWith("unstable_") ? delete r[s] : st(a) && (r[s] = {
        ...a
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ep(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function E(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function bn(e) {
  return !e || !e.startsWith("hsl") ? e : Ic(e);
}
function ut(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = vn(bn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ap(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const rt = (e) => {
  try {
    return e();
  } catch {
  }
}, Rp = (e = "mui") => Hh(e);
function hi(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = xp({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: o,
    ...s
  } = Bc({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: o,
    opacity: {
      ...Nc(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Fc(i)
  }, s;
}
function Op(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: o = "mui",
    shouldSkipGeneratingVar: s = Sp,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    ...c
  } = e, l = Object.keys(n)[0], u = r || (n.light && l !== "light" ? "light" : l), f = Rp(o), {
    [u]: d,
    light: g,
    dark: b,
    ...v
  } = n, y = {
    ...v
  };
  let S = d;
  if ((u === "dark" && !("dark" in n) || u === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${u}\` option is either missing or invalid.` : xt(21, u));
  const w = hi(y, S, c, u);
  g && !y.light && hi(y, g, void 0, "light"), b && !y.dark && hi(y, b, void 0, "dark");
  let x = {
    defaultColorScheme: u,
    ...w,
    cssVarPrefix: o,
    colorSchemeSelector: a,
    getCssVar: f,
    colorSchemes: y,
    font: {
      ...op(w.typography),
      ...w.font
    },
    spacing: Ap(c.spacing)
  };
  Object.keys(x.colorSchemes).forEach((V) => {
    const h = x.colorSchemes[V].palette, A = (I) => {
      const j = I.split("-"), K = j[1], Z = j[2];
      return f(I, h[K][Z]);
    };
    if (h.mode === "light" && (E(h.common, "background", "#fff"), E(h.common, "onBackground", "#000")), h.mode === "dark" && (E(h.common, "background", "#000"), E(h.common, "onBackground", "#fff")), Ep(h, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), h.mode === "light") {
      E(h.Alert, "errorColor", ge(h.error.light, 0.6)), E(h.Alert, "infoColor", ge(h.info.light, 0.6)), E(h.Alert, "successColor", ge(h.success.light, 0.6)), E(h.Alert, "warningColor", ge(h.warning.light, 0.6)), E(h.Alert, "errorFilledBg", A("palette-error-main")), E(h.Alert, "infoFilledBg", A("palette-info-main")), E(h.Alert, "successFilledBg", A("palette-success-main")), E(h.Alert, "warningFilledBg", A("palette-warning-main")), E(h.Alert, "errorFilledColor", rt(() => h.getContrastText(h.error.main))), E(h.Alert, "infoFilledColor", rt(() => h.getContrastText(h.info.main))), E(h.Alert, "successFilledColor", rt(() => h.getContrastText(h.success.main))), E(h.Alert, "warningFilledColor", rt(() => h.getContrastText(h.warning.main))), E(h.Alert, "errorStandardBg", ye(h.error.light, 0.9)), E(h.Alert, "infoStandardBg", ye(h.info.light, 0.9)), E(h.Alert, "successStandardBg", ye(h.success.light, 0.9)), E(h.Alert, "warningStandardBg", ye(h.warning.light, 0.9)), E(h.Alert, "errorIconColor", A("palette-error-main")), E(h.Alert, "infoIconColor", A("palette-info-main")), E(h.Alert, "successIconColor", A("palette-success-main")), E(h.Alert, "warningIconColor", A("palette-warning-main")), E(h.AppBar, "defaultBg", A("palette-grey-100")), E(h.Avatar, "defaultBg", A("palette-grey-400")), E(h.Button, "inheritContainedBg", A("palette-grey-300")), E(h.Button, "inheritContainedHoverBg", A("palette-grey-A100")), E(h.Chip, "defaultBorder", A("palette-grey-400")), E(h.Chip, "defaultAvatarColor", A("palette-grey-700")), E(h.Chip, "defaultIconColor", A("palette-grey-700")), E(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), E(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), E(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), E(h.LinearProgress, "primaryBg", ye(h.primary.main, 0.62)), E(h.LinearProgress, "secondaryBg", ye(h.secondary.main, 0.62)), E(h.LinearProgress, "errorBg", ye(h.error.main, 0.62)), E(h.LinearProgress, "infoBg", ye(h.info.main, 0.62)), E(h.LinearProgress, "successBg", ye(h.success.main, 0.62)), E(h.LinearProgress, "warningBg", ye(h.warning.main, 0.62)), E(h.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), E(h.Slider, "primaryTrack", ye(h.primary.main, 0.62)), E(h.Slider, "secondaryTrack", ye(h.secondary.main, 0.62)), E(h.Slider, "errorTrack", ye(h.error.main, 0.62)), E(h.Slider, "infoTrack", ye(h.info.main, 0.62)), E(h.Slider, "successTrack", ye(h.success.main, 0.62)), E(h.Slider, "warningTrack", ye(h.warning.main, 0.62));
      const I = tr(h.background.default, 0.8);
      E(h.SnackbarContent, "bg", I), E(h.SnackbarContent, "color", rt(() => h.getContrastText(I))), E(h.SpeedDialAction, "fabHoverBg", tr(h.background.paper, 0.15)), E(h.StepConnector, "border", A("palette-grey-400")), E(h.StepContent, "border", A("palette-grey-400")), E(h.Switch, "defaultColor", A("palette-common-white")), E(h.Switch, "defaultDisabledColor", A("palette-grey-100")), E(h.Switch, "primaryDisabledColor", ye(h.primary.main, 0.62)), E(h.Switch, "secondaryDisabledColor", ye(h.secondary.main, 0.62)), E(h.Switch, "errorDisabledColor", ye(h.error.main, 0.62)), E(h.Switch, "infoDisabledColor", ye(h.info.main, 0.62)), E(h.Switch, "successDisabledColor", ye(h.success.main, 0.62)), E(h.Switch, "warningDisabledColor", ye(h.warning.main, 0.62)), E(h.TableCell, "border", ye(er(h.divider, 1), 0.88)), E(h.Tooltip, "bg", er(h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      E(h.Alert, "errorColor", ye(h.error.light, 0.6)), E(h.Alert, "infoColor", ye(h.info.light, 0.6)), E(h.Alert, "successColor", ye(h.success.light, 0.6)), E(h.Alert, "warningColor", ye(h.warning.light, 0.6)), E(h.Alert, "errorFilledBg", A("palette-error-dark")), E(h.Alert, "infoFilledBg", A("palette-info-dark")), E(h.Alert, "successFilledBg", A("palette-success-dark")), E(h.Alert, "warningFilledBg", A("palette-warning-dark")), E(h.Alert, "errorFilledColor", rt(() => h.getContrastText(h.error.dark))), E(h.Alert, "infoFilledColor", rt(() => h.getContrastText(h.info.dark))), E(h.Alert, "successFilledColor", rt(() => h.getContrastText(h.success.dark))), E(h.Alert, "warningFilledColor", rt(() => h.getContrastText(h.warning.dark))), E(h.Alert, "errorStandardBg", ge(h.error.light, 0.9)), E(h.Alert, "infoStandardBg", ge(h.info.light, 0.9)), E(h.Alert, "successStandardBg", ge(h.success.light, 0.9)), E(h.Alert, "warningStandardBg", ge(h.warning.light, 0.9)), E(h.Alert, "errorIconColor", A("palette-error-main")), E(h.Alert, "infoIconColor", A("palette-info-main")), E(h.Alert, "successIconColor", A("palette-success-main")), E(h.Alert, "warningIconColor", A("palette-warning-main")), E(h.AppBar, "defaultBg", A("palette-grey-900")), E(h.AppBar, "darkBg", A("palette-background-paper")), E(h.AppBar, "darkColor", A("palette-text-primary")), E(h.Avatar, "defaultBg", A("palette-grey-600")), E(h.Button, "inheritContainedBg", A("palette-grey-800")), E(h.Button, "inheritContainedHoverBg", A("palette-grey-700")), E(h.Chip, "defaultBorder", A("palette-grey-700")), E(h.Chip, "defaultAvatarColor", A("palette-grey-300")), E(h.Chip, "defaultIconColor", A("palette-grey-300")), E(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), E(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), E(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), E(h.LinearProgress, "primaryBg", ge(h.primary.main, 0.5)), E(h.LinearProgress, "secondaryBg", ge(h.secondary.main, 0.5)), E(h.LinearProgress, "errorBg", ge(h.error.main, 0.5)), E(h.LinearProgress, "infoBg", ge(h.info.main, 0.5)), E(h.LinearProgress, "successBg", ge(h.success.main, 0.5)), E(h.LinearProgress, "warningBg", ge(h.warning.main, 0.5)), E(h.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), E(h.Slider, "primaryTrack", ge(h.primary.main, 0.5)), E(h.Slider, "secondaryTrack", ge(h.secondary.main, 0.5)), E(h.Slider, "errorTrack", ge(h.error.main, 0.5)), E(h.Slider, "infoTrack", ge(h.info.main, 0.5)), E(h.Slider, "successTrack", ge(h.success.main, 0.5)), E(h.Slider, "warningTrack", ge(h.warning.main, 0.5));
      const I = tr(h.background.default, 0.98);
      E(h.SnackbarContent, "bg", I), E(h.SnackbarContent, "color", rt(() => h.getContrastText(I))), E(h.SpeedDialAction, "fabHoverBg", tr(h.background.paper, 0.15)), E(h.StepConnector, "border", A("palette-grey-600")), E(h.StepContent, "border", A("palette-grey-600")), E(h.Switch, "defaultColor", A("palette-grey-300")), E(h.Switch, "defaultDisabledColor", A("palette-grey-600")), E(h.Switch, "primaryDisabledColor", ge(h.primary.main, 0.55)), E(h.Switch, "secondaryDisabledColor", ge(h.secondary.main, 0.55)), E(h.Switch, "errorDisabledColor", ge(h.error.main, 0.55)), E(h.Switch, "infoDisabledColor", ge(h.info.main, 0.55)), E(h.Switch, "successDisabledColor", ge(h.success.main, 0.55)), E(h.Switch, "warningDisabledColor", ge(h.warning.main, 0.55)), E(h.TableCell, "border", ge(er(h.divider, 1), 0.68)), E(h.Tooltip, "bg", er(h.grey[700], 0.92));
    }
    ut(h.background, "default"), ut(h.background, "paper"), ut(h.common, "background"), ut(h.common, "onBackground"), ut(h, "divider"), Object.keys(h).forEach((I) => {
      const j = h[I];
      j && typeof j == "object" && (j.main && E(h[I], "mainChannel", vn(bn(j.main))), j.light && E(h[I], "lightChannel", vn(bn(j.light))), j.dark && E(h[I], "darkChannel", vn(bn(j.dark))), j.contrastText && E(h[I], "contrastTextChannel", vn(bn(j.contrastText))), I === "text" && (ut(h[I], "primary"), ut(h[I], "secondary")), I === "action" && (j.active && ut(h[I], "active"), j.selected && ut(h[I], "selected")));
    });
  }), x = t.reduce((V, h) => Ge(V, h), x);
  const C = {
    prefix: o,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: s,
    getSelector: Cp(x)
  }, {
    vars: p,
    generateThemeVars: M,
    generateStyleSheets: _
  } = Zh(x, C);
  return x.vars = p, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([V, h]) => {
    x[V] = h;
  }), x.generateThemeVars = M, x.generateStyleSheets = _, x.generateSpacing = function() {
    return kc(c.spacing, ao(this));
  }, x.getColorSchemeSelector = Jh(a), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = s, x.unstable_sxConfig = {
    ...Fn,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, x.unstable_sx = function(h) {
    return an({
      sx: h,
      theme: this
    });
  }, x.toRuntimeSource = Pp, x;
}
function Ls(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: go({
      ...n === !0 ? {} : n,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Lc(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: o = n == null ? void 0 : n.mode,
    ...s
  } = e, a = o || "light", c = i == null ? void 0 : i[a], l = {
    ...i,
    ...n ? {
      [a]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    const u = Bc(e, ...t);
    return "colorSchemes" in e && (u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
      palette: u.palette
    }, Ls(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
      palette: u.palette
    }, Ls(u, "light", l.light))), u;
  }
  return Op({
    ...s,
    colorSchemes: l,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Mp(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function _p(e) {
  return parseFloat(e);
}
const kp = Lc();
function $p(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Wc = (e) => $p(e) && e !== "classes", Bt = Rh({
  themeId: fc,
  defaultTheme: kp,
  rootShouldForwardProp: Wc
}), Ws = {
  theme: void 0
};
function Uc(e) {
  let t, n;
  return (r) => {
    let i = t;
    return (i === void 0 || r.theme !== n) && (Ws.theme = r.theme, i = e(Ws), t = i, n = r.theme), i;
  };
}
process.env.NODE_ENV !== "production" && (T.node, T.object.isRequired);
function Wr(e) {
  return Gh(e);
}
function Vp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function ji(e, t) {
  return ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ji(e, t);
}
function Dp(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ji(e, t);
}
const Us = Ue.createContext(null);
function Ip(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yo(e, t) {
  var n = function(o) {
    return t && sr(o) ? t(o) : o;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Gu.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function jp(e, t) {
  e = e || {}, t = t || {};
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var o in e)
    o in t ? i.length && (r[o] = i, i = []) : i.push(o);
  var s, a = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var l = r[c][s];
        a[r[c][s]] = n(l);
      }
    a[c] = n(c);
  }
  for (s = 0; s < i.length; s++)
    a[i[s]] = n(i[s]);
  return a;
}
function Dt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Bp(e, t) {
  return yo(e.children, function(n) {
    return ar(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Dt(n, "appear", e),
      enter: Dt(n, "enter", e),
      exit: Dt(n, "exit", e)
    });
  });
}
function Np(e, t, n) {
  var r = yo(e.children), i = jp(t, r);
  return Object.keys(i).forEach(function(o) {
    var s = i[o];
    if (sr(s)) {
      var a = o in t, c = o in r, l = t[o], u = sr(l) && !l.props.in;
      c && (!a || u) ? i[o] = ar(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Dt(s, "exit", e),
        enter: Dt(s, "enter", e)
      }) : !c && a && !u ? i[o] = ar(s, {
        in: !1
      }) : c && a && sr(l) && (i[o] = ar(s, {
        onExited: n.bind(null, s),
        in: l.props.in,
        exit: Dt(s, "exit", e),
        enter: Dt(s, "enter", e)
      }));
    }
  }), i;
}
var Fp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Lp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, vo = /* @__PURE__ */ function(e) {
  Dp(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var s = o.handleExited.bind(Ip(o));
    return o.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, o;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, o) {
    var s = o.children, a = o.handleExited, c = o.firstRender;
    return {
      children: c ? Bp(i, a) : Np(i, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(i, o) {
    var s = yo(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(o), this.mounted && this.setState(function(a) {
      var c = mr({}, a.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, o = i.component, s = i.childFactory, a = Vp(i, ["component", "childFactory"]), c = this.state.contextValue, l = Fp(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, o === null ? /* @__PURE__ */ Ue.createElement(Us.Provider, {
      value: c
    }, l) : /* @__PURE__ */ Ue.createElement(Us.Provider, {
      value: c
    }, /* @__PURE__ */ Ue.createElement(o, a, l));
  }, t;
}(Ue.Component);
vo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: T.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: T.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: T.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: T.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: T.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: T.func
} : {};
vo.defaultProps = Lp;
class br {
  constructor() {
    dn(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new br();
  }
  static use() {
    const t = jc(br.create).current, [n, r] = F.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, F.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Up(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function Wp() {
  return br.use();
}
function Up() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function zc(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: o,
    rippleSize: s,
    in: a,
    onExited: c,
    timeout: l
  } = e, [u, f] = F.useState(!1), d = Le(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + o,
    left: -(s / 2) + i
  }, b = Le(n.child, u && n.childLeaving, r && n.childPulsate);
  return !a && !u && f(!0), F.useEffect(() => {
    if (!a && c != null) {
      const v = setTimeout(c, l);
      return () => {
        clearTimeout(v);
      };
    }
  }, [c, a, l]), /* @__PURE__ */ te.jsx("span", {
    className: d,
    style: g,
    children: /* @__PURE__ */ te.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (zc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object.isRequired,
  className: T.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: T.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: T.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: T.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: T.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: T.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: T.number,
  /**
   * exit delay
   */
  timeout: T.number.isRequired
});
const Qe = Wn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Bi = 550, zp = 80, Yp = jn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Kp = jn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Gp = jn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Hp = Bt("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), qp = Bt(zc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Qe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Yp};
    animation-duration: ${Bi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Qe.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Qe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Qe.childLeaving} {
    opacity: 0;
    animation-name: ${Kp};
    animation-duration: ${Bi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Qe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Gp};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Yc = /* @__PURE__ */ F.forwardRef(function(t, n) {
  const r = Wr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: o = {},
    className: s,
    ...a
  } = r, [c, l] = F.useState([]), u = F.useRef(0), f = F.useRef(null);
  F.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const d = F.useRef(!1), g = zh(), b = F.useRef(null), v = F.useRef(null), y = F.useCallback((C) => {
    const {
      pulsate: p,
      rippleX: M,
      rippleY: _,
      rippleSize: V,
      cb: h
    } = C;
    l((A) => [...A, /* @__PURE__ */ te.jsx(qp, {
      classes: {
        ripple: Le(o.ripple, Qe.ripple),
        rippleVisible: Le(o.rippleVisible, Qe.rippleVisible),
        ripplePulsate: Le(o.ripplePulsate, Qe.ripplePulsate),
        child: Le(o.child, Qe.child),
        childLeaving: Le(o.childLeaving, Qe.childLeaving),
        childPulsate: Le(o.childPulsate, Qe.childPulsate)
      },
      timeout: Bi,
      pulsate: p,
      rippleX: M,
      rippleY: _,
      rippleSize: V
    }, u.current)]), u.current += 1, f.current = h;
  }, [o]), S = F.useCallback((C = {}, p = {}, M = () => {
  }) => {
    const {
      pulsate: _ = !1,
      center: V = i || p.pulsate,
      fakeElement: h = !1
      // For test purposes
    } = p;
    if ((C == null ? void 0 : C.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (d.current = !0);
    const A = h ? null : v.current, I = A ? A.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let j, K, Z;
    if (V || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      j = Math.round(I.width / 2), K = Math.round(I.height / 2);
    else {
      const {
        clientX: G,
        clientY: J
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      j = Math.round(G - I.left), K = Math.round(J - I.top);
    }
    if (V)
      Z = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3), Z % 2 === 0 && (Z += 1);
    else {
      const G = Math.max(Math.abs((A ? A.clientWidth : 0) - j), j) * 2 + 2, J = Math.max(Math.abs((A ? A.clientHeight : 0) - K), K) * 2 + 2;
      Z = Math.sqrt(G ** 2 + J ** 2);
    }
    C != null && C.touches ? b.current === null && (b.current = () => {
      y({
        pulsate: _,
        rippleX: j,
        rippleY: K,
        rippleSize: Z,
        cb: M
      });
    }, g.start(zp, () => {
      b.current && (b.current(), b.current = null);
    })) : y({
      pulsate: _,
      rippleX: j,
      rippleY: K,
      rippleSize: Z,
      cb: M
    });
  }, [i, y, g]), w = F.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), x = F.useCallback((C, p) => {
    if (g.clear(), (C == null ? void 0 : C.type) === "touchend" && b.current) {
      b.current(), b.current = null, g.start(0, () => {
        x(C, p);
      });
      return;
    }
    b.current = null, l((M) => M.length > 0 ? M.slice(1) : M), f.current = p;
  }, [g]);
  return F.useImperativeHandle(n, () => ({
    pulsate: w,
    start: S,
    stop: x
  }), [w, S, x]), /* @__PURE__ */ te.jsx(Hp, {
    className: Le(Qe.root, o.root, s),
    ref: v,
    ...a,
    children: /* @__PURE__ */ te.jsx(vo, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Yc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: T.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * @ignore
   */
  className: T.string
});
function Xp(e) {
  return Ln("MuiButtonBase", e);
}
const Zp = Wn("MuiButtonBase", ["root", "disabled", "focusVisible"]), Jp = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, s = mo({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Xp, i);
  return n && r && (s.root += ` ${r}`), s;
}, Qp = Bt("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Zp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Kc = /* @__PURE__ */ F.forwardRef(function(t, n) {
  const r = Wr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: o = !1,
    children: s,
    className: a,
    component: c = "button",
    disabled: l = !1,
    disableRipple: u = !1,
    disableTouchRipple: f = !1,
    focusRipple: d = !1,
    focusVisibleClassName: g,
    LinkComponent: b = "a",
    onBlur: v,
    onClick: y,
    onContextMenu: S,
    onDragLeave: w,
    onFocus: x,
    onFocusVisible: C,
    onKeyDown: p,
    onKeyUp: M,
    onMouseDown: _,
    onMouseLeave: V,
    onMouseUp: h,
    onTouchEnd: A,
    onTouchMove: I,
    onTouchStart: j,
    tabIndex: K = 0,
    TouchRippleProps: Z,
    touchRippleRef: G,
    type: J,
    ...pe
  } = r, be = F.useRef(null), we = Wp(), R = ks(we.ref, G), [k, L] = F.useState(!1);
  l && k && L(!1), F.useImperativeHandle(i, () => ({
    focusVisible: () => {
      L(!0), be.current.focus();
    }
  }), []);
  const Y = we.shouldMount && !u && !l;
  F.useEffect(() => {
    k && d && !u && we.pulsate();
  }, [u, d, k, we]);
  function B(X, Hn, qn = f) {
    return nr((fn) => (Hn && Hn(fn), qn || we[X](fn), !0));
  }
  const Q = B("start", _), W = B("stop", S), U = B("stop", w), H = B("stop", h), ee = B("stop", (X) => {
    k && X.preventDefault(), V && V(X);
  }), q = B("start", j), Se = B("stop", A), P = B("stop", I), Re = B("stop", (X) => {
    Vs(X.target) || L(!1), v && v(X);
  }, !1), D = nr((X) => {
    be.current || (be.current = X.currentTarget), Vs(X.target) && (L(!0), C && C(X)), x && x(X);
  }), _e = () => {
    const X = be.current;
    return c && c !== "button" && !(X.tagName === "A" && X.href);
  }, qe = nr((X) => {
    d && !X.repeat && k && X.key === " " && we.stop(X, () => {
      we.start(X);
    }), X.target === X.currentTarget && _e() && X.key === " " && X.preventDefault(), p && p(X), X.target === X.currentTarget && _e() && X.key === "Enter" && !l && (X.preventDefault(), y && y(X));
  }), Rt = nr((X) => {
    d && X.key === " " && k && !X.defaultPrevented && we.stop(X, () => {
      we.pulsate(X);
    }), M && M(X), y && X.target === X.currentTarget && _e() && X.key === " " && !X.defaultPrevented && y(X);
  });
  let Ot = c;
  Ot === "button" && (pe.href || pe.to) && (Ot = b);
  const nt = {};
  Ot === "button" ? (nt.type = J === void 0 ? "button" : J, nt.disabled = l) : (!pe.href && !pe.to && (nt.role = "button"), l && (nt["aria-disabled"] = l));
  const Zr = ks(n, be), Gn = {
    ...r,
    centerRipple: o,
    component: c,
    disabled: l,
    disableRipple: u,
    disableTouchRipple: f,
    focusRipple: d,
    tabIndex: K,
    focusVisible: k
  }, un = Jp(Gn);
  return /* @__PURE__ */ te.jsxs(Qp, {
    as: Ot,
    className: Le(un.root, a),
    ownerState: Gn,
    onBlur: Re,
    onClick: y,
    onContextMenu: W,
    onFocus: D,
    onKeyDown: qe,
    onKeyUp: Rt,
    onMouseDown: Q,
    onMouseLeave: ee,
    onMouseUp: H,
    onDragLeave: U,
    onTouchEnd: Se,
    onTouchMove: P,
    onTouchStart: q,
    ref: Zr,
    tabIndex: l ? -1 : K,
    type: J,
    ...nt,
    ...pe,
    children: [s, Y ? /* @__PURE__ */ te.jsx(Yc, {
      ref: R,
      center: o,
      ...Z
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Fh,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: T.bool,
  /**
   * The content of the component.
   */
  children: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * @ignore
   */
  className: T.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Nh,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: T.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: T.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: T.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: T.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: T.string,
  /**
   * @ignore
   */
  href: T.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: T.elementType,
  /**
   * @ignore
   */
  onBlur: T.func,
  /**
   * @ignore
   */
  onClick: T.func,
  /**
   * @ignore
   */
  onContextMenu: T.func,
  /**
   * @ignore
   */
  onDragLeave: T.func,
  /**
   * @ignore
   */
  onFocus: T.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: T.func,
  /**
   * @ignore
   */
  onKeyDown: T.func,
  /**
   * @ignore
   */
  onKeyUp: T.func,
  /**
   * @ignore
   */
  onMouseDown: T.func,
  /**
   * @ignore
   */
  onMouseLeave: T.func,
  /**
   * @ignore
   */
  onMouseUp: T.func,
  /**
   * @ignore
   */
  onTouchEnd: T.func,
  /**
   * @ignore
   */
  onTouchMove: T.func,
  /**
   * @ignore
   */
  onTouchStart: T.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object]),
  /**
   * @default 0
   */
  tabIndex: T.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: T.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: T.oneOfType([T.func, T.shape({
    current: T.shape({
      pulsate: T.func.isRequired,
      start: T.func.isRequired,
      stop: T.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: T.oneOfType([T.oneOf(["button", "reset", "submit"]), T.string])
});
const em = Wn("MuiBox", ["root"]), tm = Lc(), ft = Sh({
  themeId: fc,
  defaultTheme: tm,
  defaultClassName: em.root,
  generateClassName: $c.generate
});
process.env.NODE_ENV !== "production" && (ft.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: T.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: T.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object])
});
function nm(e) {
  return Ln("MuiButton", e);
}
const Gt = Wn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Gc = /* @__PURE__ */ F.createContext({});
process.env.NODE_ENV !== "production" && (Gc.displayName = "ButtonGroupContext");
const Hc = /* @__PURE__ */ F.createContext(void 0);
process.env.NODE_ENV !== "production" && (Hc.displayName = "ButtonGroupButtonContext");
const rm = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: i,
    variant: o,
    classes: s
  } = e, a = {
    root: ["root", o, `${o}${We(t)}`, `size${We(i)}`, `${o}Size${We(i)}`, `color${We(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${We(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${We(i)}`]
  }, c = mo(a, nm, s);
  return {
    ...s,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, qc = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], im = Bt(Kc, {
  shouldForwardProp: (e) => Wc(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${We(n.color)}`], t[`size${We(n.size)}`], t[`${n.variant}Size${We(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(Uc(({
  theme: e
}) => {
  var r, i;
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Gt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Gt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Gt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Gt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(([, o]) => o && o.main && o.dark && o.contrastText).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[o].main,
        "--variant-outlinedColor": (e.vars || e).palette[o].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.5)` : Vt(e.palette[o].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[o].contrastText,
        "--variant-containedBg": (e.vars || e).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[o].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Vt(e.palette[o].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[o].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Vt(e.palette[o].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        "--variant-containedColor": e.vars ? (
          // this is safe because grey does not change between default light/dark mode
          e.vars.palette.text.primary
        ) : (i = (r = e.palette).getContrastText) == null ? void 0 : i.call(r, t),
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Vt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Vt(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Gt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Gt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), om = Bt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${We(n.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...qc]
}), sm = Bt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${We(n.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...qc]
}), Xc = /* @__PURE__ */ F.forwardRef(function(t, n) {
  const r = F.useContext(Gc), i = F.useContext(Hc), o = vr(r, t), s = Wr({
    props: o,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: l = "button",
    className: u,
    disabled: f = !1,
    disableElevation: d = !1,
    disableFocusRipple: g = !1,
    endIcon: b,
    focusVisibleClassName: v,
    fullWidth: y = !1,
    size: S = "medium",
    startIcon: w,
    type: x,
    variant: C = "text",
    ...p
  } = s, M = {
    ...s,
    color: c,
    component: l,
    disabled: f,
    disableElevation: d,
    disableFocusRipple: g,
    fullWidth: y,
    size: S,
    type: x,
    variant: C
  }, _ = rm(M), V = w && /* @__PURE__ */ te.jsx(om, {
    className: _.startIcon,
    ownerState: M,
    children: w
  }), h = b && /* @__PURE__ */ te.jsx(sm, {
    className: _.endIcon,
    ownerState: M,
    children: b
  }), A = i || "";
  return /* @__PURE__ */ te.jsxs(im, {
    ownerState: M,
    className: Le(r.className, _.root, u, A),
    component: l,
    disabled: f,
    focusRipple: !g,
    focusVisibleClassName: Le(_.focusVisible, v),
    ref: n,
    type: x,
    ...p,
    classes: _,
    children: [V, a, h]
  });
});
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * @ignore
   */
  className: T.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: T.oneOfType([T.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), T.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: T.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: T.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: T.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: T.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: T.bool,
  /**
   * Element placed after the children.
   */
  endIcon: T.node,
  /**
   * @ignore
   */
  focusVisibleClassName: T.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: T.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: T.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: T.oneOfType([T.oneOf(["small", "medium", "large"]), T.string]),
  /**
   * Element placed before the children.
   */
  startIcon: T.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object]),
  /**
   * @ignore
   */
  type: T.oneOfType([T.oneOf(["button", "reset", "submit"]), T.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: T.oneOfType([T.oneOf(["contained", "outlined", "text"]), T.string])
});
function am(e) {
  return Ln("MuiSkeleton", e);
}
Wn("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const cm = (e) => {
  const {
    classes: t,
    variant: n,
    animation: r,
    hasChildren: i,
    width: o,
    height: s
  } = e;
  return mo({
    root: ["root", n, r, i && "withChildren", i && !o && "fitContent", i && !s && "heightAuto"]
  }, am, t);
}, Ni = jn`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, Fi = jn`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`, lm = typeof Ni != "string" ? oo`
        animation: ${Ni} 2s ease-in-out 0.5s infinite;
      ` : null, um = typeof Fi != "string" ? oo`
        animation: ${Fi} 2s linear 0.5s infinite;
      ` : null, fm = Bt("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.animation !== !1 && t[n.animation], n.hasChildren && t.withChildren, n.hasChildren && !n.width && t.fitContent, n.hasChildren && !n.height && t.heightAuto];
  }
})(Uc(({
  theme: e
}) => {
  const t = Mp(e.shape.borderRadius) || "px", n = _p(e.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : Vt(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em",
    variants: [{
      props: {
        variant: "text"
      },
      style: {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${n}${t}/${Math.round(n / 0.6 * 10) / 10}${t}`,
        "&:empty:before": {
          content: '"\\00a0"'
        }
      }
    }, {
      props: {
        variant: "circular"
      },
      style: {
        borderRadius: "50%"
      }
    }, {
      props: {
        variant: "rounded"
      },
      style: {
        borderRadius: (e.vars || e).shape.borderRadius
      }
    }, {
      props: ({
        ownerState: r
      }) => r.hasChildren,
      style: {
        "& > *": {
          visibility: "hidden"
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => r.hasChildren && !r.width,
      style: {
        maxWidth: "fit-content"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.hasChildren && !r.height,
      style: {
        height: "auto"
      }
    }, {
      props: {
        animation: "pulse"
      },
      style: lm || {
        animation: `${Ni} 2s ease-in-out 0.5s infinite`
      }
    }, {
      props: {
        animation: "wave"
      },
      style: {
        position: "relative",
        overflow: "hidden",
        /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        "&::after": {
          background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
          content: '""',
          position: "absolute",
          transform: "translateX(-100%)",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }
      }
    }, {
      props: {
        animation: "wave"
      },
      style: um || {
        animation: `${Fi} 2s linear 0.5s infinite`
      }
    }]
  };
})), Zc = /* @__PURE__ */ F.forwardRef(function(t, n) {
  const r = Wr({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: i = "pulse",
    className: o,
    component: s = "span",
    height: a,
    style: c,
    variant: l = "text",
    width: u,
    ...f
  } = r, d = {
    ...r,
    animation: i,
    component: s,
    variant: l,
    hasChildren: !!f.children
  }, g = cm(d);
  return /* @__PURE__ */ te.jsx(fm, {
    as: s,
    ref: n,
    className: Le(g.root, o),
    ownerState: d,
    ...f,
    style: {
      width: u,
      height: a,
      ...c
    }
  });
});
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: T.oneOf(["pulse", "wave", !1]),
  /**
   * Optional children to infer width and height from.
   */
  children: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * @ignore
   */
  className: T.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: T.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: T.oneOfType([T.number, T.string]),
  /**
   * @ignore
   */
  style: T.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: T.oneOfType([T.oneOf(["circular", "rectangular", "rounded", "text"]), T.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: T.oneOfType([T.number, T.string])
});
var Jc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, zs = Ue.createContext && /* @__PURE__ */ Ue.createContext(Jc), dm = ["attr", "size", "title"];
function hm(e, t) {
  if (e == null) return {};
  var n = pm(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xr.apply(this, arguments);
}
function Ys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ys(Object(n), !0).forEach(function(r) {
      mm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ys(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mm(e, t, n) {
  return t = gm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gm(e) {
  var t = ym(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ym(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qc(e) {
  return e && e.map((t, n) => /* @__PURE__ */ Ue.createElement(t.tag, Sr({
    key: n
  }, t.attr), Qc(t.child)));
}
function vm(e) {
  return (t) => /* @__PURE__ */ Ue.createElement(bm, xr({
    attr: Sr({}, e.attr)
  }, t), Qc(e.child));
}
function bm(e) {
  var t = (n) => {
    var {
      attr: r,
      size: i,
      title: o
    } = e, s = hm(e, dm), a = i || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ Ue.createElement("svg", xr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: c,
      style: Sr(Sr({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Ue.createElement("title", null, o), e.children);
  };
  return zs !== void 0 ? /* @__PURE__ */ Ue.createElement(zs.Consumer, null, (n) => t(n)) : t(Jc);
}
function xm(e) {
  return vm({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" }, child: [] }] })(e);
}
const Sm = ({
  subheading: e,
  title: t,
  subtitle: n,
  buttonText: r,
  index: i,
  thumbnail: o,
  onRemove: s,
  onAction: a
}) => /* @__PURE__ */ te.jsx("div", { children: /* @__PURE__ */ te.jsx(
  ft,
  {
    sx: {
      border: "1px solid #E6E6E6",
      padding: "10px 12px",
      borderRadius: i == 3 && "0px 0px 5px 5px" || i == 0 && "5px 5px 0px 0px" || ""
    },
    children: /* @__PURE__ */ te.jsxs(ft, { sx: { display: "flex", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ te.jsxs(
        ft,
        {
          sx: {
            display: "flex",
            gap: "12px",
            alignItems: "center"
          },
          children: [
            o && /* @__PURE__ */ te.jsx(ft, { sx: { width: "70px", height: "70px" }, children: /* @__PURE__ */ te.jsx(
              "img",
              {
                src: o,
                alt: "text",
                style: { borderRadius: "5px", width: "70px", height: "70px" }
              }
            ) }),
            !o && /* @__PURE__ */ te.jsx(Zc, { variant: "rounded", width: 70, height: 70 }),
            /* @__PURE__ */ te.jsxs("div", { children: [
              e && /* @__PURE__ */ te.jsx("h6", { style: { color: "#6F6F6F" }, children: e }),
              /* @__PURE__ */ te.jsxs(ft, { sx: { paddingTop: "1px" }, children: [
                /* @__PURE__ */ te.jsx("h4", { style: { fontWeight: "bold" }, children: t }),
                n && /* @__PURE__ */ te.jsx("h6", { style: { color: "#6F6F6F" }, children: n })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ te.jsxs(ft, { sx: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ te.jsx(
          ft,
          {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10%"
            },
            children: /* @__PURE__ */ te.jsx(
              Xc,
              {
                sx: {
                  boxShadow: "none",
                  textTransform: "none",
                  height: "fit-content",
                  fontSize: "14px",
                  padding: "4px 16px",
                  backgroundColor: "#37ABEB",
                  color: "white",
                  "&:hover": {
                    boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.2)"
                  }
                },
                variant: "contained",
                onClick: a,
                children: r
              }
            )
          }
        ),
        /* @__PURE__ */ te.jsx(
          xm,
          {
            onClick: s,
            style: {
              width: "15px",
              height: "15px",
              cursor: "pointer",
              color: "gray"
            }
          }
        )
      ] })
    ] })
  }
) }), el = on({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ur = on({}), bo = on(null), xo = typeof window < "u", Tm = xo ? Hu : to, tl = on({ strict: !1 }), zr = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Cm = "framerAppearId", nl = "data-" + zr(Cm), wm = {
  skipAnimations: !1,
  useManualTiming: !1
};
function Pm(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(l) {
    o.has(l) && (c.schedule(l), e()), l(s);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, f = !1) => {
      const g = f && r ? t : n;
      return u && o.add(l), g.has(l) || g.add(l), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.delete(l), o.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (s = l, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, i && (i = !1, c.process(l));
    }
  };
  return c;
}
const rr = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Em = 40;
function rl(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = rr.reduce((S, w) => (S[w] = Pm(o), S), {}), { read: a, resolveKeyframes: c, update: l, preRender: u, render: f, postRender: d } = s, g = () => {
    const S = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(S - i.timestamp, Em), 1), i.timestamp = S, i.isProcessing = !0, a.process(i), c.process(i), l.process(i), u.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
  }, b = () => {
    n = !0, r = !0, i.isProcessing || e(g);
  };
  return { schedule: rr.reduce((S, w) => {
    const x = s[w];
    return S[w] = (C, p = !1, M = !1) => (n || b(), x.schedule(C, p, M)), S;
  }, {}), cancel: (S) => {
    for (let w = 0; w < rr.length; w++)
      s[rr[w]].cancel(S);
  }, state: i, steps: s };
}
const { schedule: So, cancel: Gv } = rl(queueMicrotask, !1);
function Ht(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const il = on({});
let Ks = !1;
function Am(e, t, n, r, i) {
  var o;
  const { visualElement: s } = Ne(Ur), a = Ne(tl), c = Ne(bo), l = Ne(el).reducedMotion, u = Ai();
  r = r || a.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const f = u.current, d = Ne(il);
  f && !f.projection && i && (f.type === "html" || f.type === "svg") && Om(u.current, n, i, d), qu(() => {
    f && f.update(n, c);
  });
  const g = n[nl], b = Ai(!!g && !window.MotionHandoffIsComplete && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, g)));
  return Tm(() => {
    f && (f.updateFeatures(), So.render(f.render), b.current && f.animationState && f.animationState.animateChanges());
  }), to(() => {
    f && (!b.current && f.animationState && f.animationState.animateChanges(), b.current = !1, Ks || (Ks = !0, queueMicrotask(Rm)));
  }), f;
}
function Rm() {
  window.MotionHandoffIsComplete = !0;
}
function Om(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: c, layoutRoot: l } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : ol(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!s || a && Ht(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    layoutScroll: c,
    layoutRoot: l
  });
}
function ol(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : ol(e.parent);
}
function Mm(e, t, n) {
  return lc(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ht(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function _n(e) {
  return typeof e == "string" || Array.isArray(e);
}
function kn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const To = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Co = ["initial", ...To];
function Yr(e) {
  return kn(e.animate) || Co.some((t) => _n(e[t]));
}
function sl(e) {
  return !!(Yr(e) || e.variants);
}
function _m(e, t) {
  if (Yr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || _n(n) ? n : void 0,
      animate: _n(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function km(e) {
  const { initial: t, animate: n } = _m(e, Ne(Ur));
  return Rr(() => ({ initial: t, animate: n }), [Gs(t), Gs(n)]);
}
function Gs(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Hs = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, nn = {};
for (const e in Hs)
  nn[e] = {
    isEnabled: (t) => Hs[e].some((n) => !!t[n])
  };
function $m(e) {
  for (const t in e)
    nn[t] = {
      ...nn[t],
      ...e[t]
    };
}
const al = on({}), Vm = Symbol.for("motionComponentSymbol"), Ve = (e) => e;
let cn = Ve, Tt = Ve;
process.env.NODE_ENV !== "production" && (cn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Tt = (e, t) => {
  if (!e)
    throw new Error(t);
});
function Dm({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  e && $m(e);
  function o(a, c) {
    let l;
    const u = {
      ...Ne(el),
      ...a,
      layoutId: Im(a)
    }, { isStatic: f } = u, d = km(a), g = r(a, f);
    if (!f && xo) {
      jm(u, e);
      const b = Bm(u);
      l = b.MeasureLayout, d.visualElement = Am(i, g, u, t, b.ProjectionNode);
    }
    return te.jsxs(Ur.Provider, { value: d, children: [l && d.visualElement ? te.jsx(l, { visualElement: d.visualElement, ...u }) : null, n(i, a, Mm(g, d.visualElement, c), g, f, d.visualElement)] });
  }
  const s = cc(o);
  return s[Vm] = i, s;
}
function Im({ layoutId: e }) {
  const t = Ne(al).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function jm(e, t) {
  const n = Ne(tl).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? cn(!1, r) : Tt(!1, r);
  }
}
function Bm(e) {
  const { drag: t, layout: n } = nn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function Nm(e) {
  function t(r, i = {}) {
    return Dm(e(r, i));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
  });
}
const Fm = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function wo(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Fm.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const Tr = {};
function Lm(e) {
  Object.assign(Tr, e);
}
const Un = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Et = new Set(Un);
function cl(e, { layout: t, layoutId: n }) {
  return Et.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Tr[e] || e === "opacity");
}
const je = (e) => !!(e && e.getVelocity), ll = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ct = (e, t, n) => n > t ? t : n < e ? e : n, ln = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Cn = {
  ...ln,
  transform: (e) => Ct(0, 1, e)
}, ir = {
  ...ln,
  default: 1
}, wn = (e) => Math.round(e * 1e5) / 1e5, Po = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, Wm = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Um = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function zn(e) {
  return typeof e == "string";
}
function zm(e) {
  return e == null;
}
const Yn = (e) => ({
  test: (t) => zn(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), bt = Yn("deg"), ct = Yn("%"), N = Yn("px"), Ym = Yn("vh"), Km = Yn("vw"), qs = {
  ...ct,
  parse: (e) => ct.parse(e) / 100,
  transform: (e) => ct.transform(e * 100)
}, Xs = {
  ...ln,
  transform: Math.round
}, Eo = {
  // Border props
  borderWidth: N,
  borderTopWidth: N,
  borderRightWidth: N,
  borderBottomWidth: N,
  borderLeftWidth: N,
  borderRadius: N,
  radius: N,
  borderTopLeftRadius: N,
  borderTopRightRadius: N,
  borderBottomRightRadius: N,
  borderBottomLeftRadius: N,
  // Positioning props
  width: N,
  maxWidth: N,
  height: N,
  maxHeight: N,
  size: N,
  top: N,
  right: N,
  bottom: N,
  left: N,
  // Spacing props
  padding: N,
  paddingTop: N,
  paddingRight: N,
  paddingBottom: N,
  paddingLeft: N,
  margin: N,
  marginTop: N,
  marginRight: N,
  marginBottom: N,
  marginLeft: N,
  // Transform props
  rotate: bt,
  rotateX: bt,
  rotateY: bt,
  rotateZ: bt,
  scale: ir,
  scaleX: ir,
  scaleY: ir,
  scaleZ: ir,
  skew: bt,
  skewX: bt,
  skewY: bt,
  distance: N,
  translateX: N,
  translateY: N,
  translateZ: N,
  x: N,
  y: N,
  z: N,
  perspective: N,
  transformPerspective: N,
  opacity: Cn,
  originX: qs,
  originY: qs,
  originZ: N,
  // Misc
  zIndex: Xs,
  backgroundPositionX: N,
  backgroundPositionY: N,
  // SVG
  fillOpacity: Cn,
  strokeOpacity: Cn,
  numOctaves: Xs
}, Gm = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Hm = Un.length;
function qm(e, t, n) {
  let r = "", i = !0;
  for (let o = 0; o < Hm; o++) {
    const s = Un[o], a = e[s];
    if (a === void 0)
      continue;
    let c = !0;
    if (typeof a == "number" ? c = a === (s.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
      const l = ll(a, Eo[s]);
      if (!c) {
        i = !1;
        const u = Gm[s] || s;
        r += `${u}(${l}) `;
      }
      n && (t[s] = l);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
const ul = (e) => (t) => typeof t == "string" && t.startsWith(e), fl = ul("--"), Xm = ul("var(--"), Ao = (e) => Xm(e) ? Zm.test(e.split("/*")[0].trim()) : !1, Zm = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ro(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1, a = !1;
  for (const c in t) {
    const l = t[c];
    if (Et.has(c)) {
      s = !0;
      continue;
    } else if (fl(c)) {
      i[c] = l;
      continue;
    } else {
      const u = ll(l, Eo[c]);
      c.startsWith("origin") ? (a = !0, o[c] = u) : r[c] = u;
    }
  }
  if (t.transform || (s || n ? r.transform = qm(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = o;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
const Oo = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function dl(e, t, n) {
  for (const r in t)
    !je(t[r]) && !cl(r, n) && (e[r] = t[r]);
}
function Jm({ transformTemplate: e }, t) {
  return Rr(() => {
    const n = Oo();
    return Ro(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Qm(e, t) {
  const n = e.style || {}, r = {};
  return dl(r, n, e), Object.assign(r, Jm(e, t)), r;
}
function eg(e, t) {
  const n = {}, r = Qm(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const tg = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Cr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tg.has(e);
}
let hl = (e) => !Cr(e);
function ng(e) {
  e && (hl = (t) => t.startsWith("on") ? !Cr(t) : e(t));
}
try {
  ng(require("@emotion/is-prop-valid").default);
} catch {
}
function rg(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (hl(i) || n === !0 && Cr(i) || !t && !Cr(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function Zs(e, t, n) {
  return typeof e == "string" ? e : N.transform(t + n * e);
}
function ig(e, t, n) {
  const r = Zs(t, e.x, e.width), i = Zs(n, e.y, e.height);
  return `${r} ${i}`;
}
const og = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, sg = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ag(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? og : sg;
  e[o.offset] = N.transform(-r);
  const s = N.transform(t), a = N.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Mo(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: o,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, u, f) {
  if (Ro(e, l, f), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: b } = e;
  d.transform && (b && (g.transform = d.transform), delete d.transform), b && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = ig(b, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && ag(d, s, a, c, !1);
}
const pl = () => ({
  ...Oo(),
  attrs: {}
}), _o = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function cg(e, t, n, r) {
  const i = Rr(() => {
    const o = pl();
    return Mo(o, t, _o(r), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    dl(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function lg(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const c = (wo(n) ? cg : eg)(r, o, s, n), l = rg(r, typeof n == "string", e), u = n !== uc ? { ...l, ...c, ref: i } : {}, { children: f } = r, d = Rr(() => je(f) ? f.get() : f, [f]);
    return Xu(n, {
      ...u,
      children: d
    });
  };
}
function ml(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const gl = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function yl(e, t, n, r) {
  ml(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(gl.has(i) ? i : zr(i), t.attrs[i]);
}
function ko(e, t, n) {
  var r;
  const { style: i } = e, o = {};
  for (const s in i)
    (je(i[s]) || t.style && je(t.style[s]) || cl(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
  return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o;
}
function vl(e, t, n) {
  const r = ko(e, t, n);
  for (const i in e)
    if (je(e[i]) || je(t[i])) {
      const o = Un.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
function Js(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function $o(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Js(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = Js(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function ug(e) {
  const t = Ai(null);
  return t.current === null && (t.current = e()), t.current;
}
const Li = (e) => Array.isArray(e), fg = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), dg = (e) => Li(e) ? e[e.length - 1] || 0 : e;
function dr(e) {
  const t = je(e) ? e.get() : e;
  return fg(t) ? t.toValue() : t;
}
const bl = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function xl(e) {
  if (Et.has(e))
    return "transform";
  if (bl.has(e))
    return zr(e);
}
function Kr(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gr(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function hg({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, i, o, s, a) {
  const c = {
    latestValues: mg(i, o, s, a ? !1 : e, t),
    renderState: n()
  };
  return r && (c.mount = (l) => r(i, l, c)), c;
}
const Sl = (e) => (t, n) => {
  const r = Ne(Ur), i = Ne(bo), o = () => hg(e, t, r, i, n);
  return n ? o() : ug(o);
};
function pg(e, t) {
  const n = xl(t);
  n && Kr(e, n);
}
function Qs(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const o = $o(e, r[i]);
    if (o) {
      const { transitionEnd: s, transition: a, ...c } = o;
      n(c, s);
    }
  }
}
function mg(e, t, n, r, i) {
  var o;
  const s = {}, a = [], c = r && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0, l = i(e, {});
  for (const y in l)
    s[y] = dr(l[y]);
  let { initial: u, animate: f } = e;
  const d = Yr(e), g = sl(e);
  t && g && !d && e.inherit !== !1 && (u === void 0 && (u = t.initial), f === void 0 && (f = t.animate));
  let b = n ? n.initial === !1 : !1;
  b = b || u === !1;
  const v = b ? f : u;
  return v && typeof v != "boolean" && !kn(v) && Qs(e, v, (y, S) => {
    for (const w in y) {
      let x = y[w];
      if (Array.isArray(x)) {
        const C = b ? x.length - 1 : 0;
        x = x[C];
      }
      x !== null && (s[w] = x);
    }
    for (const w in S)
      s[w] = S[w];
  }), c && (f && u !== !1 && !kn(f) && Qs(e, f, (y) => {
    for (const S in y)
      pg(a, S);
  }), a.length && (s.willChange = a.join(","))), s;
}
const { schedule: he, cancel: vt, state: ke, steps: pi } = rl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ve, !0), gg = {
  useVisualState: Sl({
    scrapeMotionValuesFromProps: vl,
    createRenderState: pl,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      he.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), he.render(() => {
        Mo(n, r, _o(t.tagName), e.transformTemplate), yl(t, n);
      });
    }
  })
}, yg = {
  useVisualState: Sl({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: ko,
    createRenderState: Oo
  })
};
function vg(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...wo(e) ? gg : yg,
    preloadedFeatures: n,
    useRender: lg(t),
    createVisualElement: r,
    Component: e
  };
}
function dt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Tl = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Hr(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const bg = (e) => (t) => Tl(t) && e(t, Hr(t));
function ht(e, t, n, r) {
  return dt(e, t, bg(n), r);
}
const xg = (e, t) => (n) => t(e(n)), pt = (...e) => e.reduce(xg);
function Cl(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const ea = Cl("dragHorizontal"), ta = Cl("dragVertical");
function wl(e) {
  let t = !1;
  if (e === "y")
    t = ta();
  else if (e === "x")
    t = ea();
  else {
    const n = ea(), r = ta();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Pl() {
  const e = wl(!0);
  return e ? (e(), !1) : !0;
}
class At {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function na(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => {
    if (o.pointerType === "touch" || Pl())
      return;
    const a = e.getProps();
    e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
    const c = a[r];
    c && he.postRender(() => c(o, s));
  };
  return ht(e.current, n, i, {
    passive: !e.getProps()[r]
  });
}
class Sg extends At {
  mount() {
    this.unmount = pt(na(this.node, !0), na(this.node, !1));
  }
  unmount() {
  }
}
class Tg extends At {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = pt(dt(this.node.current, "focus", () => this.onFocus()), dt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const El = (e, t) => t ? e === t ? !0 : El(e, t.parentElement) : !1;
function mi(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Hr(n));
}
class Cg extends At {
  constructor() {
    super(...arguments), this.removeStartListeners = Ve, this.removeEndListeners = Ve, this.removeAccessibleListeners = Ve, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), o = ht(window, "pointerup", (a, c) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: l, onTapCancel: u, globalTapTarget: f } = this.node.getProps(), d = !f && !El(this.node.current, a.target) ? u : l;
        d && he.update(() => d(a, c));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), s = ht(window, "pointercancel", (a, c) => this.cancelPress(a, c), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = pt(o, s), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (o) => {
        if (o.key !== "Enter" || this.isPressing)
          return;
        const s = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || mi("up", (c, l) => {
            const { onTap: u } = this.node.getProps();
            u && he.postRender(() => u(c, l));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = dt(this.node.current, "keyup", s), mi("down", (a, c) => {
          this.startPress(a, c);
        });
      }, n = dt(this.node.current, "keydown", t), r = () => {
        this.isPressing && mi("cancel", (o, s) => this.cancelPress(o, s));
      }, i = dt(this.node.current, "blur", r);
      this.removeAccessibleListeners = pt(n, i);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && he.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Pl();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && he.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = ht(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = dt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Wi = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), wg = (e) => {
  const t = Wi.get(e.target);
  t && t(e);
}, Pg = (e) => {
  e.forEach(wg);
};
function Eg({ root: e, ...t }) {
  const n = e || document;
  gi.has(n) || gi.set(n, {});
  const r = gi.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Pg, { root: e, ...t })), r[i];
}
function Ag(e, t, n) {
  const r = Eg(t);
  return Wi.set(e, n), r.observe(e), () => {
    Wi.delete(e), r.unobserve(e);
  };
}
const Rg = {
  some: 0,
  all: 1
};
class Og extends At {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Rg[i]
    }, a = (c) => {
      const { isIntersecting: l } = c;
      if (this.isInView === l || (this.isInView = l, o && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), d = l ? u : f;
      d && d(c);
    };
    return Ag(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Mg(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Mg({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const _g = {
  inView: {
    Feature: Og
  },
  tap: {
    Feature: Cg
  },
  focus: {
    Feature: Tg
  },
  hover: {
    Feature: Sg
  }
};
function Al(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function qr(e, t, n) {
  const r = e.getProps();
  return $o(r, t, n !== void 0 ? n : r.custom, e);
}
const lt = (e) => e * 1e3, mt = (e) => e / 1e3, kg = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, $g = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Vg = {
  type: "keyframes",
  duration: 0.8
}, Dg = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ig = (e, { keyframes: t }) => t.length > 2 ? Vg : Et.has(e) ? e.startsWith("scale") ? $g(t[1]) : kg : Dg;
function jg({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: c, elapsed: l, ...u }) {
  return !!Object.keys(u).length;
}
function Vo(e, t) {
  return e[t] || e.default || e;
}
const Bg = (e) => e !== null;
function Xr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Bg), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const Rl = (e) => /^0[^.\s]+$/u.test(e);
function Ng(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Rl(e) : !0;
}
const Ol = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Fg = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Lg(e) {
  const t = Fg.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const Wg = 4;
function Ml(e, t, n = 1) {
  Tt(n <= Wg, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, i] = Lg(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Ol(s) ? parseFloat(s) : s;
  }
  return Ao(i) ? Ml(i, t, n + 1) : i;
}
const Ug = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), ra = (e) => e === ln || e === N, ia = (e, t) => parseFloat(e.split(", ")[t]), oa = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return ia(i[1], t);
  {
    const o = r.match(/^matrix\((.+)\)$/u);
    return o ? ia(o[1], e) : 0;
  }
}, zg = /* @__PURE__ */ new Set(["x", "y", "z"]), Yg = Un.filter((e) => !zg.has(e));
function Kg(e) {
  const t = [];
  return Yg.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const rn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: oa(4, 13),
  y: oa(5, 14)
};
rn.translateX = rn.x;
rn.translateY = rn.y;
const _l = (e) => (t) => t.test(e), Gg = {
  test: (e) => e === "auto",
  parse: (e) => e
}, kl = [ln, N, ct, bt, Km, Ym, Gg], sa = (e) => kl.find(_l(e)), jt = /* @__PURE__ */ new Set();
let Ui = !1, zi = !1;
function $l() {
  if (zi) {
    const e = Array.from(jt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Kg(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, s]) => {
        var a;
        (a = r.getValue(o)) === null || a === void 0 || a.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  zi = !1, Ui = !1, jt.forEach((e) => e.complete()), jt.clear();
}
function Vl() {
  jt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (zi = !0);
  });
}
function Hg() {
  Vl(), $l();
}
class Do {
  constructor(t, n, r, i, o, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (jt.add(this), Ui || (Ui = !0, he.read(Vl), he.resolveKeyframes($l))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const c = r.readValue(n, a);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else
          t[o] = t[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), jt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, jt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Io = (e, t) => (n) => !!(zn(n) && Um.test(n) && n.startsWith(e) || t && !zm(n) && Object.prototype.hasOwnProperty.call(n, t)), Dl = (e, t, n) => (r) => {
  if (!zn(r))
    return r;
  const [i, o, s, a] = r.match(Po);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, qg = (e) => Ct(0, 255, e), yi = {
  ...ln,
  transform: (e) => Math.round(qg(e))
}, It = {
  test: Io("rgb", "red"),
  parse: Dl("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + yi.transform(e) + ", " + yi.transform(t) + ", " + yi.transform(n) + ", " + wn(Cn.transform(r)) + ")"
};
function Xg(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Yi = {
  test: Io("#"),
  parse: Xg,
  transform: It.transform
}, qt = {
  test: Io("hsl", "hue"),
  parse: Dl("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + ct.transform(wn(t)) + ", " + ct.transform(wn(n)) + ", " + wn(Cn.transform(r)) + ")"
}, Ie = {
  test: (e) => It.test(e) || Yi.test(e) || qt.test(e),
  parse: (e) => It.test(e) ? It.parse(e) : qt.test(e) ? qt.parse(e) : Yi.parse(e),
  transform: (e) => zn(e) ? e : e.hasOwnProperty("red") ? It.transform(e) : qt.transform(e)
};
function Zg(e) {
  var t, n;
  return isNaN(e) && zn(e) && (((t = e.match(Po)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Wm)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Il = "number", jl = "color", Jg = "var", Qg = "var(", aa = "${}", ey = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function $n(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = t.replace(ey, (c) => (Ie.test(c) ? (r.color.push(o), i.push(jl), n.push(Ie.parse(c))) : c.startsWith(Qg) ? (r.var.push(o), i.push(Jg), n.push(c)) : (r.number.push(o), i.push(Il), n.push(parseFloat(c))), ++o, aa)).split(aa);
  return { values: n, split: a, indexes: r, types: i };
}
function Bl(e) {
  return $n(e).values;
}
function Nl(e) {
  const { split: t, types: n } = $n(e), r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += t[s], i[s] !== void 0) {
        const a = n[s];
        a === Il ? o += wn(i[s]) : a === jl ? o += Ie.transform(i[s]) : o += i[s];
      }
    return o;
  };
}
const ty = (e) => typeof e == "number" ? 0 : e;
function ny(e) {
  const t = Bl(e);
  return Nl(e)(t.map(ty));
}
const wt = {
  test: Zg,
  parse: Bl,
  createTransformer: Nl,
  getAnimatableNone: ny
}, ry = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function iy(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Po) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = ry.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const oy = /\b([a-z-]*)\(.*?\)/gu, Ki = {
  ...wt,
  getAnimatableNone: (e) => {
    const t = e.match(oy);
    return t ? t.map(iy).join(" ") : e;
  }
}, sy = {
  ...Eo,
  // Color props
  color: Ie,
  backgroundColor: Ie,
  outlineColor: Ie,
  fill: Ie,
  stroke: Ie,
  // Border props
  borderColor: Ie,
  borderTopColor: Ie,
  borderRightColor: Ie,
  borderBottomColor: Ie,
  borderLeftColor: Ie,
  filter: Ki,
  WebkitFilter: Ki
}, jo = (e) => sy[e];
function Fl(e, t) {
  let n = jo(e);
  return n !== Ki && (n = wt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const ay = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function cy(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !ay.has(o) && $n(o).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const o of t)
      e[o] = Fl(n, i);
}
class Ll extends Do {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && (l = l.trim(), Ao(l))) {
        const u = Ml(l, n.current);
        u !== void 0 && (t[c] = u), c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !Ug.has(r) || t.length !== 2)
      return;
    const [i, o] = t, s = sa(i), a = sa(o);
    if (s !== a)
      if (ra(s) && ra(a))
        for (let c = 0; c < t.length; c++) {
          const l = t[c];
          typeof l == "string" && (t[c] = parseFloat(l));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      Ng(t[i]) && r.push(i);
    r.length && cy(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = rn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1, a = i[s];
    i[s] = rn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, l]) => {
      n.getValue(c).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Wl(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let hr;
function ly() {
  hr = void 0;
}
const gt = {
  now: () => (hr === void 0 && gt.set(ke.isProcessing || wm.useManualTiming ? ke.timestamp : performance.now()), hr),
  set: (e) => {
    hr = e, queueMicrotask(ly);
  }
}, ca = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(wt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function uy(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function fy(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], s = ca(i, t), a = ca(o, t);
  return cn(s === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !a ? !1 : uy(e) || n === "spring" && r;
}
const dy = 40;
class Ul {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = gt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > dy ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Hg(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = gt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: c, isGenerator: l } = this.options;
    if (!l && !fy(t, r, i, o))
      if (s)
        this.options.duration = 0;
      else {
        c == null || c(Xr(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function zl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const hy = 5;
function Yl(e, t, n) {
  const r = Math.max(t - hy, 0);
  return zl(n - e(r), t - r);
}
const vi = 1e-3, py = 0.01, la = 10, my = 0.05, gy = 1;
function yy({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, o;
  cn(e <= lt(la), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  s = Ct(my, gy, s), e = Ct(py, la, mt(e)), s < 1 ? (i = (l) => {
    const u = l * s, f = u * e, d = u - n, g = Gi(l, s), b = Math.exp(-f);
    return vi - d / g * b;
  }, o = (l) => {
    const f = l * s * e, d = f * n + n, g = Math.pow(s, 2) * Math.pow(l, 2) * e, b = Math.exp(-f), v = Gi(Math.pow(l, 2), s);
    return (-i(l) + vi > 0 ? -1 : 1) * ((d - g) * b) / v;
  }) : (i = (l) => {
    const u = Math.exp(-l * e), f = (l - n) * e + 1;
    return -vi + u * f;
  }, o = (l) => {
    const u = Math.exp(-l * e), f = (n - l) * (e * e);
    return u * f;
  });
  const a = 5 / e, c = by(i, o, a);
  if (e = lt(e), isNaN(c))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const l = Math.pow(c, 2) * r;
    return {
      stiffness: l,
      damping: s * 2 * Math.sqrt(r * l),
      duration: e
    };
  }
}
const vy = 12;
function by(e, t, n) {
  let r = n;
  for (let i = 1; i < vy; i++)
    r = r - e(r) / t(r);
  return r;
}
function Gi(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const xy = ["duration", "bounce"], Sy = ["stiffness", "damping", "mass"];
function ua(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Ty(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ua(e, Sy) && ua(e, xy)) {
    const n = yy(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Kl({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: c, mass: l, duration: u, velocity: f, isResolvedFromDuration: d } = Ty({
    ...r,
    velocity: -mt(r.velocity || 0)
  }), g = f || 0, b = c / (2 * Math.sqrt(a * l)), v = o - i, y = mt(Math.sqrt(a / l)), S = Math.abs(v) < 5;
  n || (n = S ? 0.01 : 2), t || (t = S ? 5e-3 : 0.5);
  let w;
  if (b < 1) {
    const x = Gi(y, b);
    w = (C) => {
      const p = Math.exp(-b * y * C);
      return o - p * ((g + b * y * v) / x * Math.sin(x * C) + v * Math.cos(x * C));
    };
  } else if (b === 1)
    w = (x) => o - Math.exp(-y * x) * (v + (g + y * v) * x);
  else {
    const x = y * Math.sqrt(b * b - 1);
    w = (C) => {
      const p = Math.exp(-b * y * C), M = Math.min(x * C, 300);
      return o - p * ((g + b * y * v) * Math.sinh(M) + x * v * Math.cosh(M)) / x;
    };
  }
  return {
    calculatedDuration: d && u || null,
    next: (x) => {
      const C = w(x);
      if (d)
        s.done = x >= u;
      else {
        let p = 0;
        b < 1 && (p = x === 0 ? lt(g) : Yl(w, x, C));
        const M = Math.abs(p) <= n, _ = Math.abs(o - C) <= t;
        s.done = M && _;
      }
      return s.value = s.done ? o : C, s;
    }
  };
}
function fa({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: c, restDelta: l = 0.5, restSpeed: u }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (V) => a !== void 0 && V < a || c !== void 0 && V > c, b = (V) => a === void 0 ? c : c === void 0 || Math.abs(a - V) < Math.abs(c - V) ? a : c;
  let v = n * t;
  const y = f + v, S = s === void 0 ? y : s(y);
  S !== y && (v = S - f);
  const w = (V) => -v * Math.exp(-V / r), x = (V) => S + w(V), C = (V) => {
    const h = w(V), A = x(V);
    d.done = Math.abs(h) <= l, d.value = d.done ? S : A;
  };
  let p, M;
  const _ = (V) => {
    g(d.value) && (p = V, M = Kl({
      keyframes: [d.value, b(d.value)],
      velocity: Yl(x, V, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: l,
      restSpeed: u
    }));
  };
  return _(0), {
    calculatedDuration: null,
    next: (V) => {
      let h = !1;
      return !M && p === void 0 && (h = !0, C(V), _(V)), p !== void 0 && V >= p ? M.next(V - p) : (!h && C(V), d);
    }
  };
}
const Gl = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Cy = 1e-7, wy = 12;
function Py(e, t, n, r, i) {
  let o, s, a = 0;
  do
    s = t + (n - t) / 2, o = Gl(s, r, i) - e, o > 0 ? n = s : t = s;
  while (Math.abs(o) > Cy && ++a < wy);
  return s;
}
function Kn(e, t, n, r) {
  if (e === t && n === r)
    return Ve;
  const i = (o) => Py(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Gl(i(o), t, r);
}
const Ey = Kn(0.42, 0, 1, 1), Ay = Kn(0, 0, 0.58, 1), Hl = Kn(0.42, 0, 0.58, 1), Ry = (e) => Array.isArray(e) && typeof e[0] != "number", ql = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Xl = (e) => (t) => 1 - e(1 - t), Bo = (e) => 1 - Math.sin(Math.acos(e)), Zl = Xl(Bo), Oy = ql(Bo), Jl = Kn(0.33, 1.53, 0.69, 0.99), No = Xl(Jl), My = ql(No), _y = (e) => (e *= 2) < 1 ? 0.5 * No(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), da = {
  linear: Ve,
  easeIn: Ey,
  easeInOut: Hl,
  easeOut: Ay,
  circIn: Bo,
  circInOut: Oy,
  circOut: Zl,
  backIn: No,
  backInOut: My,
  backOut: Jl,
  anticipate: _y
}, ha = (e) => {
  if (Array.isArray(e)) {
    Tt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, i] = e;
    return Kn(t, n, r, i);
  } else if (typeof e == "string")
    return Tt(da[e] !== void 0, `Invalid easing type '${e}'`), da[e];
  return e;
}, Vn = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, xe = (e, t, n) => e + (t - e) * n;
function bi(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ky({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, s = 0;
  if (!t)
    i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    i = bi(c, a, e + 1 / 3), o = bi(c, a, e), s = bi(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function wr(e, t) {
  return (n) => n > 0 ? t : e;
}
const xi = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, $y = [Yi, It, qt], Vy = (e) => $y.find((t) => t.test(e));
function pa(e) {
  const t = Vy(e);
  if (cn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === qt && (n = ky(n)), n;
}
const ma = (e, t) => {
  const n = pa(e), r = pa(t);
  if (!n || !r)
    return wr(e, t);
  const i = { ...n };
  return (o) => (i.red = xi(n.red, r.red, o), i.green = xi(n.green, r.green, o), i.blue = xi(n.blue, r.blue, o), i.alpha = xe(n.alpha, r.alpha, o), It.transform(i));
}, Hi = /* @__PURE__ */ new Set(["none", "hidden"]);
function Dy(e, t) {
  return Hi.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Iy(e, t) {
  return (n) => xe(e, t, n);
}
function Fo(e) {
  return typeof e == "number" ? Iy : typeof e == "string" ? Ao(e) ? wr : Ie.test(e) ? ma : Ny : Array.isArray(e) ? Ql : typeof e == "object" ? Ie.test(e) ? ma : jy : wr;
}
function Ql(e, t) {
  const n = [...e], r = n.length, i = e.map((o, s) => Fo(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n;
  };
}
function jy(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Fo(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function By(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], a = e.indexes[s][i[s]], c = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[o] = c, i[s]++;
  }
  return r;
}
const Ny = (e, t) => {
  const n = wt.createTransformer(t), r = $n(e), i = $n(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Hi.has(e) && !i.values.length || Hi.has(t) && !r.values.length ? Dy(e, t) : pt(Ql(By(r, i), i.values), n) : (cn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), wr(e, t));
};
function eu(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? xe(e, t, n) : Fo(e)(e, t);
}
function Fy(e, t, n) {
  const r = [], i = n || eu, o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[s] || Ve : t;
      a = pt(c, a);
    }
    r.push(a);
  }
  return r;
}
function Ly(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (Tt(o === t.length, "Both input and output ranges must be the same length"), o === 1)
    return () => t[0];
  if (o === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const s = Fy(t, r, i), a = s.length, c = (l) => {
    let u = 0;
    if (a > 1)
      for (; u < e.length - 2 && !(l < e[u + 1]); u++)
        ;
    const f = Vn(e[u], e[u + 1], l);
    return s[u](f);
  };
  return n ? (l) => c(Ct(e[0], e[o - 1], l)) : c;
}
function Wy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Vn(0, t, r);
    e.push(xe(n, 1, i));
  }
}
function Uy(e) {
  const t = [0];
  return Wy(t, e.length - 1), t;
}
function zy(e, t) {
  return e.map((n) => n * t);
}
function Yy(e, t) {
  return e.map(() => t || Hl).splice(0, e.length - 1);
}
function Pr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = Ry(r) ? r.map(ha) : ha(r), o = {
    done: !1,
    value: t[0]
  }, s = zy(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Uy(t),
    e
  ), a = Ly(s, t, {
    ease: Array.isArray(i) ? i : Yy(t, i)
  });
  return {
    calculatedDuration: e,
    next: (c) => (o.value = a(c), o.done = c >= e, o)
  };
}
const ga = 2e4;
function Ky(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ga; )
    t += n, r = e.next(t);
  return t >= ga ? 1 / 0 : t;
}
const Gy = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => he.update(t, !0),
    stop: () => vt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ke.isProcessing ? ke.timestamp : gt.now()
  };
}, Hy = {
  decay: fa,
  inertia: fa,
  tween: Pr,
  keyframes: Pr,
  spring: Kl
}, qy = (e) => e / 100;
class Lo extends Ul {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || Do, a = (c, l) => this.onKeyframesResolved(c, l);
    this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, a = Hy[n] || Pr;
    let c, l;
    a !== Pr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Tt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), c = pt(qy, eu(t[0], t[1])), t = [0, 100]);
    const u = a({ ...this.options, keyframes: t });
    o === "mirror" && (l = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), u.calculatedDuration === null && (u.calculatedDuration = Ky(u));
    const { calculatedDuration: f } = u, d = f + i, g = d * (r + 1) - i;
    return {
      generator: u,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: V } = this.options;
      return { done: !0, value: V[V.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: c, calculatedDuration: l, totalDuration: u, resolvedDuration: f } = r;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: g, repeatType: b, repeatDelay: v, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const S = this.currentTime - d * (this.speed >= 0 ? 1 : -1), w = this.speed >= 0 ? S < 0 : S > u;
    this.currentTime = Math.max(S, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let x = this.currentTime, C = o;
    if (g) {
      const V = Math.min(this.currentTime, u) / f;
      let h = Math.floor(V), A = V % 1;
      !A && V >= 1 && (A = 1), A === 1 && h--, h = Math.min(h, g + 1), !!(h % 2) && (b === "reverse" ? (A = 1 - A, v && (A -= v / f)) : b === "mirror" && (C = s)), x = Ct(0, 1, A) * f;
    }
    const p = w ? { done: !1, value: c[0] } : C.next(x);
    a && (p.value = a(p.value));
    let { done: M } = p;
    !w && l !== null && (M = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const _ = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return _ && i !== void 0 && (p.value = Xr(c, this.options, i)), y && y(p.value), _ && this.finish(), p;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? mt(t.calculatedDuration) : 0;
  }
  get time() {
    return mt(this.currentTime);
  }
  set time(t) {
    t = lt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = mt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = Gy, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const tu = (e) => Array.isArray(e) && typeof e[0] == "number";
function nu(e) {
  return !!(!e || typeof e == "string" && e in Wo || tu(e) || Array.isArray(e) && e.every(nu));
}
const xn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Wo = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: xn([0, 0.65, 0.55, 1]),
  circOut: xn([0.55, 0, 1, 0.45]),
  backIn: xn([0.31, 0.01, 0.66, -0.59]),
  backOut: xn([0.33, 1.53, 0.69, 0.99])
};
function Xy(e) {
  return ru(e) || Wo.easeOut;
}
function ru(e) {
  if (e)
    return tu(e) ? xn(e) : Array.isArray(e) ? e.map(Xy) : Wo[e];
}
function Zy(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a, times: c } = {}) {
  const l = { [t]: n };
  c && (l.offset = c);
  const u = ru(a);
  return Array.isArray(u) && (l.easing = u), e.animate(l, {
    delay: r,
    duration: i,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const Jy = Wl(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Er = 10, Qy = 2e4;
function e0(e) {
  return e.type === "spring" || !nu(e.ease);
}
function t0(e, t) {
  const n = new Lo({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < Qy; )
    r = n.sample(o), i.push(r.value), o += Er;
  return {
    times: void 0,
    keyframes: i,
    duration: o - Er,
    ease: "linear"
  };
}
class ya extends Ul {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    this.resolver = new Ll(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: i = 300, times: o, ease: s, type: a, motionValue: c, name: l, startTime: u } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if (e0(this.options)) {
      const { onComplete: d, onUpdate: g, motionValue: b, element: v, ...y } = this.options, S = t0(t, y);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), i = S.duration, o = S.times, s = S.ease, a = "keyframes";
    }
    const f = Zy(c.owner.current, l, t, { ...this.options, duration: i, times: o, ease: s });
    return f.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (f.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: d } = this.options;
      c.set(Xr(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: i,
      times: o,
      type: a,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return mt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return mt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = lt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Ve;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return Ve;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: l, onUpdate: u, onComplete: f, element: d, ...g } = this.options, b = new Lo({
        ...g,
        keyframes: r,
        duration: i,
        type: o,
        ease: s,
        times: a,
        isGenerator: !0
      }), v = lt(this.time);
      l.setWithVelocity(b.sample(v - Er).value, b.sample(v).value, Er);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: a } = t;
    return Jy() && r && bl.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && a !== "inertia";
  }
}
function n0(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t, s = (i === null ? 0 : i.value) / 100;
    n !== s && e(s), n = s;
  };
  return he.update(r, !0), () => vt(r);
}
const r0 = Wl(() => window.ScrollTimeline !== void 0);
class i0 {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (r0() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), n0((i) => {
          r.time = r.duration * i;
        }, t);
    });
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Uo = (e, t, n, r = {}, i, o, s) => (a) => {
  const c = Vo(r, e) || {}, l = c.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - lt(l);
  let f = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...c,
    delay: -u,
    onUpdate: (g) => {
      t.set(g), c.onUpdate && c.onUpdate(g);
    },
    onComplete: () => {
      a(), c.onComplete && c.onComplete(), s && s();
    },
    onStop: s,
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  jg(c) || (f = {
    ...f,
    ...Ig(e, f)
  }), f.duration && (f.duration = lt(f.duration)), f.repeatDelay && (f.repeatDelay = lt(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let d = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (d = !0)), d && !o && t.get() !== void 0) {
    const g = Xr(f.keyframes, c);
    if (g !== void 0)
      return he.update(() => {
        f.onUpdate(g), f.onComplete();
      }), new i0([]);
  }
  return !o && ya.supports(f) ? new ya(f) : new Lo(f);
};
class zo {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Kr(this.subscriptions, t), () => Gr(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const va = /* @__PURE__ */ new Set();
function Yo(e, t, n) {
  e || va.has(t) || (console.warn(t), va.add(t));
}
const ba = 30, o0 = (e) => !isNaN(parseFloat(e));
class iu {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.3.30", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const o = gt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = gt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = o0(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && Yo(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new zo());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), he.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = gt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ba)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ba);
    return zl(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Dn(e, t) {
  return new iu(e, t);
}
function s0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Dn(n));
}
function a0(e, t) {
  const n = qr(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = dg(o[s]);
    s0(e, s, a);
  }
}
function ou(e) {
  return e.getProps()[nl];
}
class c0 extends iu {
  constructor() {
    super(...arguments), this.output = [], this.counts = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = xl(t);
    if (!n)
      return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let i = !1;
    return () => {
      if (i)
        return;
      i = !0;
      const o = this.counts.get(n) - 1;
      this.counts.set(n, o), o === 0 && (Gr(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function l0(e) {
  return !!(je(e) && e.add);
}
function qi(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  let r = e.getValue("willChange");
  if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new c0("auto"), e.addValue("willChange", r)), l0(r))
    return r.add(t);
}
function u0({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function su(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...c } = t;
  r && (s = r);
  const l = [], u = i && e.animationState && e.animationState.getState()[i];
  for (const f in c) {
    const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null), g = c[f];
    if (g === void 0 || u && u0(u, f))
      continue;
    const b = {
      delay: n,
      ...Vo(s || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const S = ou(e);
      if (S) {
        const w = window.MotionHandoffAnimation(S, f, he);
        w !== null && (b.startTime = w, v = !0);
      }
    }
    d.start(Uo(f, d, g, e.shouldReduceMotion && Et.has(f) ? { type: !1 } : b, e, v, qi(e, f)));
    const y = d.animation;
    y && l.push(y);
  }
  return a && Promise.all(l).then(() => {
    he.update(() => {
      a && a0(e, a);
    });
  }), l;
}
function Xi(e, t, n = {}) {
  var r;
  const i = qr(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(su(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: d } = o;
    return f0(e, t, u + l, f, d, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [l, u] = c === "beforeChildren" ? [s, a] : [a, s];
    return l().then(() => u());
  } else
    return Promise.all([s(), a(n.delay)]);
}
function f0(e, t, n = 0, r = 0, i = 1, o) {
  const s = [], a = (e.variantChildren.size - 1) * r, c = i === 1 ? (l = 0) => l * r : (l = 0) => a - l * r;
  return Array.from(e.variantChildren).sort(d0).forEach((l, u) => {
    l.notify("AnimationStart", t), s.push(Xi(l, t, {
      ...o,
      delay: n + c(u)
    }).then(() => l.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function d0(e, t) {
  return e.sortNodePosition(t);
}
function h0(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Xi(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = Xi(e, t, n);
  else {
    const i = typeof t == "function" ? qr(e, t, n.custom) : t;
    r = Promise.all(su(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const p0 = [...To].reverse(), m0 = To.length;
function g0(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => h0(e, n, r)));
}
function y0(e) {
  let t = g0(e), n = xa(), r = !0;
  const i = (c) => (l, u) => {
    var f;
    const d = qr(e, u, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: g, transitionEnd: b, ...v } = d;
      l = { ...l, ...v, ...b };
    }
    return l;
  };
  function o(c) {
    t = c(e);
  }
  function s(c) {
    const l = e.getProps(), u = e.getVariantContext(!0) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, b = 1 / 0;
    for (let y = 0; y < m0; y++) {
      const S = p0[y], w = n[S], x = l[S] !== void 0 ? l[S] : u[S], C = _n(x), p = S === c ? w.isActive : null;
      p === !1 && (b = y);
      let M = x === u[S] && x !== l[S] && C;
      if (M && r && e.manuallyAnimateOnMount && (M = !1), w.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && p === null || // If we didn't and don't have any defined prop for this animation type
      !x && !w.prevProp || // Or if the prop doesn't define an animation
      kn(x) || typeof x == "boolean")
        continue;
      let V = v0(w.prevProp, x) || // If we're making this variant active, we want to always make it active
      S === c && w.isActive && !M && C || // If we removed a higher-priority variant (i is in reverse order)
      y > b && C, h = !1;
      const A = Array.isArray(x) ? x : [x];
      let I = A.reduce(i(S), {});
      p === !1 && (I = {});
      const { prevResolvedValues: j = {} } = w, K = {
        ...j,
        ...I
      }, Z = (G) => {
        V = !0, d.has(G) && (h = !0, d.delete(G)), w.needsAnimating[G] = !0;
        const J = e.getValue(G);
        J && (J.liveStyle = !1);
      };
      for (const G in K) {
        const J = I[G], pe = j[G];
        if (g.hasOwnProperty(G))
          continue;
        let be = !1;
        Li(J) && Li(pe) ? be = !Al(J, pe) : be = J !== pe, be ? J != null ? Z(G) : d.add(G) : J !== void 0 && d.has(G) ? Z(G) : w.protectedKeys[G] = !0;
      }
      w.prevProp = x, w.prevResolvedValues = I, w.isActive && (g = { ...g, ...I }), r && e.blockInitialAnimation && (V = !1), V && (!M || h) && f.push(...A.map((G) => ({
        animation: G,
        options: { type: S }
      })));
    }
    if (d.size) {
      const y = {};
      d.forEach((S) => {
        const w = e.getBaseTarget(S), x = e.getValue(S);
        x && (x.liveStyle = !0), y[S] = w ?? null;
      }), f.push({ animation: y });
    }
    let v = !!f.length;
    return r && (l.initial === !1 || l.initial === l.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
  }
  function a(c, l) {
    var u;
    if (n[c].isActive === l)
      return Promise.resolve();
    (u = e.variantChildren) === null || u === void 0 || u.forEach((d) => {
      var g;
      return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(c, l);
    }), n[c].isActive = l;
    const f = s(c);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = xa(), r = !0;
    }
  };
}
function v0(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Al(t, e) : !1;
}
function _t(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function xa() {
  return {
    animate: _t(!0),
    whileInView: _t(),
    whileHover: _t(),
    whileTap: _t(),
    whileDrag: _t(),
    whileFocus: _t(),
    exit: _t()
  };
}
class b0 extends At {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = y0(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    kn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let x0 = 0;
class S0 extends At {
  constructor() {
    super(...arguments), this.id = x0++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const T0 = {
  animation: {
    Feature: b0
  },
  exit: {
    Feature: S0
  }
}, Sa = (e, t) => Math.abs(e - t);
function C0(e, t) {
  const n = Sa(e.x, t.x), r = Sa(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class au {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Ti(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = C0(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: b } = f, { timestamp: v } = ke;
      this.history.push({ ...b, timestamp: v });
      const { onStart: y, onMove: S } = this.handlers;
      d || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Si(d, this.transformPagePoint), he.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: b, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = Ti(f.type === "pointercancel" ? this.lastMoveEventInfo : Si(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, y), b && b(f, y);
    }, !Tl(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const s = Hr(t), a = Si(s, this.transformPagePoint), { point: c } = a, { timestamp: l } = ke;
    this.history = [{ ...c, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Ti(a, this.history)), this.removeListeners = pt(ht(this.contextWindow, "pointermove", this.handlePointerMove), ht(this.contextWindow, "pointerup", this.handlePointerUp), ht(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), vt(this.updatePoint);
  }
}
function Si(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ta(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ti({ point: e }, t) {
  return {
    point: e,
    delta: Ta(e, cu(t)),
    offset: Ta(e, w0(t)),
    velocity: P0(t, 0.1)
  };
}
function w0(e) {
  return e[0];
}
function cu(e) {
  return e[e.length - 1];
}
function P0(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = cu(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > lt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = mt(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const lu = 1e-4, E0 = 1 - lu, A0 = 1 + lu, uu = 0.01, R0 = 0 - uu, O0 = 0 + uu;
function He(e) {
  return e.max - e.min;
}
function M0(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ca(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = xe(t.min, t.max, e.origin), e.scale = He(n) / He(t), e.translate = xe(n.min, n.max, e.origin) - e.originPoint, (e.scale >= E0 && e.scale <= A0 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= R0 && e.translate <= O0 || isNaN(e.translate)) && (e.translate = 0);
}
function Pn(e, t, n, r) {
  Ca(e.x, t.x, n.x, r ? r.originX : void 0), Ca(e.y, t.y, n.y, r ? r.originY : void 0);
}
function wa(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + He(t);
}
function _0(e, t, n) {
  wa(e.x, t.x, n.x), wa(e.y, t.y, n.y);
}
function Pa(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + He(t);
}
function En(e, t, n) {
  Pa(e.x, t.x, n.x), Pa(e.y, t.y, n.y);
}
function k0(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? xe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? xe(n, e, r.max) : Math.min(e, n)), e;
}
function Ea(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function $0(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Ea(e.x, n, i),
    y: Ea(e.y, t, r)
  };
}
function Aa(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function V0(e, t) {
  return {
    x: Aa(e.x, t.x),
    y: Aa(e.y, t.y)
  };
}
function D0(e, t) {
  let n = 0.5;
  const r = He(e), i = He(t);
  return i > r ? n = Vn(t.min, t.max - r, e.min) : r > i && (n = Vn(e.min, e.max - i, t.min)), Ct(0, 1, n);
}
function I0(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Zi = 0.35;
function j0(e = Zi) {
  return e === !1 ? e = 0 : e === !0 && (e = Zi), {
    x: Ra(e, "left", "right"),
    y: Ra(e, "top", "bottom")
  };
}
function Ra(e, t, n) {
  return {
    min: Oa(e, t),
    max: Oa(e, n)
  };
}
function Oa(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ma = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Xt = () => ({
  x: Ma(),
  y: Ma()
}), _a = () => ({ min: 0, max: 0 }), Ee = () => ({
  x: _a(),
  y: _a()
});
function Je(e) {
  return [e("x"), e("y")];
}
function fu({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function B0({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function N0(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Ci(e) {
  return e === void 0 || e === 1;
}
function Ji({ scale: e, scaleX: t, scaleY: n }) {
  return !Ci(e) || !Ci(t) || !Ci(n);
}
function kt(e) {
  return Ji(e) || du(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function du(e) {
  return ka(e.x) || ka(e.y);
}
function ka(e) {
  return e && e !== "0%";
}
function Ar(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function $a(e, t, n, r, i) {
  return i !== void 0 && (e = Ar(e, i, r)), Ar(e, n, r) + t;
}
function Qi(e, t = 0, n = 1, r, i) {
  e.min = $a(e.min, t, n, r, i), e.max = $a(e.max, t, n, r, i);
}
function hu(e, { x: t, y: n }) {
  Qi(e.x, t.translate, t.scale, t.originPoint), Qi(e.y, n.translate, n.scale, n.originPoint);
}
const Va = 0.999999999999, Da = 1.0000000000001;
function F0(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    o = n[a], s = o.projectionDelta;
    const { visualElement: c } = o.options;
    c && c.props.style && c.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Jt(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, hu(e, s)), r && kt(o.latestValues) && Jt(e, o.latestValues));
  }
  t.x < Da && t.x > Va && (t.x = 1), t.y < Da && t.y > Va && (t.y = 1);
}
function Zt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ia(e, t, n, r, i = 0.5) {
  const o = xe(e.min, e.max, i);
  Qi(e, t, n, o, r);
}
function Jt(e, t) {
  Ia(e.x, t.x, t.scaleX, t.scale, t.originX), Ia(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function pu(e, t) {
  return fu(N0(e.getBoundingClientRect(), t));
}
function L0(e, t, n) {
  const r = pu(e, n), { scroll: i } = t;
  return i && (Zt(r.x, i.offset.x), Zt(r.y, i.offset.y)), r;
}
const mu = ({ current: e }) => e ? e.ownerDocument.defaultView : null, W0 = /* @__PURE__ */ new WeakMap();
class U0 {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ee(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (u) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Hr(u, "page").point);
    }, o = (u, f) => {
      var d;
      const { drag: g, dragPropagation: b, onDragStart: v } = this.getProps();
      if (g && !b && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = wl(g), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Je((S) => {
        let w = this.getAxisMotionValue(S).get() || 0;
        if (ct.test(w)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const C = x.layout.layoutBox[S];
            C && (w = He(C) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[S] = w;
      }), v && he.postRender(() => v(u, f)), (d = this.removeWillChange) === null || d === void 0 || d.call(this), this.removeWillChange = qi(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, s = (u, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: b, onDrag: v } = this.getProps();
      if (!d && !this.openGlobalLock)
        return;
      const { offset: y } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = z0(y), this.currentDirection !== null && b && b(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), v && v(u, f);
    }, a = (u, f) => this.stop(u, f), c = () => Je((u) => {
      var f;
      return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new au(t, {
      onSessionStart: i,
      onStart: o,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      contextWindow: mu(this.visualElement)
    });
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && he.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !or(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = k0(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && Ht(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = $0(i.layoutBox, n) : this.constraints = !1, this.elastic = j0(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Je((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = I0(i.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ht(t))
      return !1;
    const r = t.current;
    Tt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = L0(r, i.root, this.visualElement.getTransformPagePoint());
    let s = V0(i.layout.layoutBox, o);
    if (n) {
      const a = n(B0(s));
      this.hasMutatedConstraints = !!a, a && (s = fu(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, l = Je((u) => {
      if (!or(u, n, this.currentDirection))
        return;
      let f = c && c[u] || {};
      s && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, g = i ? 40 : 1e7, b = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: d,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(u, b);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Uo(t, r, 0, n, this.visualElement, !1, qi(this.visualElement, t)));
  }
  stopAnimation() {
    Je((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Je((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Je((n) => {
      const { drag: r } = this.getProps();
      if (!or(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - xe(s, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Ht(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Je((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const c = a.get();
        i[s] = D0({ min: c, max: c }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Je((s) => {
      if (!or(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: c, max: l } = this.constraints[s];
      a.set(xe(c, l, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    W0.set(this.visualElement, this);
    const t = this.visualElement.current, n = ht(t, "pointerdown", (c) => {
      const { drag: l, dragListener: u = !0 } = this.getProps();
      l && u && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      Ht(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), he.read(r);
    const s = dt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: l }) => {
      this.isDragging && l && (Je((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += c[u].translate, f.set(f.get() + c[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Zi, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function or(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function z0(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Y0 extends At {
  constructor(t) {
    super(t), this.removeGroupControls = Ve, this.removeListeners = Ve, this.controls = new U0(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ve;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ja = (e) => (t, n) => {
  e && he.postRender(() => e(t, n));
};
class K0 extends At {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ve;
  }
  onPointerDown(t) {
    this.session = new au(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: mu(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: ja(t),
      onStart: ja(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && he.postRender(() => i(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ht(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function G0() {
  const e = Ne(bo);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, i = Zu();
  to(() => r(i), []);
  const o = lc(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const pr = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ba(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const yn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (N.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Ba(e, t.target.x), r = Ba(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, H0 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = wt.parse(e);
    if (i.length > 5)
      return r;
    const o = wt.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, c = n.y.scale * t.y;
    i[0 + s] /= a, i[1 + s] /= c;
    const l = xe(a, c, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= l), typeof i[3 + s] == "number" && (i[3 + s] /= l), o(i);
  }
};
class q0 extends Ju {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
    Lm(X0), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), pr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
    return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || he.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), So.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function gu(e) {
  const [t, n] = G0(), r = Ne(al);
  return te.jsx(q0, { ...e, layoutGroup: r, switchLayoutGroup: Ne(il), isPresent: t, safeToRemove: n });
}
const X0 = {
  borderRadius: {
    ...yn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: yn,
  borderTopRightRadius: yn,
  borderBottomLeftRadius: yn,
  borderBottomRightRadius: yn,
  boxShadow: H0
}, yu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Z0 = yu.length, Na = (e) => typeof e == "string" ? parseFloat(e) : e, Fa = (e) => typeof e == "number" || N.test(e);
function J0(e, t, n, r, i, o) {
  i ? (e.opacity = xe(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Q0(r)
  ), e.opacityExit = xe(t.opacity !== void 0 ? t.opacity : 1, 0, ev(r))) : o && (e.opacity = xe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < Z0; s++) {
    const a = `border${yu[s]}Radius`;
    let c = La(t, a), l = La(n, a);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || Fa(c) === Fa(l) ? (e[a] = Math.max(xe(Na(c), Na(l), r), 0), (ct.test(l) || ct.test(c)) && (e[a] += "%")) : e[a] = l;
  }
  (t.rotate || n.rotate) && (e.rotate = xe(t.rotate || 0, n.rotate || 0, r));
}
function La(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Q0 = vu(0, 0.5, Zl), ev = vu(0.5, 0.95, Ve);
function vu(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Vn(e, t, r));
}
function Wa(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ze(e, t) {
  Wa(e.x, t.x), Wa(e.y, t.y);
}
function Ua(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function za(e, t, n, r, i) {
  return e -= t, e = Ar(e, 1 / n, r), i !== void 0 && (e = Ar(e, 1 / i, r)), e;
}
function tv(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (ct.test(t) && (t = parseFloat(t), t = xe(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = xe(o.min, o.max, r);
  e === o && (a -= t), e.min = za(e.min, t, n, a, i), e.max = za(e.max, t, n, a, i);
}
function Ya(e, t, [n, r, i], o, s) {
  tv(e, t[n], t[r], t[i], t.scale, o, s);
}
const nv = ["x", "scaleX", "originX"], rv = ["y", "scaleY", "originY"];
function Ka(e, t, n, r) {
  Ya(e.x, t, nv, n ? n.x : void 0, r ? r.x : void 0), Ya(e.y, t, rv, n ? n.y : void 0, r ? r.y : void 0);
}
function Ga(e) {
  return e.translate === 0 && e.scale === 1;
}
function bu(e) {
  return Ga(e.x) && Ga(e.y);
}
function Ha(e, t) {
  return e.min === t.min && e.max === t.max;
}
function iv(e, t) {
  return Ha(e.x, t.x) && Ha(e.y, t.y);
}
function qa(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function xu(e, t) {
  return qa(e.x, t.x) && qa(e.y, t.y);
}
function Xa(e) {
  return He(e.x) / He(e.y);
}
function Za(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class ov {
  constructor() {
    this.members = [];
  }
  add(t) {
    Kr(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Gr(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function sv(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: l, rotate: u, rotateX: f, rotateY: d, skewX: g, skewY: b } = n;
    l && (r = `perspective(${l}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), b && (r += `skewY(${b}deg) `);
  }
  const a = e.x.scale * t.x, c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none";
}
const av = (e, t) => e.depth - t.depth;
class cv {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Kr(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Gr(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(av), this.isDirty = !1, this.children.forEach(t);
  }
}
function lv(e, t) {
  const n = gt.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (vt(r), e(o - t));
  };
  return he.read(r, !0), () => vt(r);
}
function uv(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function fv(e, t, n) {
  const r = je(e) ? e : Dn(e);
  return r.start(Uo("", r, t, n)), r.animation;
}
const $t = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Sn = typeof window < "u" && window.MotionDebug !== void 0, wi = ["", "X", "Y", "Z"], dv = { visibility: "hidden" }, Ja = 1e3;
let hv = 0;
function Pi(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Su(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = ou(t);
  window.MotionHasOptimisedTransformAnimation(n) && window.MotionCancelOptimisedTransform(n);
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Su(r);
}
function Tu({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      this.id = hv++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Sn && ($t.totalNodes = $t.resolvedTargetDeltas = $t.recalculatedProjection = 0), this.nodes.forEach(gv), this.nodes.forEach(Sv), this.nodes.forEach(Tv), this.nodes.forEach(yv), Sn && window.MotionDebug.record($t);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cv());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new zo()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const c = this.eventHandlers.get(s);
      c && c.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = uv(s), this.instance = s;
      const { layoutId: c, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (l || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = lv(d, 250), pr.hasAnimatedSinceResize && (pr.hasAnimatedSinceResize = !1, this.nodes.forEach(ec));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && u && (c || l) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: b }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || u.getDefaultTransition() || Av, { onLayoutAnimationStart: y, onLayoutAnimationComplete: S } = u.getProps(), w = !this.targetLayout || !xu(this.targetLayout, b) || g, x = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || x || d && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, x);
          const C = {
            ...Vo(v, "layout"),
            onPlay: y,
            onComplete: S
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C);
        } else
          d || ec(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = b;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, vt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Cv), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedTransform && !this.hasCheckedOptimisedAppear && Su(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Qa);
        return;
      }
      this.isUpdating || this.nodes.forEach(bv), this.isUpdating = !1, this.nodes.forEach(xv), this.nodes.forEach(pv), this.nodes.forEach(mv), this.clearAllSnapshots();
      const a = gt.now();
      ke.delta = Ct(0, 1e3 / 60, a - ke.timestamp), ke.timestamp = a, ke.isProcessing = !0, pi.update.process(ke), pi.preRender.process(ke), pi.render.process(ke), ke.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, So.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(vv), this.sharedNodes.forEach(wv);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, he.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      he.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Ee(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !bu(this.projectionDelta), c = this.getTransformTemplate(), l = c ? c(this.latestValues, "") : void 0, u = l !== this.prevTransformTemplateValue;
      s && (a || kt(this.latestValues) || u) && (i(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return s && (c = this.removeTransform(c)), Rv(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a)
        return Ee();
      const c = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(Ov))) {
        const { scroll: u } = this.root;
        u && (Zt(c.x, u.offset.x), Zt(c.y, u.offset.y));
      }
      return c;
    }
    removeElementScroll(s) {
      var a;
      const c = Ee();
      if (Ze(c, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return c;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: f, options: d } = u;
        u !== this.root && f && d.layoutScroll && (f.wasRoot && Ze(c, s), Zt(c.x, f.offset.x), Zt(c.y, f.offset.y));
      }
      return c;
    }
    applyTransform(s, a = !1) {
      const c = Ee();
      Ze(c, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && Jt(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), kt(u.latestValues) && Jt(c, u.latestValues);
      }
      return kt(this.latestValues) && Jt(c, this.latestValues), c;
    }
    removeTransform(s) {
      const a = Ee();
      Ze(a, s);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !kt(l.latestValues))
          continue;
        Ji(l.latestValues) && l.updateSnapshot();
        const u = Ee(), f = l.measurePageBox();
        Ze(u, f), Ka(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return kt(this.latestValues) && Ka(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ke.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== c;
      if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = ke.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ee(), this.relativeTargetOrigin = Ee(), En(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ee(), this.targetWithTransforms = Ee()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), _0(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ze(this.target, this.layout.layoutBox), hu(this.target, this.targetDelta)) : Ze(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ee(), this.relativeTargetOrigin = Ee(), En(this.relativeTargetOrigin, this.target, g.target), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Sn && $t.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ji(this.parent.latestValues) || du(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(), c = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (l = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ke.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f))
        return;
      Ze(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      F0(this.layoutCorrected, this.treeScale, this.path, c), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Ee());
      const { target: b } = a;
      if (!b) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ua(this.prevProjectionDelta.x, this.projectionDelta.x), Ua(this.prevProjectionDelta.y, this.projectionDelta.y)), Pn(this.projectionDelta, this.layoutCorrected, b, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !Za(this.projectionDelta.x, this.prevProjectionDelta.x) || !Za(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b)), Sn && $t.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Xt(), this.projectionDelta = Xt(), this.projectionDeltaWithTransform = Xt();
    }
    setAnimationOrigin(s, a = !1) {
      const c = this.snapshot, l = c ? c.latestValues : {}, u = { ...this.latestValues }, f = Xt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = Ee(), g = c ? c.source : void 0, b = this.layout ? this.layout.source : void 0, v = g !== b, y = this.getStack(), S = !y || y.members.length <= 1, w = !!(v && !S && this.options.crossfade === !0 && !this.path.some(Ev));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (C) => {
        const p = C / 1e3;
        tc(f.x, s.x, p), tc(f.y, s.y, p), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (En(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Pv(this.relativeTarget, this.relativeTargetOrigin, d, p), x && iv(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = Ee()), Ze(x, this.relativeTarget)), v && (this.animationValues = u, J0(u, l, this.latestValues, p, w, S)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = p;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (vt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = he.update(() => {
        pr.hasAnimatedSinceResize = !0, this.currentAnimation = fv(0, Ja, {
          ...s,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ja), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = s;
      if (!(!a || !c || !l)) {
        if (this !== s && this.layout && l && Cu(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || Ee();
          const f = He(this.layout.layoutBox.x);
          c.x.min = s.target.x.min, c.x.max = c.x.min + f;
          const d = He(this.layout.layoutBox.y);
          c.y.min = s.target.y.min, c.y.max = c.y.min + d;
        }
        Ze(a, c), Jt(a, u), Pn(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new ov()), this.sharedNodes.get(s).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: c } = s;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const l = {};
      c.z && Pi("z", s, l, this.animationValues);
      for (let u = 0; u < wi.length; u++)
        Pi(`rotate${wi[u]}`, s, l, this.animationValues), Pi(`skew${wi[u]}`, s, l, this.animationValues);
      s.render();
      for (const u in l)
        s.setStaticValue(u, l[u]), this.animationValues && (this.animationValues[u] = l[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, c;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return dv;
      const l = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, l.opacity = "", l.pointerEvents = dr(s == null ? void 0 : s.pointerEvents) || "", l.transform = u ? u(this.latestValues, "") : "none", l;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = dr(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !kt(this.latestValues) && (v.transform = u ? u({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), l.transform = sv(this.projectionDeltaWithTransform, this.treeScale, d), u && (l.transform = u(d, l.transform));
      const { x: g, y: b } = this.projectionDelta;
      l.transformOrigin = `${g.origin * 100}% ${b.origin * 100}% 0`, f.animationValues ? l.opacity = f === this ? (c = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : l.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in Tr) {
        if (d[v] === void 0)
          continue;
        const { correct: y, applyTo: S } = Tr[v], w = l.transform === "none" ? d[v] : y(d[v], f);
        if (S) {
          const x = S.length;
          for (let C = 0; C < x; C++)
            l[S[C]] = w;
        } else
          l[v] = w;
      }
      return this.options.layoutId && (l.pointerEvents = f === this ? dr(s == null ? void 0 : s.pointerEvents) || "" : "none"), l;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Qa), this.root.sharedNodes.clear();
    }
  };
}
function pv(e) {
  e.updateLayout();
}
function mv(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
    o === "size" ? Je((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], g = He(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : Cu(o, n.layoutBox, r) && Je((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], g = He(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const a = Xt();
    Pn(a, r, n.layoutBox);
    const c = Xt();
    s ? Pn(c, e.applyTransform(i, !0), n.measuredBox) : Pn(c, r, n.layoutBox);
    const l = !bu(a);
    let u = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const b = Ee();
          En(b, n.layoutBox, d.layoutBox);
          const v = Ee();
          En(v, r, g.layoutBox), xu(b, v) || (u = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = b, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function gv(e) {
  Sn && $t.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function yv(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function vv(e) {
  e.clearSnapshot();
}
function Qa(e) {
  e.clearMeasurements();
}
function bv(e) {
  e.isLayoutDirty = !1;
}
function xv(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ec(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Sv(e) {
  e.resolveTargetDelta();
}
function Tv(e) {
  e.calcProjection();
}
function Cv(e) {
  e.resetSkewAndRotation();
}
function wv(e) {
  e.removeLeadSnapshot();
}
function tc(e, t, n) {
  e.translate = xe(t.translate, 0, n), e.scale = xe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function nc(e, t, n, r) {
  e.min = xe(t.min, n.min, r), e.max = xe(t.max, n.max, r);
}
function Pv(e, t, n, r) {
  nc(e.x, t.x, n.x, r), nc(e.y, t.y, n.y, r);
}
function Ev(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Av = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, rc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), ic = rc("applewebkit/") && !rc("chrome/") ? Math.round : Ve;
function oc(e) {
  e.min = ic(e.min), e.max = ic(e.max);
}
function Rv(e) {
  oc(e.x), oc(e.y);
}
function Cu(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !M0(Xa(t), Xa(n), 0.2);
}
function Ov(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Mv = Tu({
  attachResizeListener: (e, t) => dt(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ei = {
  current: void 0
}, wu = Tu({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ei.current) {
      const e = new Mv({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ei.current = e;
    }
    return Ei.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), _v = {
  pan: {
    Feature: K0
  },
  drag: {
    Feature: Y0,
    ProjectionNode: wu,
    MeasureLayout: gu
  }
}, eo = { current: null }, Pu = { current: !1 };
function kv() {
  if (Pu.current = !0, !!xo)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => eo.current = e.matches;
      e.addListener(t), t();
    } else
      eo.current = !1;
}
function $v(e, t, n) {
  for (const r in t) {
    const i = t[r], o = n[r];
    if (je(i))
      e.addValue(r, i), process.env.NODE_ENV === "development" && Yo(i.version === "11.3.30", `Attempting to mix Framer Motion versions ${i.version} with 11.3.30 may not work as expected.`);
    else if (je(o))
      e.addValue(r, Dn(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Dn(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const sc = /* @__PURE__ */ new WeakMap(), Vv = [...kl, Ie, wt], Dv = (e) => Vv.find(_l(e)), ac = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], Iv = Co.length;
class jv {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, a = {}) {
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Do, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, he.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l } = s;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Yr(n), this.isVariantNode = sl(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const g = f[d];
      c[d] !== void 0 && je(g) && g.set(c[d], !1);
    }
  }
  mount(t) {
    this.current = t, sc.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Pu.current || kv(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : eo.current, process.env.NODE_ENV !== "production" && Yo(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    sc.delete(this.current), this.projection && this.projection.unmount(), vt(this.notifyUpdate), vt(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Et.has(t), i = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && he.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in nn) {
      const n = nn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < ac.length; r++) {
      const i = ac[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = $v(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < Iv; r++) {
      const i = Co[r], o = this.props[i];
      (_n(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Dn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (Ol(i) || Rl(i)) ? i = parseFloat(i) : !Dv(i) && wt.test(n) && (i = Fl(t, n)), this.setBaseTarget(t, je(i) ? i.get() : i)), je(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = $o(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (i = s[t]);
    }
    if (r && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !je(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new zo()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Eu extends jv {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ll;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function Bv(e) {
  return window.getComputedStyle(e);
}
class Nv extends Eu {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = ml;
  }
  readValueFromInstance(t, n) {
    if (Et.has(n)) {
      const r = jo(n);
      return r && r.default || 0;
    } else {
      const r = Bv(t), i = (fl(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return pu(t, n);
  }
  build(t, n, r) {
    Ro(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ko(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    je(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Fv extends Eu {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ee;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Et.has(n)) {
      const r = jo(n);
      return r && r.default || 0;
    }
    return n = gl.has(n) ? n : zr(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return vl(t, n, r);
  }
  build(t, n, r) {
    Mo(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    yl(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = _o(t.tagName), super.mount(t);
  }
}
const Lv = (e, t) => wo(e) ? new Fv(t) : new Nv(t, {
  allowProjection: e !== uc
}), Wv = {
  layout: {
    ProjectionNode: wu,
    MeasureLayout: gu
  }
}, Uv = {
  ...T0,
  ..._g,
  ..._v,
  ...Wv
}, zv = /* @__PURE__ */ Nm((e, t) => vg(e, t, Uv, Lv)), qv = ({
  title: e,
  items: t,
  buttonText: n,
  buttonAction: r
}) => {
  const [i, o] = ts(t), [s, a] = ts(null), c = (u) => {
    a(u), setTimeout(() => {
      o((f) => f.filter((d, g) => g !== u)), a(null);
    }, 500);
  }, l = (u) => {
    r && r(), c(u);
  };
  return /* @__PURE__ */ te.jsxs("div", { children: [
    e && /* @__PURE__ */ te.jsx("p", { style: { paddingBottom: "8px", fontWeight: "bold" }, children: e }),
    i.length > 0 ? i.map(
      (u, f) => f < 4 && /* @__PURE__ */ te.jsx(
        zv.div,
        {
          initial: { opacity: 1 },
          animate: { opacity: s === f ? 0 : 1 },
          transition: { duration: 0.5 },
          style: { marginBottom: "-1px" },
          children: /* @__PURE__ */ te.jsx(
            Sm,
            {
              subheading: u.subheading,
              title: u.title,
              subtitle: u.subtitle,
              buttonText: n,
              thumbnail: u.thumbnail,
              index: f,
              onRemove: () => c(f),
              onAction: () => l(f)
            }
          )
        },
        f
      )
    ) : /* @__PURE__ */ te.jsx(
      ft,
      {
        sx: {
          border: "1px solid #E6E6E6",
          padding: "10px 12px",
          borderRadius: "5px"
        },
        children: /* @__PURE__ */ te.jsx(
          "p",
          {
            style: {
              textAlign: "center",
              color: "#868686",
              padding: "16px 8px"
            },
            children: "No items to show."
          }
        )
      }
    )
  ] });
};
export {
  qv as ItemBox,
  qv as RecommendedList
};
//# sourceMappingURL=react-vite-recommended-lists.es.js.map
