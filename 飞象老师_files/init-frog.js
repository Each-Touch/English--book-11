/**
 * Frog 埋点初始化模块
 *
 * 功能:
 *   1. 检测浏览器信息
 *   2. 管理设备ID
 *   3. 初始化 Frog SDK
 *   4. 配置拦截器
 *   5. 发送埋点事件
 *
 * 依赖:
 *   - window.InfraFrog (Frog SDK)
 *   - window.__SERVER_DATA__ (服务端配置)
 *
 * 导出:
 *   - window.FrogTracking (埋点管理对象)
 *   - window.frog (Frog 实例，向后兼容)
 *
 * 使用方式:
 *   <script>window.__SERVER_DATA__ = {...}</script>
 *   <script src="frog-sdk.js"></script>
 *   <script src="init-frog.js"></script>
 */
(function (window) {
  // ==================== 内部工具函数 ====================

  /**
   * 获取浏览器信息
   * @private
   * @returns {Object} 浏览器信息对象
   */
  function getBrowserType() {
    const ua = window.navigator.userAgent.toLowerCase()
    const testUa = (regexp) => regexp.test(ua)
    const testVs = (regexp) => ua.match(regexp)?.toString()?.replace(/[^-?0-9|_.]/g, '')?.replace(/_/g, '.') ?? 'unknow'

    // 系统
    let system = 'unknow'
    if (testUa(/windows|win32|win64|wow32|wow64/g)) {
      system = 'windows'
    } else if (testUa(/macintosh|macintel/g)) {
      system = 'macos'
    } else if (testUa(/x11;/g) && testUa(/Linux/g)) {
      system = 'linux'
    } else if (testUa(/android|adr/g)) {
      system = 'android'
    } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
      system = 'ios'
    }

    // 系统版本
    let systemVs = 'unknow'
    if (system === 'windows') {
      if (testUa(/windows nt 5.0|windows 2000/g)) systemVs = '2000'
      else if (testUa(/windows nt 5.1|windows xp/g)) systemVs = 'xp'
      else if (testUa(/windows nt 5.2|windows 2003/g)) systemVs = '2003'
      else if (testUa(/windows nt 6.0|windows vista/g)) systemVs = 'vista'
      else if (testUa(/windows nt 6.1|windows 7/g)) systemVs = '7'
      else if (testUa(/windows nt 6.2|windows 8/g)) systemVs = '8'
      else if (testUa(/windows nt 6.3|windows 8.1/g)) systemVs = '8.1'
      else if (testUa(/windows nt 10.0|windows 10/g)) systemVs = '10'
    } else if (system === 'linux') {
      systemVs = testVs(/linux x[-?\d._]+/g)
    } else if (system === 'macos') {
      systemVs = testVs(/os x [-?\d._]+/g)
    } else if (system === 'android') {
      systemVs = testVs(/android [-?\d._]+/g)
    } else if (system === 'ios') {
      systemVs = testVs(/os [-?\d._]+/g)
    }

    // 内核 + 载体
    let engine = 'unknow'
    let supporter = 'unknow'
    let supporterVs = 'unknow'
    if (testUa(/applewebkit/g)) engine = 'webkit'

    if (testUa(/opr/g) || testUa(/opera/g)) {
      supporter = 'opera'
      supporterVs = ua.match(/(?:opera|opr).([\d.]+)/)?.[1] || testVs(/opr\/[-?\d._]+/g)
    } else if (testUa(/chrome/g)) {
      supporter = 'chrome'
      supporterVs = testVs(/chrome\/[-?\d._]+/g)
    } else if (testUa(/safari/g)) {
      supporter = 'safari'
      supporterVs = testVs(/version\/[-?\d._]+/g)
    } else if (testUa(/baiduboxapp/g) || testUa(/bidubrowser/g)) {
      supporter = 'baidu'
      supporterVs = ua.match(/bidubrowser\/([\d.]+)/)?.[1] || testVs(/baiduboxapp\/[-?\d._]+/g)
    } else if (testUa(/MicroMessenger/g)) {
      supporter = 'wechat'
      supporterVs = testVs(/micromessenger\/[-?\d._]+/g)
    } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
      engine = 'gecko'
      supporter = 'firefox'
      supporterVs = testVs(/firefox\/[-?\d._]+/g)
    } else if (testUa(/presto/g)) {
      engine = 'presto'
      supporter = 'opera'
    } else if (testUa(/trident|compatible|msie/g)) {
      engine = 'trident'
      supporter = 'iexplore'
      supporterVs = testVs(/(msie [-?\d._]+)|(rv:[\d._]+)/g)
    } else if (ua.match(/ucbrowser/) != null) {
      supporter = 'uc'
      supporterVs = ua.match(/ucbrowser\/([\d.]+)/)?.[1] ?? 'unknow'
    } else if (ua.match(/metasr/) != null) {
      supporter = 'sougou'
      supporterVs = ua.match(/metasr\/([\d.]+)/)?.[1] ?? 'unknow'
    } else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
      supporter = 'qq'
      supporterVs = ua.match(/tencenttraveler\/([\d.]+)/)?.[1] ?? 'unknow'
    } else if (ua.match(/maxthon/) != null) {
      supporter = 'maxthon'
      supporterVs = ua.match(/maxthon\/([\d.]+)/)?.[1] ?? 'unknow'
    } else if (testUa(/edge/g)) {
      supporter = 'edge'
      supporterVs = testVs(/edge\/[-?\d._]+/g)
    } else if (testUa(/edg/g)) {
      supporter = 'edge(chromium)'
      supporterVs = testVs(/edg\/[-?\d._]+/g)
    }

    // 内核版本
    let engineVs = 'unknow'
    if (engine === 'webkit') engineVs = testVs(/applewebkit\/[-?\d._]+/g)
    else if (engine === 'gecko') engineVs = testVs(/gecko\/[-?\d._]+/g)
    else if (engine === 'presto') engineVs = testVs(/presto\/[-?\d._]+/g)
    else if (engine === 'trident') engineVs = testVs(/trident\/[-?\d._]+/g)

    // 外壳+外壳版本
    let shell = 'none'
    let shellVs = 'unknow'
    if (testUa(/micromessenger/g)) {
      shell = 'wechat'
      shellVs = testVs(/micromessenger\/[-?\d._]+/g)
    } else if (testUa(/qqbrowser/g)) {
      shell = 'qq'
      shellVs = testVs(/qqbrowser\/[-?\d._]+/g)
    } else if (testUa(/ucbrowser/g)) {
      shell = 'uc'
      shellVs = testVs(/ucbrowser\/[-?\d._]+/g)
    } else if (testUa(/qihu 360se/g)) {
      shell = '360'
    } else if (testUa(/2345explorer/g)) {
      shell = '2345'
      shellVs = testVs(/2345explorer\/[-?\d._]+/g)
    } else if (testUa(/metasr/g)) {
      shell = 'sougou'
      shellVs = testVs(/metasr [-?\d._]+/g)
    } else if (testUa(/lbbrowser/g)) {
      shell = 'liebao'
    } else if (testUa(/maxthon/g)) {
      shell = 'maxthon'
      shellVs = testVs(/maxthon\/[-?\d._]+/g)
    } else if (testUa(/baiduboxapp/g)) {
      shell = 'baidu'
      shellVs = ua.match(/bidubrowser\/([\d.]+)/)?.[1] || testVs(/baiduboxapp\/[-?\d._]+/g)
    } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
      shell = 'firefox'
      shellVs = testVs(/firefox\/[-?\d._]+/g)
    } else if (testUa(/edge/g)) {
      shell = 'edge'
      shellVs = testVs(/edge\/[-?\d._]+/g)
    } else if (testUa(/edg/g)) {
      shell = 'edge(chromium)'
      shellVs = testVs(/edg\/[-?\d._]+/g)
    } else if (testUa(/chrome/g)) {
      shell = 'chrome'
      shellVs = testVs(/chrome\/[-?\d._]+/g)
    } else if (testUa(/safari/g)) {
      shell = 'safari'
      shellVs = testVs(/version\/[-?\d._]+/g)
    }

    return {
      engine,
      engineVs,
      broser_name: supporter,
      browser_name: supporter,
      broser_version: supporterVs,
      browser_version: supporterVs,
      os_name: system,
      os_version: systemVs,
      ...(shell === 'none' ? {} : { shell, shellVs }),
    }
  }

  /**
   * 获取设备ID
   * @private
   * @returns {string} 设备ID
   */
  function getDeviceId() {
    // 检查 Frog SDK 是否加载
    if (!window.InfraFrog || !window.InfraFrog.getCookie || !window.InfraFrog.setCookie) {
      console.warn('[FrogTracking] Frog SDK Cookie 方法未加载')
      return ''
    }

    const { getCookie } = window.InfraFrog
    const { setCookie } = window.InfraFrog

    // 优先从 URL 参数获取
    const match = window.location.search.match(/(_deviceId|YFD_U)=([^&]+)/)
    if (match) {
      setCookie('YFD_U', match[2], 365)
      return decodeURIComponent(match[2] || '')
    }

    // 从 Cookie 获取
    let deviceId = getCookie('deviceId') || getCookie('YFD_U')
    if (!deviceId) {
      // 生成新的设备ID
      deviceId = `${Date.now()}-${Math.random().toString().substr(-5)}`
      setCookie('YFD_U', deviceId, 365)
    }

    return deviceId
  }

  // ==================== 埋点管理对象 ====================

  window.FrogTracking = {
    instance: null,

    /**
     * 初始化 Frog 埋点
     * @returns {Object|null} Frog 实例
     */
    init() {
      // 检查依赖
      if (!window.InfraFrog || !window.InfraFrog.WebFrog) {
        console.warn('[FrogTracking] Frog SDK 未加载')
        return null
      }

      const { WebFrog } = window.InfraFrog
      const { FrogEnv } = window.InfraFrog

      // 获取服务端配置
      const serverData = window.__SERVER_DATA__ || {}
      const isOnline = serverData.watermarkEnv === 'online'

      // 创建 Frog 实例
      const frog = new WebFrog({
        appId: 'musk-watermark-html',
        appToken: isOnline ? '5b2b2d3553664556ae030787ac0067ce' : '58db1beee24b4ac38ae7343dcfefafad',
        env: isOnline ? FrogEnv.ONLINE : FrogEnv.TEST,
        getTimestamp() { return Date.now() },
        debug: false,
        immediate: true,
      })

      // 初始化 Frog
      frog.init({
        userId: 0,
        originUserId: 0,
        primaryUserId: 0,
        canUpdate: true,
        productId: 61000001,
      })

      // 获取公共参数
      const browserInfo = getBrowserType()
      const deviceId = getDeviceId()
      const commonParams = { ...browserInfo, device_id: deviceId }

      // 添加拦截器，注入公共参数
      WebFrog.addInterceptor({
        intercept(data) {
          const customExtend = data.customExtend || {}
          const restData = {}
          for (const key in data) {
            if (key !== 'customExtend') {
              restData[key] = data[key]
            }
          }

          return { ...restData, customExtend: { ...customExtend, ...commonParams } }
        },
      })

      console.log('[FrogTracking] Frog 埋点初始化成功', commonParams)

      this.instance = frog
      return frog
    },

    /**
     * 获取 Frog 实例
     * @returns {Object|null}
     */
    getInstance() {
      return this.instance
    },
  }

  // ==================== 自动初始化 ====================

  /**
   * 初始化函数
   */
  function initWhenReady() {
    window.FrogTracking.init()

    // 向后兼容：暴露全局 frog 实例
    window.frog = window.FrogTracking.getInstance()
  }

  // 智能初始化：兼容 <head> 和 <body> 底部两种位置
  if (document.readyState === 'loading') {
    // DOM 还在加载中，注册监听器
    window.addEventListener('DOMContentLoaded', initWhenReady)
  } else {
    // DOM 已经加载完成，立即执行
    initWhenReady()
  }
}(window))
