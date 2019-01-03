const offlineVersion = "restaurants-offline-v1";

const offlineFiles = [
  "/",
  "/index.html",
  "/restaurant.html",
  "/css/",
  "/css/a11y.css",
  "/css/responsive.css",
  "/css/styles.css",
  "/data/",
  "/data/restaurants.json",
  "/img/",
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg",
  "/js/",
  "/js/dbhelper.js",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/js/sw.js"
];

// Wait until the the service work installs to verify cache
self.addEventListener("install", function(event) {
  event.waitUntil(
    // cache all site assets for offline viewing
    caches.open(offlineVersion).then(function(cache) {
      return cache.addAll(offlineFiles);
    })
  );
});
