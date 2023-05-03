(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        "0b6cd0c9af20a8d4def6": function(t, e, n) {
            "use strict";
            var r = {};
            n.r(r), n.d(r, "generateKey", function() {
                return C
            }), n.d(r, "verifyHmac", function() {
                return T
            }), n.d(r, "encrypt", function() {
                return E
            }), n.d(r, "decrypt", function() {
                return R
            });
            var i = n("9c0d875a4c2533237d5c"),
                o = n("6f8d0eaec0f9c8228193");
            const s = "Session currently connected",
                a = "Session currently disconnected",
                c = "Session Rejected",
                u = "Missing JSON RPC response",
                h = 'JSON-RPC success response must include "result" field',
                l = 'JSON-RPC error response must include "error" field',
                d = 'JSON RPC request must have valid "method" value',
                f = 'JSON RPC request must have valid "id" value',
                p = "Missing one of the required parameters: bridge / uri / session",
                m = "JSON RPC response format is invalid",
                g = "URI format is invalid",
                w = "QRCode Modal not provided",
                _ = "User close QRCode Modal";
            var b = class {
                constructor() {
                    this._eventEmitters = []
                }
                subscribe(t) {
                    this._eventEmitters.push(t)
                }
                unsubscribe(t) {
                    this._eventEmitters = this._eventEmitters.filter(e => e.event !== t)
                }
                trigger(t) {
                    let e, n = [];
                    (e = Object(i.q)(t) ? t.method : Object(i.s)(t) || Object(i.r)(t) ? `response:${t.id}` : Object(i.p)(t) ? t.event : "") && (n = this._eventEmitters.filter(t => t.event === e)), n && n.length || Object(i.u)(e) || Object(i.p)(e) || (n = this._eventEmitters.filter(t => "call_request" === t.event)), n.forEach(e => {
                        if (Object(i.r)(t)) {
                            const n = new Error(t.error.message);
                            e.callback(n, null)
                        } else e.callback(null, t)
                    })
                }
            };
            var v = class {
                constructor(t = "walletconnect") {
                    this.storageId = t
                }
                getSession() {
                    let t = null;
                    const e = Object(i.k)(this.storageId);
                    return e && Object(i.w)(e) && (t = e), t
                }
                setSession(t) {
                    return Object(i.D)(this.storageId, t), t
                }
                removeSession() {
                    Object(i.C)(this.storageId)
                }
            };
            const y = "walletconnect.org",
                M = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map(t => `https://${t}.bridge.walletconnect.org`);

            function x() {
                return M[Math.floor(Math.random() * M.length)]
            }

            function k(t) {
                return function(t) {
                    return function(t) {
                        return function(t) {
                            let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
                            return e = (e = e.split(":")[0]).split("?")[0]
                        }(t).split(".").slice(-2).join(".")
                    }(t) === y
                }(t) ? x() : t
            }
            var S = class {
                    constructor(t) {
                        if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new b, this._clientMeta = Object(i.i)() || t.connectorOpts.clientMeta || null, this._cryptoLib = t.cryptoLib, this._sessionStorage = t.sessionStorage || new v(t.connectorOpts.storageId), this._qrcodeModal = t.connectorOpts.qrcodeModal, this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions, this._signingMethods = [...i.E, ...t.connectorOpts.signingMethods || []], !t.connectorOpts.bridge && !t.connectorOpts.uri && !t.connectorOpts.session) throw new Error(p);
                        t.connectorOpts.bridge && (this.bridge = k(t.connectorOpts.bridge)), t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
                        const e = t.connectorOpts.session || this._getStorageSession();
                        e && (this.session = e), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = t.transport || new o.a({
                            protocol: this.protocol,
                            version: this.version,
                            url: this.bridge,
                            subscriptions: [this.clientId]
                        }), this._subscribeToInternalEvents(), this._initTransport(), t.connectorOpts.uri && this._subscribeToSessionRequest(), t.pushServerOpts && this._registerPushServer(t.pushServerOpts)
                    }
                    set bridge(t) {
                        t && (this._bridge = t)
                    }
                    get bridge() {
                        return this._bridge
                    }
                    set key(t) {
                        if (!t) return;
                        const e = Object(i.e)(t);
                        this._key = e
                    }
                    get key() {
                        return this._key ? Object(i.c)(this._key, !0) : ""
                    }
                    set clientId(t) {
                        t && (this._clientId = t)
                    }
                    get clientId() {
                        let t = this._clientId;
                        return t || (t = this._clientId = Object(i.F)()), this._clientId
                    }
                    set peerId(t) {
                        t && (this._peerId = t)
                    }
                    get peerId() {
                        return this._peerId
                    }
                    set clientMeta(t) {}
                    get clientMeta() {
                        let t = this._clientMeta;
                        return t || (t = this._clientMeta = Object(i.i)()), t
                    }
                    set peerMeta(t) {
                        this._peerMeta = t
                    }
                    get peerMeta() {
                        return this._peerMeta
                    }
                    set handshakeTopic(t) {
                        t && (this._handshakeTopic = t)
                    }
                    get handshakeTopic() {
                        return this._handshakeTopic
                    }
                    set handshakeId(t) {
                        t && (this._handshakeId = t)
                    }
                    get handshakeId() {
                        return this._handshakeId
                    }
                    get uri() {
                        return this._formatUri()
                    }
                    set uri(t) {
                        if (!t) return;
                        const {
                            handshakeTopic: e,
                            bridge: n,
                            key: r
                        } = this._parseUri(t);
                        this.handshakeTopic = e, this.bridge = n, this.key = r
                    }
                    set chainId(t) {
                        this._chainId = t
                    }
                    get chainId() {
                        return this._chainId
                    }
                    set networkId(t) {
                        this._networkId = t
                    }
                    get networkId() {
                        return this._networkId
                    }
                    set accounts(t) {
                        this._accounts = t
                    }
                    get accounts() {
                        return this._accounts
                    }
                    set rpcUrl(t) {
                        this._rpcUrl = t
                    }
                    get rpcUrl() {
                        return this._rpcUrl
                    }
                    set connected(t) {}
                    get connected() {
                        return this._connected
                    }
                    set pending(t) {}
                    get pending() {
                        return !!this._handshakeTopic
                    }
                    get session() {
                        return {
                            connected: this.connected,
                            accounts: this.accounts,
                            chainId: this.chainId,
                            bridge: this.bridge,
                            key: this.key,
                            clientId: this.clientId,
                            clientMeta: this.clientMeta,
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            handshakeId: this.handshakeId,
                            handshakeTopic: this.handshakeTopic
                        }
                    }
                    set session(t) {
                        t && (this._connected = t.connected, this.accounts = t.accounts, this.chainId = t.chainId, this.bridge = t.bridge, this.key = t.key, this.clientId = t.clientId, this.clientMeta = t.clientMeta, this.peerId = t.peerId, this.peerMeta = t.peerMeta, this.handshakeId = t.handshakeId, this.handshakeTopic = t.handshakeTopic)
                    }
                    on(t, e) {
                        const n = {
                            event: t,
                            callback: e
                        };
                        this._eventManager.subscribe(n)
                    }
                    off(t) {
                        this._eventManager.unsubscribe(t)
                    }
                    async createInstantRequest(t) {
                        this._key = await this._generateKey();
                        const e = this._formatRequest({
                            method: "wc_instantRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                request: this._formatRequest(t)
                            }]
                        });
                        this.handshakeId = e.id, this.handshakeTopic = Object(i.F)(), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        }), this.on("modal_closed", () => {
                            throw new Error(_)
                        });
                        const n = () => {
                            this.killSession()
                        };
                        try {
                            const t = await this._sendCallRequest(e);
                            return t && n(), t
                        } catch (t) {
                            throw n(), t
                        }
                    }
                    async connect(t) {
                        if (!this._qrcodeModal) throw new Error(w);
                        return this.connected ? {
                            chainId: this.chainId,
                            accounts: this.accounts
                        } : (await this.createSession(t), new Promise(async (t, e) => {
                            this.on("modal_closed", () => e(new Error(_))), this.on("connect", (n, r) => {
                                if (n) return e(n);
                                t(r.params[0])
                            })
                        }))
                    }
                    async createSession(t) {
                        if (this._connected) throw new Error(s);
                        if (this.pending) return;
                        this._key = await this._generateKey();
                        const e = this._formatRequest({
                            method: "wc_sessionRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                chainId: t && t.chainId ? t.chainId : null
                            }]
                        });
                        this.handshakeId = e.id, this.handshakeTopic = Object(i.F)(), this._sendSessionRequest(e, "Session update rejected", {
                            topic: this.handshakeTopic
                        }), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        })
                    }
                    approveSession(t) {
                        if (this._connected) throw new Error(s);
                        this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
                        const e = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl,
                                peerId: this.clientId,
                                peerMeta: this.clientMeta
                            },
                            n = {
                                id: this.handshakeId,
                                jsonrpc: "2.0",
                                result: e
                            };
                        this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })
                    }
                    rejectSession(t) {
                        if (this._connected) throw new Error(s);
                        const e = t && t.message ? t.message : c,
                            n = this._formatResponse({
                                id: this.handshakeId,
                                error: {
                                    message: e
                                }
                            });
                        this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: e
                            }]
                        }), this._removeStorageSession()
                    }
                    updateSession(t) {
                        if (!this._connected) throw new Error(a);
                        this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
                        const e = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl
                            },
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [e]
                            });
                        this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        }), this._manageStorageSession()
                    }
                    async killSession(t) {
                        const e = t ? t.message : "Session Disconnected",
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [{
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null
                                }]
                            });
                        await this._sendRequest(n), this._handleSessionDisconnect(e)
                    }
                    async sendTransaction(t) {
                        if (!this._connected) throw new Error(a);
                        const e = Object(i.z)(t),
                            n = this._formatRequest({
                                method: "eth_sendTransaction",
                                params: [e]
                            });
                        return await this._sendCallRequest(n)
                    }
                    async signTransaction(t) {
                        if (!this._connected) throw new Error(a);
                        const e = Object(i.z)(t),
                            n = this._formatRequest({
                                method: "eth_signTransaction",
                                params: [e]
                            });
                        return await this._sendCallRequest(n)
                    }
                    async signMessage(t) {
                        if (!this._connected) throw new Error(a);
                        const e = this._formatRequest({
                            method: "eth_sign",
                            params: t
                        });
                        return await this._sendCallRequest(e)
                    }
                    async signPersonalMessage(t) {
                        if (!this._connected) throw new Error(a);
                        t = Object(i.y)(t);
                        const e = this._formatRequest({
                            method: "personal_sign",
                            params: t
                        });
                        return await this._sendCallRequest(e)
                    }
                    async signTypedData(t) {
                        if (!this._connected) throw new Error(a);
                        const e = this._formatRequest({
                            method: "eth_signTypedData",
                            params: t
                        });
                        return await this._sendCallRequest(e)
                    }
                    async updateChain(t) {
                        if (!this._connected) throw new Error("Session currently disconnected");
                        const e = this._formatRequest({
                            method: "wallet_updateChain",
                            params: [t]
                        });
                        return await this._sendCallRequest(e)
                    }
                    unsafeSend(t, e) {
                        return this._sendRequest(t, e), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: t,
                                options: e
                            }]
                        }), new Promise((e, n) => {
                            this._subscribeToResponse(t.id, (t, r) => {
                                if (t) n(t);
                                else {
                                    if (!r) throw new Error(u);
                                    e(r)
                                }
                            })
                        })
                    }
                    async sendCustomRequest(t, e) {
                        if (!this._connected) throw new Error(a);
                        switch (t.method) {
                            case "eth_accounts":
                                return this.accounts;
                            case "eth_chainId":
                                return Object(i.f)(this.chainId);
                            case "eth_sendTransaction":
                            case "eth_signTransaction":
                                t.params && (t.params[0] = Object(i.z)(t.params[0]));
                                break;
                            case "personal_sign":
                                t.params && (t.params = Object(i.y)(t.params))
                        }
                        const n = this._formatRequest(t);
                        return await this._sendCallRequest(n, e)
                    }
                    approveRequest(t) {
                        if (!Object(i.s)(t)) throw new Error(h); {
                            const e = this._formatResponse(t);
                            this._sendResponse(e)
                        }
                    }
                    rejectRequest(t) {
                        if (!Object(i.r)(t)) throw new Error(l); {
                            const e = this._formatResponse(t);
                            this._sendResponse(e)
                        }
                    }
                    transportClose() {
                        this._transport.close()
                    }
                    async _sendRequest(t, e) {
                        const n = this._formatRequest(t),
                            r = await this._encrypt(n),
                            o = "undefined" !== typeof(null === e || void 0 === e ? void 0 : e.topic) ? e.topic : this.peerId,
                            s = JSON.stringify(r),
                            a = "undefined" !== typeof(null === e || void 0 === e ? void 0 : e.forcePushNotification) ? !e.forcePushNotification : Object(i.v)(n);
                        this._transport.send(s, o, a)
                    }
                    async _sendResponse(t) {
                        const e = await this._encrypt(t),
                            n = this.peerId,
                            r = JSON.stringify(e);
                        this._transport.send(r, n, !0)
                    }
                    async _sendSessionRequest(t, e, n) {
                        this._sendRequest(t, n), this._subscribeToSessionResponse(t.id, e)
                    }
                    _sendCallRequest(t, e) {
                        return this._sendRequest(t, e), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: t,
                                options: e
                            }]
                        }), this._subscribeToCallResponse(t.id)
                    }
                    _formatRequest(t) {
                        if ("undefined" === typeof t.method) throw new Error(d);
                        return {
                            id: "undefined" === typeof t.id ? Object(i.B)() : t.id,
                            jsonrpc: "2.0",
                            method: t.method,
                            params: "undefined" === typeof t.params ? [] : t.params
                        }
                    }
                    _formatResponse(t) {
                        if ("undefined" === typeof t.id) throw new Error(f);
                        const e = {
                            id: t.id,
                            jsonrpc: "2.0"
                        };
                        if (Object(i.r)(t)) {
                            const n = Object(i.h)(t.error);
                            return Object.assign(Object.assign(Object.assign({}, e), t), {
                                error: n
                            })
                        }
                        if (Object(i.s)(t)) return Object.assign(Object.assign({}, e), t);
                        throw new Error(m)
                    }
                    _handleSessionDisconnect(t) {
                        const e = t || "Session Disconnected";
                        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), Object(i.C)(i.x)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: e
                            }]
                        }), this._removeStorageSession(), this.transportClose()
                    }
                    _handleSessionResponse(t, e) {
                        e && e.approved ? (this._connected ? (e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })) : (this._connected = !0, e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), e.peerId && !this.peerId && (this.peerId = e.peerId), e.peerMeta && !this.peerMeta && (this.peerMeta = e.peerMeta), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })), this._manageStorageSession()) : this._handleSessionDisconnect(t)
                    }
                    async _handleIncomingMessages(t) {
                        if (![this.clientId, this.handshakeTopic].includes(t.topic)) return;
                        let e;
                        try {
                            e = JSON.parse(t.payload)
                        } catch (t) {
                            return
                        }
                        const n = await this._decrypt(e);
                        n && this._eventManager.trigger(n)
                    }
                    _subscribeToSessionRequest() {
                        this._transport.subscribe(this.handshakeTopic)
                    }
                    _subscribeToResponse(t, e) {
                        this.on(`response:${t}`, e)
                    }
                    _subscribeToSessionResponse(t, e) {
                        this._subscribeToResponse(t, (t, n) => {
                            t ? this._handleSessionResponse(t.message) : Object(i.s)(n) ? this._handleSessionResponse(e, n.result) : n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(e)
                        })
                    }
                    _subscribeToCallResponse(t) {
                        return new Promise((e, n) => {
                            this._subscribeToResponse(t, (t, r) => {
                                t ? n(t) : Object(i.s)(r) ? e(r.result) : r.error && r.error.message ? n(r.error) : n(new Error(m))
                            })
                        })
                    }
                    _subscribeToInternalEvents() {
                        this.on("display_uri", () => {
                            this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
                                this._eventManager.trigger({
                                    event: "modal_closed",
                                    params: []
                                })
                            }, this._qrcodeModalOptions)
                        }), this.on("connect", () => {
                            this._qrcodeModal && this._qrcodeModal.close()
                        }), this.on("call_request_sent", (t, e) => {
                            const {
                                request: n
                            } = e.params[0];
                            if (Object(i.t)() && this._signingMethods.includes(n.method)) {
                                const t = Object(i.k)(i.x);
                                t && (window.location.href = t.href)
                            }
                        }), this.on("wc_sessionRequest", (t, e) => {
                            t && this._eventManager.trigger({
                                event: "error",
                                params: [{
                                    code: "SESSION_REQUEST_ERROR",
                                    message: t.toString()
                                }]
                            }), this.handshakeId = e.id, this.peerId = e.params[0].peerId, this.peerMeta = e.params[0].peerMeta;
                            const n = Object.assign(Object.assign({}, e), {
                                method: "session_request"
                            });
                            this._eventManager.trigger(n)
                        }), this.on("wc_sessionUpdate", (t, e) => {
                            t && this._handleSessionResponse(t.message), this._handleSessionResponse("Session disconnected", e.params[0])
                        })
                    }
                    _initTransport() {
                        this._transport.on("message", t => this._handleIncomingMessages(t)), this._transport.on("open", () => this._eventManager.trigger({
                            event: "transport_open",
                            params: []
                        })), this._transport.on("close", () => this._eventManager.trigger({
                            event: "transport_close",
                            params: []
                        })), this._transport.on("error", () => this._eventManager.trigger({
                            event: "transport_error",
                            params: ["Websocket connection failed"]
                        })), this._transport.open()
                    }
                    _formatUri() {
                        return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`
                    }
                    _parseUri(t) {
                        const e = Object(i.A)(t);
                        if (e.protocol === this.protocol) {
                            if (!e.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                            const t = e.handshakeTopic;
                            if (!e.bridge) throw Error("Invalid or missing bridge url parameter value");
                            const n = decodeURIComponent(e.bridge);
                            if (!e.key) throw Error("Invalid or missing key parameter value");
                            return {
                                handshakeTopic: t,
                                bridge: n,
                                key: e.key
                            }
                        }
                        throw new Error(g)
                    }
                    async _generateKey() {
                        return this._cryptoLib ? await this._cryptoLib.generateKey() : null
                    }
                    async _encrypt(t) {
                        const e = this._key;
                        return this._cryptoLib && e ? await this._cryptoLib.encrypt(t, e) : null
                    }
                    async _decrypt(t) {
                        const e = this._key;
                        return this._cryptoLib && e ? await this._cryptoLib.decrypt(t, e) : null
                    }
                    _getStorageSession() {
                        let t = null;
                        return this._sessionStorage && (t = this._sessionStorage.getSession()), t
                    }
                    _setStorageSession() {
                        this._sessionStorage && this._sessionStorage.setSession(this.session)
                    }
                    _removeStorageSession() {
                        this._sessionStorage && this._sessionStorage.removeSession()
                    }
                    _manageStorageSession() {
                        this._connected ? this._setStorageSession() : this._removeStorageSession()
                    }
                    _registerPushServer(t) {
                        if (!t.url || "string" !== typeof t.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                        if (!t.type || "string" !== typeof t.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                        if (!t.token || "string" !== typeof t.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                        const e = {
                            bridge: this.bridge,
                            topic: this.clientId,
                            type: t.type,
                            token: t.token,
                            peerName: "",
                            language: t.language || ""
                        };
                        this.on("connect", async (n, r) => {
                            if (n) throw n;
                            if (t.peerMeta) {
                                const t = r.params[0].peerMeta.name;
                                e.peerName = t
                            }
                            try {
                                const r = await fetch(`${t.url}/new`, {
                                    method: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(e)
                                });
                                if (!(await r.json()).success) throw Error("Failed to register in Push Server")
                            } catch (n) {
                                throw Error("Failed to register in Push Server")
                            }
                        })
                    }
                },
                O = n("9759726872ca38f19e62"),
                I = n("f01094289b5a8d3964bd");
            async function C(t) {
                const e = (t || 256) / 8,
                    n = O.randomBytes(e);
                return Object(i.d)(I.arrayToBuffer(n))
            }
            async function T(t, e) {
                const n = I.hexToArray(t.data),
                    r = I.hexToArray(t.iv),
                    i = I.hexToArray(t.hmac),
                    o = I.arrayToHex(i, !1),
                    s = I.concatArrays(n, r),
                    a = await O.hmacSha256Sign(e, s),
                    c = I.arrayToHex(a, !1);
                return I.removeHexPrefix(o) === I.removeHexPrefix(c)
            }
            async function E(t, e, n) {
                const r = I.bufferToArray(Object(i.b)(e)),
                    o = n || await C(128),
                    s = I.bufferToArray(Object(i.b)(o)),
                    a = I.arrayToHex(s, !1),
                    c = JSON.stringify(t),
                    u = I.utf8ToArray(c),
                    h = await O.aesCbcEncrypt(s, r, u),
                    l = I.arrayToHex(h, !1),
                    d = I.concatArrays(h, s),
                    f = await O.hmacSha256Sign(r, d);
                return {
                    data: l,
                    hmac: I.arrayToHex(f, !1),
                    iv: a
                }
            }
            async function R(t, e) {
                const n = I.bufferToArray(Object(i.b)(e));
                if (!n) throw new Error("Missing key: required for decryption");
                if (!await T(t, n)) return null;
                const r = I.hexToArray(t.data),
                    o = I.hexToArray(t.iv),
                    s = await O.aesCbcDecrypt(o, n, r),
                    a = I.arrayToUtf8(s);
                let c;
                try {
                    c = JSON.parse(a)
                } catch (t) {
                    return null
                }
                return c
            }
            var q = class extends S {
                    constructor(t, e) {
                        super({
                            cryptoLib: r,
                            connectorOpts: t,
                            pushServerOpts: e
                        })
                    }
                },
                j = n("fc96f6f2df105f972d5d"),
                A = n.n(j),
                N = n("71cfc1f315b47cde0ac9"),
                L = n.n(N),
                B = n("3bcef96c619b42740495");
            const W = Object(i.j)("XMLHttpRequest") || B.XMLHttpRequest;
            var P = class extends L.a {
                constructor(t) {
                    super(), this.url = t
                }
                formatError(t, e, n = -1) {
                    return {
                        error: {
                            message: e,
                            code: n
                        },
                        id: t.id,
                        jsonrpc: t.jsonrpc
                    }
                }
                send(t, e) {
                    return new Promise(n => {
                        if ("eth_subscribe" === t.method) {
                            const e = this.formatError(t, "Subscriptions are not supported by this HTTP endpoint");
                            return this.emit("error", e), n(e)
                        }
                        const r = new W;
                        let i = !1;
                        const o = (o, s) => {
                            if (!i)
                                if (r.abort(), i = !0, e) e(o, s);
                                else {
                                    const {
                                        id: e,
                                        jsonrpc: r
                                    } = t, i = o ? {
                                        id: e,
                                        jsonrpc: r,
                                        error: {
                                            message: o.message,
                                            code: o.code
                                        }
                                    } : {
                                        id: e,
                                        jsonrpc: r,
                                        result: s
                                    };
                                    this.emit("payload", i), n(i)
                                }
                        };
                        r.open("POST", this.url, !0), r.setRequestHeader("Content-Type", "application/json"), r.timeout = 6e4, r.onerror = o, r.ontimeout = o, r.onreadystatechange = (() => {
                            if (4 === r.readyState) try {
                                const t = JSON.parse(r.responseText);
                                o(t.error, t.result)
                            } catch (t) {
                                o(t)
                            }
                        }), r.send(JSON.stringify(t))
                    })
                }
            };
            const U = n("621e12c76152b8c28fbe"),
                z = n("781691d29186dbf6ae39"),
                H = n("44cac29870e47160dfe3"),
                D = n("9ddc2bdaf7d73fd8fc87"),
                F = n("548afe2a1a9c1570921a"),
                $ = n("5fa2de44fdd0b0e1c53d"),
                Z = n("a20625a174e9c30f4c92");
            e.a = class extends U {
                constructor(t) {
                    if (super({
                            pollingInterval: t.pollingInterval || 8e3
                        }), this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModal = A.a, this.qrcodeModalOptions = void 0, this.rpc = null, this.infuraId = "", this.http = null, this.isConnecting = !1, this.connected = !1, this.connectCallbacks = [], this.accounts = [], this.chainId = 1, this.rpcUrl = "", this.enable = (async () => {
                            const t = await this.getWalletConnector();
                            if (t) return this.start(), this.subscribeWalletConnector(), t.accounts;
                            throw new Error("Failed to connect to WalleConnect")
                        }), this.request = (async t => this.send(t)), this.send = (async (t, e) => {
                            var n;
                            if ("string" === typeof t) {
                                const n = t;
                                let r = e;
                                return "personal_sign" === n && (r = Object(i.y)(r)), this.sendAsyncPromise(n, r)
                            }
                            if ("personal_sign" === (t = Object.assign({
                                    id: Object(i.B)(),
                                    jsonrpc: "2.0"
                                }, t)).method && (t.params = Object(i.y)(t.params)), !e) {
                                if ("eth_signTypedData_v4" === t.method && "MetaMask" === (null === (n = this.walletMeta) || void 0 === n ? void 0 : n.name)) {
                                    const {
                                        result: e
                                    } = await this.handleOtherRequests(t);
                                    return e
                                }
                                return this.sendAsyncPromise(t.method, t.params)
                            }
                            this.sendAsync(t, e)
                        }), this.onConnect = (t => {
                            this.connectCallbacks.push(t)
                        }), this.triggerConnect = (t => {
                            this.connectCallbacks && this.connectCallbacks.length && this.connectCallbacks.forEach(e => e(t))
                        }), this.bridge = t.connector ? t.connector.bridge : t.bridge || "https://bridge.walletconnect.org", this.qrcode = "undefined" === typeof t.qrcode || !1 !== t.qrcode, this.qrcodeModal = t.qrcodeModal || this.qrcodeModal, this.qrcodeModalOptions = t.qrcodeModalOptions, this.wc = t.connector || new q({
                            bridge: this.bridge,
                            qrcodeModal: this.qrcode ? this.qrcodeModal : void 0,
                            qrcodeModalOptions: this.qrcodeModalOptions,
                            storageId: null === t || void 0 === t ? void 0 : t.storageId,
                            signingMethods: null === t || void 0 === t ? void 0 : t.signingMethods,
                            clientMeta: null === t || void 0 === t ? void 0 : t.clientMeta
                        }), this.rpc = t.rpc || null, !this.rpc && (!t.infuraId || "string" !== typeof t.infuraId || !t.infuraId.trim())) throw new Error("Missing one of the required parameters: rpc or infuraId");
                    this.infuraId = t.infuraId || "", this.chainId = (null === t || void 0 === t ? void 0 : t.chainId) || this.chainId, this.initialize()
                }
                get isWalletConnect() {
                    return !0
                }
                get connector() {
                    return this.wc
                }
                get walletMeta() {
                    return this.wc.peerMeta
                }
                async disconnect() {
                    this.close()
                }
                async close() {
                    const t = await this.getWalletConnector({
                        disableSessionCreation: !0
                    });
                    await t.killSession(), await this.onDisconnect()
                }
                async handleRequest(t) {
                    try {
                        let e, n = null;
                        const r = await this.getWalletConnector();
                        switch (t.method) {
                            case "wc_killSession":
                                await this.close(), n = null;
                                break;
                            case "eth_accounts":
                                n = r.accounts;
                                break;
                            case "eth_coinbase":
                                n = r.accounts[0];
                                break;
                            case "eth_chainId":
                            case "net_version":
                                n = r.chainId;
                                break;
                            case "eth_uninstallFilter":
                                this.sendAsync(t, t => t), n = !0;
                                break;
                            default:
                                e = await this.handleOtherRequests(t)
                        }
                        return e || this.formatResponse(t, n)
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async handleOtherRequests(t) {
                    if (!i.E.includes(t.method) && t.method.startsWith("eth_")) return this.handleReadRequests(t);
                    const e = await this.getWalletConnector(),
                        n = await e.sendCustomRequest(t);
                    return this.formatResponse(t, n)
                }
                async handleReadRequests(t) {
                    if (!this.http) {
                        const t = new Error("HTTP Connection not available");
                        throw this.emit("error", t), t
                    }
                    return this.http.send(t)
                }
                formatResponse(t, e) {
                    return {
                        id: t.id,
                        jsonrpc: t.jsonrpc,
                        result: e
                    }
                }
                getWalletConnector(t = {}) {
                    const {
                        disableSessionCreation: e = !1
                    } = t;
                    return new Promise((t, n) => {
                        const r = this.wc;
                        this.isConnecting ? this.onConnect(e => t(e)) : r.connected || e ? (this.connected || (this.connected = !0, this.updateState(r.session)), t(r)) : (this.isConnecting = !0, r.on("modal_closed", () => {
                            n(new Error("User closed modal"))
                        }), r.createSession({
                            chainId: this.chainId
                        }).then(() => {
                            r.on("connect", (e, i) => {
                                if (e) return this.isConnecting = !1, n(e);
                                this.isConnecting = !1, this.connected = !0, i && this.updateState(i.params[0]), this.emit("connect"), this.triggerConnect(r), t(r)
                            })
                        }).catch(t => {
                            this.isConnecting = !1, n(t)
                        }))
                    })
                }
                async subscribeWalletConnector() {
                    const t = await this.getWalletConnector();
                    t.on("disconnect", t => {
                        t ? this.emit("error", t) : this.onDisconnect()
                    }), t.on("session_update", (t, e) => {
                        t ? this.emit("error", t) : this.updateState(e.params[0])
                    })
                }
                async onDisconnect() {
                    await this.stop(), this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected"), this.connected = !1
                }
                async updateState(t) {
                    const {
                        accounts: e,
                        chainId: n,
                        networkId: r,
                        rpcUrl: i
                    } = t;
                    (!this.accounts || e && this.accounts !== e) && (this.accounts = e, this.emit("accountsChanged", e)), (!this.chainId || n && this.chainId !== n) && (this.chainId = n, this.emit("chainChanged", n)), (!this.networkId || r && this.networkId !== r) && (this.networkId = r, this.emit("networkChanged", r)), this.updateRpcUrl(this.chainId, i || "")
                }
                updateRpcUrl(t, e = "") {
                    const n = {
                        infuraId: this.infuraId,
                        custom: this.rpc || void 0
                    };
                    (e = e || Object(i.n)(t, n)) ? (this.rpcUrl = e, this.updateHttpConnection()) : this.emit("error", new Error(`No RPC Url available for chainId: ${t}`))
                }
                updateHttpConnection() {
                    this.rpcUrl && (this.http = new P(this.rpcUrl), this.http.on("payload", t => this.emit("payload", t)), this.http.on("error", t => this.emit("error", t)))
                }
                sendAsyncPromise(t, e) {
                    return new Promise((n, r) => {
                        this.sendAsync({
                            id: Object(i.B)(),
                            jsonrpc: "2.0",
                            method: t,
                            params: e || []
                        }, (t, e) => {
                            t ? r(t) : n(e.result)
                        })
                    })
                }
                initialize() {
                    this.updateRpcUrl(this.chainId), this.addProvider(new H({
                        eth_hashrate: "0x00",
                        eth_mining: !1,
                        eth_syncing: !0,
                        net_listening: !0,
                        web3_clientVersion: "WalletConnect/v1.x.x/javascript"
                    })), this.addProvider(new z), this.addProvider(new Z), this.addProvider(new D), this.addProvider(new $), this.addProvider(new F(this.configWallet())), this.addProvider({
                        handleRequest: async (t, e, n) => {
                            try {
                                const {
                                    error: e,
                                    result: r
                                } = await this.handleRequest(t);
                                n(e, r)
                            } catch (t) {
                                n(t)
                            }
                        },
                        setEngine: t => t
                    })
                }
                configWallet() {
                    return {
                        getAccounts: async t => {
                            try {
                                const e = (await this.getWalletConnector()).accounts;
                                e && e.length ? t(null, e) : t(new Error("Failed to get accounts"))
                            } catch (e) {
                                t(e)
                            }
                        },
                        processMessage: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signMessage([t.from, t.data]))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processPersonalMessage: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signPersonalMessage([t.data, t.from]))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processSignTransaction: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signTransaction(t))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processTransaction: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.sendTransaction(t))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processTypedMessage: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signTypedData([t.from, t.data]))
                            } catch (t) {
                                e(t)
                            }
                        }
                    }
                }
            }
        },
        "0c41e984580e524116b4": function(t, e, n) {
            "use strict";
            var r = n("9eb2556fc040a83dab6f");
            n.o(r, "isConstantTime") && n.d(e, "isConstantTime", function() {
                return r.isConstantTime
            })
        },
        "198f7ba10f4377e2e16a": function(t, e, n) {
            "use strict";

            function r(t) {
                let e = void 0;
                return "undefined" !== typeof window && "undefined" !== typeof window[t] && (e = window[t]), e
            }

            function i(t) {
                const e = r(t);
                if (!e) throw new Error(`${t} is not defined in Window`);
                return e
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0, e.getFromWindow = r, e.getFromWindowOrThrow = i, e.getDocumentOrThrow = function() {
                return i("document")
            }, e.getDocument = function() {
                return r("document")
            }, e.getNavigatorOrThrow = function() {
                return i("navigator")
            }, e.getNavigator = function() {
                return r("navigator")
            }, e.getLocationOrThrow = function() {
                return i("location")
            }, e.getLocation = function() {
                return r("location")
            }, e.getCryptoOrThrow = function() {
                return i("crypto")
            }, e.getCrypto = function() {
                return r("crypto")
            }, e.getLocalStorageOrThrow = function() {
                return i("localStorage")
            }, e.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        "1fc7a895df05a108c2a8": function(t, e, n) {
            "use strict";
            n("a0c48751213b248889bc"), n("a05c10c7e5140ee1bd7f"), n("a31648f867c49a37aec7"), n("67dce47e896869698b9d")
        },
        "2b218ee4c6057b669b06": function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return s
            }), n.d(e, "a", function() {
                return a
            }), n.d(e, "c", function() {
                return c
            }), n.d(e, "d", function() {
                return u
            }), n.d(e, "e", function() {
                return h
            }), n.d(e, "f", function() {
                return l
            });
            var r = n("9eb2556fc040a83dab6f"),
                i = n("6711edbe4cbf45aa2d4e");
            async function o(t, e = i.a) {
                return r.getSubtleCrypto().importKey("raw", t, function(t) {
                    return t === i.a ? {
                        length: i.b,
                        name: i.a
                    } : {
                        hash: {
                            name: i.f
                        },
                        name: i.e
                    }
                }(e), !0, function(t) {
                    return t === i.a ? [i.d, i.c] : [i.k, i.l]
                }(e))
            }
            async function s(t, e, n) {
                const s = r.getSubtleCrypto(),
                    a = await o(e, i.a),
                    c = await s.encrypt({
                        iv: t,
                        name: i.a
                    }, a, n);
                return new Uint8Array(c)
            }
            async function a(t, e, n) {
                const s = r.getSubtleCrypto(),
                    a = await o(e, i.a),
                    c = await s.decrypt({
                        iv: t,
                        name: i.a
                    }, a, n);
                return new Uint8Array(c)
            }
            async function c(t, e) {
                const n = r.getSubtleCrypto(),
                    s = await o(t, i.e),
                    a = await n.sign({
                        length: i.g,
                        name: i.e
                    }, s, e);
                return new Uint8Array(a)
            }
            async function u(t, e) {
                const n = r.getSubtleCrypto(),
                    s = await o(t, i.e),
                    a = await n.sign({
                        length: i.h,
                        name: i.e
                    }, s, e);
                return new Uint8Array(a)
            }
            async function h(t) {
                const e = r.getSubtleCrypto(),
                    n = await e.digest({
                        name: i.i
                    }, t);
                return new Uint8Array(n)
            }
            async function l(t) {
                const e = r.getSubtleCrypto(),
                    n = await e.digest({
                        name: i.j
                    }, t);
                return new Uint8Array(n)
            }
        },
        "2dc80ccfc355b63ee191": function(t, e, n) {
            "use strict";
            (function(t) {
                function n() {
                    return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
                }

                function r() {
                    return "undefined" !== typeof t && "undefined" !== typeof t.versions && "undefined" !== typeof t.versions.node
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = n, e.isNode = r, e.isBrowser = function() {
                    return !n() && !r()
                }
            }).call(this, n("26d59f808dff3e83c741"))
        },
        "38afa888baa570b01a25": function(t, e, n) {
            "use strict"
        },
        "3b4f63ab8f6ae839a790": function(t, e, n) {
            "use strict"
        },
        "46f027864f91c07f031a": function(t, e, n) {
            "use strict";
            var r = n("9eb2556fc040a83dab6f");
            n.o(r, "payloadId") && n.d(e, "payloadId", function() {
                return r.payloadId
            });
            r.isNode
        },
        "5536b05400a0c812f030": function(t, e, n) {
            "use strict"
        },
        "637d5be8fa7690179e19": function(t, e, n) {
            "use strict";
            n("2b218ee4c6057b669b06")
        },
        "6711edbe4cbf45aa2d4e": function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return 256
            }), n.d(e, "g", function() {
                return 256
            }), n.d(e, "a", function() {
                return "AES-CBC"
            }), n.d(e, "f", function() {
                return "SHA-256"
            }), n.d(e, "e", function() {
                return "HMAC"
            }), n.d(e, "i", function() {
                return "SHA-256"
            }), n.d(e, "j", function() {
                return "SHA-512"
            }), n.d(e, "h", function() {
                return 512
            }), n.d(e, "d", function() {
                return "encrypt"
            }), n.d(e, "c", function() {
                return "decrypt"
            }), n.d(e, "k", function() {
                return "sign"
            }), n.d(e, "l", function() {
                return "verify"
            })
        },
        "67dce47e896869698b9d": function(t, e) {},
        "6f8d0eaec0f9c8228193": function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n("9c0d875a4c2533237d5c"),
                    i = n("aa6970ed40eb853d4164");
                const o = "undefined" !== typeof t.WebSocket ? t.WebSocket : n("83c6db9181dae26bc764");
                e.a = class {
                    constructor(t) {
                        if (this.opts = t, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = t.protocol, this._version = t.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = t.subscriptions || [], this._netMonitor = t.netMonitor || new i.a, !t.url || "string" !== typeof t.url) throw new Error("Missing or invalid WebSocket url");
                        this._url = t.url, this._netMonitor.on("online", () => this._socketCreate())
                    }
                    set readyState(t) {}
                    get readyState() {
                        return this._socket ? this._socket.readyState : -1
                    }
                    set connecting(t) {}
                    get connecting() {
                        return 0 === this.readyState
                    }
                    set connected(t) {}
                    get connected() {
                        return 1 === this.readyState
                    }
                    set closing(t) {}
                    get closing() {
                        return 2 === this.readyState
                    }
                    set closed(t) {}
                    get closed() {
                        return 3 === this.readyState
                    }
                    open() {
                        this._socketCreate()
                    }
                    close() {
                        this._socketClose()
                    }
                    send(t, e, n) {
                        if (!e || "string" !== typeof e) throw new Error("Missing or invalid topic field");
                        this._socketSend({
                            topic: e,
                            type: "pub",
                            payload: t,
                            silent: !!n
                        })
                    }
                    subscribe(t) {
                        this._socketSend({
                            topic: t,
                            type: "sub",
                            payload: "",
                            silent: !0
                        })
                    }
                    on(t, e) {
                        this._events.push({
                            event: t,
                            callback: e
                        })
                    }
                    _socketCreate() {
                        if (this._nextSocket) return;
                        const t = function(t, e, n) {
                            var i, o;
                            const s = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?"),
                                a = Object(r.o)() ? {
                                    protocol: e,
                                    version: n,
                                    env: "browser",
                                    host: (null === (i = Object(r.l)()) || void 0 === i ? void 0 : i.host) || ""
                                } : {
                                    protocol: e,
                                    version: n,
                                    env: (null === (o = Object(r.g)()) || void 0 === o ? void 0 : o.name) || ""
                                },
                                c = Object(r.a)(Object(r.m)(s[1] || ""), a);
                            return s[0] + "?" + c
                        }(this._url, this._protocol, this._version);
                        if (this._nextSocket = new o(t), !this._nextSocket) throw new Error("Failed to create socket");
                        this._nextSocket.onmessage = (t => this._socketReceive(t)), this._nextSocket.onopen = (() => this._socketOpen()), this._nextSocket.onerror = (t => this._socketError(t)), this._nextSocket.onclose = (() => {
                            setTimeout(() => {
                                this._nextSocket = null, this._socketCreate()
                            }, 1e3)
                        })
                    }
                    _socketOpen() {
                        this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                    }
                    _socketClose() {
                        this._socket && (this._socket.onclose = (() => {}), this._socket.close())
                    }
                    _socketSend(t) {
                        const e = JSON.stringify(t);
                        this._socket && 1 === this._socket.readyState ? this._socket.send(e) : (this._setToQueue(t), this._socketCreate())
                    }
                    async _socketReceive(t) {
                        let e;
                        try {
                            e = JSON.parse(t.data)
                        } catch (t) {
                            return
                        }
                        if (this._socketSend({
                                topic: e.topic,
                                type: "ack",
                                payload: "",
                                silent: !0
                            }), this._socket && 1 === this._socket.readyState) {
                            const t = this._events.filter(t => "message" === t.event);
                            t && t.length && t.forEach(t => t.callback(e))
                        }
                    }
                    _socketError(t) {
                        const e = this._events.filter(t => "error" === t.event);
                        e && e.length && e.forEach(e => e.callback(t))
                    }
                    _queueSubscriptions() {
                        this._subscriptions.forEach(t => this._queue.push({
                            topic: t,
                            type: "sub",
                            payload: "",
                            silent: !0
                        })), this._subscriptions = this.opts.subscriptions || []
                    }
                    _setToQueue(t) {
                        this._queue.push(t)
                    }
                    _pushQueue() {
                        this._queue.forEach(t => this._socketSend(t)), this._queue = []
                    }
                }
            }).call(this, n("698d75b157f24ae829cc"))
        },
        "71cfc1f315b47cde0ac9": function(t, e, n) {
            "use strict";
            var r = Object.prototype.hasOwnProperty,
                i = "~";

            function o() {}

            function s(t, e, n) {
                this.fn = t, this.context = e, this.once = n || !1
            }

            function a(t, e, n, r, o) {
                if ("function" !== typeof n) throw new TypeError("The listener must be a function");
                var a = new s(n, r || t, o),
                    c = i ? i + e : e;
                return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], a] : t._events[c].push(a) : (t._events[c] = a, t._eventsCount++), t
            }

            function c(t, e) {
                0 === --t._eventsCount ? t._events = new o : delete t._events[e]
            }

            function u() {
                this._events = new o, this._eventsCount = 0
            }
            Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (i = !1)), u.prototype.eventNames = function() {
                var t, e, n = [];
                if (0 === this._eventsCount) return n;
                for (e in t = this._events) r.call(t, e) && n.push(i ? e.slice(1) : e);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }, u.prototype.listeners = function(t) {
                var e = i ? i + t : t,
                    n = this._events[e];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var r = 0, o = n.length, s = new Array(o); r < o; r++) s[r] = n[r].fn;
                return s
            }, u.prototype.listenerCount = function(t) {
                var e = i ? i + t : t,
                    n = this._events[e];
                return n ? n.fn ? 1 : n.length : 0
            }, u.prototype.emit = function(t, e, n, r, o, s) {
                var a = i ? i + t : t;
                if (!this._events[a]) return !1;
                var c, u, h = this._events[a],
                    l = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), l) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, e), !0;
                        case 3:
                            return h.fn.call(h.context, e, n), !0;
                        case 4:
                            return h.fn.call(h.context, e, n, r), !0;
                        case 5:
                            return h.fn.call(h.context, e, n, r, o), !0;
                        case 6:
                            return h.fn.call(h.context, e, n, r, o, s), !0
                    }
                    for (u = 1, c = new Array(l - 1); u < l; u++) c[u - 1] = arguments[u];
                    h.fn.apply(h.context, c)
                } else {
                    var d, f = h.length;
                    for (u = 0; u < f; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), l) {
                        case 1:
                            h[u].fn.call(h[u].context);
                            break;
                        case 2:
                            h[u].fn.call(h[u].context, e);
                            break;
                        case 3:
                            h[u].fn.call(h[u].context, e, n);
                            break;
                        case 4:
                            h[u].fn.call(h[u].context, e, n, r);
                            break;
                        default:
                            if (!c)
                                for (d = 1, c = new Array(l - 1); d < l; d++) c[d - 1] = arguments[d];
                            h[u].fn.apply(h[u].context, c)
                    }
                }
                return !0
            }, u.prototype.on = function(t, e, n) {
                return a(this, t, e, n, !1)
            }, u.prototype.once = function(t, e, n) {
                return a(this, t, e, n, !0)
            }, u.prototype.removeListener = function(t, e, n, r) {
                var o = i ? i + t : t;
                if (!this._events[o]) return this;
                if (!e) return c(this, o), this;
                var s = this._events[o];
                if (s.fn) s.fn !== e || r && !s.once || n && s.context !== n || c(this, o);
                else {
                    for (var a = 0, u = [], h = s.length; a < h; a++)(s[a].fn !== e || r && !s[a].once || n && s[a].context !== n) && u.push(s[a]);
                    u.length ? this._events[o] = 1 === u.length ? u[0] : u : c(this, o)
                }
                return this
            }, u.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = i ? i + t : t, this._events[e] && c(this, e)) : (this._events = new o, this._eventsCount = 0), this
            }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = i, u.EventEmitter = u, t.exports = u
        },
        "762e8d366718daea77af": function(t, e, n) {
            "use strict";
            (function(t) {
                function n() {
                    return (null === t || void 0 === t ? void 0 : t.crypto) || (null === t || void 0 === t ? void 0 : t.msCrypto) || {}
                }

                function r() {
                    const t = n();
                    return t.subtle || t.webkitSubtle
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = n, e.getSubtleCrypto = r, e.isBrowserCryptoAvailable = function() {
                    return !!n() && !!r()
                }
            }).call(this, n("698d75b157f24ae829cc"))
        },
        "83a18f028c56fff596eb": function(t, e, n) {
            "use strict";
            n.d(e, "c", function() {
                return i
            }), n.d(e, "a", function() {
                return o
            }), n.d(e, "b", function() {
                return s
            });
            var r = n("8e02181afbeb50c1f2e6");

            function i(t) {
                return r.c.includes(t)
            }

            function o(t) {
                return Object.keys(r.f).includes(t) ? r.f[t] : r.f[r.a]
            }

            function s(t) {
                const e = Object.values(r.f).find(e => e.code === t);
                return e || r.f[r.a]
            }
        },
        "83c6db9181dae26bc764": function(t, e, n) {
            "use strict";
            t.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        "847aa546db7eb295dfe1": function(t, e, n) {
            "use strict";
            n("8e02181afbeb50c1f2e6"), n("83a18f028c56fff596eb");
            var r = n("46f027864f91c07f031a");
            n.o(r, "payloadId") && n.d(e, "payloadId", function() {
                return r.payloadId
            });
            var i = n("f29a25d5bfd423f2a664");
            n.d(e, "payloadId", function() {
                return i.a
            });
            n("d7fcae4a97e86cfb85cb"), n("e33ef3b7e86e970924c4"), n("38afa888baa570b01a25"), n("3b4f63ab8f6ae839a790")
        },
        "8e02181afbeb50c1f2e6": function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return r
            }), n.d(e, "d", function() {
                return i
            }), n.d(e, "c", function() {
                return o
            }), n.d(e, "e", function() {
                return s
            }), n.d(e, "f", function() {
                return a
            }), n.d(e, "a", function() {
                return c
            });
            const r = "INTERNAL_ERROR",
                i = "SERVER_ERROR",
                o = [-32700, -32600, -32601, -32602, -32603],
                s = [-32e3, -32099],
                a = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [r]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [i]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                c = i
        },
        "974760a0202b668b6602": function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            });
            var r = n("2b218ee4c6057b669b06");
            n("be0f6685054aa67e44fc");
            async function i(t, e) {
                return await Object(r.c)(t, e)
            }
        },
        "9759726872ca38f19e62": function(t, e, n) {
            "use strict";
            var r = n("c7f1c0cdac97cc3ef578");
            n.d(e, "randomBytes", function() {
                return r.a
            });
            var i = n("dca915985e2bc759d006");
            n.d(e, "aesCbcDecrypt", function() {
                return i.a
            }), n.d(e, "aesCbcEncrypt", function() {
                return i.b
            });
            var o = n("974760a0202b668b6602");
            n.d(e, "hmacSha256Sign", function() {
                return o.a
            });
            n("637d5be8fa7690179e19"), n("be0f6685054aa67e44fc"), n("6711edbe4cbf45aa2d4e")
        },
        "9c0d875a4c2533237d5c": function(t, e, n) {
            "use strict";
            var r = n("dad8892f0e8663c767b8");
            const i = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
                o = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                s = {
                    1: "mainnet",
                    3: "ropsten",
                    4: "rinkeby",
                    5: "goerli",
                    42: "kovan"
                };
            var a = n("aa51af04892f73bab1a3"),
                c = n.n(a),
                u = n("f01094289b5a8d3964bd");

            function h(t) {
                return u.arrayToBuffer(new Uint8Array(t))
            }

            function l(t, e) {
                return u.arrayToHex(new Uint8Array(t), !e)
            }

            function d(t) {
                return u.bufferToArray(t).buffer
            }

            function f(t) {
                return u.hexToArray(t).buffer
            }

            function p(t, e) {
                const n = u.removeHexPrefix(u.sanitizeHex(new c.a(t).toString(16)));
                return e ? n : u.addHexPrefix(n)
            }
            var m = n("8b2ccb65063bab1e1f16");

            function g(t) {
                return u.sanitizeHex(t)
            }
            const w = n("847aa546db7eb295dfe1").payloadId;

            function _() {
                return ((t, e) => {
                    for (e = t = ""; t++ < 36; e += 51 * t & 52 ? (15 ^ t ? 8 ^ Math.random() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-");
                    return e
                })()
            }

            function b(t, e) {
                let n;
                const r = function(t, e) {
                    let n;
                    const r = s[t];
                    return r && (n = `https://${r}.infura.io/v3/${e}`), n
                }(t, e.infuraId);
                return e.custom && e.custom[t] ? n = e.custom[t] : r && (n = r), n
            }

            function v(t, e) {
                return u.isHexString(t, e)
            }

            function y(t) {
                return "undefined" !== typeof t.method
            }

            function M(t) {
                return "undefined" !== typeof t.result
            }

            function x(t) {
                return "undefined" !== typeof t.error
            }

            function k(t) {
                return "undefined" !== typeof t.event
            }

            function S(t) {
                return i.includes(t) || t.startsWith("wc_")
            }

            function O(t) {
                return !!t.method.startsWith("wc_") || !o.includes(t.method)
            }

            function I(t) {
                t = Object(u.removeHexPrefix)(t.toLowerCase());
                const e = Object(u.removeHexPrefix)(Object(m.keccak_256)((n = t, u.utf8ToBuffer(n))));
                var n;
                let r = "";
                for (let n = 0; n < t.length; n++) parseInt(e[n], 16) > 7 ? r += t[n].toUpperCase() : r += t[n];
                return Object(u.addHexPrefix)(r)
            }
            const C = t => !!t && ("0x" === t.toLowerCase().substring(0, 2) && (!!/^(0x)?[0-9a-f]{40}$/i.test(t) && (!(!/^(0x)?[0-9a-f]{40}$/.test(t) && !/^(0x)?[0-9A-F]{40}$/.test(t)) || t === I(t))));

            function T(t) {
                var e, n, r;
                return (r = t) && r.length && !v(t[0]) && (t[0] = (e = t[0], u.utf8ToHex(e, !n))), t
            }

            function E(t) {
                if ("undefined" !== typeof t.type && "0" !== t.type) return t;
                if ("undefined" === typeof t.from || !C(t.from)) throw new Error("Transaction object must include a valid 'from' value.");

                function e(t) {
                    let e = t;
                    var n;
                    return ("number" === typeof t || "string" === typeof t && ! function(t) {
                        return "" === t || "string" === typeof t && "" === t.trim()
                    }(t)) && (v(t) ? "string" === typeof t && (e = g(t)) : e = p(t)), "string" === typeof e && (n = e, e = u.removeHexLeadingZeros(u.addHexPrefix(n))), e
                }
                const n = {
                        from: g(t.from),
                        to: "undefined" === typeof t.to ? void 0 : g(t.to),
                        gasPrice: "undefined" === typeof t.gasPrice ? "" : e(t.gasPrice),
                        gas: "undefined" === typeof t.gas ? "undefined" === typeof t.gasLimit ? "" : e(t.gasLimit) : e(t.gas),
                        value: "undefined" === typeof t.value ? "" : e(t.value),
                        nonce: "undefined" === typeof t.nonce ? "" : e(t.nonce),
                        data: "undefined" === typeof t.data ? "" : g(t.data) || "0x"
                    },
                    r = ["gasPrice", "gas", "value", "nonce"];
                return Object.keys(n).forEach(t => {
                    ("undefined" === typeof n[t] || "string" === typeof n[t] && !n[t].trim().length) && r.includes(t) && delete n[t]
                }), n
            }

            function R(t) {
                const e = t.message || "Failed or Rejected Request";
                let n = -32e3;
                if (t && !t.code) switch (e) {
                    case "Parse error":
                        n = -32700;
                        break;
                    case "Invalid request":
                        n = -32600;
                        break;
                    case "Method not found":
                        n = -32601;
                        break;
                    case "Invalid params":
                        n = -32602;
                        break;
                    case "Internal error":
                        n = -32603;
                        break;
                    default:
                        n = -32e3
                }
                const r = {
                    code: n,
                    message: e
                };
                return t.data && (r.data = t.data), r
            }
            var q = n("a183126bcfc2ac59acc8");

            function j(t) {
                const e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
                return "undefined" !== typeof e ? t.substr(e) : ""
            }

            function A(t, e) {
                let n = N(t);
                return t = function(t) {
                    return q.stringify(t)
                }(n = Object.assign(Object.assign({}, n), e))
            }

            function N(t) {
                return q.parse(t)
            }

            function L(t) {
                return "undefined" !== typeof t.bridge
            }

            function B(t) {
                const e = t.indexOf(":"),
                    n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                    r = t.substring(0, e);
                const i = function(t) {
                    const e = t.split("@");
                    return {
                        handshakeTopic: e[0],
                        version: parseInt(e[1], 10)
                    }
                }(t.substring(e + 1, n));
                const o = function(t) {
                    const e = N(t);
                    return {
                        key: e.key || "",
                        bridge: e.bridge || ""
                    }
                }("undefined" !== typeof n ? t.substr(n) : "");
                return Object.assign(Object.assign({
                    protocol: r
                }, i), o)
            }
            n.d(e, "g", function() {
                return r.detectEnv
            }), n.d(e, "t", function() {
                return r.isMobile
            }), n.d(e, "o", function() {
                return r.isBrowser
            }), n.d(e, "j", function() {
                return r.getFromWindow
            }), n.d(e, "l", function() {
                return r.getLocation
            }), n.d(e, "i", function() {
                return r.getClientMeta
            }), n.d(e, "D", function() {
                return r.setLocal
            }), n.d(e, "k", function() {
                return r.getLocal
            }), n.d(e, "C", function() {
                return r.removeLocal
            }), n.d(e, "x", function() {
                return r.mobileLinkChoiceKey
            }), n.d(e, "E", function() {
                return o
            }), n.d(e, "b", function() {
                return h
            }), n.d(e, "c", function() {
                return l
            }), n.d(e, "d", function() {
                return d
            }), n.d(e, "e", function() {
                return f
            }), n.d(e, "f", function() {
                return p
            }), n.d(e, "y", function() {
                return T
            }), n.d(e, "z", function() {
                return E
            }), n.d(e, "B", function() {
                return w
            }), n.d(e, "F", function() {
                return _
            }), n.d(e, "n", function() {
                return b
            }), n.d(e, "h", function() {
                return R
            }), n.d(e, "w", function() {
                return L
            }), n.d(e, "A", function() {
                return B
            }), n.d(e, "m", function() {
                return j
            }), n.d(e, "a", function() {
                return A
            }), n.d(e, "q", function() {
                return y
            }), n.d(e, "s", function() {
                return M
            }), n.d(e, "r", function() {
                return x
            }), n.d(e, "p", function() {
                return k
            }), n.d(e, "u", function() {
                return S
            }), n.d(e, "v", function() {
                return O
            })
        },
        "9dd29b7b6572d5344207": function(t, e, n) {
            "use strict";
            (function(t) {
                var n = this && this.__spreadArrays || function() {
                    for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                    var r = Array(t),
                        i = 0;
                    for (e = 0; e < n; e++)
                        for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                    return r
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = function() {
                    return function(t, e, n) {
                        this.name = t, this.version = e, this.os = n, this.type = "browser"
                    }
                }();
                e.BrowserInfo = r;
                var i = function() {
                    return function(e) {
                        this.version = e, this.type = "node", this.name = "node", this.os = t.platform
                    }
                }();
                e.NodeInfo = i;
                var o = function() {
                    return function(t, e, n, r) {
                        this.name = t, this.version = e, this.os = n, this.bot = r, this.type = "bot-device"
                    }
                }();
                e.SearchBotDeviceInfo = o;
                var s = function() {
                    return function() {
                        this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                    }
                }();
                e.BotInfo = s;
                var a = function() {
                    return function() {
                        this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                    }
                }();
                e.ReactNativeInfo = a;
                var c = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                    u = 3,
                    h = [
                        ["aol", /AOLShield\/([0-9\._]+)/],
                        ["edge", /Edge\/([0-9\._]+)/],
                        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                        ["silk", /\bSilk\/([0-9._-]+)\b/],
                        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                        ["fxios", /FxiOS\/([0-9\.]+)/],
                        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                        ["ie", /MSIE\s(7\.0)/],
                        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                        ["android", /Android\s([0-9\.]+)/],
                        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                        ["safari", /Version\/([0-9\._]+).*Safari/],
                        ["facebook", /FBAV\/([0-9\.]+)/],
                        ["instagram", /Instagram\s([0-9\.]+)/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                        ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                    ],
                    l = [
                        ["iOS", /iP(hone|od|ad)/],
                        ["Android OS", /Android/],
                        ["BlackBerry OS", /BlackBerry|BB10/],
                        ["Windows Mobile", /IEMobile/],
                        ["Amazon OS", /Kindle/],
                        ["Windows 3.11", /Win16/],
                        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                        ["Windows 98", /(Windows 98)|(Win98)/],
                        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                        ["Windows Server 2003", /(Windows NT 5.2)/],
                        ["Windows Vista", /(Windows NT 6.0)/],
                        ["Windows 7", /(Windows NT 6.1)/],
                        ["Windows 8", /(Windows NT 6.2)/],
                        ["Windows 8.1", /(Windows NT 6.3)/],
                        ["Windows 10", /(Windows NT 10.0)/],
                        ["Windows ME", /Windows ME/],
                        ["Open BSD", /OpenBSD/],
                        ["Sun OS", /SunOS/],
                        ["Chrome OS", /CrOS/],
                        ["Linux", /(Linux)|(X11)/],
                        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                        ["QNX", /QNX/],
                        ["BeOS", /BeOS/],
                        ["OS/2", /OS\/2/]
                    ];

                function d(t) {
                    return "" !== t && h.reduce(function(e, n) {
                        var r = n[0],
                            i = n[1];
                        if (e) return e;
                        var o = i.exec(t);
                        return !!o && [r, o]
                    }, !1)
                }

                function f(t) {
                    var e = d(t);
                    if (!e) return null;
                    var i = e[0],
                        a = e[1];
                    if ("searchbot" === i) return new s;
                    var h = a[1] && a[1].split(/[._]/).slice(0, 3);
                    h ? h.length < u && (h = n(h, function(t) {
                        for (var e = [], n = 0; n < t; n++) e.push("0");
                        return e
                    }(u - h.length))) : h = [];
                    var l = h.join("."),
                        f = p(t),
                        m = c.exec(t);
                    return m && m[1] ? new o(i, l, f, m[1]) : new r(i, l, f)
                }

                function p(t) {
                    for (var e = 0, n = l.length; e < n; e++) {
                        var r = l[e],
                            i = r[0];
                        if (r[1].exec(t)) return i
                    }
                    return null
                }

                function m() {
                    return "undefined" !== typeof t && t.version ? new i(t.version.slice(1)) : null
                }
                e.detect = function(t) {
                    return t ? f(t) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new a : "undefined" !== typeof navigator ? f(navigator.userAgent) : m()
                }, e.browserName = function(t) {
                    var e = d(t);
                    return e ? e[0] : null
                }, e.parseUserAgent = f, e.detectOS = p, e.getNodeVersion = m
            }).call(this, n("26d59f808dff3e83c741"))
        },
        "9eb2556fc040a83dab6f": function(t, e, n) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
                    void 0 === r && (r = n), Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                } : function(t, e, n, r) {
                    void 0 === r && (r = n), t[r] = e[n]
                }),
                i = this && this.__exportStar || function(t, e) {
                    for (var n in t) "default" === n || e.hasOwnProperty(n) || r(e, t, n)
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), i(n("762e8d366718daea77af"), e), i(n("2dc80ccfc355b63ee191"), e)
        },
        a05c10c7e5140ee1bd7f: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            });
            class r {}
        },
        a0c48751213b248889bc: function(t, e) {},
        a183126bcfc2ac59acc8: function(t, e, n) {
            "use strict";
            const r = n("e04864d1ef480c7101e1"),
                i = n("7a7f98eb410a596bfa6e"),
                o = n("80521e4adfaa761cca91");

            function s(t) {
                if ("string" !== typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function a(t, e) {
                return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t
            }

            function c(t, e) {
                return e.decode ? i(t) : t
            }

            function u(t) {
                const e = t.indexOf("#");
                return -1 !== e && (t = t.slice(0, e)), t
            }

            function h(t) {
                const e = (t = u(t)).indexOf("?");
                return -1 === e ? "" : t.slice(e + 1)
            }

            function l(t, e) {
                return e.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()), t
            }

            function d(t, e) {
                s((e = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, e)).arrayFormatSeparator);
                const n = function(t) {
                        let e;
                        switch (t.arrayFormat) {
                            case "index":
                                return (t, n, r) => {
                                    e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === r[t] && (r[t] = {}), r[t][e[1]] = n) : r[t] = n
                                };
                            case "bracket":
                                return (t, n, r) => {
                                    e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e ? void 0 !== r[t] ? r[t] = [].concat(r[t], n) : r[t] = [n] : r[t] = n
                                };
                            case "comma":
                            case "separator":
                                return (e, n, r) => {
                                    const i = "string" === typeof n && n.split("").indexOf(t.arrayFormatSeparator) > -1 ? n.split(t.arrayFormatSeparator).map(e => c(e, t)) : null === n ? n : c(n, t);
                                    r[e] = i
                                };
                            default:
                                return (t, e, n) => {
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], e) : n[t] = e
                                }
                        }
                    }(e),
                    r = Object.create(null);
                if ("string" !== typeof t) return r;
                if (!(t = t.trim().replace(/^[?#&]/, ""))) return r;
                for (const i of t.split("&")) {
                    let [t, s] = o(e.decode ? i.replace(/\+/g, " ") : i, "=");
                    s = void 0 === s ? null : ["comma", "separator"].includes(e.arrayFormat) ? s : c(s, e), n(c(t, e), s, r)
                }
                for (const t of Object.keys(r)) {
                    const n = r[t];
                    if ("object" === typeof n && null !== n)
                        for (const t of Object.keys(n)) n[t] = l(n[t], e);
                    else r[t] = l(n, e)
                }
                return !1 === e.sort ? r : (!0 === e.sort ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce((t, e) => {
                    const n = r[e];
                    return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? t[e] = function t(e) {
                        return Array.isArray(e) ? e.sort() : "object" === typeof e ? t(Object.keys(e)).sort((t, e) => Number(t) - Number(e)).map(t => e[t]) : e
                    }(n) : t[e] = n, t
                }, Object.create(null))
            }
            e.extract = h, e.parse = d, e.stringify = ((t, e) => {
                if (!t) return "";
                s((e = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, e)).arrayFormatSeparator);
                const n = n => e.skipNull && (t => null === t || void 0 === t)(t[n]) || e.skipEmptyString && "" === t[n],
                    r = function(t) {
                        switch (t.arrayFormat) {
                            case "index":
                                return e => (n, r) => {
                                    const i = n.length;
                                    return void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [a(e, t), "[", i, "]"].join("")] : [...n, [a(e, t), "[", a(i, t), "]=", a(r, t)].join("")]
                                };
                            case "bracket":
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [a(e, t), "[]"].join("")] : [...n, [a(e, t), "[]=", a(r, t)].join("")];
                            case "comma":
                            case "separator":
                                return e => (n, r) => null === r || void 0 === r || 0 === r.length ? n : 0 === n.length ? [
                                    [a(e, t), "=", a(r, t)].join("")
                                ] : [
                                    [n, a(r, t)].join(t.arrayFormatSeparator)
                                ];
                            default:
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, a(e, t)] : [...n, [a(e, t), "=", a(r, t)].join("")]
                        }
                    }(e),
                    i = {};
                for (const e of Object.keys(t)) n(e) || (i[e] = t[e]);
                const o = Object.keys(i);
                return !1 !== e.sort && o.sort(e.sort), o.map(n => {
                    const i = t[n];
                    return void 0 === i ? "" : null === i ? a(n, e) : Array.isArray(i) ? i.reduce(r(n), []).join("&") : a(n, e) + "=" + a(i, e)
                }).filter(t => t.length > 0).join("&")
            }), e.parseUrl = ((t, e) => {
                e = Object.assign({
                    decode: !0
                }, e);
                const [n, r] = o(t, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: d(h(t), e)
                }, e && e.parseFragmentIdentifier && r ? {
                    fragmentIdentifier: c(r, e)
                } : {})
            }), e.stringifyUrl = ((t, n) => {
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                const r = u(t.url).split("?")[0] || "",
                    i = e.extract(t.url),
                    o = e.parse(i, {
                        sort: !1
                    }),
                    s = Object.assign(o, t.query);
                let c = e.stringify(s, n);
                c && (c = `?${c}`);
                let h = function(t) {
                    let e = "";
                    const n = t.indexOf("#");
                    return -1 !== n && (e = t.slice(n)), e
                }(t.url);
                return t.fragmentIdentifier && (h = `#${a(t.fragmentIdentifier,n)}`), `${r}${c}${h}`
            })
        },
        a31648f867c49a37aec7: function(t, e, n) {
            "use strict";
            n("a05c10c7e5140ee1bd7f")
        },
        aa51af04892f73bab1a3: function(t, e, n) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function r(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function i(t, e) {
                        t.super_ = e;
                        var n = function() {};
                        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                    }

                    function o(t, e, n) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (n = e, e = 10), this._init(t || 0, e || 10, n || "be"))
                    }
                    var s;
                    "object" === typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        s = n(16).Buffer
                    } catch (t) {}

                    function a(t, e, n) {
                        for (var r = 0, i = Math.min(t.length, n), o = e; o < i; o++) {
                            var s = t.charCodeAt(o) - 48;
                            r <<= 4, r |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s
                        }
                        return r
                    }

                    function c(t, e, n, r) {
                        for (var i = 0, o = Math.min(t.length, n), s = e; s < o; s++) {
                            var a = t.charCodeAt(s) - 48;
                            i *= r, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a
                        }
                        return i
                    }
                    o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" === typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return t.cmp(e) < 0 ? t : e
                    }, o.prototype._init = function(t, e, n) {
                        if ("number" === typeof t) return this._initNumber(t, e, n);
                        if ("object" === typeof t) return this._initArray(t, e, n);
                        "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                        var i = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), e, n)
                    }, o.prototype._initNumber = function(t, e, n) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n)
                    }, o.prototype._initArray = function(t, e, n) {
                        if (r("number" === typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var o, s, a = 0;
                        if ("be" === n)
                            for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                        else if ("le" === n)
                            for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                        return this.strip()
                    }, o.prototype._parseHex = function(t, e) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                        for (var n = 0; n < this.length; n++) this.words[n] = 0;
                        var r, i, o = 0;
                        for (n = t.length - 6, r = 0; n >= e; n -= 6) i = a(t, n, n + 6), this.words[r] |= i << o & 67108863, this.words[r + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, r++);
                        n + 6 !== e && (i = a(t, e, n + 6), this.words[r] |= i << o & 67108863, this.words[r + 1] |= i >>> 26 - o & 4194303), this.strip()
                    }, o.prototype._parseBase = function(t, e, n) {
                        this.words = [0], this.length = 1;
                        for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
                        r--, i = i / e | 0;
                        for (var o = t.length - n, s = o % r, a = Math.min(o, o - s) + n, u = 0, h = n; h < a; h += r) u = c(t, h, h + r, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 !== s) {
                            var l = 1;
                            for (u = c(t, h, t.length, e), h = 0; h < s; h++) l *= e;
                            this.imuln(l), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function d(t, e, n) {
                        n.negative = e.negative ^ t.negative;
                        var r = t.length + e.length | 0;
                        n.length = r, r = r - 1 | 0;
                        var i = 0 | t.words[0],
                            o = 0 | e.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            c = s / 67108864 | 0;
                        n.words[0] = a;
                        for (var u = 1; u < r; u++) {
                            for (var h = c >>> 26, l = 67108863 & c, d = Math.min(u, e.length - 1), f = Math.max(0, u - t.length + 1); f <= d; f++) {
                                var p = u - f | 0;
                                h += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[f]) + l) / 67108864 | 0, l = 67108863 & s
                            }
                            n.words[u] = 0 | l, c = 0 | h
                        }
                        return 0 !== c ? n.words[u] = 0 | c : n.length--, n.strip()
                    }
                    o.prototype.toString = function(t, e) {
                        var n;
                        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                            n = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    c = (16777215 & (a << i | o)).toString(16);
                                n = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? u[6 - c.length] + c + n : c + n, (i += 2) >= 26 && (i -= 26, s--)
                            }
                            for (0 !== o && (n = o.toString(16) + n); n.length % e !== 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var d = h[t],
                                f = l[t];
                            n = "";
                            var p = this.clone();
                            for (p.negative = 0; !p.isZero();) {
                                var m = p.modn(f).toString(t);
                                n = (p = p.idivn(f)).isZero() ? m + n : u[d - m.length] + m + n
                            }
                            for (this.isZero() && (n = "0" + n); n.length % e !== 0;) n = "0" + n;
                            return 0 !== this.negative && (n = "-" + n), n
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(t, e) {
                        return r("undefined" !== typeof s), this.toArrayLike(s, t, e)
                    }, o.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    }, o.prototype.toArrayLike = function(t, e, n) {
                        var i = this.byteLength(),
                            o = n || Math.max(1, i);
                        r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
                        var s, a, c = "le" === e,
                            u = new t(o),
                            h = this.clone();
                        if (c) {
                            for (a = 0; !h.isZero(); a++) s = h.andln(255), h.iushrn(8), u[a] = s;
                            for (; a < o; a++) u[a] = 0
                        } else {
                            for (a = 0; a < o - i; a++) u[a] = 0;
                            for (a = 0; !h.isZero(); a++) s = h.andln(255), h.iushrn(8), u[o - a - 1] = s
                        }
                        return u
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var e = t,
                            n = 0;
                        return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            n = 0;
                        return 0 === (8191 & e) && (n += 13, e >>>= 13), 0 === (127 & e) && (n += 7, e >>>= 7), 0 === (15 & e) && (n += 4, e >>>= 4), 0 === (3 & e) && (n += 2, e >>>= 2), 0 === (1 & e) && n++, n
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, e = 0; e < this.length; e++) {
                            var n = this._zeroBits(this.words[e]);
                            if (t += n, 26 !== n) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                        return this.strip()
                    }, o.prototype.ior = function(t) {
                        return r(0 === (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var e;
                        e = this.length > t.length ? t : this;
                        for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] & t.words[n];
                        return this.length = e.length, this.strip()
                    }, o.prototype.iand = function(t) {
                        return r(0 === (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var e, n;
                        this.length > t.length ? (e = this, n = t) : (e = t, n = this);
                        for (var r = 0; r < n.length; r++) this.words[r] = e.words[r] ^ n.words[r];
                        if (this !== e)
                            for (; r < e.length; r++) this.words[r] = e.words[r];
                        return this.length = e.length, this.strip()
                    }, o.prototype.ixor = function(t) {
                        return r(0 === (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        r("number" === typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            n = t % 26;
                        this._expand(e), n > 0 && e--;
                        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, e) {
                        r("number" === typeof t && t >= 0);
                        var n = t / 26 | 0,
                            i = t % 26;
                        return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip()
                    }, o.prototype.iadd = function(t) {
                        var e, n, r;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (n = this, r = t) : (n = t, r = this);
                        for (var i = 0, o = 0; o < r.length; o++) e = (0 | n.words[o]) + (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                        for (; 0 !== i && o < n.length; o++) e = (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                        if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;
                        else if (n !== this)
                            for (; o < n.length; o++) this.words[o] = n.words[o];
                        return this
                    }, o.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var n, r, i = this.cmp(t);
                        if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        i > 0 ? (n = this, r = t) : (n = t, r = this);
                        for (var o = 0, s = 0; s < r.length; s++) o = (e = (0 | n.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        for (; 0 !== o && s < n.length; s++) o = (e = (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                        if (0 === o && s < n.length && n !== this)
                            for (; s < n.length; s++) this.words[s] = n.words[s];
                        return this.length = Math.max(this.length, s), n !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var f = function(t, e, n) {
                        var r, i, o, s = t.words,
                            a = e.words,
                            c = n.words,
                            u = 0,
                            h = 0 | s[0],
                            l = 8191 & h,
                            d = h >>> 13,
                            f = 0 | s[1],
                            p = 8191 & f,
                            m = f >>> 13,
                            g = 0 | s[2],
                            w = 8191 & g,
                            _ = g >>> 13,
                            b = 0 | s[3],
                            v = 8191 & b,
                            y = b >>> 13,
                            M = 0 | s[4],
                            x = 8191 & M,
                            k = M >>> 13,
                            S = 0 | s[5],
                            O = 8191 & S,
                            I = S >>> 13,
                            C = 0 | s[6],
                            T = 8191 & C,
                            E = C >>> 13,
                            R = 0 | s[7],
                            q = 8191 & R,
                            j = R >>> 13,
                            A = 0 | s[8],
                            N = 8191 & A,
                            L = A >>> 13,
                            B = 0 | s[9],
                            W = 8191 & B,
                            P = B >>> 13,
                            U = 0 | a[0],
                            z = 8191 & U,
                            H = U >>> 13,
                            D = 0 | a[1],
                            F = 8191 & D,
                            $ = D >>> 13,
                            Z = 0 | a[2],
                            Q = 8191 & Z,
                            J = Z >>> 13,
                            K = 0 | a[3],
                            V = 8191 & K,
                            X = K >>> 13,
                            Y = 0 | a[4],
                            G = 8191 & Y,
                            tt = Y >>> 13,
                            et = 0 | a[5],
                            nt = 8191 & et,
                            rt = et >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            at = 0 | a[7],
                            ct = 8191 & at,
                            ut = at >>> 13,
                            ht = 0 | a[8],
                            lt = 8191 & ht,
                            dt = ht >>> 13,
                            ft = 0 | a[9],
                            pt = 8191 & ft,
                            mt = ft >>> 13;
                        n.negative = t.negative ^ e.negative, n.length = 19;
                        var gt = (u + (r = Math.imul(l, z)) | 0) + ((8191 & (i = (i = Math.imul(l, H)) + Math.imul(d, z) | 0)) << 13) | 0;
                        u = ((o = Math.imul(d, H)) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, r = Math.imul(p, z), i = (i = Math.imul(p, H)) + Math.imul(m, z) | 0, o = Math.imul(m, H);
                        var wt = (u + (r = r + Math.imul(l, F) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, $) | 0) + Math.imul(d, F) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, r = Math.imul(w, z), i = (i = Math.imul(w, H)) + Math.imul(_, z) | 0, o = Math.imul(_, H), r = r + Math.imul(p, F) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(m, F) | 0, o = o + Math.imul(m, $) | 0;
                        var _t = (u + (r = r + Math.imul(l, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, J) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, J) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, r = Math.imul(v, z), i = (i = Math.imul(v, H)) + Math.imul(y, z) | 0, o = Math.imul(y, H), r = r + Math.imul(w, F) | 0, i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, F) | 0, o = o + Math.imul(_, $) | 0, r = r + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, J) | 0;
                        var bt = (u + (r = r + Math.imul(l, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, X) | 0) + Math.imul(d, V) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, X) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, r = Math.imul(x, z), i = (i = Math.imul(x, H)) + Math.imul(k, z) | 0, o = Math.imul(k, H), r = r + Math.imul(v, F) | 0, i = (i = i + Math.imul(v, $) | 0) + Math.imul(y, F) | 0, o = o + Math.imul(y, $) | 0, r = r + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, J) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, J) | 0, r = r + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, X) | 0;
                        var vt = (u + (r = r + Math.imul(l, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, tt) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, r = Math.imul(O, z), i = (i = Math.imul(O, H)) + Math.imul(I, z) | 0, o = Math.imul(I, H), r = r + Math.imul(x, F) | 0, i = (i = i + Math.imul(x, $) | 0) + Math.imul(k, F) | 0, o = o + Math.imul(k, $) | 0, r = r + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, J) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, J) | 0, r = r + Math.imul(w, V) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(_, V) | 0, o = o + Math.imul(_, X) | 0, r = r + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, G) | 0, o = o + Math.imul(m, tt) | 0;
                        var yt = (u + (r = r + Math.imul(l, nt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, rt) | 0) + Math.imul(d, nt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, rt) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, r = Math.imul(T, z), i = (i = Math.imul(T, H)) + Math.imul(E, z) | 0, o = Math.imul(E, H), r = r + Math.imul(O, F) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(I, F) | 0, o = o + Math.imul(I, $) | 0, r = r + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, J) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, J) | 0, r = r + Math.imul(v, V) | 0, i = (i = i + Math.imul(v, X) | 0) + Math.imul(y, V) | 0, o = o + Math.imul(y, X) | 0, r = r + Math.imul(w, G) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(_, G) | 0, o = o + Math.imul(_, tt) | 0, r = r + Math.imul(p, nt) | 0, i = (i = i + Math.imul(p, rt) | 0) + Math.imul(m, nt) | 0, o = o + Math.imul(m, rt) | 0;
                        var Mt = (u + (r = r + Math.imul(l, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, st) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, r = Math.imul(q, z), i = (i = Math.imul(q, H)) + Math.imul(j, z) | 0, o = Math.imul(j, H), r = r + Math.imul(T, F) | 0, i = (i = i + Math.imul(T, $) | 0) + Math.imul(E, F) | 0, o = o + Math.imul(E, $) | 0, r = r + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, J) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, J) | 0, r = r + Math.imul(x, V) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(k, V) | 0, o = o + Math.imul(k, X) | 0, r = r + Math.imul(v, G) | 0, i = (i = i + Math.imul(v, tt) | 0) + Math.imul(y, G) | 0, o = o + Math.imul(y, tt) | 0, r = r + Math.imul(w, nt) | 0, i = (i = i + Math.imul(w, rt) | 0) + Math.imul(_, nt) | 0, o = o + Math.imul(_, rt) | 0, r = r + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
                        var xt = (u + (r = r + Math.imul(l, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ut) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, ut) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(N, z), i = (i = Math.imul(N, H)) + Math.imul(L, z) | 0, o = Math.imul(L, H), r = r + Math.imul(q, F) | 0, i = (i = i + Math.imul(q, $) | 0) + Math.imul(j, F) | 0, o = o + Math.imul(j, $) | 0, r = r + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, J) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, J) | 0, r = r + Math.imul(O, V) | 0, i = (i = i + Math.imul(O, X) | 0) + Math.imul(I, V) | 0, o = o + Math.imul(I, X) | 0, r = r + Math.imul(x, G) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(k, G) | 0, o = o + Math.imul(k, tt) | 0, r = r + Math.imul(v, nt) | 0, i = (i = i + Math.imul(v, rt) | 0) + Math.imul(y, nt) | 0, o = o + Math.imul(y, rt) | 0, r = r + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, r = r + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, ut) | 0) + Math.imul(m, ct) | 0, o = o + Math.imul(m, ut) | 0;
                        var kt = (u + (r = r + Math.imul(l, lt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, dt) | 0) + Math.imul(d, lt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, r = Math.imul(W, z), i = (i = Math.imul(W, H)) + Math.imul(P, z) | 0, o = Math.imul(P, H), r = r + Math.imul(N, F) | 0, i = (i = i + Math.imul(N, $) | 0) + Math.imul(L, F) | 0, o = o + Math.imul(L, $) | 0, r = r + Math.imul(q, Q) | 0, i = (i = i + Math.imul(q, J) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, J) | 0, r = r + Math.imul(T, V) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(E, V) | 0, o = o + Math.imul(E, X) | 0, r = r + Math.imul(O, G) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(I, G) | 0, o = o + Math.imul(I, tt) | 0, r = r + Math.imul(x, nt) | 0, i = (i = i + Math.imul(x, rt) | 0) + Math.imul(k, nt) | 0, o = o + Math.imul(k, rt) | 0, r = r + Math.imul(v, ot) | 0, i = (i = i + Math.imul(v, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, r = r + Math.imul(w, ct) | 0, i = (i = i + Math.imul(w, ut) | 0) + Math.imul(_, ct) | 0, o = o + Math.imul(_, ut) | 0, r = r + Math.imul(p, lt) | 0, i = (i = i + Math.imul(p, dt) | 0) + Math.imul(m, lt) | 0, o = o + Math.imul(m, dt) | 0;
                        var St = (u + (r = r + Math.imul(l, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, mt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(d, mt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(W, F), i = (i = Math.imul(W, $)) + Math.imul(P, F) | 0, o = Math.imul(P, $), r = r + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, J) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, J) | 0, r = r + Math.imul(q, V) | 0, i = (i = i + Math.imul(q, X) | 0) + Math.imul(j, V) | 0, o = o + Math.imul(j, X) | 0, r = r + Math.imul(T, G) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(E, G) | 0, o = o + Math.imul(E, tt) | 0, r = r + Math.imul(O, nt) | 0, i = (i = i + Math.imul(O, rt) | 0) + Math.imul(I, nt) | 0, o = o + Math.imul(I, rt) | 0, r = r + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, r = r + Math.imul(v, ct) | 0, i = (i = i + Math.imul(v, ut) | 0) + Math.imul(y, ct) | 0, o = o + Math.imul(y, ut) | 0, r = r + Math.imul(w, lt) | 0, i = (i = i + Math.imul(w, dt) | 0) + Math.imul(_, lt) | 0, o = o + Math.imul(_, dt) | 0;
                        var Ot = (u + (r = r + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, r = Math.imul(W, Q), i = (i = Math.imul(W, J)) + Math.imul(P, Q) | 0, o = Math.imul(P, J), r = r + Math.imul(N, V) | 0, i = (i = i + Math.imul(N, X) | 0) + Math.imul(L, V) | 0, o = o + Math.imul(L, X) | 0, r = r + Math.imul(q, G) | 0, i = (i = i + Math.imul(q, tt) | 0) + Math.imul(j, G) | 0, o = o + Math.imul(j, tt) | 0, r = r + Math.imul(T, nt) | 0, i = (i = i + Math.imul(T, rt) | 0) + Math.imul(E, nt) | 0, o = o + Math.imul(E, rt) | 0, r = r + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, r = r + Math.imul(x, ct) | 0, i = (i = i + Math.imul(x, ut) | 0) + Math.imul(k, ct) | 0, o = o + Math.imul(k, ut) | 0, r = r + Math.imul(v, lt) | 0, i = (i = i + Math.imul(v, dt) | 0) + Math.imul(y, lt) | 0, o = o + Math.imul(y, dt) | 0;
                        var It = (u + (r = r + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, r = Math.imul(W, V), i = (i = Math.imul(W, X)) + Math.imul(P, V) | 0, o = Math.imul(P, X), r = r + Math.imul(N, G) | 0, i = (i = i + Math.imul(N, tt) | 0) + Math.imul(L, G) | 0, o = o + Math.imul(L, tt) | 0, r = r + Math.imul(q, nt) | 0, i = (i = i + Math.imul(q, rt) | 0) + Math.imul(j, nt) | 0, o = o + Math.imul(j, rt) | 0, r = r + Math.imul(T, ot) | 0, i = (i = i + Math.imul(T, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, r = r + Math.imul(O, ct) | 0, i = (i = i + Math.imul(O, ut) | 0) + Math.imul(I, ct) | 0, o = o + Math.imul(I, ut) | 0, r = r + Math.imul(x, lt) | 0, i = (i = i + Math.imul(x, dt) | 0) + Math.imul(k, lt) | 0, o = o + Math.imul(k, dt) | 0;
                        var Ct = (u + (r = r + Math.imul(v, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, r = Math.imul(W, G), i = (i = Math.imul(W, tt)) + Math.imul(P, G) | 0, o = Math.imul(P, tt), r = r + Math.imul(N, nt) | 0, i = (i = i + Math.imul(N, rt) | 0) + Math.imul(L, nt) | 0, o = o + Math.imul(L, rt) | 0, r = r + Math.imul(q, ot) | 0, i = (i = i + Math.imul(q, st) | 0) + Math.imul(j, ot) | 0, o = o + Math.imul(j, st) | 0, r = r + Math.imul(T, ct) | 0, i = (i = i + Math.imul(T, ut) | 0) + Math.imul(E, ct) | 0, o = o + Math.imul(E, ut) | 0, r = r + Math.imul(O, lt) | 0, i = (i = i + Math.imul(O, dt) | 0) + Math.imul(I, lt) | 0, o = o + Math.imul(I, dt) | 0;
                        var Tt = (u + (r = r + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, mt) | 0) + Math.imul(k, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(k, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, r = Math.imul(W, nt), i = (i = Math.imul(W, rt)) + Math.imul(P, nt) | 0, o = Math.imul(P, rt), r = r + Math.imul(N, ot) | 0, i = (i = i + Math.imul(N, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, r = r + Math.imul(q, ct) | 0, i = (i = i + Math.imul(q, ut) | 0) + Math.imul(j, ct) | 0, o = o + Math.imul(j, ut) | 0, r = r + Math.imul(T, lt) | 0, i = (i = i + Math.imul(T, dt) | 0) + Math.imul(E, lt) | 0, o = o + Math.imul(E, dt) | 0;
                        var Et = (u + (r = r + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(I, mt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(W, ot), i = (i = Math.imul(W, st)) + Math.imul(P, ot) | 0, o = Math.imul(P, st), r = r + Math.imul(N, ct) | 0, i = (i = i + Math.imul(N, ut) | 0) + Math.imul(L, ct) | 0, o = o + Math.imul(L, ut) | 0, r = r + Math.imul(q, lt) | 0, i = (i = i + Math.imul(q, dt) | 0) + Math.imul(j, lt) | 0, o = o + Math.imul(j, dt) | 0;
                        var Rt = (u + (r = r + Math.imul(T, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(E, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, r = Math.imul(W, ct), i = (i = Math.imul(W, ut)) + Math.imul(P, ct) | 0, o = Math.imul(P, ut), r = r + Math.imul(N, lt) | 0, i = (i = i + Math.imul(N, dt) | 0) + Math.imul(L, lt) | 0, o = o + Math.imul(L, dt) | 0;
                        var qt = (u + (r = r + Math.imul(q, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(q, mt) | 0) + Math.imul(j, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(j, mt) | 0) + (i >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, r = Math.imul(W, lt), i = (i = Math.imul(W, dt)) + Math.imul(P, lt) | 0, o = Math.imul(P, dt);
                        var jt = (u + (r = r + Math.imul(N, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
                        u = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863;
                        var At = (u + (r = Math.imul(W, pt)) | 0) + ((8191 & (i = (i = Math.imul(W, mt)) + Math.imul(P, pt) | 0)) << 13) | 0;
                        return u = ((o = Math.imul(P, mt)) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, c[0] = gt, c[1] = wt, c[2] = _t, c[3] = bt, c[4] = vt, c[5] = yt, c[6] = Mt, c[7] = xt, c[8] = kt, c[9] = St, c[10] = Ot, c[11] = It, c[12] = Ct, c[13] = Tt, c[14] = Et, c[15] = Rt, c[16] = qt, c[17] = jt, c[18] = At, 0 !== u && (c[19] = u, n.length++), n
                    };

                    function p(t, e, n) {
                        return (new m).mulp(t, e, n)
                    }

                    function m(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (f = d), o.prototype.mulTo = function(t, e) {
                        var n = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? f(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, n) {
                            n.negative = e.negative ^ t.negative, n.length = t.length + e.length;
                            for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
                                var s = i;
                                i = 0;
                                for (var a = 67108863 & r, c = Math.min(o, e.length - 1), u = Math.max(0, o - t.length + 1); u <= c; u++) {
                                    var h = o - u,
                                        l = (0 | t.words[h]) * (0 | e.words[u]),
                                        d = 67108863 & l;
                                    a = 67108863 & (d = d + a | 0), i += (s = (s = s + (l / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863
                                }
                                n.words[o] = a, r = s, s = i
                            }
                            return 0 !== r ? n.words[o] = r : n.length--, n.strip()
                        }(this, t, e) : p(this, t, e)
                    }, m.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), n = o.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, n, t);
                        return e
                    }, m.prototype.revBin = function(t, e, n) {
                        if (0 === t || t === n - 1) return t;
                        for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1;
                        return r
                    }, m.prototype.permute = function(t, e, n, r, i, o) {
                        for (var s = 0; s < o; s++) r[s] = e[t[s]], i[s] = n[t[s]]
                    }, m.prototype.transform = function(t, e, n, r, i, o) {
                        this.permute(o, t, e, n, r, i);
                        for (var s = 1; s < i; s <<= 1)
                            for (var a = s << 1, c = Math.cos(2 * Math.PI / a), u = Math.sin(2 * Math.PI / a), h = 0; h < i; h += a)
                                for (var l = c, d = u, f = 0; f < s; f++) {
                                    var p = n[h + f],
                                        m = r[h + f],
                                        g = n[h + f + s],
                                        w = r[h + f + s],
                                        _ = l * g - d * w;
                                    w = l * w + d * g, g = _, n[h + f] = p + g, r[h + f] = m + w, n[h + f + s] = p - g, r[h + f + s] = m - w, f !== a && (_ = c * l - u * d, d = c * d + u * l, l = _)
                                }
                    }, m.prototype.guessLen13b = function(t, e) {
                        var n = 1 | Math.max(e, t),
                            r = 1 & n,
                            i = 0;
                        for (n = n / 2 | 0; n; n >>>= 1) i++;
                        return 1 << i + 1 + r
                    }, m.prototype.conjugate = function(t, e, n) {
                        if (!(n <= 1))
                            for (var r = 0; r < n / 2; r++) {
                                var i = t[r];
                                t[r] = t[n - r - 1], t[n - r - 1] = i, i = e[r], e[r] = -e[n - r - 1], e[n - r - 1] = -i
                            }
                    }, m.prototype.normalize13b = function(t, e) {
                        for (var n = 0, r = 0; r < e / 2; r++) {
                            var i = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + n;
                            t[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
                        }
                        return t
                    }, m.prototype.convert13b = function(t, e, n, i) {
                        for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], n[2 * s] = 8191 & o, o >>>= 13, n[2 * s + 1] = 8191 & o, o >>>= 13;
                        for (s = 2 * e; s < i; ++s) n[s] = 0;
                        r(0 === o), r(0 === (-8192 & o))
                    }, m.prototype.stub = function(t) {
                        for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
                        return e
                    }, m.prototype.mulp = function(t, e, n) {
                        var r = 2 * this.guessLen13b(t.length, e.length),
                            i = this.makeRBT(r),
                            o = this.stub(r),
                            s = new Array(r),
                            a = new Array(r),
                            c = new Array(r),
                            u = new Array(r),
                            h = new Array(r),
                            l = new Array(r),
                            d = n.words;
                        d.length = r, this.convert13b(t.words, t.length, s, r), this.convert13b(e.words, e.length, u, r), this.transform(s, o, a, c, r, i), this.transform(u, o, h, l, r, i);
                        for (var f = 0; f < r; f++) {
                            var p = a[f] * h[f] - c[f] * l[f];
                            c[f] = a[f] * l[f] + c[f] * h[f], a[f] = p
                        }
                        return this.conjugate(a, c, r), this.transform(a, c, d, o, r, i), this.conjugate(d, o, r), this.normalize13b(d, r), n.negative = t.negative ^ e.negative, n.length = t.length + e.length, n.strip()
                    }, o.prototype.mul = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, o.prototype.mulf = function(t) {
                        var e = new o(null);
                        return e.words = new Array(this.length + t.length), p(this, t, e)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        r("number" === typeof t), r(t < 67108864);
                        for (var e = 0, n = 0; n < this.length; n++) {
                            var i = (0 | this.words[n]) * t,
                                o = (67108863 & i) + (67108863 & e);
                            e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[n] = 67108863 & o
                        }
                        return 0 !== e && (this.words[n] = e, this.length++), this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
                                var r = n / 26 | 0,
                                    i = n % 26;
                                e[n] = (t.words[r] & 1 << i) >>> i
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new o(1);
                        for (var n = this, r = 0; r < e.length && 0 === e[r]; r++, n = n.sqr());
                        if (++r < e.length)
                            for (var i = n.sqr(); r < e.length; r++, i = i.sqr()) 0 !== e[r] && (n = n.mul(i));
                        return n
                    }, o.prototype.iushln = function(t) {
                        r("number" === typeof t && t >= 0);
                        var e, n = t % 26,
                            i = (t - n) / 26,
                            o = 67108863 >>> 26 - n << 26 - n;
                        if (0 !== n) {
                            var s = 0;
                            for (e = 0; e < this.length; e++) {
                                var a = this.words[e] & o,
                                    c = (0 | this.words[e]) - a << n;
                                this.words[e] = c | s, s = a >>> 26 - n
                            }
                            s && (this.words[e] = s, this.length++)
                        }
                        if (0 !== i) {
                            for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                            for (e = 0; e < i; e++) this.words[e] = 0;
                            this.length += i
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(t) {
                        return r(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, e, n) {
                        var i;
                        r("number" === typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            a = 67108863 ^ 67108863 >>> o << o,
                            c = n;
                        if (i -= s, i = Math.max(0, i), c) {
                            for (var u = 0; u < s; u++) c.words[u] = this.words[u];
                            c.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                        else this.words[0] = 0, this.length = 1;
                        var h = 0;
                        for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
                            var l = 0 | this.words[u];
                            this.words[u] = h << 26 - o | l >>> o, h = l & a
                        }
                        return c && 0 !== h && (c.words[c.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(t, e, n) {
                        return r(0 === this.negative), this.iushrn(t, e, n)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        r("number" === typeof t && t >= 0);
                        var e = t % 26,
                            n = (t - e) / 26,
                            i = 1 << e;
                        return !(this.length <= n) && !!(this.words[n] & i)
                    }, o.prototype.imaskn = function(t) {
                        r("number" === typeof t && t >= 0);
                        var e = t % 26,
                            n = (t - e) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                        if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
                            var i = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= i
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return r("number" === typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                        return this.length = Math.max(this.length, e + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (r("number" === typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, e, n) {
                        var i, o, s = t.length + n;
                        this._expand(s);
                        var a = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + n]) + a;
                            var c = (0 | t.words[i]) * e;
                            a = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[i + n] = 67108863 & o
                        }
                        for (; i < this.length - n; i++) a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;
                        if (0 === a) return this.strip();
                        for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(t, e) {
                        var n = (this.length, t.length),
                            r = this.clone(),
                            i = t,
                            s = 0 | i.words[i.length - 1];
                        0 !== (n = 26 - this._countBits(s)) && (i = i.ushln(n), r.iushln(n), s = 0 | i.words[i.length - 1]);
                        var a, c = r.length - i.length;
                        if ("mod" !== e) {
                            (a = new o(null)).length = c + 1, a.words = new Array(a.length);
                            for (var u = 0; u < a.length; u++) a.words[u] = 0
                        }
                        var h = r.clone()._ishlnsubmul(i, 1, c);
                        0 === h.negative && (r = h, a && (a.words[c] = 1));
                        for (var l = c - 1; l >= 0; l--) {
                            var d = 67108864 * (0 | r.words[i.length + l]) + (0 | r.words[i.length + l - 1]);
                            for (d = Math.min(d / s | 0, 67108863), r._ishlnsubmul(i, d, l); 0 !== r.negative;) d--, r.negative = 0, r._ishlnsubmul(i, 1, l), r.isZero() || (r.negative ^= 1);
                            a && (a.words[l] = d)
                        }
                        return a && a.strip(), r.strip(), "div" !== e && 0 !== n && r.iushrn(n), {
                            div: a || null,
                            mod: r
                        }
                    }, o.prototype.divmod = function(t, e, n) {
                        return r(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(t)), {
                            div: i,
                            mod: s
                        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
                            div: i,
                            mod: a.mod
                        }) : 0 !== (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(t)), {
                            div: a.div,
                            mod: s
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var i, s, a
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            r = t.ushrn(1),
                            i = t.andln(1),
                            o = n.cmp(r);
                        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, o.prototype.modn = function(t) {
                        r(t <= 67108863);
                        for (var e = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--) n = (e * n + (0 | this.words[i])) % t;
                        return n
                    }, o.prototype.idivn = function(t) {
                        r(t <= 67108863);
                        for (var e = 0, n = this.length - 1; n >= 0; n--) {
                            var i = (0 | this.words[n]) + 67108864 * e;
                            this.words[n] = i / t | 0, e = i % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            n = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var i = new o(1), s = new o(0), a = new o(0), c = new o(1), u = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++u;
                        for (var h = n.clone(), l = e.clone(); !e.isZero();) {
                            for (var d = 0, f = 1; 0 === (e.words[0] & f) && d < 26; ++d, f <<= 1);
                            if (d > 0)
                                for (e.iushrn(d); d-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(l)), i.iushrn(1), s.iushrn(1);
                            for (var p = 0, m = 1; 0 === (n.words[0] & m) && p < 26; ++p, m <<= 1);
                            if (p > 0)
                                for (n.iushrn(p); p-- > 0;)(a.isOdd() || c.isOdd()) && (a.iadd(h), c.isub(l)), a.iushrn(1), c.iushrn(1);
                            e.cmp(n) >= 0 ? (e.isub(n), i.isub(a), s.isub(c)) : (n.isub(e), a.isub(i), c.isub(s))
                        }
                        return {
                            a: a,
                            b: c,
                            gcd: n.iushln(u)
                        }
                    }, o.prototype._invmp = function(t) {
                        r(0 === t.negative), r(!t.isZero());
                        var e = this,
                            n = t.clone();
                        e = 0 !== e.negative ? e.umod(t) : e.clone();
                        for (var i, s = new o(1), a = new o(0), c = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                            for (var u = 0, h = 1; 0 === (e.words[0] & h) && u < 26; ++u, h <<= 1);
                            if (u > 0)
                                for (e.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(c), s.iushrn(1);
                            for (var l = 0, d = 1; 0 === (n.words[0] & d) && l < 26; ++l, d <<= 1);
                            if (l > 0)
                                for (n.iushrn(l); l-- > 0;) a.isOdd() && a.iadd(c), a.iushrn(1);
                            e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s))
                        }
                        return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var e = this.clone(),
                            n = t.clone();
                        e.negative = 0, n.negative = 0;
                        for (var r = 0; e.isEven() && n.isEven(); r++) e.iushrn(1), n.iushrn(1);
                        for (;;) {
                            for (; e.isEven();) e.iushrn(1);
                            for (; n.isEven();) n.iushrn(1);
                            var i = e.cmp(n);
                            if (i < 0) {
                                var o = e;
                                e = n, n = o
                            } else if (0 === i || 0 === n.cmpn(1)) break;
                            e.isub(n)
                        }
                        return n.iushln(r)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 === (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 === (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        r("number" === typeof t);
                        var e = t % 26,
                            n = (t - e) / 26,
                            i = 1 << e;
                        if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                        for (var o = i, s = n; 0 !== o && s < this.length; s++) {
                            var a = 0 | this.words[s];
                            o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                        }
                        return 0 !== o && (this.words[s] = o, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var e, n = t < 0;
                        if (0 !== this.negative && !n) return -1;
                        if (0 === this.negative && n) return 1;
                        if (this.strip(), this.length > 1) e = 1;
                        else {
                            n && (t = -t), r(t <= 67108863, "Number is too big");
                            var i = 0 | this.words[0];
                            e = i === t ? 0 : i < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }, o.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, n = this.length - 1; n >= 0; n--) {
                            var r = 0 | this.words[n],
                                i = 0 | t.words[n];
                            if (r !== i) {
                                r < i ? e = -1 : r > i && (e = 1);
                                break
                            }
                        }
                        return e
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new M(t)
                    }, o.prototype.toRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var g = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function w(t, e) {
                        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function _() {
                        w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function b() {
                        w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function v() {
                        w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function y() {
                        w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function M(t) {
                        if ("string" === typeof t) {
                            var e = o._prime(t);
                            this.m = e.p, this.prime = e
                        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function x(t) {
                        M.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    w.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, w.prototype.ireduce = function(t) {
                        var e, n = t;
                        do {
                            this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var r = e < this.n ? -1 : n.ucmp(this.p);
                        return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : n.strip(), n
                    }, w.prototype.split = function(t, e) {
                        t.iushrn(this.n, 0, e)
                    }, w.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, i(_, w), _.prototype.split = function(t, e) {
                        for (var n = Math.min(t.length, 9), r = 0; r < n; r++) e.words[r] = t.words[r];
                        if (e.length = n, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
                        var i = t.words[9];
                        for (e.words[e.length++] = 4194303 & i, r = 10; r < t.length; r++) {
                            var o = 0 | t.words[r];
                            t.words[r - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                        }
                        i >>>= 22, t.words[r - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                    }, _.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, n = 0; n < t.length; n++) {
                            var r = 0 | t.words[n];
                            e += 977 * r, t.words[n] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, i(b, w), i(v, w), i(y, w), y.prototype.imulK = function(t) {
                        for (var e = 0, n = 0; n < t.length; n++) {
                            var r = 19 * (0 | t.words[n]) + e,
                                i = 67108863 & r;
                            r >>>= 26, t.words[n] = i, e = r
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, o._prime = function(t) {
                        if (g[t]) return g[t];
                        var e;
                        if ("k256" === t) e = new _;
                        else if ("p224" === t) e = new b;
                        else if ("p192" === t) e = new v;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new y
                        }
                        return g[t] = e, e
                    }, M.prototype._verify1 = function(t) {
                        r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                    }, M.prototype._verify2 = function(t, e) {
                        r(0 === (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                    }, M.prototype.imod = function(t) {
                        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
                    }, M.prototype.neg = function(t) {
                        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                    }, M.prototype.add = function(t, e) {
                        this._verify2(t, e);
                        var n = t.add(e);
                        return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
                    }, M.prototype.iadd = function(t, e) {
                        this._verify2(t, e);
                        var n = t.iadd(e);
                        return n.cmp(this.m) >= 0 && n.isub(this.m), n
                    }, M.prototype.sub = function(t, e) {
                        this._verify2(t, e);
                        var n = t.sub(e);
                        return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this)
                    }, M.prototype.isub = function(t, e) {
                        this._verify2(t, e);
                        var n = t.isub(e);
                        return n.cmpn(0) < 0 && n.iadd(this.m), n
                    }, M.prototype.shl = function(t, e) {
                        return this._verify1(t), this.imod(t.ushln(e))
                    }, M.prototype.imul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.imul(e))
                    }, M.prototype.mul = function(t, e) {
                        return this._verify2(t, e), this.imod(t.mul(e))
                    }, M.prototype.isqr = function(t) {
                        return this.imul(t, t.clone())
                    }, M.prototype.sqr = function(t) {
                        return this.mul(t, t)
                    }, M.prototype.sqrt = function(t) {
                        if (t.isZero()) return t.clone();
                        var e = this.m.andln(3);
                        if (r(e % 2 === 1), 3 === e) {
                            var n = this.m.add(new o(1)).iushrn(2);
                            return this.pow(t, n)
                        }
                        for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                        r(!i.isZero());
                        var a = new o(1).toRed(this),
                            c = a.redNeg(),
                            u = this.m.subn(1).iushrn(1),
                            h = this.m.bitLength();
                        for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, u).cmp(c);) h.redIAdd(c);
                        for (var l = this.pow(h, i), d = this.pow(t, i.addn(1).iushrn(1)), f = this.pow(t, i), p = s; 0 !== f.cmp(a);) {
                            for (var m = f, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                            r(g < p);
                            var w = this.pow(l, new o(1).iushln(p - g - 1));
                            d = d.redMul(w), l = w.redSqr(), f = f.redMul(l), p = g
                        }
                        return d
                    }, M.prototype.invm = function(t) {
                        var e = t._invmp(this.m);
                        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                    }, M.prototype.pow = function(t, e) {
                        if (e.isZero()) return new o(1).toRed(this);
                        if (0 === e.cmpn(1)) return t.clone();
                        var n = new Array(16);
                        n[0] = new o(1).toRed(this), n[1] = t;
                        for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
                        var i = n[0],
                            s = 0,
                            a = 0,
                            c = e.bitLength() % 26;
                        for (0 === c && (c = 26), r = e.length - 1; r >= 0; r--) {
                            for (var u = e.words[r], h = c - 1; h >= 0; h--) {
                                var l = u >> h & 1;
                                i !== n[0] && (i = this.sqr(i)), 0 !== l || 0 !== s ? (s <<= 1, s |= l, (4 === ++a || 0 === r && 0 === h) && (i = this.mul(i, n[s]), a = 0, s = 0)) : a = 0
                            }
                            c = 26
                        }
                        return i
                    }, M.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, M.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, o.mont = function(t) {
                        return new x(t)
                    }, i(x, M), x.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, x.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, x.prototype.imul = function(t, e) {
                        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                        var n = t.imul(e),
                            r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = n.isub(r).iushrn(this.shift),
                            o = i;
                        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                    }, x.prototype.mul = function(t, e) {
                        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                        var n = t.mul(e),
                            r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            i = n.isub(r).iushrn(this.shift),
                            s = i;
                        return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                    }, x.prototype.invm = function(t) {
                        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, n("f586cf5b9f4b7719b2c1")(t))
        },
        aa6970ed40eb853d4164: function(t, e, n) {
            "use strict";
            e.a = class {
                constructor() {
                    this._eventEmitters = [], "undefined" !== typeof window && "undefined" !== typeof window.addEventListener && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")))
                }
                on(t, e) {
                    this._eventEmitters.push({
                        event: t,
                        callback: e
                    })
                }
                trigger(t) {
                    let e = [];
                    t && (e = this._eventEmitters.filter(e => e.event === t)), e.forEach(t => {
                        t.callback()
                    })
                }
            }
        },
        be0f6685054aa67e44fc: function(t, e, n) {
            "use strict";
            var r = n("0c41e984580e524116b4");
            n.o(r, "isConstantTime") && n.d(e, "isConstantTime", function() {
                return r.isConstantTime
            });
            n("5536b05400a0c812f030");
            var i = n("de572895ca531524a108");
            n.o(i, "isConstantTime") && n.d(e, "isConstantTime", function() {
                return i.isConstantTime
            });
            var o = n("ff8cee05717dfe8765c3");
            n.d(e, "isConstantTime", function() {
                return o.a
            })
        },
        c7f1c0cdac97cc3ef578: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return i
            });
            var r = n("9eb2556fc040a83dab6f");

            function i(t) {
                return r.getBrowerCrypto().getRandomValues(new Uint8Array(t))
            }
        },
        d7fcae4a97e86cfb85cb: function(t, e, n) {
            "use strict"
        },
        dad8892f0e8663c767b8: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("eb1289a1744bf035a27a"),
                i = n("198f7ba10f4377e2e16a"),
                o = n("9dd29b7b6572d5344207");

            function s(t) {
                return Object(o.detect)(t)
            }

            function a() {
                const t = s();
                return t && t.os ? t.os : void 0
            }

            function c() {
                const t = a();
                return !!t && t.toLowerCase().includes("android")
            }

            function u() {
                const t = a();
                return !!t && (t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
            }

            function h() {
                return !!a() && (c() || u())
            }

            function l() {
                const t = s();
                return !(!t || !t.name) && "node" === t.name.toLowerCase()
            }

            function d() {
                return !l() && !!_()
            }
            const f = i.getFromWindow,
                p = i.getFromWindowOrThrow,
                m = i.getDocumentOrThrow,
                g = i.getDocument,
                w = i.getNavigatorOrThrow,
                _ = i.getNavigator,
                b = i.getLocationOrThrow,
                v = i.getLocation,
                y = i.getCryptoOrThrow,
                M = i.getCrypto,
                x = i.getLocalStorageOrThrow,
                k = i.getLocalStorage;

            function S() {
                return r.getWindowMetadata()
            }
            const O = function(t) {
                    if ("string" !== typeof t) throw new Error(`Cannot safe json parse value of type ${typeof t}`);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                },
                I = function(t) {
                    return "string" === typeof t ? t : JSON.stringify(t)
                };

            function C(t, e) {
                const n = I(e),
                    r = k();
                r && r.setItem(t, n)
            }

            function T(t) {
                let e = null,
                    n = null;
                const r = k();
                return r && (n = r.getItem(t)), e = n ? O(n) : n
            }

            function E(t) {
                const e = k();
                e && e.removeItem(t)
            }
            const R = "WALLETCONNECT_DEEPLINK_CHOICE";

            function q(t, e) {
                const n = encodeURIComponent(t);
                return e.universalLink ? `${e.universalLink}/wc?uri=${n}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}` : ""
            }

            function j(t) {
                const e = t.href.split("?")[0];
                C(R, Object.assign(Object.assign({}, t), {
                    href: e
                }))
            }

            function A(t, e) {
                return t.filter(t => t.name.toLowerCase().includes(e.toLowerCase()))[0]
            }

            function N(t, e) {
                let n = t;
                return e && (n = e.map(e => A(t, e)).filter(Boolean)), n
            }
            const L = "https://registry.walletconnect.com";

            function B() {
                return L + "/api/v2/wallets"
            }

            function W() {
                return L + "/api/v2/dapps"
            }

            function P(t, e = "mobile") {
                var n;
                return {
                    name: t.name || "",
                    shortName: t.metadata.shortName || "",
                    color: t.metadata.colors.primary || "",
                    logo: null !== (n = t.image_url.sm) && void 0 !== n ? n : "",
                    universalLink: t[e].universal || "",
                    deepLink: t[e].native || ""
                }
            }

            function U(t, e = "mobile") {
                return Object.values(t).filter(t => !!t[e].universal || !!t[e].native).map(t => P(t, e))
            }
            n.d(e, "detectEnv", function() {
                return s
            }), n.d(e, "detectOS", function() {
                return a
            }), n.d(e, "isAndroid", function() {
                return c
            }), n.d(e, "isIOS", function() {
                return u
            }), n.d(e, "isMobile", function() {
                return h
            }), n.d(e, "isNode", function() {
                return l
            }), n.d(e, "isBrowser", function() {
                return d
            }), n.d(e, "getFromWindow", function() {
                return f
            }), n.d(e, "getFromWindowOrThrow", function() {
                return p
            }), n.d(e, "getDocumentOrThrow", function() {
                return m
            }), n.d(e, "getDocument", function() {
                return g
            }), n.d(e, "getNavigatorOrThrow", function() {
                return w
            }), n.d(e, "getNavigator", function() {
                return _
            }), n.d(e, "getLocationOrThrow", function() {
                return b
            }), n.d(e, "getLocation", function() {
                return v
            }), n.d(e, "getCryptoOrThrow", function() {
                return y
            }), n.d(e, "getCrypto", function() {
                return M
            }), n.d(e, "getLocalStorageOrThrow", function() {
                return x
            }), n.d(e, "getLocalStorage", function() {
                return k
            }), n.d(e, "getClientMeta", function() {
                return S
            }), n.d(e, "safeJsonParse", function() {
                return O
            }), n.d(e, "safeJsonStringify", function() {
                return I
            }), n.d(e, "setLocal", function() {
                return C
            }), n.d(e, "getLocal", function() {
                return T
            }), n.d(e, "removeLocal", function() {
                return E
            }), n.d(e, "mobileLinkChoiceKey", function() {
                return R
            }), n.d(e, "formatIOSMobile", function() {
                return q
            }), n.d(e, "saveMobileLinkInfo", function() {
                return j
            }), n.d(e, "getMobileRegistryEntry", function() {
                return A
            }), n.d(e, "getMobileLinkRegistry", function() {
                return N
            }), n.d(e, "getWalletRegistryUrl", function() {
                return B
            }), n.d(e, "getDappRegistryUrl", function() {
                return W
            }), n.d(e, "formatMobileRegistryEntry", function() {
                return P
            }), n.d(e, "formatMobileRegistry", function() {
                return U
            })
        },
        dca915985e2bc759d006: function(t, e, n) {
            "use strict";
            n.d(e, "b", function() {
                return i
            }), n.d(e, "a", function() {
                return o
            });
            var r = n("2b218ee4c6057b669b06");

            function i(t, e, n) {
                return Object(r.b)(t, e, n)
            }

            function o(t, e, n) {
                return Object(r.a)(t, e, n)
            }
        },
        de572895ca531524a108: function(t, e) {},
        e04864d1ef480c7101e1: function(t, e, n) {
            "use strict";
            t.exports = (t => encodeURIComponent(t).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`))
        },
        e33ef3b7e86e970924c4: function(t, e, n) {
            "use strict";
            n("1fc7a895df05a108c2a8")
        },
        eb1289a1744bf035a27a: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getWindowMetadata = void 0;
            const r = n("198f7ba10f4377e2e16a");
            e.getWindowMetadata = function() {
                let t, e;
                try {
                    t = r.getDocumentOrThrow(), e = r.getLocationOrThrow()
                } catch (t) {
                    return null
                }

                function n(...e) {
                    const n = t.getElementsByTagName("meta");
                    for (let t = 0; t < n.length; t++) {
                        const r = n[t],
                            i = ["itemprop", "property", "name"].map(t => r.getAttribute(t)).filter(t => !!t && e.includes(t));
                        if (i.length && i) {
                            const t = r.getAttribute("content");
                            if (t) return t
                        }
                    }
                    return ""
                }
                const i = function() {
                    let e = n("name", "og:site_name", "og:title", "twitter:title");
                    return e || (e = t.title), e
                }();
                return {
                    description: n("description", "og:description", "twitter:description", "keywords"),
                    url: e.origin,
                    icons: function() {
                        const n = t.getElementsByTagName("link"),
                            r = [];
                        for (let t = 0; t < n.length; t++) {
                            const i = n[t],
                                o = i.getAttribute("rel");
                            if (o && o.toLowerCase().indexOf("icon") > -1) {
                                const t = i.getAttribute("href");
                                if (t)
                                    if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                                        let n = e.protocol + "//" + e.host;
                                        if (0 === t.indexOf("/")) n += t;
                                        else {
                                            const r = e.pathname.split("/");
                                            r.pop(), n += r.join("/") + "/" + t
                                        }
                                        r.push(n)
                                    } else if (0 === t.indexOf("//")) {
                                    const n = e.protocol + t;
                                    r.push(n)
                                } else r.push(t)
                            }
                        }
                        return r
                    }(),
                    name: i
                }
            }
        },
        f01094289b5a8d3964bd: function(t, e, n) {
            "use strict";
            (function(t) {
                var r = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.removeHexLeadingZeros = e.sanitizeHex = e.addHexPrefix = e.removeHexPrefix = e.padRight = e.padLeft = e.sanitizeBytes = e.swapHex = e.swapBytes = e.splitBytes = e.calcByteLength = e.trimRight = e.trimLeft = e.concatArrays = e.concatBuffers = e.getEncoding = e.getType = e.isArrayBuffer = e.isTypedArray = e.isBuffer = e.isHexString = e.isBinaryString = e.binaryToNumber = e.binaryToUtf8 = e.binaryToHex = e.binaryToArray = e.binaryToBuffer = e.numberToBinary = e.numberToUtf8 = e.numberToHex = e.numberToArray = e.numberToBuffer = e.utf8ToBinary = e.utf8ToNumber = e.utf8ToHex = e.utf8ToArray = e.utf8ToBuffer = e.hexToBinary = e.hexToNumber = e.hexToUtf8 = e.hexToArray = e.hexToBuffer = e.arrayToBinary = e.arrayToNumber = e.arrayToUtf8 = e.arrayToHex = e.arrayToBuffer = e.bufferToBinary = e.bufferToNumber = e.bufferToUtf8 = e.bufferToHex = e.bufferToArray = void 0;
                const i = r(n("d3df5bc4c4cd92c1bffc")),
                    o = r(n("0fde0385e5fa3b2d9e59")),
                    s = "hex",
                    a = "utf8",
                    c = "binary",
                    u = "buffer",
                    h = "array",
                    l = "typed-array",
                    d = "array-buffer",
                    f = "0";

                function p(t) {
                    return new Uint8Array(t)
                }

                function m(t, e = !1) {
                    const n = t.toString(s);
                    return e ? D(n) : n
                }

                function g(t) {
                    return t.toString(a)
                }

                function w(t) {
                    return t.readUIntBE(0, t.length)
                }

                function _(t) {
                    return o.default(t)
                }

                function b(t, e = !1) {
                    return m(_(t), e)
                }

                function v(t) {
                    return g(_(t))
                }

                function y(t) {
                    return w(_(t))
                }

                function M(t) {
                    return Array.from(t).map(C).join("")
                }

                function x(e) {
                    return t.from(H(e), s)
                }

                function k(t) {
                    return p(x(t))
                }

                function S(t) {
                    return M(k(t))
                }

                function O(e) {
                    return t.from(e, a)
                }

                function I(t) {
                    return p(O(t))
                }

                function C(t) {
                    return U((t >>> 0).toString(2))
                }

                function T(t) {
                    return _(E(t))
                }

                function E(t) {
                    return new Uint8Array(W(t).map(t => parseInt(t, 2)))
                }

                function R(t, e) {
                    return b(E(t), e)
                }

                function q(t) {
                    return !("string" !== typeof t || !new RegExp(/^[01]+$/).test(t)) && t.length % 8 === 0
                }

                function j(t, e) {
                    return !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e)
                }

                function A(e) {
                    return t.isBuffer(e)
                }

                function N(t) {
                    return i.default.strict(t) && !A(t)
                }

                function L(t) {
                    return !N(t) && !A(t) && "undefined" !== typeof t.byteLength
                }

                function B(t, e = 8) {
                    const n = t % e;
                    return n ? (t - n) / e * e + e : t
                }

                function W(t, e = 8) {
                    const n = U(t).match(new RegExp(`.{${e}}`, "gi"));
                    return Array.from(n || [])
                }

                function P(t) {
                    return W(t).map(F).join("")
                }

                function U(t, e = 8, n = f) {
                    return z(t, B(t.length, e), n)
                }

                function z(t, e, n = f) {
                    return $(t, e, !0, n)
                }

                function H(t) {
                    return t.replace(/^0x/, "")
                }

                function D(t) {
                    return t.startsWith("0x") ? t : `0x${t}`
                }

                function F(t) {
                    return t.split("").reverse().join("")
                }

                function $(t, e, n, r = f) {
                    const i = e - t.length;
                    let o = t;
                    if (i > 0) {
                        const e = r.repeat(i);
                        o = n ? e + t : t + e
                    }
                    return o
                }
                e.bufferToArray = p, e.bufferToHex = m, e.bufferToUtf8 = g, e.bufferToNumber = w, e.bufferToBinary = function(t) {
                    return M(p(t))
                }, e.arrayToBuffer = _, e.arrayToHex = b, e.arrayToUtf8 = v, e.arrayToNumber = y, e.arrayToBinary = M, e.hexToBuffer = x, e.hexToArray = k, e.hexToUtf8 = function(t) {
                    return g(x(t))
                }, e.hexToNumber = function(t) {
                    return y(k(t))
                }, e.hexToBinary = S, e.utf8ToBuffer = O, e.utf8ToArray = I, e.utf8ToHex = function(t, e = !1) {
                    return m(O(t), e)
                }, e.utf8ToNumber = function(t) {
                    const e = parseInt(t, 10);
                    return function(t, e) {
                        if (!t) throw new Error(e)
                    }(! function(t) {
                        return "undefined" === typeof t
                    }(e), "Number can only safely store up to 53 bits"), e
                }, e.utf8ToBinary = function(t) {
                    return M(I(t))
                }, e.numberToBuffer = function(t) {
                    return T(C(t))
                }, e.numberToArray = function(t) {
                    return E(C(t))
                }, e.numberToHex = function(t, e) {
                    return R(C(t), e)
                }, e.numberToUtf8 = function(t) {
                    return `${t}`
                }, e.numberToBinary = C, e.binaryToBuffer = T, e.binaryToArray = E, e.binaryToHex = R, e.binaryToUtf8 = function(t) {
                    return v(E(t))
                }, e.binaryToNumber = function(t) {
                    return y(E(t))
                }, e.isBinaryString = q, e.isHexString = j, e.isBuffer = A, e.isTypedArray = N, e.isArrayBuffer = L, e.getType = function(t) {
                    return A(t) ? u : N(t) ? l : L(t) ? d : Array.isArray(t) ? h : typeof t
                }, e.getEncoding = function(t) {
                    return q(t) ? c : j(t) ? s : a
                }, e.concatBuffers = function(...e) {
                    return t.concat(e)
                }, e.concatArrays = function(...t) {
                    let e = [];
                    return t.forEach(t => e = e.concat(Array.from(t))), new Uint8Array([...e])
                }, e.trimLeft = function(t, e) {
                    const n = t.length - e;
                    return n > 0 && (t = t.slice(n)), t
                }, e.trimRight = function(t, e) {
                    return t.slice(0, e)
                }, e.calcByteLength = B, e.splitBytes = W, e.swapBytes = P, e.swapHex = function(t) {
                    return R(P(S(t)))
                }, e.sanitizeBytes = U, e.padLeft = z, e.padRight = function(t, e, n = f) {
                    return $(t, e, !1, n)
                }, e.removeHexPrefix = H, e.addHexPrefix = D, e.sanitizeHex = function(t) {
                    return (t = U(t = H(t), 2)) && (t = D(t)), t
                }, e.removeHexLeadingZeros = function(t) {
                    const e = t.startsWith("0x");
                    return t = (t = H(t)).startsWith(f) ? t.substring(1) : t, e ? D(t) : t
                }
            }).call(this, n("4de17b50d35d24f9c74a").Buffer)
        },
        f29a25d5bfd423f2a664: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return r
            });
            n("83a18f028c56fff596eb"), n("8e02181afbeb50c1f2e6");

            function r() {
                return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3))
            }
        },
        fc96f6f2df105f972d5d: function(t, e, n) {
            (function(e) {
                function r(t) {
                    return t && "object" === typeof t && "default" in t ? t.default : t
                }
                var i = n("dad8892f0e8663c767b8"),
                    o = r(n("2745d39c4812a9ff6886")),
                    s = r(n("f607f491151ddcb274e0")),
                    a = n("53e28e92d1187066acdd");
                var c = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n';
                "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" !== typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
                var u = "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
                    h = "WalletConnect",
                    l = 300,
                    d = "rgb(64, 153, 255)",
                    f = "walletconnect-wrapper",
                    p = "walletconnect-style-sheet",
                    m = "walletconnect-qrcode-modal",
                    g = "walletconnect-qrcode-close",
                    w = "walletconnect-qrcode-text",
                    _ = "walletconnect-connect-button";

                function b(t) {
                    return a.createElement("div", {
                        className: "walletconnect-modal__header"
                    }, a.createElement("img", {
                        src: u,
                        className: "walletconnect-modal__headerLogo"
                    }), a.createElement("p", null, h), a.createElement("div", {
                        className: "walletconnect-modal__close__wrapper",
                        onClick: t.onClose
                    }, a.createElement("div", {
                        id: g,
                        className: "walletconnect-modal__close__icon"
                    }, a.createElement("div", {
                        className: "walletconnect-modal__close__line1"
                    }), a.createElement("div", {
                        className: "walletconnect-modal__close__line2"
                    }))))
                }

                function v(t) {
                    return a.createElement("a", {
                        className: "walletconnect-connect__button",
                        href: t.href,
                        id: _ + "-" + t.name,
                        onClick: t.onClick,
                        rel: "noopener noreferrer",
                        style: {
                            backgroundColor: t.color
                        },
                        target: "_blank"
                    }, t.name)
                }
                var y = "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";

                function M(t) {
                    var e = t.color,
                        n = t.href,
                        r = t.name,
                        i = t.logo,
                        o = t.onClick;
                    return a.createElement("a", {
                        className: "walletconnect-modal__base__row",
                        href: n,
                        onClick: o,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, a.createElement("h3", {
                        className: "walletconnect-modal__base__row__h3"
                    }, r), a.createElement("div", {
                        className: "walletconnect-modal__base__row__right"
                    }, a.createElement("div", {
                        className: "walletconnect-modal__base__row__right__app-icon",
                        style: {
                            background: "url('" + i + "') " + e,
                            backgroundSize: "100%"
                        }
                    }), a.createElement("img", {
                        src: y,
                        className: "walletconnect-modal__base__row__right__caret"
                    })))
                }

                function x(t) {
                    var e = t.color,
                        n = t.href,
                        r = t.name,
                        i = t.logo,
                        o = t.onClick,
                        s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
                    return a.createElement("a", {
                        className: "walletconnect-connect__button__icon_anchor",
                        href: n,
                        onClick: o,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, a.createElement("div", {
                        className: "walletconnect-connect__button__icon",
                        style: {
                            background: "url('" + i + "') " + e,
                            backgroundSize: "100%"
                        }
                    }), a.createElement("div", {
                        style: {
                            fontSize: s
                        },
                        className: "walletconnect-connect__button__text"
                    }, r))
                }
                var k = 5,
                    S = 12;

                function O(t) {
                    var e = i.isAndroid(),
                        n = a.useState(""),
                        r = n[0],
                        o = n[1],
                        s = a.useState(""),
                        c = s[0],
                        u = s[1],
                        h = a.useState(1),
                        l = h[0],
                        f = h[1],
                        p = c ? t.links.filter(function(t) {
                            return t.name.toLowerCase().includes(c.toLowerCase())
                        }) : t.links,
                        m = t.errorMessage,
                        g = c || p.length > k,
                        _ = Math.ceil(p.length / S),
                        b = [(l - 1) * S + 1, l * S],
                        y = p.length ? p.filter(function(t, e) {
                            return e + 1 >= b[0] && e + 1 <= b[1]
                        }) : [],
                        O = !(e || !(_ > 1)),
                        I = void 0;
                    return a.createElement("div", null, a.createElement("p", {
                        id: w,
                        className: "walletconnect-qrcode__text"
                    }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && a.createElement("input", {
                        className: "walletconnect-search__input",
                        placeholder: "Search",
                        value: r,
                        onChange: function(t) {
                            o(t.target.value), clearTimeout(I), t.target.value ? I = setTimeout(function() {
                                u(t.target.value), f(1)
                            }, 1e3) : (o(""), u(""), f(1))
                        }
                    }), a.createElement("div", {
                        className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : g && p.length ? "__wrap" : "")
                    }, e ? a.createElement(v, {
                        name: t.text.connect,
                        color: d,
                        href: t.uri,
                        onClick: a.useCallback(function() {
                            i.saveMobileLinkInfo({
                                name: "Unknown",
                                href: t.uri
                            })
                        }, [])
                    }) : y.length ? y.map(function(e) {
                        var n = e.color,
                            r = e.name,
                            o = e.shortName,
                            s = e.logo,
                            c = i.formatIOSMobile(t.uri, e),
                            u = a.useCallback(function() {
                                i.saveMobileLinkInfo({
                                    name: r,
                                    href: c
                                })
                            }, [y]);
                        return g ? a.createElement(x, {
                            color: n,
                            href: c,
                            name: o || r,
                            logo: s,
                            onClick: u
                        }) : a.createElement(M, {
                            color: n,
                            href: c,
                            name: r,
                            logo: s,
                            onClick: u
                        })
                    }) : a.createElement(a.Fragment, null, a.createElement("p", null, m.length ? t.errorMessage : t.links.length && !p.length ? t.text.no_wallets_found : t.text.loading))), O && a.createElement("div", {
                        className: "walletconnect-modal__footer"
                    }, Array(_).fill(0).map(function(t, e) {
                        var n = e + 1,
                            r = l === n;
                        return a.createElement("a", {
                            style: {
                                margin: "auto 10px",
                                fontWeight: r ? "bold" : "normal"
                            },
                            onClick: function() {
                                return f(n)
                            }
                        }, n)
                    })))
                }

                function I(t) {
                    var e = !!t.message.trim();
                    return a.createElement("div", {
                        className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
                    }, t.message)
                }
                var C = function(t) {
                    try {
                        var e = "";
                        return Promise.resolve(o.toString(t, {
                            margin: 0,
                            type: "svg"
                        })).then(function(t) {
                            return "string" === typeof t && (e = t.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e
                        })
                    } catch (t) {
                        return Promise.reject(t)
                    }
                };

                function T(t) {
                    var e = a.useState(""),
                        n = e[0],
                        r = e[1],
                        i = a.useState(""),
                        o = i[0],
                        c = i[1];
                    a.useEffect(function() {
                        try {
                            return Promise.resolve(C(t.uri)).then(function(t) {
                                c(t)
                            })
                        } catch (t) {
                            Promise.reject(t)
                        }
                    }, []);
                    return a.createElement("div", null, a.createElement("p", {
                        id: w,
                        className: "walletconnect-qrcode__text"
                    }, t.text.scan_qrcode_with_wallet), a.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }), a.createElement("div", {
                        className: "walletconnect-modal__footer"
                    }, a.createElement("a", {
                        onClick: function() {
                            s(t.uri) ? (r(t.text.copied_to_clipboard), setInterval(function() {
                                return r("")
                            }, 1200)) : (r("Error"), setInterval(function() {
                                return r("")
                            }, 1200))
                        }
                    }, t.text.copy_to_clipboard)), a.createElement(I, {
                        message: n
                    }))
                }

                function E(t) {
                    var e = i.isAndroid(),
                        n = i.isMobile(),
                        r = n ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0,
                        o = a.useState(!1),
                        s = o[0],
                        c = o[1],
                        u = a.useState(!1),
                        h = u[0],
                        l = u[1],
                        d = a.useState(!n),
                        f = d[0],
                        p = d[1],
                        g = {
                            mobile: n,
                            text: t.text,
                            uri: t.uri,
                            qrcodeModalOptions: t.qrcodeModalOptions
                        },
                        w = a.useState(""),
                        _ = w[0],
                        v = w[1],
                        y = a.useState(!1),
                        M = y[0],
                        x = y[1],
                        k = a.useState([]),
                        S = k[0],
                        I = k[1],
                        C = a.useState(""),
                        E = C[0],
                        R = C[1],
                        q = function() {
                            h || s || r && !r.length || S.length > 0 || a.useEffect(function() {
                                ! function() {
                                    try {
                                        if (e) return Promise.resolve();
                                        c(!0);
                                        var o = function(t, e) {
                                            try {
                                                var n = t()
                                            } catch (t) {
                                                return e(t)
                                            }
                                            return n && n.then ? n.then(void 0, e) : n
                                        }(function() {
                                            var e = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : i.getWalletRegistryUrl();
                                            return Promise.resolve(fetch(e)).then(function(e) {
                                                return Promise.resolve(e.json()).then(function(e) {
                                                    var o = e.listings,
                                                        s = n ? "mobile" : "desktop",
                                                        a = i.getMobileLinkRegistry(i.formatMobileRegistry(o, s), r);
                                                    c(!1), l(!0), R(a.length ? "" : t.text.no_supported_wallets), I(a);
                                                    var u = 1 === a.length;
                                                    u && (v(i.formatIOSMobile(t.uri, a[0])), p(!0)), x(u)
                                                })
                                            })
                                        }, function(e) {
                                            c(!1), l(!0), R(t.text.something_went_wrong), console.error(e)
                                        });
                                        Promise.resolve(o && o.then ? o.then(function() {}) : void 0)
                                    } catch (t) {
                                        return Promise.reject(t)
                                    }
                                }()
                            })
                        };
                    q();
                    var j = n ? f : !f;
                    return a.createElement("div", {
                        id: m,
                        className: "walletconnect-qrcode__base animated fadeIn"
                    }, a.createElement("div", {
                        className: "walletconnect-modal__base"
                    }, a.createElement(b, {
                        onClose: t.onClose
                    }), M && f ? a.createElement("div", {
                        className: "walletconnect-modal__single_wallet"
                    }, a.createElement("a", {
                        onClick: function() {
                            return i.saveMobileLinkInfo({
                                name: S[0].name,
                                href: _
                            })
                        },
                        href: _,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, t.text.connect_with + " " + (M ? S[0].name : "") + " \u203a")) : e || s || !s && S.length ? a.createElement("div", {
                        className: "walletconnect-modal__mobile__toggle" + (j ? " right__selected" : "")
                    }, a.createElement("div", {
                        className: "walletconnect-modal__mobile__toggle_selector"
                    }), n ? a.createElement(a.Fragment, null, a.createElement("a", {
                        onClick: function() {
                            return p(!1), q()
                        }
                    }, t.text.mobile), a.createElement("a", {
                        onClick: function() {
                            return p(!0)
                        }
                    }, t.text.qrcode)) : a.createElement(a.Fragment, null, a.createElement("a", {
                        onClick: function() {
                            return p(!0)
                        }
                    }, t.text.qrcode), a.createElement("a", {
                        onClick: function() {
                            return p(!1), q()
                        }
                    }, t.text.desktop))) : null, a.createElement("div", null, f || !e && !s && !S.length ? a.createElement(T, Object.assign({}, g)) : a.createElement(O, Object.assign({}, g, {
                        links: S,
                        errorMessage: E
                    })))))
                }
                var R = {
                    de: {
                        choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
                        connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                        scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                        connect: "Verbinden",
                        qrcode: "QR-Code",
                        mobile: "Mobile",
                        desktop: "Desktop",
                        copy_to_clipboard: "In die Zwischenablage kopieren",
                        copied_to_clipboard: "In die Zwischenablage kopiert!",
                        connect_with: "Verbinden mit Hilfe von",
                        loading: "Laden...",
                        something_went_wrong: "Etwas ist schief gelaufen",
                        no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
                        no_wallets_found: "keine Wallet gefunden"
                    },
                    en: {
                        choose_preferred_wallet: "Choose your preferred wallet",
                        connect_mobile_wallet: "Connect to Mobile Wallet",
                        scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                        connect: "Connect",
                        qrcode: "QR Code",
                        mobile: "Mobile",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copy to clipboard",
                        copied_to_clipboard: "Copied to clipboard!",
                        connect_with: "Connect with",
                        loading: "Loading...",
                        something_went_wrong: "Something went wrong",
                        no_supported_wallets: "There are no supported wallets yet",
                        no_wallets_found: "No wallets found"
                    },
                    es: {
                        choose_preferred_wallet: "Elige tu billetera preferida",
                        connect_mobile_wallet: "Conectar a billetera m\xf3vil",
                        scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
                        connect: "Conectar",
                        qrcode: "C\xf3digo QR",
                        mobile: "M\xf3vil",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copiar",
                        copied_to_clipboard: "Copiado!",
                        connect_with: "Conectar mediante",
                        loading: "Cargando...",
                        something_went_wrong: "Algo sali\xf3 mal",
                        no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
                        no_wallets_found: "No se encontraron billeteras"
                    },
                    fr: {
                        choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
                        connect_mobile_wallet: "Se connecter au portefeuille mobile",
                        scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                        connect: "Se connecter",
                        qrcode: "QR Code",
                        mobile: "Mobile",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copier",
                        copied_to_clipboard: "Copi\xe9!",
                        connect_with: "Connectez-vous \xe0 l'aide de",
                        loading: "Chargement...",
                        something_went_wrong: "Quelque chose a mal tourn\xe9",
                        no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
                        no_wallets_found: "Aucun portefeuille trouv\xe9"
                    },
                    ko: {
                        choose_preferred_wallet: "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
                        connect_mobile_wallet: "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
                        scan_qrcode_with_wallet: "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
                        connect: "\uc5f0\uacb0",
                        qrcode: "QR \ucf54\ub4dc",
                        mobile: "\ubaa8\ubc14\uc77c",
                        desktop: "\ub370\uc2a4\ud06c\ud0d1",
                        copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
                        copied_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
                        connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
                        loading: "\ub85c\ub4dc \uc911...",
                        something_went_wrong: "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
                        no_supported_wallets: "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                        no_wallets_found: "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    },
                    pt: {
                        choose_preferred_wallet: "Escolha sua carteira preferida",
                        connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
                        scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
                        connect: "Conectar",
                        qrcode: "C\xf3digo QR",
                        mobile: "M\xf3vel",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copiar",
                        copied_to_clipboard: "Copiado!",
                        connect_with: "Ligar por meio de",
                        loading: "Carregamento...",
                        something_went_wrong: "Algo correu mal",
                        no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
                        no_wallets_found: "Nenhuma carteira encontrada"
                    },
                    zh: {
                        choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
                        connect_mobile_wallet: "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
                        scan_qrcode_with_wallet: "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
                        connect: "\u8fde\u63a5",
                        qrcode: "\u4e8c\u7ef4\u7801",
                        mobile: "\u79fb\u52a8",
                        desktop: "\u684c\u9762",
                        copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
                        copied_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
                        connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
                        loading: "\u6b63\u5728\u52a0\u8f7d...",
                        something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
                        no_supported_wallets: "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
                        no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305"
                    },
                    fa: {
                        choose_preferred_wallet: "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
                        connect_mobile_wallet: "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
                        scan_qrcode_with_wallet: "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
                        connect: "\u0627\u062a\u0635\u0627\u0644",
                        qrcode: "\u06a9\u062f QR",
                        mobile: "\u0633\u06cc\u0627\u0631",
                        desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
                        copy_to_clipboard: "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
                        copied_to_clipboard: "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
                        connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
                        loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
                        something_went_wrong: "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
                        no_supported_wallets: "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
                        no_wallets_found: "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f"
                    }
                };

                function q() {
                    var t = i.getDocumentOrThrow(),
                        e = t.getElementById(m);
                    e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
                        var e = t.getElementById(f);
                        e && t.body.removeChild(e)
                    }, l))
                }

                function j(t) {
                    return function() {
                        q(), t && t()
                    }
                }

                function A(t, e, n) {
                    ! function() {
                        var t = i.getDocumentOrThrow(),
                            e = t.getElementById(p);
                        e && t.head.removeChild(e);
                        var n = t.createElement("style");
                        n.setAttribute("id", p), n.innerText = c, t.head.appendChild(n)
                    }();
                    var r, o = function() {
                        var t = i.getDocumentOrThrow(),
                            e = t.createElement("div");
                        return e.setAttribute("id", f), t.body.appendChild(e), e
                    }();
                    a.render(a.createElement(E, {
                        text: (r = i.getNavigatorOrThrow().language.split("-")[0] || "en", R[r] || R.en),
                        uri: t,
                        onClose: j(e),
                        qrcodeModalOptions: n
                    }), o)
                }
                var N = function() {
                    return "undefined" !== typeof e && "undefined" !== typeof e.versions && "undefined" !== typeof e.versions.node
                };
                var L = {
                    open: function(t, e, n) {
                        console.log(t), N() ? function(t) {
                            o.toString(t, {
                                type: "terminal"
                            }).then(console.log)
                        }(t) : A(t, e, n)
                    },
                    close: function() {
                        N() || q()
                    }
                };
                t.exports = L
            }).call(this, n("26d59f808dff3e83c741"))
        },
        ff8cee05717dfe8765c3: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                let n = 0;
                for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
                return 0 === n
            }
            n.d(e, "a", function() {
                return r
            })
        }
    }
]);