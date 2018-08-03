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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8dc1633840f2469f0064ae44e2415b7"
  },
  {
    "url": "assets/css/2.styles.e5d7d25f.css",
    "revision": "4872e938053ad69c6cc0fb7e5052826c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.190fee55.js",
    "revision": "7903482b46e22db80e8b674e5f34677d"
  },
  {
    "url": "assets/js/1.ba2203dc.js",
    "revision": "1b1b2a906fd3c1fdcd4a7a2567404aea"
  },
  {
    "url": "assets/js/app.f0512756.js",
    "revision": "6613902998590f5b465ce605fe6cfd44"
  },
  {
    "url": "guide/state.html",
    "revision": "1934bfca07329bcb3b0ce9c12a373e8b"
  },
  {
    "url": "index.html",
    "revision": "8490ba261d8532e5986f1c56a40b53e5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
