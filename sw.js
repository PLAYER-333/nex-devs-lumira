
const CACHE_NAME = 'lumira-offline-v1';

// Install event - skip waiting to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - runtime caching strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          // Check if response is valid
          // We must allow status 0 (opaque) for no-cors requests (like Tailwind CDN script)
          // We must allow status 200 for cors requests (like React modules and Fonts)
          const isValidResponse = networkResponse && 
            (
              (networkResponse.status === 200) || 
              (networkResponse.status === 0 && networkResponse.type === 'opaque')
            );

          if (!isValidResponse) {
            return networkResponse;
          }

          // Clone response to cache it because the response stream can only be consumed once
          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // If offline and not in cache, just fail silently or return nothing
          // The browser will handle the failure, but for a PWA we might want a fallback page in future
        });
    })
  );
});
