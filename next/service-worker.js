/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1430b4d7fe4d2ae77ceedd52f9941f64"
  },
  {
    "url": "api/application-api.html",
    "revision": "70248a8b0e1eb5b953f4de5b19a9e73c"
  },
  {
    "url": "api/application-config.html",
    "revision": "0fdf5ddb96bdf6734ede96ad4e01790b"
  },
  {
    "url": "api/basic-reactivity.html",
    "revision": "04b1a20cf06d4d836513d6acc68360f8"
  },
  {
    "url": "api/built-in-components.html",
    "revision": "538d715d4d5de4ec0f6a7f1cdef0d91f"
  },
  {
    "url": "api/composition-api.html",
    "revision": "ccb731e9ca8fd379b2a121724c058362"
  },
  {
    "url": "api/computed-watch-api.html",
    "revision": "2abffb4e6a73f77c0a1706b41b4cad6b"
  },
  {
    "url": "api/directives.html",
    "revision": "2f1fb862afbf3c5c8e63f8241c2d40c0"
  },
  {
    "url": "api/global-api.html",
    "revision": "c04a9b1fffe50afbc1202a0d33da57c7"
  },
  {
    "url": "api/index.html",
    "revision": "240caabac16a61af0c27a9c01774a851"
  },
  {
    "url": "api/instance-methods.html",
    "revision": "9b922abd2faf398dd379950ba75805b8"
  },
  {
    "url": "api/instance-properties.html",
    "revision": "2d4c15046ff96330ea4dbac30651e464"
  },
  {
    "url": "api/options-api.html",
    "revision": "f2d05e4a3437792ae8567a94c12b260a"
  },
  {
    "url": "api/options-assets.html",
    "revision": "107d641c3c7e290ac2c7ee0d6424aa6d"
  },
  {
    "url": "api/options-composition.html",
    "revision": "58ac439d5e2a0294aa43e70bc67610cc"
  },
  {
    "url": "api/options-data.html",
    "revision": "454b95627db3059773b1830930cc163b"
  },
  {
    "url": "api/options-dom.html",
    "revision": "d3a8561fcd1595c5ce3da88f1dd446fb"
  },
  {
    "url": "api/options-lifecycle-hooks.html",
    "revision": "220448f077902575ec91fa8cb06d6af0"
  },
  {
    "url": "api/options-misc.html",
    "revision": "4b96d24e94577f2ed7cf8ce0ca732ee7"
  },
  {
    "url": "api/reactivity-api.html",
    "revision": "132999aa8011885d300b1b5572cdc08f"
  },
  {
    "url": "api/refs-api.html",
    "revision": "ce22faf0ce74b59f8d2c8f49d041357d"
  },
  {
    "url": "api/special-attributes.html",
    "revision": "23804b9c79d5c0b0cd20133de2da2cea"
  },
  {
    "url": "api/test.html",
    "revision": "610441eafd40c9f84d20f9dfebf753d7"
  },
  {
    "url": "assets/css/0.styles.1dbc3a1a.css",
    "revision": "84c9039f3d98b7e8f6eaac8f9bf4aec9"
  },
  {
    "url": "assets/img/image-20200512004804075.7328dca0.png",
    "revision": "7328dca02e9f2adb8137a58142310a29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e8038e73.js",
    "revision": "b61768b3f3672d53c3d239d6d90d8b43"
  },
  {
    "url": "assets/js/11.01146306.js",
    "revision": "1b40d23c4ad916ffc62e5a4374dfb61b"
  },
  {
    "url": "assets/js/12.d10c77d1.js",
    "revision": "fb50cf5f43cd7598e934f638b41b4a07"
  },
  {
    "url": "assets/js/13.cd8f9965.js",
    "revision": "a9153e2e0b166e45141926bc50b49d51"
  },
  {
    "url": "assets/js/14.7f139971.js",
    "revision": "b3c918336c07dc9c2f8c40d072c45ab2"
  },
  {
    "url": "assets/js/15.f095d679.js",
    "revision": "4e73b7bb35f8d82b71d3965bdaa0090e"
  },
  {
    "url": "assets/js/16.52c94e80.js",
    "revision": "a8f06689cb088a0cee2b4bebf218831f"
  },
  {
    "url": "assets/js/17.9fb9226b.js",
    "revision": "579b5559ab5ef189ed437e82ba6b49d4"
  },
  {
    "url": "assets/js/18.ebc67669.js",
    "revision": "da627f3f04754c48e0bbf5e69fcbcba5"
  },
  {
    "url": "assets/js/19.2331ca2d.js",
    "revision": "cc9e4f98be6cd1265a985019dea8ac1b"
  },
  {
    "url": "assets/js/2.3137b411.js",
    "revision": "16363ef096c551fc0505811965fbedca"
  },
  {
    "url": "assets/js/20.777fe431.js",
    "revision": "fe5b425909b83ac5c1d57cbb3c07754e"
  },
  {
    "url": "assets/js/21.0dfd00f0.js",
    "revision": "276d462e64615cccd4fdf80fd30732b2"
  },
  {
    "url": "assets/js/22.1a2ed910.js",
    "revision": "30e0cb1a5d28ae952b76b0a33b117a96"
  },
  {
    "url": "assets/js/23.6dba3eae.js",
    "revision": "7632003e9991659694955a30653f7312"
  },
  {
    "url": "assets/js/24.45605400.js",
    "revision": "c6814aeaf8a510cd2e90ce4336fd64f1"
  },
  {
    "url": "assets/js/25.8026006e.js",
    "revision": "87f4617a14c369692cb50d0a10957500"
  },
  {
    "url": "assets/js/26.f3931332.js",
    "revision": "db54dda42d7947a14d173b09964800df"
  },
  {
    "url": "assets/js/27.b92a688d.js",
    "revision": "6fb71f5c34f8addfb12af2835624874d"
  },
  {
    "url": "assets/js/28.335bc2e1.js",
    "revision": "c6e920d1bc3c87d858a58603ce96f2db"
  },
  {
    "url": "assets/js/29.4e25e49a.js",
    "revision": "fb1404b815f09b029f5fddebed00143c"
  },
  {
    "url": "assets/js/3.ee396d74.js",
    "revision": "8799d1752d3d2cc741e90e0a678b1c0a"
  },
  {
    "url": "assets/js/30.63de0443.js",
    "revision": "c926902e10ec1d419cd21e76641dcb5d"
  },
  {
    "url": "assets/js/31.6332f567.js",
    "revision": "fae12aacc48ae0514e78a2cead8d16eb"
  },
  {
    "url": "assets/js/32.9c752ccc.js",
    "revision": "936227a188f04fce8d76a8bec8eb5e47"
  },
  {
    "url": "assets/js/33.5079ff85.js",
    "revision": "cb88093c9504d7ce5510b4490c173079"
  },
  {
    "url": "assets/js/34.6d81e216.js",
    "revision": "389cd03d87726279f9ec4ed01005a70c"
  },
  {
    "url": "assets/js/35.7d3340ce.js",
    "revision": "36b2cd672729565d7cf26b0f15c828a7"
  },
  {
    "url": "assets/js/36.ebd6f197.js",
    "revision": "e0fe05736bcc6f24d1858bd2921ae426"
  },
  {
    "url": "assets/js/37.abf1d56f.js",
    "revision": "c9924df613e6cd7b2b28415a5d85c3be"
  },
  {
    "url": "assets/js/38.3e0fdee0.js",
    "revision": "46ee873c8ce14eb83a60773a79797b8f"
  },
  {
    "url": "assets/js/39.6bea3a9e.js",
    "revision": "4a907f97b7bdd8ba4859f6917c056138"
  },
  {
    "url": "assets/js/4.72ad1f8f.js",
    "revision": "b85c320b5e80bba26cb5952abb51e5fe"
  },
  {
    "url": "assets/js/40.b046e3dd.js",
    "revision": "b0df04271cc6cf0241b4dcd093ae5264"
  },
  {
    "url": "assets/js/41.3a8fb3b2.js",
    "revision": "bee7bed7798b5f297f38d0fe0bfb4619"
  },
  {
    "url": "assets/js/42.67c26200.js",
    "revision": "cc9441d0827a7632a21c1d3f3ddb8071"
  },
  {
    "url": "assets/js/43.3278ac30.js",
    "revision": "2ddffc0bb5bcf0d0208fff7d9e2575b1"
  },
  {
    "url": "assets/js/44.1d86685b.js",
    "revision": "466d0ab24b2cd9bd6b93b32eb92084a9"
  },
  {
    "url": "assets/js/45.0dffd99a.js",
    "revision": "503f57e3139a59ef438762fe435e612b"
  },
  {
    "url": "assets/js/46.666089cf.js",
    "revision": "cddf1f299a23db410b6c9070e110a618"
  },
  {
    "url": "assets/js/47.9a3d0056.js",
    "revision": "37db87ad8be787d10317591878e547ee"
  },
  {
    "url": "assets/js/48.8d5d184f.js",
    "revision": "1636a80ec64585b11dad4f431f890ffc"
  },
  {
    "url": "assets/js/49.0af60b37.js",
    "revision": "170481bf3632f1c3d942323c6af4577c"
  },
  {
    "url": "assets/js/5.70bce789.js",
    "revision": "8a77ac4abea38fc56167a8e9b5c283ff"
  },
  {
    "url": "assets/js/50.1c29b204.js",
    "revision": "3153fefdece6b68f37e82266824e85e7"
  },
  {
    "url": "assets/js/51.b150bb29.js",
    "revision": "fdbb31bc772e7b17ada66866f13bbb2a"
  },
  {
    "url": "assets/js/52.12601ed1.js",
    "revision": "28b97c361a778453d55fdaf232425350"
  },
  {
    "url": "assets/js/53.6c9d41bb.js",
    "revision": "a29e8bf0549f6c38297dbb69f1b1a39e"
  },
  {
    "url": "assets/js/54.5cf645ed.js",
    "revision": "30934ece2d2eecbaac7efe89302d339b"
  },
  {
    "url": "assets/js/55.f8d8b1f4.js",
    "revision": "d1c0c1d6e837302ae17d319bcc0d138c"
  },
  {
    "url": "assets/js/56.abac804c.js",
    "revision": "5aaa75e1631a3bb2cf452007c878212f"
  },
  {
    "url": "assets/js/57.868d4305.js",
    "revision": "a0c9862e8b5a50b22bb79fa5cf702a5d"
  },
  {
    "url": "assets/js/58.84d9a3c3.js",
    "revision": "5287f9ed663236158f23de1fee317f4d"
  },
  {
    "url": "assets/js/59.e4719595.js",
    "revision": "847e1f93179600a320fd8a74f631b5ce"
  },
  {
    "url": "assets/js/6.2d838fe9.js",
    "revision": "51a6ebcd0a2d919a5768f72beb3421e7"
  },
  {
    "url": "assets/js/60.744e82a9.js",
    "revision": "fa2da7282aa005dfe91dea24729b8bca"
  },
  {
    "url": "assets/js/61.cf81e79a.js",
    "revision": "273627ac51d55dd623a37d946e941da2"
  },
  {
    "url": "assets/js/62.df11ee3a.js",
    "revision": "e1d5f92bfca24304f480a7ec04a9fceb"
  },
  {
    "url": "assets/js/63.d0793d2a.js",
    "revision": "059a0801391b97978ea4d8bd9b8c2098"
  },
  {
    "url": "assets/js/64.5794557c.js",
    "revision": "acbb68db6f6d56f9f789d5216ed77580"
  },
  {
    "url": "assets/js/65.e04c4507.js",
    "revision": "df8fb129c83d0e94a52b5cc9e2003914"
  },
  {
    "url": "assets/js/66.1dacd37f.js",
    "revision": "2ae29d45e383268c3411ce13c746a208"
  },
  {
    "url": "assets/js/67.ce218e88.js",
    "revision": "0b55408ffcf4ee31a77006996ac73d77"
  },
  {
    "url": "assets/js/68.c0f386cb.js",
    "revision": "088728954c64a053739a5fe9b01030a7"
  },
  {
    "url": "assets/js/69.5bb330da.js",
    "revision": "e728beefd8afb53f222cce6177045912"
  },
  {
    "url": "assets/js/7.f58b0375.js",
    "revision": "6118119f09453e8551f2cf7dedcd6e69"
  },
  {
    "url": "assets/js/70.4fc1111a.js",
    "revision": "dffd11c5b464a60762c49a1bf181fb6c"
  },
  {
    "url": "assets/js/71.480d2625.js",
    "revision": "b24b6a0b3ca01e6ea36097d1c88587e8"
  },
  {
    "url": "assets/js/72.1513f240.js",
    "revision": "039da0e9fcd2f470f608ffecc759557f"
  },
  {
    "url": "assets/js/73.ffd09d5b.js",
    "revision": "1878bb748385c4a622c9632c3623605a"
  },
  {
    "url": "assets/js/74.f2becae1.js",
    "revision": "a98fb16a989bc333d8775041aa422e90"
  },
  {
    "url": "assets/js/app.11bf74e8.js",
    "revision": "87511f8a9fe91567015852f26dc6d791"
  },
  {
    "url": "assets/js/vendors~docsearch.25c060a7.js",
    "revision": "55497a5fdc29711df60bec782dc59d96"
  },
  {
    "url": "assets/js/vendors~search-page.636abfb2.js",
    "revision": "53653bdc528253afb1a312a1c77efb42"
  },
  {
    "url": "index.html",
    "revision": "d47e02b93bac22e0283a8804208fc6d6"
  },
  {
    "url": "java/core/0basic.html",
    "revision": "4ac32293919843849898927d5c73a934"
  },
  {
    "url": "java/core/1ObjectsAndClasses.html",
    "revision": "80b8c965cd5ff4624c904d403e945074"
  },
  {
    "url": "java/core/2Extends.html",
    "revision": "18aad30a93433731fe5f743c835444bc"
  },
  {
    "url": "java/core/3Interface.html",
    "revision": "f232eb551108d44ea36790b01919f097"
  },
  {
    "url": "java/core/Colllection.html",
    "revision": "2a443d358f993eabbd9baec8615503b6"
  },
  {
    "url": "java/core/generic.html",
    "revision": "04109986095008cbe1f4b87be2234ebc"
  },
  {
    "url": "java/core/index.html",
    "revision": "6fb72681407645c715ada602eccf21fc"
  },
  {
    "url": "java/core/IO.html",
    "revision": "747c4b41fb96d4d2aaf5af2891df3dbb"
  },
  {
    "url": "java/core/NIO.html",
    "revision": "b6e056d409cf9ddf455cf0e858b1ce0f"
  },
  {
    "url": "java/core/Stream.html",
    "revision": "a4a3db230c046a237a4edac9fba3d4f5"
  },
  {
    "url": "java/core/test.html",
    "revision": "b8121106ac92fb558d2f93f60320cadd"
  },
  {
    "url": "java/core/多线程-原理.html",
    "revision": "833222dde5e8480036bd20387833239d"
  },
  {
    "url": "java/core/多线程-基础.html",
    "revision": "c31f37a6354dd158474cce9e597085b3"
  },
  {
    "url": "java/core/多线程-工具.html",
    "revision": "f3277df7b8313ab3ae7e5b3287885770"
  },
  {
    "url": "java/core/正则表达式.html",
    "revision": "ca4da9be34537d6f848d27ece081e9d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
