if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"6f3c026e79e54d76a320f64a2b3b626a","url":"index.html"},{"revision":"2eb14e18d18201aec19c20f11f9c6efc","url":"precache-manifest.2eb14e18d18201aec19c20f11f9c6efc.js"},{"revision":"c4772aad4208b297b5389b4727cee70b","url":"static/css/About.90b2c462.chunk.css"},{"revision":"a5c4191a5ab4db4c50db12acec2b61f8","url":"static/css/App.76fa6b96.chunk.css"},{"revision":"c42c866c3f4dadb0d4c84cf0c81ed3e4","url":"static/css/Cards.7c147b3e.chunk.css"},{"revision":"2b3126836d27de19beefc0f62bcdb984","url":"static/css/Chart.55045a54.chunk.css"},{"revision":"7dac928f9b708b5ee17a582a07d84d27","url":"static/css/CountryPicker.c70c1422.chunk.css"},{"revision":"e2365bf466b8ef7fe499abb9bbbf4f74","url":"static/css/Footer.607d1502.chunk.css"},{"revision":"254d334663e959d49840625b76d62675","url":"static/js/0.7209b8d7.chunk.js"},{"revision":"1f0a4f2b0de0d00e13baa8c9a62e3765","url":"static/js/10.cb1ba774.chunk.js"},{"revision":"5b321e5ee2f93c76483736f12a006ed4","url":"static/js/11.abd1286e.chunk.js"},{"revision":"50827d49a11ea422144139abfd2f8b91","url":"static/js/12.f4db9a27.chunk.js"},{"revision":"54cef18cf4511c0a1cc7c93c2a573744","url":"static/js/13.6f4e6ed4.chunk.js"},{"revision":"bf1fbd1a7e883278d972119edb975d29","url":"static/js/9.c461d079.chunk.js"},{"revision":"75f73291b55c02205470fc4987e35fb3","url":"static/js/About.85f8a1f5.chunk.js"},{"revision":"f68f704586aa1a2d583fa53717cc7b58","url":"static/js/App.9430e936.chunk.js"},{"revision":"b95b03d99a8b438159784b2cafec3a1c","url":"static/js/Cards.b3c57133.chunk.js"},{"revision":"18dde02ae0adda97ed30eb9503bb824e","url":"static/js/Chart.ef878139.chunk.js"},{"revision":"c8f69cc9542c36cdfc1fe012b3515b31","url":"static/js/CountryPicker.5d3e7be9.chunk.js"},{"revision":"6108c91f106d973b0fe143aeeedcea1f","url":"static/js/Footer.0453b82f.chunk.js"},{"revision":"fb8292592113ebb38c2224a145a380c0","url":"static/js/main.b591e39a.chunk.js"},{"revision":"e233ebc3d5b627d043fe1ec6131fe14d","url":"static/js/runtime-main.94cc597d.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp(
        'https://data\\.covid19india\\.org/.*\\.json',
        'https://covid19\\.mathdro\\.id/api'
      ),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
