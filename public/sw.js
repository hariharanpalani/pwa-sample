self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing service workers......');
});

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating service workers.....');
    return self.clients.claim(); //it is must to return the claim for client
});

self.addEventListener('fetch', function(event) {
    console.log('[Service worker Fetching the resources....', event);
    //following will help service worker to decide the behavior of the response.
    //we can add catching feature when we are offline over here.
    //otherwise, fetch the updated resources from the server
    event.respondWith(fetch(event.request));
});