if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = oe.type(e);
            return "function" === n || oe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return oe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ge.test(t)) return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function(e) {
                return Z.call(t, e) > -1 !== n
            })
        }

        function r(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = {};
            return oe.each(e.match(Ee) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            z.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
        }

        function a() {
            this.expando = oe.expando + a.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Se, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? oe.parseJSON(n) : n
                    } catch (r) {}
                    Ae.set(e, t, n)
                } else n = void 0;
            return n
        }

        function u(e, t, n, i) {
            var r, o = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return oe.css(e, t, "")
                },
                l = a(),
                u = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
                c = (oe.cssNumber[t] || "px" !== u && +l) && Oe.exec(oe.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do o = o || ".5", c /= o, oe.style(e, t, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function c(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
        }

        function f(e, t) {
            for (var n = 0, i = e.length; i > n; n++) xe.set(e[n], "globalEval", !t || xe.get(t[n], "globalEval"))
        }

        function h(e, t, n, i, r) {
            for (var o, s, a, l, u, h, d = t.createDocumentFragment(), p = [], g = 0, v = e.length; v > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === oe.type(o)) oe.merge(p, o.nodeType ? [o] : o);
                    else if (Re.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (Pe.exec(o) || ["", ""])[1].toLowerCase(), l = He[a] || He._default, s.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2], h = l[0]; h--;) s = s.lastChild;
                oe.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
            } else p.push(t.createTextNode(o));
            for (d.textContent = "", g = 0; o = p[g++];)
                if (i && oe.inArray(o, i) > -1) r && r.push(o);
                else if (u = oe.contains(o.ownerDocument, o), s = c(d.appendChild(o), "script"), u && f(s), n)
                for (h = 0; o = s[h++];) je.test(o.type || "") && n.push(o);
            return d
        }

        function d() {
            return !0
        }

        function p() {
            return !1
        }

        function g() {
            try {
                return z.activeElement
            } catch (e) {}
        }

        function v(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in t) v(e, a, n, i, t[a], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = p;
            else if (!r) return e;
            return 1 === o && (s = r, r = function(e) {
                return oe().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = oe.guid++)), e.each(function() {
                oe.event.add(this, t, r, i, n)
            })
        }

        function m(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function y(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function b(e) {
            var t = Ue.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function _(e, t) {
            var n, i, r, o, s, a, l, u;
            if (1 === t.nodeType) {
                if (xe.hasData(e) && (o = xe.access(e), s = xe.set(t, o), u = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in u)
                        for (n = 0, i = u[r].length; i > n; n++) oe.event.add(t, r, u[r][n])
                }
                Ae.hasData(e) && (a = Ae.access(e), l = oe.extend({}, a), Ae.set(t, l))
            }
        }

        function E(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Le.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function T(e, t, n, i) {
            t = X.apply([], t);
            var r, o, s, a, l, u, f = 0,
                d = e.length,
                p = d - 1,
                g = t[0],
                v = oe.isFunction(g);
            if (v || d > 1 && "string" == typeof g && !ie.checkClone && Ve.test(g)) return e.each(function(r) {
                var o = e.eq(r);
                v && (t[0] = g.call(this, r, o.html())), T(o, t, n, i)
            });
            if (d && (r = h(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (s = oe.map(c(r, "script"), y), a = s.length; d > f; f++) l = r, f !== p && (l = oe.clone(l, !0, !0), a && oe.merge(s, c(l, "script"))), n.call(e[f], l, f);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, oe.map(s, b), f = 0; a > f; f++) l = s[f], je.test(l.type || "") && !xe.access(l, "globalEval") && oe.contains(u, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(Qe, "")))
            }
            return e
        }

        function C(e, t, n) {
            for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(c(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && f(c(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function w(e, t) {
            var n = oe(t.createElement(e)).appendTo(t.body),
                i = oe.css(n[0], "display");
            return n.detach(), i
        }

        function x(e) {
            var t = z,
                n = Ke[e];
            return n || (n = w(e, t), "none" !== n && n || (Ge = (Ge || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ge[0].contentDocument, t.write(), t.close(), n = w(e, t), Ge.detach()), Ke[e] = n), n
        }

        function A(e, t, n) {
            var i, r, o, s, a = e.style;
            return n = n || Ye(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !ie.pixelMarginRight() && ze.test(s) && $e.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
        }

        function I(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e) {
            if (e in it) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
                if (e = nt[n] + t, e in it) return e
        }

        function D(e, t, n) {
            var i = Oe.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function O(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(e, n + ke[o], !0, r)), i ? ("content" === n && (s -= oe.css(e, "padding" + ke[o], !0, r)), "margin" !== n && (s -= oe.css(e, "border" + ke[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + ke[o], !0, r), "padding" !== n && (s += oe.css(e, "border" + ke[o] + "Width", !0, r)));
            return s
        }

        function k(t, n, i) {
            var r = !0,
                o = "width" === n ? t.offsetWidth : t.offsetHeight,
                s = Ye(t),
                a = "border-box" === oe.css(t, "boxSizing", !1, s);
            if (z.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
                if (o = A(t, n, s), (0 > o || null == o) && (o = t.style[n]), ze.test(o)) return o;
                r = a && (ie.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
            }
            return o + O(t, n, i || (a ? "border" : "content"), r, s) + "px"
        }

        function N(e, t) {
            for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = xe.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ne(i) && (o[s] = xe.access(i, "olddisplay", x(i.nodeName)))) : (r = Ne(i), "none" === n && r || xe.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
            for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
            return e
        }

        function L(e, t, n, i, r) {
            return new L.prototype.init(e, t, n, i, r)
        }

        function P() {
            return e.setTimeout(function() {
                rt = void 0
            }), rt = oe.now()
        }

        function j(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = ke[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function H(e, t, n) {
            for (var i, r = (F.tweeners[t] || []).concat(F.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function R(e, t, n) {
            var i, r, o, s, a, l, u, c, f = this,
                h = {},
                d = e.style,
                p = e.nodeType && Ne(e),
                g = xe.get(e, "fxshow");
            n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, f.always(function() {
                f.always(function() {
                    a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = oe.css(e, "display"), c = "none" === u ? xe.get(e, "olddisplay") || x(e.nodeName) : u, "inline" === c && "none" === oe.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], st.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        p = !0
                    }
                    h[i] = g && g[i] || oe.style(e, i)
                } else u = void 0;
            if (oe.isEmptyObject(h)) "inline" === ("none" === u ? x(e.nodeName) : u) && (d.display = u);
            else {
                g ? "hidden" in g && (p = g.hidden) : g = xe.access(e, "fxshow", {}), o && (g.hidden = !p), p ? oe(e).show() : f.done(function() {
                    oe(e).hide()
                }), f.done(function() {
                    var t;
                    xe.remove(e, "fxshow");
                    for (t in h) oe.style(e, t, h[t])
                });
                for (i in h) s = H(p ? g[i] : 0, i, f), i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function M(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function F(e, t, n) {
            var i, r, o = 0,
                s = F.prefilters.length,
                a = oe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = rt || P(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
                },
                u = a.promise({
                    elem: e,
                    props: oe.extend({}, t),
                    opts: oe.extend(!0, {
                        specialEasing: {},
                        easing: oe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (M(c, u.opts.specialEasing); s > o; o++)
                if (i = F.prefilters[o].call(u, e, c, u.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(u.elem, u.opts.queue).stop = oe.proxy(i.stop, i)), i;
            return oe.map(c, H, u), oe.isFunction(u.opts.start) && u.opts.start.call(e, u), oe.fx.timer(oe.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function W(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function B(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(Ee) || [];
                if (oe.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function q(e, t, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, oe.each(e[a] || [], function(e, a) {
                    var u = a(t, n, i);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                s = e === At;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function V(e, t) {
            var n, i, r = oe.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && oe.extend(!0, e, i), e
        }

        function U(e, t, n) {
            for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function Q(e, t, n, i) {
            var r, o, s, a, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s)
                    for (r in u)
                        if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try {
                        t = s(t)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: s ? f : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function G(e, t, n, i) {
            var r;
            if (oe.isArray(t)) oe.each(t, function(t, r) {
                n || Ot.test(e) ? i(e, r) : G(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== oe.type(t)) i(e, t);
            else
                for (r in t) G(e + "[" + r + "]", t[r], n, i)
        }

        function K(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var $ = [],
            z = e.document,
            Y = $.slice,
            X = $.concat,
            J = $.push,
            Z = $.indexOf,
            ee = {},
            te = ee.toString,
            ne = ee.hasOwnProperty,
            ie = {},
            re = "2.2.3",
            oe = function(e, t) {
                return new oe.fn.init(e, t)
            },
            se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            le = /-([\da-z])/gi,
            ue = function(e, t) {
                return t.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: re,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function() {
                return Y.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
            },
            pushStack: function(e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return oe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(oe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(Y.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: J,
            sort: $.sort,
            splice: $.splice
        }, oe.extend = oe.fn.extend = function() {
            var e, t, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (e = arguments[a]))
                    for (t in e) n = s[t], i = e[t], s !== i && (u && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(u, o, i)) : void 0 !== i && (s[t] = i));
            return s
        }, oe.extend({
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(e) {
                var t;
                if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (t in e);
                return void 0 === t || ne.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = z.createElement("script"), t.text = e, z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(ae, "ms-").replace(le, ue)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, r = 0;
                if (n(e))
                    for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(se, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : Z.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o, s = 0,
                    a = [];
                if (n(e))
                    for (r = e.length; r > s; s++) o = t(e[s], s, i), null != o && a.push(o);
                else
                    for (s in e) o = t(e[s], s, i), null != o && a.push(o);
                return X.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (i = Y.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(Y.call(arguments)))
                }, r.guid = e.guid = e.guid || oe.guid++, r) : void 0
            },
            now: Date.now,
            support: ie
        }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = $[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        });
        var ce = function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, l, u, f, d, p = t && t.ownerDocument,
                    g = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                if (!i && ((t ? t.ownerDocument || t : W) !== N && k(t), t = t || N, P)) {
                    if (11 !== g && (u = me.exec(e)))
                        if (r = u[1]) {
                            if (9 === g) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (p && (s = p.getElementById(r)) && M(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = u[3]) && E.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (E.qsa && !Q[e + " "] && (!j || !j.test(e))) {
                        if (1 !== g) p = t, d = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = F), f = x(e), o = f.length, l = he.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = l + " " + h(f[o]);
                            d = f.join(","), p = ye.test(e) && c(t.parentNode) || t
                        }
                        if (d) try {
                            return J.apply(n, p.querySelectorAll(d)), n
                        } catch (v) {} finally {
                            a === F && t.removeAttribute("id")
                        }
                    }
                }
                return I(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[F] = !0, e
            }

            function r(e) {
                var t = N.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function d(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = q++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, s) {
                    var a, l, u, c = [B, o];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (u = t[F] || (t[F] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === B && a[1] === o) return c[2] = a[2];
                                if (l[i] = c, c[2] = e(t, n, s)) return !0
                            }
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function v(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
                return s
            }

            function m(e, t, n, r, o, s) {
                return r && !r[F] && (r = m(r)), o && !o[F] && (o = m(o, s)), i(function(i, s, a, l) {
                    var u, c, f, h = [],
                        d = [],
                        p = s.length,
                        m = i || g(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? m : v(m, h, e, a, l),
                        b = n ? o || (i ? e : p || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (u = v(b, d), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (b[d[c]] = !(y[d[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(f = b[c]) && (u = o ? ee(i, f) : h[c]) > -1 && (i[u] = !(s[u] = f))
                        }
                    } else b = v(b === s ? b.splice(p, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                        return e === t
                    }, s, !0), u = d(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), c = [function(e, n, i) {
                        var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                        return t = null, r
                    }]; r > a; a++)
                    if (n = T.relative[e[a].type]) c = [d(p(c), n)];
                    else {
                        if (n = T.filter[e[a].type].apply(null, e[a].matches), n[F]) {
                            for (i = ++a; r > i && !T.relative[e[i].type]; i++);
                            return m(a > 1 && p(c), a > 1 && h(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && h(e))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, f, h, d = 0,
                            p = "0",
                            g = i && [],
                            m = [],
                            y = S,
                            b = i || o && T.find.TAG("*", u),
                            _ = B += null == y ? 1 : Math.random() || .1,
                            E = b.length;
                        for (u && (S = s === N || s || u); p !== E && null != (c = b[p]); p++) {
                            if (o && c) {
                                for (f = 0, s || c.ownerDocument === N || (k(c), a = !P); h = e[f++];)
                                    if (h(c, s || N, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (B = _)
                            }
                            r && ((c = !h && c) && d--, i && g.push(c))
                        }
                        if (d += p, r && p !== d) {
                            for (f = 0; h = n[f++];) h(g, m, s, a);
                            if (i) {
                                if (d > 0)
                                    for (; p--;) g[p] || m[p] || (m[p] = Y.call(l));
                                m = v(m)
                            }
                            J.apply(l, m), u && !i && m.length > 0 && d + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (B = _, S = y), g
                    };
                return r ? i(s) : s
            }
            var _, E, T, C, w, x, A, I, S, D, O, k, N, L, P, j, H, R, M, F = "sizzle" + 1 * new Date,
                W = e.document,
                B = 0,
                q = 0,
                V = n(),
                U = n(),
                Q = n(),
                G = function(e, t) {
                    return e === t && (O = !0), 0
                },
                K = 1 << 31,
                $ = {}.hasOwnProperty,
                z = [],
                Y = z.pop,
                X = z.push,
                J = z.push,
                Z = z.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                fe = new RegExp(oe),
                he = new RegExp("^" + ie + "$"),
                de = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                pe = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                Ee = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    k()
                };
            try {
                J.apply(z = Z.call(W.childNodes), W.childNodes), z[W.childNodes.length].nodeType
            } catch (Ce) {
                J = {
                    apply: z.length ? function(e, t) {
                        X.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            E = t.support = {}, w = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, k = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : W;
                return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, L = N.documentElement, P = !w(N), (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), E.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), E.getElementsByTagName = r(function(e) {
                    return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length
                }), E.getElementsByClassName = ve.test(N.getElementsByClassName), E.getById = r(function(e) {
                    return L.appendChild(e).id = F, !N.getElementsByName || !N.getElementsByName(F).length
                }), E.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(_e, Ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(_e, Ee);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = E.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : E.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = E.getElementsByClassName && function(e, t) {
                    return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0
                }, H = [], j = [], (E.qsa = ve.test(N.querySelectorAll)) && (r(function(e) {
                    L.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]")
                }), r(function(e) {
                    var t = N.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
                })), (E.matchesSelector = ve.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                    E.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), H.push("!=", oe)
                }), j = j.length && new RegExp(j.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(L.compareDocumentPosition), M = t || ve.test(L.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, G = t ? function(e, t) {
                    if (e === t) return O = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !E.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === W && M(W, e) ? -1 : t === N || t.ownerDocument === W && M(W, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return O = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        l = [t];
                    if (!r || !o) return e === N ? -1 : t === N ? 1 : r ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (r === o) return s(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === W ? -1 : l[i] === W ? 1 : 0
                }, N) : N
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== N && k(e), n = n.replace(ce, "='$1']"), E.matchesSelector && P && !Q[n + " "] && (!H || !H.test(n)) && (!j || !j.test(n))) try {
                    var i = R.call(e, n);
                    if (i || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {}
                return t(n, N, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && k(e), M(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== N && k(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && $.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : E.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (O = !E.detectDuplicates, D = !E.sortStable && e.slice(0), e.sort(G), O) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return D = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += C(t);
                return n
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(_e, Ee), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(_e, Ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = V[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && V(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === m : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (h = v, f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), u = c[e] || [], d = u[0] === B && u[1], b = d && u[2], h = d && v.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            c[e] = [B, d, b];
                                            break
                                        }
                                } else if (y && (h = t, f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), u = c[e] || [], d = u[0] === B && u[1], b = d), b === !1)
                                    for (;
                                        (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++b || (y && (f = h[F] || (h[F] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), c[e] = [B, b]), h !== t)););
                                return b -= r, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = A(e.replace(ae, "$1"));
                        return r[F] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(_e, Ee),
                            function(t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, Ee).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[_] = a(_);
            for (_ in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[_] = l(_);
            return f.prototype = T.filters = T.pseudos, T.setFilters = new f, x = t.tokenize = function(e, n) {
                var i, r, o, s, a, l, u, c = U[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, l = [], u = T.preFilter; a;) {
                    i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(r = de[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
            }, A = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = Q[e + " "];
                if (!o) {
                    for (t || (t = x(e)), n = t.length; n--;) o = y(t[n]), o[F] ? i.push(o) : r.push(o);
                    o = Q(e, b(r, i)), o.selector = e
                }
                return o
            }, I = t.select = function(e, t, n, i) {
                var r, o, s, a, l, u = "function" == typeof e && e,
                    f = !i && x(e = u.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && E.getById && 9 === t.nodeType && P && T.relative[o[1].type]) {
                        if (t = (T.find.ID(s.matches[0].replace(_e, Ee), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(_e, Ee), ye.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && h(o), !e) return J.apply(n, i), n;
                            break
                        }
                }
                return (u || A(e, f))(i, t, !P, n, !t || ye.test(e) && c(t.parentNode) || t), n
            }, E.sortStable = F.split("").sort(G).join("") === F, E.detectDuplicates = !!O, k(), E.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), E.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
        var fe = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && oe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            he = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            de = oe.expr.match.needsContext,
            pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ge = /^.[^:#\[\.,]*$/;
        oe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, oe.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (oe.contains(r[t], this)) return !0
                }));
                for (t = 0; n > t; t++) oe.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
            }
        });
        var ve, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ye = oe.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || ve, "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : z, !0)), pe.test(i[1]) && oe.isPlainObject(t))
                            for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return r = z.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = z, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
            };
        ye.prototype = oe.fn, ve = oe(z);
        var be = /^(?:parents|prev(?:Until|All))/,
            _e = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.fn.extend({
            has: function(e) {
                var t = oe(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (oe.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], s = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), oe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return fe(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return fe(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return fe(e, "nextSibling")
            },
            prevAll: function(e) {
                return fe(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return fe(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return fe(e, "previousSibling", n)
            },
            siblings: function(e) {
                return he((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return he(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || oe.merge([], e.childNodes)
            }
        }, function(e, t) {
            oe.fn[e] = function(n, i) {
                var r = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (_e[e] || oe.uniqueSort(r), be.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var Ee = /\S+/g;
        oe.Callbacks = function(e) {
            e = "string" == typeof e ? o(e) : oe.extend({}, e);
            var t, n, i, r, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (r = e.once, i = t = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (n && !t && (l = s.length - 1, a.push(n)), function i(t) {
                            oe.each(t, function(t, n) {
                                oe.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return oe.each(arguments, function(e, t) {
                            for (var n;
                                (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? oe.inArray(e, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], n || (s = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, oe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", oe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return oe.Deferred(function(n) {
                                oe.each(t, function(t, o) {
                                    var s = oe.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? oe.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, oe.each(t, function(e, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = Y.call(arguments),
                    s = o.length,
                    a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : oe.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var Te;
        oe.fn.ready = function(e) {
            return oe.ready.promise().done(e), this
        }, oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(z, [oe]), oe.fn.triggerHandler && (oe(z).triggerHandler("ready"), oe(z).off("ready"))))
            }
        }), oe.ready.promise = function(t) {
            return Te || (Te = oe.Deferred(), "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? e.setTimeout(oe.ready) : (z.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Te.promise(t)
        }, oe.ready.promise();
        var Ce = function(e, t, n, i, r, o, s) {
                var a = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === oe.type(n)) {
                    r = !0;
                    for (a in n) Ce(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(oe(e), n)
                    })), t))
                    for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            we = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            },
            cache: function(e) {
                if (!we(e)) return {};
                var t = e[this.expando];
                return t || (t = {}, we(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[t] = n;
                else
                    for (i in t) r[i] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t) this.register(e);
                    else {
                        oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(Ee) || [])), n = i.length;
                        for (; n--;) delete o[i[n]]
                    }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !oe.isEmptyObject(t)
            }
        };
        var xe = new a,
            Ae = new a,
            Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Se = /[A-Z]/g;
        oe.extend({
            hasData: function(e) {
                return Ae.hasData(e) || xe.hasData(e)
            },
            data: function(e, t, n) {
                return Ae.access(e, t, n)
            },
            removeData: function(e, t) {
                Ae.remove(e, t)
            },
            _data: function(e, t, n) {
                return xe.access(e, t, n)
            },
            _removeData: function(e, t) {
                xe.remove(e, t)
            }
        }), oe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Ae.get(o), 1 === o.nodeType && !xe.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i])));
                        xe.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    Ae.set(this, e)
                }) : Ce(this, function(t) {
                    var n, i;
                    if (o && void 0 === t) {
                        if (n = Ae.get(o, e) || Ae.get(o, e.replace(Se, "-$&").toLowerCase()), void 0 !== n) return n;
                        if (i = oe.camelCase(e), n = Ae.get(o, i), void 0 !== n) return n;
                        if (n = l(o, i, void 0), void 0 !== n) return n
                    } else i = oe.camelCase(e), this.each(function() {
                        var n = Ae.get(this, i);
                        Ae.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Ae.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Ae.remove(this, e)
                })
            }
        }), oe.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = xe.get(e, t), n && (!i || oe.isArray(n) ? i = xe.access(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = oe._queueHooks(e, t),
                    s = function() {
                        oe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return xe.get(e, n) || xe.access(e, n, {
                    empty: oe.Callbacks("once memory").add(function() {
                        xe.remove(e, [t + "queue", n])
                    })
                })
            }
        }), oe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    oe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = oe.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = xe.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Oe = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
            ke = ["Top", "Right", "Bottom", "Left"],
            Ne = function(e, t) {
                return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
            },
            Le = /^(?:checkbox|radio)$/i,
            Pe = /<([\w:-]+)/,
            je = /^$|\/(?:java|ecma)script/i,
            He = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td;
        var Re = /<|&#?\w+;/;
        ! function() {
            var e = z.createDocumentFragment(),
                t = e.appendChild(z.createElement("div")),
                n = z.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Me = /^key/,
            Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            We = /^([^.]*)(?:\.(.+)|)/;
        oe.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, s, a, l, u, c, f, h, d, p, g, v = xe.get(e);
                if (v)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                            return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Ee) || [""], u = t.length; u--;) a = We.exec(t[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d && (f = oe.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = oe.event.special[d] || {}, c = oe.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, p, s) !== !1 || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), oe.event.global[d] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, s, a, l, u, c, f, h, d, p, g, v = xe.hasData(e) && xe.get(e);
                if (v && (l = v.events)) {
                    for (t = (t || "").match(Ee) || [""], u = t.length; u--;)
                        if (a = We.exec(t[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                            for (f = oe.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, h = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                            s && !h.length && (f.teardown && f.teardown.call(e, p, v.handle) !== !1 || oe.removeEvent(e, d, v.handle), delete l[d])
                        } else
                            for (d in l) oe.event.remove(e, d + t[u], n, i, !0);
                    oe.isEmptyObject(l) && xe.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = oe.event.fix(e);
                var t, n, i, r, o, s = [],
                    a = Y.call(arguments),
                    l = (xe.get(this, "events") || {})[e.type] || [],
                    u = oe.event.special[e.type] || {};
                if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = oe.event.handlers.call(this, e, l), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, s = [],
                    a = t.delegateCount,
                    l = e.target;
                if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (i = [], n = 0; a > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || z, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[oe.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Fe.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === g() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return oe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, oe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, oe.Event = function(e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
        }, oe.Event.prototype = {
            constructor: oe.Event,
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = d, e && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = d, e && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            oe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return r && (r === i || oe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), oe.fn.extend({
            on: function(e, t, n, i) {
                return v(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return v(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                    oe.event.remove(this, e, n, t)
                })
            }
        });
        var Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            qe = /<script|<style|<link/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ue = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        oe.extend({
            htmlPrefilter: function(e) {
                return e.replace(Be, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, s, a = e.cloneNode(!0),
                    l = oe.contains(e.ownerDocument, e);
                if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                    for (s = c(a), o = c(e), i = 0, r = o.length; r > i; i++) E(o[i], s[i]);
                if (t)
                    if (n)
                        for (o = o || c(e), s = s || c(a), i = 0, r = o.length; r > i; i++) _(o[i], s[i]);
                    else _(e, a);
                return s = c(a, "script"), s.length > 0 && f(s, !l && c(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (we(n)) {
                        if (t = n[xe.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                            n[xe.expando] = void 0
                        }
                        n[Ae.expando] && (n[Ae.expando] = void 0)
                    }
            }
        }), oe.fn.extend({
            domManip: T,
            detach: function(e) {
                return C(this, e, !0)
            },
            remove: function(e) {
                return C(this, e)
            },
            text: function(e) {
                return Ce(this, function(e) {
                    return void 0 === e ? oe.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = m(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return T(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = m(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return T(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return oe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ce(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !qe.test(e) && !He[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = oe.htmlPrefilter(e);
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return T(this, arguments, function(t) {
                    var n = this.parentNode;
                    oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            oe.fn[e] = function(e) {
                for (var n, i = [], r = oe(e), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), oe(r[s])[t](n), J.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ge, Ke = {
                HTML: "block",
                BODY: "block"
            },
            $e = /^margin/,
            ze = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
            Ye = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            },
            Xe = function(e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = s[o];
                return r
            },
            Je = z.documentElement;
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Je.removeChild(s)
            }
            var n, i, r, o, s = z.createElement("div"),
                a = z.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ie, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelMarginRight: function() {
                    return null == i && t(), r
                },
                reliableMarginLeft: function() {
                    return null == i && t(), o
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(z.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Je.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(s), a.removeChild(n), t
                }
            }))
        }();
        var Ze = /^(none|table(?!-c[ea]).+)/,
            et = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            tt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            nt = ["Webkit", "O", "Moz", "ms"],
            it = z.createElement("div").style;
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = A(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = oe.camelCase(t),
                        l = e.style;
                    return t = oe.cssProps[a] || (oe.cssProps[a] = S(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Oe.exec(n)) && r[1] && (n = u(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, i) {
                var r, o, s, a = oe.camelCase(t);
                return t = oe.cssProps[a] || (oe.cssProps[a] = S(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = A(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), oe.each(["height", "width"], function(e, t) {
            oe.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Xe(e, et, function() {
                        return k(e, t, i)
                    }) : k(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r, o = i && Ye(e),
                        s = i && O(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                    return s && (r = Oe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), D(e, n, s)
                }
            }
        }), oe.cssHooks.marginLeft = I(ie.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), oe.cssHooks.marginRight = I(ie.reliableMarginRight, function(e, t) {
            return t ? Xe(e, {
                display: "inline-block"
            }, A, [e, "marginRight"]) : void 0
        }), oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            oe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + ke[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, $e.test(e) || (oe.cssHooks[e + t].set = D)
        }), oe.fn.extend({
            css: function(e, t) {
                return Ce(this, function(e, t, n) {
                    var i, r, o = {},
                        s = 0;
                    if (oe.isArray(t)) {
                        for (i = Ye(e), r = t.length; r > s; s++) o[t[s]] = oe.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ne(this) ? oe(this).show() : oe(this).hide()
                })
            }
        }), oe.Tween = L, L.prototype = {
            constructor: L,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = L.propHooks[this.prop];
                return e && e.get ? e.get(this) : L.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, oe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, oe.fx = L.prototype.init, oe.fx.step = {};
        var rt, ot, st = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
        oe.Animation = oe.extend(F, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return u(n.elem, e, Oe.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(t)
                },
                prefilters: [R],
                prefilter: function(e, t) {
                    t ? F.prefilters.unshift(e) : F.prefilters.push(e)
                }
            }), oe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? oe.extend({}, e) : {
                    complete: n || !n && t || oe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !oe.isFunction(t) && t
                };
                return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
                }, i
            }, oe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Ne).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = oe.isEmptyObject(e),
                        o = oe.speed(t, n, i),
                        s = function() {
                            var t = F(this, oe.extend({}, e), o);
                            (r || xe.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = oe.timers,
                            s = xe.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        !t && n || oe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = xe.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = oe.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), oe.each(["toggle", "show", "hide"], function(e, t) {
                var n = oe.fn[t];
                oe.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, r)
                }
            }), oe.each({
                slideDown: j("show"),
                slideUp: j("hide"),
                slideToggle: j("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                oe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), oe.timers = [], oe.fx.tick = function() {
                var e, t = 0,
                    n = oe.timers;
                for (rt = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || oe.fx.stop(), rt = void 0
            }, oe.fx.timer = function(e) {
                oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
            }, oe.fx.interval = 13, oe.fx.start = function() {
                ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
            }, oe.fx.stop = function() {
                e.clearInterval(ot), ot = null
            }, oe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oe.fn.delay = function(t, n) {
                return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            },
            function() {
                var e = z.createElement("input"),
                    t = z.createElement("select"),
                    n = t.appendChild(z.createElement("option"));
                e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = z.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
            }();
        var lt, ut = oe.expr.attrHandle;
        oe.fn.extend({
            attr: function(e, t) {
                return Ce(this, oe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    oe.removeAttr(this, e)
                })
            }
        }), oe.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(Ee);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }
        }), lt = {
            set: function(e, t, n) {
                return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ut[t] || oe.find.attr;
            ut[t] = function(e, t, i) {
                var r, o;
                return i || (o = ut[t], ut[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ut[t] = o), r
            }
        });
        var ct = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function(e, t) {
                return Ce(this, oe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[oe.propFix[e] || e]
                })
            }
        }), oe.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), ie.optSelected || (oe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            oe.propFix[this.toLowerCase()] = this
        });
        var ht = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, s, a, l = 0;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, W(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(ht, " ")) {
                            for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = oe.trim(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, s, a, l = 0;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, W(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; n = this[l++];)
                        if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(ht, " ")) {
                            for (s = 0; o = t[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            a = oe.trim(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                    oe(this).toggleClass(e.call(this, n, W(this), t), t)
                }) : this.each(function() {
                    var t, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = oe(this), o = e.match(Ee) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = W(this), t && xe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : xe.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + W(n) + " ").replace(ht, " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var dt = /\r/g,
            pt = /[\x20\t\r\n\f]+/g;
        oe.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = oe.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
                }
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = oe.find.attr(e, "value");
                        return null != t ? t : oe.trim(oe.text(e)).replace(pt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function() {
            oe.valHooks[this] = {
                set: function(e, t) {
                    return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
                }
            }, ie.checkOn || (oe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var gt = /^(?:focusinfocus|focusoutblur)$/;
        oe.extend(oe.event, {
            trigger: function(t, n, i, r) {
                var o, s, a, l, u, c, f, h = [i || z],
                    d = ne.call(t, "type") ? t.type : t,
                    p = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = i = i || z, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(d + oe.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, t = t[oe.expando] ? t : new oe.Event(d, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[d] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                    if (!r && !f.noBubble && !oe.isWindow(i)) {
                        for (l = f.delegateType || d, gt.test(l + d) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                        a === (i.ownerDocument || z) && h.push(a.defaultView || a.parentWindow || e)
                    }
                    for (o = 0;
                        (s = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || d, c = (xe.get(s, "events") || {})[t.type] && xe.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && we(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                    return t.type = d, r || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !we(i) || u && oe.isFunction(i[d]) && !oe.isWindow(i) && (a = i[u], a && (i[u] = null), oe.event.triggered = d, i[d](), oe.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = oe.extend(new oe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                oe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }), oe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    oe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? oe.event.trigger(e, t, n, !0) : void 0
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            oe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), oe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                oe.event.simulate(t, e.target, oe.event.fix(e))
            };
            oe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = xe.access(i, t);
                    r || i.addEventListener(e, n, !0), xe.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = xe.access(i, t) - 1;
                    r ? xe.access(i, t, r) : (i.removeEventListener(e, n, !0), xe.remove(i, t))
                }
            }
        });
        var vt = e.location,
            mt = oe.now(),
            yt = /\?/;
        oe.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, oe.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (i) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
        };
        var bt = /#.*$/,
            _t = /([?&])_=[^&]*/,
            Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ct = /^(?:GET|HEAD)$/,
            wt = /^\/\//,
            xt = {},
            At = {},
            It = "*/".concat("*"),
            St = z.createElement("a");
        St.href = vt.href, oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vt.href,
                type: "GET",
                isLocal: Tt.test(vt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? V(V(e, oe.ajaxSettings), t) : V(oe.ajaxSettings, e)
            },
            ajaxPrefilter: B(xt),
            ajaxTransport: B(At),
            ajax: function(t, n) {
                function i(t, n, i, a) {
                    var u, f, y, b, E, C = n;
                    2 !== _ && (_ = 2, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (b = U(h, T, i)), b = Q(h, b, T, u), u ? (h.ifModified && (E = T.getResponseHeader("Last-Modified"), E && (oe.lastModified[o] = E), E = T.getResponseHeader("etag"), E && (oe.etag[o] = E)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, f = b.data, y = b.error, u = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", u ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]), T.statusCode(m), m = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? f : y]), v.fireWith(d, [T, C]), c && (p.trigger("ajaxComplete", [T, h]), --oe.active || oe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var r, o, s, a, l, u, c, f, h = oe.ajaxSetup({}, n),
                    d = h.context || h,
                    p = h.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
                    g = oe.Deferred(),
                    v = oe.Callbacks("once memory"),
                    m = h.statusCode || {},
                    y = {},
                    b = {},
                    _ = 0,
                    E = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === _) {
                                if (!a)
                                    for (a = {}; t = Et.exec(s);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === _ ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return _ || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return _ || (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > _)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || E;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, h.url = ((t || h.url || vt.href) + "").replace(bt, "").replace(wt, vt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = oe.trim(h.dataType || "*").toLowerCase().match(Ee) || [""], null == h.crossDomain) {
                    u = z.createElement("a");
                    try {
                        u.href = h.url, u.href = u.href, h.crossDomain = St.protocol + "//" + St.host != u.protocol + "//" + u.host
                    } catch (C) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = oe.param(h.data, h.traditional)), q(xt, h, n, T), 2 === _) return T;
                c = oe.event && h.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ct.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (yt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = _t.test(o) ? o.replace(_t, "$1_=" + mt++) : o + (yt.test(o) ? "&" : "?") + "_=" + mt++)), h.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
                for (f in h.headers) T.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (h.beforeSend.call(d, T, h) === !1 || 2 === _)) return T.abort();
                E = "abort";
                for (f in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[f](h[f]);
                if (r = q(At, h, n, T)) {
                    if (T.readyState = 1, c && p.trigger("ajaxSend", [T, h]), 2 === _) return T;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                        T.abort("timeout")
                    }, h.timeout));
                    try {
                        _ = 1, r.send(y, i)
                    } catch (C) {
                        if (!(2 > _)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }), oe.each(["get", "post"], function(e, t) {
            oe[t] = function(e, n, i, r) {
                return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, oe.isPlainObject(e) && e))
            }
        }), oe._evalUrl = function(e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, oe.fn.extend({
            wrapAll: function(e) {
                var t;
                return oe.isFunction(e) ? this.each(function(t) {
                    oe(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return oe.isFunction(e) ? this.each(function(t) {
                    oe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = oe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = oe.isFunction(e);
                return this.each(function(n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), oe.expr.filters.hidden = function(e) {
            return !oe.expr.filters.visible(e)
        }, oe.expr.filters.visible = function(e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
        };
        var Dt = /%20/g,
            Ot = /\[\]$/,
            kt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) G(n, e[n], t, r);
            return i.join("&").replace(Dt, "+")
        }, oe.fn.extend({
            serialize: function() {
                return oe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && Lt.test(this.nodeName) && !Nt.test(e) && (this.checked || !Le.test(e))
                }).map(function(e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        }), oe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        };
        var Pt = {
                0: 200,
                1223: 204
            },
            jt = oe.ajaxSettings.xhr();
        ie.cors = !!jt && "withCredentials" in jt, ie.ajax = jt = !!jt, oe.ajaxTransport(function(t) {
            var n, i;
            return ie.cors || jt && !t.crossDomain ? {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Pt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n) throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }), oe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return oe.globalEval(e), e
                }
            }
        }), oe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), oe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = oe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), z.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ht = [],
            Rt = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ht.pop() || oe.expando + "_" + mt++;
                return this[e] = !0, e
            }
        }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, s, a = t.jsonp !== !1 && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Rt, "$1" + r) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return s || oe.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ht.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), oe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || z;
            var i = pe.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = h([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
        };
        var Mt = oe.fn.load;
        oe.fn.load = function(e, t, n) {
            if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
            var i, r, o, s = this,
                a = e.indexOf(" ");
            return a > -1 && (i = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            oe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), oe.expr.filters.animated = function(e) {
            return oe.grep(oe.timers, function(t) {
                return e === t.elem
            }).length
        }, oe.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, s, a, l, u, c = oe.css(e, "position"),
                    f = oe(e),
                    h = {};
                "static" === c && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : f.css(h)
            }
        }, oe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = K(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - oe.css(n, "marginTop", !0),
                        left: t.left - i.left - oe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                    return e || Je
                })
            }
        }), oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            oe.fn[e] = function(i) {
                return Ce(this, function(e, i, r) {
                    var o = K(e);
                    return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                }, e, i, arguments.length)
            }
        }), oe.each(["top", "left"], function(e, t) {
            oe.cssHooks[t] = I(ie.pixelPosition, function(e, n) {
                return n ? (n = A(e, t), ze.test(n) ? oe(e).position()[t] + "px" : n) : void 0
            })
        }), oe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            oe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                oe.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Ce(this, function(t, n, i) {
                        var r;
                        return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), oe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return oe
        });
        var Ft = e.jQuery,
            Wt = e.$;
        return oe.noConflict = function(t) {
            return e.$ === oe && (e.$ = Wt), t && e.jQuery === oe && (e.jQuery = Ft), oe
        }, t || (e.jQuery = e.$ = oe), oe
    }), function(e) {
        e.easing.jswing = e.easing.swing, e.extend(e.easing, {
            def: "easeOutQuad",
            swing: function(t, n, i, r, o) {
                return e.easing[e.easing.def](t, n, i, r, o)
            },
            easeInQuad: function(e, t, n, i, r) {
                return i * (t /= r) * t + n
            },
            easeOutQuad: function(e, t, n, i, r) {
                return -i * (t /= r) * (t - 2) + n
            },
            easeInOutQuad: function(e, t, n, i, r) {
                return 1 > (t /= r / 2) ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
            },
            easeInCubic: function(e, t, n, i, r) {
                return i * (t /= r) * t * t + n
            },
            easeOutCubic: function(e, t, n, i, r) {
                return i * ((t = t / r - 1) * t * t + 1) + n
            },
            easeInOutCubic: function(e, t, n, i, r) {
                return 1 > (t /= r / 2) ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
            },
            easeInQuart: function(e, t, n, i, r) {
                return i * (t /= r) * t * t * t + n
            },
            easeOutQuart: function(e, t, n, i, r) {
                return -i * ((t = t / r - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function(e, t, n, i, r) {
                return 1 > (t /= r / 2) ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function(e, t, n, i, r) {
                return i * (t /= r) * t * t * t * t + n
            },
            easeOutQuint: function(e, t, n, i, r) {
                return i * ((t = t / r - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function(e, t, n, i, r) {
                return 1 > (t /= r / 2) ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function(e, t, n, i, r) {
                return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
            },
            easeOutSine: function(e, t, n, i, r) {
                return i * Math.sin(t / r * (Math.PI / 2)) + n
            },
            easeInOutSine: function(e, t, n, i, r) {
                return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
            },
            easeInExpo: function(e, t, n, i, r) {
                return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
            },
            easeOutExpo: function(e, t, n, i, r) {
                return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
            },
            easeInOutExpo: function(e, t, n, i, r) {
                return 0 == t ? n : t == r ? n + i : 1 > (t /= r / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
            },
            easeInCirc: function(e, t, n, i, r) {
                return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
            },
            easeOutCirc: function(e, t, n, i, r) {
                return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
            },
            easeInOutCirc: function(e, t, n, i, r) {
                return 1 > (t /= r / 2) ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
            },
            easeInElastic: function(e, t, n, i, r) {
                e = 1.70158;
                var o = 0,
                    s = i;
                return 0 == t ? n : 1 == (t /= r) ? n + i : (o || (o = .3 * r), s < Math.abs(i) ? (s = i, e = o / 4) : e = o / (2 * Math.PI) * Math.asin(i / s), -(s * Math.pow(2, 10 * --t) * Math.sin(2 * (t * r - e) * Math.PI / o)) + n)
            },
            easeOutElastic: function(e, t, n, i, r) {
                e = 1.70158;
                var o = 0,
                    s = i;
                return 0 == t ? n : 1 == (t /= r) ? n + i : (o || (o = .3 * r), s < Math.abs(i) ? (s = i, e = o / 4) : e = o / (2 * Math.PI) * Math.asin(i / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - e) * Math.PI / o) + i + n)
            },
            easeInOutElastic: function(e, t, n, i, r) {
                e = 1.70158;
                var o = 0,
                    s = i;
                return 0 == t ? n : 2 == (t /= r / 2) ? n + i : (o || (o = .3 * r * 1.5), s < Math.abs(i) ? (s = i, e = o / 4) : e = o / (2 * Math.PI) * Math.asin(i / s), 1 > t ? -.5 * s * Math.pow(2, 10 * --t) * Math.sin(2 * (t * r - e) * Math.PI / o) + n : s * Math.pow(2, -10 * --t) * Math.sin(2 * (t * r - e) * Math.PI / o) * .5 + i + n)
            },
            easeInBack: function(e, t, n, i, r, o) {
                return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
            },
            easeOutBack: function(e, t, n, i, r, o) {
                return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
            },
            easeInOutBack: function(e, t, n, i, r, o) {
                return void 0 == o && (o = 1.70158), 1 > (t /= r / 2) ? i / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
            },
            easeInBounce: function(t, n, i, r, o) {
                return r - e.easing.easeOutBounce(t, o - n, 0, r, o) + i
            },
            easeOutBounce: function(e, t, n, i, r) {
                return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            },
            easeInOutBounce: function(t, n, i, r, o) {
                return o / 2 > n ? .5 * e.easing.easeInBounce(t, 2 * n, 0, r, o) + i : .5 * e.easing.easeOutBounce(t, 2 * n - o, 0, r, o) + .5 * r + i
            }
        })
    }(jQuery), ! function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.Tether = t()
    }(this, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            var t = getComputedStyle(e) || {},
                n = t.position,
                i = [];
            if ("fixed" === n) return [e];
            for (var r = e;
                (r = r.parentNode) && r && 1 === r.nodeType;) {
                var o = void 0;
                try {
                    o = getComputedStyle(r)
                } catch (s) {}
                if ("undefined" == typeof o || null === o) return i.push(r), i;
                var a = o,
                    l = a.overflow,
                    u = a.overflowX,
                    c = a.overflowY;
                /(auto|scroll)/.test(l + c + u) && ("absolute" !== n || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) && i.push(r)
            }
            return i.push(document.body), i
        }

        function o() {
            w && document.body.removeChild(w), w = null
        }

        function s(e) {
            var t = void 0;
            e === document ? (t = document, e = document.documentElement) : t = e.ownerDocument;
            var n = t.documentElement,
                i = {},
                r = e.getBoundingClientRect();
            for (var o in r) i[o] = r[o];
            var s = I();
            return i.top -= s.top, i.left -= s.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = t.body.clientWidth - i.width - i.left, i.bottom = t.body.clientHeight - i.height - i.top, i
        }

        function a(e) {
            return e.offsetParent || document.documentElement
        }

        function l() {
            var e = document.createElement("div");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            u(t.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), t.appendChild(e), document.body.appendChild(t);
            var n = e.offsetWidth;
            t.style.overflow = "scroll";
            var i = e.offsetWidth;
            n === i && (i = t.clientWidth), document.body.removeChild(t);
            var r = n - i;
            return {
                width: r,
                height: r
            }
        }

        function u() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = [];
            return Array.prototype.push.apply(t, arguments), t.slice(1).forEach(function(t) {
                if (t)
                    for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
            }), e
        }

        function c(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.remove(t)
            });
            else {
                var n = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"),
                    i = d(e).replace(n, " ");
                p(e, i)
            }
        }

        function f(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.add(t)
            });
            else {
                c(e, t);
                var n = d(e) + (" " + t);
                p(e, n)
            }
        }

        function h(e, t) {
            if ("undefined" != typeof e.classList) return e.classList.contains(t);
            var n = d(e);
            return new RegExp("(^| )" + t + "( |$)", "gi").test(n)
        }

        function d(e) {
            return e.className instanceof SVGAnimatedString ? e.className.baseVal : e.className
        }

        function p(e, t) {
            e.setAttribute("class", t)
        }

        function g(e, t, n) {
            n.forEach(function(n) {
                -1 === t.indexOf(n) && h(e, n) && c(e, n)
            }), t.forEach(function(t) {
                h(e, t) || f(e, t)
            })
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function v(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function m(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return e + n >= t && t >= e - n
        }

        function y() {
            return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
        }

        function b() {
            for (var e = {
                    top: 0,
                    left: 0
                }, t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
            return n.forEach(function(t) {
                var n = t.top,
                    i = t.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), e.top += n, e.left += i
            }), e
        }

        function _(e, t) {
            return "string" == typeof e.left && -1 !== e.left.indexOf("%") && (e.left = parseFloat(e.left, 10) / 100 * t.width), "string" == typeof e.top && -1 !== e.top.indexOf("%") && (e.top = parseFloat(e.top, 10) / 100 * t.height), e
        }

        function E(e, t) {
            return "scrollParent" === t ? t = e.scrollParents[0] : "window" === t && (t = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), t === document && (t = t.documentElement), "undefined" != typeof t.nodeType && ! function() {
                var e = s(t),
                    n = e,
                    i = getComputedStyle(t);
                t = [n.left, n.top, e.width + n.left, e.height + n.top], K.forEach(function(e, n) {
                    e = e[0].toUpperCase() + e.substr(1), "Top" === e || "Left" === e ? t[n] += parseFloat(i["border" + e + "Width"]) : t[n] -= parseFloat(i["border" + e + "Width"])
                })
            }(), t
        }
        var T = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            C = void 0;
        "undefined" == typeof C && (C = {
            modules: []
        });
        var w = null,
            x = function() {
                var e = 0;
                return function() {
                    return ++e
                }
            }(),
            A = {},
            I = function() {
                var e = w;
                e || (e = document.createElement("div"), e.setAttribute("data-tether-id", x()), u(e.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(e), w = e);
                var t = e.getAttribute("data-tether-id");
                if ("undefined" == typeof A[t]) {
                    A[t] = {};
                    var n = e.getBoundingClientRect();
                    for (var i in n) A[t][i] = n[i];
                    D(function() {
                        delete A[t]
                    })
                }
                return A[t]
            },
            S = [],
            D = function(e) {
                S.push(e)
            },
            O = function() {
                for (var e = void 0; e = S.pop();) e()
            },
            k = function() {
                function e() {
                    i(this, e)
                }
                return T(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[e] && (this.bindings[e] = []), this.bindings[e].push({
                            handler: t,
                            ctx: n,
                            once: i
                        })
                    }
                }, {
                    key: "once",
                    value: function(e, t, n) {
                        this.on(e, t, n, !0)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[e])
                            if ("undefined" == typeof t) delete this.bindings[e];
                            else
                                for (var n = 0; n < this.bindings[e].length;) this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : ++n
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        if ("undefined" != typeof this.bindings && this.bindings[e]) {
                            for (var t = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; n > r; r++) i[r - 1] = arguments[r];
                            for (; t < this.bindings[e].length;) {
                                var o = this.bindings[e][t],
                                    s = o.handler,
                                    a = o.ctx,
                                    l = o.once,
                                    u = a;
                                "undefined" == typeof u && (u = this), s.apply(u, i), l ? this.bindings[e].splice(t, 1) : ++t
                            }
                        }
                    }
                }]), e
            }();
        C.Utils = {
            getScrollParents: r,
            getBounds: s,
            getOffsetParent: a,
            extend: u,
            addClass: f,
            removeClass: c,
            hasClass: h,
            updateClasses: g,
            defer: D,
            flush: O,
            uniqueId: x,
            Evented: k,
            getScrollBarSize: l,
            removeUtilElements: o
        };
        var N = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                    } catch (l) {
                        r = !0, o = l
                    } finally {
                        try {
                            !i && a["return"] && a["return"]()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            T = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            L = function(e, t, n) {
                for (var i = !0; i;) {
                    var r = e,
                        o = t,
                        s = n;
                    i = !1, null === r && (r = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(r, o);
                    if (void 0 !== a) {
                        if ("value" in a) return a.value;
                        var l = a.get;
                        if (void 0 === l) return;
                        return l.call(s)
                    }
                    var u = Object.getPrototypeOf(r);
                    if (null === u) return;
                    e = u, t = o, n = s, i = !0, a = u = void 0
                }
            };
        if ("undefined" == typeof C) throw new Error("You must include the utils.js file before tether.js");
        var P = C.Utils,
            r = P.getScrollParents,
            s = P.getBounds,
            a = P.getOffsetParent,
            u = P.extend,
            f = P.addClass,
            c = P.removeClass,
            g = P.updateClasses,
            D = P.defer,
            O = P.flush,
            l = P.getScrollBarSize,
            o = P.removeUtilElements,
            j = function() {
                if ("undefined" == typeof document) return "";
                for (var e = document.createElement("div"), t = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if (void 0 !== e.style[i]) return i
                }
            }(),
            H = [],
            R = function() {
                H.forEach(function(e) {
                    e.position(!1)
                }), O()
            };
        ! function() {
            var e = null,
                t = null,
                n = null,
                i = function r() {
                    return "undefined" != typeof t && t > 16 ? (t = Math.min(t - 16, 250), void(n = setTimeout(r, 250))) : void("undefined" != typeof e && y() - e < 10 || (null != n && (clearTimeout(n), n = null), e = y(), R(), t = y() - e))
                };
            "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(e) {
                window.addEventListener(e, i)
            })
        }();
        var M = {
                center: "center",
                left: "right",
                right: "left"
            },
            F = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            W = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            B = function(e, t) {
                var n = e.left,
                    i = e.top;
                return "auto" === n && (n = M[t.left]), "auto" === i && (i = F[t.top]), {
                    left: n,
                    top: i
                }
            },
            q = function(e) {
                var t = e.left,
                    n = e.top;
                return "undefined" != typeof W[e.left] && (t = W[e.left]), "undefined" != typeof W[e.top] && (n = W[e.top]), {
                    left: t,
                    top: n
                }
            },
            V = function(e) {
                var t = e.split(" "),
                    n = N(t, 2),
                    i = n[0],
                    r = n[1];
                return {
                    top: i,
                    left: r
                }
            },
            U = V,
            Q = function(e) {
                function t(e) {
                    var n = this;
                    i(this, t), L(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.position = this.position.bind(this), H.push(this), this.history = [], this.setOptions(e, !1), C.modules.forEach(function(e) {
                        "undefined" != typeof e.initialize && e.initialize.call(n)
                    }), this.position()
                }
                return v(t, e), T(t, [{
                    key: "getClass",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            t = this.options.classes;
                        return "undefined" != typeof t && t[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e
                    }
                }, {
                    key: "setOptions",
                    value: function(e) {
                        var t = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                            i = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = u(i, e);
                        var o = this.options,
                            s = o.element,
                            a = o.target,
                            l = o.targetModifier;
                        if (this.element = s, this.target = a, this.targetModifier = l, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(e) {
                                if ("undefined" == typeof t[e]) throw new Error("Tether Error: Both element and target must be defined");
                                "undefined" != typeof t[e].jquery ? t[e] = t[e][0] : "string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
                            }), f(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && f(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = U(this.options.targetAttachment), this.attachment = U(this.options.attachment), this.offset = V(this.options.offset), this.targetOffset = V(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(n)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if ("undefined" == typeof this.targetModifier) return s(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var e = s(this.target),
                                t = {
                                    height: e.height,
                                    width: e.width,
                                    top: e.top,
                                    left: e.left
                                };
                            return t.height = Math.min(t.height, e.height - (pageYOffset - e.top)), t.height = Math.min(t.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))), t.height = Math.min(innerHeight, t.height), t.height -= 2, t.width = Math.min(t.width, e.width - (pageXOffset - e.left)), t.width = Math.min(t.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))), t.width = Math.min(innerWidth, t.width), t.width -= 2, t.top < pageYOffset && (t.top = pageYOffset), t.left < pageXOffset && (t.left = pageXOffset), t
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var e = void 0,
                                n = this.target;
                            n === document.body ? (n = document.documentElement, e = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : e = s(n);
                            var i = getComputedStyle(n),
                                r = n.scrollWidth > n.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                o = 0;
                            r && (o = 15);
                            var a = e.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - o,
                                t = {
                                    width: 15,
                                    height: .975 * a * (a / n.scrollHeight),
                                    left: e.left + e.width - parseFloat(i.borderLeftWidth) - 15
                                },
                                l = 0;
                            408 > a && this.target === document.body && (l = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (t.height = Math.max(t.height, 24));
                            var u = this.target.scrollTop / (n.scrollHeight - a);
                            return t.top = u * (a - t.height - l) + e.top + parseFloat(i.borderTopWidth), this.target === document.body && (t.height = Math.max(t.height, 24)), t
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(e, t) {
                        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[e] && (this._cache[e] = t.call(this)), this._cache[e]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var e = this,
                            t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                        this.options.addTargetClasses !== !1 && f(this.target, this.getClass("enabled")), f(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(t) {
                            t !== document && t.addEventListener("scroll", e.position)
                        }), t && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var e = this;
                        c(this.target, this.getClass("enabled")), c(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(t) {
                            t.removeEventListener("scroll", e.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        this.disable(), H.forEach(function(t, n) {
                            t === e && H.splice(n, 1)
                        }), 0 === H.length && o()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(e, t) {
                        var n = this;
                        e = e || this.attachment, t = t || this.targetAttachment;
                        var i = ["left", "top", "bottom", "right", "middle", "center"];
                        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                        var r = this._addAttachClasses;
                        e.top && r.push(this.getClass("element-attached") + "-" + e.top), e.left && r.push(this.getClass("element-attached") + "-" + e.left), t.top && r.push(this.getClass("target-attached") + "-" + t.top), t.left && r.push(this.getClass("target-attached") + "-" + t.left);
                        var o = [];
                        i.forEach(function(e) {
                            o.push(n.getClass("element-attached") + "-" + e), o.push(n.getClass("target-attached") + "-" + e)
                        }), D(function() {
                            "undefined" != typeof n._addAttachClasses && (g(n.element, n._addAttachClasses, o), n.options.addTargetClasses !== !1 && g(n.target, n._addAttachClasses, o), delete n._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var e = this,
                            t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var n = B(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, n);
                            var i = this.cache("element-bounds", function() {
                                    return s(e.element)
                                }),
                                r = i.width,
                                o = i.height;
                            if (0 === r && 0 === o && "undefined" != typeof this.lastSize) {
                                var u = this.lastSize;
                                r = u.width, o = u.height
                            } else this.lastSize = {
                                width: r,
                                height: o
                            };
                            var c = this.cache("target-bounds", function() {
                                    return e.getTargetBounds()
                                }),
                                f = c,
                                h = _(q(this.attachment), {
                                    width: r,
                                    height: o
                                }),
                                d = _(q(n), f),
                                p = _(this.offset, {
                                    width: r,
                                    height: o
                                }),
                                g = _(this.targetOffset, f);
                            h = b(h, p), d = b(d, g);
                            for (var v = c.left + d.left - h.left, m = c.top + d.top - h.top, y = 0; y < C.modules.length; ++y) {
                                var E = C.modules[y],
                                    T = E.position.call(this, {
                                        left: v,
                                        top: m,
                                        targetAttachment: n,
                                        targetPos: c,
                                        elementPos: i,
                                        offset: h,
                                        targetOffset: d,
                                        manualOffset: p,
                                        manualTargetOffset: g,
                                        scrollbarSize: x,
                                        attachment: this.attachment
                                    });
                                if (T === !1) return !1;
                                "undefined" != typeof T && "object" == typeof T && (m = T.top, v = T.left)
                            }
                            var w = {
                                    page: {
                                        top: m,
                                        left: v
                                    },
                                    viewport: {
                                        top: m - pageYOffset,
                                        bottom: pageYOffset - m - o + innerHeight,
                                        left: v - pageXOffset,
                                        right: pageXOffset - v - r + innerWidth
                                    }
                                },
                                x = void 0;
                            return document.body.scrollWidth > window.innerWidth && (x = this.cache("scrollbar-size", l), w.viewport.bottom -= x.height), document.body.scrollHeight > window.innerHeight && (x = this.cache("scrollbar-size", l), w.viewport.right -= x.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (w.page.bottom = document.body.scrollHeight - m - o, w.page.right = document.body.scrollWidth - v - r), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                                var t = e.cache("target-offsetparent", function() {
                                        return a(e.target)
                                    }),
                                    n = e.cache("target-offsetparent-bounds", function() {
                                        return s(t)
                                    }),
                                    i = getComputedStyle(t),
                                    r = n,
                                    o = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                                        o[e.toLowerCase()] = parseFloat(i["border" + e + "Width"])
                                    }), n.right = document.body.scrollWidth - n.left - r.width + o.right, n.bottom = document.body.scrollHeight - n.top - r.height + o.bottom, w.page.top >= n.top + o.top && w.page.bottom >= n.bottom && w.page.left >= n.left + o.left && w.page.right >= n.right) {
                                    var l = t.scrollTop,
                                        u = t.scrollLeft;
                                    w.offset = {
                                        top: w.page.top - n.top + l - o.top,
                                        left: w.page.left - n.left + u - o.left
                                    }
                                }
                            }(), this.move(w), this.history.unshift(w), this.history.length > 3 && this.history.pop(), t && O(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        var t = this;
                        if ("undefined" != typeof this.element.parentNode) {
                            var n = {};
                            for (var i in e) {
                                n[i] = {};
                                for (var r in e[i]) {
                                    for (var o = !1, s = 0; s < this.history.length; ++s) {
                                        var l = this.history[s];
                                        if ("undefined" != typeof l[i] && !m(l[i][r], e[i][r])) {
                                            o = !0;
                                            break
                                        }
                                    }
                                    o || (n[i][r] = !0)
                                }
                            }
                            var c = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                f = function(e, n) {
                                    var i = "undefined" != typeof t.options.optimizations,
                                        r = i ? t.options.optimizations.gpu : null;
                                    if (r !== !1) {
                                        var o = void 0,
                                            s = void 0;
                                        e.top ? (c.top = 0, o = n.top) : (c.bottom = 0, o = -n.bottom), e.left ? (c.left = 0, s = n.left) : (c.right = 0, s = -n.right), c[j] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(o) + "px)", "msTransform" !== j && (c[j] += " translateZ(0)")
                                    } else e.top ? c.top = n.top + "px" : c.bottom = n.bottom + "px", e.left ? c.left = n.left + "px" : c.right = n.right + "px"
                                },
                                h = !1;
                            if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (c.position = "absolute", f(n.page, e.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (c.position = "fixed", f(n.viewport, e.viewport)) : "undefined" != typeof n.offset && n.offset.top && n.offset.left ? ! function() {
                                    c.position = "absolute";
                                    var i = t.cache("target-offsetparent", function() {
                                        return a(t.target)
                                    });
                                    a(t.element) !== i && D(function() {
                                        t.element.parentNode.removeChild(t.element), i.appendChild(t.element)
                                    }), f(n.offset, e.offset), h = !0
                                }() : (c.position = "absolute", f({
                                    top: !0,
                                    left: !0
                                }, e.page)), !h) {
                                for (var d = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName;) {
                                    if ("static" !== getComputedStyle(p).position) {
                                        d = !1;
                                        break
                                    }
                                    p = p.parentNode
                                }
                                d || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element))
                            }
                            var g = {},
                                v = !1;
                            for (var r in c) {
                                var y = c[r],
                                    b = this.element.style[r];
                                b !== y && (v = !0, g[r] = y)
                            }
                            v && D(function() {
                                u(t.element.style, g)
                            })
                        }
                    }
                }]), t
            }(k);
        Q.modules = [], C.position = R;
        var G = u(Q, C),
            N = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                    } catch (l) {
                        r = !0, o = l
                    } finally {
                        try {
                            !i && a["return"] && a["return"]()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            P = C.Utils,
            s = P.getBounds,
            u = P.extend,
            g = P.updateClasses,
            D = P.defer,
            K = ["left", "top", "right", "bottom"];
        C.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    i = e.left,
                    r = e.targetAttachment;
                if (!this.options.constraints) return !0;
                var o = this.cache("element-bounds", function() {
                        return s(t.element)
                    }),
                    a = o.height,
                    l = o.width;
                if (0 === l && 0 === a && "undefined" != typeof this.lastSize) {
                    var c = this.lastSize;
                    l = c.width, a = c.height
                }
                var f = this.cache("target-bounds", function() {
                        return t.getTargetBounds()
                    }),
                    h = f.height,
                    d = f.width,
                    p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(e) {
                    var t = e.outOfBoundsClass,
                        n = e.pinnedClass;
                    t && p.push(t), n && p.push(n)
                }), p.forEach(function(e) {
                    ["left", "top", "right", "bottom"].forEach(function(t) {
                        p.push(e + "-" + t)
                    })
                });
                var v = [],
                    m = u({}, r),
                    y = u({}, this.attachment);
                return this.options.constraints.forEach(function(e) {
                    var o = e.to,
                        s = e.attachment,
                        u = e.pin;
                    "undefined" == typeof s && (s = "");
                    var c = void 0,
                        f = void 0;
                    if (s.indexOf(" ") >= 0) {
                        var p = s.split(" "),
                            g = N(p, 2);
                        f = g[0], c = g[1]
                    } else c = f = s;
                    var b = E(t, o);
                    ("target" === f || "both" === f) && (n < b[1] && "top" === m.top && (n += h, m.top = "bottom"), n + a > b[3] && "bottom" === m.top && (n -= h, m.top = "top")), "together" === f && ("top" === m.top && ("bottom" === y.top && n < b[1] ? (n += h, m.top = "bottom", n += a, y.top = "top") : "top" === y.top && n + a > b[3] && n - (a - h) >= b[1] && (n -= a - h, m.top = "bottom", y.top = "bottom")), "bottom" === m.top && ("top" === y.top && n + a > b[3] ? (n -= h, m.top = "top", n -= a, y.top = "bottom") : "bottom" === y.top && n < b[1] && n + (2 * a - h) <= b[3] && (n += a - h, m.top = "top", y.top = "top")), "middle" === m.top && (n + a > b[3] && "top" === y.top ? (n -= a, y.top = "bottom") : n < b[1] && "bottom" === y.top && (n += a, y.top = "top"))), ("target" === c || "both" === c) && (i < b[0] && "left" === m.left && (i += d, m.left = "right"), i + l > b[2] && "right" === m.left && (i -= d, m.left = "left")), "together" === c && (i < b[0] && "left" === m.left ? "right" === y.left ? (i += d, m.left = "right", i += l, y.left = "left") : "left" === y.left && (i += d, m.left = "right", i -= l, y.left = "right") : i + l > b[2] && "right" === m.left ? "left" === y.left ? (i -= d, m.left = "left", i -= l, y.left = "right") : "right" === y.left && (i -= d, m.left = "left", i += l, y.left = "left") : "center" === m.left && (i + l > b[2] && "left" === y.left ? (i -= l, y.left = "right") : i < b[0] && "right" === y.left && (i += l, y.left = "left"))), ("element" === f || "both" === f) && (n < b[1] && "bottom" === y.top && (n += a, y.top = "top"), n + a > b[3] && "top" === y.top && (n -= a, y.top = "bottom")), ("element" === c || "both" === c) && (i < b[0] && ("right" === y.left ? (i += l, y.left = "left") : "center" === y.left && (i += l / 2, y.left = "left")), i + l > b[2] && ("left" === y.left ? (i -= l, y.left = "right") : "center" === y.left && (i -= l / 2, y.left = "right"))), "string" == typeof u ? u = u.split(",").map(function(e) {
                        return e.trim()
                    }) : u === !0 && (u = ["top", "left", "right", "bottom"]), u = u || [];
                    var _ = [],
                        T = [];
                    n < b[1] && (u.indexOf("top") >= 0 ? (n = b[1], _.push("top")) : T.push("top")), n + a > b[3] && (u.indexOf("bottom") >= 0 ? (n = b[3] - a, _.push("bottom")) : T.push("bottom")), i < b[0] && (u.indexOf("left") >= 0 ? (i = b[0], _.push("left")) : T.push("left")), i + l > b[2] && (u.indexOf("right") >= 0 ? (i = b[2] - l, _.push("right")) : T.push("right")), _.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.pinnedClass ? t.options.pinnedClass : t.getClass("pinned"), v.push(e), _.forEach(function(t) {
                            v.push(e + "-" + t)
                        })
                    }(), T.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.outOfBoundsClass ? t.options.outOfBoundsClass : t.getClass("out-of-bounds"), v.push(e), T.forEach(function(t) {
                            v.push(e + "-" + t)
                        })
                    }(), (_.indexOf("left") >= 0 || _.indexOf("right") >= 0) && (y.left = m.left = !1), (_.indexOf("top") >= 0 || _.indexOf("bottom") >= 0) && (y.top = m.top = !1), (m.top !== r.top || m.left !== r.left || y.top !== t.attachment.top || y.left !== t.attachment.left) && (t.updateAttachClasses(y, m), t.trigger("update", {
                        attachment: y,
                        targetAttachment: m
                    }))
                }), D(function() {
                    t.options.addTargetClasses !== !1 && g(t.target, v, p), g(t.element, v, p)
                }), {
                    top: n,
                    left: i
                }
            }
        });
        var P = C.Utils,
            s = P.getBounds,
            g = P.updateClasses,
            D = P.defer;
        C.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    i = e.left,
                    r = this.cache("element-bounds", function() {
                        return s(t.element)
                    }),
                    o = r.height,
                    a = r.width,
                    l = this.getTargetBounds(),
                    u = n + o,
                    c = i + a,
                    f = [];
                n <= l.bottom && u >= l.top && ["left", "right"].forEach(function(e) {
                    var t = l[e];
                    (t === i || t === c) && f.push(e)
                }), i <= l.right && c >= l.left && ["top", "bottom"].forEach(function(e) {
                    var t = l[e];
                    (t === n || t === u) && f.push(e)
                });
                var h = [],
                    d = [],
                    p = ["left", "top", "right", "bottom"];
                return h.push(this.getClass("abutted")), p.forEach(function(e) {
                    h.push(t.getClass("abutted") + "-" + e)
                }), f.length && d.push(this.getClass("abutted")), f.forEach(function(e) {
                    d.push(t.getClass("abutted") + "-" + e)
                }), D(function() {
                    t.options.addTargetClasses !== !1 && g(t.target, d, h), g(t.element, d, h)
                }), !0
            }
        });
        var N = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                } catch (l) {
                    r = !0, o = l
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return C.modules.push({
            position: function(e) {
                var t = e.top,
                    n = e.left;
                if (this.options.shift) {
                    var i = this.options.shift;
                    "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                        top: t,
                        left: n
                    }));
                    var r = void 0,
                        o = void 0;
                    if ("string" == typeof i) {
                        i = i.split(" "), i[1] = i[1] || i[0];
                        var s = i,
                            a = N(s, 2);
                        r = a[0], o = a[1], r = parseFloat(r, 10), o = parseFloat(o, 10)
                    } else r = i.top, o = i.left;
                    return t += r, n += o, {
                        top: t,
                        left: n
                    }
                }
            }
        }), G
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] >= 3) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v3.0.0")
}(jQuery), + function(e) {
    "use strict";

    function t(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function(e, t, n) {
            for (var i = !0; i;) {
                var r = e,
                    o = t,
                    s = n;
                i = !1, null === r && (r = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var l = a.get;
                    if (void 0 === l) return;
                    return l.call(s)
                }
                var u = Object.getPrototypeOf(r);
                if (null === u) return;
                e = u, t = o, n = s, i = !0, a = u = void 0
            }
        },
        r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = function(e) {
            function t(e) {
                return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function n(e) {
                return (e[0] || e).nodeType
            }

            function i() {
                return {
                    bindType: a.end,
                    delegateType: a.end,
                    handle: function(t) {
                        return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                    }
                }
            }

            function r() {
                if (window.QUnit) return !1;
                var e = document.createElement("bootstrap");
                for (var t in l)
                    if (void 0 !== e.style[t]) return {
                        end: l[t]
                    };
                return !1
            }

            function o(t) {
                var n = this,
                    i = !1;
                return e(this).one(u.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || u.triggerTransitionEnd(n)
                }, t), this
            }

            function s() {
                a = r(), e.fn.emulateTransitionEnd = o, u.supportsTransitionEnd() && (e.event.special[u.TRANSITION_END] = i())
            }
            var a = !1,
                l = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                u = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(e) {
                        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function(e) {
                        var t = e.getAttribute("data-target");
                        return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t
                    },
                    reflow: function(e) {
                        new Function("bs", "return bs")(e.offsetHeight)
                    },
                    triggerTransitionEnd: function(t) {
                        e(t).trigger(a.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(a)
                    },
                    typeCheckConfig: function(e, i, r) {
                        for (var o in r)
                            if (r.hasOwnProperty(o)) {
                                var s = r[o],
                                    a = i[o],
                                    l = void 0;
                                if (l = a && n(a) ? "element" : t(a), !new RegExp(s).test(l)) throw new Error(e.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'))
                            }
                    }
                };
            return s(), u
        }(jQuery),
        s = (function(e) {
            var t = "alert",
                i = "4.0.0-alpha",
                s = "bs.alert",
                a = "." + s,
                l = ".data-api",
                u = e.fn[t],
                c = 150,
                f = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                h = {
                    CLOSE: "close" + a,
                    CLOSED: "closed" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                d = {
                    ALERT: "alert",
                    FADE: "fade",
                    IN: "in"
                },
                p = function() {
                    function t(e) {
                        n(this, t), this._element = e
                    }
                    return r(t, [{
                        key: "close",
                        value: function(e) {
                            e = e || this._element;
                            var t = this._getRootElement(e),
                                n = this._triggerCloseEvent(t);
                            n.isDefaultPrevented() || this._removeElement(t)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, s), this._element = null
                        }
                    }, {
                        key: "_getRootElement",
                        value: function(t) {
                            var n = o.getSelectorFromElement(t),
                                i = !1;
                            return n && (i = e(n)[0]), i || (i = e(t).closest("." + d.ALERT)[0]), i
                        }
                    }, {
                        key: "_triggerCloseEvent",
                        value: function(t) {
                            var n = e.Event(h.CLOSE);
                            return e(t).trigger(n), n
                        }
                    }, {
                        key: "_removeElement",
                        value: function(t) {
                            return e(t).removeClass(d.IN), o.supportsTransitionEnd() && e(t).hasClass(d.FADE) ? void e(t).one(o.TRANSITION_END, e.proxy(this._destroyElement, this, t)).emulateTransitionEnd(c) : void this._destroyElement(t)
                        }
                    }, {
                        key: "_destroyElement",
                        value: function(t) {
                            e(t).detach().trigger(h.CLOSED).remove()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    r = i.data(s);
                                r || (r = new t(this), i.data(s, r)), "close" === n && r[n](this)
                            })
                        }
                    }, {
                        key: "_handleDismiss",
                        value: function(e) {
                            return function(t) {
                                t && t.preventDefault(), e.close(this)
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), t
                }();
            return e(document).on(h.CLICK_DATA_API, f.DISMISS, p._handleDismiss(new p)), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
                return e.fn[t] = u, p._jQueryInterface
            }, p
        }(jQuery), function(e) {
            var t = "button",
                i = "4.0.0-alpha",
                o = "bs.button",
                s = "." + o,
                a = ".data-api",
                l = e.fn[t],
                u = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                c = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                f = {
                    CLICK_DATA_API: "click" + s + a,
                    FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)
                },
                h = function() {
                    function t(e) {
                        n(this, t), this._element = e
                    }
                    return r(t, [{
                        key: "toggle",
                        value: function() {
                            var t = !0,
                                n = e(this._element).closest(c.DATA_TOGGLE)[0];
                            if (n) {
                                var i = e(this._element).find(c.INPUT)[0];
                                if (i) {
                                    if ("radio" === i.type)
                                        if (i.checked && e(this._element).hasClass(u.ACTIVE)) t = !1;
                                        else {
                                            var r = e(n).find(c.ACTIVE)[0];
                                            r && e(r).removeClass(u.ACTIVE)
                                        }
                                    t && (i.checked = !e(this._element).hasClass(u.ACTIVE), e(this._element).trigger("change"))
                                }
                            } else this._element.setAttribute("aria-pressed", !e(this._element).hasClass(u.ACTIVE));
                            t && e(this._element).toggleClass(u.ACTIVE)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, o), this._element = null
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(n) {
                            return this.each(function() {
                                var i = e(this).data(o);
                                i || (i = new t(this), e(this).data(o, i)), "toggle" === n && i[n]()
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), t
                }();
            return e(document).on(f.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(u.BUTTON) || (n = e(n).closest(c.BUTTON)), h._jQueryInterface.call(e(n), "toggle")
            }).on(f.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
                var n = e(t.target).closest(c.BUTTON)[0];
                e(n).toggleClass(u.FOCUS, /^focus(in)?$/.test(t.type))
            }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
                return e.fn[t] = l, h._jQueryInterface
            }, h
        }(jQuery), function(e) {
            var t = "carousel",
                i = "4.0.0-alpha",
                s = "bs.carousel",
                a = "." + s,
                l = ".data-api",
                u = e.fn[t],
                c = 600,
                f = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                h = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                d = {
                    NEXT: "next",
                    PREVIOUS: "prev"
                },
                p = {
                    SLIDE: "slide" + a,
                    SLID: "slid" + a,
                    KEYDOWN: "keydown" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a,
                    LOAD_DATA_API: "load" + a + l,
                    CLICK_DATA_API: "click" + a + l
                },
                g = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "right",
                    LEFT: "left",
                    ITEM: "carousel-item"
                },
                v = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".next, .prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                m = function() {
                    function l(t, i) {
                        n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(v.INDICATORS)[0], this._addEventListeners()
                    }
                    return r(l, [{
                        key: "next",
                        value: function() {
                            this._isSliding || this._slide(d.NEXT)
                        }
                    }, {
                        key: "nextWhenVisible",
                        value: function() {
                            document.hidden || this.next()
                        }
                    }, {
                        key: "prev",
                        value: function() {
                            this._isSliding || this._slide(d.PREVIOUS)
                        }
                    }, {
                        key: "pause",
                        value: function(t) {
                            t || (this._isPaused = !0), e(this._element).find(v.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }
                    }, {
                        key: "cycle",
                        value: function(t) {
                            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(e.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                        }
                    }, {
                        key: "to",
                        value: function(t) {
                            var n = this;
                            this._activeElement = e(this._element).find(v.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || 0 > t)) {
                                if (this._isSliding) return void e(this._element).one(p.SLID, function() {
                                    return n.to(t)
                                });
                                if (i === t) return this.pause(), void this.cycle();
                                var r = t > i ? d.NEXT : d.PREVIOUS;
                                this._slide(r, this._items[t])
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e(this._element).off(a), e.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, f, n), o.typeCheckConfig(t, n, h), n
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function() {
                            this._config.keyboard && e(this._element).on(p.KEYDOWN, e.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || e(this._element).on(p.MOUSEENTER, e.proxy(this.pause, this)).on(p.MOUSELEAVE, e.proxy(this.cycle, this))
                        }
                    }, {
                        key: "_keydown",
                        value: function(e) {
                            if (e.preventDefault(), !/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case 37:
                                    this.prev();
                                    break;
                                case 39:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                        }
                    }, {
                        key: "_getItemIndex",
                        value: function(t) {
                            return this._items = e.makeArray(e(t).parent().find(v.ITEM)), this._items.indexOf(t)
                        }
                    }, {
                        key: "_getItemByDirection",
                        value: function(e, t) {
                            var n = e === d.NEXT,
                                i = e === d.PREVIOUS,
                                r = this._getItemIndex(t),
                                o = this._items.length - 1,
                                s = i && 0 === r || n && r === o;
                            if (s && !this._config.wrap) return t;
                            var a = e === d.PREVIOUS ? -1 : 1,
                                l = (r + a) % this._items.length;
                            return -1 === l ? this._items[this._items.length - 1] : this._items[l]
                        }
                    }, {
                        key: "_triggerSlideEvent",
                        value: function(t, n) {
                            var i = e.Event(p.SLIDE, {
                                relatedTarget: t,
                                direction: n
                            });
                            return e(this._element).trigger(i), i
                        }
                    }, {
                        key: "_setActiveIndicatorElement",
                        value: function(t) {
                            if (this._indicatorsElement) {
                                e(this._indicatorsElement).find(v.ACTIVE).removeClass(g.ACTIVE);
                                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                                n && e(n).addClass(g.ACTIVE)
                            }
                        }
                    }, {
                        key: "_slide",
                        value: function(t, n) {
                            var i = this,
                                r = e(this._element).find(v.ACTIVE_ITEM)[0],
                                s = n || r && this._getItemByDirection(t, r),
                                a = Boolean(this._interval),
                                l = t === d.NEXT ? g.LEFT : g.RIGHT;
                            if (s && e(s).hasClass(g.ACTIVE)) return void(this._isSliding = !1);
                            var u = this._triggerSlideEvent(s, l);
                            if (!u.isDefaultPrevented() && r && s) {
                                this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                                var f = e.Event(p.SLID, {
                                    relatedTarget: s,
                                    direction: l
                                });
                                o.supportsTransitionEnd() && e(this._element).hasClass(g.SLIDE) ? (e(s).addClass(t), o.reflow(s), e(r).addClass(l), e(s).addClass(l), e(r).one(o.TRANSITION_END, function() {
                                    e(s).removeClass(l).removeClass(t), e(s).addClass(g.ACTIVE), e(r).removeClass(g.ACTIVE).removeClass(t).removeClass(l), i._isSliding = !1, setTimeout(function() {
                                        return e(i._element).trigger(f)
                                    }, 0)
                                }).emulateTransitionEnd(c)) : (e(r).removeClass(g.ACTIVE), e(s).addClass(g.ACTIVE), this._isSliding = !1, e(this._element).trigger(f)), a && this.cycle()
                            }
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this).data(s),
                                    i = e.extend({}, f, e(this).data());
                                "object" == typeof t && e.extend(i, t);
                                var r = "string" == typeof t ? t : i.slide;
                                if (n || (n = new l(this, i), e(this).data(s, n)), "number" == typeof t) n.to(t);
                                else if ("string" == typeof r) {
                                    if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                                    n[r]()
                                } else i.interval && (n.pause(), n.cycle())
                            })
                        }
                    }, {
                        key: "_dataApiClickHandler",
                        value: function(t) {
                            var n = o.getSelectorFromElement(this);
                            if (n) {
                                var i = e(n)[0];
                                if (i && e(i).hasClass(g.CAROUSEL)) {
                                    var r = e.extend({}, e(i).data(), e(this).data()),
                                        a = this.getAttribute("data-slide-to");
                                    a && (r.interval = !1), l._jQueryInterface.call(e(i), r), a && e(i).data(s).to(a), t.preventDefault()
                                }
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }]), l
                }();
            return e(document).on(p.CLICK_DATA_API, v.DATA_SLIDE, m._dataApiClickHandler), e(window).on(p.LOAD_DATA_API, function() {
                e(v.DATA_RIDE).each(function() {
                    var t = e(this);
                    m._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
                return e.fn[t] = u, m._jQueryInterface
            }, m
        }(jQuery), function(e) {
            var t = "collapse",
                i = "4.0.0-alpha",
                s = "bs.collapse",
                a = "." + s,
                l = ".data-api",
                u = e.fn[t],
                c = 600,
                f = {
                    toggle: !0,
                    parent: ""
                },
                h = {
                    toggle: "boolean",
                    parent: "string"
                },
                d = {
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                p = {
                    IN: "in",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                g = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                v = {
                    ACTIVES: ".panel > .in, .panel > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                m = function() {
                    function a(t, i) {
                        n(this, a), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return r(a, [{
                        key: "toggle",
                        value: function() {
                            e(this._element).hasClass(p.IN) ? this.hide() : this.show()
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var t = this;
                            if (!this._isTransitioning && !e(this._element).hasClass(p.IN)) {
                                var n = void 0,
                                    i = void 0;
                                if (this._parent && (n = e.makeArray(e(v.ACTIVES)), n.length || (n = null)), !(n && (i = e(n).data(s), i && i._isTransitioning))) {
                                    var r = e.Event(d.SHOW);
                                    if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
                                        n && (a._jQueryInterface.call(e(n), "hide"), i || e(n).data(s, null));
                                        var l = this._getDimension();
                                        e(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && e(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var u = function() {
                                            e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(d.SHOWN)
                                        };
                                        if (!o.supportsTransitionEnd()) return void u();
                                        var f = l[0].toUpperCase() + l.slice(1),
                                            h = "scroll" + f;
                                        e(this._element).one(o.TRANSITION_END, u).emulateTransitionEnd(c), this._element.style[l] = this._element[h] + "px"
                                    }
                                }
                            }
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass(p.IN)) {
                                var n = e.Event(d.HIDE);
                                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension(),
                                        r = i === g.WIDTH ? "offsetWidth" : "offsetHeight";
                                    this._element.style[i] = this._element[r] + "px", o.reflow(this._element), e(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && e(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1),
                                        this.setTransitioning(!0);
                                    var s = function() {
                                        t.setTransitioning(!1), e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(d.HIDDEN)
                                    };
                                    return this._element.style[i] = 0, o.supportsTransitionEnd() ? void e(this._element).one(o.TRANSITION_END, s).emulateTransitionEnd(c) : void s()
                                }
                            }
                        }
                    }, {
                        key: "setTransitioning",
                        value: function(e) {
                            this._isTransitioning = e
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, f, n), n.toggle = Boolean(n.toggle), o.typeCheckConfig(t, n, h), n
                        }
                    }, {
                        key: "_getDimension",
                        value: function() {
                            var t = e(this._element).hasClass(g.WIDTH);
                            return t ? g.WIDTH : g.HEIGHT
                        }
                    }, {
                        key: "_getParent",
                        value: function() {
                            var t = this,
                                n = e(this._config.parent)[0],
                                i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return e(n).find(i).each(function(e, n) {
                                t._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n])
                            }), n
                        }
                    }, {
                        key: "_addAriaAndCollapsedClass",
                        value: function(t, n) {
                            if (t) {
                                var i = e(t).hasClass(p.IN);
                                t.setAttribute("aria-expanded", i), n.length && e(n).toggleClass(p.COLLAPSED, !i).attr("aria-expanded", i)
                            }
                        }
                    }], [{
                        key: "_getTargetFromElement",
                        value: function(t) {
                            var n = o.getSelectorFromElement(t);
                            return n ? e(n)[0] : null
                        }
                    }, {
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this),
                                    i = n.data(s),
                                    r = e.extend({}, f, n.data(), "object" == typeof t && t);
                                if (!i && r.toggle && /show|hide/.test(t) && (r.toggle = !1), i || (i = new a(this, r), n.data(s, i)), "string" == typeof t) {
                                    if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                    i[t]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }]), a
                }();
            return e(document).on(d.CLICK_DATA_API, v.DATA_TOGGLE, function(t) {
                t.preventDefault();
                var n = m._getTargetFromElement(this),
                    i = e(n).data(s),
                    r = i ? "toggle" : e(this).data();
                m._jQueryInterface.call(e(n), r)
            }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
                return e.fn[t] = u, m._jQueryInterface
            }, m
        }(jQuery), function(e) {
            var t = "dropdown",
                i = "4.0.0-alpha",
                s = "bs.dropdown",
                a = "." + s,
                l = ".data-api",
                u = e.fn[t],
                c = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK: "click" + a,
                    CLICK_DATA_API: "click" + a + l,
                    KEYDOWN_DATA_API: "keydown" + a + l
                },
                f = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    OPEN: "open"
                },
                h = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                d = function() {
                    function t(e) {
                        n(this, t), this._element = e, this._addEventListeners()
                    }
                    return r(t, [{
                        key: "toggle",
                        value: function() {
                            if (this.disabled || e(this).hasClass(f.DISABLED)) return !1;
                            var n = t._getParentFromElement(this),
                                i = e(n).hasClass(f.OPEN);
                            if (t._clearMenus(), i) return !1;
                            if ("ontouchstart" in document.documentElement && !e(n).closest(h.NAVBAR_NAV).length) {
                                var r = document.createElement("div");
                                r.className = f.BACKDROP, e(r).insertBefore(this), e(r).on("click", t._clearMenus)
                            }
                            var o = {
                                    relatedTarget: this
                                },
                                s = e.Event(c.SHOW, o);
                            return e(n).trigger(s), s.isDefaultPrevented() ? !1 : (this.focus(), this.setAttribute("aria-expanded", "true"), e(n).toggleClass(f.OPEN), e(n).trigger(e.Event(c.SHOWN, o)), !1)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, s), e(this._element).off(a), this._element = null
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function() {
                            e(this._element).on(c.CLICK, this.toggle)
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(n) {
                            return this.each(function() {
                                var i = e(this).data(s);
                                if (i || e(this).data(s, i = new t(this)), "string" == typeof n) {
                                    if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                                    i[n].call(this)
                                }
                            })
                        }
                    }, {
                        key: "_clearMenus",
                        value: function(n) {
                            if (!n || 3 !== n.which) {
                                var i = e(h.BACKDROP)[0];
                                i && i.parentNode.removeChild(i);
                                for (var r = e.makeArray(e(h.DATA_TOGGLE)), o = 0; o < r.length; o++) {
                                    var s = t._getParentFromElement(r[o]),
                                        a = {
                                            relatedTarget: r[o]
                                        };
                                    if (e(s).hasClass(f.OPEN) && !(n && "click" === n.type && /input|textarea/i.test(n.target.tagName) && e.contains(s, n.target))) {
                                        var l = e.Event(c.HIDE, a);
                                        e(s).trigger(l), l.isDefaultPrevented() || (r[o].setAttribute("aria-expanded", "false"), e(s).removeClass(f.OPEN).trigger(e.Event(c.HIDDEN, a)))
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_getParentFromElement",
                        value: function(t) {
                            var n = void 0,
                                i = o.getSelectorFromElement(t);
                            return i && (n = e(i)[0]), n || t.parentNode
                        }
                    }, {
                        key: "_dataApiKeydownHandler",
                        value: function(n) {
                            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(f.DISABLED))) {
                                var i = t._getParentFromElement(this),
                                    r = e(i).hasClass(f.OPEN);
                                if (!r && 27 !== n.which || r && 27 === n.which) {
                                    if (27 === n.which) {
                                        var o = e(i).find(h.DATA_TOGGLE)[0];
                                        e(o).trigger("focus")
                                    }
                                    return void e(this).trigger("click")
                                }
                                var s = e.makeArray(e(h.VISIBLE_ITEMS));
                                if (s = s.filter(function(e) {
                                        return e.offsetWidth || e.offsetHeight
                                    }), s.length) {
                                    var a = s.indexOf(n.target);
                                    38 === n.which && a > 0 && a--, 40 === n.which && a < s.length - 1 && a++, ~a || (a = 0), s[a].focus()
                                }
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), t
                }();
            return e(document).on(c.KEYDOWN_DATA_API, h.DATA_TOGGLE, d._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, h.ROLE_MENU, d._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, h.ROLE_LISTBOX, d._dataApiKeydownHandler).on(c.CLICK_DATA_API, d._clearMenus).on(c.CLICK_DATA_API, h.DATA_TOGGLE, d.prototype.toggle).on(c.CLICK_DATA_API, h.FORM_CHILD, function(e) {
                e.stopPropagation()
            }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function() {
                return e.fn[t] = u, d._jQueryInterface
            }, d
        }(jQuery), function(e) {
            var t = "modal",
                i = "4.0.0-alpha",
                s = "bs.modal",
                a = "." + s,
                l = ".data-api",
                u = e.fn[t],
                c = 300,
                f = 150,
                h = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                d = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                p = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    FOCUSIN: "focusin" + a,
                    RESIZE: "resize" + a,
                    CLICK_DISMISS: "click.dismiss" + a,
                    KEYDOWN_DISMISS: "keydown.dismiss" + a,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + a,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                g = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    IN: "in"
                },
                v = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                },
                m = function() {
                    function l(t, i) {
                        n(this, l), this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(v.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return r(l, [{
                        key: "toggle",
                        value: function(e) {
                            return this._isShown ? this.hide() : this.show(e)
                        }
                    }, {
                        key: "show",
                        value: function(t) {
                            var n = this,
                                i = e.Event(p.SHOW, {
                                    relatedTarget: t
                                });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), e(document.body).addClass(g.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(p.CLICK_DISMISS, v.DATA_DISMISS, e.proxy(this.hide, this)), e(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(p.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(e.proxy(this._showElement, this, t)))
                        }
                    }, {
                        key: "hide",
                        value: function(t) {
                            t && t.preventDefault();
                            var n = e.Event(p.HIDE);
                            e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), e(document).off(p.FOCUSIN), e(this._element).removeClass(g.IN), e(this._element).off(p.CLICK_DISMISS), e(this._dialog).off(p.MOUSEDOWN_DISMISS), o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE) ? e(this._element).one(o.TRANSITION_END, e.proxy(this._hideModal, this)).emulateTransitionEnd(c) : this._hideModal())
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, s), e(window).off(a), e(document).off(a), e(this._element).off(a), e(this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, h, n), o.typeCheckConfig(t, n, d), n
                        }
                    }, {
                        key: "_showElement",
                        value: function(t) {
                            var n = this,
                                i = o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.scrollTop = 0, i && o.reflow(this._element), e(this._element).addClass(g.IN), this._config.focus && this._enforceFocus();
                            var r = e.Event(p.SHOWN, {
                                    relatedTarget: t
                                }),
                                s = function() {
                                    n._config.focus && n._element.focus(), e(n._element).trigger(r)
                                };
                            i ? e(this._dialog).one(o.TRANSITION_END, s).emulateTransitionEnd(c) : s()
                        }
                    }, {
                        key: "_enforceFocus",
                        value: function() {
                            var t = this;
                            e(document).off(p.FOCUSIN).on(p.FOCUSIN, function(n) {
                                t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                            })
                        }
                    }, {
                        key: "_setEscapeEvent",
                        value: function() {
                            var t = this;
                            this._isShown && this._config.keyboard ? e(this._element).on(p.KEYDOWN_DISMISS, function(e) {
                                27 === e.which && t.hide()
                            }) : this._isShown || e(this._element).off(p.KEYDOWN_DISMISS)
                        }
                    }, {
                        key: "_setResizeEvent",
                        value: function() {
                            this._isShown ? e(window).on(p.RESIZE, e.proxy(this._handleUpdate, this)) : e(window).off(p.RESIZE)
                        }
                    }, {
                        key: "_hideModal",
                        value: function() {
                            var t = this;
                            this._element.style.display = "none", this._showBackdrop(function() {
                                e(document.body).removeClass(g.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(p.HIDDEN)
                            })
                        }
                    }, {
                        key: "_removeBackdrop",
                        value: function() {
                            this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                        }
                    }, {
                        key: "_showBackdrop",
                        value: function(t) {
                            var n = this,
                                i = e(this._element).hasClass(g.FADE) ? g.FADE : "";
                            if (this._isShown && this._config.backdrop) {
                                var r = o.supportsTransitionEnd() && i;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = g.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(p.CLICK_DISMISS, function(e) {
                                        return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                                    }), r && o.reflow(this._backdrop), e(this._backdrop).addClass(g.IN), !t) return;
                                if (!r) return void t();
                                e(this._backdrop).one(o.TRANSITION_END, t).emulateTransitionEnd(f)
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass(g.IN);
                                var s = function() {
                                    n._removeBackdrop(), t && t()
                                };
                                o.supportsTransitionEnd() && e(this._element).hasClass(g.FADE) ? e(this._backdrop).one(o.TRANSITION_END, s).emulateTransitionEnd(f) : s()
                            } else t && t()
                        }
                    }, {
                        key: "_handleUpdate",
                        value: function() {
                            this._adjustDialog()
                        }
                    }, {
                        key: "_adjustDialog",
                        value: function() {
                            var e = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px~")
                        }
                    }, {
                        key: "_resetAdjustments",
                        value: function() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }
                    }, {
                        key: "_checkScrollbar",
                        value: function() {
                            var e = window.innerWidth;
                            if (!e) {
                                var t = document.documentElement.getBoundingClientRect();
                                e = t.right - Math.abs(t.left)
                            }
                            this._isBodyOverflowing = document.body.clientWidth < e, this._scrollbarWidth = this._getScrollbarWidth()
                        }
                    }, {
                        key: "_setScrollbar",
                        value: function() {
                            var t = parseInt(e(v.FIXED_CONTENT).css("padding-right") || 0, 10);
                            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
                        }
                    }, {
                        key: "_resetScrollbar",
                        value: function() {
                            document.body.style.paddingRight = this._originalBodyPadding
                        }
                    }, {
                        key: "_getScrollbarWidth",
                        value: function() {
                            var e = document.createElement("div");
                            e.className = g.SCROLLBAR_MEASURER, document.body.appendChild(e);
                            var t = e.offsetWidth - e.clientWidth;
                            return document.body.removeChild(e), t
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t, n) {
                            return this.each(function() {
                                var i = e(this).data(s),
                                    r = e.extend({}, l.Default, e(this).data(), "object" == typeof t && t);
                                if (i || (i = new l(this, r), e(this).data(s, i)), "string" == typeof t) {
                                    if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                    i[t](n)
                                } else r.show && i.show(n)
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return h
                        }
                    }]), l
                }();
            return e(document).on(p.CLICK_DATA_API, v.DATA_TOGGLE, function(t) {
                var n = this,
                    i = void 0,
                    r = o.getSelectorFromElement(this);
                r && (i = e(r)[0]);
                var a = e(i).data(s) ? "toggle" : e.extend({}, e(i).data(), e(this).data());
                "A" === this.tagName && t.preventDefault();
                var l = e(i).one(p.SHOW, function(t) {
                    t.isDefaultPrevented() || l.one(p.HIDDEN, function() {
                        e(n).is(":visible") && n.focus()
                    })
                });
                m._jQueryInterface.call(e(i), a, this)
            }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
                return e.fn[t] = u, m._jQueryInterface
            }, m
        }(jQuery), function(e) {
            var t = "scrollspy",
                i = "4.0.0-alpha",
                s = "bs.scrollspy",
                a = "." + s,
                l = ".data-api",
                u = e.fn[t],
                c = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                f = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                h = {
                    ACTIVATE: "activate" + a,
                    SCROLL: "scroll" + a,
                    LOAD_DATA_API: "load" + a + l
                },
                d = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                p = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                g = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                v = function() {
                    function l(t, i) {
                        n(this, l), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(h.SCROLL, e.proxy(this._process, this)), this.refresh(), this._process()
                    }
                    return r(l, [{
                        key: "refresh",
                        value: function() {
                            var t = this,
                                n = this._scrollElement !== this._scrollElement.window ? g.POSITION : g.OFFSET,
                                i = "auto" === this._config.method ? n : this._config.method,
                                r = i === g.POSITION ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                            var s = e.makeArray(e(this._selector));
                            s.map(function(t) {
                                var n = void 0,
                                    s = o.getSelectorFromElement(t);
                                return s && (n = e(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [e(n)[i]().top + r, s] : void 0
                            }).filter(function(e) {
                                return e
                            }).sort(function(e, t) {
                                return e[0] - t[0]
                            }).forEach(function(e) {
                                t._offsets.push(e[0]), t._targets.push(e[1])
                            })
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, s), e(this._scrollElement).off(a), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            if (n = e.extend({}, c, n), "string" != typeof n.target) {
                                var i = e(n.target).attr("id");
                                i || (i = o.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                            }
                            return o.typeCheckConfig(t, n, f), n
                        }
                    }, {
                        key: "_getScrollTop",
                        value: function() {
                            return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                        }
                    }, {
                        key: "_getScrollHeight",
                        value: function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }
                    }, {
                        key: "_process",
                        value: function() {
                            var e = this._getScrollTop() + this._config.offset,
                                t = this._getScrollHeight(),
                                n = this._config.offset + t - this._scrollElement.offsetHeight;
                            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i)
                            }
                            if (this._activeTarget && e < this._offsets[0]) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) {
                                var o = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]);
                                o && this._activate(this._targets[r])
                            }
                        }
                    }, {
                        key: "_activate",
                        value: function(t) {
                            this._activeTarget = t, this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function(e) {
                                return e + '[data-target="' + t + '"],' + (e + '[href="' + t + '"]')
                            });
                            var i = e(n.join(","));
                            i.hasClass(d.DROPDOWN_ITEM) ? (i.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(d.ACTIVE), i.addClass(d.ACTIVE)) : i.parents(p.LI).find(p.NAV_LINKS).addClass(d.ACTIVE), e(this._scrollElement).trigger(h.ACTIVATE, {
                                relatedTarget: t
                            })
                        }
                    }, {
                        key: "_clear",
                        value: function() {
                            e(this._selector).filter(p.ACTIVE).removeClass(d.ACTIVE)
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this).data(s),
                                    i = "object" == typeof t && t || null;
                                if (n || (n = new l(this, i), e(this).data(s, n)), "string" == typeof t) {
                                    if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), l
                }();
            return e(window).on(h.LOAD_DATA_API, function() {
                for (var t = e.makeArray(e(p.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    v._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function() {
                return e.fn[t] = u, v._jQueryInterface
            }, v
        }(jQuery), function(e) {
            var t = "tab",
                i = "4.0.0-alpha",
                s = "bs.tab",
                a = "." + s,
                l = ".data-api",
                u = e.fn[t],
                c = 150,
                f = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                h = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    FADE: "fade",
                    IN: "in"
                },
                d = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    UL: "ul:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                p = function() {
                    function t(e) {
                        n(this, t), this._element = e
                    }
                    return r(t, [{
                        key: "show",
                        value: function() {
                            var t = this;
                            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !e(this._element).hasClass(h.ACTIVE)) {
                                var n = void 0,
                                    i = void 0,
                                    r = e(this._element).closest(d.UL)[0],
                                    s = o.getSelectorFromElement(this._element);
                                r && (i = e.makeArray(e(r).find(d.ACTIVE)), i = i[i.length - 1]);
                                var a = e.Event(f.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    l = e.Event(f.SHOW, {
                                        relatedTarget: i
                                    });
                                if (i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                    s && (n = e(s)[0]), this._activate(this._element, r);
                                    var u = function() {
                                        var n = e.Event(f.HIDDEN, {
                                                relatedTarget: t._element
                                            }),
                                            r = e.Event(f.SHOWN, {
                                                relatedTarget: i
                                            });
                                        e(i).trigger(n), e(t._element).trigger(r)
                                    };
                                    n ? this._activate(n, n.parentNode, u) : u()
                                }
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeClass(this._element, s), this._element = null
                        }
                    }, {
                        key: "_activate",
                        value: function(t, n, i) {
                            var r = e(n).find(d.ACTIVE_CHILD)[0],
                                s = i && o.supportsTransitionEnd() && (r && e(r).hasClass(h.FADE) || Boolean(e(n).find(d.FADE_CHILD)[0])),
                                a = e.proxy(this._transitionComplete, this, t, r, s, i);
                            r && s ? e(r).one(o.TRANSITION_END, a).emulateTransitionEnd(c) : a(), r && e(r).removeClass(h.IN)
                        }
                    }, {
                        key: "_transitionComplete",
                        value: function(t, n, i, r) {
                            if (n) {
                                e(n).removeClass(h.ACTIVE);
                                var s = e(n).find(d.DROPDOWN_ACTIVE_CHILD)[0];
                                s && e(s).removeClass(h.ACTIVE), n.setAttribute("aria-expanded", !1)
                            }
                            if (e(t).addClass(h.ACTIVE), t.setAttribute("aria-expanded", !0), i ? (o.reflow(t), e(t).addClass(h.IN)) : e(t).removeClass(h.FADE), t.parentNode && e(t.parentNode).hasClass(h.DROPDOWN_MENU)) {
                                var a = e(t).closest(d.DROPDOWN)[0];
                                a && e(a).find(d.DROPDOWN_TOGGLE).addClass(h.ACTIVE), t.setAttribute("aria-expanded", !0)
                            }
                            r && r()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    r = i.data(s);
                                if (r || (r = r = new t(this), i.data(s, r)), "string" == typeof n) {
                                    if (void 0 === r[n]) throw new Error('No method named "' + n + '"');
                                    r[n]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), t
                }();
            return e(document).on(f.CLICK_DATA_API, d.DATA_TOGGLE, function(t) {
                t.preventDefault(), p._jQueryInterface.call(e(this), "show")
            }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
                return e.fn[t] = u, p._jQueryInterface
            }, p
        }(jQuery), function(e) {
            if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
            var t = "tooltip",
                i = "4.0.0-alpha",
                s = "bs.tooltip",
                a = "." + s,
                l = e.fn[t],
                u = 150,
                c = "bs-tether",
                f = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: []
                },
                h = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array"
                },
                d = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                p = {
                    IN: "in",
                    OUT: "out"
                },
                g = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    INSERTED: "inserted" + a,
                    CLICK: "click" + a,
                    FOCUSIN: "focusin" + a,
                    FOCUSOUT: "focusout" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a
                },
                v = {
                    FADE: "fade",
                    IN: "in"
                },
                m = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                y = {
                    element: !1,
                    enabled: !1
                },
                b = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                _ = function() {
                    function l(e, t) {
                        n(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    return r(l, [{
                        key: "enable",
                        value: function() {
                            this._isEnabled = !0
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this._isEnabled = !1
                        }
                    }, {
                        key: "toggleEnabled",
                        value: function() {
                            this._isEnabled = !this._isEnabled
                        }
                    }, {
                        key: "toggle",
                        value: function(t) {
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(v.IN)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            clearTimeout(this._timeout), this.cleanupTether(), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var t = this,
                                n = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(n);
                                var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                                if (n.isDefaultPrevented() || !i) return;
                                var r = this.getTipElement(),
                                    s = o.getUID(this.constructor.NAME);
                                r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(r).addClass(v.FADE);
                                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                    u = this._getAttachment(a);
                                e(r).data(this.constructor.DATA_KEY, this).appendTo(document.body), e(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                    attachment: u,
                                    element: r,
                                    target: this.element,
                                    classes: y,
                                    classPrefix: c,
                                    offset: this.config.offset,
                                    constraints: this.config.constraints,
                                    addTargetClasses: !1
                                }), o.reflow(r), this._tether.position(), e(r).addClass(v.IN);
                                var f = function() {
                                    var n = t._hoverState;
                                    t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === p.OUT && t._leave(null, t)
                                };
                                if (o.supportsTransitionEnd() && e(this.tip).hasClass(v.FADE)) return void e(this.tip).one(o.TRANSITION_END, f).emulateTransitionEnd(l._TRANSITION_DURATION);
                                f()
                            }
                        }
                    }, {
                        key: "hide",
                        value: function(t) {
                            var n = this,
                                i = this.getTipElement(),
                                r = e.Event(this.constructor.Event.HIDE),
                                s = function() {
                                    n._hoverState !== p.IN && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), t && t()
                                };
                            e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(v.IN), o.supportsTransitionEnd() && e(this.tip).hasClass(v.FADE) ? e(i).one(o.TRANSITION_END, s).emulateTransitionEnd(u) : s(), this._hoverState = "")
                        }
                    }, {
                        key: "isWithContent",
                        value: function() {
                            return Boolean(this.getTitle())
                        }
                    }, {
                        key: "getTipElement",
                        value: function() {
                            return this.tip = this.tip || e(this.config.template)[0]
                        }
                    }, {
                        key: "setContent",
                        value: function() {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(m.TOOLTIP_INNER), this.getTitle()), t.removeClass(v.FADE).removeClass(v.IN), this.cleanupTether()
                        }
                    }, {
                        key: "setElementContent",
                        value: function(t, n) {
                            var i = this.config.html;
                            "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                        }
                    }, {
                        key: "getTitle",
                        value: function() {
                            var e = this.element.getAttribute("data-original-title");
                            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                        }
                    }, {
                        key: "cleanupTether",
                        value: function() {
                            this._tether && this._tether.destroy()
                        }
                    }, {
                        key: "_getAttachment",
                        value: function(e) {
                            return d[e.toUpperCase()]
                        }
                    }, {
                        key: "_setListeners",
                        value: function() {
                            var t = this,
                                n = this.config.trigger.split(" ");
                            n.forEach(function(n) {
                                if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, e.proxy(t.toggle, t));
                                else if (n !== b.MANUAL) {
                                    var i = n === b.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                        r = n === b.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                    e(t.element).on(i, t.config.selector, e.proxy(t._enter, t)).on(r, t.config.selector, e.proxy(t._leave, t))
                                }
                            }), this.config.selector ? this.config = e.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }
                    }, {
                        key: "_fixTitle",
                        value: function() {
                            var e = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }
                    }, {
                        key: "_enter",
                        value: function(t, n) {
                            var i = this.constructor.DATA_KEY;
                            return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? b.FOCUS : b.HOVER] = !0), e(n.getTipElement()).hasClass(v.IN) || n._hoverState === p.IN ? void(n._hoverState = p.IN) : (clearTimeout(n._timeout), n._hoverState = p.IN, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                                n._hoverState === p.IN && n.show()
                            }, n.config.delay.show)) : void n.show())
                        }
                    }, {
                        key: "_leave",
                        value: function(t, n) {
                            var i = this.constructor.DATA_KEY;
                            return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? b.FOCUS : b.HOVER] = !1), n._isWithActiveTrigger() ? void 0 : (clearTimeout(n._timeout), n._hoverState = p.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function() {
                                n._hoverState === p.OUT && n.hide()
                            }, n.config.delay.hide)) : void n.hide())
                        }
                    }, {
                        key: "_isWithActiveTrigger",
                        value: function() {
                            for (var e in this._activeTrigger)
                                if (this._activeTrigger[e]) return !0;
                            return !1
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, this.constructor.Default, e(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                                show: n.delay,
                                hide: n.delay
                            }), o.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }
                    }, {
                        key: "_getDelegateConfig",
                        value: function() {
                            var e = {};
                            if (this.config)
                                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                            return e
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this).data(s),
                                    i = "object" == typeof t ? t : null;
                                if ((n || !/destroy|hide/.test(t)) && (n || (n = new l(this, i), e(this).data(s, n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return h
                        }
                    }]), l
                }();
            return e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function() {
                return e.fn[t] = l, _._jQueryInterface
            }, _
        }(jQuery));
    ! function(e) {
        var o = "popover",
            a = "4.0.0-alpha",
            l = "bs.popover",
            u = "." + l,
            c = e.fn[o],
            f = e.extend({}, s.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            h = e.extend({}, s.DefaultType, {
                content: "(string|element|function)"
            }),
            d = {
                FADE: "fade",
                IN: "in"
            },
            p = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content",
                ARROW: ".popover-arrow"
            },
            g = {
                HIDE: "hide" + u,
                HIDDEN: "hidden" + u,
                SHOW: "show" + u,
                SHOWN: "shown" + u,
                INSERTED: "inserted" + u,
                CLICK: "click" + u,
                FOCUSIN: "focusin" + u,
                FOCUSOUT: "focusout" + u,
                MOUSEENTER: "mouseenter" + u,
                MOUSELEAVE: "mouseleave" + u
            },
            v = function(s) {
                function c() {
                    n(this, c), i(Object.getPrototypeOf(c.prototype), "constructor", this).apply(this, arguments)
                }
                return t(c, s), r(c, [{
                    key: "isWithContent",
                    value: function() {
                        return this.getTitle() || this._getContent()
                    }
                }, {
                    key: "getTipElement",
                    value: function() {
                        return this.tip = this.tip || e(this.config.template)[0]
                    }
                }, {
                    key: "setContent",
                    value: function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(p.TITLE), this.getTitle()), this.setElementContent(t.find(p.CONTENT), this._getContent()), t.removeClass(d.FADE).removeClass(d.IN), this.cleanupTether()
                    }
                }, {
                    key: "_getContent",
                    value: function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function(t) {
                        return this.each(function() {
                            var n = e(this).data(l),
                                i = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new c(this, i), e(this).data(l, n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function() {
                        return a
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return f
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return o
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return l
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return g
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return u
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return h
                    }
                }]), c
            }(s);
        return e.fn[o] = v._jQueryInterface, e.fn[o].Constructor = v, e.fn[o].noConflict = function() {
            return e.fn[o] = c, v._jQueryInterface
        }, v
    }(jQuery)
}(jQuery),
function(e, t, n) {
    "use strict";

    function i(n) {
        if (r = t.documentElement, o = t.body, U(), se = this, n = n || {}, fe = n.constants || {}, n.easing)
            for (var i in n.easing) K[i] = n.easing[i];
        ye = n.edgeStrategy || "set", ue = {
            beforerender: n.beforerender,
            render: n.render,
            keyframe: n.keyframe
        }, ce = n.forceHeight !== !1, ce && (je = n.scale || 1), he = n.mobileDeceleration || w, pe = n.smoothScrolling !== !1, ge = n.smoothScrollingDuration || x, ve = {
            targetTop: se.getScrollTop()
        }, Ve = (n.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), Ve ? (le = t.getElementById("skrollr-body"), le && oe(), $(), De(r, [y, E], [b])) : De(r, [y, _], [b]), se.refresh(), Ee(e, "resize orientationchange", function() {
            var e = r.clientWidth,
                t = r.clientHeight;
            (t !== We || e !== Fe) && (We = t, Fe = e, Be = !0)
        });
        var s = Q();
        return function a() {
            X(), _e = s(a)
        }(), se
    }
    var r, o, s = {
            get: function() {
                return se
            },
            init: function(e) {
                return se || new i(e)
            },
            VERSION: "0.6.26"
        },
        a = Object.prototype.hasOwnProperty,
        l = e.Math,
        u = e.getComputedStyle,
        c = "touchstart",
        f = "touchmove",
        h = "touchcancel",
        d = "touchend",
        p = "skrollable",
        g = p + "-before",
        v = p + "-between",
        m = p + "-after",
        y = "skrollr",
        b = "no-" + y,
        _ = y + "-desktop",
        E = y + "-mobile",
        T = "linear",
        C = 1e3,
        w = .004,
        x = 200,
        A = "start",
        I = "end",
        S = "center",
        D = "bottom",
        O = "___skrollable_id",
        k = /^(?:input|textarea|button|select)$/i,
        N = /^\s+|\s+$/g,
        L = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        P = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        j = /^(@?[a-z\-]+)\[(\w+)\]$/,
        H = /-([a-z0-9_])/g,
        R = function(e, t) {
            return t.toUpperCase()
        },
        M = /[\-+]?[\d]*\.?[\d]+/g,
        F = /\{\?\}/g,
        W = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        B = /[a-z\-]+-gradient/g,
        q = "",
        V = "",
        U = function() {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (u) {
                var t = u(o, null);
                for (var i in t)
                    if (q = i.match(e) || +i == i && t[i].match(e)) break;
                if (!q) return q = V = "", n;
                q = q[0], "-" === q.slice(0, 1) ? (V = q, q = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[q]) : V = "-" + q.toLowerCase() + "-"
            }
        },
        Q = function() {
            var t = e.requestAnimationFrame || e[q.toLowerCase() + "RequestAnimationFrame"],
                n = Ne();
            return (Ve || !t) && (t = function(t) {
                var i = Ne() - n,
                    r = l.max(0, 1e3 / 60 - i);
                return e.setTimeout(function() {
                    n = Ne(), t()
                }, r)
            }), t
        },
        G = function() {
            var t = e.cancelAnimationFrame || e[q.toLowerCase() + "CancelAnimationFrame"];
            return (Ve || !t) && (t = function(t) {
                return e.clearTimeout(t)
            }), t
        },
        K = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return e * e
            },
            cubic: function(e) {
                return e * e * e
            },
            swing: function(e) {
                return -l.cos(e * l.PI) / 2 + .5
            },
            sqrt: function(e) {
                return l.sqrt(e)
            },
            outCubic: function(e) {
                return l.pow(e - 1, 3) + 1
            },
            bounce: function(e) {
                var t;
                if (.5083 >= e) t = 3;
                else if (.8489 >= e) t = 9;
                else if (.96208 >= e) t = 27;
                else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - l.abs(3 * l.cos(1.028 * e * t) / t)
            }
        };
    i.prototype.refresh = function(e) {
        var i, r, o = !1;
        for (e === n ? (o = !0, ae = [], qe = 0, e = t.getElementsByTagName("*")) : e.length === n && (e = [e]), i = 0, r = e.length; r > i; i++) {
            var s = e[i],
                a = s,
                l = [],
                u = pe,
                c = ye,
                f = !1;
            if (o && O in s && delete s[O], s.attributes) {
                for (var h = 0, d = s.attributes.length; d > h; h++) {
                    var g = s.attributes[h];
                    if ("data-anchor-target" !== g.name)
                        if ("data-smooth-scrolling" !== g.name)
                            if ("data-edge-strategy" !== g.name)
                                if ("data-emit-events" !== g.name) {
                                    var v = g.name.match(L);
                                    if (null !== v) {
                                        var m = {
                                            props: g.value,
                                            element: s,
                                            eventType: g.name.replace(H, R)
                                        };
                                        l.push(m);
                                        var y = v[1];
                                        y && (m.constant = y.substr(1));
                                        var b = v[2];
                                        /p$/.test(b) ? (m.isPercentage = !0, m.offset = (0 | b.slice(0, -1)) / 100) : m.offset = 0 | b;
                                        var _ = v[3],
                                            E = v[4] || _;
                                        _ && _ !== A && _ !== I ? (m.mode = "relative", m.anchors = [_, E]) : (m.mode = "absolute", _ === I ? m.isEnd = !0 : m.isPercentage || (m.offset = m.offset * je))
                                    }
                                } else f = !0;
                    else c = g.value;
                    else u = "off" !== g.value;
                    else if (a = t.querySelector(g.value), null === a) throw 'Unable to find anchor target "' + g.value + '"'
                }
                if (l.length) {
                    var T, C, w;
                    !o && O in s ? (w = s[O], T = ae[w].styleAttr, C = ae[w].classAttr) : (w = s[O] = qe++, T = s.style.cssText, C = Se(s)), ae[w] = {
                        element: s,
                        styleAttr: T,
                        classAttr: C,
                        anchorTarget: a,
                        keyFrames: l,
                        smoothScrolling: u,
                        edgeStrategy: c,
                        emitEvents: f,
                        lastFrameIndex: -1
                    }, De(s, [p], [])
                }
            }
        }
        for (xe(), i = 0, r = e.length; r > i; i++) {
            var x = ae[e[i][O]];
            x !== n && (J(x), ee(x))
        }
        return se
    }, i.prototype.relativeToAbsolute = function(e, t, n) {
        var i = r.clientHeight,
            o = e.getBoundingClientRect(),
            s = o.top,
            a = o.bottom - o.top;
        return t === D ? s -= i : t === S && (s -= i / 2), n === D ? s += a : n === S && (s += a / 2), s += se.getScrollTop(), 0 | s + .5
    }, i.prototype.animateTo = function(e, t) {
        t = t || {};
        var i = Ne(),
            r = se.getScrollTop();
        return de = {
            startTop: r,
            topDiff: e - r,
            targetTop: e,
            duration: t.duration || C,
            startTime: i,
            endTime: i + (t.duration || C),
            easing: K[t.easing || T],
            done: t.done
        }, de.topDiff || (de.done && de.done.call(se, !1), de = n), se
    }, i.prototype.stopAnimateTo = function() {
        de && de.done && de.done.call(se, !0), de = n
    }, i.prototype.isAnimatingTo = function() {
        return !!de
    }, i.prototype.isMobile = function() {
        return Ve
    }, i.prototype.setScrollTop = function(t, n) {
        return me = n === !0, Ve ? Ue = l.min(l.max(t, 0), Pe) : e.scrollTo(0, t), se
    }, i.prototype.getScrollTop = function() {
        return Ve ? Ue : e.pageYOffset || r.scrollTop || o.scrollTop || 0
    }, i.prototype.getMaxScrollTop = function() {
        return Pe
    }, i.prototype.on = function(e, t) {
        return ue[e] = t, se
    }, i.prototype.off = function(e) {
        return delete ue[e], se
    }, i.prototype.destroy = function() {
        var e = G();
        e(_e), Ce(), De(r, [b], [y, _, E]);
        for (var t = 0, i = ae.length; i > t; t++) re(ae[t].element);
        r.style.overflow = o.style.overflow = "", r.style.height = o.style.height = "", le && s.setStyle(le, "transform", "none"), se = n, le = n, ue = n, ce = n, Pe = 0, je = 1, fe = n, he = n, He = "down", Re = -1, Fe = 0, We = 0, Be = !1, de = n, pe = n, ge = n, ve = n, me = n, qe = 0, ye = n, Ve = !1, Ue = 0, be = n
    };
    var $ = function() {
            var i, s, a, u, p, g, v, m, y, b, _, E;
            Ee(r, [c, f, h, d].join(" "), function(e) {
                var r = e.changedTouches[0];
                for (u = e.target; 3 === u.nodeType;) u = u.parentNode;
                switch (p = r.clientY, g = r.clientX, b = e.timeStamp, k.test(u.tagName) || e.preventDefault(), e.type) {
                    case c:
                        i && i.blur(), se.stopAnimateTo(), i = u, s = v = p, a = g, y = b;
                        break;
                    case f:
                        k.test(u.tagName) && t.activeElement !== u && e.preventDefault(), m = p - v, E = b - _, se.setScrollTop(Ue - m, !0), v = p, _ = b;
                        break;
                    default:
                    case h:
                    case d:
                        var o = s - p,
                            T = a - g,
                            C = T * T + o * o;
                        if (49 > C) {
                            if (!k.test(i.tagName)) {
                                i.focus();
                                var w = t.createEvent("MouseEvents");
                                w.initMouseEvent("click", !0, !0, e.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), i.dispatchEvent(w)
                            }
                            return
                        }
                        i = n;
                        var x = m / E;
                        x = l.max(l.min(x, 3), -3);
                        var A = l.abs(x / he),
                            I = x * A + .5 * he * A * A,
                            S = se.getScrollTop() - I,
                            D = 0;
                        S > Pe ? (D = (Pe - S) / I, S = Pe) : 0 > S && (D = -S / I, S = 0), A *= 1 - D, se.animateTo(0 | S + .5, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), e.scrollTo(0, 0), r.style.overflow = o.style.overflow = "hidden"
        },
        z = function() {
            var e, t, n, i, o, s, a, u, c, f, h, d = r.clientHeight,
                p = Ae();
            for (u = 0, c = ae.length; c > u; u++)
                for (e = ae[u], t = e.element, n = e.anchorTarget, i = e.keyFrames, o = 0, s = i.length; s > o; o++) a = i[o], f = a.offset, h = p[a.constant] || 0, a.frame = f, a.isPercentage && (f *= d, a.frame = f), "relative" === a.mode && (re(t), a.frame = se.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - f, re(t, !0)), a.frame += h, ce && !a.isEnd && a.frame > Pe && (Pe = a.frame);
            for (Pe = l.max(Pe, Ie()), u = 0, c = ae.length; c > u; u++) {
                for (e = ae[u], i = e.keyFrames, o = 0, s = i.length; s > o; o++) a = i[o], h = p[a.constant] || 0, a.isEnd && (a.frame = Pe - a.offset + h);
                e.keyFrames.sort(Le)
            }
        },
        Y = function(e, t) {
            for (var n = 0, i = ae.length; i > n; n++) {
                var r, o, l = ae[n],
                    u = l.element,
                    c = l.smoothScrolling ? e : t,
                    f = l.keyFrames,
                    h = f.length,
                    d = f[0],
                    y = f[f.length - 1],
                    b = d.frame > c,
                    _ = c > y.frame,
                    E = b ? d : y,
                    T = l.emitEvents,
                    C = l.lastFrameIndex;
                if (b || _) {
                    if (b && -1 === l.edge || _ && 1 === l.edge) continue;
                    switch (b ? (De(u, [g], [m, v]), T && C > -1 && (we(u, d.eventType, He), l.lastFrameIndex = -1)) : (De(u, [m], [g, v]), T && h > C && (we(u, y.eventType, He), l.lastFrameIndex = h)), l.edge = b ? -1 : 1, l.edgeStrategy) {
                        case "reset":
                            re(u);
                            continue;
                        case "ease":
                            c = E.frame;
                            break;
                        default:
                        case "set":
                            var w = E.props;
                            for (r in w) a.call(w, r) && (o = ie(w[r].value), 0 === r.indexOf("@") ? u.setAttribute(r.substr(1), o) : s.setStyle(u, r, o));
                            continue
                    }
                } else 0 !== l.edge && (De(u, [p, v], [g, m]), l.edge = 0);
                for (var x = 0; h - 1 > x; x++)
                    if (c >= f[x].frame && f[x + 1].frame >= c) {
                        var A = f[x],
                            I = f[x + 1];
                        for (r in A.props)
                            if (a.call(A.props, r)) {
                                var S = (c - A.frame) / (I.frame - A.frame);
                                S = A.props[r].easing(S), o = ne(A.props[r].value, I.props[r].value, S), o = ie(o), 0 === r.indexOf("@") ? u.setAttribute(r.substr(1), o) : s.setStyle(u, r, o)
                            }
                        T && C !== x && ("down" === He ? we(u, A.eventType, He) : we(u, I.eventType, He), l.lastFrameIndex = x);
                        break
                    }
            }
        },
        X = function() {
            Be && (Be = !1, xe());
            var e, t, i = se.getScrollTop(),
                r = Ne();
            if (de) r >= de.endTime ? (i = de.targetTop, e = de.done, de = n) : (t = de.easing((r - de.startTime) / de.duration), i = 0 | de.startTop + t * de.topDiff), se.setScrollTop(i, !0);
            else if (!me) {
                var o = ve.targetTop - i;
                o && (ve = {
                    startTop: Re,
                    topDiff: i - Re,
                    targetTop: i,
                    startTime: Me,
                    endTime: Me + ge
                }), ve.endTime >= r && (t = K.sqrt((r - ve.startTime) / ge), i = 0 | ve.startTop + t * ve.topDiff)
            }
            if (Ve && le && s.setStyle(le, "transform", "translate(0, " + -Ue + "px) " + be), me || Re !== i) {
                He = i > Re ? "down" : Re > i ? "up" : He, me = !1;
                var a = {
                        curTop: i,
                        lastTop: Re,
                        maxTop: Pe,
                        direction: He
                    },
                    l = ue.beforerender && ue.beforerender.call(se, a);
                l !== !1 && (Y(i, se.getScrollTop()), Re = i, ue.render && ue.render.call(se, a)), e && e.call(se, !1)
            }
            Me = r
        },
        J = function(e) {
            for (var t = 0, n = e.keyFrames.length; n > t; t++) {
                for (var i, r, o, s, a = e.keyFrames[t], l = {}; null !== (s = P.exec(a.props));) o = s[1], r = s[2], i = o.match(j), null !== i ? (o = i[1], i = i[2]) : i = T, r = r.indexOf("!") ? Z(r) : [r.slice(1)], l[o] = {
                    value: r,
                    easing: K[i]
                };
                a.props = l
            }
        },
        Z = function(e) {
            var t = [];
            return W.lastIndex = 0, e = e.replace(W, function(e) {
                return e.replace(M, function(e) {
                    return 100 * (e / 255) + "%"
                })
            }), V && (B.lastIndex = 0, e = e.replace(B, function(e) {
                return V + e
            })), e = e.replace(M, function(e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        ee = function(e) {
            var t, n, i = {};
            for (t = 0, n = e.keyFrames.length; n > t; t++) te(e.keyFrames[t], i);
            for (i = {}, t = e.keyFrames.length - 1; t >= 0; t--) te(e.keyFrames[t], i)
        },
        te = function(e, t) {
            var n;
            for (n in t) a.call(e.props, n) || (e.props[n] = t[n]);
            for (n in e.props) t[n] = e.props[n]
        },
        ne = function(e, t, n) {
            var i, r = e.length;
            if (r !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var o = [e[0]];
            for (i = 1; r > i; i++) o[i] = e[i] + (t[i] - e[i]) * n;
            return o
        },
        ie = function(e) {
            var t = 1;
            return F.lastIndex = 0, e[0].replace(F, function() {
                return e[t++]
            })
        },
        re = function(e, t) {
            e = [].concat(e);
            for (var n, i, r = 0, o = e.length; o > r; r++) i = e[r], n = ae[i[O]], n && (t ? (i.style.cssText = n.dirtyStyleAttr, De(i, n.dirtyClassAttr)) : (n.dirtyStyleAttr = i.style.cssText, n.dirtyClassAttr = Se(i), i.style.cssText = n.styleAttr, De(i, n.classAttr)))
        },
        oe = function() {
            be = "translateZ(0)", s.setStyle(le, "transform", be);
            var e = u(le),
                t = e.getPropertyValue("transform"),
                n = e.getPropertyValue(V + "transform"),
                i = t && "none" !== t || n && "none" !== n;
            i || (be = "")
        };
    s.setStyle = function(e, t, n) {
        var i = e.style;
        if (t = t.replace(H, R).replace("-", ""), "zIndex" === t) i[t] = isNaN(n) ? n : "" + (0 | n);
        else if ("float" === t) i.styleFloat = i.cssFloat = n;
        else try {
            q && (i[q + t.slice(0, 1).toUpperCase() + t.slice(1)] = n), i[t] = n
        } catch (r) {}
    };
    var se, ae, le, ue, ce, fe, he, de, pe, ge, ve, me, ye, be, _e, Ee = s.addEvent = function(t, n, i) {
            var r = function(t) {
                return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
                    t.returnValue = !1, t.defaultPrevented = !0
                }), i.call(this, t)
            };
            n = n.split(" ");
            for (var o, s = 0, a = n.length; a > s; s++) o = n[s], t.addEventListener ? t.addEventListener(o, i, !1) : t.attachEvent("on" + o, r), Qe.push({
                element: t,
                name: o,
                listener: i
            })
        },
        Te = s.removeEvent = function(e, t, n) {
            t = t.split(" ");
            for (var i = 0, r = t.length; r > i; i++) e.removeEventListener ? e.removeEventListener(t[i], n, !1) : e.detachEvent("on" + t[i], n)
        },
        Ce = function() {
            for (var e, t = 0, n = Qe.length; n > t; t++) e = Qe[t], Te(e.element, e.name, e.listener);
            Qe = []
        },
        we = function(e, t, n) {
            ue.keyframe && ue.keyframe.call(se, e, t, n)
        },
        xe = function() {
            var e = se.getScrollTop();
            Pe = 0, ce && !Ve && (o.style.height = ""), z(), ce && !Ve && (o.style.height = Pe + r.clientHeight + "px"), Ve ? se.setScrollTop(l.min(se.getScrollTop(), Pe)) : se.setScrollTop(e, !0), me = !0
        },
        Ae = function() {
            var e, t, n = r.clientHeight,
                i = {};
            for (e in fe) t = fe[e], "function" == typeof t ? t = t.call(se) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * n), i[e] = t;
            return i
        },
        Ie = function() {
            var e = le && le.offsetHeight || 0,
                t = l.max(e, o.scrollHeight, o.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight);
            return t - r.clientHeight
        },
        Se = function(t) {
            var n = "className";
            return e.SVGElement && t instanceof e.SVGElement && (t = t[n], n = "baseVal"), t[n]
        },
        De = function(t, i, r) {
            var o = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[o], o = "baseVal"), r === n) return t[o] = i, n;
            for (var s = t[o], a = 0, l = r.length; l > a; a++) s = ke(s).replace(ke(r[a]), " ");
            s = Oe(s);
            for (var u = 0, c = i.length; c > u; u++) - 1 === ke(s).indexOf(ke(i[u])) && (s += " " + i[u]);
            t[o] = Oe(s)
        },
        Oe = function(e) {
            return e.replace(N, "")
        },
        ke = function(e) {
            return " " + e + " "
        },
        Ne = Date.now || function() {
            return +new Date
        },
        Le = function(e, t) {
            return e.frame - t.frame
        },
        Pe = 0,
        je = 1,
        He = "down",
        Re = -1,
        Me = Ne(),
        Fe = 0,
        We = 0,
        Be = !1,
        qe = 0,
        Ve = !1,
        Ue = 0,
        Qe = [];
    "function" == typeof define && define.amd ? define("skrollr", function() {
        return s
    }) : "undefined" != typeof module && module.exports ? module.exports = s : e.skrollr = s
}(window, document);