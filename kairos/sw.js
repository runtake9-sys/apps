self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{ if(new URL(e.request.url).origin!==location.origin) return; e.respondWith(fetch(e.request).catch(()=>new Response('オフラインです',{headers:{'Content-Type':'text/plain; charset=utf-8'}}))); });
