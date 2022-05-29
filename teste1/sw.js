//Handling de eventos
self.addEventListener("install", function (e) {
    console.log("Service Worker - Installing", e);
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./style.css","./list.png","to-do-list.png","index.js"]);
        })
    );
});
self.addEventListener("activate", function (e) {
    console.log("Service Worker - Activating", e);
    return self.clients.claim();
});
self.addEventListener("fetch", function (e) {
    console.log("Service Worker - Fetching something", e);
    e.respondWith(
        caches.match(e.resquest).then(response => {
            return response || fetch(e.request);
        })
    );
});