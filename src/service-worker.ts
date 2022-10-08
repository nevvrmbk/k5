/// <reference lib="WebWorker" />

import { version, build, files, prerendered } from '$service-worker';

export {};

declare const self: ServiceWorkerGlobalScope;
const cacheName: string = 'k5-cache-' + version;

self.addEventListener('install', (e) => {
	e.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				cache.addAll([...build, ...files, ...prerendered]);
			})
			.then(() => {
				self.skipWaiting();
			})
			.catch((err) => {
				console.log(err);
			})
	);
});

self.addEventListener('activate', (e) => {
	e.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return Promise.all(
					cacheNames.map((cache) => {
						if (cache !== cacheName) {
							return caches.delete(cache);
						}
					})
				);
			})
            .then(() => {
                self.registration.navigationPreload.enable();
            })
			.catch((err) => {
				console.log(err);
			})
	);
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        fetch(e.request)
    );
});
