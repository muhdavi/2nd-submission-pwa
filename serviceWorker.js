const CACHE_NAME = "second-submission";
const urlToCache = [
    "/",
    "/nav.html",
    "/manifest.json",
    "/serviceWorker.js",
    "/apple-icon.png",
    "/favicon.png",
    "/pages/detail.html",
    "/pages/favorite.html",
    "/pages/favorite.js",
    "/css/materialize.min.css",
    "/css/styles.css",
    "/js/api.js",
    "/js/db.js",
    "/js/idb.js",
    "/js/index.js",
    "/js/materialize.min.js",
    "/images/maskable_icon.png",
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlToCache);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches
            .match(event.request, { cacheName: CACHE_NAME})
            .then(function (response) {
                if (response) {
                    console.log("ServiceWorker: Aset dari cache: ", response.url);
                    return response;
                }

                console.log("Service Worker: Aset dari server: ", event.request.url);
                return fetch(event.request);
            })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cahce " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});