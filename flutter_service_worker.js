'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"cert.pem": "889a41bb3401faaedb515974c7a11736",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
".git/logs/refs/heads/master": "4954bae510a452b0977c417cf5287863",
".git/logs/refs/remotes/origin/master": "7b95a8e6a1438afca72af0e4d8d5d8bd",
".git/logs/HEAD": "4954bae510a452b0977c417cf5287863",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "0c2752ce1fe57f7ade48db0f98a3c00b",
".git/ORIG_HEAD": "7b81a3febf751b624b04f5b3f3f98ecc",
".git/objects/ca/6cb17f48da678501e215cfa758610ba1cffecd": "66ae585cf7632fdd5f5ccc36b793fc25",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/c5/9b673b072988db3a7bfb6a217266ee725a1139": "93b191e9c088b9111c10919b2e3e0e0d",
".git/objects/ee/cd034109797f571b45743bf98ffdd38fec26d5": "797da96d4d795e89bf62e63d7be9a092",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/374eb4835a929f0bd0dbe9dff59d74b4ccf2e5": "1ec7306922a99d3d27c49a38157f8004",
".git/objects/e4/d4e89a4a8f793c81b3bd835b7d07f61f229189": "4db04a8bb5a6a13758c68efc480a7a47",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b3/2c30b99ee3a1b0124dad2ad478a557a1a579da": "78f8d51490ec12b5b7c72214f8b17519",
".git/objects/b3/ac6d32dc629125d408eb3d5bc7697373459f09": "5b2e08fbfcbb75749a290017f82e2252",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/28/d7733d82a0ce452265d26f4405320dfc0f707d": "8362fda15024a5e42697bb4a3d2b46e1",
".git/objects/e3/269635f6f7a6762bdd73d43aa12e5e9cd8c892": "fbb705a9706fd02c74fe652f1a69f2dd",
".git/objects/1f/670e46f094b749d8889d8e5543ccaddc50de5a": "20fb31a2fb899cb92ff01d29b800a651",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/57ed0efd8000c7583007848c50b12ce1ba1de6": "b84442454c75bb09e96536c181c68b34",
".git/objects/93/80a47c41cff06f82090ecbc0aedafd422ab3df": "e0f2d6e56065ac25bb18d24fbeba63f7",
".git/objects/20/693b25d084969b2af9ab01575ac387a700f4c6": "6cdc002184375f14e37f7be9a9455010",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/156a059f229ff50196c8e10df3a29cba46fc6e": "9c67ba19547bfad5478723a507aa6eef",
".git/objects/82/03e55d217ced047a3c45c632b9ed54b70b7033": "1fce1eb56ce44fbaa762324ae4e62f25",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/5b/8d72a76bd4cb7225b6d80321366bb8bb292368": "ff53ca7d31ae41c9fa3c88f4bc9ea24b",
".git/objects/ab/0132985746729faf48b30cbfab8b67d2431cea": "579fbe7672a5ac47af81110da1a5d6e2",
".git/objects/51/acd8148da57399df464df667c79ca9528e771d": "b04ec1a84c3e8c06401d8dcbfe2edc54",
".git/objects/7a/4da4927dac4a29d3391b346a3b2908df985622": "e7112dee2291bbf34d8574285432b98b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/4254482026bdbe31f48516d2a991b257b27a82": "f949657c7ad43ff35850035231fd4dd7",
".git/objects/a6/896e220d3a8f614bc3c8f8061d6d9bab7e3e17": "7fc50cd120ab1920087376cce757e9d6",
".git/objects/fc/138f054bc8de9e7926d60579ad4752d52f61ba": "192ae9b5512a0ab50d75a57d63a91892",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/05/e44c824b1e8a156b05b01fa1dd6c8de18b7f34": "7471e682b3a31ed7ad5e4122c5089017",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/eb20bb410271796f469492b93f2a68b0a2473e": "0092716eb9dd8339e52b2b36870d07dc",
".git/objects/64/6ac5287897bb3e0548462edd983dd14b393170": "9c80f2ad0fcd700dc6e55bcf1fa7c5fa",
".git/objects/ed/d7982f802c02186e42654f41ed1671a21e7519": "51522c7768e5531457dc6541201289bd",
".git/objects/73/4cf4581ba54c5ce37e7c99c788a4f0079100a6": "458c3e8e189ac4de64da6ff44faa3b66",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/2c/17125aaec3e6ec115c6c8bcc2ed43447dc9e34": "1af530c6b58ce44f9fdd190ae6fceb9d",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/77/ab5020437f7e8082a97af188000071e9d27b81": "793bd381a2c09161ce2444ed636a671f",
".git/objects/f1/b761f050fa9f864b3b7a41a2fb249a63544d40": "faf96250a7967c36b4cb252a09b529be",
".git/objects/45/20ff93aae4b252281b558e990a6f98d9b30a0e": "c2a48640dc4d2c8bdb0456d2c6dd224e",
".git/objects/d9/ed4a9aa02f80a30272f690dc8f6a3d9e98e660": "1cb9bf3f038026a082d57325707a458b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/6e/2b70c57e3a29d218f232d079dab8e677b48aec": "19969bd60c0c81d3783e83ce42c1406a",
".git/objects/6b/4b75d84fd77363b3b0ecd4fad5d5a5792c8f64": "bd39c503ae1e4cb4695cb62bf3385488",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/ac/e781fb2ad03e7110f056b8c597bb28e1bf4a80": "ddd336cfc2a5ad1ffa071838ff10258f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b5/482f32026acf71591827b79d2a75712589668f": "ebbf6555d799bcbff8eccc582e726487",
".git/objects/b5/2bf8b7919b66d913e76eb161386e0a30eefe50": "44e57b636ae168387a7c8cec99857ea2",
".git/objects/fd/29b1417dfb33e804efa3ef95e3bcc935b6bda7": "355d9502cc0d472f4dcc2e7b4c3d45a2",
".git/objects/dc/c637e64ce50edcaaf825e5d7914744d5ecff26": "bc400cc08fedf2884ace54940cc94213",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/33/56083f1ff242848e93d86eb3ca52bf8461d5e0": "110e323d7771bc9ea9f5635ef2a856dc",
".git/objects/2a/c1c5c7767f534ac668e9daca0884fa53304b72": "0de8253f46e5f6d4a02adb8f782824f6",
".git/objects/c0/0cff828b1fb6eabc9bce72ec7b34e97c28d70e": "1dc3c646a3d7d0bbacdc3253ad933c6e",
".git/objects/ef/8054b76bc53d7c10d0c7f31a344b93e346eee4": "47c5c588f1177e28fd12af01f797cd61",
".git/objects/ef/e65e0caf34bf8e16e078794eda481f6141f017": "5c5aec7b7894a2b65798a6fe62cf6e95",
".git/objects/a0/cc03224cb1c39687d69171d44b578e89d8a18b": "893bad6b9417a36545c0120782fd783f",
".git/objects/47/4e8514d8d370e35b1197d0cc710e9c72d3c370": "6d19a2ba7b1389f06bbf742b5cd76b90",
".git/objects/43/73efe105b54d28eb2e841874a979305d5795b4": "3f157afb419d82a985845529ed90dd04",
".git/objects/80/19da9a789334ab13ea2de6b6b2923b2ba54fb9": "a7ebe555c1d1f9405f5308057755f48e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/4e/ea1f995bb8f9770dda0d8b738a9ffc35161c40": "6f18d02abcad84bcbccef43630f21fe8",
".git/objects/c3/d940fd9e814a3970490dc00d713523dece7964": "3ba4dbb240a94bb8669c9859e4de2cdc",
".git/objects/fe/3bdfd7893163c8fafd9569ba0935483e53a194": "0d47652230675bc3c6c928bdd5a07d1c",
".git/objects/36/4f3334b5abc8404716f24f7cc946878d3027de": "92b5e41e603d41feab4418207dbf17a1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/81/82cfdfd2118bd7631c12edca71269400930cf4": "458533ae8a2b99dd8fece97ca6a5e5d3",
".git/objects/3b/ae5d1603602dc18f8dcbc3e8e9ec15a207d6c7": "ccaacd04df6929d98da021d48e1f9ec4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/7c/bae0124e8967c5ddc272de90645b5148e46e53": "846560b6ef312bfa88beb2d5154537c4",
".git/COMMIT_EDITMSG": "e85dde330c34efb0e526ee3082e4353b",
".git/config": "178f0f39acb2e74ebfe2719b601f050a",
".git/FETCH_HEAD": "9d55768bfd71f9458ee6ffd1013441f0",
".git/refs/heads/master": "7b81a3febf751b624b04f5b3f3f98ecc",
".git/refs/remotes/origin/master": "7b81a3febf751b624b04f5b3f3f98ecc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"main.py": "20361fae38a4a35a9caa99e2f34d4d78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "66699bf24e56842482728a7e4ea7ac0a",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "a050d552b43195b00c873664e56bcb0a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "313b83f263e1d9f86566523974214b24",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"key.pem": "c9994f20276fd9899c67073112accbb9",
"flutter_bootstrap.js": "1e44abc600730494bbd31fcf8c881d24",
"manifest.json": "7a8d143a76909ab3c68090fbea36e0f9",
"version.json": "2f2e752c0eaf3adc9935bb07e83c77b9",
"localhost+3.pem": "8f598e525ec20fa6af7b42fea03df1c8",
"index.html": "ea703eb2f8a7eb472aa8b41a143b6e6c",
"/": "ea703eb2f8a7eb472aa8b41a143b6e6c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"localhost+3-key.pem": "fe32301c5a0f457eed5947f51ecbca8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
