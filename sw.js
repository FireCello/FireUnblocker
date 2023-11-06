importScripts("/FireUnblocker/uv/uv.bundle.js");
importScripts("/FireUnblocker/uv/uv.config.js");
importScripts("/FireUnblocker/uv/uv.sw.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
