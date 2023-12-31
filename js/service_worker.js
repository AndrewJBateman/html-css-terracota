// register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service_worker.min.js').catch((registrationError) => {
      console.error('ServiceWorker registration failed: ', registrationError)
    })
  })
}

// Service worker cache core static resources
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./"]);
    })
  );
});

// Fetch resources
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
