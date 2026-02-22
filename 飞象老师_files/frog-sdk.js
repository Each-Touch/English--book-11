/**
 * Frog SDK - Browser Bundle (Web Only)
 * Version: 1.7.2
 * Generated: 2025-12-22T11:30:08.047Z
 *
 * 仅包含浏览器环境所需的模块，不包含 Node.js 依赖
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.InfraFrog = factory()
  }
}(typeof self !== 'undefined' ? self : this, () => {
  // ==================== 模拟 CommonJS 环境 ====================
  const exports = {}
  const module = { exports }

  // ==================== Web Module (包含 WebFrog 和 FrogEnv) ====================
  'use strict'

  Object.defineProperty(exports, '__esModule', { value: true })

  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf
        || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b })
        || function (d, b) { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p] }
    return extendStatics(d, b)
  }

  function __extends(d, b) {
    if (typeof b !== 'function' && b !== null) { throw new TypeError(`Class extends value ${String(b)} is not a constructor or null`) }
    extendStatics(d, b)
    function __() { this.constructor = d }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
  }

  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]
        for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    }
    return __assign.apply(this, arguments)
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value) }) }
    return new (P || (P = Promise))((resolve, reject) => {
      function fulfilled(value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
      function rejected(value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }

  function __generator(thisArg, body) {
    let _ = { label: 0, sent() { if (t[0] & 1) throw t[1]; return t[1] }, trys: [], ops: [] }; let f; let y; let t; let
      g
    return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () { return this }), g
    function verb(n) { return function (v) { return step([n, v]) } }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t
          if (y = 0, t) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0: case 1: t = op; break
            case 4: _.label++; return { value: op[1], done: false }
            case 5: _.label++; y = op[1]; op = [0]; continue
            case 7: op = _.ops.pop(); _.trys.pop(); continue
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break }
              if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break }
              if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break }
              if (t[2]) _.ops.pop()
              _.trys.pop(); continue
          }
          op = body.call(thisArg, _)
        } catch (e) { op = [6, e]; y = 0 } finally { f = t = 0 }
      }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true }
    }
  }

  function __read(o, n) {
    let m = typeof Symbol === 'function' && o[Symbol.iterator]
    if (!m) return o
    const i = m.call(o); let r; const ar = []; let
      e
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
    } catch (error) { e = { error } } finally {
      try {
        if (r && !r.done && (m = i.return)) m.call(i)
      } finally { if (e) throw e.error }
    }
    return ar
  }

  function __spreadArray(to, from) {
    for (let i = 0, il = from.length, j = to.length; i < il; i++, j++) { to[j] = from[i] }
    return to
  }

  exports.PlatformType = void 0;
  (function (PlatformType) {
    PlatformType[PlatformType.IPHONE = 0] = 'IPHONE'
    PlatformType[PlatformType.ANDROID = 1] = 'ANDROID'
    PlatformType[PlatformType.WEB = 2] = 'WEB'
    PlatformType[PlatformType.IPAD = 3] = 'IPAD'
    PlatformType[PlatformType.MAC = 4] = 'MAC'
    PlatformType[PlatformType.WINDOWS = 5] = 'WINDOWS'
    PlatformType[PlatformType.MINI_PROGRAM = 6] = 'MINI_PROGRAM'
    PlatformType[PlatformType.UNKNOWN = 7] = 'UNKNOWN'
  }(exports.PlatformType || (exports.PlatformType = {})))
  exports.Net = void 0;
  (function (Net) {
    Net[Net.NET_UNKNOWN = 0] = 'NET_UNKNOWN'
    Net[Net.NET_WIFI = 1] = 'NET_WIFI'
    Net[Net.NET_2G = 2] = 'NET_2G'
    Net[Net.NET_3G = 3] = 'NET_3G'
    Net[Net.NET_4G = 4] = 'NET_4G'
    Net[Net.NET_ETHERNET = 5] = 'NET_ETHERNET'
    Net[Net.NET_5G = 6] = 'NET_5G'
    Net[Net.NET_OFFLINE = 7] = 'NET_OFFLINE'
  }(exports.Net || (exports.Net = {})))
  exports.FrogEnv = void 0;
  (function (FrogEnv) {
    FrogEnv[FrogEnv.TEST = 0] = 'TEST'
    FrogEnv[FrogEnv.ONLINE = 1] = 'ONLINE'
    FrogEnv[FrogEnv.DEV = 2] = 'DEV'
  }(exports.FrogEnv || (exports.FrogEnv = {})))
  /**
 * 日志级别，可以通过或运算同时设置多个级别
 */
  exports.LoggerLevel = void 0;
  (function (LoggerLevel) {
    LoggerLevel[LoggerLevel.DEBUG = 1] = 'DEBUG'
    LoggerLevel[LoggerLevel.NORMAL = 2] = 'NORMAL'
    LoggerLevel[LoggerLevel.INFO = 4] = 'INFO'
    LoggerLevel[LoggerLevel.WARN = 8] = 'WARN'
    LoggerLevel[LoggerLevel.ERROR = 16] = 'ERROR'
  }(exports.LoggerLevel || (exports.LoggerLevel = {})))

  let lastTimestamp = 0
  let seq = 0
  function seqId(now) {
    if (lastTimestamp !== now) {
      lastTimestamp = now
      seq = 0
    }
    return now * 1000 + seq++
  }
  function setTrueProperties(obj, props) {
    Object.keys(props).forEach((key) => {
      if (props[key]) {
        obj[key] = props[key]
      }
    })
  }
  function formatObject(obj) {
    const o = {}
    Object.keys(obj).forEach((key) => {
      let _a
      const value = (_a = obj[key]) !== null && _a !== void 0 ? _a : undefined
      if (value !== undefined) {
        o[key] = value.toString()
      }
    })
    return o
  }

  const Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.init = function (env, loggerMode, debug) {
      if (debug === void 0) { debug = false }
      if (loggerMode) {
        this.loggerMode = loggerMode
      } else {
        /** 默认线上只开启 error 日志，测试开发环境开启除 debug 外所有日志 */
        if (env === exports.FrogEnv.ONLINE) {
          this.loggerMode = exports.LoggerLevel.ERROR
        } else {
          this.loggerMode = exports.LoggerLevel.NORMAL | exports.LoggerLevel.INFO | exports.LoggerLevel.WARN | exports.LoggerLevel.ERROR
        }
      }
      if (debug) {
        this.loggerMode |= exports.LoggerLevel.DEBUG
      }
    }
    /**
     * 设置日志模式，控制日志输出等级
     * @param mode 添加的日志等级
     * @param cover 是否覆盖，不覆盖时会追加在原 loggerMode 上
     */
    Logger.setLoggerMode = function (mode, cover) {
      if (cover) {
        this.loggerMode = mode
      } else {
        this.loggerMode |= mode
      }
    }
    /**
     * 获取当前日志模式
     */
    Logger.getLoggerMode = function () {
      return this.loggerMode
    }
    Logger.log = function () {
      const content = []
      for (let _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i]
      }
      if (this.loggerMode & exports.LoggerLevel.NORMAL) {
        console.log.apply(console, __spreadArray([this.prefix], __read(content)))
      }
    }
    Logger.info = function () {
      const content = []
      for (let _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i]
      }
      if (this.loggerMode & exports.LoggerLevel.INFO) {
        console.info.apply(console, __spreadArray([`${this.prefix}[info]`], __read(content)))
      }
    }
    Logger.warn = function () {
      const content = []
      for (let _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i]
      }
      if (this.loggerMode & exports.LoggerLevel.WARN) {
        console.warn.apply(console, __spreadArray([`${this.prefix}[warn]`], __read(content)))
      }
    }
    Logger.error = function () {
      const content = []
      for (let _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i]
      }
      if (this.loggerMode & exports.LoggerLevel.ERROR) {
        console.error.apply(console, __spreadArray([`${this.prefix}[error]`], __read(content)))
      }
    }
    Logger.debug = function () {
      const content = []
      for (let _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i]
      }
      if (this.loggerMode & exports.LoggerLevel.DEBUG) {
        console.log.apply(console, __spreadArray([`${this.prefix}[debug]`], __read(content)))
      }
    }
    Logger.loggerMode = 0
    Logger.prefix = '[Frog]'
    return Logger
  }())

  let _a
  const Frog = /** @class */ (function () {
    function Frog(config) {
      const _this = this
      let _a
      this.config = config
      this.logBeforeInit = []
      this.logDataCache = []
      this.sessions = {}
      this.initialized = false
      this.pendingRequestCount = 0
      // 初始化 Logger
      Logger.init(config === null || config === void 0 ? void 0 : config.env, config === null || config === void 0 ? void 0 : config.loggerMode, config === null || config === void 0 ? void 0 : config.debug)
      Logger.debug('创建 Frog 对象')
      // 初始化双写模式, 默认true
      config.compatible = (_a = config.compatible) !== null && _a !== void 0 ? _a : true
      // 初始化默认参数
      this.options = {
        userId: 0,
        originUserId: 0,
        primaryUserId: 0,
        productId: 0,
        appVersion: '',
        ldap: '',
      }
      this.commonProps = config.ignoreDefaultProps ? {
        platformType: exports.PlatformType.UNKNOWN,
        yfdU: '',
      } : this.getDefaultProps()
      Logger.debug('获取默认参数', this.commonProps)
      // 设置本地存储
      this.localStorage = this.getStore()
      // 绑定退出回调
      this.bindDestroyCallback(() => {
        _this.onDestroy()
      })
      Logger.debug('创建 Frog 对象完成')
    }
    /** 初始化 sdk */
    Frog.prototype.init = function (option) {
      const _this = this
      if (this.initialized) {
        // 是否允许多次更新
        if (option === null || option === void 0 ? void 0 : option.canUpdate) {
          this.options = Object.assign(this.options, option)
        }
        return
      }
      this.options = Object.assign(this.options, option)
      this.initialized = true
      // 将初始化之前的日志加入缓存
      this.logBeforeInit.forEach((log) => {
        _this.add(log)
      })
      this.logBeforeInit = []
      // 开启定时器
      this.initStoreTimer()
      this.initCacheTimer()
    }
    /**
     * 添加一条日志到缓存中
     * + 每隔 5s 或者缓存写满之后，会自动上传
     * + 如果 sdk 还没有初始化，会等初始化之后再上传
     * + web 端默认立即上传
     * @param log 日志参数
     * @param immediate 是否立即上传
     */
    Frog.prototype.add = function (log, immediate) {
      let _a
      return __awaiter(this, void 0, void 0, function () {
        let now; let frogData; let
          res
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (log.customExtend) {
                log.customExtend = formatObject(log.customExtend)
              }
              if (!this.initialized) {
                Logger.debug('sdk 没有初始化，等待初始化之后再上传')
                if (this.logBeforeInit.length >= Frog.MAX_BEFORE_INIT_COUNT) {
                  Logger.warn('sdk 没有初始化，缓存达到上限，添加日志失败')
                } else {
                  this.logBeforeInit.push(log)
                }
                return [2]
              }
              now = this.config.getTimestamp()
              frogData = { timestamp: now, seqId: seqId(now), productId: this.options.productId, sessionId: this.sessions, appVersion: this.options.appVersion, userId: this.options.userId, originUserId: this.options.originUserId, primaryUserId: this.options.primaryUserId, hostProductId: (_a = this.options.hostProductId) !== null && _a !== void 0 ? _a : this.options.productId, ldap: this.options.ldap, ...this.commonProps, ...log }
              Logger.debug('添加日志', log)
              Frog.interceptors.forEach((interceptor) => {
                frogData = interceptor.intercept(frogData)
              })
              Logger.debug(`${Frog.interceptors.length}\u4E2A\u62E6\u622A\u5668\u5904\u7406\u5B8C\u6210`, log)
              if (!(this.logDataCache.length >= Frog.MAX_CACHE_COUNT)) return [3 /* break */, 2]
              Logger.debug('\u7F13\u5B58\u8FBE\u5230\u4E0A\u9650\uFF0C\u89E6\u53D1 flush')
              return [4 /* yield */, this.flush()]
            case 1:
              res = _b.sent()
              if (!res) {
                Logger.debug('\u7F13\u5B58\u8FBE\u5230\u4E0A\u9650\uFF0C\u6DFB\u52A0\u65E5\u5FD7\u5931\u8D25')
                return [2]
              }
              _b.label = 2
            case 2:
              this.logDataCache.push(frogData)
              Logger.debug('添加日志到缓存', log)
              if (immediate || this.config.immediate) {
                Logger.debug('\u7ACB\u5373\u53D1\u9001\u5F00\u5173\u6253\u5F00\uFF0C\u7ACB\u5373\u53D1\u9001\u65E5\u5FD7')
                this.flush()
              }
              return [2]
          }
        })
      })
    }
    /** 手动上传缓存中的日志 */
    Frog.prototype.flush = function () {
      return __awaiter(this, void 0, void 0, function () {
        let res
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              Logger.debug('触发 flush')
              if (this.logDataCache.length === 0) {
                Logger.debug('缓存中没有数据')
                return [2 /* return */, true]
              }
              res = this.sendRequest(this.logDataCache)
              if (!res) return [3 /* break */, 1]
              this.logDataCache = []
              return [2 /* return */, true]
            case 1: return [4 /* yield */, this.saveStore(this.logDataCache)]
            case 2: return [2 /* return */, _a.sent()]
          }
        })
      })
    }
    /** 设置运行环境 */
    Frog.prototype.setEnv = function (env) {
      this.config.env = env
    }
    /** 设置 debug 模式 */
    Frog.prototype.setDebugMode = function (debug) {
      this.config.debug = debug
      Logger.setLoggerMode(exports.LoggerLevel.DEBUG)
    }
    /**
     * 设置日志模式，控制日志输出等级
     * @param mode 添加的日志等级
     * @param cover 是否覆盖，不覆盖时会追加在原 loggerMode 上
     */
    Frog.prototype.setLoggerMode = function (mode, cover) {
      Logger.setLoggerMode(mode, cover)
    }
    /** 设置是否立即上传日志 */
    Frog.prototype.setImmediate = function (immediate) {
      this.config.immediate = immediate
    }
    /** 设置通用参数，不设置 sdk 会计算默认值 */
    Frog.prototype.setCommonProperty = function (property) {
      this.commonProps = Object.assign(this.commonProps, property)
    }
    Frog.prototype.beginSession = function (sessionName) {
      if (!sessionName) {
        Logger.warn('sessionName \u4E0D\u80FD\u4E3A\u7A7A')
        return
      }
      if (Object.keys(this.sessions).length >= Frog.MAX_SESSION_COUNT) {
        Logger.warn('beginSession session \u6570\u91CF\u8FBE\u5230\u4E0A\u9650')
        return
      }
      if (this.sessions[sessionName]) {
        Logger.warn(`beginSession sessionName ${sessionName} \u91CD\u590D`)
        return
      }
      this.sessions[sessionName] = seqId(this.config.getTimestamp())
      Logger.debug(`beginSession ${sessionName}`)
    }
    Frog.prototype.endSession = function (sessionName) {
      if (this.sessions[sessionName]) {
        Logger.debug(`endSession ${sessionName}`)
        delete this.sessions[sessionName]
      } else {
        Logger.warn(`endSession sessionName ${sessionName} \u4E0D\u5B58\u5728`)
      }
    }
    Frog.addInterceptor = function (interceptor) {
      Frog.interceptors.push(interceptor)
      Logger.debug('addInterceptor')
    }
    Frog.removeInterceptor = function (interceptor) {
      Frog.interceptors = Frog.interceptors.filter((v) => v !== interceptor)
      Logger.debug('removeInterceptor')
    }
    Frog.prototype.loadStore = function () {
      return __awaiter(this, void 0, void 0, function () {
        let frogData; let now; let
          data
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /* yield */, this.localStorage.load()]
            case 1:
              frogData = _a.sent()
              if (frogData.length === 0) {
                Logger.debug('加载本地存储，没有数据')
                return [2 /* return */, []]
              }
              now = this.config.getTimestamp()
              data = frogData.filter((d) => now - d.timestamp < Frog.STORE_EXPIRE)
              return [4 /* yield */, this.localStorage.clear()]
            case 2:
              _a.sent()
              Logger.debug(`\u52A0\u8F7D\u672C\u5730\u5B58\u50A8\uFF0C\u6709\u6548\u671F\u5185${data.length}\u6761\uFF0C\u4E00\u5171${frogData.length}\u6761`)
              return [2 /* return */, data]
          }
        })
      })
    }
    Frog.prototype.saveStore = function (frogData) {
      return __awaiter(this, void 0, void 0, function () {
        let storeDataCount; let data; let
          res
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /* yield */, this.localStorage.getCount()]
            case 1:
              storeDataCount = _a.sent()
              if (storeDataCount >= Frog.MAX_STORE_COUNT) {
                Logger.warn('\u672C\u5730\u5B58\u50A8\u6570\u636E\u8FBE\u5230\u4E0A\u9650\uFF0C\u6301\u4E45\u5316\u5931\u8D25')
                return [2 /* return */, false]
              }
              data = frogData.splice(0, Frog.MAX_STORE_COUNT - storeDataCount)
              return [4 /* yield */, this.localStorage.save(data)]
            case 2:
              res = _a.sent()
              if (res) {
                Logger.debug(`\u6301\u4E45\u5316${data.length}\u6761\u6570\u636E\uFF0C\u8FD8\u5269${frogData.length}\u6761`)
              }
              return [2 /* return */, res]
          }
        })
      })
    }
    Frog.prototype.flushStore = function () {
      return __awaiter(this, void 0, void 0, function () {
        let data
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /* yield */, this.loadStore()]
            case 1:
              data = _a.sent()
              if (data.length === 0) {
                Logger.debug('没有数据，取消上传')
                return [2]
              }
              if (!this.sendRequest(data)) {
                Logger.debug('持久化数据上传失败')
                this.localStorage.save(data)
              }
              return [2]
          }
        })
      })
    }
    Frog.prototype.initStoreTimer = function () {
      const _this = this
      setInterval(() => {
        Logger.debug('定时上传持久化数据')
        _this.flushStore()
      }, Frog.STORE_REQUEST_IDLE)
    }
    Frog.prototype.initCacheTimer = function () {
      const _this = this
      setInterval(() => {
        Logger.debug('定时上传缓存数据')
        _this.flush()
      }, Frog.CACHE_REQUEST_IDLE)
    }
    Frog.prototype.sendRequest = function (frogData) {
      const _this = this
      if (this.pendingRequestCount >= Frog.MAX_PENDING_REQUEST_COUNT) {
        Logger.warn('pending \u8BF7\u6C42\u8FBE\u5230\u4E0A\u9650')
        return false
      }
      this.pendingRequestCount++
      const { serverUrlConfig } = this.options
      const url = serverUrlConfig ? serverUrlConfig[this.config.env] : Frog.SERVER_URL[this.config.env]
      const header = {
        'Content-Type': 'application/json',
        'X-App-Id': this.config.appId,
        'X-App-Send-Time': this.config.getTimestamp().toString(),
        Authorization: `Bearer ${this.config.appToken}`,
      }
      this.sendFrog(url, frogData, header, Frog.TIMEOUT).then((statusCode) => {
        _this.pendingRequestCount--
        if (statusCode >= 200 && statusCode < 300) {
          Logger.info('日志上传成功', frogData)
        } else if (statusCode === 400 || statusCode === 403) {
          Logger.warn('\u65E5\u5FD7\u9519\u8BEF\uFF0C\u4E0A\u4F20\u5931\u8D25\uFF0C\u4E22\u5F03\u65E5\u5FD7')
        } else {
          Logger.warn('\u7F51\u7EDC\u95EE\u9898\u5BFC\u81F4\u65E5\u5FD7\u4E0A\u4F20\u5931\u8D25\uFF0C\u6301\u4E45\u5316\u540E\u91CD\u8BD5')
          _this.saveStore(frogData)
        }
      }).catch((e) => {
        _this.pendingRequestCount--
        _this.saveStore(frogData)
        Logger.error('上传失败', e)
      })
      Logger.debug('sendRequest 调用完成')
      return true
    }
    Frog.prototype.onDestroy = function () {
      this.add({
        url: Frog.DURATION_URL,
        eventId: Frog.DURATION_EVENT_ID,
        duration: this.getDuration(),
      }, true)
      this.flushStore()
      Logger.debug('触发 onDestroy')
    }
    Frog.SERVER_URL = (_a = {},
    _a[exports.FrogEnv.TEST] = 'https://frog.yuanfudao.biz/statV4',
    _a[exports.FrogEnv.ONLINE] = 'https://frog.yuanfudao.com/statV4',
    _a[exports.FrogEnv.DEV] = 'https://princi.zhenguanyu.com/frog-test-server/statV4',
    _a)
    Frog.DURATION_URL = '/usetime/application/duration'
    Frog.DURATION_EVENT_ID = 1
    Frog.MAX_SESSION_COUNT = 20
    Frog.MAX_CACHE_COUNT = 1000
    Frog.MAX_STORE_COUNT = 1000
    Frog.MAX_BEFORE_INIT_COUNT = 20
    Frog.MAX_PENDING_REQUEST_COUNT = 5
    Frog.TIMEOUT = 60 * 1000
    Frog.CACHE_REQUEST_IDLE = 5 * 1000
    Frog.STORE_REQUEST_IDLE = 30 * 1000
    Frog.STORE_EXPIRE = 1000 * 3600 * 24 * 7
    Frog.interceptors = []
    return Frog
  }())

  /**
 * 通用的Cookie数据操作方法
 */
  /**
 * 获取Cookie
 * @param {string} key
 * @returns {string}
 */
  var getCookie = function (key) {
    const list = document.cookie.match(new RegExp(`(?:^| )${encodeURIComponent(key)}=([^;]+)`))
    return list && decodeURIComponent(list[1])
  }
  /**
 * 设置Cookie
 * 默认过去时间是一天，expires是以天为单位
 * 当expires为''时,代表设置的是Session Cookie
 * @param {string} key
 * @param {string} val
 * @param {number} expires
 * @param {string} path
 * @param {string} domain
 * @param {boolean} secure
 */
  var setCookie = function (key, val, expires, path, domain, secure) {
    if (val === void 0) { val = 1 }
    if (expires === void 0) { expires = 0 }
    if (path === void 0) { path = '/' }
    if (domain === void 0) { domain = '' }
    if (secure === void 0) { secure = false }
    document.cookie = `${encodeURIComponent(key)
    }=${
      encodeURIComponent(String(val))
    }${expires
      ? ''
      : `; expires=${new Date(+new Date()
                    + (typeof expires !== 'undefined' ? expires : 1) * 86400000).toUTCString()}`
    }; path=${path}`
            + `; domain=${domain || document.domain.split('.').slice(-2).join('.')}${
              secure ? '; secure' : ''}`
  }

  const ua = navigator.userAgent
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
  const iPad = ua.match(/(iPad).*OS\s([\d_]+)/)
  const iPhone = !iPad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
  const iOS = iPad || iPhone
  const mac = !iOS && ua.match(/macintosh|mac os x/i)
  const win = ua.match(/windows/i)
  const model = ua.match(/(?:YuanSouTi|YuanTiKu|YuanFuDao|QQ|MicroMessenger|QQBrowser|MQQBrowser|MQQBrowserQQ|WeiBo|baiduboxapp|baidubrowser|SogouMobileBrowser|MiuiBrowser|UCBrowser|Maxthon|Kwai|NewsArticle)[^\/]*\/[\.0-9]+/g) || ua.match(/aweme_\d\.\d\.\d/)
  const vendor = ua.match(/;([^/;]+)Build\//)
  function getModel() {
    return model && model.pop()
  }
  function getOsType() {
    if (android) {
      return 'Android'
    }
    if (iPad) {
      return 'iPadOS'
    }
    if (iPhone) {
      return 'iOS'
    }
    if (mac) {
      return 'MacOS'
    }
    if (win) {
      return 'Windows'
    }
    return ''
  }
  function getOsVersion() {
    if (android) {
      return android[2]
    }
    if (iOS) {
      return iOS[2].replace(/_/g, '.')
    }
    return ''
  }
  function getManufacturer() {
    return vendor && vendor[1].trim()
  }

  const FROG_STORE_KEY = 'infra_frog_storage'
  const load = function () {
    const val = localStorage.getItem(FROG_STORE_KEY)
    if (!val) {
      return []
    }
    return JSON.parse(val)
  }
  const clear = function () {
    localStorage.removeItem(FROG_STORE_KEY)
  }
  const save = function (data) {
    const storeData = load()
    localStorage.setItem(FROG_STORE_KEY, JSON.stringify(storeData.concat(data)))
    return true
  }
  const getCount = function () {
    return load().length
  }
  const webStore = {
    load,
    clear,
    save,
    getCount,
  }

  function getDeviceId() {
    const match = location.search.match(/(_deviceId|YFD_U)=([^&]+)/)
    if (match) {
      setCookie('YFD_U', match[2], 365)
      return decodeURIComponent(match[2])
    }
    let deviceId = getCookie('deviceId') || getCookie('YFD_U')
    if (!deviceId) {
      deviceId = `${Date.now()}-${Math.random().toString().substr(-5)}`
      setCookie('YFD_U', deviceId, 365)
    }
    return deviceId
  }
  function ajaxSend(url, data, header, timeout, compatible) {
    return new Promise((resolve, reject) => {
      const jsonUrl = `${url}/plain` + `?compatible=${compatible}`
      const xhr = new XMLHttpRequest()
      xhr.withCredentials = true
      xhr.open('POST', jsonUrl)
      Object.keys(header).forEach((key) => xhr.setRequestHeader(key, header[key]))
      xhr.timeout = timeout
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          resolve(xhr.status)
          Logger.debug('请求发送完成', data)
        }
      }
      xhr.ontimeout = function () {
        Logger.error('请求超时', data)
        resolve(0)
      }
      xhr.onerror = function (ev) {
        Logger.error('请求错误', ev, data)
        resolve(0)
      }
      xhr.onabort = function () {
        Logger.error('请求被终止', data)
        resolve(0)
      }
      xhr.send(JSON.stringify(data))
      Logger.debug('发送请求', data)
    })
  }
  const WebFrog = /** @class */ (function (_super) {
    __extends(WebFrog, _super)
    function WebFrog(config) {
      const _this =
        // web 默认立即发送日志
        _super.call(this, { immediate: true, ...config }) || this
      _this.startTime = config.getTimestamp()
      return _this
    }
    WebFrog.prototype.getDefaultProps = function () {
      const props = {
        platformType: exports.PlatformType.WEB,
        yfdU: getDeviceId(),
        screenWidth: screen.width,
        screenHeight: screen.height,
        ua: navigator.userAgent,
        language: navigator.language,
      }
      setTrueProperties(props, {
        model: getModel(),
        osType: getOsType(),
        osVersion: getOsVersion(),
        manufacturer: getManufacturer(),
      })
      return props
    }
    WebFrog.prototype.getStore = function () {
      return webStore
    }
    WebFrog.prototype.sendFrog = function (url, data, header, timeout) {
      const _this = this
      if (typeof navigator !== 'undefined' && navigator.sendBeacon && typeof navigator.sendBeacon === 'function') {
        return new Promise((resolve, reject) => {
          const jsonUrl = `${url}/bodyAuth` + `?compatible=${_this.config.compatible}`
          const body = {
            appId: _this.config.appId,
            token: _this.config.appToken,
            sendTime: _this.config.getTimestamp(),
            data,
          }
          const res = navigator.sendBeacon(jsonUrl, JSON.stringify(body))
          if (res) {
            resolve(200)
          } else {
            /* sendBeacon 返回false 则使用XMLHttpRequest重新发送一遍 */
            ajaxSend(url, data, header, timeout, _this.config.compatible).then(resolve).catch(reject)
          }
        })
      }
      return ajaxSend(url, data, header, timeout, this.config.compatible)
    }
    WebFrog.prototype.getDuration = function () {
      return this.config.getTimestamp() - this.startTime
    }
    WebFrog.prototype.bindDestroyCallback = function (callback) {
      window.addEventListener('unload', () => {
        callback()
      })
    }
    return WebFrog
  }(Frog))

  exports.WebFrog = WebFrog

  const webExports = module.exports

  // ==================== 手动导出 Cookie 方法 ====================
  // web.js 内部定义了 getCookie 和 setCookie，但没有导出到 exports
  // 我们需要手动提取并导出这些方法

  /**
   * 获取 Cookie
   * @param {string} key
   * @returns {string}
   */
  var getCookie = function (key) {
    const list = document.cookie.match(new RegExp(`(?:^| )${encodeURIComponent(key)}=([^;]+)`))
    return list && decodeURIComponent(list[1])
  }

  /**
   * 设置 Cookie
   * @param {string} key
   * @param {string|number} val
   * @param {number} expires - 过期天数
   * @param {string} path
   * @param {string} domain
   * @param {boolean} secure
   */
  var setCookie = function (key, val, expires, path, domain, secure) {
    if (val === void 0) { val = 1 }
    if (expires === void 0) { expires = 0 }
    if (path === void 0) { path = '/' }
    if (domain === void 0) { domain = '' }
    if (secure === void 0) { secure = false }
    document.cookie = `${encodeURIComponent(key)
    }=${
      encodeURIComponent(String(val))
    }${expires ? '' : `; expires=${new Date(+new Date() + (typeof expires !== 'undefined' ? expires : 1) * 86400000).toUTCString()}`
    }; path=${path
    }; domain=${domain || document.domain.split('.').slice(-2).join('.')
    }${secure ? '; secure' : ''}`
  }

  // ==================== 导出 ====================
  return {
    WebFrog: webExports.WebFrog,
    FrogEnv: webExports.FrogEnv,
    PlatformType: webExports.PlatformType,
    Net: webExports.Net,
    LoggerLevel: webExports.LoggerLevel,
    // 导出 Cookie 方法
    getCookie,
    setCookie,
    // 导出所有内容以确保兼容性
    ...webExports,
  }
}))
