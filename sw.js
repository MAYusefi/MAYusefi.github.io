/**
 * Service Worker
 * Handles caching and offline support
 */

var CACHE_VERSION = 'v1.1.0';
var CACHE_NAME = 'portfolio-' + CACHE_VERSION;

var PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/resume.html',
  '/projects.html',
  '/skills.html',
  '/contact.html',
  '/certificates.html',
  '/404.html',
  '/css/variables.css',
  '/css/reset.css',
  '/css/animations.css',
  '/css/components.css',
  '/css/layout.css',
  '/js/main.js',
  '/assets/profile.svg',
  '/assets/resume.pdf',
  '/assets/project-placeholder.svg',
  '/manifest.json'
];

// Install
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

// Activate
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(cacheNames) {
        return Promise.all(
          cacheNames
            .filter(function(name) {
              return name.startsWith('portfolio-') && name !== CACHE_NAME;
            })
            .map(function(name) {
              return caches.delete(name);
            })
        );
      })
      .then(function() {
        return self.clients.claim();
      })
  );
});

// Fetch - Network first, fallback to cache
self.addEventListener('fetch', function(event) {
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        var responseClone = response.clone();
        
        if (response.status === 200) {
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseClone);
            });
        }
        
        return response;
      })
      .catch(function() {
        return caches.match(event.request)
          .then(function(cachedResponse) {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({ 'Content-Type': 'text/plain' })
            });
          });
      })
  );
});

// Background sync
self.addEventListener('sync', function(event) {
  if (event.tag === 'sync-form-data') {
    event.waitUntil(syncFormData());
  }
});

function syncFormData() {
  return Promise.resolve();
}
