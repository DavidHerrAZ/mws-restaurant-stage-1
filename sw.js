const offlineVersion = 'restaurants-offline-v3';

const offlineFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/',
  '/css/a11y.css',
  '/css/responsive.css',
  '/css/styles.css',
  '/data/',
  '/data/restaurants.json',
  '/img/',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/sw.js'
];

// Wait until the the service work installs to verify cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    // cache all site assets for offline viewing
    caches.open(offlineVersion).then(function(cache) {
      return cache.addAll(offlineFiles);
    })
  );
});

// Double check cache for new version. Delete old cache assets.
// Source: Udacity wittr project
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            return (
              cacheName.startsWith('restaurants-') &&
              cacheName != offlineVersion
            );
          })
          .map(function(cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// Add a network listener to serve cached items
// Responds with cache if available, caches if not
// Source: Udacity wittr project
// Source2: https://codelabs.developers.google.com/codelabs/offline/#7
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
});
