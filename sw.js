var CACHE_NAME = 'CYXYXM';
var urlsToCache = [
  '/index.html',
  '/history/index.html',
  '/guide/index.html',
  '/people/index.html',
  '/fix/index.html',
  '/fonts/Helvetica.otf',
  '/styles/fix.css',
  '/styles/main.css',
  '/images/'
];

// Registration of service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
          console.log('ServiceWorker registration failed: ', err);
      });
  });
}
else{
  console.log('Service Workers not supported');
}

// Installation of service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetching of service-worker
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});