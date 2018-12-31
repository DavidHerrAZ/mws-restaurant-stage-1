const offlineVersion = 'restaurants-offline-v1'

console.log('registered', offlineVersion);

// self.addEventListener('install', function(event) {
//   // cahce all site assets for offline viewing

//   event.waitUntil(
//     caches.open(offlineVersion).then(function(cache) {
//       return cache.addAll([
//         //site asssets
//       ]);
//     })
//   );
// });