
function updatetheme(o) {
return 'html, body {'
+'\n	color:'+o.text+';'
+'\n}'
+'\nbody {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\nbody[data-transparency] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\nhr {'
+'\n	border-top:2px dashed '+o.secondary+';'
+'\n}'
+'\ns {'
+'\n	text-decoration-color:'+o.text+';'
+'\n}'
+'\na {'
+'\n	text-decoration:underline '+o.accent+';'
+'\n}'
+'\na:active {'
+'\n	color:'+o.tertiary+';'
+'\n	text-decoration:underline '+o.accentd+';'
+'\n}'
+'\nbutton {'
+'\n	background:'+o.primary+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\nbutton:active {'
+'\n	border-color:'+o.accentl+';'
+'\n	color:'+o.accent+';'
+'\n	fill:'+o.accent+';'
+'\n	box-shadow:0 0 0 0 '+o.textl+';'
+'\n}'
+'\nbutton:active svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\nbutton:active span {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\nbutton:focus {'
+'\n	border-color:'+o.accentl+';'
+'\n}'
+'\nbutton svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\nbutton[data-selected] {'
+'\n	background:'+o.accent+' !important;'
+'\n}'
+'\nbutton[data-selected] svg {'
+'\n	fill:'+o.primary+' !important;'
+'\n}'
+'\ninput, textarea, select {'
+'\n	border-bottom:2px solid '+o.secondary+';'
+'\n	color:'+o.textd+';'
+'\n}'
+'\ninput:active, input:focus {'
+'\n	color:'+o.textl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\ninput[data-error] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\nselect {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\nselect, select:focus {'
+'\n	background-image:linear-gradient(45deg, transparent 40%, '+o.text+' 50%), linear-gradient(135deg, '+o.text+' 50%, transparent 60%);'
+'\n}'
+'\noption {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.tahweem {'
+'\n	background:'+o.accentt+';'
+'\n}'
+'\n.above {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.tag {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n.icon svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\n.red {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.redbg {'
+'\n	background:'+o.redd+';'
+'\n}'
+'\nbutton.xaas {'
+'\n	background:'+o.secondaryd+';'
+'\n	border:4px solid '+o.secondaryl+';'
+'\n}'
+'\nbutton.xaas:focus {'
+'\n	background:'+o.accentl+';'
+'\n	border-color:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\nbutton.xaas:active {'
+'\n	background:'+o.accent+';'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n#dimmer {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#dimmertext {'
+'\n	color:'+o.textd+';'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.header {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n#itlaa3 .text {'
+'\n	box-shadow:0 0 20px 0 '+o.textd+';'
+'\n}'
+'\n#taht3nsar .text {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n#itlaa3 .text, #taht3nsar .text {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] #itlaa3 .text, [data-transparency] #taht3nsar .text {'
+'\n	background:'+o.primaryt+';'
+'\n	border-color:'+o.secondaryt+';'
+'\n}'
+'\n.list .a3laa {'
+'\n	background:'+o.secondaryt+';'
+'\n	color:'+o.textd+';'
+'\n	text-shadow:0px 1px '+o.secondary+';'
+'\n}'
+'\n[dir=rtl] .list .a3laa {'
+'\n	background:linear-gradient(45deg, transparent 50%, '+o.secondaryt+' 90%);'
+'\n}'
+'\n.list .item, .list .listitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.list .item[data-baidaa], .list .listitem[data-baidaa] {'
+'\n	box-shadow:0 0 5px 2px '+o.accentl+', 0 0 5px 2px '+o.accentd+' inset;'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n.list .item[data-selected], .list .listitem[data-selected] {'
+'\n	border-color:'+o.textxd+';'
+'\n}'
+'\n[data-rakkaz].list .item[data-selected], [data-rakkaz].list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' -110%, '+o.tertiary+' 220%);'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[dir=rtl] .list .item[data-selected], [dir=rtl] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.tertiary+' -200%, '+o.secondary+' 110%);'
+'\n}'
+'\n[data-transparency] .list .item[data-selected], [data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' 0%, transparent 220%);'
+'\n	border-bottom:1px solid '+o.accent+';'
+'\n}'
+'\n[dir=rtl][data-transparency] .list .item[data-selected], [dir=rtl][data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, transparent -220%, '+o.secondary+' 110%);'
+'\n}'
+'\n.list .body {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item .icon {'
+'\n	background:linear-gradient(200deg, '+o.primary+', transparent);'
+'\n}'
+'\n.list .item[data-selected] .icon {'
+'\n	background:linear-gradient(200deg, '+o.accent+', transparent);'
+'\n}'
+'\n.list .days {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item[data-selected] .days {'
+'\n	color:'+o.primaryl+';'
+'\n}'
+'\n[data-selected] [data-past] {'
+'\n	color:'+o.redd+' !important;'
+'\n}'
+'\n[data-past] {'
+'\n	color:'+o.redl+' !important;'
+'\n}'
+'\n.list [data-mufarraq] {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] .list [data-mufarraq] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.list .item .tawassa3, .list .listitem .tawassa3 {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryt+';'
+'\n	box-shadow:0 0 12px 0px '+o.primaryl+';'
+'\n}'
+'\n#softkeysui {'
+'\n	background:linear-gradient(0deg, '+o.primary+' 5%, '+o.primaryt+' 15%, transparent);'
+'\n}'
+'\n#softkeysui[data-hidden] {'
+'\n	background:linear-gradient(0deg, '+o.primaryt+' 0%, transparent);'
+'\n}'
+'\n#softkeysui button {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.textl+';'
+'\n}'
+'\n#softkeysui button label {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button {'
+'\n	border-top:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row2 button {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .center {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .right {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\ninput[data-over], textarea[data-over], input[data-under], textarea[data-under] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\n#sheetui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#sheetui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n#dialogui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#dialogui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui button {'
+'\n		background:'+o.primary+';'
+'\n		color:'+o.textl+';'
+'\n	}'
+'\n	#softkeysui button:active, #softkeysui button[data-lamsah] {'
+'\n		background:'+o.secondary+';'
+'\n		box-shadow:0 0 30px 6px '+o.tertiaryd+';'
+'\n	}'
+'\n	#softkeysui .row2, #skdots {'
+'\n		box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	}'
+'\n	#skdots {'
+'\n		background:'+o.primaryt+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui .row2 [data-hawm="1"] span {'
+'\n		background:'+o.secondary+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n	#softkeysui .row2 {'
+'\n		background:'+o.primary+';'
+'\n		border-top:1px solid '+o.tertiary+';'
+'\n		border-left:1px solid '+o.tertiary+';'
+'\n		border-bottom:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	::-webkit-scrollbar {'
+'\n		background:'+o.primary+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb {'
+'\n		background:'+o.textd+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb:active {'
+'\n		background:'+o.text+';'
+'\n	}'
+'\n}'
+'\n.haalah {'
+'\n	background:'+o.primaryt+';'
+'\n}';
};

"object" != typeof module && (module = {}), "object" != typeof module.exports && (module.exports = {}), 
"object" != typeof window && (window = global || {}), "object" != typeof document && (document = {
    body: {}
});

var glatteis = {}, glatteisfn = function(name, fn) {
    if (name) {
        var mod = glatteis._mods[name] || glatteis[name];
        return "function" == typeof fn ? (mod ? fn(mod) : glatteis._paths[name] && glatteis.require(glatteis._paths[name], function(mod) {
            glatteis._mods[name] = mod, fn(mod);
        }), null) : mod || !1;
    }
    return !1;
}, $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);

"object" == typeof module && (module.exports = glatteis), $.log = function() {
    console.log.apply(console, arguments);
}, function() {
    var proto = {
        s: function() {
            var a = "", str = "";
            for (var b in arguments) b > 0 && (a += ", "), a = a + "arguments[" + b + "]", str += " " + arguments[b];
            eval("console.log(" + a + ");");
        },
        e: function() {
            var a = "", str = "";
            for (var b in arguments) b > 0 && (a += ", "), a = a + "arguments[" + b + "]", str += " " + arguments[b];
            eval("console.error(" + a + ");");
        },
        i: function() {
            var a = "";
            for (var b in arguments) b > 0 && (a += ", "), a = a + "arguments[" + b + "]";
            eval("console.info(" + a + ");");
        }
    };
    $.log = Object.assign($.log, proto);
}(), function() {
    var taxeeraat = {};
    $.taxeercancel = function(id) {
        clearTimeout(taxeeraat[id]);
    }, $.taxeer = function(id, fn, customdelay, nofurtherdelay) {
        customdelay = customdelay || 300, nofurtherdelay && taxeeraat[id] || (taxeeraat[id] && (clearTimeout(taxeeraat[id]), 
        taxeeraat[id] = void 0), "function" == typeof fn && (taxeeraat[id] = setTimeout(function() {
            fn(function() {
                $.taxeer(id, fn, customdelay, nofurtherdelay);
            }), taxeeraat[id] = void 0;
        }, customdelay)));
    };
}(), $.re = function(string, automaton, flags) {
    var object = new RegExp(automaton || "", flags || "").exec(string || "") || {};
    return object.re = function(automaton, flags) {
        return $.re(object[0] || "", automaton, flags);
    }, object;
}, $.regex = $.re, $._r = function() {
    module.exports = glatteis;
}, $._c = function(name) {
    var mod = module.exports;
    return module.exports = {}, mod instanceof Object && ("string" == typeof name || "string" == typeof mod._name) && ("string" == typeof mod._name ? glatteis._mods[mod._name] = mod : glatteis._mods[name] = mod, 
    !0);
}, $._paths = {}, $._mods = {}, $.cache = function(name, path) {
    $._paths[name] = path;
}, $.unload = function(mods, fn) {}, function() {
    var _arrayPrototype = {
        set: function(id, object) {
            return void 0 !== this._keys[id] ? (this._array[this._keys[id]] = "function" == typeof object ? object(this._array[this._keys[id]]) : object, 
            "function" == typeof this.onset && this.onset(object, id)) : (this._keys[id] = "function" == typeof object ? this._array.push(object(this._array[this._keys[id]])) - 1 : this._array.push(object) - 1, 
            "function" == typeof this.onadd && this.onadd(object, id), ++this.length), this;
        },
        alter: function(id, object) {
            var item = this.get(id);
            return item && this.set(id, Object.assign(item, object)), this;
        },
        pop: function(id) {
            return void 0 !== this._keys[id] && ("function" == typeof this.onpop && this.onpop(id), 
            this._array[this._keys[id]] = void 0, delete this._keys[id], --this.length), this;
        },
        popall: function(array) {
            "function" == typeof array.toNative && (array = array.toNative());
            for (var i in array) this.pop(array[i]);
        },
        get: function(id) {
            return this._keys[id] > -1 ? this._array[this._keys[id]] : void 0;
        },
        each: function(fn) {
            if ("function" == typeof fn) for (var i in this._array) if (void 0 !== this._array[i]) {
                var val = fn(this._array[i], i);
                void 0 !== val && (this._array[i] = val);
            }
        },
        setall: function(id, array) {
            this._id = id, "function" == typeof array.toNative && (array = array.toNative());
            for (var i in array) this.set(array[i][id], array[i]);
        },
        unique: function() {
            var uniquearray = [];
            return this._array.forEach(function(item) {
                uniquearray.indexOf(item) === -1 && uniquearray.push(item);
            }), uniquearray;
        },
        order: function(order) {
            var ordered = [];
            for (var i in order) {
                var val = order[i], index = this._array.indexOf(val);
                index > -1 && (ordered.push(this._array[index]), this._array.splice(index, 1));
            }
            return ordered.concat(this._array);
        },
        slice: function(from, to) {
            var nativearr = $.array();
            return this.each(function(item, i) {
                i >= from && i <= to && nativearr.set(item.uid, item);
            }), nativearr;
        },
        sort: function(reverse, key, id) {
            var temparray = this.toNative();
            return "function" == typeof reverse ? temparray.sort(reverse) : temparray.sort(function(a, b) {
                return reverse ? key ? b[key] - a[key] : b - a : key ? a[key] - b[key] : a - b;
            }), (id || this._id) && (this._array = [], this.length = 0, this._keys = {}, this.setall(id || this._id, temparray)), 
            this;
        },
        tokeys: function() {
            var arr = [], keys = Object.keys(this._keys);
            for (var i in keys) void 0 !== keys[i] && arr.push(keys[i]);
            return arr;
        },
        saabiq: function(uid) {
            var index = this._keys[uid];
            if (!isundef(index) && index > -1) for (var i = index - 1; i >= 0; --i) if (!isundef(this._array[i])) return this._array[i];
        },
        qaadim: function(uid) {
            var index = this._keys[uid];
            if (!isundef(index) && index > -1) for (var i = index + 1; i < this._array.length; ++i) if (!isundef(this._array[i])) return this._array[i];
        },
        eawwad: function(uid, uid2) {
            var index = this._keys[uid], index2 = this._keys[uid2];
            if (index > -1 && index2 > -1) {
                this._keys[uid] = index2, this._keys[uid2] = index;
                var temp = this._array[index];
                this._array[index] = this._array[index2], this._array[index2] = temp;
            }
        },
        toNative: function() {
            var arr = [];
            for (var i in this._array) void 0 !== this._array[i] && arr.push(this._array[i]);
            return arr;
        }
    };
    $.array = function(prearray, id) {
        var newqueue = Object.create(_arrayPrototype);
        return prearray = prearray || [], "function" == typeof prearray.toNative && (prearray = prearray.toNative()), 
        newqueue._array = prearray, newqueue._keys = {}, newqueue._id = id, id && prearray.forEach(function(item, i) {
            newqueue._keys[item[id]] = i;
        }), newqueue.length = newqueue._array.length, newqueue;
    }, $.array.clean = function(arr) {
        var arr2 = [];
        return arr && arr.forEach(function(item, i) {
            arr2.push(item);
        }), arr2;
    };
}(), function() {
    var _queuePrototype = {
        _init: function() {
            this._didinit || (this._didinit = !0, this._didrun = !1, this.queuearray = [], this.active = !1, 
            this.count = 0, this.uid = !1, this._onnext = !1, this._onfinish = !1);
        },
        _next: function(queue, extra) {
            return ++queue.count, queue._process(queue, extra), queue.active = !1, queue.count;
        },
        _process: function(queue, extra) {
            if (!queue.muntahaa && "function" == typeof queue._onnext) {
                if (queue.queuearray.length > 0) {
                    queue.uid = queue.queuearray.length, queue.active = !0;
                    return queue.queuearray.pop()(function(queue, extra) {
                        queue._onnext(queue._next, queue, extra);
                    }, queue, extra), !1;
                }
                return queue.active = !1, --queue.count, "function" == typeof queue._onfinish && queue._onfinish(queue, extra), 
                !1;
            }
        },
        intahaa: function() {
            this.muntahaa = 1;
        },
        set: function(worker) {
            return this._init(), "function" == typeof worker && this.queuearray.unshift(worker), 
            this;
        },
        run: function(_onfinish) {
            this.onfinish(_onfinish);
            var queue = this;
            queue._init(), "function" != typeof queue._onnext && queue.onnext(function(done, _queue, extra) {
                done(_queue, extra);
            }), queue._didrun || "function" != typeof queue._onnext || (queue._didrun = !0, 
            queue._process(queue));
        },
        onnext: function(cb) {
            "function" == typeof cb && (this._onnext = cb);
        },
        onfinish: function(cb) {
            "function" == typeof cb && (this._onfinish = cb);
        }
    };
    $.queue = function(onnext, onfinish) {
        var newqueue = Object.create(_queuePrototype);
        return newqueue._init(), "function" == typeof onnext && (newqueue._onnext = onnext), 
        "function" == typeof onfinish && (newqueue._onfinish = onfinish), newqueue;
    };
}(), function() {
    $.queuerequest = function() {
        var queuerequest = {
            name: 1,
            active: !1,
            cnt: 0,
            id: !1,
            _array: [],
            cur: !1,
            queue: function(options) {
                return this._array.unshift(options), this.id = this._array.length, this.active === !0 ? this.cnt: this.process(this);
            },
            process: function(carriedthis) {
                if (carriedthis = carriedthis || this, carriedthis._array.length && !carriedthis.active) {
                    carriedthis.id = carriedthis._array.length, carriedthis.active = !0;
                    var options = carriedthis._array.pop();
                    null === options.uri.match(/http.*\:\/\//) && "object" == typeof nw && (options.uri = "file://" + options.uri);
                    var request;
                    options.uri;
                    if (window.XMLHttpRequest) request = new XMLHttpRequest(); else if ("function" == typeof require) return request = require(options.uri), 
                    "function" == typeof options.callback && options.callback(request), carriedthis.cnt++, 
                    carriedthis.process(carriedthis), carriedthis.active = !1, carriedthis.cnt;
                    request.timeout = carriedthis.fetchtimeout || $.fetchtimeout, carriedthis.cur = request, 
                    "get" == options.type ? request.open("GET", options.uri, !0) : (request.open("POST", options.uri, !0), 
                    options.headers || request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset = UTF-8")), 
                    options.headers instanceof Object && Object.keys(options.headers).forEach(function(key) {
                        request.setRequestHeader(key, options.headers[key]);
                    }), (request.upload ? request.upload : request).onprogress = function(event) {
                        event.lengthComputable && "function" == typeof carriedthis.progressfn && carriedthis.progressfn(event.loaded, event.total);
                    };
                    var onend = function(errtype) {
                        return "function" == typeof options.callback && options.callback("", errtype || request.status), 
                        carriedthis.cnt++, carriedthis.process(carriedthis), carriedthis.active = !1, carriedthis.cnt;
                    };
                    return request.onreadystatechange = function() {
                        if (4 == request.readyState) {
                            if (200 === request.status) return "function" == typeof options.callback && options.callback(request.responseText), 
                            carriedthis.cnt++, carriedthis.process(carriedthis), carriedthis.active = !1, carriedthis.cnt;
                            onend(request.status);
                        }
                    }, request.onabort = function() {
                        onend(-100);
                    }, request.ontimeout = function() {
                        onend(-200);
                    }, request.onerror = function() {
                        onend(-300);
                    }, request.send("get" == options.type ? null : options.payload), !1;
                }
                return carriedthis.active = !1, carriedthis.cnt = 0, !1;
            }
        };
        return Object.create(queuerequest);
    }, $.fetchtimeout = 3e4, $.fetchcancel = function(channel) {
        (channel = $.fetchchannels[channel || 1]) && (channel._array = [], channel.cur && channel.cur.abort(), 
        channel.active = !1, channel.cnt = 0, channel.cur = 0);
    }, $.fetchchannels = {}, $.fetchprocess = function(channel) {
        channel = channel || 1, $.fetchchannels[channel] && $.fetchchannels[channel].process();
    }, $.fetch = function(uri, data, channel, progressfn, fetchtimeout, headers) {
        channel = channel || 1;
        var thencb = !1, thenfn = function(callback) {
            thencb = callback;
        };
        return $.fetchchannels[channel] || ($.fetchchannels[channel] = $.queuerequest(), 
        $.fetchchannels[channel].name = channel, $.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout), 
        "function" == typeof progressfn && ($.fetchchannels[channel].progressfn = progressfn), 
        $.fetchchannels[channel].queue({
            uri: uri,
            payload: data || null,
            headers: headers || 0,
            type: data ? "post" : "get",
            callback: function(body, err) {
                try {
                    "function" == typeof thencb && thencb({
                        body: body,
                        err: err
                    });
                } catch (e) {
                    glatteis.log.e(e);
                }
            }
        }), {
            then: thenfn
        };
    };
}(), $._r();

var taraajim = {
    en: {
        profile: "Profile",
        profiles: "Profiles",
        noprofiles: "No Profiles",
        aqrabaa: "Favorites",
        noaqrabaa: "No Favorites",
        settings: "Settings",
        requestfeat: "Request Feature",
        reportbug: "Report Bug",
        author: "Author",
        build: "Build",
        openad: "Ad",
        quality: "Quality",
        largetext: "Large Text",
        transparency: "Transparency",
        calendar: "Calendar",
        hijri: "Hijri",
        gregorian: "Gregorian",
        builton: "Built On",
        offlinesince: "Offline since",
        skhelp: "Press # for actions",
        softkeystouchdpad: "Touchscreen D-Pad",
        theme: "Theme",
        black: "Black",
        white: "White",
        infuture: "in",
        justnow: "just now",
        sseconds: "s",
        secondsago: "secs",
        aminuteago: "a min",
        minute: "min",
        sminutes: "m",
        minutes: "mins",
        minutesago: "mins",
        anhourago: "an hr",
        hourago: "hr",
        hoursago: "hrs",
        yesterday: "yesterday",
        tomorrow: "tomorrow",
        adayago: "a day",
        dayago: "d",
        daysago: "d",
        lastmonth: "last month",
        monthago: "mo",
        monthsago: "mo",
        lastyear: "last year",
        yearago: "y",
        yearsago: "y",
        alongtime: "a long time",
        sunday: "sunday",
        monday: "monday",
        tuesday: "tuesday",
        wednesday: "wednesday",
        thursday: "thursday",
        friday: "friday",
        saturday: "saturday",
        ",": ",",
        am: "am",
        pm: "pm",
        st: "st",
        nd: "nd",
        rd: "rd",
        th: "th",
        timeformat: "Time Format",
        hours24: "24 hour",
        hours12: "12 hour",
        language: "Language",
        en: "English",
        ar: "Arabic",
        ur: "Urdu",
        ru: "Russian",
        de: "German",
        es: "Spanish",
        loading: "Loading...",
        exiting: "Exiting...",
        unsupported: "Your device can't run this app",
        off: "Off",
        on: "On",
        animations: "Animations",
        webapptouchdir: "Touch affects direction"
    }
}, Hooks, hooks;

!function() {
    "use strict";
    Hooks = {
        _registry: {},
        _map: {},
        _uid: 0,
        set: function(hook, id, fn) {
            return hook instanceof Array ? void hook.forEach(function(item) {
                Hooks.set(item, id, fn);
            }) : ("function" == typeof id && (fn = id, id = new Date().getTime()), "function" == typeof fn && (void 0 === Hooks._registry[hook] && (Hooks._registry[hook] = []), 
            ++Hooks._uid, Hooks._registry[hook][Hooks._uid] = fn, Hooks._map[hook + "_" + id] = Hooks._uid, 
            !0));
        },
        run: function(hook, extras) {
            var handlers = Hooks._registry[hook];
            if (handlers instanceof Array) {
                for (var i in handlers) "function" == typeof handlers[i] && handlers[i](extras);
                return !0;
            }
            return !1;
        },
        rununtilconsumed: function(hook, extras) {
            var handlers = Hooks._registry[hook];
            if (handlers instanceof Array) for (var i in handlers) if ("function" == typeof handlers[i]) {
                var returnedvalue = handlers[i](extras);
                if (returnedvalue) return returnedvalue;
            }
            return !1;
        },
        pop: function(hook, id) {
            return !!Hooks._registry[hook] && (delete Hooks._registry[hook][Hooks._map[hook + "_" + id]], 
            !0);
        },
        hook: function(hook) {
            Hooks._registry[hook] = [];
        },
        unhook: function(hook) {
            delete Hooks._registry[hook];
        }
    }, module.exports = Hooks, hooks = Hooks;
}();

var mubaaraat = function(str, re) {
    return (str.match(re) || [])[0];
}, tabdeel = function(str, arr) {
    if (isstr(str) && isarr(arr)) for (var i = 0; i < arr.length; i += 2) str = str.replace(arr[i], arr[i + 1]);
    return str;
}, deepcopy = function(v) {}, isundef = function(v) {
    return void 0 === v;
}, isstr = function(v) {
    return "string" == typeof v;
}, isfinite = function(v) {
    return Number.isFinite(v);
}, isnan = function(v) {
    return Number.isNaN(v);
}, isnum = function(v) {
    return "number" == typeof v && !isnan(v) && isfinite(v);
}, isfun = function(v) {
    return "function" == typeof v;
}, isarr = function(v) {
    return v instanceof Array;
}, areobjectsequal = function(a, b) {
    var same = 1;
    if (a && b && Object.keys(a).length === Object.keys(b).length) {
        for (var i in a) if (a[i] !== b[i]) {
            same = 0;
            break;
        }
    } else same = 0;
    return same;
}, zero = function(num) {
    return num < 10 ? "0" + num : num;
}, collapsearray = function(arr) {
    var arr2 = [];
    return arr.forEach(function(e) {
        isundef(e) || arr2.push(e);
    }), arr2;
}, array2string = function(arr) {
    return " " + arr.join(" ");
}, intersect = function(arr, superset) {
    var arr2 = [];
    return arr.forEach(function(item) {
        isundef(superset[item]) || arr2.push(item);
    }), arr2;
}, shallowcopy = function(v) {
    if (isnum(v) || isstr(v)) return v;
    if (v instanceof Array) {
        var v2 = [];
        return v.forEach(function(item) {
            v2.push(Object.assign({}, item));
        }), v2;
    }
    return Object.assign({}, v);
}, parseint = function(v, r) {
    return parseInt(v, r);
}, parsefloat = function(v, n) {
    return n && (v = parseFloat(v).toFixed(n)), parseFloat(v);
}, intify = function(arr) {
    for (var i = 0; i < arr.length; ++i) arr[i] = parseint(arr[i]);
    return arr;
}, tolower = function(obj) {
    return obj.toLowerCase();
}, enc = function(v) {
    return encodeURIComponent(v);
}, dec = function(v) {
    return decodeURIComponent(v);
}, encp = function(v) {
    return encodeURI(v);
}, decp = function(v) {
    return decodeURI(v);
}, innerhtml = function(obj, v) {
    obj.innerHTML = v;
}, setvalue = function(obj, v) {
    obj.value = v;
}, scrollintoview = function(obj) {
    obj && obj.scrollIntoView(1);
}, prevsibling = function(obj) {
    return obj.previousElementSibling;
}, nextsibling = function(obj) {
    return obj.nextElementSibling;
}, getattribute = function(obj, k) {
    return obj.getAttribute(k);
}, attribute = function(obj, k, v) {
    "" == v ? obj.removeAttribute(k) : obj.setAttribute(k, v);
}, setcss = function(obj, k, v) {
    obj.style[k] = void 0 === v ? "" : v;
}, popdata = function(obj, k, v) {
    obj && delete obj.dataset[k];
}, setdata = function(obj, k, v) {
    obj && (obj.dataset[k] = v);
}, getdata = function(obj, k) {
    return obj.dataset[k];
}, innertext = function(obj, v) {
    if (isundef(v)) return obj.innerText;
    obj.innerText = v;
}, innerwidth = function(v) {
    return innerWidth + (v || 0);
}, innerheight = function(v) {
    return innerHeight + (v || 0);
}, hasownprop = function(obj, i) {
    if (obj && obj.hasOwnProperty) return obj.hasOwnProperty(i);
}, izhar = function(v) {
    v.hidden = 0;
}, ixtaf = function(v) {
    v.hidden = 1;
}, isixtaf = function(v) {
    return v.hidden || "hidden" == getattribute(v, "type");
}, markooz = function() {
    return document.activeElement;
}, preventdefault = function(obj) {
    obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
}, raycast = function(x, y) {
    return document.elementsFromPoint(x, y);
}, elementbyid = function(id) {
    return document.getElementById(id);
}, listener = function(obj, name, fn, o) {
    ("string" == typeof obj || obj instanceof Array) && (o = fn, fn = name, name = obj, 
    obj = window), name instanceof Array ? name.forEach(function(item) {
        obj.addEventListener(item, fn, o);
    }) : obj.addEventListener(name, fn, o);
}, createelement = function(name, classes, id) {
    var e = document.createElement(name || "div");
    return classes && (e.className = classes), id && (e.id = id), e;
}, iswithinelement = function(arr, element) {
    var a = arr[0], b = arr[1], x = element.offsetLeft, y = element.offsetTop, w = x + element.offsetWidth, h = y + element.offsetHeight;
    return a >= x && a <= w && b >= y && b <= h;
}, getposition = function(el) {
    var xPos = 0, yPos = 0, dir = document.body.dir;
    for ("rtl" === dir && (xPos += el.clientWidth); el; ) {
        if ("BODY" == el.tagName) {
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft, yScroll = el.scrollTop || document.documentElement.scrollTop;
            xPos += el.offsetLeft - xScroll + el.clientLeft, yPos += el.offsetTop - yScroll + el.clientTop;
        } else xPos += el.offsetLeft - el.scrollLeft + el.clientLeft, yPos += el.offsetTop - el.scrollTop + el.clientTop;
        el = el.offsetParent;
    }
    return [ xPos, yPos ];
}, replacewith = function(el, el2) {
    el.replaceWith(el2);
};

!function() {
    var replacewithpolyfill = function() {
        "use-strict";
        var currentNode, parent = this.parentNode, i = arguments.length;
        if (parent) for (i || parent.removeChild(this); i--; ) currentNode = arguments[i], 
        "object" != typeof currentNode ? currentNode = this.ownerDocument.createTextNode(currentNode) : currentNode.parentNode && currentNode.parentNode.removeChild(currentNode), 
        i ? parent.insertBefore(currentNode, this.nextSibling) : parent.replaceChild(currentNode, this);
    };
    Element.prototype.replaceWith || (Element.prototype.replaceWith = replacewithpolyfill), 
    CharacterData.prototype.replaceWith || (CharacterData.prototype.replaceWith = replacewithpolyfill), 
    DocumentType.prototype.replaceWith || (DocumentType.prototype.replaceWith = replacewithpolyfill);
}();

var webapp, appname = "miqyaas", maxzan = maxzan || 0, pager = pager || 0, checkbox = checkbox || 0, preferences = preferences || 0, translate = translate || 0, focusprev, focusnext, navigables, LAYERTOPMOST = 3e3;

!function() {
    var wakelockstatus, doc = document, bod = doc.body;
    navigables = [ "input", "textarea", "button", "a", "select" ], focusprev = function(element, thisone, num) {
        var out, LV, orig = element;
        if (!((num = num || 0) > 100)) {
            for (;element.previousElementSibling && num < 100; ) {
                if (++num, element = thisone ? element : element.previousElementSibling, isixtaf(element)) ; else if ("list" == element.dataset.focus) {
                    if (LV = element.listobject, LV.length()) {
                        webapp.blur(), element.focus(), LV.last(), LV.rakkaz(1, 1), out = element;
                        break;
                    }
                } else {
                    if (element.dataset.focus && element.lastElementChild) {
                        out = focusprev(element.lastElementChild, 1, ++num);
                        break;
                    }
                    if (navigables.includes(element.tagName.toLowerCase())) {
                        element.focus(), webapp.scrollto(element), out = element;
                        break;
                    }
                }
                thisone && (thisone = 0);
            }
            if (out) ; else {
                if (1 == element.dataset.focus) return focusprev(element.parentElement, 0, ++num);
                if (element.parentElement.dataset.focus) return focusprev(element.parentElement, 0, ++num);
            }
            return element.onprev && element.onprev(element), out ? (orig && orig.listobject && orig.listobject.deselect(), 
            out) : void 0;
        }
    }, focusnext = function(element, thisone, num) {
        var out, LV, orig = element;
        if (!((num = num || 0) > 100)) {
            for (;element.nextElementSibling && num < 100; ) {
                if (++num, element = thisone ? element : element.nextElementSibling, isixtaf(element)) ; else if ("list" == element.dataset.focus) {
                    if (LV = element.listobject, LV.length()) {
                        webapp.blur(), element.focus(), LV.first(), LV.rakkaz(1, 1), out = element;
                        break;
                    }
                } else {
                    if (element.dataset.focus && element.firstElementChild) {
                        out = focusnext(element.firstElementChild, 1, ++num);
                        break;
                    }
                    if (navigables.includes(element.tagName.toLowerCase())) {
                        element.focus(), webapp.scrollto(element), out = element;
                        break;
                    }
                }
                thisone && (thisone = 0);
            }
            if (out) ; else {
                if (1 == element.dataset.focus) return focusnext(element.parentElement, 0, ++num);
                if (element.parentElement.dataset.focus) return focusnext(element.parentElement, 0, ++num);
            }
            return element.onnext && element.onnext(element), out ? (orig && orig.listobject && orig.listobject.deselect(), 
            out) : void 0;
        }
    };
    var getform = function(element) {
        if (element instanceof HTMLElement) {
            var payload = {}, otherviews = element.querySelectorAll("[data-id]");
            for (var i in otherviews) otherviews.hasOwnProperty(i) && (otherviews[i].getvalue ? payload[otherviews[i].dataset.id] = otherviews[i].getvalue() : payload[otherviews[i].dataset.id] = otherviews[i].value);
            return payload;
        }
    }, getformkeys = function(element) {
        if (element instanceof HTMLElement) {
            var keys = {}, otherviews = element.querySelectorAll("[data-id]");
            for (var i in otherviews) otherviews.hasOwnProperty(i) && (keys[otherviews[i].dataset.id] = otherviews[i]);
            return keys;
        }
    }, sendform = function(element, button) {
        var payload, keys;
        element ? (payload = getform(element), keys = getformkeys(element)) : element = {
            id: button.dataset.form
        }, Hooks.run("domformdata", {
            form: element,
            button: button,
            payload: payload,
            keys: keys
        });
    }, setupforms = function() {
        var sendbuttons = document.querySelectorAll(".form .send");
        for (var i in sendbuttons) sendbuttons.hasOwnProperty(i) && (sendbuttons[i].onclick = function() {
            sendform(document.querySelector("#" + this.dataset.form), this);
        });
        var counts = document.querySelectorAll(".form label.count");
        for (var i in counts) {
            var countlabel = counts[i];
            if (counts.hasOwnProperty(i)) {
                var field = countlabel.parentNode.nextElementSibling;
                field.oninput = function() {
                    this.previousElementSibling.lastElementChild.innerText = (this.value || "").length;
                }, field.oninput();
            }
        }
    };
    webapp = {
        visible: 1,
        isdimmed: 0,
        lavaazim: function(inwindow) {
            inwindow = inwindow || [];
            var err;
            for (var i in inwindow) {
                var feature = inwindow[i];
                if (!(feature in window || feature in navigator || feature in Navigator)) {
                    err = 1;
                    break;
                }
            }
            return err ? (webapp.header(translate && translate("unsupported")), 0) : (webapp.header(), 
            1);
        },
        blur: function() {
            var ae = markooz();
            return ae && ae.blur(), blur(), ae;
        },
        header: function(text, align) {
            1 == align ? headerui.dataset.align = "1" : 2 == align ? headerui.dataset.align = "2" : delete headerui.dataset.align, 
            backstack.darajah <= 1 ? text ? (text instanceof Array ? headerui.dataset.i18n = text[0] : (delete headerui.dataset.i18n, 
            headerui.innerText = text), headerui.hidden = 0) : (delete headerui.dataset.i18n, 
            headerui.innerText = "", headerui.hidden = 1) : 2 === backstack.darajah && sheet.header(text), 
            translate.update();
        },
        sahhar: function(what) {
            navigator && navigator.requestWakeLock && (webapp.nawwam(), wakelockstatus = navigator.requestWakeLock(what || "screen"));
        },
        nawwam: function() {
            if (wakelockstatus && wakelockstatus.unlock) {
                try {
                    wakelockstatus.unlock();
                } catch (e) {
                    $.log(e);
                }
                wakelockstatus = 0;
            }
        },
        scrollx: function(v) {
            scrollingelement().scrollTop += v;
        },
        scrolly: function(v) {
            scrollingelement().scrollLeft += v;
        },
        dimmer: function(zindex, text) {
            zindex && (dimmer.style.zIndex = zindex), dimmer.hidden = zindex ? 0 : 1, webapp.isdimmed = zindex ? 1 : 0, 
            text ? (dimmertext.hidden = 0, dimmertext.dataset.i18n = text) : (dimmertext.hidden = 1, 
            delete dimmertext.dataset.i18n, innerhtml(dimmertext, "")), document.scrollingElement.style.overflow = zindex ? "hidden" : "", 
            translate.update(dimmer);
        },
        statusbarpadding: function(yes) {
            yes ? (statusbarpadding.hidden = 0, statusbarshadow.hidden = 0) : (statusbarpadding.hidden = 1, 
            statusbarshadow.hidden = 1);
        },
        transparency: function(yes) {
            yes = void 0 === yes ? preferences && preferences.get(23, 1) : yes, yes ? document.body.dataset.transparency = 1 : delete document.body.dataset.transparency;
        },
        textsize: function(yes) {
            yes = void 0 === yes ? preferences && preferences.get(9, 1) : yes, yes ? document.body.dataset.largetext = 1 : delete document.body.dataset.largetext;
        },
        exit: function() {
            close();
        },
        icons: function() {
            var elements = document.body.querySelectorAll("[data-icon]");
            for (var i in elements) if (elements.hasOwnProperty(i) && elements[i].dataset.icon) {
                var e = eqonaat.querySelector("#" + elements[i].dataset.icon);
                e && (elements[i].innerHTML = '<svg viewBox="0 0 48 48">' + e.cloneNode(1).innerHTML + "</svg>");
            }
        },
        uponresize: function() {
            $.taxeer("taHjeem", function() {
                innerwidth() <= 320 ? setdata(bod, "aqil", 1) : popdata(bod, "aqil"), innerwidth() > 320 && innerwidth() <= 640 ? setdata(bod, "qaleel", 1) : popdata(bod, "qaleel"), 
                innerwidth() > 320 ? setdata(bod, "qaleelah", 1) : popdata(bod, "qaleelah"), innerwidth() > 640 && innerwidth() <= 800 ? setdata(bod, "wast", 1) : popdata(bod, "wast"), 
                innerwidth() > 640 ? setdata(bod, "wastah", 1) : popdata(bod, "wastah"), innerwidth() >= 1024 ? setdata(bod, "tvfs", 1) : popdata(bod, "tvfs");
            }, 100), innerheight() <= 480 ? document.body.dataset.keyboardopen = 1 : delete document.body.dataset.keyboardopen;
        }
    }, listener("dragover", function(e) {
        return $.log("dragover"), setdata(bod, "tahweem", 1), preventdefault(e), !1;
    }), listener("dragleave", function(e) {
        return $.log("dragleave"), $.taxeer("dragleave", function() {
            popdata(bod, "tahweem");
        }, 3e3), preventdefault(e), !1;
    }), listener("drop", function(e) {
        popdata(bod, "tahweem"), preventdefault(e);
        var f = e.dataTransfer.files;
        return f && f.length && Hooks.run("huboot", f), !1;
    }), listener("resize", function() {
        webapp.uponresize();
    }), listener("contextmenu", function(e) {
        Hooks.rununtilconsumed("contextmenu", e) && e && preventdefault(e);
    }), listener("scroll", function(e) {
        Hooks.run("scroll", document.scrollingElement.scrollTop);
    }), listener("keyup", function(e) {
        Hooks.rununtilconsumed("keyup", e);
    }), listener("keydown", function(e) {
        Hooks.rununtilconsumed("keydown", e);
    }), listener("load", function(e) {
        webapp.header(xlate(appname)), xlate.update(), time && time.start(), webapp.icons(), 
        webapp.uponresize(), view.fahras(), setupforms(), maxzan && maxzan.badaa ? maxzan.badaa(function() {
            Hooks.run("ready", 1), backstack.main(), loadingbox.hidden = 1;
        }) : (Hooks.run("ready", 1), $.taxeer("loadingbox", function() {
            loadingbox.hidden = 1;
        }), backstack.main()), document.addEventListener("visibilitychange", function() {
            "visible" === document.visibilityState ? (webapp.visible = 1, Hooks.run("visible")) : (webapp.visible = 0, 
            Hooks.run("hidden"));
        }), Hooks.run("visible");
    });
}();

var scrollingelement = function() {
    var darajah = backstack.darajah;
    return [ 0, 1 ].includes(darajah) ? document.scrollingElement : 2 === darajah ? sheetui : 3 === darajah ? dialogui : void 0;
}, datepicker = datepicker || 0;

!function() {
    webapp.itlaa3 = function(text, time) {
        var element = itlaa3.firstElementChild;
        text ? (text instanceof Array ? (element.dataset.i18n = text[0], translate.update(itlaa3)) : (delete element.dataset.i18n, 
        element.innerText = text), itlaa3.hidden = 0, $.taxeer("itlaa3", function() {
            webapp.itlaa3();
        }, time || 3e3)) : (delete element.dataset.i18n, element.innerText = "", itlaa3.hidden = 1);
    }, webapp.taht3nsar = function(text, time, taht) {
        taht = document.activeElement || taht;
        var element = taht3nsar.firstElementChild;
        if (text) {
            if (text instanceof Array ? (element.dataset.i18n = text[0], translate.update(taht3nsar)) : (delete element.dataset.i18n, 
            element.innerText = text), taht3nsar.hidden = 0, taht) {
                var pos = getposition(taht);
                setcss(taht3nsar, "top", pos[1] - 20 + "px"), "rtl" == taht.dir ? (setcss(taht3nsar, "right"), 
                setcss(taht3nsar, "left", pos[0] + "px")) : (setcss(taht3nsar, "left"), setcss(taht3nsar, "right", innerwidth() - pos[0] - taht.offsetWidth + "px"));
            }
            $.taxeer("taht3nsar", function() {
                webapp.taht3nsar();
            }, time || 3e3);
        } else delete element.dataset.i18n, element.innerText = "", taht3nsar.hidden = 1;
    }, webapp.scrollto = function(element) {
        var se = scrollingelement();
        se.scrollTop = 0 + (element ? element.offsetTop - se.clientHeight / 4 : 0);
    }, webapp.scrolltotop = function() {
        scrollingelement().scrollTop = 0;
    }, webapp.scrolltobottom = function() {
        var se = scrollingelement();
        return se.scrollTop = se.scrollHeight - se.clientHeight, se.scrollTop;
    }, webapp.isatop = function() {
        var se = scrollingelement();
        return 0 === Math.floor(se.scrollTop);
    }, webapp.isatbottom = function() {
        var se = scrollingelement();
        return Math.floor(se.scrollTop) === se.scrollHeight - se.clientHeight;
    }, Hooks.set("closeall", function(darajah) {
        3 === darajah && (datepicker && datepicker.hide(), dialog.hide(), webapp.blur()), 
        2 === darajah && (sheet.hide(), webapp.blur()), 1 === darajah && (view.axad("main"), 
        webapp.blur()), 0 === darajah && (webapp.itlaa3(translate("exiting")), $.taxeer("exit", function() {
            webapp.exit();
        }));
    }), Hooks.set("restore", function(darajah) {
        3 === darajah && webapp.dimmer(600), 2 === darajah && webapp.dimmer(400), 1 === darajah && webapp.dimmer(), 
        0 === darajah && (webapp.header(), webapp.dimmer());
    }), Hooks.set("backstackdialog", function(args) {
        var date = 0;
        datepicker && args instanceof HTMLElement && (date = 1), webapp.dimmer(600), softkeys.clear(), 
        softkeys.set(K.sl, function() {
            date ? datepicker.okay && datepicker.okay(args) : dialog.okay && dialog.okay();
        }, 0, "icondone"), softkeys.set(K.sr, function() {
            date ? datepicker.cancel && datepicker.cancel() : dialog.cancel && dialog.cancel();
        }, 0, "iconclose"), date ? datepicker.show(args) : dialog.show(args);
    }), Hooks.set("backstacksheet", function(args) {
        webapp.dimmer(400), softkeys.clear(), (args.callback || args.c) && softkeys.set(K.sl, function() {
            sheet.okay && sheet.okay();
        }, 0, "icondone"), softkeys.set(K.sr, function() {
            sheet.cancel && sheet.cancel();
        }, 0, "iconarrowback"), sheet.show(args), softkeys.showhints();
    }), Hooks.set("backstackview", function(name) {
        return webapp.dimmer(), softkeys.clear(), softkeys.P.empty(), softkeys.set(K.sr, function() {
            Hooks.run("back");
        }, 0, "iconarrowback"), view.ishtaghal(name), softkeys.showhints(), 1;
    }), Hooks.set("backstackmain", function(name) {
        softkeys.clear(), softkeys.P.empty(), view.ishtaghal("main");
    }), Hooks.set("ready", function() {
        settings.adaaf("animations", function() {
            var animationsoff = preferences.get(15, 1);
            return animationsoff ? (delete document.body.dataset.animations, setcss(document.firstElementChild, "scrollBehavior")) : (document.body.dataset.animations = 1, 
            setcss(document.firstElementChild, "scrollBehavior", "smooth")), [ animationsoff ? "off" : "on" ];
        }, function() {
            preferences.get(15, 1) ? preferences.set(15, 0) : preferences.set(15, 1);
        });
    });
}();

var list;

!function() {
    "use strict";
    var direction = function() {
        return document.body.dir;
    }, proto = {
        _muntahaabox: 0,
        _muntahaa: -1,
        murakkaz: 0,
        adapter: 0,
        beforeset: 0,
        beforepop: 0,
        uponpastend: function() {
            var yes = focusnext(this.element);
            return yes && yes.listobject && softkeys.list.basic(yes.listobject), yes;
        },
        uponpaststart: function() {
            var yes = focusprev(this.element);
            return yes && yes.listobject && softkeys.list.basic(yes.listobject), yes;
        },
        uponend: 0,
        uponstart: 0,
        uponnavi: 0,
        moveup: function(uid) {
            uid = uid || (this.axavmuntaxab() || {}).uid;
            var clone = this.get(this.id2num(uid));
            if (clone) {
                var prev = clone.previousElementSibling;
                if (prev) {
                    var prevuid = prev.dataset.uid, obj = this.adapter.get(uid), prevobj = this.adapter.get(prevuid);
                    obj && prevobj && (this.adapter.eawwad(prevuid, uid), this.keys.items.insertBefore(clone, prev), 
                    this.gridnum > 1 ? this.left() : this.up());
                }
            }
        },
        movedown: function(uid) {
            uid = uid || (this.axavmuntaxab() || {}).uid;
            var clone = this.get(this.id2num(uid));
            if (clone) {
                var next = clone.nextElementSibling;
                if (next) {
                    var nextuid = next.dataset.uid, obj = this.adapter.get(uid), nextobj = this.adapter.get(nextuid);
                    obj && nextobj && (this.adapter.eawwad(nextuid, uid), this.keys.items.insertBefore(next, clone), 
                    this.gridnum > 1 ? this.right() : this.down());
                }
            }
        },
        ixtaf: function() {
            this.element.hidden = 1, this.element.parentElement.hidden = 1;
        },
        izhar: function() {
            this.element.hidden = 0, this.element.parentElement.hidden = 0;
        },
        uponrakkaz: function(v, active) {
            v && active && softkeys.list.basic(this);
        },
        rakkaz: function(v, active) {
            var yes;
            this.murakkaz = !!v, v && !this.element.dataset.rakkaz ? (this.element.dataset.rakkaz = 1, 
            yes = 1) : !v && this.element.dataset.rakkaz && (delete this.element.dataset.rakkaz, 
            yes = 1), (yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
        },
        first: function(select) {
            this.selected = void 0 === select ? -1 : select;
            for (var item = this.get(++this.selected); item; ) item = item.dataset.listitem ? 0 : this.get(++this.selected);
            return this.intaxabscroll(this.intaxabsaamitan()), this;
        },
        last: function() {
            this.selected = this.length();
            for (var item = this.get(--this.selected); item; ) item = item.dataset.listitem ? 0 : this.get(--this.selected);
            return this.intaxabscroll(this.intaxabsaamitan()), this;
        },
        message: function(msg) {
            msg ? (this.keys.message.dataset.i18n = msg, this.keys.message.parentElement.hidden = 0, 
            this.keys.items.hidden = 1) : (delete this.keys.message.dataset.i18n, this.keys.message.innerText = "", 
            this.keys.message.parentElement.hidden = 1, this.keys.items.hidden = 0), translate.update();
        },
        left: function(e, fake) {
            if (!fake && "rtl" === direction()) return this.right(e, 1);
            var delta = this.gridnum ? 1 : 10;
            this.selected -= delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0 : this.get(++this.selected);
            return this.selected < 0 ? this.first() : this.intaxabscroll(this.intaxabsaamitan()), 
            this;
        },
        up: function(e) {
            this.selectedold = this.selected;
            var delta = this.gridnum ? this.gridnum: 1;
            this.selected -= delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0 : this.get(--this.selected);
            if (this.selected < 0) {
                var yes;
                this.uponpaststart && (yes = this.uponpaststart(this.selectedold)), yes ? this.intaxabscroll(this.intaxabsaamitan()) : this.last();
            } else this.intaxabscroll(this.intaxabsaamitan());
            return this;
        },
        length: function() {
            return isfun(this.uponlength) ? this.uponlength() : this.keys.items.children.length;
        },
        down: function(e) {
            this.selectedold = this.selected;
            var delta = this.gridnum ? this.gridnum: 1;
            this.selected += delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0 : this.get(++this.selected);
            if (this.selected > this.length() - 1) {
                this.selected = this.length() - 1;
                var yes;
                this.uponpastend && (yes = this.uponpastend(this.selectedold)), yes ? this.intaxabscroll(this.intaxabsaamitan()) : this.first(this.gridnum ? this.selected - this.length() - 1 : -1);
            } else this.intaxabscroll(this.intaxabsaamitan());
            return this;
        },
        right: function(e, fake) {
            if (!fake && "rtl" === direction()) return this.left(e, 1);
            var delta = this.gridnum ? 1 : 10;
            this.selected += delta;
            for (var item = this.get(this.selected); item; ) item = item.dataset.listitem ? 0 : this.get(++this.selected);
            return this.selected > this.length() - 1 ? this.last() : this.intaxabscroll(this.intaxabsaamitan()), 
            this;
        },
        baidaa: function(id, multiple) {
            id = void 0 === id ? this.selected: id;
            var item, items = this.keys.items.children;
            for (var i in items) items.hasOwnProperty(i) && (item = items[i], i == id ? multiple ? item.dataset.baidaa && delete item.dataset.baidaa: item.dataset.baidaa = 1 : multiple || delete item.dataset.baidaa);
            return item;
        },
        select: function(id, noscroll, silent, nofocus) {
            id = void 0 === id ? this.selected: id;
            var selected = this.intaxabsaamitan(id);
            return noscroll || this.intaxabscroll(selected), selected && !nofocus && (markooz() && markooz().blur(), 
            selected.focus(), this.rakkaz(1, 1)), this.selected = id, this.uponselect && !silent && (selected = this.get(this.selected)) && (selected = this.adapter.get(selected.dataset.uid)) && this.uponselect(selected), 
            this;
        },
        intaxabscroll: function(selected) {
            isundef(selected) && (selected = this.get(this.selected)), this.filmakaan ? selected && scrollintoview(selected) : 0 === this.selected ? webapp.scrollto() : selected && webapp.scrollto(selected);
        },
        intaxabsaamitan: function(id) {
            id = void 0 === id ? this.selected: id;
            var item, selected, items = this.keys.items.children;
            for (var i in items) items.hasOwnProperty(i) && (item = items[i], i == id ? (item.dataset.selected = 1, 
            selected = item) : delete item.dataset.selected);
            if (isfun(this.uponintaxab) && selected) {
                var a = this.adapter.get(selected.dataset.uid);
                a && this.uponintaxab(a);
            }
            return selected;
        },
        deselect: function() {
            var old = this.selected;
            return this.selected = -1, this.intaxabsaamitan(), this.selected = old, this.rakkaz(), 
            this;
        },
        mufarraq: function(pixels) {},
        eawwad: function(o, uid) {
            var oldclone = this.get(this.id2num(uid));
            if (oldclone) {
                replacewith(oldclone, this.set(o)), this.adapter.eawwad(uid, o.uid), this.adapter.pop(uid);
            }
        },
        set: function(o, id) {
            id && $.log("list.set, stop using id, use o.uid instead"), o = o || {};
            var clone, LV = this, listitem = o._listitem || LV._listitem, parent = LV.keys.items;
            if (!(isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)) {
                if (void 0 === id && (void 0 === o.uid ? o.uid = id = LV.length() : id = o.uid), 
                LV.idprefix_raw && void 0 !== o.uid && (o.id_dom = LV.idprefix_raw + o.uid), o.uid && (clone = elementbyid(o.id_dom || o.uid)), 
                LV.idprefix_raw && o.ruid && (clone = elementbyid(LV.idprefix_raw + o.ruid)) && (clone.id = o.id_dom, 
                setdata(clone, "uid", o.uid)), LV.beforeset && (o = LV.beforeset(o, o.uid)), o.ruid && (LV.adapter.pop(o.ruid), 
                delete o.ruid), LV.adapter.set(o.uid, o), clone) {
                    var selected = clone.dataset.selected, baidaa = clone.dataset.baidaa;
                    templates.set(clone, o, listitem), selected && (clone.dataset.selected = 1), baidaa && (clone.dataset.baidaa = 1);
                } else {
                    var o2 = Object.assign({
                        id: o.id_dom,
                        data: {
                            uid: o.uid
                        }
                    }, o);
                    clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2), 
                    delete o.before, delete o.awwal, clone.dataset.listitem = 1, o.mufarraq && (clone.dataset.mufarraq = o.mufarraq);
                }
                return clone && (o.mu3allaq ? setdata(clone, "mu3allaq", 1) : popdata(clone, "mu3allaq"), 
                clone.onclick = function(e) {
                    var item = LV.adapter.get(o.uid);
                    item && LV.uponclick && LV.uponclick(item, e, parseint(LV.id2num(o.uid)));
                }), LV._katabmowdoo3(), LV.afterset && LV.afterset(o, clone, templates.keys(clone)), 
                LV.ba3dihi && LV.ba3dihi(o, clone, templates.keys(clone)), LV.uponadaaf && LV.uponadaaf(LV.length()), 
                clone;
            }
        },
        listitem: function(elementname) {
            return this._listitem = elementname || "listitem", this;
        },
        axavmfateeh: function(uid) {
            var clone = this.get(this.id2num(uid));
            if (clone) return templates.mfateeh(clone);
        },
        axavmuntaxab: function() {
            return this.axadmuntaxab();
        },
        axadmuntaxab: function() {
            var uid = this.num2id(this.selected || 0);
            return !isundef(uid) && this.adapter.get(uid);
        },
        axav: function() {
            return this.axad();
        },
        axad: function() {
            var item, baidaa, items = this.keys.items.children;
            for (var i in items) if (items.hasOwnProperty(i) && (item = items[i], item.dataset.baidaa)) {
                baidaa = item.dataset.uid;
                break;
            }
            return !isundef(baidaa) && this.adapter.get(baidaa);
        },
        get: function(id) {
            return this.keys.items.children[id];
        },
        pop: function(id) {
            var element, uid, LV = this;
            isundef(id) ? element = LV.get(LV.selected) : (LV.idprefix_raw && (id = LV.idprefix_raw + id), 
            element = elementbyid(id)), element && (uid = element.dataset.uid, LV.adapter.pop(uid), 
            element.remove(), LV.selected && (LV.selected == LV.length() ? LV.selected = LV.length() - 1 : LV.selected = LV.selected - 1), 
            LV.intaxabsaamitan(), LV._katabmowdoo3(), LV.uponhavaf && LV.uponhavaf(LV.length()));
        },
        popall: function() {
            this.adapter = $.array(), innertext(this.keys.items, ""), innertext(this._muntahaabox, ""), 
            this._katabmowdoo3();
        },
        press: function(key, force) {
            var element = this.get(this.selected);
            if (element) {
                var item = this.adapter.get(element.dataset.uid);
                item && (this.element.dataset.rakkaz || force) && this.onpress && this.onpress(item, key, this.selected);
            }
            return this;
        },
        num2id: function(id) {
            var clone = this.get(id || this.selected);
            return !!clone && clone.dataset.uid;
        },
        id2num: function(uid) {
            var cn = this.keys.items.children;
            for (var i in cn) if (cn.hasOwnProperty(i) && cn[i].dataset.uid == uid) return i;
            return !1;
        },
        grid: function(num) {
            return this.gridnum = num, num ? this.element.dataset.grid = num : delete this.element.dataset.grid, 
            this;
        },
        freeflow: function(v) {
            return v ? (this.grid(), this.element.dataset.freeflow = 1) : delete this.element.dataset.freeflow, 
            this;
        },
        hidetext: function(num) {
            return num ? this.element.dataset.hidetext = num : delete this.element.dataset.hidetext, 
            this;
        },
        muntahaa: function(max, muntahaabox) {
            return this._muntahaa = max || -1, this._muntahaabox = this.keys.miqyaas || this._muntahaabox, 
            this._muntahaabox && max > -1 && (this.keys.miqyaas.hidden = 0), this;
        },
        _katabmowdoo3: function() {
            var LV = this, len = LV.length();
            isnum(LV._muntahaa) && LV._muntahaa > -1 && innertext(LV._muntahaabox, len + " / " + LV._muntahaa), 
            this.keys.raees.hidden = len ? 0 : 1, this._mowdoo3 || (this.keys.raees.hidden = 1);
        },
        mowdoo3: function(m, i18n) {
            return this._mowdoo3 = m || 0, i18n ? (attribute(this.keys.mowdoo3list, "data-i18n", m), 
            xlate.update(this.element)) : m && innertext(this.keys.mowdoo3list, m), this._katabmowdoo3(), 
            this;
        },
        idprefix: function(id) {
            return this.idprefix_raw = id, this;
        },
        bahac: function(bahacbox) {
            var LV = this;
            return bahacbox instanceof HTMLInputElement && (LV.uponpaststart = function() {
                return bahacbox.focus(), 1;
            }, bahacbox.oninput = function() {
                $.taxeer("listbahac", function() {
                    LV.uponbahac && LV.uponbahac(bahacbox.value.trim());
                }, 250);
            }, bahacbox.onfocus = function() {
                LV.rakkaz();
            }), LV;
        }
    };
    list = function(element) {
        var LV = Object.create(proto);
        return element.dataset.focus = "list", element.listobject = LV, LV.filmakaan = element.dataset.filmakaan, 
        LV.element = templates.get("list", element)(), LV.listitem(), LV.adapter = $.array(), 
        LV.keys = templates.keys(LV.element), LV.selected = 0, LV.muntahaa(), LV.mowdoo3(), 
        LV.uponclick = function(i, e, uid) {
            LV.beforepress && LV.beforepress(i, e, uid), LV.intaxabsaamitan(uid);
            var yes = LV.selected == uid && 1 == LV.element.dataset.rakkaz;
            LV.selected = uid, LV.rakkaz(1, 1), yes && LV.press(K.en);
        }, LV;
    };
}();

var backstack;

!function() {
    var s, storage = {
        3: {},
        2: {},
        1: {},
        0: {}
    }, l = function() {
        var darajah = 0;
        return darajah = s.dialog ? 3 : s.sheet ? 2 : s.view ? 1 : 0, backstack.darajah = darajah, 
        darajah;
    }, savefocus = function() {
        backstack.set("backstackfocus", document.activeElement);
    }, restorefocus = function() {
        var active = backstack.get("backstackfocus");
        active && active.focus && active.focus();
    };
    backstack = {
        darajah: 0,
        states: {
            dialog: 0,
            sheet: 0,
            view: 0,
            main: 0
        },
        set: function(key, value) {
            storage[backstack.darajah][key] = value;
        },
        get: function(key) {
            return key ? storage[backstack.darajah][key] : storage[backstack.darajah];
        },
        dialog: function(args) {
            savefocus(), s.dialog = args || 1, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstackdialog", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        sheet: function(args) {
            savefocus(), s.sheet = args || 1, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstacksheet", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        view: function(args) {
            savefocus(), s.view = args, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstackview", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        main: function(args) {
            savefocus(), s.main = args || 1, l(), storage[backstack.darajah] = {}, Hooks.rununtilconsumed("backstackmain", args), 
            Hooks.run("backstack", backstack.darajah);
        },
        back: function() {
            s.dialog ? (s.dialog = 0, l(), Hooks.run("closeall", 3)) : s.sheet ? (s.sheet = 0, 
            l(), Hooks.run("closeall", 2)) : s.view ? (s.view = 0, s.main = 1, l(), Hooks.run("closeall", 1)) : (s.main = 0, 
            l(), Hooks.run("closeall", 0)), Hooks.run("restore", backstack.darajah), Hooks.run("backstack", backstack.darajah), 
            restorefocus();
        }
    }, Hooks.set("back", function() {
        backstack.back();
    }), Hooks.set("dialog", function(args) {
        backstack.dialog(args);
    }), Hooks.set("sheet", function(args) {
        backstack.sheet(args);
    }), Hooks.set("view", function(args) {
        backstack.view(args);
    }), Hooks.set("main", function(args) {
        backstack.main(args);
    }), s = backstack.states;
}();

var preferences;

!function() {
    "use strict";
    preferences = {
        popall: function() {
            return localStorage.clear();
        },
        set: function(name, value) {
            return localStorage.setItem(name, value);
        },
        get: function(name, json) {
            if (json) {
                try {
                    return JSON.parse(localStorage.getItem(name));
                } catch (ignore) {}
                return {};
            }
            return localStorage.getItem(name);
        },
        pop: function(name) {
            return localStorage.removeItem(name);
        },
        change: function(name, callback) {
            if ("function" == typeof callback) {
                var data;
                try {
                    data = preferences.get(name), data = JSON.parse(data);
                } catch (ignore) {}
                data instanceof Object || (data = {}), data = callback(data), preferences.set(name, JSON.stringify(data));
            }
        }
    };
    var buildnum = preferences.get("#", 1);
    buildnum != 162 && (preferences.pop(3), preferences.pop("@"), preferences.pop(4), 
    preferences.pop(6)), preferences.set("#", 162), Hooks.set("ready", function() {
        buildnum != 162 && $.taxeer("seeghahjadeedah", function() {
            Hooks.run("seeghahjadeedah", buildnum);
        }, 2e3);
    }), $.log.s(162);
}();

var activity;

!function() {
    activity = {
        jaame3: function(name, type, key, value) {
            if ("MozActivity" in window) {
                var data = {
                    type: type
                };
                data[key] = value, new MozActivity({
                    name: name,
                    data: data
                });
            }
        },
        ittasal: function(num) {
            num && activity.jaame3("dial", "webtelephony/number", "number", num);
        },
        arsal: function(num) {
            num && activity.jaame3("new", "websms/sms", "number", num);
        },
        abrad: function(address) {
            address && activity.jaame3("new", "mail", "url", "mailto:" + address);
        }
    };
}();

var view;

!function() {
    var index = {};
    view = {
        zaahir: function(name) {
            return view.axav() === name;
        },
        mfateeh: function(name) {
            var element = index[name];
            return !!element && templates.keys(element);
        },
        ishtaghal: function(name) {
            var level = backstack.level, element = view.axad(name), keys = templates.keys(element);
            Hooks.run("viewready", {
                name: name,
                element: element,
                keys: keys,
                level: level
            });
        },
        axav: function(name, onlyelement) {
            if (name) {
                var view;
                for (var i in index) i == name ? view = index[i] : onlyelement || (index[i].hidden = 1);
                if (view) return onlyelement || (view.hidden = 0), view;
            } else for (var i in index) if (!index[i].hidden) return i;
        },
        axad: function(name, onlyelement) {
            view.axav(name, onlyelement);
        },
        fahras: function() {
            var elements = document.body.querySelectorAll("[data-view]");
            for (var i in elements) elements.hasOwnProperty(i) && elements[i].dataset.view && ("main" !== elements[i].dataset.view && (elements[i].hidden = 1), 
            index[elements[i].dataset.view] = elements[i]);
            return index;
        }
    };
}();

var time;

!function() {
    var timeout, started, val = {}, monthnames = "january february march april may june july august september october november december".split(" "), weekdays = "sunday monday tuesday wednesday thursday friday saturday".split(" ");
    time = function(parent) {
        var items = (parent || document).querySelectorAll("[data-time]"), is24 = preferences.get(24, 1);
        for (var i in items) if (items.hasOwnProperty(i)) {
            var e = items[i];
            if (e) {
                var dataset = e.dataset, datetime = dataset.time, by = dataset.by;
                datetime = parseInt(datetime), e.dataset.deadline ? time.now() < datetime ? (delete e.dataset.past, 
                e.dataset.future = 1) : (delete e.dataset.future, e.dataset.past = 1) : (delete e.dataset.future, 
                delete e.dataset.past), by ? time.relativetime(0, items[i]) : "" !== datetime && ("false" !== datetime && e.setAttribute("title", time.formatdate(new Date(datetime), "Do MMM YYYY, " + (is24 ? "HH:mm" : "hh:mma"))), 
                e.innerHTML = time.relativetime(datetime, 0, e.dataset));
            }
        }
    }, time.monthname = function(value) {
        return monthnames[value];
    }, time.miqdaar = function(delta, secondary) {
        var fuzzy = "", day = 86400;
        if (delta < 60) fuzzy = delta + " " + xlate("secondsago"); else if (delta < 120) fuzzy = parsefloat(delta / 60, 1) + xlate("minute"); else if (delta < 3600) fuzzy = parsefloat(delta / 60, 1) + xlate("minutesago"); else if (1 == Math.floor(delta / 3600)) {
            fuzzy = 1 + xlate("hourago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (fuzzy += " " + parsefloat(mins, 1) + xlate("minutesago"));
        } else if (delta < day) {
            fuzzy = Math.floor(delta / 3600) + " " + xlate("hoursago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (fuzzy += " " + mins + xlate("minutesago"));
        } else if (delta >= day && delta < 2592e3) {
            var days = Math.floor(delta / day);
            fuzzy = 1 === days ? 1 + xlate("dayago") : days + xlate("daysago");
            var hours = Math.floor(delta % day / 3600);
            hours && (fuzzy += " " + (1 === hours ? hours + xlate("hourago") : hours + xlate("hoursago")));
        } else if (delta > 2592e3 && delta < 31104e3) {
            var months = Math.floor(delta / 2592e3);
            fuzzy = 1 === months ? months + xlate("monthago") : months + xlate("monthsago");
            var days = Math.floor(delta % 2592e3 / day);
            days && (fuzzy += " " + (1 === days ? days + xlate("dayago") : days + xlate("daysago")));
        } else if (delta > 31104e3) {
            var years = Math.floor(delta / 31104e3);
            fuzzy = 1 === years ? years + xlate("yearago") : years + xlate("yearsago");
            var months = Math.floor(delta % 31104e3 / 2592e3);
            months && (fuzzy += " " + (1 === months ? months + xlate("monthago") : months + xlate("monthsago")));
        }
        return fuzzy;
    }, time.days = function(days) {
        return days = new Date().getTime() - new Date(days).getTime(), days /= time.day;
    }, time.fuzzytime = function(date, muxtasar) {
        date = date || +new Date();
        var future, delta = Math.round((+new Date() - date) / 1e3);
        delta < 0 && (future = 1, delta *= -1);
        var fuzzy, day = 86400;
        if (!future && delta < 15) fuzzy = muxtasar ? delta + translate("sseconds") : translate("justnow"); else if (delta < 60) fuzzy = muxtasar ? delta + translate("sseconds") : delta + " " + translate("secondsago"); else if (delta < 120) fuzzy = muxtasar ? 1 + translate("sminutes") : translate("aminuteago"); else if (delta < 3600) fuzzy = muxtasar ? Math.floor(delta / 60) + translate("sminutes") : Math.floor(delta / 60) + " " + translate("minutesago"); else if (1 == Math.floor(delta / 3600)) {
            fuzzy = 1 + translate("hourago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (muxtasar ? fuzzy = " " + mins + translate("sminutes") : fuzzy += " " + mins + translate("minutesago"));
        } else if (delta < day) {
            fuzzy = Math.floor(delta / 3600) + translate("hoursago");
            var mins = Math.floor(delta % 3600 / 60);
            mins && (fuzzy += " " + mins + translate("minutesago"));
        } else if (delta >= day && delta < 2592e3) {
            var days = Math.floor(delta / day);
            fuzzy = 1 === days ? 1 + translate("dayago") : days + translate("daysago");
            var hours = Math.floor(delta % day / 3600);
            hours && (fuzzy += " " + (1 === hours ? hours + translate("hourago") : hours + translate("hoursago")));
        } else if (delta > 2592e3 && delta < 31104e3) {
            var months = Math.floor(delta / 2592e3);
            fuzzy = 1 === months ? months + translate("monthago") : months + translate("monthsago");
            var days = Math.floor(delta % 2592e3 / day);
            days && (fuzzy += " " + (1 === days ? days + translate("dayago") : days + translate("daysago")));
        } else if (delta > 31104e3) {
            var years = Math.floor(delta / 31104e3);
            fuzzy = 1 === years ? years + translate("yearago") : years + translate("yearsago");
            var months = Math.floor(delta % 31104e3 / 2592e3);
            months && (fuzzy += " " + (1 === months ? months + translate("monthago") : months + translate("monthsago")));
        }
        return future && (fuzzy = translate("infuture") + " " + fuzzy), translate.a3daad(fuzzy);
    }, time.relativetime = function(datetime, e, dataset) {
        if ("false" === datetime) return translate("alongtime");
        var today = time.striptime().getTime(), yesterday = time.traversebydays(today, -1), tomorrow = time.traversebydays(today, 1), text = "", is24 = preferences.get(24, 1);
        if (e) {
            dataset = e.dataset;
            var datetime = parseInt(dataset.time), minus = dataset.minus, by = dataset.by;
            if (delete dataset.i18n, void 0 !== minus && (datetime = time.now() - datetime), 
            "age" === by) innerhtml(e, time.fuzzytime(datetime)); else if ("days" === by) {
                var days = time.days(datetime);
                days = days < .1 ? days.toFixed(2) : days < 1 ? days.toFixed(1) : Math.floor(days), 
                innerhtml(e, days + " " + translate("daysago"));
            } else "hourly" === by ? innerhtml(e, time.formatdate(new Date(datetime), is24 ? "HH:mm" : "hh:mma")) : "yearly" === by ? innerhtml(e, time.formatdate(new Date(datetime), "YYYY")) : "monthly" === by ? innerhtml(e, time.formatdate(new Date(datetime), "MMMM YYYY")) : "daily" === by ? innerhtml(e, time.formatdate(new Date(datetime), "Do MMMM YYYY")) : "minute" === by ? innerhtml(e, time.formatdate(new Date(datetime), is24 ? "HH:mm" : "hh:mma")) : datetime === today ? dataset.i18n = "today" : datetime === yesterday ? dataset.i18n = "yesterday" : datetime === tomorrow ? dataset.i18n = "tomorrow" : innerhtml(e, time.formatdate(new Date(datetime), "Do MMM YYYY"));
        } else {
            var at = translate("@"), c = translate(","), months = (time.now() - datetime) / time.month, days = (time.now() - datetime) / time.day;
            days <= 1 ? dataset && "3" == dataset.muxtasar ? text += time.fuzzytime(datetime, 1) : dataset && "2" == dataset.muxtasar ? text += time.fuzzytime(datetime) : (dataset && !dataset.muxtasar && (text += time.fuzzytime(datetime) + " " + at + " "), 
            text += time.formatdate(new Date(datetime), is24 ? "HH:mm" : "hh:mma")) : text = days > 1 && days <= 4 ? time.formatdate(new Date(datetime), "dddd" + c + " " + (is24 ? "HH:mm" : "hh:mma")) : months < 2 ? time.formatdate(new Date(datetime), "Do MMM" + c + " " + (is24 ? "HH:mm" : "hh:mma")) : time.formatdate(new Date(datetime), "Do MMM YYYY" + c + " " + (is24 ? "HH:mm" : "hh:mma")), 
            e && innerhtml(e, text);
        }
        return text;
    }, time._calcs = {}, time._replacements = [], time._uid = 0, time.now = function() {
        return new Date().getTime();
    }, time.zero = function(s) {
        return s < 10 ? "0" + s : s;
    }, time.year = 315576e5, time.month = 26298e5, time.day = 8766e4, time.hour = 3652500, 
    time.minute = 60875, time.second = 1e3, time.milli = 1, time.striptime = function(_time) {
        var parsed = new Date(_time || new Date().getTime());
        return parsed = parsed.getDate() + " " + monthnames[parsed.getMonth()] + " " + parsed.getFullYear() + " GMT", 
        parsed = new Date(parsed), "Invalid Date" === parsed.toString() && (parsed = !1), 
        parsed;
    }, time.traversebydays = function(intdate, num) {
        return intdate = new Date(intdate), intdate.setDate(intdate.getDate() + num), intdate.getTime();
    }, time.realdatereplace = function(s) {
        return "YYYY" === s ? val._year: "YY" === s ? val._shortyear < 10 ? "0" + val._shortyear: val._shortyear: "Y" === s ? val._shortyear: "HH" === s ? val._hours < 10 ? "0" + val._hours: val._hours: "H" === s ? val._hours: "hh" === s ? val._hours12 < 10 ? "0" + val._hours12: val._hours12: "h" === s ? val._hours12: "mm" === s ? val._minutes < 10 ? "0" + val._minutes: val._minutes: "m" === s ? val._minutes: "ss" === s ? val._seconds < 10 ? "0" + val._seconds: val._seconds: "s" === s ? val._seconds: "a" === s ? val._ampm: "MMMM" === s ? val._monthname: "MMM" === s ? (val._monthname || "").substr(0, 3) : "MM" === s ? val._month < 10 ? "0" + val._month: val._month: "M" === s ? val._month: "dddd" === s ? val._dayname: "ddd" === s ? (val._dayname || "").substr(0, 3) : "DD" === s ? val._day < 10 ? "0" + val._day: val._day: "Do" === s ? val._day + val._o : "D" === s ? val._day: void 0;
    }, time.replacewithuid = function() {
        return time._replacements[time._uid] = time.realdatereplace(arguments[0]), "%{" + ++time._uid + "}";
    }, time.formatdate = function(date, format) {
        format = format || "MM/DD/YYYY h:mma", time._uid = 0, time._replacements = [], val._year = date.getFullYear() + "", 
        val._shortyear = parseInt(val._year.substr(-2)), val._month = date.getMonth() + 1, 
        val._monthname = monthnames[val._month - 1], val._day = date.getDate(), val._dayname = weekdays[date.getDay()], 
        val._hours = date.getHours(), val._hours12 = val._hours % 12, val._hours12 = val._hours12 < 1 ? 12 : val._hours12, 
        val._minutes = date.getMinutes(), val._seconds = date.getSeconds(), val._ampm = translate(val._hours >= 12 ? "pm" : "am"), 
        val._monthname = translate(val._monthname), val._dayname = translate(val._dayname), 
        val._o = translate("th"), 1 !== val._day && 21 !== val._day && 31 !== val._day || (val._o = translate("st")), 
        2 !== val._day && 22 !== val._day || (val._o = translate("nd")), 3 !== val._day && 23 !== val._day || (val._o = translate("rd"));
        var datetimestring = format;
        datetimestring = datetimestring.replace(/YYYY/g, time.replacewithuid).replace(/YY/g, time.replacewithuid).replace(/Y/g, time.replacewithuid).replace(/HH/g, time.replacewithuid).replace(/H/g, time.replacewithuid).replace(/hh/g, time.replacewithuid).replace(/h/g, time.replacewithuid).replace(/mm/g, time.replacewithuid).replace(/m/g, time.replacewithuid).replace(/ss/g, time.replacewithuid).replace(/s/g, time.replacewithuid).replace(/a/g, time.replacewithuid).replace(/MMMM/g, time.replacewithuid).replace(/MMM/g, time.replacewithuid).replace(/MM/g, time.replacewithuid).replace(/M/g, time.replacewithuid).replace(/dddd/g, time.replacewithuid).replace(/ddd/g, time.replacewithuid).replace(/DD/g, time.replacewithuid).replace(/Do/g, time.replacewithuid).replace(/D/g, time.replacewithuid);
        return datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function() {
            return time._replacements[arguments[1] - 1];
        });
    }, time.start = function(parent) {
        started = 1, clearTimeout(timeout), timeout = setTimeout(function() {
            time(parent), started && time.start();
        }, 1e4);
    }, time.stop = function() {
        clearTimeout(timeout), started = 0;
    }, Hooks.set("visible", function() {
        time.start();
    }), Hooks.set("hidden", function() {
        time.stop();
    }), Hooks.set("widgets", function(parent) {
        parent && time(parent);
    }), Hooks.set("ready", function() {});
}();

var settings, currentad;

!function() {
    var settingslist, keys, settingsitems = [ [ "reportbug", 0, function() {
        activity.abrad(myemail + "?subject=" + appname + " bug " + 162);
    } ], [ "requestfeat", 0, function() {
        activity.abrad(myemail + "?subject=" + appname + " request " + 162);
    } ], [ "timeformat", function() {
        return [ preferences.get(24, 1) ? "hours24" : "hours12" ];
    }, function() {
        preferences.get(24, 1) ? preferences.set(24, 0) : preferences.set(24, 1);
    } ], [ "calendar", function() {
        return [ preferences.get(26, 1) ? "gregorian" : "hijri" ];
    }, function() {
        preferences.get(26, 1) ? preferences.set(26, 0) : preferences.set(26, 1);
    } ], [ "transparency", function() {
        var isit = preferences.get(23, 1);
        return webapp.transparency(), [ isit ? "on" : "off" ];
    }, function() {
        preferences.get(23, 1) ? preferences.set(23, 0) : preferences.set(23, 1);
    } ], [ "largetext", function() {
        var largetext = preferences.get(9, 1);
        return webapp.textsize(), [ largetext ? "on" : "off" ];
    }, function() {
        preferences.set(9, preferences.get(9, 1) ? 0 : 1);
    } ] ], myemail = "hxorasani@gmail.com";
    settings = {
        adaaf: function(name, getvalue, onpress) {
            return settingsitems.push([ name, getvalue, onpress ]), settings.jaddad(settingsitems.length - 1), 
            settingsitems.length - 1;
        },
        axad: function(uid) {
            return settingsitems[uid];
        },
        jaddad: function(uid) {
            var item = settings.axad(uid);
            if (item) {
                var body = "function" == typeof item[1] ? item[1]() : void 0, obj = {
                    uid: uid
                };
                obj.index = uid, obj.titlei18n = item[0], body instanceof Array ? obj.bodyi18n = body[0] : obj.body = body, 
                settingslist && (settingslist.set(obj), "settings" === backstack.states.view && settingslist.select());
            }
        }
    }, Hooks.set("ready", function() {
        keys = view.mfateeh("settings"), settingslist = list(keys.list).idprefix("settings"), 
        settingslist.beforeset = function(item, id) {
            return item;
        }, settingsitems.forEach(function(item, i) {
            settings.jaddad(i);
        }), settingslist.onpress = function(item, key, uid) {
            item && (settings.axad(item.index)[2](), settings.jaddad(item.index));
        }, 0 && "getKaiAd" in window && getKaiAd({
            publisher: "7e2cfabf-ef5c-46eb-8e57-c20f3d6a1171",
            test: 0 ? 0 : 1,
            timeout: 6e4,
            h: 48,
            w: 240,
            container: keys.ad,
            onerror: function(e) {
                $.log.e(e);
            },
            onready: function(ad) {
                currentad = ad, ad.call("display", {});
            }
        });
    }), Hooks.set("viewready", function(args) {
        switch (args.name) {
          case "main":
            softkeys.set("9", function() {
                Hooks.run("view", "settings");
            }, "9", "iconsettings");
            break;

          case "settings":
            webapp.header([ "settings" ]), softkeys.list.basic(settingslist), softkeys.set(K.en, function() {
                settingslist.press(K.en);
            }), softkeys.set(K.bs, function() {
                backstack.back();
            }), 0 && "getKaiAd" in window && softkeys.set("0", function() {
                currentad && currentad.call && currentad.call("click");
            }, translate("openad"), !1), settingslist.select();
        }
    });
}();

var translate, taraajim = taraajim || {}, xlate;

!function() {
    "use strict";
    var languages = Object.keys(taraajim), uglynames = {
        en: "en",
        ar: "ar",
        ur: "ur"
    }, donumbers = function(translation) {
        var language = translate.get();
        return [ "ur", "ar" ].includes(language) ? translation.replace(/0/g, "٠").replace(/1/g, "١").replace(/2/g, "٢").replace(/3/g, "٣").replace(/4/g, "٤").replace(/5/g, "٥").replace(/6/g, "٦").replace(/7/g, "٧").replace(/8/g, "٨").replace(/9/g, "٩").replace(/%/g, "٪") : translation;
    }, dodirection = function(parent, selector) {
        void 0 === selector && (selector = "[data-dir]");
        var items = (parent || document).querySelectorAll(selector);
        for (var i in items) if (items.hasOwnProperty(i)) {
            var e = items[i];
            if (e) {
                var dir;
                e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? (dir = translate.direction(e.value), 
                e.dir = 1 === dir ? "rtl" : "ltr", listener(e, [ "focus", "input" ], function() {
                    dir = translate.direction(this.value), this.dir = 1 === dir ? "rtl" : "ltr";
                })) : (dir = "rtl" === e.dataset.dir ? "rtl" : "ltr" === e.dataset.dir ? "ltr" : translate.direction(e.innerText), 
                "parent" == e.dataset.dir ? e.parentElement.dir = 1 === dir ? "rtl" : "ltr" : e.dir = 1 === dir ? "rtl" : "ltr");
            }
        }
    };
    translate = function(alias) {
        var str = "", language = translate.get();
        language && taraajim[language] && taraajim[language][alias] && (str = taraajim[language][alias]), 
        "" === str && taraajim.en && taraajim.en[alias] && (str = taraajim.en[alias]);
        var args = arguments;
        if (args.length > 1) for (var i = 0; i < args.length; ++i) str = str.replace(new RegExp("%" + (i + 1), "g"), args[i + 1]);
        return "" === str && (str = alias || ""), "" + (str = donumbers(str));
    }, translate.get = function() {
        return preferences.get(translate.saveto) || "en";
    }, translate.set = function(language) {
        preferences.set(translate.saveto, language);
    }, translate.saveto = 25, translate.change = function(language) {
        language = language || "en", [ "ur", "ar" ].includes(language) ? document.body.dir = "rtl" : document.body.dir = "ltr", 
        Hooks && Hooks.run("translateupdate"), translate.set(language), translate.update();
    }, translate.a3daad = function(str) {
        return donumbers(str);
    }, translate.update = function(parent) {
        var items = (parent || document).querySelectorAll("[data-i18n]");
        for (var i in items) if (items.hasOwnProperty(i)) {
            var e = items[i];
            if (e) {
                var dataset = e.dataset, i18n = dataset.i18n;
                if ("" !== i18n) {
                    var translation = translate(i18n);
                    translation = donumbers(translation), e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement ? e.placeholder = translation : e.innerText = translation;
                }
            }
        }
        dodirection(parent), dodirection(parent, "input"), dodirection(parent, "textarea");
    }, translate.direction = function(text) {
        text = text || "";
        var ltr = text.match(/[a-zA-Z]+/);
        return text.match(/[ا-ي]+/) ? 1 : ltr ? 0 : 2;
    }, Hooks.set("ready", function() {
        translate.change(translate.get()), settings.adaaf("language", function() {
            var language = translate.get();
            if (language) return translate(uglynames[language] || "");
        }, function() {
            var language = translate.get(), index = languages.indexOf(language);
            index < languages.length - 1 ? ++index: index = 0, translate.change(languages[index]);
        });
    }), xlate = translate;
}();

var templates;

!function() {
    var index = {};
    templates = {
        mfateeh: function(element) {
            return templates.keys(element);
        },
        keys: function(element) {
            if (element instanceof HTMLElement) {
                var keys = {}, otherviews = element.querySelectorAll("[data-id]");
                for (var i in otherviews) otherviews.hasOwnProperty(i) && otherviews[i].dataset && (keys[otherviews[i].dataset.id] = otherviews[i]);
                return keys;
            }
        },
        set: function(clone, o, template) {
            var keys = templates.keys(clone);
            if (o = o || {}, o.hidden && (clone.hidden = 1), o.id && (clone.id = o.id), o.classes && (clone.className = o.classes), 
            1 == o.status ? (clone.dataset.selected = 1, clone.disabled = 0) : 2 == o.status ? (clone.disabled = 1, 
            delete clone.dataset.selected) : (clone.disabled = 0, delete clone.dataset.selected), 
            o.data) for (var i in o.data) void 0 !== o.data[i] ? clone.dataset[i] = o.data[i] : delete clone.dataset[i];
            o.onclick && (clone.onclick = o.onclick);
            for (var i in keys) if (!isundef(o[i]) || !isundef(o[i + "$h"])) if ("ixtaf" == o[i]) keys[i].hidden = 1; else if ("izhar" == o[i]) keys[i].hidden = 0; else if (keys[i] instanceof HTMLInputElement) keys[i].value = o[i]; else if (keys[i] instanceof HTMLImageElement) "string" == typeof o[i] && o[i].length ? (o[i].startsWith("app://") ? keys[i].src = o[i] : keys[i].src = "file://" + o[i], 
            keys[i].hidden = 0) : keys[i].hidden = 1; else if ([ "titlehours", "titledays", "titletime", "time", "timeshow", "days", "waqt" ].includes(i)) void 0 !== o[i] && (keys[i].dataset.time = o[i]), 
            o.deadline ? keys[i].dataset.deadline = 1 : delete keys[i].dataset.deadline; else if ([ "titlei18n", "bodyi18n" ].includes(i)) o[i] ? (keys[i].hidden = 0, 
            keys[i].dataset.i18n = o[i]) : (keys[i].hidden = 1, delete keys[i].dataset.i18n, 
            keys[i].innerHTML = ""); else if ([ "titlehtml", "bodyhtml", "bodyshowhtml" ].includes(i)) o[i] ? (keys[i].hidden = 0, 
            keys[i].innerHTML = o[i]) : (keys[i].hidden = 1, keys[i].innerHTML = ""); else if ("icon" == i) if ("string" == typeof o[i] && o[i].length) {
                keys[i].hidden = 0;
                var e = eqonaat.querySelector("#" + o[i]);
                e && (keys[i].innerHTML = '<svg viewBox="0 0 48 48">' + e.cloneNode(1).innerHTML + "</svg>");
            } else keys[i].hidden = 1, keys[i].innerHTML = ""; else {
                keys[i].hidden && (keys[i].hidden = 0);
                var html = o[i + "$h"];
                isundef(html) ? innertext(keys[i], o[i]) : innerhtml(keys[i], html);
            }
            return Hooks.rununtilconsumed("templateset", [ clone, o, keys, template ]), translate && translate.update(clone.parentElement), 
            time && time(clone.parentElement), datepicker && datepicker.fahras(clone.parentElement), 
            clone;
        },
        get: function(element, parent, before, id) {
            if ("string" == typeof element && (element = index[element]), !(element instanceof HTMLElement)) return !1;
            var clone, template;
            return id && (clone = document.getElementById(id)) && (before = clone.nextElementSibling), 
            clone || (clone = element.cloneNode(!0), template = clone.dataset.template, delete clone.dataset.template, 
            clone.hidden = 0), parent ? (before instanceof HTMLElement ? parent.insertBefore(clone, before) : before ? parent.insertBefore(clone, parent.firstElementChild) : parent.appendChild(clone), 
            Hooks.rununtilconsumed("widgets", parent), function(o) {
                return templates.set(clone, o, template);
            }) : clone;
        },
        index: function(parent) {
            var elements = (parent || document.body).querySelectorAll("[data-template]");
            for (var i in elements) elements.hasOwnProperty(i) && elements[i].dataset.template && (elements[i].hidden = 1, 
            index[elements[i].dataset.template] = elements[i]);
            return index;
        }
    }, templates.index();
}();

var softkeys, K, P;

!function() {
    K = {
        mt: "microphonetoggle",
        sr: "softright",
        sl: "softleft",
        en: "enter",
        pu: "pageup",
        pd: "pagedown",
        up: "arrowup",
        dn: "arrowdown",
        rt: "arrowright",
        lf: "arrowleft",
        cl: "call",
        bs: "backspace"
    }, P = {
        empty: {},
        sheet: {},
        dialog: {},
        list: {}
    };
    var lastkeytime, hfizM = {}, M = {}, index = {}, selectionorigin = 0, removableparent = function(element) {
        var parent = element.parentElement;
        if (parent.dataset.focus) return parent.dataset.removable ? parent : removableparent(parent);
    }, updatekey = function(k) {
        var parent, o = {}, classes = "", args = M[k];
        args && (1 === args.length && (o.hidden = 1), args[0] && (o.onclick = function(e) {
            args[0](e.key, e);
        }), o.label = args[1] || "", o.icon = args[2], o.status = args[3], o.icon === !1 && (o.name = k), 
        k == K.sl && (classes = "left"), k == K.en && (classes = "center"), k == K.sr && (classes = "right"), 
        "*" == k && (classes = "star"), "#" == k && (classes = "hash"), parent = [ K.sr, K.sl, K.en ].includes(k) ? skmain : skhints, 
        o.id = "sk" + k, o.classes = classes, index[k] = templates.get("skbutton", parent, 0, o.id)(o), 
        skdots.hidden = totalvisible() ? 0 : 1, resize());
    }, adaaf = function(name, callback, label, icon, status) {
        var action = [];
        M[name] = M[name] || action, action[0] = void 0 === callback ? M[name][0] : callback, 
        action[1] = void 0 === label ? M[name][1] : label, action[2] = void 0 === icon ? M[name][2] : icon, 
        action[3] = void 0 === status ? M[name][3] : status, M[name] = action;
    }, talaf = function(name) {
        M[name] = void 0;
    };
    totalvisible = function() {
        var total = 0;
        for (var i in skhints.childNodes) skhints.childNodes.hasOwnProperty(i) && (skhints.childNodes[i].hidden || total++);
        return total;
    }, P.empty = function() {
        M[K.sr] = [ function() {
            return Hooks.run("back"), 1;
        }, 0, "iconclose" ], M[K.bs] = [ function() {
            Hooks.run("minimize");
        } ], M["#"] = [ function() {
            return softkeys.showhints(), 1;
        } ], softkeys.update();
    }, softkeys = {
        P: P,
        K: K,
        saveto: 7,
        clear: function() {
            return M = {}, softkeys.update(), backstack.set("softkeys", M), softkeys;
        },
        havaf: function(name) {
            return softkeys.talaf(name);
        },
        baidaa: function(name, yes) {
            M[name] && (M[name][3] = yes ? 1 : void 0, softkeys.update());
        },
        talaf: function(name) {
            return name && (name instanceof Array ? name.forEach(function(n) {
                talaf(n);
            }) : talaf(name), softkeys.update(), backstack.set("softkeys", M)), softkeys;
        },
        update: function() {
            if (skhints.innerHTML = "", skmain.innerHTML = "", M) for (var k in M) updatekey(k);
        },
        showhints: function() {
            delete softkeysui.dataset.hidden, skhelp.hidden || (skhelp.hidden = 1, preferences.set(7, 1)), 
            $.taxeer("softkeyshints", function() {
                softkeysui.dataset.hidden = 1;
            }, 2500);
        },
        hfiz: function(name) {
            return name && (name instanceof Array ? name.forEach(function(n) {
                softkeys.hfiz(n);
            }) : hfizM[name] = M[name]), softkeys;
        },
        fasax: function() {
            for (var i in hfizM) M[i] = hfizM[i];
            return softkeys.update(), softkeys;
        },
        nsee: function() {
            return hfizM = {}, softkeys;
        },
        set: function(name, callback, label, icon, status) {
            return name && (name instanceof Array ? name.forEach(function(n) {
                adaaf(n, callback, label, icon, status);
            }) : adaaf(name, callback, label, icon, status), softkeys.update(name), backstack.set("softkeys", M)), 
            softkeys;
        },
        map: function(preset, callbacks) {
            if ((M = Object.assign({}, M, preset)) && callbacks) for (var i in callbacks) M[i] = M[i] || [], 
            M[i][0] = callbacks[i];
            softkeys.update(), backstack.set("softkeys", M);
        },
        actualpress: function(k, e, longpress) {
            var pd = function() {
                e && e.preventDefault();
            };
            k = k.toLowerCase(), "sl" == k && (k = K.sl, pd()), "up" == k && (k = K.up, pd()), 
            "sr" == k && (k = K.sr, pd()), "lf" == k && (k = K.lf, pd()), "en" == k && (k = K.en, 
            pd()), "rt" == k && (k = K.rt, pd()), "cl" == k && (k = K.cl, pd()), "dn" == k && (k = K.dn, 
            pd()), "bs" == k && (k = K.bs, pd()), M && M[k] && "function" == typeof M[k][0] && M[k][0](k, e, e && e.type, longpress) && pd();
        },
        press: function(k, e, longpress) {
            var caught, pd = function() {
                preventdefault(e);
            };
            kraw = k, k = k.toLowerCase(), e && e.type && "mousewheel" == e.type && (e.y <= -1 && (k = K.up), 
            e.y >= 1 && (k = K.dn)), "f1" == k && (k = K.sl, pd()), "f2" == k && (k = K.sr, 
            pd()), ("f5" == k || e && e.ctrlKey && "r" == k) && history.go(), "escape" != k || document.fullscreenElement || (k = K.sr, 
            pd()), k == K.mt && pd();
            var dir, editmode = 0, a = document.activeElement;
            if ((a instanceof HTMLTextAreaElement && "range" != a.type || "true" == a.contentEditable) && (e && e.altKey || [ K.sl, K.sr ].includes(k) || (caught = 1)), 
            (a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) && "range" != a.type && (editmode = 1, 
            dir = translate.direction(a.value), a.dir = 1 === dir ? "rtl" : "ltr"), a instanceof HTMLButtonElement && a.dataset.remover && k == K.en) {
                var parent = removableparent(a);
                focusprev(parent) || (caught = focusnext(parent)), parent && parent.remove(), pd();
            }
            if (editmode) {
                var atend = a.value.length === a.selectionStart;
                0 === a.selectionStart && k == K.up && (caught = focusprev(a), pd()), atend && k == K.dn ? (caught = focusnext(a), 
                pd()) : k == K.en && e.shiftKey && a.uponshiftenter ? (a.uponshiftenter(), pd()) : k == K.en && !e.shiftKey && a.uponenter && (a.uponenter(), 
                pd());
            } else a && (navigables.includes(a.tagName.toLowerCase()) || a.parentElement.dataset.focus) && (k == K.up && (caught = focusprev(a), 
            pd()), k == K.dn && (caught = focusnext(a), pd()), k == K.en && a.onclick && (a.onclick(), 
            pd()));
            if (editmode && !a.value.length && k == K.bs && (a.dataset.removable ? (caught = focusprev(a), 
            a.remove(), pd()) : pd()), editmode && a.value.length && [ K.up, K.dn, K.lf, K.rt, K.en ].includes(k)) return void (void 0 !== selectionorigin && (a.selectionStart < selectionorigin ? selectiondirection = 0 : a.selectionStart > selectionorigin && (selectiondirection = 1), 
            k == K.lf && a.selectionEnd == selectionorigin ? (a.selectionEnd = selectionorigin, 
            --a.selectionStart, pd()) : k == K.rt && a.selectionStart - a.selectionEnd ? (a.selectionStart = selectionorigin, 
            ++a.selectionEnd, pd()) : k == K.rt && a.selectionEnd < a.value.length ? (++a.selectionEnd, 
            pd()) : k == K.lf && a.selectionStart > -1 ? (--a.selectionStart, pd()) : k == K.lf && a.selectionStart && (--a.selectionStart, 
            pd())));
            if (selectionorigin = void 0, !(caught = caught || Hooks.rununtilconsumed("softkey", [ k, e || {}, e && e.type, longpress ]))) {
                var mmm = M[kraw] || M[k];
                mmm && "function" == typeof mmm[0] && mmm[0](k, e, e && e.type, longpress) && pd();
            }
        }
    }, softkeys.showhints();
    var autoheight = function(a) {
        a instanceof HTMLTextAreaElement && (setcss(a, "height", 0), a.scrollHeight > a.offsetHeight && setcss(a, "height", a.scrollHeight + 3 + "px"));
    };
    softkeys.autoheight = autoheight;
    var resize = function() {
        var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
        if (w > 720) {
            var ww = (innerwidth() - 640) / 2;
            sl && setcss(sl, "width", ww + "px"), sr && setcss(sr, "width", ww + "px");
        } else sl && setcss(sl, "width"), sr && setcss(sr, "width");
    };
    listener("resize", function() {
        $.taxeer("resizesoftkeys", function() {
            resize();
        }, 100);
    }), resize(), Hooks.set("contextmenu", function(e) {
        var a = document.activeElement;
        if (!a || !(a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) || "range" == a.type) return softkeys.showhints(), 
        1;
    }), Hooks.set("ready", function() {
        skhints.onclick = skdots.onclick = function() {
            softkeys.showhints();
        };
    }), Hooks.set("mousewheel", function(e) {
        e && softkeys.press("", e, e.type);
    }), Hooks.set("keyup", function(e) {
        var a = document.activeElement;
        if ((a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) && "range" != a.type) {
            var yes, len = a.value.trim().length;
            if (len) {
                var min = parseint(getattribute(a, "min") || 0), max = parseint(getattribute(a, "max") || 0);
                min && len < min ? (a.dataset.under = 1, yes = 1) : delete a.dataset.under, max && len > max ? (a.dataset.over = 1, 
                yes = 2) : delete a.dataset.over;
            } else delete a.dataset.under, delete a.dataset.over;
            $.taxeer("softkeysminmax", function() {
                1 === yes ? webapp.taht3nsar("-" + (min - len)) : 2 === yes ? webapp.taht3nsar(len + " / " + max + " +" + (len - max)) : webapp.taht3nsar(len);
            }, 50), $.taxeer("softkeysautoheight", function() {
                autoheight(a);
            }, 100);
        }
        Hooks.rununtilconsumed("softkey", [ e.key.toLowerCase(), e || {}, e && e.type, 0 ]), 
        preventdefault(e);
    }), Hooks.set("keydown", function(e) {
        time.now() - lastkeytime > 60 || void 0 === lastkeytime || !0 ? (e && softkeys.press(e.key, e, e.type, 0), 
        lastkeytime = time.now()) : preventdefault(e);
    }), Hooks.set("templateset", function(args) {
        var c = args[0], o = args[1], k = args[2];
        "skbutton" === args[3] && (k.icon && !o.icon && k.icon.remove(), o.label || o.icon || (c.hidden = 1));
    }), Hooks.set("restore", function(args) {
        var oldM = backstack.get("softkeys");
        oldM && (M = Object.assign({}, oldM), softkeys.update());
    }), preferences.get(softkeys.saveto, 1) && (skhelp.hidden = 1);
}(), function() {
    softkeys.list = {
        basic: function(LV) {
            LV ? (softkeys.set(K.en, function(k, e) {
                LV.element.dataset.rakkaz && (LV.press(K.en), e && e.preventDefault());
            }), softkeys.set(K.up, function(k, e) {
                LV.element.dataset.rakkaz && (LV.up(), e && e.preventDefault());
            }), softkeys.set(K.dn, function(k, e) {
                LV.element.dataset.rakkaz && (LV.down(), e && e.preventDefault());
            }), softkeys.set(K.rt, function(k, e) {
                LV.element.dataset.rakkaz && (LV.right(), e && e.preventDefault());
            }), softkeys.set(K.lf, function(k, e) {
                LV.element.dataset.rakkaz && (LV.left(), e && e.preventDefault());
            })) : softkeys.talaf([ K.en, K.up, K.dn, K.rt, K.lf ]);
        }
    };
}();

var sheet;

!function() {
    var header, container, zaahirname, ae, murakkaz, index = {};
    sheet = {
        okay: 0,
        cancel: 0,
        onshow: 0,
        zaahir: function(name) {
            return zaahirname === name;
        },
        bardaa: function(v) {
            if (container.firstElementChild) {
                var children = Object.values(container.firstElementChild.children);
                v ? (children.forEach(function(item) {
                    if ("list" === getdata(item, "focus")) {
                        var l = item.listobject;
                        l.murakkaz && (murakkaz = l, l.rakkaz());
                    }
                }), setdata(container, "bardaa", 1), softkeys.set(K.sl, function(e) {
                    webapp.itlaa3("pleasewait");
                }, 0, "iconhourglassempty"), ae = webapp.blur()) : (softkeys.set(K.sl, function(e) {
                    sheet.okay();
                }, 0, "icondone"), popdata(container, "bardaa"), ae && ae.focus(), murakkaz && murakkaz.rakkaz(1));
            }
        },
        header: function(text) {
            text ? (text instanceof Array ? header.dataset.i18n = text[0] : header.innerText = text, 
            header.hidden = 0) : (delete headerui.dataset.i18n, header.innerText = "", header.hidden = 1);
        },
        hide: function() {
            sheetui.hidden = 1, sheet.okay = 0, sheet.cancel = 0, zaahirname = 0;
        },
        show: function(args) {
            ae = murakkaz = 0, container.innerHTML = "", sheetui.hidden = 0, "string" == typeof args && (args = {
                name: args
            });
            var keys, name = args.name || args.n, title = args.title || args.t || "", minqabl = args.minqabl || args.b, callback = args.callback || args.c, oncancel = args.oncancel || args.x, ayyihaal = args.ayyihaal || args.a, init = args.init || args.i;
            header.innerText = title, sheet.onshow && sheet.onshow(name);
            var ui = index[name];
            if (ui) {
                zaahirname = name;
                var node = ui.cloneNode(!0);
                node && (delete node.dataset.sheet, node.dataset.visiblesheet = 1, node.hidden = 0, 
                container.appendChild(node), sheetui.focus(), translate && translate.update(sheetui), 
                Hooks.rununtilconsumed("widgets", sheetui), keys = templates.keys(container), init && init(keys), 
                Hooks.rununtilconsumed("widgets", sheetui));
            }
            if (sheet.okay = callback ? function(args) {
                callback && callback(args || keys), ayyihaal && ayyihaal(args || keys), webapp.blur(), 
                Hooks.run("back");
            } : 0, sheet.bardaa(), isfun(minqabl)) {
                var oldokay = sheet.okay;
                sheet.okay = function(args) {
                    sheet.bardaa(1), minqabl(args || keys, function(args) {
                        oldokay(args || keys);
                    });
                };
            }
            sheet.cancel = function(args) {
                oncancel && oncancel(args || keys), ayyihaal && ayyihaal(args || keys), webapp.blur(), 
                Hooks.run("back");
            };
        },
        get: function(name) {
            return name ? index[name] : container.firstElementChild;
        },
        index: function(parent) {
            var elements = (parent || document.body).querySelectorAll("[data-sheet]");
            for (var i in elements) elements.hasOwnProperty(i) && elements[i].dataset.sheet && (elements[i].hidden = 1, 
            index[elements[i].dataset.sheet] = elements[i]);
            return index;
        }
    }, Hooks.set("ready", function() {
        sheet.index();
        var mfateeh = templates.keys(sheetui);
        header = mfateeh.header, container = mfateeh.container;
    });
}();

var themes;

!function() {
    var K, P, settingsuid, current = 0, store = {
        0: {
            status: "rgba(0,0,0,0.6)",
            textl: "#fff",
            text: "#ddd",
            textd: "#aaa",
            textxd: "#777",
            primaryl: "#050505",
            primary: "black",
            primaryd: "black",
            primaryt: "rgba(0,0,0,0.8)",
            secondaryl: "#353535",
            secondary: "#333",
            secondaryd: "#252525",
            secondaryt: "rgba(40,40,40,0.8)",
            tertiaryl: "#454545",
            tertiary: "#444",
            tertiaryd: "#353535",
            tertiaryt: "rgba(53,53,53,0.8)",
            accentl: "#4ccbfc",
            accent: "#04baf5",
            accentt: "rgba(4, 186, 245, 0.7)",
            accentd: "#0284c0",
            accentdt: "rgba(4, 126, 205, 0.7)",
            green: "#0c0",
            yellow: "#ca0",
            redl: "#f99",
            red: "#c00",
            redd: "#900"
        },
        1: {
            status: "rgba(0,0,0,0.6)",
            textl: "#111",
            text: "#333",
            textd: "#666",
            textxd: "#888",
            primaryl: "#e6e6e6",
            primary: "#fff",
            primaryd: "#d6d6d6",
            primaryt: "rgba(255,255,255,0.8)",
            secondaryl: "#e6e6e6",
            secondary: "#d6d6d6",
            secondaryd: "#c6c6c6",
            secondaryt: "rgba(180,180,180,0.8)",
            tertiaryl: "#eee",
            tertiary: "#ddd",
            tertiaryd: "#ccc",
            tertiaryt: "rgba(204,204,204,0.8)",
            accentl: "#0bb8cb",
            accent: "#00609a",
            accentt: "rgba(0, 67, 113, 0.7)",
            accentd: "#004371",
            accentdt: "rgba(0, 37, 93, 0.7)",
            green: "#0c0",
            yellow: "#ca0",
            redl: "#900",
            red: "#c00",
            redd: "#faa"
        }
    };
    themes = {
        saveto: 19,
        set: function(theme, key, value) {
            var arglen = arguments.length;
            return 0 === arglen && themes.set(current), 1 === arglen && (store[theme] && (current = theme, 
            dynamicstyle.innerHTML = updatetheme(store[theme]), preferences.set(themes.saveto, current)), 
            themecolor && themecolor.setAttribute("content", themes.get("status"))), 2 === arglen && (store[theme] = key), 
            3 === arglen && (store[theme] = store[theme] || {}, store[theme][key] = value), 
            themes;
        },
        get: function(theme, key) {
            var arglen = arguments.length;
            return 0 === arglen && void 0 !== current ? current : 1 === arglen && void 0 !== current ? store[current][theme] : 2 === arglen && store[theme][key];
        },
        toggle: function() {
            current = current ? current = 0 : 1, themes.set(current), settings.jaddad(settingsuid);
        }
    }, Hooks.set("ready", function() {
        preferences && (current = preferences.get(themes.saveto, 1) || 0), themes.set(current), 
        settingsuid = settings.adaaf("theme", function() {
            var iswhite = preferences.get(themes.saveto, 1);
            return themes.set(iswhite), [ iswhite ? "white" : "black" ];
        }, function() {
            preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0 : 1);
        });
    }), Hooks.set("viewready", function(args) {
        switch (K = softkeys.K, P = softkeys.P, args.name) {
          case "main":
            softkeys.set(1, function(k, e) {
                themes.toggle(), e && e.preventDefault();
            }, "1", "icontheme");
        }
    });
}();

var dialog;

!function() {
    dialog = {
        okay: 0,
        cancel: 0,
        onshow: 0,
        hide: function() {
            dialogui.hidden = 1, dialog.okay = 0, dialog.cancel = 0;
        },
        show: function(args) {
            args = args || {}, markooz() && markooz().blur(), dialogui.hidden = 0;
            var k = templates.keys(dialogui), max = args.max || args.x, callback = args.callback || args.c, message = args.message || args.m, answer = args.answer || args.a, question = args.question || args.q;
            dialog.onshow && dialog.onshow(name), dialog.okay = function() {
                var answer = k.input.value;
                max && (answer = answer.slice(0, max)), callback && callback(answer), document.activeElement && document.activeElement.blur(), 
                Hooks.run("back");
            }, dialog.cancel = function() {
                document.activeElement && document.activeElement.blur(), Hooks.run("back");
            }, k.input.value = answer || "", attribute(k.input, "max", max || 0), question ? (k.input.hidden = 0, 
            k.input.focus()) : k.input.hidden = 1, innertext(k.message, ""), k.message.dataset.i18n = message || "", 
            translate.update(dialogui);
        }
    };
}(), function() {
    var settingsuid, lastitem, lamsahbar, locked = 0, edgestart = 0, edgeend = 0, softkeystouchdpad = 1;
    Hooks.set("ready", function() {
        preferences && (softkeystouchdpad = preferences.get(16, 1) || 1), softkeys.touchdpad = softkeystouchdpad, 
        settingsuid = settings.adaaf("softkeystouchdpad", function() {
            return softkeystouchdpad = preferences.get(16, 1), softkeys.touchdpad = softkeystouchdpad, 
            [ softkeystouchdpad ? "on" : "off" ];
        }, function() {
            preferences.set(16, preferences.get(16, 1) ? 0 : 1);
        });
    }), Hooks.set("navigationstart", function(args) {
        locked = 0, edgestart = args[0] > innerwidth(-60) ? 1 : args[0] < 60 ? -1 : 0;
    }), Hooks.set("navigation", function(args) {
        locked && 2 !== locked || (args[0] > 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.rt), 
        locked = 2), args[0] < 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.lf), 
        locked = 2)), locked && 1 !== locked || (args[1] > 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.dn), 
        locked = 1), args[1] < 0 && (softkeystouchdpad && !edgestart && softkeys.press(K.up), 
        locked = 1));
    });
    var doclick = function(path) {
        for (var i = 0; i < path.length; ++i) {
            if (path[i].onclick) {
                path[i].onclick(), path[i].blur();
                break;
            }
            if (path[i] instanceof HTMLButtonElement) {
                path[i].click(), path[i].blur();
                break;
            }
        }
    };
    Hooks.set("navigationend", function(args) {
        softkeystouchdpad ? pager && edgestart && (edgeend = 0, edgeend = args[0] > innerwidth(-60) ? 1 : args[0] < 60 ? -1 : 0, 
        edgestart !== edgeend && (1 === edgestart ? pager.yameen() : edgestart === -1 && pager.shimaal())) : (args[3] < 0 && pager && pager.yameen(), 
        args[3] > 0 && pager && pager.shimaal());
    }), Hooks.set("navigationpress", function(args) {
        var isbutton = 0;
        args[2].forEach(function(item) {
            (item instanceof HTMLButtonElement || item instanceof HTMLInputElement || item instanceof HTMLTextAreaElement) && (isbutton = 1, 
            item.focus(), lastitem && (popdata(lastitem, "lamsah"), lastitem = 0), setdata(item, "lamsah", 1), 
            lastitem = item, $.taxeer("sklamsah", function() {
                lastitem && (popdata(lastitem, "lamsah"), lastitem = 0);
            }, 300));
        }), args[1] > innerheight(-60) ? softkeystouchdpad && doclick(args[2]) : iswithinelement(args, skhints) || isbutton ? (softkeystouchdpad && doclick(args[2]), 
        softkeys.showhints()) : softkeystouchdpad && (skhints.hidden || softkeys.showhints(), 
        softkeys.press(K.en));
    }), Hooks.set("navigationlongpress", function(args) {
        softkeys.showhints();
    });
    listener(skhints, [ "touchstart" ], function(e) {
        preventdefault(e), lamsahbar = [ e.touches[0].pageX, e.touches[0].pageY - scrollingelement().scrollTop ];
    }), listener(skhints, [ "touchmove" ], function(e) {
        if (lamsahbar) {
            lamsahbar = [ e.touches[0].pageX, e.touches[0].pageY - scrollingelement().scrollTop ];
            var el, path, ch = skhints.children;
            "touchmove" == e.type && (path = raycast(lamsahbar[0], lamsahbar[1]));
            for (var i in ch) if (ch.hasOwnProperty(i)) for (j in path) path[j] == ch[i] && (el = ch[i]);
            if (el) {
                for (var i in ch) ch.hasOwnProperty(i) && path[j] != el && popdata(ch[i], "hawm");
                setdata(el, "hawm", 1), softkeys.showhints();
            }
        }
    }), listener(skhints, [ "touchend", "touchcancel" ], function(e) {
        var path, ch = skhints.children;
        "touchend" == e.type && lamsahbar && (path = raycast(lamsahbar[0], lamsahbar[1]));
        for (var i in ch) if (ch.hasOwnProperty(i)) for (j in path) path[j] == ch[i] && ch[i] && "touchend" == e.type && ch[i].click();
        for (var i in ch) ch.hasOwnProperty(i) && popdata(ch[i], "hawm");
        lamsahbar = 0;
    });
}(), function() {
    var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0, caught = 0, start = 0;
    Hooks.set("ready", function() {}), Hooks.set("keyup", function(e) {
        var k = e.key.toLowerCase();
        "r" === k && e.ctrlKey && (location.reload(), preventdefault(e)), [ "escape", "f11" ].includes(k) && document.fullscreenElement ? (document.exitFullscreen(), 
        preventdefault(e)) : "f11" === k && (document.firstElementChild.requestFullscreen(), 
        preventdefault(e));
    }), listener("touchstart", function(e) {
        softkeys.touchdpad && preventdefault(e), x = e.touches[0].clientX, y = e.touches[0].clientY, 
        caught = 0, start = e.timeStamp, Hooks.run("navigationstart", [ x, y ]);
    }, {
        passive: !1
    }), listener("touchmove", function(e) {
        curx = e.touches[0].clientX, cury = e.touches[0].clientY, horizontal = curx - x, 
        vertical = cury - y, horizontal < -15 || horizontal > 15 ? (horizontal > 15 ? horizontal = 1 : horizontal < -15 && (horizontal = -1), 
        0 !== horizontal && (x = curx)) : horizontal = 0, vertical < -20 || vertical > 20 ? (vertical > 20 ? vertical = 1 : vertical < -20 && (vertical = -1), 
        0 !== vertical && (y = cury)) : vertical = 0, 0 === horizontal && 0 === vertical || (caught = 1, 
        Hooks.run("navigation", [ horizontal, vertical ]));
    }), listener("touchend", function(e) {
        caught ? Hooks.run("navigationend", [ x, y, e.path, horizontal, vertical ]) : e.timeStamp - start > 250 ? Hooks.run("navigationlongpress", [ x, y, e.path, horizontal, vertical ]) : Hooks.run("navigationpress", [ x, y, e.path, horizontal, vertical ]);
    });
}(), function() {
    dimmer.onclick = function() {
        "" == dimmertext.innerText && backstack.back();
    };
}();

var sawtkaatib;

!function() {
    "use strict";
    for (var notesdict = {}, names = [], notes = [ "c0", "ca", 16.35, "c#0", "Ca", 17.32, "d0", "da", 18.35, "d#0", "Da", 19.45, "e0", "ea", 20.6, "f0", "fa", 21.83, "f#0", "Fa", 23.12, "g0", "ga", 24.5, "g#0", "Ga", 25.96, "a0", "aa", 27.5, "a#0", "Aa", 29.14, "b0", "ba", 30.87, "c1", "cb", 32.7, "c#1", "Cb", 34.65, "d1", "db", 36.71, "d#1", "Db", 38.89, "e1", "eb", 41.2, "f1", "fb", 43.65, "f#1", "Fb", 46.25, "g1", "gb", 49, "g#1", "Gb", 51.91, "a1", "ab", 55, "a#1", "Ab", 58.27, "b1", "bb", 61.74, "c2", "cc", 65.41, "c#2", "Cc", 69.3, "d2", "dc", 73.42, "d#2", "Dc", 77.78, "e2", "ec", 82.41, "f2", "fc", 87.31, "f#2", "Fc", 92.5, "g2", "gc", 98, "g#2", "Gc", 103.83, "a2", "ac", 110, "a#2", "Ac", 116.54, "b2", "bc", 123.47, "c3", "cd", 130.81, "c#3", "Cd", 138.59, "d3", "dd", 146.83, "d#3", "Dd", 155.56, "e3", "ed", 164.81, "f3", "fd", 174.61, "f#3", "Fd", 185, "g3", "gd", 196, "g#3", "Gd", 207.65, "a3", "ad", 220, "a#3", "Ad", 233.08, "b3", "bd", 246.94, "c4", "ce", 261.63, "c#4", "Ce", 277.18, "d4", "de", 293.66, "d#4", "De", 311.13, "e4", "ee", 329.63, "f4", "fe", 349.23, "f#4", "Fe", 369.99, "g4", "ge", 392, "g#4", "Ge", 415.3, "a4", "ae", 440, "a#4", "Ae", 466.16, "b4", "be", 493.88, "c5", "cf", 523.25, "c#5", "Cf", 554.37, "d5", "df", 587.33, "d#5", "Df", 622.25, "e5", "ef", 659.25, "f5", "ff", 698.46, "f#5", "Ff", 739.99, "g5", "gf", 783.99, "g#5", "Gf", 830.61, "a5", "af", 880, "a#5", "Af", 932.33, "b5", "bf", 987.77, "c6", "cg", 1046.5, "c#6", "Cg", 1108.73, "d6", "dg", 1174.66, "d#6", "Dg", 1244.51, "e6", "eg", 1318.51, "f6", "fg", 1396.91, "f#6", "Fg", 1479.98, "g6", "gg", 1567.98, "g#6", "Gg", 1661.22, "a6", "ag", 1760, "a#6", "Ag", 1864.66, "b6", "bg", 1975.53, "c7", "ch", 2093, "c#7", "Ch", 2217.46, "d7", "dh", 2349.32, "d#7", "Dh", 2489.02, "e7", "eh", 2637.02, "f7", "fh", 2793.83, "f#7", "Fh", 2959.96, "g7", "gh", 3135.96, "g#7", "Gh", 3322.44, "a7", "ah", 3520, "a#7", "Ah", 3729.31, "b7", "bh", 3951.07, "c8", "ci", 4186.01, "c#8", "Ci", 4434.92, "d8", "di", 4698.63, "d#8", "Di", 4978.03, "e8", "ei", 5274.04, "f8", "fi", 5587.65, "f#8", "Fi", 5919.91, "g8", "gi", 6271.93, "g#8", "Gi", 6644.88, "a8", "ai", 7040, "a#8", "Ai", 7458.62, "b8", "bi", 7902.13 ], i = 0; i < notes.length; i += 3) names.push(notes[i]), 
    notesdict[notes[i]] = notes[i + 2], notesdict[notes[i + 1]] = notes[i + 2];
    var context, types = [ "sine", "square", "triangle", "sawtooth" ], il3ab = function(o) {
        var freq = sawtkaatib.axav(o[0]);
        if (freq) {
            var m = .25 * ((o[1] || 1) + 1);
            sawtkaatib.ajraa(0, .1 + m / 10, m, freq, .2);
        }
    }, onfinish = function() {
        context && context.close(), context = 0;
    };
    sawtkaatib = {
        silence: 0,
        hajm: 1,
        axav: function(v) {
            return notesdict[v];
        },
        saabiq: function(v) {
            var index = names.indexOf(v || "c3");
            return index > 0 ? names[--index] : v;
        },
        qaadim: function(v) {
            var index = names.indexOf(v || "c3");
            return index < names.length - 1 ? names[++index] : v;
        },
        ajraa: function(type, playfor, fadeout, freq, hajm) {
            if (!sawtkaatib.silence) {
                context || (context = new AudioContext());
                var o = context.createOscillator(), g = context.createGain();
                o.type = types[type] || types[0], o.frequency.value = freq || 830.6, g.gain.value = 0, 
                o.connect(g), g.connect(context.destination), setTimeout(function() {
                    playfor = playfor || .1, fadeout = fadeout || .015, context.currentTime && g.gain.exponentialRampToValueAtTime(.1 + hajm, context.currentTime + playfor), 
                    g.gain.value = hajm || sawtkaatib.hajm;
                    var promise = o.start(0);
                    void 0 !== promise && promise.then(function(e) {}).catch(function(e) {}), setTimeout(function() {
                        context.currentTime && g.gain.exponentialRampToValueAtTime(.005, context.currentTime + fadeout), 
                        g.gain.setTargetAtTime(0, context.currentTime, fadeout), setTimeout(function() {
                            o.stop(), onfinish();
                        }, 1e3 * fadeout);
                    }, 1e3 * playfor);
                }, 10);
            }
        },
        il3ab: function(taraateeb) {
            if (!sawtkaatib.silence) {
                var timeout, queue = $.queue(), i = 0;
                return (taraateeb || []).forEach(function() {
                    queue.set(function(done, queue) {
                        var o1, o2, o3, o4, t = taraateeb[i];
                        t && (o1 = t[0], o1 && il3ab(o1), o2 = t[1], o2 && il3ab(o2), o3 = t[2], o3 && il3ab(o3), 
                        (o4 = t[3]) && il3ab(o4)), clearTimeout(timeout), timeout = setTimeout(function() {
                            i++, done(queue);
                        }, 250);
                    });
                }), queue.run(), queue.onfinish = function() {
                    queue.intahaa(), onfinish();
                }, queue;
            }
        },
        mintarteeb: function(str, hajm) {
            var t = [];
            str = str || "", str = str.replace(/\/\/.*/g, "").trim().replace(/\n/g, " ");
            for (var arr = str.split(" "), j = 0, i = 0; i < 60; ++i) {
                if (t[i] = t[i] || [ [], [], [], [] ], arr[j]) {
                    var alfaaz = arr[j].split(","), o = t[i];
                    o && alfaaz.forEach(function(lafz, i) {
                        if (lafz) {
                            var secs = lafz.match(/\-/g);
                            secs = secs ? secs.length : "", o[i][0] = lafz.replace(/\-/g, ""), o[i][1] = secs;
                        }
                    });
                }
                j++;
            }
            return sawtkaatib.il3ab(t);
        },
        minhuroof: function(str, sinf, muddah) {
            if (isstr(str) && str.length) {
                for (var hajm, arr = [], delay = 0, tone = 0, i = 0; i < str.length; ++i) hajm = .7, 
                delay = 0, tone = 900 + str[i].charCodeAt(0) / 4, tone < 800 && (tone += 800), " .,?".includes(str[i]) && (delay = .08, 
                hajm = 0), arr.push([ sinf || 0, muddah || .001, .2 + delay, .03 + delay, tone, hajm, str[i] ]);
                return sawtkaatib.nasab(arr);
            }
        },
        nasab: function(sequence) {
            if (!sawtkaatib.silence) {
                var queue = $.queue(), i = 0;
                return (sequence || []).forEach(function() {
                    queue.set(function(done, queue) {
                        var args = sequence[i], type = args[0] || 0, playfor = args[1] || 0, fadeout = args[2] || 0, delay = args[3] || 0, freq = args[4] || 0, hajm = args[5] || 0, lafz = args[6] || 0;
                        sawtkaatib.ajraa(type, playfor, fadeout, freq, hajm), setTimeout(function() {
                            isfun(queue.uponsawt) && queue.uponsawt(lafz), onfinish(), ++i, done(queue);
                        }, 1e3 * (playfor + delay));
                    });
                }), queue.run(), queue.onfinish = function() {
                    queue.intahaa(), onfinish();
                }, queue;
            }
        }
    };
}(), function() {
    "use strict";
    var aqdaamlist, mowjoodah, la3ib, timeout, mfateeh, addzero = function(n) {
        return n = Math.floor(n), n > 9 ? n : "0" + n;
    }, toms = function(w) {
        return addzero(w / 60) + " : " + addzero(w / 60 % 1 * 60);
    }, redoarray = function() {
        var aqdaam = $.array();
        mfateeh.list.querySelectorAll(".listitem").forEach(function(item) {
            var o = aqdaamlist.adapter.get(getdata(item, "uid"));
            o && aqdaam.set(o.uid, o);
        }), aqdaamlist.adapter = aqdaam;
    }, jaddad = function() {
        mowjoodah ? (izhar(mfateeh.ism), izhar(mfateeh.muddah), innertext(mfateeh.ism, mowjoodah.ism), 
        innertext(mfateeh.muddah, mowjoodah.muddah)) : (ixtaf(mfateeh.ism), ixtaf(mfateeh.muddah));
        var kul = 0;
        aqdaamlist.adapter.each(function(o) {
            mowjoodah ? o.uid == mowjoodah.uid ? kul += mowjoodah.muddah : o.uid > mowjoodah.uid && (kul += o.muddah) : kul += o.muddah;
        }), innertext(mfateeh.kul, toms(kul));
    }, qaadim = function() {
        clearTimeout(timeout), timeout = setTimeout(function() {
            if (la3ib) {
                var mdh = mowjoodah.muddah;
                mdh > 1 ? (mdh <= 4 && beepb.play(), --mowjoodah.muddah, qaadim()) : aqdaamlist.selected === aqdaamlist.length() - 1 ? main.intahaa() : (beepa.play(), 
                aqdaamlist.down(), main.il3ab()), jaddad();
            }
        }, 1e3);
    }, sendbtn = function(sinf) {
        var icon = sinf ? "iconpause" : "iconplayarrow";
        softkeys.set(K.en, function() {
            sinf ? main.inqata3() : main.il3ab();
        }, 0, icon);
    }, auxbtn = function(sinf) {
        var icon = sinf ? "iconstop" : "iconedit";
        softkeys.set(K.sl, function() {
            sinf ? main.intahaa() : aqdaamlist.press(K.sl);
        }, 0, icon);
    }, terbtn = function(sinf) {
        softkeys.set("3", function() {
            setTimeout(function() {
                main.adaaf();
            });
        }, "3", "iconadd");
    }, havafbtn = function(sinf) {
        softkeys.set("0", function() {
            Hooks.run("dialog", {
                c: function(k) {
                    aqdaamlist.press("0");
                },
                m: "delete?"
            });
        }, "0", "iconclose");
    }, main = {
        il3ab: function() {
            (mowjoodah = aqdaamlist.axavmuntaxab()) && (mowjoodah = shallowcopy(mowjoodah), 
            la3ib = 1, webapp.sahhar(), qaadim(), jaddad(), sendbtn(1), auxbtn(1));
        },
        inqata3: function() {
            la3ib = 0, webapp.nawwam(), clearTimeout(timeout), sendbtn(), jaddad();
        },
        intahaa: function() {
            mowjoodah && (webapp.nawwam(), main.inqata3(), auxbtn(), mowjoodah = 0, jaddad());
        },
        hifz: function() {
            $.taxeer("hifz", function() {
                var aqdaam = [];
                mfateeh.list.querySelectorAll(".listitem").forEach(function(item) {
                    var o = aqdaamlist.adapter.get(getdata(item, "uid"));
                    o && aqdaam.push([ o.ism, o.muddah ]);
                }), jaddad(), preferences.set("aqdaam", JSON.stringify(aqdaam));
            }, 2e3);
        },
        adaaf: function(item) {
            Hooks.run("dialog", {
                x: 64,
                c: function(k) {
                    item = item || {};
                    var o = {
                        uid: item.uid || aqdaamlist.length() + 1,
                        ism: k,
                        muddah: item.muddah || 0
                    };
                    aqdaamlist.set(o), aqdaamlist.select(aqdaamlist.id2num(o.uid)), main.hifz();
                },
                m: "ism",
                a: (item || {}).ism,
                q: "ism"
            });
        }
    };
    Hooks.set("ready", function() {
        mfateeh = view.mfateeh("main"), webapp.header(), aqdaamlist = list(mfateeh.list).idprefix("qadam").listitem("qadam"), 
        aqdaamlist.onpress = function(item, key) {
            "4" == key && item.muddah > 0 && (--item.muddah, aqdaamlist.set(item), aqdaamlist.select(), 
            main.hifz()), "6" == key && item.muddah < 99999 && (++item.muddah, aqdaamlist.set(item), 
            aqdaamlist.select(), main.hifz()), "2" == key && (aqdaamlist.moveup(item.uid), redoarray(), 
            main.hifz()), "8" == key && (aqdaamlist.movedown(item.uid), redoarray(), main.hifz()), 
            "0" == key && (aqdaamlist.pop(item.uid), main.hifz()), key == K.en && (la3ib ? main.inqata3() : main.il3ab()), 
            key == K.sl && main.adaaf(item);
        }, aqdaamlist.uponpaststart = function() {
            return aqdaamlist.first(), 1;
        }, aqdaamlist.uponpastend = function() {
            return aqdaamlist.last(), 1;
        }, (preferences.get("aqdaam", 1) || []).forEach(function(item, i) {
            aqdaamlist.set({
                uid: i + 1,
                ism: item[0],
                muddah: item[1]
            });
        });
    }), Hooks.set("viewready", function(args) {
        "main" == args.name && (softkeys.list.basic(aqdaamlist), aqdaamlist.select(0), jaddad(), 
        auxbtn(), sendbtn(), terbtn(), havafbtn(), softkeys.set("2", function() {
            aqdaamlist.press("2");
        }, "2", "iconkeyboardarrowup"), softkeys.set("8", function() {
            aqdaamlist.press("8");
        }, "8", "iconkeyboardarrowdown"), softkeys.set("4", function() {
            aqdaamlist.press("4");
        }, "4", "iconexposureneg1"), softkeys.set("6", function() {
            aqdaamlist.press("6");
        }, "6", "iconexposureplus1"));
    }), Hooks.set("restore", function(darajah) {
        0 === darajah && backstack.states.main;
    });
}();
