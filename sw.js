const CACHE_NAME = 'flixio-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/js/state.js',
    '/js/router.js',
    '/js/data.js',
    '/js/utils.js',
    '/js/components/ProfileScreen.js',
    '/js/components/CatalogScreen.js',
    '/js/components/ContentCard.js',
    '/js/components/HeroBanner.js',
    '/js/components/Carousel.js',
    '/js/components/ProfileModal.js',
    '/favicon.svg'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            try {
                await cache.addAll(ASSETS);
            } catch (e) {
                console.warn('Failed to cache some assets:', e);
            }
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (new URL(event.request.url).origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then((cached) => {
            return cached || fetch(event.request).then((response) => {
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, clone);
                    });
                }
                return response;
            });
        })
    );
});
