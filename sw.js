/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/04/05/hello-world/index.html","5e76d71af9d1dbe30ace71e307dca2bf"],["/2019/04/06/3Pad演奏Chime-Wait-For-Me/index.html","28ba663e7bb3c5634ecf5adcb2a695b7"],["/2019/04/06/小白测试用文章/index.html","b73c43ae1c6894045f57bef8bb5211ea"],["/2019/04/06/我和小陌大佬的合作工程/index.html","b813f449c14d4ca680c8130dee700925"],["/2019/04/11/搬运/index.html","0ac1c966e733bbb43d779b3a27968b5b"],["/2019/04/13/2019-4-13搬运/index.html","ddcc36b1eba7aac866c96306823c156d"],["/2019/04/14/2019-4-14搬运/index.html","84d24b9e64f123f8a7bdd8b374ec1cb6"],["/2019/04/15/2019-4-15搬运/index.html","c7f9eaa1a9e8c7c21b8f9d41d9bbe745"],["/2019/04/16/2019-4-16搬运/index.html","ec43e53fc01fdbab43c413873369db36"],["/2019/04/22/2019-4-22搬运/index.html","cb25e564badd8f6978c2614840551835"],["/about/index.html","5a49b36c9c448b5baa571b715bcd41cd"],["/archives/2019/04/index.html","68477578eaec431add32080d5ae9aa2f"],["/archives/2019/index.html","6ba1f9935738936324f3def4b591c4c7"],["/archives/index.html","63f2d9fdaada54f3f7676cac383ff923"],["/bundle.js","b147f4ca18b6ca878e83b1445beb8041"],["/categories/index.html","dd87be74bf6359dbfdc882b8b39739ed"],["/categories/工程下载/index.html","81d11919a0b88eba7a116eba2a77eb9a"],["/categories/测试/index.html","a44121244241762b2b1dd9a957867925"],["/categories/灯光秀/index.html","9199a2a9c5f31585b7c04cea7ed14dd9"],["/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["/css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/css/main.css","38354c04058d872d629bc1180dc9f095"],["/css/style.css","4080250e86500e4ed21df292edf08da9"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["/image/background.jpg","f92ee85065ad64016a3477dadc71f204"],["/images/Jikexiaobai.png","5aa36c4dc31b16622e39748f96749dd3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg.jpg","f92ee85065ad64016a3477dadc71f204"],["/images/alipay.png.png","5aa36c4dc31b16622e39748f96749dd3"],["/images/apple-touch-icon-next.png","b376c4f3b212675429e81618c35651e7"],["/images/avatar.gif","0ce4c0d408976e0ad4257395bc35b63c"],["/images/avatar.png","5aa36c4dc31b16622e39748f96749dd3"],["/images/avatar.png.png","5aa36c4dc31b16622e39748f96749dd3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e6126ef7019556a92a912360e4bc3f98"],["/images/favicon-32x32-next.png","333c440d9009ba79c0c2b328599a39d2"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f6a5ebc634dd218c4a50db8598695b69"],["/images/wechatpay.jpg.jpg","f6a5ebc634dd218c4a50db8598695b69"],["/index.html","d4cd28185e35f97830595a5179547168"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","ff0d7db2ae445ecbe05873c54f365e8a"],["/lib/canvas-nest/README.html","a3068631c9280326383fb58b8e63cfde"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/style.css","52e0947497241863100f97ca49093350"],["/sw-register.js","31cc1e1994265ec37a30c5c83448dadf"],["/tags/3Pad/index.html","337fe2ddbed58675c333d517d579df60"],["/tags/Chime-Wait-For-Me/index.html","378faed0f858f0e87e1c86ac91a99997"],["/tags/Retina-2-1/index.html","35b490d8866577d5821656f4897acc5e"],["/tags/index.html","828fb5e372b11f98cec5aeb3fd35cebf"],["/tags/分享/index.html","d8ecc19a1fd8e2ae96c79e6e670ebbd2"],["/tags/原创工程/index.html","bfe754203b30db8308b0f6dd99a2d483"],["/tags/合作工程/index.html","b6f4c8e335e7e82c761fb7280ee5d9dd"],["/tags/搬运-EYD4M-工程下载/index.html","c4d833149e856bff9eab5ceb1393fd1b"],["/tags/搬运-Kaskobi-工程下载/index.html","e988685c99d7a82c2f73b2259705a2aa"],["/tags/搬运-K神-工程下载-搬运/index.html","4046b8607e272c3bdc4a7c63421aee6d"],["/tags/搬运-Neophyte-工程下载/index.html","00a18e474c7664b2f8898c86e5344695"],["/tags/搬运-OmegaVibe-工程下载-搬运/index.html","28791ce3454fcc991e1051e4c1c2713f"],["/tags/搬运-Sergio-Valentino-工程下载-搬运/index.html","a10c4f6f9195c612ebd1651a7c6e1ce1"],["/tags/教程/index.html","f124dacbaf5a032f90d14921b036b174"],["/tags/测试/index.html","a49265d6fc9dbda91a420eca2ebee68c"],["/tags/灯光秀/index.html","445da05e9389c73b42c9da57389feac6"],["/tags/翻弹工程/index.html","1675aa5a5c9dfef2ab095d40a749b9e6"],["/uploads/avatar.png","5aa36c4dc31b16622e39748f96749dd3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
