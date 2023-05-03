(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        cced10b079020449fa4d: function(e, r, n) {
            var t;
            ! function(i) {
                "use strict";
                var o, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    f = Math.floor,
                    c = "[BigNumber Error] ",
                    l = c + "Number primitive has more than 15 significant digits: ",
                    a = 1e14,
                    h = 14,
                    p = 9007199254740991,
                    g = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    w = 1e7,
                    m = 1e9;

                function d(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function v(e) {
                    for (var r, n, t = 1, i = e.length, o = e[0] + ""; t < i;) {
                        for (r = e[t++] + "", n = h - r.length; n--; r = "0" + r);
                        o += r
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function N(e, r) {
                    var n, t, i = e.c,
                        o = r.c,
                        s = e.s,
                        u = r.s,
                        f = e.e,
                        c = r.e;
                    if (!s || !u) return null;
                    if (n = i && !i[0], t = o && !o[0], n || t) return n ? t ? 0 : -u : s;
                    if (s != u) return s;
                    if (n = s < 0, t = f == c, !i || !o) return t ? 0 : !i ^ n ? 1 : -1;
                    if (!t) return f > c ^ n ? 1 : -1;
                    for (u = (f = i.length) < (c = o.length) ? f : c, s = 0; s < u; s++)
                        if (i[s] != o[s]) return i[s] > o[s] ^ n ? 1 : -1;
                    return f == c ? 0 : f > c ^ n ? 1 : -1
                }

                function O(e, r, n, t) {
                    if (e < r || e > n || e !== f(e)) throw Error(c + (t || "Argument") + ("number" == typeof e ? e < r || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function b(e) {
                    var r = e.c.length - 1;
                    return d(e.e / h) == r && e.c[r] % 2 != 0
                }

                function y(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function E(e, r, n) {
                    var t, i;
                    if (r < 0) {
                        for (i = n + "."; ++r; i += n);
                        e = i + e
                    } else if (++r > (t = e.length)) {
                        for (i = n, r -= t; --r; i += n);
                        e += i
                    } else r < t && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }(o = function e(r) {
                    var n, t, i, o, A, S, R, _, D, P = $.prototype = {
                            constructor: $,
                            toString: null,
                            valueOf: null
                        },
                        B = new $(1),
                        L = 20,
                        x = 4,
                        U = -7,
                        I = 21,
                        T = -1e7,
                        C = 1e7,
                        M = !1,
                        k = 1,
                        G = 0,
                        F = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: "\xa0",
                            suffix: ""
                        },
                        q = "0123456789abcdefghijklmnopqrstuvwxyz",
                        j = !0;

                    function $(e, r) {
                        var n, o, u, c, a, g, w, m, d = this;
                        if (!(d instanceof $)) return new $(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return d.s = e.s, void(!e.c || e.e > C ? d.c = d.e = null : e.e < T ? d.c = [d.e = 0] : (d.e = e.e, d.c = e.c.slice()));
                            if ((g = "number" == typeof e) && 0 * e == 0) {
                                if (d.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (c = 0, a = e; a >= 10; a /= 10, c++);
                                    return void(c > C ? d.c = d.e = null : (d.e = c, d.c = [e]))
                                }
                                m = String(e)
                            } else {
                                if (!s.test(m = String(e))) return i(d, m, g);
                                d.s = 45 == m.charCodeAt(0) ? (m = m.slice(1), -1) : 1
                            }(c = m.indexOf(".")) > -1 && (m = m.replace(".", "")), (a = m.search(/e/i)) > 0 ? (c < 0 && (c = a), c += +m.slice(a + 1), m = m.substring(0, a)) : c < 0 && (c = m.length)
                        } else {
                            if (O(r, 2, q.length, "Base"), 10 == r && j) return W(d = new $(e), L + d.e + 1, x);
                            if (m = String(e), g = "number" == typeof e) {
                                if (0 * e != 0) return i(d, m, g, r);
                                if (d.s = 1 / e < 0 ? (m = m.slice(1), -1) : 1, $.DEBUG && m.replace(/^0\.0*|\./, "").length > 15) throw Error(l + e)
                            } else d.s = 45 === m.charCodeAt(0) ? (m = m.slice(1), -1) : 1;
                            for (n = q.slice(0, r), c = a = 0, w = m.length; a < w; a++)
                                if (n.indexOf(o = m.charAt(a)) < 0) {
                                    if ("." == o) {
                                        if (a > c) {
                                            c = w;
                                            continue
                                        }
                                    } else if (!u && (m == m.toUpperCase() && (m = m.toLowerCase()) || m == m.toLowerCase() && (m = m.toUpperCase()))) {
                                        u = !0, a = -1, c = 0;
                                        continue
                                    }
                                    return i(d, String(e), g, r)
                                }
                            g = !1, (c = (m = t(m, r, 10, d.s)).indexOf(".")) > -1 ? m = m.replace(".", "") : c = m.length
                        }
                        for (a = 0; 48 === m.charCodeAt(a); a++);
                        for (w = m.length; 48 === m.charCodeAt(--w););
                        if (m = m.slice(a, ++w)) {
                            if (w -= a, g && $.DEBUG && w > 15 && (e > p || e !== f(e))) throw Error(l + d.s * e);
                            if ((c = c - a - 1) > C) d.c = d.e = null;
                            else if (c < T) d.c = [d.e = 0];
                            else {
                                if (d.e = c, d.c = [], a = (c + 1) % h, c < 0 && (a += h), a < w) {
                                    for (a && d.c.push(+m.slice(0, a)), w -= h; a < w;) d.c.push(+m.slice(a, a += h));
                                    a = h - (m = m.slice(a)).length
                                } else a -= w;
                                for (; a--; m += "0");
                                d.c.push(+m)
                            }
                        } else d.c = [d.e = 0]
                    }

                    function z(e, r, n, t) {
                        var i, o, s, u, f;
                        if (null == n ? n = x : O(n, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], s = e.e, null == r) f = v(e.c), f = 1 == t || 2 == t && (s <= U || s >= I) ? y(f, s) : E(f, s, "0");
                        else if (o = (e = W(new $(e), r, n)).e, u = (f = v(e.c)).length, 1 == t || 2 == t && (r <= o || o <= U)) {
                            for (; u < r; f += "0", u++);
                            f = y(f, o)
                        } else if (r -= s, f = E(f, o, "0"), o + 1 > u) {
                            if (--r > 0)
                                for (f += "."; r--; f += "0");
                        } else if ((r += o - u) > 0)
                            for (o + 1 == u && (f += "."); r--; f += "0");
                        return e.s < 0 && i ? "-" + f : f
                    }

                    function H(e, r) {
                        for (var n, t = 1, i = new $(e[0]); t < e.length; t++) {
                            if (!(n = new $(e[t])).s) {
                                i = n;
                                break
                            }
                            r.call(i, n) && (i = n)
                        }
                        return i
                    }

                    function V(e, r, n) {
                        for (var t = 1, i = r.length; !r[--i]; r.pop());
                        for (i = r[0]; i >= 10; i /= 10, t++);
                        return (n = t + n * h - 1) > C ? e.c = e.e = null : n < T ? e.c = [e.e = 0] : (e.e = n, e.c = r), e
                    }

                    function W(e, r, n, t) {
                        var i, o, s, c, l, p, w, m = e.c,
                            d = g;
                        if (m) {
                            e: {
                                for (i = 1, c = m[0]; c >= 10; c /= 10, i++);
                                if ((o = r - i) < 0) o += h,
                                s = r,
                                w = (l = m[p = 0]) / d[i - s - 1] % 10 | 0;
                                else if ((p = u((o + 1) / h)) >= m.length) {
                                    if (!t) break e;
                                    for (; m.length <= p; m.push(0));
                                    l = w = 0, i = 1, s = (o %= h) - h + 1
                                } else {
                                    for (l = c = m[p], i = 1; c >= 10; c /= 10, i++);
                                    w = (s = (o %= h) - h + i) < 0 ? 0 : l / d[i - s - 1] % 10 | 0
                                }
                                if (t = t || r < 0 || null != m[p + 1] || (s < 0 ? l : l % d[i - s - 1]), t = n < 4 ? (w || t) && (0 == n || n == (e.s < 0 ? 3 : 2)) : w > 5 || 5 == w && (4 == n || t || 6 == n && (o > 0 ? s > 0 ? l / d[i - s] : 0 : m[p - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !m[0]) return m.length = 0, t ? (r -= e.e + 1, m[0] = d[(h - r % h) % h], e.e = -r || 0) : m[0] = e.e = 0, e;
                                if (0 == o ? (m.length = p, c = 1, p--) : (m.length = p + 1, c = d[h - o], m[p] = s > 0 ? f(l / d[i - s] % d[s]) * c : 0), t)
                                    for (;;) {
                                        if (0 == p) {
                                            for (o = 1, s = m[0]; s >= 10; s /= 10, o++);
                                            for (s = m[0] += c, c = 1; s >= 10; s /= 10, c++);
                                            o != c && (e.e++, m[0] == a && (m[0] = 1));
                                            break
                                        }
                                        if (m[p] += c, m[p] != a) break;
                                        m[p--] = 0, c = 1
                                    }
                                for (o = m.length; 0 === m[--o]; m.pop());
                            }
                            e.e > C ? e.c = e.e = null : e.e < T && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function J(e) {
                        var r, n = e.e;
                        return null === n ? e.toString() : (r = v(e.c), r = n <= U || n >= I ? y(r, n) : E(r, n, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
                        var r, n;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(c + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (O(n = e[r], 0, m, r), L = n), e.hasOwnProperty(r = "ROUNDING_MODE") && (O(n = e[r], 0, 8, r), x = n), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((n = e[r]) && n.pop ? (O(n[0], -m, 0, r), O(n[1], 0, m, r), U = n[0], I = n[1]) : (O(n, -m, m, r), U = -(I = n < 0 ? -n : n))), e.hasOwnProperty(r = "RANGE"))
                                if ((n = e[r]) && n.pop) O(n[0], -m, -1, r), O(n[1], 1, m, r), T = n[0], C = n[1];
                                else {
                                    if (O(n, -m, m, r), !n) throw Error(c + r + " cannot be zero: " + n);
                                    T = -(C = n < 0 ? -n : n)
                                }
                            if (e.hasOwnProperty(r = "CRYPTO")) {
                                if ((n = e[r]) !== !!n) throw Error(c + r + " not true or false: " + n);
                                if (n) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw M = !n, Error(c + "crypto unavailable");
                                    M = n
                                } else M = n
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (O(n = e[r], 0, 9, r), k = n), e.hasOwnProperty(r = "POW_PRECISION") && (O(n = e[r], 0, m, r), G = n), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" != typeof(n = e[r])) throw Error(c + r + " not an object: " + n);
                                F = n
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(n = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(c + r + " invalid: " + n);
                                j = "0123456789" == n.slice(0, 10), q = n
                            }
                        }
                        return {
                            DECIMAL_PLACES: L,
                            ROUNDING_MODE: x,
                            EXPONENTIAL_AT: [U, I],
                            RANGE: [T, C],
                            CRYPTO: M,
                            MODULO_MODE: k,
                            POW_PRECISION: G,
                            FORMAT: F,
                            ALPHABET: q
                        }
                    }, $.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!$.DEBUG) return !0;
                        var r, n, t = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(t)) {
                            if ((1 === o || -1 === o) && i >= -m && i <= m && i === f(i)) {
                                if (0 === t[0]) {
                                    if (0 === i && 1 === t.length) return !0;
                                    break e
                                }
                                if ((r = (i + 1) % h) < 1 && (r += h), String(t[0]).length == r) {
                                    for (r = 0; r < t.length; r++)
                                        if ((n = t[r]) < 0 || n >= a || n !== f(n)) break e;
                                    if (0 !== n) return !0
                                }
                            }
                        } else
                        if (null === t && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(c + "Invalid BigNumber: " + e)
                    }, $.maximum = $.max = function() {
                        return H(arguments, P.lt)
                    }, $.minimum = $.min = function() {
                        return H(arguments, P.gt)
                    }, $.random = (o = 9007199254740992 * Math.random() & 2097151 ? function() {
                        return f(9007199254740992 * Math.random())
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var r, n, t, i, s, l = 0,
                            a = [],
                            p = new $(B);
                        if (null == e ? e = L : O(e, 0, m), i = u(e / h), M)
                            if (crypto.getRandomValues) {
                                for (r = crypto.getRandomValues(new Uint32Array(i *= 2)); l < i;)(s = 131072 * r[l] + (r[l + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), r[l] = n[0], r[l + 1] = n[1]) : (a.push(s % 1e14), l += 2);
                                l = i / 2
                            } else {
                                if (!crypto.randomBytes) throw M = !1, Error(c + "crypto unavailable");
                                for (r = crypto.randomBytes(i *= 7); l < i;)(s = 281474976710656 * (31 & r[l]) + 1099511627776 * r[l + 1] + 4294967296 * r[l + 2] + 16777216 * r[l + 3] + (r[l + 4] << 16) + (r[l + 5] << 8) + r[l + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, l) : (a.push(s % 1e14), l += 7);
                                l = i / 7
                            }
                        if (!M)
                            for (; l < i;)(s = o()) < 9e15 && (a[l++] = s % 1e14);
                        for (i = a[--l], e %= h, i && e && (s = g[h - e], a[l] = f(i / s) * s); 0 === a[l]; a.pop(), l--);
                        if (l < 0) a = [t = 0];
                        else {
                            for (t = -1; 0 === a[0]; a.splice(0, 1), t -= h);
                            for (l = 1, s = a[0]; s >= 10; s /= 10, l++);
                            l < h && (t -= h - l)
                        }
                        return p.e = t, p.c = a, p
                    }), $.sum = function() {
                        for (var e = 1, r = arguments, n = new $(r[0]); e < r.length;) n = n.plus(r[e++]);
                        return n
                    }, t = function() {
                        function e(e, r, n, t) {
                            for (var i, o, s = [0], u = 0, f = e.length; u < f;) {
                                for (o = s.length; o--; s[o] *= r);
                                for (s[0] += t.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > n - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / n | 0, s[i] %= n)
                            }
                            return s.reverse()
                        }
                        return function(r, t, i, o, s) {
                            var u, f, c, l, a, h, p, g, w = r.indexOf("."),
                                m = L,
                                d = x;
                            for (w >= 0 && (l = G, G = 0, r = r.replace(".", ""), h = (g = new $(t)).pow(r.length - w), G = l, g.c = e(E(v(h.c), h.e, "0"), 10, i, "0123456789"), g.e = g.c.length), c = l = (p = e(r, t, i, s ? (u = q, "0123456789") : (u = "0123456789", q))).length; 0 == p[--l]; p.pop());
                            if (!p[0]) return u.charAt(0);
                            if (w < 0 ? --c : (h.c = p, h.e = c, h.s = o, p = (h = n(h, g, m, d, i)).c, a = h.r, c = h.e), w = p[f = c + m + 1], l = i / 2, a = a || f < 0 || null != p[f + 1], a = d < 4 ? (null != w || a) && (0 == d || d == (h.s < 0 ? 3 : 2)) : w > l || w == l && (4 == d || a || 6 == d && 1 & p[f - 1] || d == (h.s < 0 ? 8 : 7)), f < 1 || !p[0]) r = a ? E(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
                            else {
                                if (p.length = f, a)
                                    for (--i; ++p[--f] > i;) p[f] = 0, f || (++c, p = [1].concat(p));
                                for (l = p.length; !p[--l];);
                                for (w = 0, r = ""; w <= l; r += u.charAt(p[w++]));
                                r = E(r, c, u.charAt(0))
                            }
                            return r
                        }
                    }(), n = function() {
                        function e(e, r, n) {
                            var t, i, o, s, u = 0,
                                f = e.length,
                                c = r % w,
                                l = r / w | 0;
                            for (e = e.slice(); f--;) u = ((i = c * (o = e[f] % w) + (t = l * o + (s = e[f] / w | 0) * c) % w * w + u) / n | 0) + (t / w | 0) + l * s, e[f] = i % n;
                            return u && (e = [u].concat(e)), e
                        }

                        function r(e, r, n, t) {
                            var i, o;
                            if (n != t) o = n > t ? 1 : -1;
                            else
                                for (i = o = 0; i < n; i++)
                                    if (e[i] != r[i]) {
                                        o = e[i] > r[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function n(e, r, n, t) {
                            for (var i = 0; n--;) e[n] -= i, i = e[n] < r[n] ? 1 : 0, e[n] = i * t + e[n] - r[n];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(t, i, o, s, u) {
                            var c, l, p, g, w, m, v, N, O, b, y, E, A, S, R, _, D, P = t.s == i.s ? 1 : -1,
                                B = t.c,
                                L = i.c;
                            if (!B || !B[0] || !L || !L[0]) return new $(t.s && i.s && (B ? !L || B[0] != L[0] : L) ? B && 0 == B[0] || !L ? 0 * P : P / 0 : NaN);
                            for (O = (N = new $(P)).c = [], P = o + (l = t.e - i.e) + 1, u || (u = a, l = d(t.e / h) - d(i.e / h), P = P / h | 0), p = 0; L[p] == (B[p] || 0); p++);
                            if (L[p] > (B[p] || 0) && l--, P < 0) O.push(1), g = !0;
                            else {
                                for (S = B.length, _ = L.length, p = 0, P += 2, (w = f(u / (L[0] + 1))) > 1 && (L = e(L, w, u), B = e(B, w, u), _ = L.length, S = B.length), A = _, y = (b = B.slice(0, _)).length; y < _; b[y++] = 0);
                                D = L.slice(), D = [0].concat(D), R = L[0], L[1] >= u / 2 && R++;
                                do {
                                    if (w = 0, (c = r(L, b, _, y)) < 0) {
                                        if (E = b[0], _ != y && (E = E * u + (b[1] || 0)), (w = f(E / R)) > 1)
                                            for (w >= u && (w = u - 1), v = (m = e(L, w, u)).length, y = b.length; 1 == r(m, b, v, y);) w--, n(m, _ < v ? D : L, v, u), v = m.length, c = 1;
                                        else 0 == w && (c = w = 1), v = (m = L.slice()).length;
                                        if (v < y && (m = [0].concat(m)), n(b, m, y, u), y = b.length, -1 == c)
                                            for (; r(L, b, _, y) < 1;) w++, n(b, _ < y ? D : L, y, u), y = b.length
                                    } else 0 === c && (w++, b = [0]);
                                    O[p++] = w, b[0] ? b[y++] = B[A] || 0 : (b = [B[A]], y = 1)
                                } while ((A++ < S || null != b[0]) && P--);
                                g = null != b[0], O[0] || O.splice(0, 1)
                            }
                            if (u == a) {
                                for (p = 1, P = O[0]; P >= 10; P /= 10, p++);
                                W(N, o + (N.e = p + l * h - 1) + 1, s, g)
                            } else N.e = l, N.r = +g;
                            return N
                        }
                    }(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, S = /^([^.]+)\.$/, R = /^\.([^.]+)$/, _ = /^-?(Infinity|NaN)$/, D = /^\s*\+(?=[\w.])|^\s+|\s+$/g, i = function(e, r, n, t) {
                        var i, o = n ? r : r.replace(D, "");
                        if (_.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                        else {
                            if (!n && (o = o.replace(A, function(e, r, n) {
                                    return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, t && t != i ? e : r
                                }), t && (i = t, o = o.replace(S, "$1").replace(R, "0.$1")), r != o)) return new $(o, i);
                            if ($.DEBUG) throw Error(c + "Not a" + (t ? " base " + t : "") + " number: " + r);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, P.absoluteValue = P.abs = function() {
                        var e = new $(this);
                        return e.s < 0 && (e.s = 1), e
                    }, P.comparedTo = function(e, r) {
                        return N(this, new $(e, r))
                    }, P.decimalPlaces = P.dp = function(e, r) {
                        var n, t, i, o = this;
                        if (null != e) return O(e, 0, m), null == r ? r = x : O(r, 0, 8), W(new $(o), e + o.e + 1, r);
                        if (!(n = o.c)) return null;
                        if (t = ((i = n.length - 1) - d(this.e / h)) * h, i = n[i])
                            for (; i % 10 == 0; i /= 10, t--);
                        return t < 0 && (t = 0), t
                    }, P.dividedBy = P.div = function(e, r) {
                        return n(this, new $(e, r), L, x)
                    }, P.dividedToIntegerBy = P.idiv = function(e, r) {
                        return n(this, new $(e, r), 0, 1)
                    }, P.exponentiatedBy = P.pow = function(e, r) {
                        var n, t, i, o, s, l, a, p, g = this;
                        if ((e = new $(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + J(e));
                        if (null != r && (r = new $(r)), s = e.e > 14, !g.c || !g.c[0] || 1 == g.c[0] && !g.e && 1 == g.c.length || !e.c || !e.c[0]) return p = new $(Math.pow(+J(g), s ? 2 - b(e) : +J(e))), r ? p.mod(r) : p;
                        if (l = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new $(NaN);
                            (t = !l && g.isInteger() && r.isInteger()) && (g = g.mod(r))
                        } else {
                            if (e.e > 9 && (g.e > 0 || g.e < -1 || (0 == g.e ? g.c[0] > 1 || s && g.c[1] >= 24e7 : g.c[0] < 8e13 || s && g.c[0] <= 9999975e7))) return o = g.s < 0 && b(e) ? -0 : 0, g.e > -1 && (o = 1 / o), new $(l ? 1 / o : o);
                            G && (o = u(G / h + 2))
                        }
                        for (s ? (n = new $(.5), l && (e.s = 1), a = b(e)) : a = (i = Math.abs(+J(e))) % 2, p = new $(B);;) {
                            if (a) {
                                if (!(p = p.times(g)).c) break;
                                o ? p.c.length > o && (p.c.length = o) : t && (p = p.mod(r))
                            }
                            if (i) {
                                if (0 === (i = f(i / 2))) break;
                                a = i % 2
                            } else if (W(e = e.times(n), e.e + 1, 1), e.e > 14) a = b(e);
                            else {
                                if (0 === (i = +J(e))) break;
                                a = i % 2
                            }
                            g = g.times(g), o ? g.c && g.c.length > o && (g.c.length = o) : t && (g = g.mod(r))
                        }
                        return t ? p : (l && (p = B.div(p)), r ? p.mod(r) : o ? W(p, G, x, void 0) : p)
                    }, P.integerValue = function(e) {
                        var r = new $(this);
                        return null == e ? e = x : O(e, 0, 8), W(r, r.e + 1, e)
                    }, P.isEqualTo = P.eq = function(e, r) {
                        return 0 === N(this, new $(e, r))
                    }, P.isFinite = function() {
                        return !!this.c
                    }, P.isGreaterThan = P.gt = function(e, r) {
                        return N(this, new $(e, r)) > 0
                    }, P.isGreaterThanOrEqualTo = P.gte = function(e, r) {
                        return 1 === (r = N(this, new $(e, r))) || 0 === r
                    }, P.isInteger = function() {
                        return !!this.c && d(this.e / h) > this.c.length - 2
                    }, P.isLessThan = P.lt = function(e, r) {
                        return N(this, new $(e, r)) < 0
                    }, P.isLessThanOrEqualTo = P.lte = function(e, r) {
                        return -1 === (r = N(this, new $(e, r))) || 0 === r
                    }, P.isNaN = function() {
                        return !this.s
                    }, P.isNegative = function() {
                        return this.s < 0
                    }, P.isPositive = function() {
                        return this.s > 0
                    }, P.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, P.minus = function(e, r) {
                        var n, t, i, o, s = this,
                            u = s.s;
                        if (r = (e = new $(e, r)).s, !u || !r) return new $(NaN);
                        if (u != r) return e.s = -r, s.plus(e);
                        var f = s.e / h,
                            c = e.e / h,
                            l = s.c,
                            p = e.c;
                        if (!f || !c) {
                            if (!l || !p) return l ? (e.s = -r, e) : new $(p ? s : NaN);
                            if (!l[0] || !p[0]) return p[0] ? (e.s = -r, e) : new $(l[0] ? s : 3 == x ? -0 : 0)
                        }
                        if (f = d(f), c = d(c), l = l.slice(), u = f - c) {
                            for ((o = u < 0) ? (u = -u, i = l) : (c = f, i = p), i.reverse(), r = u; r--; i.push(0));
                            i.reverse()
                        } else
                            for (t = (o = (u = l.length) < (r = p.length)) ? u : r, u = r = 0; r < t; r++)
                                if (l[r] != p[r]) {
                                    o = l[r] < p[r];
                                    break
                                } if (o && (i = l, l = p, p = i, e.s = -e.s), (r = (t = p.length) - (n = l.length)) > 0)
                            for (; r--; l[n++] = 0);
                        for (r = a - 1; t > u;) {
                            if (l[--t] < p[t]) {
                                for (n = t; n && !l[--n]; l[n] = r);
                                --l[n], l[t] += a
                            }
                            l[t] -= p[t]
                        }
                        for (; 0 == l[0]; l.splice(0, 1), --c);
                        return l[0] ? V(e, l, c) : (e.s = 3 == x ? -1 : 1, e.c = [e.e = 0], e)
                    }, P.modulo = P.mod = function(e, r) {
                        var t, i, o = this;
                        return e = new $(e, r), !o.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || o.c && !o.c[0] ? new $(o) : (9 == k ? (i = e.s, e.s = 1, t = n(o, e, 0, 3), e.s = i, t.s *= i) : t = n(o, e, 0, k), (e = o.minus(t.times(e))).c[0] || 1 != k || (e.s = o.s), e)
                    }, P.multipliedBy = P.times = function(e, r) {
                        var n, t, i, o, s, u, f, c, l, p, g, m, v, N, O, b = this,
                            y = b.c,
                            E = (e = new $(e, r)).c;
                        if (!y || !E || !y[0] || !E[0]) return !b.s || !e.s || y && !y[0] && !E || E && !E[0] && !y ? e.c = e.e = e.s = null : (e.s *= b.s, y && E ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (t = d(b.e / h) + d(e.e / h), e.s *= b.s, (f = y.length) < (p = E.length) && (v = y, y = E, E = v, i = f, f = p, p = i), i = f + p, v = []; i--; v.push(0));
                        for (N = a, O = w, i = p; --i >= 0;) {
                            for (n = 0, g = E[i] % O, m = E[i] / O | 0, o = i + (s = f); o > i;) n = ((c = g * (c = y[--s] % O) + (u = m * c + (l = y[s] / O | 0) * g) % O * O + v[o] + n) / N | 0) + (u / O | 0) + m * l, v[o--] = c % N;
                            v[o] = n
                        }
                        return n ? ++t : v.splice(0, 1), V(e, v, t)
                    }, P.negated = function() {
                        var e = new $(this);
                        return e.s = -e.s || null, e
                    }, P.plus = function(e, r) {
                        var n, t = this,
                            i = t.s;
                        if (r = (e = new $(e, r)).s, !i || !r) return new $(NaN);
                        if (i != r) return e.s = -r, t.minus(e);
                        var o = t.e / h,
                            s = e.e / h,
                            u = t.c,
                            f = e.c;
                        if (!o || !s) {
                            if (!u || !f) return new $(i / 0);
                            if (!u[0] || !f[0]) return f[0] ? e : new $(u[0] ? t : 0 * i)
                        }
                        if (o = d(o), s = d(s), u = u.slice(), i = o - s) {
                            for (i > 0 ? (s = o, n = f) : (i = -i, n = u), n.reverse(); i--; n.push(0));
                            n.reverse()
                        }
                        for ((i = u.length) - (r = f.length) < 0 && (n = f, f = u, u = n, r = i), i = 0; r;) i = (u[--r] = u[r] + f[r] + i) / a | 0, u[r] = a === u[r] ? 0 : u[r] % a;
                        return i && (u = [i].concat(u), ++s), V(e, u, s)
                    }, P.precision = P.sd = function(e, r) {
                        var n, t, i, o = this;
                        if (null != e && e !== !!e) return O(e, 1, m), null == r ? r = x : O(r, 0, 8), W(new $(o), e, r);
                        if (!(n = o.c)) return null;
                        if (t = (i = n.length - 1) * h + 1, i = n[i]) {
                            for (; i % 10 == 0; i /= 10, t--);
                            for (i = n[0]; i >= 10; i /= 10, t++);
                        }
                        return e && o.e + 1 > t && (t = o.e + 1), t
                    }, P.shiftedBy = function(e) {
                        return O(e, -p, p), this.times("1e" + e)
                    }, P.squareRoot = P.sqrt = function() {
                        var e, r, t, i, o, s = this,
                            u = s.c,
                            f = s.s,
                            c = s.e,
                            l = L + 4,
                            a = new $("0.5");
                        if (1 !== f || !u || !u[0]) return new $(!f || f < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (f = Math.sqrt(+J(s))) || f == 1 / 0 ? (((r = v(u)).length + c) % 2 == 0 && (r += "0"), f = Math.sqrt(+r), c = d((c + 1) / 2) - (c < 0 || c % 2), t = new $(r = f == 1 / 0 ? "5e" + c : (r = f.toExponential()).slice(0, r.indexOf("e") + 1) + c)) : t = new $(f + ""), t.c[0])
                            for ((f = (c = t.e) + l) < 3 && (f = 0);;)
                                if (o = t, t = a.times(o.plus(n(s, o, l, 1))), v(o.c).slice(0, f) === (r = v(t.c)).slice(0, f)) {
                                    if (t.e < c && --f, "9999" != (r = r.slice(f - 3, f + 1)) && (i || "4999" != r)) {
                                        +r && (+r.slice(1) || "5" != r.charAt(0)) || (W(t, t.e + L + 2, 1), e = !t.times(t).eq(s));
                                        break
                                    }
                                    if (!i && (W(o, o.e + L + 2, 0), o.times(o).eq(s))) {
                                        t = o;
                                        break
                                    }
                                    l += 4, f += 4, i = 1
                                }
                        return W(t, t.e + L + 1, x, e)
                    }, P.toExponential = function(e, r) {
                        return null != e && (O(e, 0, m), e++), z(this, e, r, 1)
                    }, P.toFixed = function(e, r) {
                        return null != e && (O(e, 0, m), e = e + this.e + 1), z(this, e, r)
                    }, P.toFormat = function(e, r, n) {
                        var t, i = this;
                        if (null == n) null != e && r && "object" == typeof r ? (n = r, r = null) : e && "object" == typeof e ? (n = e, e = r = null) : n = F;
                        else if ("object" != typeof n) throw Error(c + "Argument not an object: " + n);
                        if (t = i.toFixed(e, r), i.c) {
                            var o, s = t.split("."),
                                u = +n.groupSize,
                                f = +n.secondaryGroupSize,
                                l = n.groupSeparator || "",
                                a = s[0],
                                h = s[1],
                                p = i.s < 0,
                                g = p ? a.slice(1) : a,
                                w = g.length;
                            if (f && (o = u, u = f, f = o, w -= o), u > 0 && w > 0) {
                                for (o = w % u || u, a = g.substr(0, o); o < w; o += u) a += l + g.substr(o, u);
                                f > 0 && (a += l + g.slice(o)), p && (a = "-" + a)
                            }
                            t = h ? a + (n.decimalSeparator || "") + ((f = +n.fractionGroupSize) ? h.replace(new RegExp("\\d{" + f + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : h) : a
                        }
                        return (n.prefix || "") + t + (n.suffix || "")
                    }, P.toFraction = function(e) {
                        var r, t, i, o, s, u, f, l, a, p, w, m, d = this,
                            N = d.c;
                        if (null != e && (!(f = new $(e)).isInteger() && (f.c || 1 !== f.s) || f.lt(B))) throw Error(c + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + J(f));
                        if (!N) return new $(d);
                        for (r = new $(B), a = t = new $(B), i = l = new $(B), m = v(N), s = r.e = m.length - d.e - 1, r.c[0] = g[(u = s % h) < 0 ? h + u : u], e = !e || f.comparedTo(r) > 0 ? s > 0 ? r : a : f, u = C, C = 1 / 0, f = new $(m), l.c[0] = 0; p = n(f, r, 0, 1), 1 != (o = t.plus(p.times(i))).comparedTo(e);) t = i, i = o, a = l.plus(p.times(o = a)), l = o, r = f.minus(p.times(o = r)), f = o;
                        return o = n(e.minus(t), i, 0, 1), l = l.plus(o.times(a)), t = t.plus(o.times(i)), l.s = a.s = d.s, w = n(a, i, s *= 2, x).minus(d).abs().comparedTo(n(l, t, s, x).minus(d).abs()) < 1 ? [a, i] : [l, t], C = u, w
                    }, P.toNumber = function() {
                        return +J(this)
                    }, P.toPrecision = function(e, r) {
                        return null != e && O(e, 1, m), z(this, e, r, 2)
                    }, P.toString = function(e) {
                        var r, n = this,
                            i = n.s,
                            o = n.e;
                        return null === o ? i ? (r = "Infinity", i < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = o <= U || o >= I ? y(v(n.c), o) : E(v(n.c), o, "0") : 10 === e && j ? r = E(v((n = W(new $(n), L + o + 1, x)).c), n.e, "0") : (O(e, 2, q.length, "Base"), r = t(E(v(n.c), o, "0"), 10, e, i, !0)), i < 0 && n.c[0] && (r = "-" + r)), r
                    }, P.valueOf = P.toJSON = function() {
                        return J(this)
                    }, P._isBigNumber = !0, null != r && $.set(r), $
                }()).default = o.BigNumber = o, void 0 === (t = function() {
                    return o
                }.call(r, n, r, e)) || (e.exports = t)
            }()
        }
    }
]);