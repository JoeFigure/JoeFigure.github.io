'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "1cda22b8d55227cd6b8664f8ebf59a8e",
"/": "1cda22b8d55227cd6b8664f8ebf59a8e",
"main.dart.js": "2888b6f97aa3fa3fd9d90ec553c20818",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "55c781c34f20db5be157a809a54394b8",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "02b95dee0f604bf1c4f5589c0ce0ba35",
"assets/FontManifest.json": "c7bcacec31d2632aa11e1f9437bce8f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/icon_play.png": "81e3d2641e3e8e38e921de4ba3cb7ff3",
"assets/assets/images/icon_greenscreen.png": "f41218b5757479e1cf9e9c6bcf0c8229",
"assets/assets/images/btn_animating.png": "fbf20c9d49406f45233f45cece7a02bd",
"assets/assets/images/btn_signpost.png": "125df575e06c583766ba31e7b0a2611d",
"assets/assets/images/icon_playback_speed.png": "0ffeb04ac9bdb35aa4953602650fee55",
"assets/assets/images/aard_logo.png": "f0bda6a2fbc90ef7d05177522d2e9a5f",
"assets/assets/images/icon_timer.png": "733c507d01c1ab4ba8ad17373119b8ad",
"assets/assets/images/icon_undo.png": "98f8d9583ed0536711819b2a9b402a3b",
"assets/assets/images/arrow.png": "d7580f8a4ab55e020df80c93c3c074e3",
"assets/assets/images/tools-icon.png": "492ba2dd1cd42fc495863edeb2c9000c",
"assets/assets/images/btn_workshops.png": "b7c5ff84348cf815ebd93026baae2f4f",
"assets/assets/images/icon_onion.png": "b2de0d475f166fac9586d6a0ac9ab7ba",
"assets/assets/images/icon_camera_white.png": "1179556e038646a2d8ce894f492e88dd",
"assets/assets/images/icon_camera.png": "e04c7911a288ea3bd4a74a7d29d07bac",
"assets/assets/images/help-icon.png": "64df87e1209f5de00ff22764267b4154",
"assets/assets/images/icon_lipsync.png": "4210180e55c9608ebe57b1722e85532c",
"assets/assets/fonts/FuturaStd%2520Bold.ttf": "05dee48d64dc84bbaf81c99fd8093c18",
"assets/assets/fonts/Futura.ttc": "8bd657534211c6c0356a2bb5f6a1d781"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
