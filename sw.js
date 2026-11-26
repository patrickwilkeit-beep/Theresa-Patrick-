const OLD_CACHES = ['tp-pwa-v1', 'tp-pwa-v2'];

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    ...OLD_CACHES.map(name => caches.delete(name)),
    self.clients.claim()
  ]));
});
