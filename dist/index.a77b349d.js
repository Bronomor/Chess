// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZaY1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b8d6aa19a77b349d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kIUz3":[function(require,module,exports) {
var _three = require("three");
var _orbitControlsJs = require("three/examples/jsm/controls/OrbitControls.js");
var _fbxloaderJs = require("three/examples/jsm/loaders/FBXLoader.js");
var _objloaderJs = require("three/examples/jsm/loaders/OBJLoader.js");
// board
// 0 <- empty field
// 1 <- white pawn
// 3 <- white bishop
// 4 <- white knight
// 5 <- white rock
// 8 <- white queen
// 9 <- white king
// -1 <- black pawn
// -3 <- black bishop
// -4 <- blackknight
// -5 <- black rock
// -8 <- black queen
// -9 <- black king
let board = [
    [
        -5,
        -4,
        -3,
        -9,
        -8,
        -3,
        -4,
        -5
    ],
    [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1
    ],
    [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ],
    [
        5,
        4,
        3,
        9,
        8,
        3,
        4,
        5
    ]
];
// renderer
const renderer = new _three.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// scene
const scene = new _three.Scene();
const camera = new _three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//controls 
EventsControls = new EventsControls(camera, renderer.domElement);
EventsControls.attachEvent("onclick", function() {
    if (this.focused.name) king.position.set(king.position.x + 12, king.position.y, king.position.z);
    console.log("this.focused.name: " + this.focused.name);
});
// light
const light = new _three.AmbientLight(0xffffff);
scene.add(light);
//camera controls
const orbit = new (0, _orbitControlsJs.OrbitControls)(camera, renderer.domElement);
camera.position.set(-89, 181, -5);
orbit.target.set(60, 41, -4);
orbit.update();
// Floor
const planeGeometry = new _three.PlaneGeometry(450, 450);
const planeMaterial = new _three.MeshBasicMaterial({
    color: 0x964B00
});
const plane = new _three.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
// objects
const kingObj = new URL(require("2ce36d5a61c1c815"));
const tableObj = new URL(require("574c08243aa524ad"));
const chessBoardObj = new URL(require("a5581dc627db22ce"));
const fullChessboardObj = new URL(require("a370a4c4de40fd1b"));
// handlers
const king = new _three.Object3D();
const table = new _three.Object3D();
const chessboard = new _three.Object3D();
const fullChessboard = new _three.Object3D();
// loaders
const loader = new (0, _objloaderJs.OBJLoader)();
const tableLoader = new (0, _fbxloaderJs.FBXLoader)();
const chessboardLoader = new (0, _fbxloaderJs.FBXLoader)();
const fullChessboardLoader = new (0, _fbxloaderJs.FBXLoader)();
// load a resource
loader.load(kingObj, (object)=>{
    king.add(object);
    king.position.set(-42, 110, -6);
    king.scale.multiplyScalar(2);
    scene.add(king);
    EventsControls.attach(king);
}, // called when loading is in progresses
function(xhr) {
    console.log(xhr.loaded / xhr.total * 100 + "% loaded");
}, // called when loading has errors
function(error) {
    console.log("An error happened");
});
tableLoader.load(tableObj.href, (object)=>{
    table.add(object);
    table.position.set(0, 50, 0);
    scene.add(table);
}, function(xhr) {
    console.log(xhr.loaded / xhr.total * 100 + "% loaded");
}, function(error) {
    console.log("An error happened");
});
chessboardLoader.load(chessBoardObj.href, (object)=>{
    chessboard.add(object);
    chessboard.scale.multiplyScalar(0.02);
    chessboard.position.set(0, 110, 0);
    scene.add(chessboard);
}, function(xhr) {
    console.log(xhr.loaded / xhr.total * 100 + "% loaded");
}, function(error) {
    console.log("An error happened");
});
fullChessboardLoader.load(fullChessboardObj.href, (object)=>{
    console.log(object);
    fullChessboard.add(object);
    fullChessboard.scale.multiplyScalar(0.02);
    fullChessboard.position.set(0, 110, 0);
//scene.add( fullChessboard );
}, function(xhr) {
    console.log(xhr.loaded / xhr.total * 100 + "% loaded");
}, function(error) {
    console.log("An error happened");
});
function animate() {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate); //var loc = window.location.pathname;
 //var dir = loc.substring(0, loc.lastIndexOf('/'));
 //console.log(object);
 //console.log(dir);
 //console.log(loc);
 //console.log('Current directory: ' + process.cwd());
 // Chess table
 /*const loader = new GLTFLoader();
loader.load(

    './Chessboard.glb',

    function ( gltf ) {

		scene.add( gltf.scene );

		//gltf.animations; 
		//gltf.scene; 
		//gltf.scenes; 
		//gltf.cameras; 
		//gltf.asset;
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
); */  // instantiate a loader

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls.js":"7mqRv","three/examples/jsm/loaders/FBXLoader.js":"e0BdD","three/examples/jsm/loaders/OBJLoader.js":"htIhD","2ce36d5a61c1c815":"6s9Yo","574c08243aa524ad":"cybYM","a5581dc627db22ce":"jTptE","a370a4c4de40fd1b":"cSt1Z"}],"7mqRv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OrbitControls", ()=>OrbitControls);
var _three = require("three");
// OrbitControls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move
const _changeEvent = {
    type: "change"
};
const _startEvent = {
    type: "start"
};
const _endEvent = {
    type: "end"
};
const _ray = new (0, _three.Ray)();
const _plane = new (0, _three.Plane)();
const TILT_LIMIT = Math.cos(70 * (0, _three.MathUtils).DEG2RAD);
class OrbitControls extends (0, _three.EventDispatcher) {
    constructor(object, domElement){
        super();
        this.object = object;
        this.domElement = domElement;
        this.domElement.style.touchAction = "none"; // disable touch scroll
        // Set to false to disable this control
        this.enabled = true;
        // "target" sets the location of focus, where the object orbits around
        this.target = new (0, _three.Vector3)();
        // Sets the 3D cursor (similar to Blender), from which the maxTargetRadius takes effect
        this.cursor = new (0, _three.Vector3)();
        // How far you can dolly in and out ( PerspectiveCamera only )
        this.minDistance = 0;
        this.maxDistance = Infinity;
        // How far you can zoom in and out ( OrthographicCamera only )
        this.minZoom = 0;
        this.maxZoom = Infinity;
        // Limit camera target within a spherical area around the cursor
        this.minTargetRadius = 0;
        this.maxTargetRadius = Infinity;
        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians
        // How far you can orbit horizontally, upper and lower limits.
        // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
        this.minAzimuthAngle = -Infinity; // radians
        this.maxAzimuthAngle = Infinity; // radians
        // Set to true to enable damping (inertia)
        // If damping is enabled, you must call controls.update() in your animation loop
        this.enableDamping = false;
        this.dampingFactor = 0.05;
        // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
        // Set to false to disable zooming
        this.enableZoom = true;
        this.zoomSpeed = 1.0;
        // Set to false to disable rotating
        this.enableRotate = true;
        this.rotateSpeed = 1.0;
        // Set to false to disable panning
        this.enablePan = true;
        this.panSpeed = 1.0;
        this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
        this.keyPanSpeed = 7.0; // pixels moved per arrow key push
        this.zoomToCursor = false;
        // Set to true to automatically rotate around the target
        // If auto-rotate is enabled, you must call controls.update() in your animation loop
        this.autoRotate = false;
        this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60
        // The four arrow keys
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        };
        // Mouse buttons
        this.mouseButtons = {
            LEFT: (0, _three.MOUSE).ROTATE,
            MIDDLE: (0, _three.MOUSE).DOLLY,
            RIGHT: (0, _three.MOUSE).PAN
        };
        // Touch fingers
        this.touches = {
            ONE: (0, _three.TOUCH).ROTATE,
            TWO: (0, _three.TOUCH).DOLLY_PAN
        };
        // for reset
        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();
        this.zoom0 = this.object.zoom;
        // the target DOM element for key events
        this._domElementKeyEvents = null;
        //
        // public methods
        //
        this.getPolarAngle = function() {
            return spherical.phi;
        };
        this.getAzimuthalAngle = function() {
            return spherical.theta;
        };
        this.getDistance = function() {
            return this.object.position.distanceTo(this.target);
        };
        this.listenToKeyEvents = function(domElement) {
            domElement.addEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = domElement;
        };
        this.stopListenToKeyEvents = function() {
            this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
            this._domElementKeyEvents = null;
        };
        this.saveState = function() {
            scope.target0.copy(scope.target);
            scope.position0.copy(scope.object.position);
            scope.zoom0 = scope.object.zoom;
        };
        this.reset = function() {
            scope.target.copy(scope.target0);
            scope.object.position.copy(scope.position0);
            scope.object.zoom = scope.zoom0;
            scope.object.updateProjectionMatrix();
            scope.dispatchEvent(_changeEvent);
            scope.update();
            state = STATE.NONE;
        };
        // this method is exposed, but perhaps it would be better if we can make it private...
        this.update = function() {
            const offset = new (0, _three.Vector3)();
            // so camera.up is the orbit axis
            const quat = new (0, _three.Quaternion)().setFromUnitVectors(object.up, new (0, _three.Vector3)(0, 1, 0));
            const quatInverse = quat.clone().invert();
            const lastPosition = new (0, _three.Vector3)();
            const lastQuaternion = new (0, _three.Quaternion)();
            const lastTargetPosition = new (0, _three.Vector3)();
            const twoPI = 2 * Math.PI;
            return function update(deltaTime = null) {
                const position = scope.object.position;
                offset.copy(position).sub(scope.target);
                // rotate offset to "y-axis-is-up" space
                offset.applyQuaternion(quat);
                // angle from z-axis around y-axis
                spherical.setFromVector3(offset);
                if (scope.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle(deltaTime));
                if (scope.enableDamping) {
                    spherical.theta += sphericalDelta.theta * scope.dampingFactor;
                    spherical.phi += sphericalDelta.phi * scope.dampingFactor;
                } else {
                    spherical.theta += sphericalDelta.theta;
                    spherical.phi += sphericalDelta.phi;
                }
                // restrict theta to be between desired limits
                let min = scope.minAzimuthAngle;
                let max = scope.maxAzimuthAngle;
                if (isFinite(min) && isFinite(max)) {
                    if (min < -Math.PI) min += twoPI;
                    else if (min > Math.PI) min -= twoPI;
                    if (max < -Math.PI) max += twoPI;
                    else if (max > Math.PI) max -= twoPI;
                    if (min <= max) spherical.theta = Math.max(min, Math.min(max, spherical.theta));
                    else spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
                }
                // restrict phi to be between desired limits
                spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
                spherical.makeSafe();
                // move target to panned location
                if (scope.enableDamping === true) scope.target.addScaledVector(panOffset, scope.dampingFactor);
                else scope.target.add(panOffset);
                // Limit the target distance from the cursor to create a sphere around the center of interest
                scope.target.sub(scope.cursor);
                scope.target.clampLength(scope.minTargetRadius, scope.maxTargetRadius);
                scope.target.add(scope.cursor);
                // adjust the camera position based on zoom only if we're not zooming to the cursor or if it's an ortho camera
                // we adjust zoom later in these cases
                if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) spherical.radius = clampDistance(spherical.radius);
                else spherical.radius = clampDistance(spherical.radius * scale);
                offset.setFromSpherical(spherical);
                // rotate offset back to "camera-up-vector-is-up" space
                offset.applyQuaternion(quatInverse);
                position.copy(scope.target).add(offset);
                scope.object.lookAt(scope.target);
                if (scope.enableDamping === true) {
                    sphericalDelta.theta *= 1 - scope.dampingFactor;
                    sphericalDelta.phi *= 1 - scope.dampingFactor;
                    panOffset.multiplyScalar(1 - scope.dampingFactor);
                } else {
                    sphericalDelta.set(0, 0, 0);
                    panOffset.set(0, 0, 0);
                }
                // adjust camera position
                let zoomChanged = false;
                if (scope.zoomToCursor && performCursorZoom) {
                    let newRadius = null;
                    if (scope.object.isPerspectiveCamera) {
                        // move the camera down the pointer ray
                        // this method avoids floating point error
                        const prevRadius = offset.length();
                        newRadius = clampDistance(prevRadius * scale);
                        const radiusDelta = prevRadius - newRadius;
                        scope.object.position.addScaledVector(dollyDirection, radiusDelta);
                        scope.object.updateMatrixWorld();
                    } else if (scope.object.isOrthographicCamera) {
                        // adjust the ortho camera position based on zoom changes
                        const mouseBefore = new (0, _three.Vector3)(mouse.x, mouse.y, 0);
                        mouseBefore.unproject(scope.object);
                        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                        scope.object.updateProjectionMatrix();
                        zoomChanged = true;
                        const mouseAfter = new (0, _three.Vector3)(mouse.x, mouse.y, 0);
                        mouseAfter.unproject(scope.object);
                        scope.object.position.sub(mouseAfter).add(mouseBefore);
                        scope.object.updateMatrixWorld();
                        newRadius = offset.length();
                    } else {
                        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
                        scope.zoomToCursor = false;
                    }
                    // handle the placement of the target
                    if (newRadius !== null) {
                        if (this.screenSpacePanning) // position the orbit target in front of the new camera position
                        scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
                        else {
                            // get the ray and translation plane to compute target
                            _ray.origin.copy(scope.object.position);
                            _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
                            // if the camera is 20 degrees above the horizon then don't adjust the focus target to avoid
                            // extremely large values
                            if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) object.lookAt(scope.target);
                            else {
                                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                                _ray.intersectPlane(_plane, scope.target);
                            }
                        }
                    }
                } else if (scope.object.isOrthographicCamera) {
                    scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
                    scope.object.updateProjectionMatrix();
                    zoomChanged = true;
                }
                scale = 1;
                performCursorZoom = false;
                // update condition is:
                // min(camera displacement, camera rotation in radians)^2 > EPS
                // using small-angle approximation cos(x/2) = 1 - x^2 / 8
                if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS || lastTargetPosition.distanceToSquared(scope.target) > 0) {
                    scope.dispatchEvent(_changeEvent);
                    lastPosition.copy(scope.object.position);
                    lastQuaternion.copy(scope.object.quaternion);
                    lastTargetPosition.copy(scope.target);
                    zoomChanged = false;
                    return true;
                }
                return false;
            };
        }();
        this.dispose = function() {
            scope.domElement.removeEventListener("contextmenu", onContextMenu);
            scope.domElement.removeEventListener("pointerdown", onPointerDown);
            scope.domElement.removeEventListener("pointercancel", onPointerUp);
            scope.domElement.removeEventListener("wheel", onMouseWheel);
            scope.domElement.removeEventListener("pointermove", onPointerMove);
            scope.domElement.removeEventListener("pointerup", onPointerUp);
            if (scope._domElementKeyEvents !== null) {
                scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
                scope._domElementKeyEvents = null;
            }
        //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
        };
        //
        // internals
        //
        const scope = this;
        const STATE = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let state = STATE.NONE;
        const EPS = 0.000001;
        // current position in spherical coordinates
        const spherical = new (0, _three.Spherical)();
        const sphericalDelta = new (0, _three.Spherical)();
        let scale = 1;
        const panOffset = new (0, _three.Vector3)();
        const rotateStart = new (0, _three.Vector2)();
        const rotateEnd = new (0, _three.Vector2)();
        const rotateDelta = new (0, _three.Vector2)();
        const panStart = new (0, _three.Vector2)();
        const panEnd = new (0, _three.Vector2)();
        const panDelta = new (0, _three.Vector2)();
        const dollyStart = new (0, _three.Vector2)();
        const dollyEnd = new (0, _three.Vector2)();
        const dollyDelta = new (0, _three.Vector2)();
        const dollyDirection = new (0, _three.Vector3)();
        const mouse = new (0, _three.Vector2)();
        let performCursorZoom = false;
        const pointers = [];
        const pointerPositions = {};
        function getAutoRotationAngle(deltaTime) {
            if (deltaTime !== null) return 2 * Math.PI / 60 * scope.autoRotateSpeed * deltaTime;
            else return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
        }
        function getZoomScale() {
            return Math.pow(0.95, scope.zoomSpeed);
        }
        function rotateLeft(angle) {
            sphericalDelta.theta -= angle;
        }
        function rotateUp(angle) {
            sphericalDelta.phi -= angle;
        }
        const panLeft = function() {
            const v = new (0, _three.Vector3)();
            return function panLeft(distance, objectMatrix) {
                v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
                v.multiplyScalar(-distance);
                panOffset.add(v);
            };
        }();
        const panUp = function() {
            const v = new (0, _three.Vector3)();
            return function panUp(distance, objectMatrix) {
                if (scope.screenSpacePanning === true) v.setFromMatrixColumn(objectMatrix, 1);
                else {
                    v.setFromMatrixColumn(objectMatrix, 0);
                    v.crossVectors(scope.object.up, v);
                }
                v.multiplyScalar(distance);
                panOffset.add(v);
            };
        }();
        // deltaX and deltaY are in pixels; right and down are positive
        const pan = function() {
            const offset = new (0, _three.Vector3)();
            return function pan(deltaX, deltaY) {
                const element = scope.domElement;
                if (scope.object.isPerspectiveCamera) {
                    // perspective
                    const position = scope.object.position;
                    offset.copy(position).sub(scope.target);
                    let targetDistance = offset.length();
                    // half of the fov is center to top of screen
                    targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
                    // we use only clientHeight here so aspect ratio does not distort speed
                    panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
                    panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
                } else if (scope.object.isOrthographicCamera) {
                    // orthographic
                    panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
                    panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
                } else {
                    // camera neither orthographic nor perspective
                    console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
                    scope.enablePan = false;
                }
            };
        }();
        function dollyOut(dollyScale) {
            if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) scale /= dollyScale;
            else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
                scope.enableZoom = false;
            }
        }
        function dollyIn(dollyScale) {
            if (scope.object.isPerspectiveCamera || scope.object.isOrthographicCamera) scale *= dollyScale;
            else {
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
                scope.enableZoom = false;
            }
        }
        function updateMouseParameters(event) {
            if (!scope.zoomToCursor) return;
            performCursorZoom = true;
            const rect = scope.domElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const w = rect.width;
            const h = rect.height;
            mouse.x = x / w * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;
            dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
        }
        function clampDistance(dist) {
            return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
        }
        //
        // event callbacks - update the object state
        //
        function handleMouseDownRotate(event) {
            rotateStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownDolly(event) {
            updateMouseParameters(event);
            dollyStart.set(event.clientX, event.clientY);
        }
        function handleMouseDownPan(event) {
            panStart.set(event.clientX, event.clientY);
        }
        function handleMouseMoveRotate(event) {
            rotateEnd.set(event.clientX, event.clientY);
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height
            rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            rotateStart.copy(rotateEnd);
            scope.update();
        }
        function handleMouseMoveDolly(event) {
            dollyEnd.set(event.clientX, event.clientY);
            dollyDelta.subVectors(dollyEnd, dollyStart);
            if (dollyDelta.y > 0) dollyOut(getZoomScale());
            else if (dollyDelta.y < 0) dollyIn(getZoomScale());
            dollyStart.copy(dollyEnd);
            scope.update();
        }
        function handleMouseMovePan(event) {
            panEnd.set(event.clientX, event.clientY);
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
            scope.update();
        }
        function handleMouseWheel(event) {
            updateMouseParameters(event);
            if (event.deltaY < 0) dollyIn(getZoomScale());
            else if (event.deltaY > 0) dollyOut(getZoomScale());
            scope.update();
        }
        function handleKeyDown(event) {
            let needsUpdate = false;
            switch(event.code){
                case scope.keys.UP:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateUp(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(0, scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.BOTTOM:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateUp(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(0, -scope.keyPanSpeed);
                    needsUpdate = true;
                    break;
                case scope.keys.LEFT:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateLeft(2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
                case scope.keys.RIGHT:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) rotateLeft(-2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight);
                    else pan(-scope.keyPanSpeed, 0);
                    needsUpdate = true;
                    break;
            }
            if (needsUpdate) {
                // prevent the browser from scrolling on cursor keys
                event.preventDefault();
                scope.update();
            }
        }
        function handleTouchStartRotate() {
            if (pointers.length === 1) rotateStart.set(pointers[0].pageX, pointers[0].pageY);
            else {
                const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
                const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
                rotateStart.set(x, y);
            }
        }
        function handleTouchStartPan() {
            if (pointers.length === 1) panStart.set(pointers[0].pageX, pointers[0].pageY);
            else {
                const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
                const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
                panStart.set(x, y);
            }
        }
        function handleTouchStartDolly() {
            const dx = pointers[0].pageX - pointers[1].pageX;
            const dy = pointers[0].pageY - pointers[1].pageY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyStart.set(0, distance);
        }
        function handleTouchStartDollyPan() {
            if (scope.enableZoom) handleTouchStartDolly();
            if (scope.enablePan) handleTouchStartPan();
        }
        function handleTouchStartDollyRotate() {
            if (scope.enableZoom) handleTouchStartDolly();
            if (scope.enableRotate) handleTouchStartRotate();
        }
        function handleTouchMoveRotate(event) {
            if (pointers.length == 1) rotateEnd.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                rotateEnd.set(x, y);
            }
            rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
            const element = scope.domElement;
            rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height
            rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
            rotateStart.copy(rotateEnd);
        }
        function handleTouchMovePan(event) {
            if (pointers.length === 1) panEnd.set(event.pageX, event.pageY);
            else {
                const position = getSecondPointerPosition(event);
                const x = 0.5 * (event.pageX + position.x);
                const y = 0.5 * (event.pageY + position.y);
                panEnd.set(x, y);
            }
            panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
            pan(panDelta.x, panDelta.y);
            panStart.copy(panEnd);
        }
        function handleTouchMoveDolly(event) {
            const position = getSecondPointerPosition(event);
            const dx = event.pageX - position.x;
            const dy = event.pageY - position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            dollyEnd.set(0, distance);
            dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
            dollyOut(dollyDelta.y);
            dollyStart.copy(dollyEnd);
        }
        function handleTouchMoveDollyPan(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enablePan) handleTouchMovePan(event);
        }
        function handleTouchMoveDollyRotate(event) {
            if (scope.enableZoom) handleTouchMoveDolly(event);
            if (scope.enableRotate) handleTouchMoveRotate(event);
        }
        //
        // event handlers - FSM: listen for events and reset state
        //
        function onPointerDown(event) {
            if (scope.enabled === false) return;
            if (pointers.length === 0) {
                scope.domElement.setPointerCapture(event.pointerId);
                scope.domElement.addEventListener("pointermove", onPointerMove);
                scope.domElement.addEventListener("pointerup", onPointerUp);
            }
            //
            addPointer(event);
            if (event.pointerType === "touch") onTouchStart(event);
            else onMouseDown(event);
        }
        function onPointerMove(event) {
            if (scope.enabled === false) return;
            if (event.pointerType === "touch") onTouchMove(event);
            else onMouseMove(event);
        }
        function onPointerUp(event) {
            removePointer(event);
            if (pointers.length === 0) {
                scope.domElement.releasePointerCapture(event.pointerId);
                scope.domElement.removeEventListener("pointermove", onPointerMove);
                scope.domElement.removeEventListener("pointerup", onPointerUp);
            }
            scope.dispatchEvent(_endEvent);
            state = STATE.NONE;
        }
        function onMouseDown(event) {
            let mouseAction;
            switch(event.button){
                case 0:
                    mouseAction = scope.mouseButtons.LEFT;
                    break;
                case 1:
                    mouseAction = scope.mouseButtons.MIDDLE;
                    break;
                case 2:
                    mouseAction = scope.mouseButtons.RIGHT;
                    break;
                default:
                    mouseAction = -1;
            }
            switch(mouseAction){
                case (0, _three.MOUSE).DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseDownDolly(event);
                    state = STATE.DOLLY;
                    break;
                case (0, _three.MOUSE).ROTATE:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    } else {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    }
                    break;
                case (0, _three.MOUSE).PAN:
                    if (event.ctrlKey || event.metaKey || event.shiftKey) {
                        if (scope.enableRotate === false) return;
                        handleMouseDownRotate(event);
                        state = STATE.ROTATE;
                    } else {
                        if (scope.enablePan === false) return;
                        handleMouseDownPan(event);
                        state = STATE.PAN;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) scope.dispatchEvent(_startEvent);
        }
        function onMouseMove(event) {
            switch(state){
                case STATE.ROTATE:
                    if (scope.enableRotate === false) return;
                    handleMouseMoveRotate(event);
                    break;
                case STATE.DOLLY:
                    if (scope.enableZoom === false) return;
                    handleMouseMoveDolly(event);
                    break;
                case STATE.PAN:
                    if (scope.enablePan === false) return;
                    handleMouseMovePan(event);
                    break;
            }
        }
        function onMouseWheel(event) {
            if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;
            event.preventDefault();
            scope.dispatchEvent(_startEvent);
            handleMouseWheel(event);
            scope.dispatchEvent(_endEvent);
        }
        function onKeyDown(event) {
            if (scope.enabled === false || scope.enablePan === false) return;
            handleKeyDown(event);
        }
        function onTouchStart(event) {
            trackPointer(event);
            switch(pointers.length){
                case 1:
                    switch(scope.touches.ONE){
                        case (0, _three.TOUCH).ROTATE:
                            if (scope.enableRotate === false) return;
                            handleTouchStartRotate();
                            state = STATE.TOUCH_ROTATE;
                            break;
                        case (0, _three.TOUCH).PAN:
                            if (scope.enablePan === false) return;
                            handleTouchStartPan();
                            state = STATE.TOUCH_PAN;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                case 2:
                    switch(scope.touches.TWO){
                        case (0, _three.TOUCH).DOLLY_PAN:
                            if (scope.enableZoom === false && scope.enablePan === false) return;
                            handleTouchStartDollyPan();
                            state = STATE.TOUCH_DOLLY_PAN;
                            break;
                        case (0, _three.TOUCH).DOLLY_ROTATE:
                            if (scope.enableZoom === false && scope.enableRotate === false) return;
                            handleTouchStartDollyRotate();
                            state = STATE.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            state = STATE.NONE;
                    }
                    break;
                default:
                    state = STATE.NONE;
            }
            if (state !== STATE.NONE) scope.dispatchEvent(_startEvent);
        }
        function onTouchMove(event) {
            trackPointer(event);
            switch(state){
                case STATE.TOUCH_ROTATE:
                    if (scope.enableRotate === false) return;
                    handleTouchMoveRotate(event);
                    scope.update();
                    break;
                case STATE.TOUCH_PAN:
                    if (scope.enablePan === false) return;
                    handleTouchMovePan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_PAN:
                    if (scope.enableZoom === false && scope.enablePan === false) return;
                    handleTouchMoveDollyPan(event);
                    scope.update();
                    break;
                case STATE.TOUCH_DOLLY_ROTATE:
                    if (scope.enableZoom === false && scope.enableRotate === false) return;
                    handleTouchMoveDollyRotate(event);
                    scope.update();
                    break;
                default:
                    state = STATE.NONE;
            }
        }
        function onContextMenu(event) {
            if (scope.enabled === false) return;
            event.preventDefault();
        }
        function addPointer(event) {
            pointers.push(event);
        }
        function removePointer(event) {
            delete pointerPositions[event.pointerId];
            for(let i = 0; i < pointers.length; i++)if (pointers[i].pointerId == event.pointerId) {
                pointers.splice(i, 1);
                return;
            }
        }
        function trackPointer(event) {
            let position = pointerPositions[event.pointerId];
            if (position === undefined) {
                position = new (0, _three.Vector2)();
                pointerPositions[event.pointerId] = position;
            }
            position.set(event.pageX, event.pageY);
        }
        function getSecondPointerPosition(event) {
            const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
            return pointerPositions[pointer.pointerId];
        }
        //
        scope.domElement.addEventListener("contextmenu", onContextMenu);
        scope.domElement.addEventListener("pointerdown", onPointerDown);
        scope.domElement.addEventListener("pointercancel", onPointerUp);
        scope.domElement.addEventListener("wheel", onMouseWheel, {
            passive: false
        });
        // force an update at start
        this.update();
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0BdD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FBXLoader", ()=>FBXLoader);
var _three = require("three");
var _fflateModuleJs = require("../libs/fflate.module.js");
var _nurbscurveJs = require("../curves/NURBSCurve.js");
/**
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or >= 6400 in Binary format
 * Versions lower than this may load but will probably have errors
 *
 * Needs Support:
 *  Morph normals / blend shape normals
 *
 * FBX format references:
 * 	https://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_index_html (C++ SDK reference)
 *
 * Binary format specification:
 *	https://code.blender.org/2013/08/fbx-binary-file-format-specification/
 */ let fbxTree;
let connections;
let sceneGraph;
class FBXLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        const path = scope.path === "" ? (0, _three.LoaderUtils).extractUrlBase(url) : scope.path;
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(scope.path);
        loader.setResponseType("arraybuffer");
        loader.setRequestHeader(scope.requestHeader);
        loader.setWithCredentials(scope.withCredentials);
        loader.load(url, function(buffer) {
            try {
                onLoad(scope.parse(buffer, path));
            } catch (e) {
                if (onError) onError(e);
                else console.error(e);
                scope.manager.itemError(url);
            }
        }, onProgress, onError);
    }
    parse(FBXBuffer, path) {
        if (isFbxFormatBinary(FBXBuffer)) fbxTree = new BinaryParser().parse(FBXBuffer);
        else {
            const FBXText = convertArrayBufferToString(FBXBuffer);
            if (!isFbxFormatASCII(FBXText)) throw new Error("THREE.FBXLoader: Unknown format.");
            if (getFbxVersion(FBXText) < 7000) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + getFbxVersion(FBXText));
            fbxTree = new TextParser().parse(FBXText);
        }
        // console.log( fbxTree );
        const textureLoader = new (0, _three.TextureLoader)(this.manager).setPath(this.resourcePath || path).setCrossOrigin(this.crossOrigin);
        return new FBXTreeParser(textureLoader, this.manager).parse(fbxTree);
    }
}
// Parse the FBXTree object returned by the BinaryParser or TextParser and return a Group
class FBXTreeParser {
    constructor(textureLoader, manager){
        this.textureLoader = textureLoader;
        this.manager = manager;
    }
    parse() {
        connections = this.parseConnections();
        const images = this.parseImages();
        const textures = this.parseTextures(images);
        const materials = this.parseMaterials(textures);
        const deformers = this.parseDeformers();
        const geometryMap = new GeometryParser().parse(deformers);
        this.parseScene(deformers, geometryMap, materials);
        return sceneGraph;
    }
    // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
    // and details the connection type
    parseConnections() {
        const connectionMap = new Map();
        if ("Connections" in fbxTree) {
            const rawConnections = fbxTree.Connections.connections;
            rawConnections.forEach(function(rawConnection) {
                const fromID = rawConnection[0];
                const toID = rawConnection[1];
                const relationship = rawConnection[2];
                if (!connectionMap.has(fromID)) connectionMap.set(fromID, {
                    parents: [],
                    children: []
                });
                const parentRelationship = {
                    ID: toID,
                    relationship: relationship
                };
                connectionMap.get(fromID).parents.push(parentRelationship);
                if (!connectionMap.has(toID)) connectionMap.set(toID, {
                    parents: [],
                    children: []
                });
                const childRelationship = {
                    ID: fromID,
                    relationship: relationship
                };
                connectionMap.get(toID).children.push(childRelationship);
            });
        }
        return connectionMap;
    }
    // Parse FBXTree.Objects.Video for embedded image data
    // These images are connected to textures in FBXTree.Objects.Textures
    // via FBXTree.Connections.
    parseImages() {
        const images = {};
        const blobs = {};
        if ("Video" in fbxTree.Objects) {
            const videoNodes = fbxTree.Objects.Video;
            for(const nodeID in videoNodes){
                const videoNode = videoNodes[nodeID];
                const id = parseInt(nodeID);
                images[id] = videoNode.RelativeFilename || videoNode.Filename;
                // raw image data is in videoNode.Content
                if ("Content" in videoNode) {
                    const arrayBufferContent = videoNode.Content instanceof ArrayBuffer && videoNode.Content.byteLength > 0;
                    const base64Content = typeof videoNode.Content === "string" && videoNode.Content !== "";
                    if (arrayBufferContent || base64Content) {
                        const image = this.parseImage(videoNodes[nodeID]);
                        blobs[videoNode.RelativeFilename || videoNode.Filename] = image;
                    }
                }
            }
        }
        for(const id in images){
            const filename = images[id];
            if (blobs[filename] !== undefined) images[id] = blobs[filename];
            else images[id] = images[id].split("\\").pop();
        }
        return images;
    }
    // Parse embedded image data in FBXTree.Video.Content
    parseImage(videoNode) {
        const content = videoNode.Content;
        const fileName = videoNode.RelativeFilename || videoNode.Filename;
        const extension = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
        let type;
        switch(extension){
            case "bmp":
                type = "image/bmp";
                break;
            case "jpg":
            case "jpeg":
                type = "image/jpeg";
                break;
            case "png":
                type = "image/png";
                break;
            case "tif":
                type = "image/tiff";
                break;
            case "tga":
                if (this.manager.getHandler(".tga") === null) console.warn("FBXLoader: TGA loader not found, skipping ", fileName);
                type = "image/tga";
                break;
            default:
                console.warn('FBXLoader: Image type "' + extension + '" is not supported.');
                return;
        }
        if (typeof content === "string") return "data:" + type + ";base64," + content;
        else {
            const array = new Uint8Array(content);
            return window.URL.createObjectURL(new Blob([
                array
            ], {
                type: type
            }));
        }
    }
    // Parse nodes in FBXTree.Objects.Texture
    // These contain details such as UV scaling, cropping, rotation etc and are connected
    // to images in FBXTree.Objects.Video
    parseTextures(images) {
        const textureMap = new Map();
        if ("Texture" in fbxTree.Objects) {
            const textureNodes = fbxTree.Objects.Texture;
            for(const nodeID in textureNodes){
                const texture = this.parseTexture(textureNodes[nodeID], images);
                textureMap.set(parseInt(nodeID), texture);
            }
        }
        return textureMap;
    }
    // Parse individual node in FBXTree.Objects.Texture
    parseTexture(textureNode, images) {
        const texture = this.loadTexture(textureNode, images);
        texture.ID = textureNode.id;
        texture.name = textureNode.attrName;
        const wrapModeU = textureNode.WrapModeU;
        const wrapModeV = textureNode.WrapModeV;
        const valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
        const valueV = wrapModeV !== undefined ? wrapModeV.value : 0;
        // http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
        // 0: repeat(default), 1: clamp
        texture.wrapS = valueU === 0 ? (0, _three.RepeatWrapping) : (0, _three.ClampToEdgeWrapping);
        texture.wrapT = valueV === 0 ? (0, _three.RepeatWrapping) : (0, _three.ClampToEdgeWrapping);
        if ("Scaling" in textureNode) {
            const values = textureNode.Scaling.value;
            texture.repeat.x = values[0];
            texture.repeat.y = values[1];
        }
        if ("Translation" in textureNode) {
            const values = textureNode.Translation.value;
            texture.offset.x = values[0];
            texture.offset.y = values[1];
        }
        return texture;
    }
    // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
    loadTexture(textureNode, images) {
        let fileName;
        const currentPath = this.textureLoader.path;
        const children = connections.get(textureNode.id).children;
        if (children !== undefined && children.length > 0 && images[children[0].ID] !== undefined) {
            fileName = images[children[0].ID];
            if (fileName.indexOf("blob:") === 0 || fileName.indexOf("data:") === 0) this.textureLoader.setPath(undefined);
        }
        let texture;
        const extension = textureNode.FileName.slice(-3).toLowerCase();
        if (extension === "tga") {
            const loader = this.manager.getHandler(".tga");
            if (loader === null) {
                console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", textureNode.RelativeFilename);
                texture = new (0, _three.Texture)();
            } else {
                loader.setPath(this.textureLoader.path);
                texture = loader.load(fileName);
            }
        } else if (extension === "psd") {
            console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", textureNode.RelativeFilename);
            texture = new (0, _three.Texture)();
        } else texture = this.textureLoader.load(fileName);
        this.textureLoader.setPath(currentPath);
        return texture;
    }
    // Parse nodes in FBXTree.Objects.Material
    parseMaterials(textureMap) {
        const materialMap = new Map();
        if ("Material" in fbxTree.Objects) {
            const materialNodes = fbxTree.Objects.Material;
            for(const nodeID in materialNodes){
                const material = this.parseMaterial(materialNodes[nodeID], textureMap);
                if (material !== null) materialMap.set(parseInt(nodeID), material);
            }
        }
        return materialMap;
    }
    // Parse single node in FBXTree.Objects.Material
    // Materials are connected to texture maps in FBXTree.Objects.Textures
    // FBX format currently only supports Lambert and Phong shading models
    parseMaterial(materialNode, textureMap) {
        const ID = materialNode.id;
        const name = materialNode.attrName;
        let type = materialNode.ShadingModel;
        // Case where FBX wraps shading model in property object.
        if (typeof type === "object") type = type.value;
        // Ignore unused materials which don't have any connections.
        if (!connections.has(ID)) return null;
        const parameters = this.parseParameters(materialNode, textureMap, ID);
        let material;
        switch(type.toLowerCase()){
            case "phong":
                material = new (0, _three.MeshPhongMaterial)();
                break;
            case "lambert":
                material = new (0, _three.MeshLambertMaterial)();
                break;
            default:
                console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type);
                material = new (0, _three.MeshPhongMaterial)();
                break;
        }
        material.setValues(parameters);
        material.name = name;
        return material;
    }
    // Parse FBX material and return parameters suitable for a three.js material
    // Also parse the texture map and return any textures associated with the material
    parseParameters(materialNode, textureMap, ID) {
        const parameters = {};
        if (materialNode.BumpFactor) parameters.bumpScale = materialNode.BumpFactor.value;
        if (materialNode.Diffuse) parameters.color = new (0, _three.Color)().fromArray(materialNode.Diffuse.value).convertSRGBToLinear();
        else if (materialNode.DiffuseColor && (materialNode.DiffuseColor.type === "Color" || materialNode.DiffuseColor.type === "ColorRGB")) // The blender exporter exports diffuse here instead of in materialNode.Diffuse
        parameters.color = new (0, _three.Color)().fromArray(materialNode.DiffuseColor.value).convertSRGBToLinear();
        if (materialNode.DisplacementFactor) parameters.displacementScale = materialNode.DisplacementFactor.value;
        if (materialNode.Emissive) parameters.emissive = new (0, _three.Color)().fromArray(materialNode.Emissive.value).convertSRGBToLinear();
        else if (materialNode.EmissiveColor && (materialNode.EmissiveColor.type === "Color" || materialNode.EmissiveColor.type === "ColorRGB")) // The blender exporter exports emissive color here instead of in materialNode.Emissive
        parameters.emissive = new (0, _three.Color)().fromArray(materialNode.EmissiveColor.value).convertSRGBToLinear();
        if (materialNode.EmissiveFactor) parameters.emissiveIntensity = parseFloat(materialNode.EmissiveFactor.value);
        if (materialNode.Opacity) parameters.opacity = parseFloat(materialNode.Opacity.value);
        if (parameters.opacity < 1.0) parameters.transparent = true;
        if (materialNode.ReflectionFactor) parameters.reflectivity = materialNode.ReflectionFactor.value;
        if (materialNode.Shininess) parameters.shininess = materialNode.Shininess.value;
        if (materialNode.Specular) parameters.specular = new (0, _three.Color)().fromArray(materialNode.Specular.value).convertSRGBToLinear();
        else if (materialNode.SpecularColor && materialNode.SpecularColor.type === "Color") // The blender exporter exports specular color here instead of in materialNode.Specular
        parameters.specular = new (0, _three.Color)().fromArray(materialNode.SpecularColor.value).convertSRGBToLinear();
        const scope = this;
        connections.get(ID).children.forEach(function(child) {
            const type = child.relationship;
            switch(type){
                case "Bump":
                    parameters.bumpMap = scope.getTexture(textureMap, child.ID);
                    break;
                case "Maya|TEX_ao_map":
                    parameters.aoMap = scope.getTexture(textureMap, child.ID);
                    break;
                case "DiffuseColor":
                case "Maya|TEX_color_map":
                    parameters.map = scope.getTexture(textureMap, child.ID);
                    if (parameters.map !== undefined) parameters.map.colorSpace = (0, _three.SRGBColorSpace);
                    break;
                case "DisplacementColor":
                    parameters.displacementMap = scope.getTexture(textureMap, child.ID);
                    break;
                case "EmissiveColor":
                    parameters.emissiveMap = scope.getTexture(textureMap, child.ID);
                    if (parameters.emissiveMap !== undefined) parameters.emissiveMap.colorSpace = (0, _three.SRGBColorSpace);
                    break;
                case "NormalMap":
                case "Maya|TEX_normal_map":
                    parameters.normalMap = scope.getTexture(textureMap, child.ID);
                    break;
                case "ReflectionColor":
                    parameters.envMap = scope.getTexture(textureMap, child.ID);
                    if (parameters.envMap !== undefined) {
                        parameters.envMap.mapping = (0, _three.EquirectangularReflectionMapping);
                        parameters.envMap.colorSpace = (0, _three.SRGBColorSpace);
                    }
                    break;
                case "SpecularColor":
                    parameters.specularMap = scope.getTexture(textureMap, child.ID);
                    if (parameters.specularMap !== undefined) parameters.specularMap.colorSpace = (0, _three.SRGBColorSpace);
                    break;
                case "TransparentColor":
                case "TransparencyFactor":
                    parameters.alphaMap = scope.getTexture(textureMap, child.ID);
                    parameters.transparent = true;
                    break;
                case "AmbientColor":
                case "ShininessExponent":
                case "SpecularFactor":
                case "VectorDisplacementColor":
                default:
                    console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", type);
                    break;
            }
        });
        return parameters;
    }
    // get a texture from the textureMap for use by a material.
    getTexture(textureMap, id) {
        // if the texture is a layered texture, just use the first layer and issue a warning
        if ("LayeredTexture" in fbxTree.Objects && id in fbxTree.Objects.LayeredTexture) {
            console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.");
            id = connections.get(id).children[0].ID;
        }
        return textureMap.get(id);
    }
    // Parse nodes in FBXTree.Objects.Deformer
    // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
    // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
    parseDeformers() {
        const skeletons = {};
        const morphTargets = {};
        if ("Deformer" in fbxTree.Objects) {
            const DeformerNodes = fbxTree.Objects.Deformer;
            for(const nodeID in DeformerNodes){
                const deformerNode = DeformerNodes[nodeID];
                const relationships = connections.get(parseInt(nodeID));
                if (deformerNode.attrType === "Skin") {
                    const skeleton = this.parseSkeleton(relationships, DeformerNodes);
                    skeleton.ID = nodeID;
                    if (relationships.parents.length > 1) console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported.");
                    skeleton.geometryID = relationships.parents[0].ID;
                    skeletons[nodeID] = skeleton;
                } else if (deformerNode.attrType === "BlendShape") {
                    const morphTarget = {
                        id: nodeID
                    };
                    morphTarget.rawTargets = this.parseMorphTargets(relationships, DeformerNodes);
                    morphTarget.id = nodeID;
                    if (relationships.parents.length > 1) console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported.");
                    morphTargets[nodeID] = morphTarget;
                }
            }
        }
        return {
            skeletons: skeletons,
            morphTargets: morphTargets
        };
    }
    // Parse single nodes in FBXTree.Objects.Deformer
    // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
    // Each skin node represents a skeleton and each cluster node represents a bone
    parseSkeleton(relationships, deformerNodes) {
        const rawBones = [];
        relationships.children.forEach(function(child) {
            const boneNode = deformerNodes[child.ID];
            if (boneNode.attrType !== "Cluster") return;
            const rawBone = {
                ID: child.ID,
                indices: [],
                weights: [],
                transformLink: new (0, _three.Matrix4)().fromArray(boneNode.TransformLink.a)
            };
            if ("Indexes" in boneNode) {
                rawBone.indices = boneNode.Indexes.a;
                rawBone.weights = boneNode.Weights.a;
            }
            rawBones.push(rawBone);
        });
        return {
            rawBones: rawBones,
            bones: []
        };
    }
    // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
    parseMorphTargets(relationships, deformerNodes) {
        const rawMorphTargets = [];
        for(let i = 0; i < relationships.children.length; i++){
            const child = relationships.children[i];
            const morphTargetNode = deformerNodes[child.ID];
            const rawMorphTarget = {
                name: morphTargetNode.attrName,
                initialWeight: morphTargetNode.DeformPercent,
                id: morphTargetNode.id,
                fullWeights: morphTargetNode.FullWeights.a
            };
            if (morphTargetNode.attrType !== "BlendShapeChannel") return;
            rawMorphTarget.geoID = connections.get(parseInt(child.ID)).children.filter(function(child) {
                return child.relationship === undefined;
            })[0].ID;
            rawMorphTargets.push(rawMorphTarget);
        }
        return rawMorphTargets;
    }
    // create the main Group() to be returned by the loader
    parseScene(deformers, geometryMap, materialMap) {
        sceneGraph = new (0, _three.Group)();
        const modelMap = this.parseModels(deformers.skeletons, geometryMap, materialMap);
        const modelNodes = fbxTree.Objects.Model;
        const scope = this;
        modelMap.forEach(function(model) {
            const modelNode = modelNodes[model.ID];
            scope.setLookAtProperties(model, modelNode);
            const parentConnections = connections.get(model.ID).parents;
            parentConnections.forEach(function(connection) {
                const parent = modelMap.get(connection.ID);
                if (parent !== undefined) parent.add(model);
            });
            if (model.parent === null) sceneGraph.add(model);
        });
        this.bindSkeleton(deformers.skeletons, geometryMap, modelMap);
        this.createAmbientLight();
        sceneGraph.traverse(function(node) {
            if (node.userData.transformData) {
                if (node.parent) {
                    node.userData.transformData.parentMatrix = node.parent.matrix;
                    node.userData.transformData.parentMatrixWorld = node.parent.matrixWorld;
                }
                const transform = generateTransform(node.userData.transformData);
                node.applyMatrix4(transform);
                node.updateWorldMatrix();
            }
        });
        const animations = new AnimationParser().parse();
        // if all the models where already combined in a single group, just return that
        if (sceneGraph.children.length === 1 && sceneGraph.children[0].isGroup) {
            sceneGraph.children[0].animations = animations;
            sceneGraph = sceneGraph.children[0];
        }
        sceneGraph.animations = animations;
    }
    // parse nodes in FBXTree.Objects.Model
    parseModels(skeletons, geometryMap, materialMap) {
        const modelMap = new Map();
        const modelNodes = fbxTree.Objects.Model;
        for(const nodeID in modelNodes){
            const id = parseInt(nodeID);
            const node = modelNodes[nodeID];
            const relationships = connections.get(id);
            let model = this.buildSkeleton(relationships, skeletons, id, node.attrName);
            if (!model) {
                switch(node.attrType){
                    case "Camera":
                        model = this.createCamera(relationships);
                        break;
                    case "Light":
                        model = this.createLight(relationships);
                        break;
                    case "Mesh":
                        model = this.createMesh(relationships, geometryMap, materialMap);
                        break;
                    case "NurbsCurve":
                        model = this.createCurve(relationships, geometryMap);
                        break;
                    case "LimbNode":
                    case "Root":
                        model = new (0, _three.Bone)();
                        break;
                    case "Null":
                    default:
                        model = new (0, _three.Group)();
                        break;
                }
                model.name = node.attrName ? (0, _three.PropertyBinding).sanitizeNodeName(node.attrName) : "";
                model.userData.originalName = node.attrName;
                model.ID = id;
            }
            this.getTransformData(model, node);
            modelMap.set(id, model);
        }
        return modelMap;
    }
    buildSkeleton(relationships, skeletons, id, name) {
        let bone = null;
        relationships.parents.forEach(function(parent) {
            for(const ID in skeletons){
                const skeleton = skeletons[ID];
                skeleton.rawBones.forEach(function(rawBone, i) {
                    if (rawBone.ID === parent.ID) {
                        const subBone = bone;
                        bone = new (0, _three.Bone)();
                        bone.matrixWorld.copy(rawBone.transformLink);
                        // set name and id here - otherwise in cases where "subBone" is created it will not have a name / id
                        bone.name = name ? (0, _three.PropertyBinding).sanitizeNodeName(name) : "";
                        bone.userData.originalName = name;
                        bone.ID = id;
                        skeleton.bones[i] = bone;
                        // In cases where a bone is shared between multiple meshes
                        // duplicate the bone here and and it as a child of the first bone
                        if (subBone !== null) bone.add(subBone);
                    }
                });
            }
        });
        return bone;
    }
    // create a PerspectiveCamera or OrthographicCamera
    createCamera(relationships) {
        let model;
        let cameraAttribute;
        relationships.children.forEach(function(child) {
            const attr = fbxTree.Objects.NodeAttribute[child.ID];
            if (attr !== undefined) cameraAttribute = attr;
        });
        if (cameraAttribute === undefined) model = new (0, _three.Object3D)();
        else {
            let type = 0;
            if (cameraAttribute.CameraProjectionType !== undefined && cameraAttribute.CameraProjectionType.value === 1) type = 1;
            let nearClippingPlane = 1;
            if (cameraAttribute.NearPlane !== undefined) nearClippingPlane = cameraAttribute.NearPlane.value / 1000;
            let farClippingPlane = 1000;
            if (cameraAttribute.FarPlane !== undefined) farClippingPlane = cameraAttribute.FarPlane.value / 1000;
            let width = window.innerWidth;
            let height = window.innerHeight;
            if (cameraAttribute.AspectWidth !== undefined && cameraAttribute.AspectHeight !== undefined) {
                width = cameraAttribute.AspectWidth.value;
                height = cameraAttribute.AspectHeight.value;
            }
            const aspect = width / height;
            let fov = 45;
            if (cameraAttribute.FieldOfView !== undefined) fov = cameraAttribute.FieldOfView.value;
            const focalLength = cameraAttribute.FocalLength ? cameraAttribute.FocalLength.value : null;
            switch(type){
                case 0:
                    model = new (0, _three.PerspectiveCamera)(fov, aspect, nearClippingPlane, farClippingPlane);
                    if (focalLength !== null) model.setFocalLength(focalLength);
                    break;
                case 1:
                    model = new (0, _three.OrthographicCamera)(-width / 2, width / 2, height / 2, -height / 2, nearClippingPlane, farClippingPlane);
                    break;
                default:
                    console.warn("THREE.FBXLoader: Unknown camera type " + type + ".");
                    model = new (0, _three.Object3D)();
                    break;
            }
        }
        return model;
    }
    // Create a DirectionalLight, PointLight or SpotLight
    createLight(relationships) {
        let model;
        let lightAttribute;
        relationships.children.forEach(function(child) {
            const attr = fbxTree.Objects.NodeAttribute[child.ID];
            if (attr !== undefined) lightAttribute = attr;
        });
        if (lightAttribute === undefined) model = new (0, _three.Object3D)();
        else {
            let type;
            // LightType can be undefined for Point lights
            if (lightAttribute.LightType === undefined) type = 0;
            else type = lightAttribute.LightType.value;
            let color = 0xffffff;
            if (lightAttribute.Color !== undefined) color = new (0, _three.Color)().fromArray(lightAttribute.Color.value).convertSRGBToLinear();
            let intensity = lightAttribute.Intensity === undefined ? 1 : lightAttribute.Intensity.value / 100;
            // light disabled
            if (lightAttribute.CastLightOnObject !== undefined && lightAttribute.CastLightOnObject.value === 0) intensity = 0;
            let distance = 0;
            if (lightAttribute.FarAttenuationEnd !== undefined) {
                if (lightAttribute.EnableFarAttenuation !== undefined && lightAttribute.EnableFarAttenuation.value === 0) distance = 0;
                else distance = lightAttribute.FarAttenuationEnd.value;
            }
            // TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?
            const decay = 1;
            switch(type){
                case 0:
                    model = new (0, _three.PointLight)(color, intensity, distance, decay);
                    break;
                case 1:
                    model = new (0, _three.DirectionalLight)(color, intensity);
                    break;
                case 2:
                    let angle = Math.PI / 3;
                    if (lightAttribute.InnerAngle !== undefined) angle = (0, _three.MathUtils).degToRad(lightAttribute.InnerAngle.value);
                    let penumbra = 0;
                    if (lightAttribute.OuterAngle !== undefined) {
                        // TODO: this is not correct - FBX calculates outer and inner angle in degrees
                        // with OuterAngle > InnerAngle && OuterAngle <= Math.PI
                        // while three.js uses a penumbra between (0, 1) to attenuate the inner angle
                        penumbra = (0, _three.MathUtils).degToRad(lightAttribute.OuterAngle.value);
                        penumbra = Math.max(penumbra, 1);
                    }
                    model = new (0, _three.SpotLight)(color, intensity, distance, angle, penumbra, decay);
                    break;
                default:
                    console.warn("THREE.FBXLoader: Unknown light type " + lightAttribute.LightType.value + ", defaulting to a PointLight.");
                    model = new (0, _three.PointLight)(color, intensity);
                    break;
            }
            if (lightAttribute.CastShadows !== undefined && lightAttribute.CastShadows.value === 1) model.castShadow = true;
        }
        return model;
    }
    createMesh(relationships, geometryMap, materialMap) {
        let model;
        let geometry = null;
        let material = null;
        const materials = [];
        // get geometry and materials(s) from connections
        relationships.children.forEach(function(child) {
            if (geometryMap.has(child.ID)) geometry = geometryMap.get(child.ID);
            if (materialMap.has(child.ID)) materials.push(materialMap.get(child.ID));
        });
        if (materials.length > 1) material = materials;
        else if (materials.length > 0) material = materials[0];
        else {
            material = new (0, _three.MeshPhongMaterial)({
                name: (0, _three.Loader).DEFAULT_MATERIAL_NAME,
                color: 0xcccccc
            });
            materials.push(material);
        }
        if ("color" in geometry.attributes) materials.forEach(function(material) {
            material.vertexColors = true;
        });
        if (geometry.FBX_Deformer) {
            model = new (0, _three.SkinnedMesh)(geometry, material);
            model.normalizeSkinWeights();
        } else model = new (0, _three.Mesh)(geometry, material);
        return model;
    }
    createCurve(relationships, geometryMap) {
        const geometry = relationships.children.reduce(function(geo, child) {
            if (geometryMap.has(child.ID)) geo = geometryMap.get(child.ID);
            return geo;
        }, null);
        // FBX does not list materials for Nurbs lines, so we'll just put our own in here.
        const material = new (0, _three.LineBasicMaterial)({
            name: (0, _three.Loader).DEFAULT_MATERIAL_NAME,
            color: 0x3300ff,
            linewidth: 1
        });
        return new (0, _three.Line)(geometry, material);
    }
    // parse the model node for transform data
    getTransformData(model, modelNode) {
        const transformData = {};
        if ("InheritType" in modelNode) transformData.inheritType = parseInt(modelNode.InheritType.value);
        if ("RotationOrder" in modelNode) transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);
        else transformData.eulerOrder = "ZYX";
        if ("Lcl_Translation" in modelNode) transformData.translation = modelNode.Lcl_Translation.value;
        if ("PreRotation" in modelNode) transformData.preRotation = modelNode.PreRotation.value;
        if ("Lcl_Rotation" in modelNode) transformData.rotation = modelNode.Lcl_Rotation.value;
        if ("PostRotation" in modelNode) transformData.postRotation = modelNode.PostRotation.value;
        if ("Lcl_Scaling" in modelNode) transformData.scale = modelNode.Lcl_Scaling.value;
        if ("ScalingOffset" in modelNode) transformData.scalingOffset = modelNode.ScalingOffset.value;
        if ("ScalingPivot" in modelNode) transformData.scalingPivot = modelNode.ScalingPivot.value;
        if ("RotationOffset" in modelNode) transformData.rotationOffset = modelNode.RotationOffset.value;
        if ("RotationPivot" in modelNode) transformData.rotationPivot = modelNode.RotationPivot.value;
        model.userData.transformData = transformData;
    }
    setLookAtProperties(model, modelNode) {
        if ("LookAtProperty" in modelNode) {
            const children = connections.get(model.ID).children;
            children.forEach(function(child) {
                if (child.relationship === "LookAtProperty") {
                    const lookAtTarget = fbxTree.Objects.Model[child.ID];
                    if ("Lcl_Translation" in lookAtTarget) {
                        const pos = lookAtTarget.Lcl_Translation.value;
                        // DirectionalLight, SpotLight
                        if (model.target !== undefined) {
                            model.target.position.fromArray(pos);
                            sceneGraph.add(model.target);
                        } else model.lookAt(new (0, _three.Vector3)().fromArray(pos));
                    }
                }
            });
        }
    }
    bindSkeleton(skeletons, geometryMap, modelMap) {
        const bindMatrices = this.parsePoseNodes();
        for(const ID in skeletons){
            const skeleton = skeletons[ID];
            const parents = connections.get(parseInt(skeleton.ID)).parents;
            parents.forEach(function(parent) {
                if (geometryMap.has(parent.ID)) {
                    const geoID = parent.ID;
                    const geoRelationships = connections.get(geoID);
                    geoRelationships.parents.forEach(function(geoConnParent) {
                        if (modelMap.has(geoConnParent.ID)) {
                            const model = modelMap.get(geoConnParent.ID);
                            model.bind(new (0, _three.Skeleton)(skeleton.bones), bindMatrices[geoConnParent.ID]);
                        }
                    });
                }
            });
        }
    }
    parsePoseNodes() {
        const bindMatrices = {};
        if ("Pose" in fbxTree.Objects) {
            const BindPoseNode = fbxTree.Objects.Pose;
            for(const nodeID in BindPoseNode)if (BindPoseNode[nodeID].attrType === "BindPose" && BindPoseNode[nodeID].NbPoseNodes > 0) {
                const poseNodes = BindPoseNode[nodeID].PoseNode;
                if (Array.isArray(poseNodes)) poseNodes.forEach(function(poseNode) {
                    bindMatrices[poseNode.Node] = new (0, _three.Matrix4)().fromArray(poseNode.Matrix.a);
                });
                else bindMatrices[poseNodes.Node] = new (0, _three.Matrix4)().fromArray(poseNodes.Matrix.a);
            }
        }
        return bindMatrices;
    }
    // Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
    createAmbientLight() {
        if ("GlobalSettings" in fbxTree && "AmbientColor" in fbxTree.GlobalSettings) {
            const ambientColor = fbxTree.GlobalSettings.AmbientColor.value;
            const r = ambientColor[0];
            const g = ambientColor[1];
            const b = ambientColor[2];
            if (r !== 0 || g !== 0 || b !== 0) {
                const color = new (0, _three.Color)(r, g, b).convertSRGBToLinear();
                sceneGraph.add(new (0, _three.AmbientLight)(color, 1));
            }
        }
    }
}
// parse Geometry data from FBXTree and return map of BufferGeometries
class GeometryParser {
    constructor(){
        this.negativeMaterialIndices = false;
    }
    // Parse nodes in FBXTree.Objects.Geometry
    parse(deformers) {
        const geometryMap = new Map();
        if ("Geometry" in fbxTree.Objects) {
            const geoNodes = fbxTree.Objects.Geometry;
            for(const nodeID in geoNodes){
                const relationships = connections.get(parseInt(nodeID));
                const geo = this.parseGeometry(relationships, geoNodes[nodeID], deformers);
                geometryMap.set(parseInt(nodeID), geo);
            }
        }
        // report warnings
        if (this.negativeMaterialIndices === true) console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected.");
        return geometryMap;
    }
    // Parse single node in FBXTree.Objects.Geometry
    parseGeometry(relationships, geoNode, deformers) {
        switch(geoNode.attrType){
            case "Mesh":
                return this.parseMeshGeometry(relationships, geoNode, deformers);
            case "NurbsCurve":
                return this.parseNurbsGeometry(geoNode);
        }
    }
    // Parse single node mesh geometry in FBXTree.Objects.Geometry
    parseMeshGeometry(relationships, geoNode, deformers) {
        const skeletons = deformers.skeletons;
        const morphTargets = [];
        const modelNodes = relationships.parents.map(function(parent) {
            return fbxTree.Objects.Model[parent.ID];
        });
        // don't create geometry if it is not associated with any models
        if (modelNodes.length === 0) return;
        const skeleton = relationships.children.reduce(function(skeleton, child) {
            if (skeletons[child.ID] !== undefined) skeleton = skeletons[child.ID];
            return skeleton;
        }, null);
        relationships.children.forEach(function(child) {
            if (deformers.morphTargets[child.ID] !== undefined) morphTargets.push(deformers.morphTargets[child.ID]);
        });
        // Assume one model and get the preRotation from that
        // if there is more than one model associated with the geometry this may cause problems
        const modelNode = modelNodes[0];
        const transformData = {};
        if ("RotationOrder" in modelNode) transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);
        if ("InheritType" in modelNode) transformData.inheritType = parseInt(modelNode.InheritType.value);
        if ("GeometricTranslation" in modelNode) transformData.translation = modelNode.GeometricTranslation.value;
        if ("GeometricRotation" in modelNode) transformData.rotation = modelNode.GeometricRotation.value;
        if ("GeometricScaling" in modelNode) transformData.scale = modelNode.GeometricScaling.value;
        const transform = generateTransform(transformData);
        return this.genGeometry(geoNode, skeleton, morphTargets, transform);
    }
    // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
    genGeometry(geoNode, skeleton, morphTargets, preTransform) {
        const geo = new (0, _three.BufferGeometry)();
        if (geoNode.attrName) geo.name = geoNode.attrName;
        const geoInfo = this.parseGeoNode(geoNode, skeleton);
        const buffers = this.genBuffers(geoInfo);
        const positionAttribute = new (0, _three.Float32BufferAttribute)(buffers.vertex, 3);
        positionAttribute.applyMatrix4(preTransform);
        geo.setAttribute("position", positionAttribute);
        if (buffers.colors.length > 0) geo.setAttribute("color", new (0, _three.Float32BufferAttribute)(buffers.colors, 3));
        if (skeleton) {
            geo.setAttribute("skinIndex", new (0, _three.Uint16BufferAttribute)(buffers.weightsIndices, 4));
            geo.setAttribute("skinWeight", new (0, _three.Float32BufferAttribute)(buffers.vertexWeights, 4));
            // used later to bind the skeleton to the model
            geo.FBX_Deformer = skeleton;
        }
        if (buffers.normal.length > 0) {
            const normalMatrix = new (0, _three.Matrix3)().getNormalMatrix(preTransform);
            const normalAttribute = new (0, _three.Float32BufferAttribute)(buffers.normal, 3);
            normalAttribute.applyNormalMatrix(normalMatrix);
            geo.setAttribute("normal", normalAttribute);
        }
        buffers.uvs.forEach(function(uvBuffer, i) {
            const name = i === 0 ? "uv" : `uv${i}`;
            geo.setAttribute(name, new (0, _three.Float32BufferAttribute)(buffers.uvs[i], 2));
        });
        if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
            // Convert the material indices of each vertex into rendering groups on the geometry.
            let prevMaterialIndex = buffers.materialIndex[0];
            let startIndex = 0;
            buffers.materialIndex.forEach(function(currentIndex, i) {
                if (currentIndex !== prevMaterialIndex) {
                    geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);
                    prevMaterialIndex = currentIndex;
                    startIndex = i;
                }
            });
            // the loop above doesn't add the last group, do that here.
            if (geo.groups.length > 0) {
                const lastGroup = geo.groups[geo.groups.length - 1];
                const lastIndex = lastGroup.start + lastGroup.count;
                if (lastIndex !== buffers.materialIndex.length) geo.addGroup(lastIndex, buffers.materialIndex.length - lastIndex, prevMaterialIndex);
            }
            // case where there are multiple materials but the whole geometry is only
            // using one of them
            if (geo.groups.length === 0) geo.addGroup(0, buffers.materialIndex.length, buffers.materialIndex[0]);
        }
        this.addMorphTargets(geo, geoNode, morphTargets, preTransform);
        return geo;
    }
    parseGeoNode(geoNode, skeleton) {
        const geoInfo = {};
        geoInfo.vertexPositions = geoNode.Vertices !== undefined ? geoNode.Vertices.a : [];
        geoInfo.vertexIndices = geoNode.PolygonVertexIndex !== undefined ? geoNode.PolygonVertexIndex.a : [];
        if (geoNode.LayerElementColor) geoInfo.color = this.parseVertexColors(geoNode.LayerElementColor[0]);
        if (geoNode.LayerElementMaterial) geoInfo.material = this.parseMaterialIndices(geoNode.LayerElementMaterial[0]);
        if (geoNode.LayerElementNormal) geoInfo.normal = this.parseNormals(geoNode.LayerElementNormal[0]);
        if (geoNode.LayerElementUV) {
            geoInfo.uv = [];
            let i = 0;
            while(geoNode.LayerElementUV[i]){
                if (geoNode.LayerElementUV[i].UV) geoInfo.uv.push(this.parseUVs(geoNode.LayerElementUV[i]));
                i++;
            }
        }
        geoInfo.weightTable = {};
        if (skeleton !== null) {
            geoInfo.skeleton = skeleton;
            skeleton.rawBones.forEach(function(rawBone, i) {
                // loop over the bone's vertex indices and weights
                rawBone.indices.forEach(function(index, j) {
                    if (geoInfo.weightTable[index] === undefined) geoInfo.weightTable[index] = [];
                    geoInfo.weightTable[index].push({
                        id: i,
                        weight: rawBone.weights[j]
                    });
                });
            });
        }
        return geoInfo;
    }
    genBuffers(geoInfo) {
        const buffers = {
            vertex: [],
            normal: [],
            colors: [],
            uvs: [],
            materialIndex: [],
            vertexWeights: [],
            weightsIndices: []
        };
        let polygonIndex = 0;
        let faceLength = 0;
        let displayedWeightsWarning = false;
        // these will hold data for a single face
        let facePositionIndexes = [];
        let faceNormals = [];
        let faceColors = [];
        let faceUVs = [];
        let faceWeights = [];
        let faceWeightIndices = [];
        const scope = this;
        geoInfo.vertexIndices.forEach(function(vertexIndex, polygonVertexIndex) {
            let materialIndex;
            let endOfFace = false;
            // Face index and vertex index arrays are combined in a single array
            // A cube with quad faces looks like this:
            // PolygonVertexIndex: *24 {
            //  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
            //  }
            // Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
            // to find index of last vertex bit shift the index: ^ - 1
            if (vertexIndex < 0) {
                vertexIndex = vertexIndex ^ -1; // equivalent to ( x * -1 ) - 1
                endOfFace = true;
            }
            let weightIndices = [];
            let weights = [];
            facePositionIndexes.push(vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2);
            if (geoInfo.color) {
                const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.color);
                faceColors.push(data[0], data[1], data[2]);
            }
            if (geoInfo.skeleton) {
                if (geoInfo.weightTable[vertexIndex] !== undefined) geoInfo.weightTable[vertexIndex].forEach(function(wt) {
                    weights.push(wt.weight);
                    weightIndices.push(wt.id);
                });
                if (weights.length > 4) {
                    if (!displayedWeightsWarning) {
                        console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.");
                        displayedWeightsWarning = true;
                    }
                    const wIndex = [
                        0,
                        0,
                        0,
                        0
                    ];
                    const Weight = [
                        0,
                        0,
                        0,
                        0
                    ];
                    weights.forEach(function(weight, weightIndex) {
                        let currentWeight = weight;
                        let currentIndex = weightIndices[weightIndex];
                        Weight.forEach(function(comparedWeight, comparedWeightIndex, comparedWeightArray) {
                            if (currentWeight > comparedWeight) {
                                comparedWeightArray[comparedWeightIndex] = currentWeight;
                                currentWeight = comparedWeight;
                                const tmp = wIndex[comparedWeightIndex];
                                wIndex[comparedWeightIndex] = currentIndex;
                                currentIndex = tmp;
                            }
                        });
                    });
                    weightIndices = wIndex;
                    weights = Weight;
                }
                // if the weight array is shorter than 4 pad with 0s
                while(weights.length < 4){
                    weights.push(0);
                    weightIndices.push(0);
                }
                for(let i = 0; i < 4; ++i){
                    faceWeights.push(weights[i]);
                    faceWeightIndices.push(weightIndices[i]);
                }
            }
            if (geoInfo.normal) {
                const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.normal);
                faceNormals.push(data[0], data[1], data[2]);
            }
            if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
                materialIndex = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.material)[0];
                if (materialIndex < 0) {
                    scope.negativeMaterialIndices = true;
                    materialIndex = 0; // fallback
                }
            }
            if (geoInfo.uv) geoInfo.uv.forEach(function(uv, i) {
                const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, uv);
                if (faceUVs[i] === undefined) faceUVs[i] = [];
                faceUVs[i].push(data[0]);
                faceUVs[i].push(data[1]);
            });
            faceLength++;
            if (endOfFace) {
                if (faceLength > 4) console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export.");
                scope.genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength);
                polygonIndex++;
                faceLength = 0;
                // reset arrays for the next face
                facePositionIndexes = [];
                faceNormals = [];
                faceColors = [];
                faceUVs = [];
                faceWeights = [];
                faceWeightIndices = [];
            }
        });
        return buffers;
    }
    // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
    genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength) {
        for(let i = 2; i < faceLength; i++){
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[0]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[1]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[2]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3 + 1]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3 + 2]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3 + 1]]);
            buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3 + 2]]);
            if (geoInfo.skeleton) {
                buffers.vertexWeights.push(faceWeights[0]);
                buffers.vertexWeights.push(faceWeights[1]);
                buffers.vertexWeights.push(faceWeights[2]);
                buffers.vertexWeights.push(faceWeights[3]);
                buffers.vertexWeights.push(faceWeights[(i - 1) * 4]);
                buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 1]);
                buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 2]);
                buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 3]);
                buffers.vertexWeights.push(faceWeights[i * 4]);
                buffers.vertexWeights.push(faceWeights[i * 4 + 1]);
                buffers.vertexWeights.push(faceWeights[i * 4 + 2]);
                buffers.vertexWeights.push(faceWeights[i * 4 + 3]);
                buffers.weightsIndices.push(faceWeightIndices[0]);
                buffers.weightsIndices.push(faceWeightIndices[1]);
                buffers.weightsIndices.push(faceWeightIndices[2]);
                buffers.weightsIndices.push(faceWeightIndices[3]);
                buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4]);
                buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 1]);
                buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 2]);
                buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 3]);
                buffers.weightsIndices.push(faceWeightIndices[i * 4]);
                buffers.weightsIndices.push(faceWeightIndices[i * 4 + 1]);
                buffers.weightsIndices.push(faceWeightIndices[i * 4 + 2]);
                buffers.weightsIndices.push(faceWeightIndices[i * 4 + 3]);
            }
            if (geoInfo.color) {
                buffers.colors.push(faceColors[0]);
                buffers.colors.push(faceColors[1]);
                buffers.colors.push(faceColors[2]);
                buffers.colors.push(faceColors[(i - 1) * 3]);
                buffers.colors.push(faceColors[(i - 1) * 3 + 1]);
                buffers.colors.push(faceColors[(i - 1) * 3 + 2]);
                buffers.colors.push(faceColors[i * 3]);
                buffers.colors.push(faceColors[i * 3 + 1]);
                buffers.colors.push(faceColors[i * 3 + 2]);
            }
            if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
                buffers.materialIndex.push(materialIndex);
                buffers.materialIndex.push(materialIndex);
                buffers.materialIndex.push(materialIndex);
            }
            if (geoInfo.normal) {
                buffers.normal.push(faceNormals[0]);
                buffers.normal.push(faceNormals[1]);
                buffers.normal.push(faceNormals[2]);
                buffers.normal.push(faceNormals[(i - 1) * 3]);
                buffers.normal.push(faceNormals[(i - 1) * 3 + 1]);
                buffers.normal.push(faceNormals[(i - 1) * 3 + 2]);
                buffers.normal.push(faceNormals[i * 3]);
                buffers.normal.push(faceNormals[i * 3 + 1]);
                buffers.normal.push(faceNormals[i * 3 + 2]);
            }
            if (geoInfo.uv) geoInfo.uv.forEach(function(uv, j) {
                if (buffers.uvs[j] === undefined) buffers.uvs[j] = [];
                buffers.uvs[j].push(faceUVs[j][0]);
                buffers.uvs[j].push(faceUVs[j][1]);
                buffers.uvs[j].push(faceUVs[j][(i - 1) * 2]);
                buffers.uvs[j].push(faceUVs[j][(i - 1) * 2 + 1]);
                buffers.uvs[j].push(faceUVs[j][i * 2]);
                buffers.uvs[j].push(faceUVs[j][i * 2 + 1]);
            });
        }
    }
    addMorphTargets(parentGeo, parentGeoNode, morphTargets, preTransform) {
        if (morphTargets.length === 0) return;
        parentGeo.morphTargetsRelative = true;
        parentGeo.morphAttributes.position = [];
        // parentGeo.morphAttributes.normal = []; // not implemented
        const scope = this;
        morphTargets.forEach(function(morphTarget) {
            morphTarget.rawTargets.forEach(function(rawTarget) {
                const morphGeoNode = fbxTree.Objects.Geometry[rawTarget.geoID];
                if (morphGeoNode !== undefined) scope.genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, rawTarget.name);
            });
        });
    }
    // a morph geometry node is similar to a standard  node, and the node is also contained
    // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
    // and a special attribute Index defining which vertices of the original geometry are affected
    // Normal and position attributes only have data for the vertices that are affected by the morph
    genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, name) {
        const vertexIndices = parentGeoNode.PolygonVertexIndex !== undefined ? parentGeoNode.PolygonVertexIndex.a : [];
        const morphPositionsSparse = morphGeoNode.Vertices !== undefined ? morphGeoNode.Vertices.a : [];
        const indices = morphGeoNode.Indexes !== undefined ? morphGeoNode.Indexes.a : [];
        const length = parentGeo.attributes.position.count * 3;
        const morphPositions = new Float32Array(length);
        for(let i = 0; i < indices.length; i++){
            const morphIndex = indices[i] * 3;
            morphPositions[morphIndex] = morphPositionsSparse[i * 3];
            morphPositions[morphIndex + 1] = morphPositionsSparse[i * 3 + 1];
            morphPositions[morphIndex + 2] = morphPositionsSparse[i * 3 + 2];
        }
        // TODO: add morph normal support
        const morphGeoInfo = {
            vertexIndices: vertexIndices,
            vertexPositions: morphPositions
        };
        const morphBuffers = this.genBuffers(morphGeoInfo);
        const positionAttribute = new (0, _three.Float32BufferAttribute)(morphBuffers.vertex, 3);
        positionAttribute.name = name || morphGeoNode.attrName;
        positionAttribute.applyMatrix4(preTransform);
        parentGeo.morphAttributes.position.push(positionAttribute);
    }
    // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
    parseNormals(NormalNode) {
        const mappingType = NormalNode.MappingInformationType;
        const referenceType = NormalNode.ReferenceInformationType;
        const buffer = NormalNode.Normals.a;
        let indexBuffer = [];
        if (referenceType === "IndexToDirect") {
            if ("NormalIndex" in NormalNode) indexBuffer = NormalNode.NormalIndex.a;
            else if ("NormalsIndex" in NormalNode) indexBuffer = NormalNode.NormalsIndex.a;
        }
        return {
            dataSize: 3,
            buffer: buffer,
            indices: indexBuffer,
            mappingType: mappingType,
            referenceType: referenceType
        };
    }
    // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
    parseUVs(UVNode) {
        const mappingType = UVNode.MappingInformationType;
        const referenceType = UVNode.ReferenceInformationType;
        const buffer = UVNode.UV.a;
        let indexBuffer = [];
        if (referenceType === "IndexToDirect") indexBuffer = UVNode.UVIndex.a;
        return {
            dataSize: 2,
            buffer: buffer,
            indices: indexBuffer,
            mappingType: mappingType,
            referenceType: referenceType
        };
    }
    // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
    parseVertexColors(ColorNode) {
        const mappingType = ColorNode.MappingInformationType;
        const referenceType = ColorNode.ReferenceInformationType;
        const buffer = ColorNode.Colors.a;
        let indexBuffer = [];
        if (referenceType === "IndexToDirect") indexBuffer = ColorNode.ColorIndex.a;
        for(let i = 0, c = new (0, _three.Color)(); i < buffer.length; i += 4)c.fromArray(buffer, i).convertSRGBToLinear().toArray(buffer, i);
        return {
            dataSize: 4,
            buffer: buffer,
            indices: indexBuffer,
            mappingType: mappingType,
            referenceType: referenceType
        };
    }
    // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
    parseMaterialIndices(MaterialNode) {
        const mappingType = MaterialNode.MappingInformationType;
        const referenceType = MaterialNode.ReferenceInformationType;
        if (mappingType === "NoMappingInformation") return {
            dataSize: 1,
            buffer: [
                0
            ],
            indices: [
                0
            ],
            mappingType: "AllSame",
            referenceType: referenceType
        };
        const materialIndexBuffer = MaterialNode.Materials.a;
        // Since materials are stored as indices, there's a bit of a mismatch between FBX and what
        // we expect.So we create an intermediate buffer that points to the index in the buffer,
        // for conforming with the other functions we've written for other data.
        const materialIndices = [];
        for(let i = 0; i < materialIndexBuffer.length; ++i)materialIndices.push(i);
        return {
            dataSize: 1,
            buffer: materialIndexBuffer,
            indices: materialIndices,
            mappingType: mappingType,
            referenceType: referenceType
        };
    }
    // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
    parseNurbsGeometry(geoNode) {
        const order = parseInt(geoNode.Order);
        if (isNaN(order)) {
            console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", geoNode.Order, geoNode.id);
            return new (0, _three.BufferGeometry)();
        }
        const degree = order - 1;
        const knots = geoNode.KnotVector.a;
        const controlPoints = [];
        const pointsValues = geoNode.Points.a;
        for(let i = 0, l = pointsValues.length; i < l; i += 4)controlPoints.push(new (0, _three.Vector4)().fromArray(pointsValues, i));
        let startKnot, endKnot;
        if (geoNode.Form === "Closed") controlPoints.push(controlPoints[0]);
        else if (geoNode.Form === "Periodic") {
            startKnot = degree;
            endKnot = knots.length - 1 - startKnot;
            for(let i = 0; i < degree; ++i)controlPoints.push(controlPoints[i]);
        }
        const curve = new (0, _nurbscurveJs.NURBSCurve)(degree, knots, controlPoints, startKnot, endKnot);
        const points = curve.getPoints(controlPoints.length * 12);
        return new (0, _three.BufferGeometry)().setFromPoints(points);
    }
}
// parse animation data from FBXTree
class AnimationParser {
    // take raw animation clips and turn them into three.js animation clips
    parse() {
        const animationClips = [];
        const rawClips = this.parseClips();
        if (rawClips !== undefined) for(const key in rawClips){
            const rawClip = rawClips[key];
            const clip = this.addClip(rawClip);
            animationClips.push(clip);
        }
        return animationClips;
    }
    parseClips() {
        // since the actual transformation data is stored in FBXTree.Objects.AnimationCurve,
        // if this is undefined we can safely assume there are no animations
        if (fbxTree.Objects.AnimationCurve === undefined) return undefined;
        const curveNodesMap = this.parseAnimationCurveNodes();
        this.parseAnimationCurves(curveNodesMap);
        const layersMap = this.parseAnimationLayers(curveNodesMap);
        const rawClips = this.parseAnimStacks(layersMap);
        return rawClips;
    }
    // parse nodes in FBXTree.Objects.AnimationCurveNode
    // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
    // and is referenced by an AnimationLayer
    parseAnimationCurveNodes() {
        const rawCurveNodes = fbxTree.Objects.AnimationCurveNode;
        const curveNodesMap = new Map();
        for(const nodeID in rawCurveNodes){
            const rawCurveNode = rawCurveNodes[nodeID];
            if (rawCurveNode.attrName.match(/S|R|T|DeformPercent/) !== null) {
                const curveNode = {
                    id: rawCurveNode.id,
                    attr: rawCurveNode.attrName,
                    curves: {}
                };
                curveNodesMap.set(curveNode.id, curveNode);
            }
        }
        return curveNodesMap;
    }
    // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
    // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
    // axis ( e.g. times and values of x rotation)
    parseAnimationCurves(curveNodesMap) {
        const rawCurves = fbxTree.Objects.AnimationCurve;
        // TODO: Many values are identical up to roundoff error, but won't be optimised
        // e.g. position times: [0, 0.4, 0. 8]
        // position values: [7.23538335023477e-7, 93.67518615722656, -0.9982695579528809, 7.23538335023477e-7, 93.67518615722656, -0.9982695579528809, 7.235384487103147e-7, 93.67520904541016, -0.9982695579528809]
        // clearly, this should be optimised to
        // times: [0], positions [7.23538335023477e-7, 93.67518615722656, -0.9982695579528809]
        // this shows up in nearly every FBX file, and generally time array is length > 100
        for(const nodeID in rawCurves){
            const animationCurve = {
                id: rawCurves[nodeID].id,
                times: rawCurves[nodeID].KeyTime.a.map(convertFBXTimeToSeconds),
                values: rawCurves[nodeID].KeyValueFloat.a
            };
            const relationships = connections.get(animationCurve.id);
            if (relationships !== undefined) {
                const animationCurveID = relationships.parents[0].ID;
                const animationCurveRelationship = relationships.parents[0].relationship;
                if (animationCurveRelationship.match(/X/)) curveNodesMap.get(animationCurveID).curves["x"] = animationCurve;
                else if (animationCurveRelationship.match(/Y/)) curveNodesMap.get(animationCurveID).curves["y"] = animationCurve;
                else if (animationCurveRelationship.match(/Z/)) curveNodesMap.get(animationCurveID).curves["z"] = animationCurve;
                else if (animationCurveRelationship.match(/DeformPercent/) && curveNodesMap.has(animationCurveID)) curveNodesMap.get(animationCurveID).curves["morph"] = animationCurve;
            }
        }
    }
    // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
    // to various AnimationCurveNodes and is referenced by an AnimationStack node
    // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
    parseAnimationLayers(curveNodesMap) {
        const rawLayers = fbxTree.Objects.AnimationLayer;
        const layersMap = new Map();
        for(const nodeID in rawLayers){
            const layerCurveNodes = [];
            const connection = connections.get(parseInt(nodeID));
            if (connection !== undefined) {
                // all the animationCurveNodes used in the layer
                const children = connection.children;
                children.forEach(function(child, i) {
                    if (curveNodesMap.has(child.ID)) {
                        const curveNode = curveNodesMap.get(child.ID);
                        // check that the curves are defined for at least one axis, otherwise ignore the curveNode
                        if (curveNode.curves.x !== undefined || curveNode.curves.y !== undefined || curveNode.curves.z !== undefined) {
                            if (layerCurveNodes[i] === undefined) {
                                const modelID = connections.get(child.ID).parents.filter(function(parent) {
                                    return parent.relationship !== undefined;
                                })[0].ID;
                                if (modelID !== undefined) {
                                    const rawModel = fbxTree.Objects.Model[modelID.toString()];
                                    if (rawModel === undefined) {
                                        console.warn("THREE.FBXLoader: Encountered a unused curve.", child);
                                        return;
                                    }
                                    const node = {
                                        modelName: rawModel.attrName ? (0, _three.PropertyBinding).sanitizeNodeName(rawModel.attrName) : "",
                                        ID: rawModel.id,
                                        initialPosition: [
                                            0,
                                            0,
                                            0
                                        ],
                                        initialRotation: [
                                            0,
                                            0,
                                            0
                                        ],
                                        initialScale: [
                                            1,
                                            1,
                                            1
                                        ]
                                    };
                                    sceneGraph.traverse(function(child) {
                                        if (child.ID === rawModel.id) {
                                            node.transform = child.matrix;
                                            if (child.userData.transformData) node.eulerOrder = child.userData.transformData.eulerOrder;
                                        }
                                    });
                                    if (!node.transform) node.transform = new (0, _three.Matrix4)();
                                    // if the animated model is pre rotated, we'll have to apply the pre rotations to every
                                    // animation value as well
                                    if ("PreRotation" in rawModel) node.preRotation = rawModel.PreRotation.value;
                                    if ("PostRotation" in rawModel) node.postRotation = rawModel.PostRotation.value;
                                    layerCurveNodes[i] = node;
                                }
                            }
                            if (layerCurveNodes[i]) layerCurveNodes[i][curveNode.attr] = curveNode;
                        } else if (curveNode.curves.morph !== undefined) {
                            if (layerCurveNodes[i] === undefined) {
                                const deformerID = connections.get(child.ID).parents.filter(function(parent) {
                                    return parent.relationship !== undefined;
                                })[0].ID;
                                const morpherID = connections.get(deformerID).parents[0].ID;
                                const geoID = connections.get(morpherID).parents[0].ID;
                                // assuming geometry is not used in more than one model
                                const modelID = connections.get(geoID).parents[0].ID;
                                const rawModel = fbxTree.Objects.Model[modelID];
                                const node = {
                                    modelName: rawModel.attrName ? (0, _three.PropertyBinding).sanitizeNodeName(rawModel.attrName) : "",
                                    morphName: fbxTree.Objects.Deformer[deformerID].attrName
                                };
                                layerCurveNodes[i] = node;
                            }
                            layerCurveNodes[i][curveNode.attr] = curveNode;
                        }
                    }
                });
                layersMap.set(parseInt(nodeID), layerCurveNodes);
            }
        }
        return layersMap;
    }
    // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
    // hierarchy. Each Stack node will be used to create a AnimationClip
    parseAnimStacks(layersMap) {
        const rawStacks = fbxTree.Objects.AnimationStack;
        // connect the stacks (clips) up to the layers
        const rawClips = {};
        for(const nodeID in rawStacks){
            const children = connections.get(parseInt(nodeID)).children;
            if (children.length > 1) // it seems like stacks will always be associated with a single layer. But just in case there are files
            // where there are multiple layers per stack, we'll display a warning
            console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
            const layer = layersMap.get(children[0].ID);
            rawClips[nodeID] = {
                name: rawStacks[nodeID].attrName,
                layer: layer
            };
        }
        return rawClips;
    }
    addClip(rawClip) {
        let tracks = [];
        const scope = this;
        rawClip.layer.forEach(function(rawTracks) {
            tracks = tracks.concat(scope.generateTracks(rawTracks));
        });
        return new (0, _three.AnimationClip)(rawClip.name, -1, tracks);
    }
    generateTracks(rawTracks) {
        const tracks = [];
        let initialPosition = new (0, _three.Vector3)();
        let initialRotation = new (0, _three.Quaternion)();
        let initialScale = new (0, _three.Vector3)();
        if (rawTracks.transform) rawTracks.transform.decompose(initialPosition, initialRotation, initialScale);
        initialPosition = initialPosition.toArray();
        initialRotation = new (0, _three.Euler)().setFromQuaternion(initialRotation, rawTracks.eulerOrder).toArray();
        initialScale = initialScale.toArray();
        if (rawTracks.T !== undefined && Object.keys(rawTracks.T.curves).length > 0) {
            const positionTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.T.curves, initialPosition, "position");
            if (positionTrack !== undefined) tracks.push(positionTrack);
        }
        if (rawTracks.R !== undefined && Object.keys(rawTracks.R.curves).length > 0) {
            const rotationTrack = this.generateRotationTrack(rawTracks.modelName, rawTracks.R.curves, initialRotation, rawTracks.preRotation, rawTracks.postRotation, rawTracks.eulerOrder);
            if (rotationTrack !== undefined) tracks.push(rotationTrack);
        }
        if (rawTracks.S !== undefined && Object.keys(rawTracks.S.curves).length > 0) {
            const scaleTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.S.curves, initialScale, "scale");
            if (scaleTrack !== undefined) tracks.push(scaleTrack);
        }
        if (rawTracks.DeformPercent !== undefined) {
            const morphTrack = this.generateMorphTrack(rawTracks);
            if (morphTrack !== undefined) tracks.push(morphTrack);
        }
        return tracks;
    }
    generateVectorTrack(modelName, curves, initialValue, type) {
        const times = this.getTimesForAllAxes(curves);
        const values = this.getKeyframeTrackValues(times, curves, initialValue);
        return new (0, _three.VectorKeyframeTrack)(modelName + "." + type, times, values);
    }
    generateRotationTrack(modelName, curves, initialValue, preRotation, postRotation, eulerOrder) {
        if (curves.x !== undefined) {
            this.interpolateRotations(curves.x);
            curves.x.values = curves.x.values.map((0, _three.MathUtils).degToRad);
        }
        if (curves.y !== undefined) {
            this.interpolateRotations(curves.y);
            curves.y.values = curves.y.values.map((0, _three.MathUtils).degToRad);
        }
        if (curves.z !== undefined) {
            this.interpolateRotations(curves.z);
            curves.z.values = curves.z.values.map((0, _three.MathUtils).degToRad);
        }
        const times = this.getTimesForAllAxes(curves);
        const values = this.getKeyframeTrackValues(times, curves, initialValue);
        if (preRotation !== undefined) {
            preRotation = preRotation.map((0, _three.MathUtils).degToRad);
            preRotation.push(eulerOrder);
            preRotation = new (0, _three.Euler)().fromArray(preRotation);
            preRotation = new (0, _three.Quaternion)().setFromEuler(preRotation);
        }
        if (postRotation !== undefined) {
            postRotation = postRotation.map((0, _three.MathUtils).degToRad);
            postRotation.push(eulerOrder);
            postRotation = new (0, _three.Euler)().fromArray(postRotation);
            postRotation = new (0, _three.Quaternion)().setFromEuler(postRotation).invert();
        }
        const quaternion = new (0, _three.Quaternion)();
        const euler = new (0, _three.Euler)();
        const quaternionValues = [];
        for(let i = 0; i < values.length; i += 3){
            euler.set(values[i], values[i + 1], values[i + 2], eulerOrder);
            quaternion.setFromEuler(euler);
            if (preRotation !== undefined) quaternion.premultiply(preRotation);
            if (postRotation !== undefined) quaternion.multiply(postRotation);
            quaternion.toArray(quaternionValues, i / 3 * 4);
        }
        return new (0, _three.QuaternionKeyframeTrack)(modelName + ".quaternion", times, quaternionValues);
    }
    generateMorphTrack(rawTracks) {
        const curves = rawTracks.DeformPercent.curves.morph;
        const values = curves.values.map(function(val) {
            return val / 100;
        });
        const morphNum = sceneGraph.getObjectByName(rawTracks.modelName).morphTargetDictionary[rawTracks.morphName];
        return new (0, _three.NumberKeyframeTrack)(rawTracks.modelName + ".morphTargetInfluences[" + morphNum + "]", curves.times, values);
    }
    // For all animated objects, times are defined separately for each axis
    // Here we'll combine the times into one sorted array without duplicates
    getTimesForAllAxes(curves) {
        let times = [];
        // first join together the times for each axis, if defined
        if (curves.x !== undefined) times = times.concat(curves.x.times);
        if (curves.y !== undefined) times = times.concat(curves.y.times);
        if (curves.z !== undefined) times = times.concat(curves.z.times);
        // then sort them
        times = times.sort(function(a, b) {
            return a - b;
        });
        // and remove duplicates
        if (times.length > 1) {
            let targetIndex = 1;
            let lastValue = times[0];
            for(let i = 1; i < times.length; i++){
                const currentValue = times[i];
                if (currentValue !== lastValue) {
                    times[targetIndex] = currentValue;
                    lastValue = currentValue;
                    targetIndex++;
                }
            }
            times = times.slice(0, targetIndex);
        }
        return times;
    }
    getKeyframeTrackValues(times, curves, initialValue) {
        const prevValue = initialValue;
        const values = [];
        let xIndex = -1;
        let yIndex = -1;
        let zIndex = -1;
        times.forEach(function(time) {
            if (curves.x) xIndex = curves.x.times.indexOf(time);
            if (curves.y) yIndex = curves.y.times.indexOf(time);
            if (curves.z) zIndex = curves.z.times.indexOf(time);
            // if there is an x value defined for this frame, use that
            if (xIndex !== -1) {
                const xValue = curves.x.values[xIndex];
                values.push(xValue);
                prevValue[0] = xValue;
            } else // otherwise use the x value from the previous frame
            values.push(prevValue[0]);
            if (yIndex !== -1) {
                const yValue = curves.y.values[yIndex];
                values.push(yValue);
                prevValue[1] = yValue;
            } else values.push(prevValue[1]);
            if (zIndex !== -1) {
                const zValue = curves.z.values[zIndex];
                values.push(zValue);
                prevValue[2] = zValue;
            } else values.push(prevValue[2]);
        });
        return values;
    }
    // Rotations are defined as Euler angles which can have values  of any size
    // These will be converted to quaternions which don't support values greater than
    // PI, so we'll interpolate large rotations
    interpolateRotations(curve) {
        for(let i = 1; i < curve.values.length; i++){
            const initialValue = curve.values[i - 1];
            const valuesSpan = curve.values[i] - initialValue;
            const absoluteSpan = Math.abs(valuesSpan);
            if (absoluteSpan >= 180) {
                const numSubIntervals = absoluteSpan / 180;
                const step = valuesSpan / numSubIntervals;
                let nextValue = initialValue + step;
                const initialTime = curve.times[i - 1];
                const timeSpan = curve.times[i] - initialTime;
                const interval = timeSpan / numSubIntervals;
                let nextTime = initialTime + interval;
                const interpolatedTimes = [];
                const interpolatedValues = [];
                while(nextTime < curve.times[i]){
                    interpolatedTimes.push(nextTime);
                    nextTime += interval;
                    interpolatedValues.push(nextValue);
                    nextValue += step;
                }
                curve.times = inject(curve.times, i, interpolatedTimes);
                curve.values = inject(curve.values, i, interpolatedValues);
            }
        }
    }
}
// parse an FBX file in ASCII format
class TextParser {
    getPrevNode() {
        return this.nodeStack[this.currentIndent - 2];
    }
    getCurrentNode() {
        return this.nodeStack[this.currentIndent - 1];
    }
    getCurrentProp() {
        return this.currentProp;
    }
    pushStack(node) {
        this.nodeStack.push(node);
        this.currentIndent += 1;
    }
    popStack() {
        this.nodeStack.pop();
        this.currentIndent -= 1;
    }
    setCurrentProp(val, name) {
        this.currentProp = val;
        this.currentPropName = name;
    }
    parse(text) {
        this.currentIndent = 0;
        this.allNodes = new FBXTree();
        this.nodeStack = [];
        this.currentProp = [];
        this.currentPropName = "";
        const scope = this;
        const split = text.split(/[\r\n]+/);
        split.forEach(function(line, i) {
            const matchComment = line.match(/^[\s\t]*;/);
            const matchEmpty = line.match(/^[\s\t]*$/);
            if (matchComment || matchEmpty) return;
            const matchBeginning = line.match("^\\t{" + scope.currentIndent + "}(\\w+):(.*){", "");
            const matchProperty = line.match("^\\t{" + scope.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)");
            const matchEnd = line.match("^\\t{" + (scope.currentIndent - 1) + "}}");
            if (matchBeginning) scope.parseNodeBegin(line, matchBeginning);
            else if (matchProperty) scope.parseNodeProperty(line, matchProperty, split[++i]);
            else if (matchEnd) scope.popStack();
            else if (line.match(/^[^\s\t}]/)) // large arrays are split over multiple lines terminated with a ',' character
            // if this is encountered the line needs to be joined to the previous line
            scope.parseNodePropertyContinued(line);
        });
        return this.allNodes;
    }
    parseNodeBegin(line, property) {
        const nodeName = property[1].trim().replace(/^"/, "").replace(/"$/, "");
        const nodeAttrs = property[2].split(",").map(function(attr) {
            return attr.trim().replace(/^"/, "").replace(/"$/, "");
        });
        const node = {
            name: nodeName
        };
        const attrs = this.parseNodeAttr(nodeAttrs);
        const currentNode = this.getCurrentNode();
        // a top node
        if (this.currentIndent === 0) this.allNodes.add(nodeName, node);
        else {
            // if the subnode already exists, append it
            if (nodeName in currentNode) {
                // special case Pose needs PoseNodes as an array
                if (nodeName === "PoseNode") currentNode.PoseNode.push(node);
                else if (currentNode[nodeName].id !== undefined) {
                    currentNode[nodeName] = {};
                    currentNode[nodeName][currentNode[nodeName].id] = currentNode[nodeName];
                }
                if (attrs.id !== "") currentNode[nodeName][attrs.id] = node;
            } else if (typeof attrs.id === "number") {
                currentNode[nodeName] = {};
                currentNode[nodeName][attrs.id] = node;
            } else if (nodeName !== "Properties70") {
                if (nodeName === "PoseNode") currentNode[nodeName] = [
                    node
                ];
                else currentNode[nodeName] = node;
            }
        }
        if (typeof attrs.id === "number") node.id = attrs.id;
        if (attrs.name !== "") node.attrName = attrs.name;
        if (attrs.type !== "") node.attrType = attrs.type;
        this.pushStack(node);
    }
    parseNodeAttr(attrs) {
        let id = attrs[0];
        if (attrs[0] !== "") {
            id = parseInt(attrs[0]);
            if (isNaN(id)) id = attrs[0];
        }
        let name = "", type = "";
        if (attrs.length > 1) {
            name = attrs[1].replace(/^(\w+)::/, "");
            type = attrs[2];
        }
        return {
            id: id,
            name: name,
            type: type
        };
    }
    parseNodeProperty(line, property, contentLine) {
        let propName = property[1].replace(/^"/, "").replace(/"$/, "").trim();
        let propValue = property[2].replace(/^"/, "").replace(/"$/, "").trim();
        // for special case: base64 image data follows "Content: ," line
        //	Content: ,
        //	 "/9j/4RDaRXhpZgAATU0A..."
        if (propName === "Content" && propValue === ",") propValue = contentLine.replace(/"/g, "").replace(/,$/, "").trim();
        const currentNode = this.getCurrentNode();
        const parentName = currentNode.name;
        if (parentName === "Properties70") {
            this.parseNodeSpecialProperty(line, propName, propValue);
            return;
        }
        // Connections
        if (propName === "C") {
            const connProps = propValue.split(",").slice(1);
            const from = parseInt(connProps[0]);
            const to = parseInt(connProps[1]);
            let rest = propValue.split(",").slice(3);
            rest = rest.map(function(elem) {
                return elem.trim().replace(/^"/, "");
            });
            propName = "connections";
            propValue = [
                from,
                to
            ];
            append(propValue, rest);
            if (currentNode[propName] === undefined) currentNode[propName] = [];
        }
        // Node
        if (propName === "Node") currentNode.id = propValue;
        // connections
        if (propName in currentNode && Array.isArray(currentNode[propName])) currentNode[propName].push(propValue);
        else if (propName !== "a") currentNode[propName] = propValue;
        else currentNode.a = propValue;
        this.setCurrentProp(currentNode, propName);
        // convert string to array, unless it ends in ',' in which case more will be added to it
        if (propName === "a" && propValue.slice(-1) !== ",") currentNode.a = parseNumberArray(propValue);
    }
    parseNodePropertyContinued(line) {
        const currentNode = this.getCurrentNode();
        currentNode.a += line;
        // if the line doesn't end in ',' we have reached the end of the property value
        // so convert the string to an array
        if (line.slice(-1) !== ",") currentNode.a = parseNumberArray(currentNode.a);
    }
    // parse "Property70"
    parseNodeSpecialProperty(line, propName, propValue) {
        // split this
        // P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
        // into array like below
        // ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
        const props = propValue.split('",').map(function(prop) {
            return prop.trim().replace(/^\"/, "").replace(/\s/, "_");
        });
        const innerPropName = props[0];
        const innerPropType1 = props[1];
        const innerPropType2 = props[2];
        const innerPropFlag = props[3];
        let innerPropValue = props[4];
        // cast values where needed, otherwise leave as strings
        switch(innerPropType1){
            case "int":
            case "enum":
            case "bool":
            case "ULongLong":
            case "double":
            case "Number":
            case "FieldOfView":
                innerPropValue = parseFloat(innerPropValue);
                break;
            case "Color":
            case "ColorRGB":
            case "Vector3D":
            case "Lcl_Translation":
            case "Lcl_Rotation":
            case "Lcl_Scaling":
                innerPropValue = parseNumberArray(innerPropValue);
                break;
        }
        // CAUTION: these props must append to parent's parent
        this.getPrevNode()[innerPropName] = {
            "type": innerPropType1,
            "type2": innerPropType2,
            "flag": innerPropFlag,
            "value": innerPropValue
        };
        this.setCurrentProp(this.getPrevNode(), innerPropName);
    }
}
// Parse an FBX file in Binary format
class BinaryParser {
    parse(buffer) {
        const reader = new BinaryReader(buffer);
        reader.skip(23); // skip magic 23 bytes
        const version = reader.getUint32();
        if (version < 6400) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + version);
        const allNodes = new FBXTree();
        while(!this.endOfContent(reader)){
            const node = this.parseNode(reader, version);
            if (node !== null) allNodes.add(node.name, node);
        }
        return allNodes;
    }
    // Check if reader has reached the end of content.
    endOfContent(reader) {
        // footer size: 160bytes + 16-byte alignment padding
        // - 16bytes: magic
        // - padding til 16-byte alignment (at least 1byte?)
        //	(seems like some exporters embed fixed 15 or 16bytes?)
        // - 4bytes: magic
        // - 4bytes: version
        // - 120bytes: zero
        // - 16bytes: magic
        if (reader.size() % 16 === 0) return (reader.getOffset() + 160 + 16 & -16) >= reader.size();
        else return reader.getOffset() + 160 + 16 >= reader.size();
    }
    // recursively parse nodes until the end of the file is reached
    parseNode(reader, version) {
        const node = {};
        // The first three data sizes depends on version.
        const endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
        const numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32();
        version >= 7500 ? reader.getUint64() : reader.getUint32(); // the returned propertyListLen is not used
        const nameLen = reader.getUint8();
        const name = reader.getString(nameLen);
        // Regards this node as NULL-record if endOffset is zero
        if (endOffset === 0) return null;
        const propertyList = [];
        for(let i = 0; i < numProperties; i++)propertyList.push(this.parseProperty(reader));
        // Regards the first three elements in propertyList as id, attrName, and attrType
        const id = propertyList.length > 0 ? propertyList[0] : "";
        const attrName = propertyList.length > 1 ? propertyList[1] : "";
        const attrType = propertyList.length > 2 ? propertyList[2] : "";
        // check if this node represents just a single property
        // like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
        node.singleProperty = numProperties === 1 && reader.getOffset() === endOffset ? true : false;
        while(endOffset > reader.getOffset()){
            const subNode = this.parseNode(reader, version);
            if (subNode !== null) this.parseSubNode(name, node, subNode);
        }
        node.propertyList = propertyList; // raw property list used by parent
        if (typeof id === "number") node.id = id;
        if (attrName !== "") node.attrName = attrName;
        if (attrType !== "") node.attrType = attrType;
        if (name !== "") node.name = name;
        return node;
    }
    parseSubNode(name, node, subNode) {
        // special case: child node is single property
        if (subNode.singleProperty === true) {
            const value = subNode.propertyList[0];
            if (Array.isArray(value)) {
                node[subNode.name] = subNode;
                subNode.a = value;
            } else node[subNode.name] = value;
        } else if (name === "Connections" && subNode.name === "C") {
            const array = [];
            subNode.propertyList.forEach(function(property, i) {
                // first Connection is FBX type (OO, OP, etc.). We'll discard these
                if (i !== 0) array.push(property);
            });
            if (node.connections === undefined) node.connections = [];
            node.connections.push(array);
        } else if (subNode.name === "Properties70") {
            const keys = Object.keys(subNode);
            keys.forEach(function(key) {
                node[key] = subNode[key];
            });
        } else if (name === "Properties70" && subNode.name === "P") {
            let innerPropName = subNode.propertyList[0];
            let innerPropType1 = subNode.propertyList[1];
            const innerPropType2 = subNode.propertyList[2];
            const innerPropFlag = subNode.propertyList[3];
            let innerPropValue;
            if (innerPropName.indexOf("Lcl ") === 0) innerPropName = innerPropName.replace("Lcl ", "Lcl_");
            if (innerPropType1.indexOf("Lcl ") === 0) innerPropType1 = innerPropType1.replace("Lcl ", "Lcl_");
            if (innerPropType1 === "Color" || innerPropType1 === "ColorRGB" || innerPropType1 === "Vector" || innerPropType1 === "Vector3D" || innerPropType1.indexOf("Lcl_") === 0) innerPropValue = [
                subNode.propertyList[4],
                subNode.propertyList[5],
                subNode.propertyList[6]
            ];
            else innerPropValue = subNode.propertyList[4];
            // this will be copied to parent, see above
            node[innerPropName] = {
                "type": innerPropType1,
                "type2": innerPropType2,
                "flag": innerPropFlag,
                "value": innerPropValue
            };
        } else if (node[subNode.name] === undefined) {
            if (typeof subNode.id === "number") {
                node[subNode.name] = {};
                node[subNode.name][subNode.id] = subNode;
            } else node[subNode.name] = subNode;
        } else {
            if (subNode.name === "PoseNode") {
                if (!Array.isArray(node[subNode.name])) node[subNode.name] = [
                    node[subNode.name]
                ];
                node[subNode.name].push(subNode);
            } else if (node[subNode.name][subNode.id] === undefined) node[subNode.name][subNode.id] = subNode;
        }
    }
    parseProperty(reader) {
        const type = reader.getString(1);
        let length;
        switch(type){
            case "C":
                return reader.getBoolean();
            case "D":
                return reader.getFloat64();
            case "F":
                return reader.getFloat32();
            case "I":
                return reader.getInt32();
            case "L":
                return reader.getInt64();
            case "R":
                length = reader.getUint32();
                return reader.getArrayBuffer(length);
            case "S":
                length = reader.getUint32();
                return reader.getString(length);
            case "Y":
                return reader.getInt16();
            case "b":
            case "c":
            case "d":
            case "f":
            case "i":
            case "l":
                const arrayLength = reader.getUint32();
                const encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
                const compressedLength = reader.getUint32();
                if (encoding === 0) switch(type){
                    case "b":
                    case "c":
                        return reader.getBooleanArray(arrayLength);
                    case "d":
                        return reader.getFloat64Array(arrayLength);
                    case "f":
                        return reader.getFloat32Array(arrayLength);
                    case "i":
                        return reader.getInt32Array(arrayLength);
                    case "l":
                        return reader.getInt64Array(arrayLength);
                }
                const data = _fflateModuleJs.unzlibSync(new Uint8Array(reader.getArrayBuffer(compressedLength)));
                const reader2 = new BinaryReader(data.buffer);
                switch(type){
                    case "b":
                    case "c":
                        return reader2.getBooleanArray(arrayLength);
                    case "d":
                        return reader2.getFloat64Array(arrayLength);
                    case "f":
                        return reader2.getFloat32Array(arrayLength);
                    case "i":
                        return reader2.getInt32Array(arrayLength);
                    case "l":
                        return reader2.getInt64Array(arrayLength);
                }
                break; // cannot happen but is required by the DeepScan
            default:
                throw new Error("THREE.FBXLoader: Unknown property type " + type);
        }
    }
}
class BinaryReader {
    constructor(buffer, littleEndian){
        this.dv = new DataView(buffer);
        this.offset = 0;
        this.littleEndian = littleEndian !== undefined ? littleEndian : true;
        this._textDecoder = new TextDecoder();
    }
    getOffset() {
        return this.offset;
    }
    size() {
        return this.dv.buffer.byteLength;
    }
    skip(length) {
        this.offset += length;
    }
    // seems like true/false representation depends on exporter.
    // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
    // then sees LSB.
    getBoolean() {
        return (this.getUint8() & 1) === 1;
    }
    getBooleanArray(size) {
        const a = [];
        for(let i = 0; i < size; i++)a.push(this.getBoolean());
        return a;
    }
    getUint8() {
        const value = this.dv.getUint8(this.offset);
        this.offset += 1;
        return value;
    }
    getInt16() {
        const value = this.dv.getInt16(this.offset, this.littleEndian);
        this.offset += 2;
        return value;
    }
    getInt32() {
        const value = this.dv.getInt32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    getInt32Array(size) {
        const a = [];
        for(let i = 0; i < size; i++)a.push(this.getInt32());
        return a;
    }
    getUint32() {
        const value = this.dv.getUint32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    // JavaScript doesn't support 64-bit integer so calculate this here
    // 1 << 32 will return 1 so using multiply operation instead here.
    // There's a possibility that this method returns wrong value if the value
    // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
    // TODO: safely handle 64-bit integer
    getInt64() {
        let low, high;
        if (this.littleEndian) {
            low = this.getUint32();
            high = this.getUint32();
        } else {
            high = this.getUint32();
            low = this.getUint32();
        }
        // calculate negative value
        if (high & 0x80000000) {
            high = ~high & 0xFFFFFFFF;
            low = ~low & 0xFFFFFFFF;
            if (low === 0xFFFFFFFF) high = high + 1 & 0xFFFFFFFF;
            low = low + 1 & 0xFFFFFFFF;
            return -(high * 0x100000000 + low);
        }
        return high * 0x100000000 + low;
    }
    getInt64Array(size) {
        const a = [];
        for(let i = 0; i < size; i++)a.push(this.getInt64());
        return a;
    }
    // Note: see getInt64() comment
    getUint64() {
        let low, high;
        if (this.littleEndian) {
            low = this.getUint32();
            high = this.getUint32();
        } else {
            high = this.getUint32();
            low = this.getUint32();
        }
        return high * 0x100000000 + low;
    }
    getFloat32() {
        const value = this.dv.getFloat32(this.offset, this.littleEndian);
        this.offset += 4;
        return value;
    }
    getFloat32Array(size) {
        const a = [];
        for(let i = 0; i < size; i++)a.push(this.getFloat32());
        return a;
    }
    getFloat64() {
        const value = this.dv.getFloat64(this.offset, this.littleEndian);
        this.offset += 8;
        return value;
    }
    getFloat64Array(size) {
        const a = [];
        for(let i = 0; i < size; i++)a.push(this.getFloat64());
        return a;
    }
    getArrayBuffer(size) {
        const value = this.dv.buffer.slice(this.offset, this.offset + size);
        this.offset += size;
        return value;
    }
    getString(size) {
        const start = this.offset;
        let a = new Uint8Array(this.dv.buffer, start, size);
        this.skip(size);
        const nullByte = a.indexOf(0);
        if (nullByte >= 0) a = new Uint8Array(this.dv.buffer, start, nullByte);
        return this._textDecoder.decode(a);
    }
}
// FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
// and BinaryParser( FBX Binary format)
class FBXTree {
    add(key, val) {
        this[key] = val;
    }
}
// ************** UTILITY FUNCTIONS **************
function isFbxFormatBinary(buffer) {
    const CORRECT = "Kaydara FBX Binary  \x00";
    return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length);
}
function isFbxFormatASCII(text) {
    const CORRECT = [
        "K",
        "a",
        "y",
        "d",
        "a",
        "r",
        "a",
        "\\",
        "F",
        "B",
        "X",
        "\\",
        "B",
        "i",
        "n",
        "a",
        "r",
        "y",
        "\\",
        "\\"
    ];
    let cursor = 0;
    function read(offset) {
        const result = text[offset - 1];
        text = text.slice(cursor + offset);
        cursor++;
        return result;
    }
    for(let i = 0; i < CORRECT.length; ++i){
        const num = read(1);
        if (num === CORRECT[i]) return false;
    }
    return true;
}
function getFbxVersion(text) {
    const versionRegExp = /FBXVersion: (\d+)/;
    const match = text.match(versionRegExp);
    if (match) {
        const version = parseInt(match[1]);
        return version;
    }
    throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
// Converts FBX ticks into real time seconds.
function convertFBXTimeToSeconds(time) {
    return time / 46186158000;
}
const dataArray = [];
// extracts the data from the correct position in the FBX array based on indexing type
function getData(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
    let index;
    switch(infoObject.mappingType){
        case "ByPolygonVertex":
            index = polygonVertexIndex;
            break;
        case "ByPolygon":
            index = polygonIndex;
            break;
        case "ByVertice":
            index = vertexIndex;
            break;
        case "AllSame":
            index = infoObject.indices[0];
            break;
        default:
            console.warn("THREE.FBXLoader: unknown attribute mapping type " + infoObject.mappingType);
    }
    if (infoObject.referenceType === "IndexToDirect") index = infoObject.indices[index];
    const from = index * infoObject.dataSize;
    const to = from + infoObject.dataSize;
    return slice(dataArray, infoObject.buffer, from, to);
}
const tempEuler = new (0, _three.Euler)();
const tempVec = new (0, _three.Vector3)();
// generate transformation from FBX transform data
// ref: https://help.autodesk.com/view/FBX/2017/ENU/?guid=__files_GUID_10CDD63C_79C1_4F2D_BB28_AD2BE65A02ED_htm
// ref: http://docs.autodesk.com/FBX/2014/ENU/FBX-SDK-Documentation/index.html?url=cpp_ref/_transformations_2main_8cxx-example.html,topicNumber=cpp_ref__transformations_2main_8cxx_example_htmlfc10a1e1-b18d-4e72-9dc0-70d0f1959f5e
function generateTransform(transformData) {
    const lTranslationM = new (0, _three.Matrix4)();
    const lPreRotationM = new (0, _three.Matrix4)();
    const lRotationM = new (0, _three.Matrix4)();
    const lPostRotationM = new (0, _three.Matrix4)();
    const lScalingM = new (0, _three.Matrix4)();
    const lScalingPivotM = new (0, _three.Matrix4)();
    const lScalingOffsetM = new (0, _three.Matrix4)();
    const lRotationOffsetM = new (0, _three.Matrix4)();
    const lRotationPivotM = new (0, _three.Matrix4)();
    const lParentGX = new (0, _three.Matrix4)();
    const lParentLX = new (0, _three.Matrix4)();
    const lGlobalT = new (0, _three.Matrix4)();
    const inheritType = transformData.inheritType ? transformData.inheritType : 0;
    if (transformData.translation) lTranslationM.setPosition(tempVec.fromArray(transformData.translation));
    if (transformData.preRotation) {
        const array = transformData.preRotation.map((0, _three.MathUtils).degToRad);
        array.push(transformData.eulerOrder || (0, _three.Euler).DEFAULT_ORDER);
        lPreRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
    }
    if (transformData.rotation) {
        const array = transformData.rotation.map((0, _three.MathUtils).degToRad);
        array.push(transformData.eulerOrder || (0, _three.Euler).DEFAULT_ORDER);
        lRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
    }
    if (transformData.postRotation) {
        const array = transformData.postRotation.map((0, _three.MathUtils).degToRad);
        array.push(transformData.eulerOrder || (0, _three.Euler).DEFAULT_ORDER);
        lPostRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
        lPostRotationM.invert();
    }
    if (transformData.scale) lScalingM.scale(tempVec.fromArray(transformData.scale));
    // Pivots and offsets
    if (transformData.scalingOffset) lScalingOffsetM.setPosition(tempVec.fromArray(transformData.scalingOffset));
    if (transformData.scalingPivot) lScalingPivotM.setPosition(tempVec.fromArray(transformData.scalingPivot));
    if (transformData.rotationOffset) lRotationOffsetM.setPosition(tempVec.fromArray(transformData.rotationOffset));
    if (transformData.rotationPivot) lRotationPivotM.setPosition(tempVec.fromArray(transformData.rotationPivot));
    // parent transform
    if (transformData.parentMatrixWorld) {
        lParentLX.copy(transformData.parentMatrix);
        lParentGX.copy(transformData.parentMatrixWorld);
    }
    const lLRM = lPreRotationM.clone().multiply(lRotationM).multiply(lPostRotationM);
    // Global Rotation
    const lParentGRM = new (0, _three.Matrix4)();
    lParentGRM.extractRotation(lParentGX);
    // Global Shear*Scaling
    const lParentTM = new (0, _three.Matrix4)();
    lParentTM.copyPosition(lParentGX);
    const lParentGRSM = lParentTM.clone().invert().multiply(lParentGX);
    const lParentGSM = lParentGRM.clone().invert().multiply(lParentGRSM);
    const lLSM = lScalingM;
    const lGlobalRS = new (0, _three.Matrix4)();
    if (inheritType === 0) lGlobalRS.copy(lParentGRM).multiply(lLRM).multiply(lParentGSM).multiply(lLSM);
    else if (inheritType === 1) lGlobalRS.copy(lParentGRM).multiply(lParentGSM).multiply(lLRM).multiply(lLSM);
    else {
        const lParentLSM = new (0, _three.Matrix4)().scale(new (0, _three.Vector3)().setFromMatrixScale(lParentLX));
        const lParentLSM_inv = lParentLSM.clone().invert();
        const lParentGSM_noLocal = lParentGSM.clone().multiply(lParentLSM_inv);
        lGlobalRS.copy(lParentGRM).multiply(lLRM).multiply(lParentGSM_noLocal).multiply(lLSM);
    }
    const lRotationPivotM_inv = lRotationPivotM.clone().invert();
    const lScalingPivotM_inv = lScalingPivotM.clone().invert();
    // Calculate the local transform matrix
    let lTransform = lTranslationM.clone().multiply(lRotationOffsetM).multiply(lRotationPivotM).multiply(lPreRotationM).multiply(lRotationM).multiply(lPostRotationM).multiply(lRotationPivotM_inv).multiply(lScalingOffsetM).multiply(lScalingPivotM).multiply(lScalingM).multiply(lScalingPivotM_inv);
    const lLocalTWithAllPivotAndOffsetInfo = new (0, _three.Matrix4)().copyPosition(lTransform);
    const lGlobalTranslation = lParentGX.clone().multiply(lLocalTWithAllPivotAndOffsetInfo);
    lGlobalT.copyPosition(lGlobalTranslation);
    lTransform = lGlobalT.clone().multiply(lGlobalRS);
    // from global to local
    lTransform.premultiply(lParentGX.invert());
    return lTransform;
}
// Returns the three.js intrinsic Euler order corresponding to FBX extrinsic Euler order
// ref: http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_class_fbx_euler_html
function getEulerOrder(order) {
    order = order || 0;
    const enums = [
        "ZYX",
        "YZX",
        "XZY",
        "ZXY",
        "YXZ",
        "XYZ"
    ];
    if (order === 6) {
        console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.");
        return enums[0];
    }
    return enums[order];
}
// Parses comma separated list of numbers and returns them an array.
// Used internally by the TextParser
function parseNumberArray(value) {
    const array = value.split(",").map(function(val) {
        return parseFloat(val);
    });
    return array;
}
function convertArrayBufferToString(buffer, from, to) {
    if (from === undefined) from = 0;
    if (to === undefined) to = buffer.byteLength;
    return new TextDecoder().decode(new Uint8Array(buffer, from, to));
}
function append(a, b) {
    for(let i = 0, j = a.length, l = b.length; i < l; i++, j++)a[j] = b[i];
}
function slice(a, b, from, to) {
    for(let i = from, j = 0; i < to; i++, j++)a[j] = b[i];
    return a;
}
// inject array a2 into array a1 at index
function inject(a1, index, a2) {
    return a1.slice(0, index).concat(a2).concat(a1.slice(index));
}

},{"three":"ktPTu","../libs/fflate.module.js":"6xy0N","../curves/NURBSCurve.js":"guP5o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xy0N":[function(require,module,exports) {
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/ // DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Some of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deflate", ()=>Deflate);
parcelHelpers.export(exports, "AsyncDeflate", ()=>AsyncDeflate);
parcelHelpers.export(exports, "deflate", ()=>deflate);
/**
 * Compresses data with DEFLATE without any wrapper
 * @param data The data to compress
 * @param opts The compression options
 * @returns The deflated version of the data
 */ parcelHelpers.export(exports, "deflateSync", ()=>deflateSync);
parcelHelpers.export(exports, "Inflate", ()=>Inflate);
parcelHelpers.export(exports, "AsyncInflate", ()=>AsyncInflate);
parcelHelpers.export(exports, "inflate", ()=>inflate);
/**
 * Expands DEFLATE data with no wrapper
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "inflateSync", ()=>inflateSync);
parcelHelpers.export(exports, "Gzip", ()=>Gzip);
parcelHelpers.export(exports, "AsyncGzip", ()=>AsyncGzip);
parcelHelpers.export(exports, "gzip", ()=>gzip);
/**
 * Compresses data with GZIP
 * @param data The data to compress
 * @param opts The compression options
 * @returns The gzipped version of the data
 */ parcelHelpers.export(exports, "gzipSync", ()=>gzipSync);
parcelHelpers.export(exports, "Gunzip", ()=>Gunzip);
parcelHelpers.export(exports, "AsyncGunzip", ()=>AsyncGunzip);
parcelHelpers.export(exports, "gunzip", ()=>gunzip);
/**
 * Expands GZIP data
 * @param data The data to decompress
 * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "gunzipSync", ()=>gunzipSync);
parcelHelpers.export(exports, "Zlib", ()=>Zlib);
parcelHelpers.export(exports, "AsyncZlib", ()=>AsyncZlib);
parcelHelpers.export(exports, "zlib", ()=>zlib);
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */ parcelHelpers.export(exports, "zlibSync", ()=>zlibSync);
parcelHelpers.export(exports, "Unzlib", ()=>Unzlib);
parcelHelpers.export(exports, "AsyncUnzlib", ()=>AsyncUnzlib);
parcelHelpers.export(exports, "unzlib", ()=>unzlib);
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "unzlibSync", ()=>unzlibSync);
// Default algorithm for compression (used because having a known output size allows faster decompression)
parcelHelpers.export(exports, "compress", ()=>gzip);
parcelHelpers.export(exports, "AsyncCompress", ()=>AsyncGzip);
// Default algorithm for compression (used because having a known output size allows faster decompression)
parcelHelpers.export(exports, "compressSync", ()=>gzipSync);
parcelHelpers.export(exports, "Compress", ()=>Gzip);
parcelHelpers.export(exports, "Decompress", ()=>Decompress);
parcelHelpers.export(exports, "AsyncDecompress", ()=>AsyncDecompress);
parcelHelpers.export(exports, "decompress", ()=>decompress);
/**
 * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */ parcelHelpers.export(exports, "decompressSync", ()=>decompressSync);
parcelHelpers.export(exports, "DecodeUTF8", ()=>DecodeUTF8);
parcelHelpers.export(exports, "EncodeUTF8", ()=>EncodeUTF8);
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */ parcelHelpers.export(exports, "strToU8", ()=>strToU8);
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */ parcelHelpers.export(exports, "strFromU8", ()=>strFromU8);
parcelHelpers.export(exports, "ZipPassThrough", ()=>ZipPassThrough);
parcelHelpers.export(exports, "ZipDeflate", ()=>ZipDeflate);
parcelHelpers.export(exports, "AsyncZipDeflate", ()=>AsyncZipDeflate);
parcelHelpers.export(exports, "Zip", ()=>Zip);
parcelHelpers.export(exports, "zip", ()=>zip);
/**
 * Synchronously creates a ZIP file. Prefer using `zip` for better performance
 * with more than one file.
 * @param data The directory structure for the ZIP archive
 * @param opts The main options, merged with per-file options
 * @returns The generated ZIP archive
 */ parcelHelpers.export(exports, "zipSync", ()=>zipSync);
parcelHelpers.export(exports, "UnzipPassThrough", ()=>UnzipPassThrough);
parcelHelpers.export(exports, "UnzipInflate", ()=>UnzipInflate);
parcelHelpers.export(exports, "AsyncUnzipInflate", ()=>AsyncUnzipInflate);
parcelHelpers.export(exports, "Unzip", ()=>Unzip);
/**
 * Asynchronously decompresses a ZIP archive
 * @param data The raw compressed ZIP file
 * @param cb The callback to call with the decompressed files
 * @returns A function that can be used to immediately terminate the unzipping
 */ parcelHelpers.export(exports, "unzip", ()=>unzip);
/**
 * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
 * performance with more than one file.
 * @param data The raw compressed ZIP file
 * @returns The decompressed files
 */ parcelHelpers.export(exports, "unzipSync", ()=>unzipSync);
var ch2 = {};
var durl = function(c) {
    return URL.createObjectURL(new Blob([
        c
    ], {
        type: "text/javascript"
    }));
};
var cwk = function(u) {
    return new Worker(u);
};
try {
    URL.revokeObjectURL(durl(""));
} catch (e) {
    // We're in Deno or a very old browser
    durl = function(c) {
        return "data:application/javascript;charset=UTF-8," + encodeURI(c);
    };
    // If Deno, this is necessary; if not, this changes nothing
    cwk = function(u) {
        return new Worker(u, {
            type: "module"
        });
    };
}
var wk = function(c, id, msg, transfer, cb) {
    var w = cwk(ch2[id] || (ch2[id] = durl(c)));
    w.onerror = function(e) {
        return cb(e.error, null);
    };
    w.onmessage = function(e) {
        return cb(null, e.data);
    };
    w.postMessage(msg, transfer);
    return w;
};
// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */ 0,
    0,
    /* impossible */ 0
]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */ 0,
    0
]);
// code length index map
var clim = new u8([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
// get base, reverse index map from extra bits
var freb = function(eb, start) {
    var b = new u16(31);
    for(var i = 0; i < 31; ++i)b[i] = start += 1 << eb[i - 1];
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for(var i = 1; i < 30; ++i)for(var j = b[i]; j < b[i + 1]; ++j)r[j] = j - b[i] << 5 | i;
    return [
        b,
        r
    ];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for(var i = 0; i < 32768; ++i){
    // reverse table algorithm from SO
    var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
    x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
    x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
    rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = function(cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for(; i < s; ++i)++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for(i = 0; i < mb; ++i)le[i] = le[i - 1] + l[i - 1] << 1;
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for(i = 0; i < s; ++i)// ignore 0 lengths
        if (cd[i]) {
            // num encoding both symbol and bits read
            var sv = i << 4 | cd[i];
            // free bits
            var r_1 = mb - cd[i];
            // start value
            var v = le[cd[i] - 1]++ << r_1;
            // m is end value
            for(var m = v | (1 << r_1) - 1; v <= m; ++v)// every 16 bit value starting with the code yields the same result
            co[rev[v] >>> rvb] = sv;
        }
    } else {
        co = new u16(s);
        for(i = 0; i < s; ++i)if (cd[i]) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
    }
    return co;
};
// fixed length tree
var flt = new u8(288);
for(var i = 0; i < 144; ++i)flt[i] = 8;
for(var i = 144; i < 256; ++i)flt[i] = 9;
for(var i = 256; i < 280; ++i)flt[i] = 7;
for(var i = 280; i < 288; ++i)flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for(var i = 0; i < 32; ++i)fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function(a) {
    var m = a[0];
    for(var i = 1; i < a.length; ++i)if (a[i] > m) m = a[i];
    return m;
};
// read d, starting at bit p and mask with m
var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
// get end of byte
var shft = function(p) {
    return (p / 8 | 0) + (p & 7 && 1);
};
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function(v, s, e) {
    if (s == null || s < 0) s = 0;
    if (e == null || e > v.length) e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function(dat, buf, st) {
    // source length
    var sl = dat.length;
    if (!sl || st && !st.l && sl < 5) return buf || new u8(0);
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st) st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf) buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function(l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
                if (t > sl) {
                    if (noSt) throw "unexpected EOF";
                    break;
                }
                // ensure size
                if (noBuf) cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8;
                continue;
            } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for(var i = 0; i < hcLen; ++i)// use index map to get real code
                clt[clim[i]] = bits(dat, pos + i * 3, 7);
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for(var i = 0; i < tl;){
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) ldt[i++] = s;
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
                        while(n--)ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            } else throw "invalid block type";
            if (pos > tbts) {
                if (noSt) throw "unexpected EOF";
                break;
            }
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf) cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var lpos = pos;
        for(;; lpos = pos){
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts) {
                if (noSt) throw "unexpected EOF";
                break;
            }
            if (!c) throw "invalid length/literal";
            if (sym < 256) buf[bt++] = sym;
            else if (sym == 256) {
                lpos = pos, lm = null;
                break;
            } else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d) throw "invalid distance";
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
                }
                if (pos > tbts) {
                    if (noSt) throw "unexpected EOF";
                    break;
                }
                if (noBuf) cbuf(bt + 131072);
                var end = bt + add;
                for(; bt < end; bt += 4){
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = lpos, st.b = bt;
        if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    }while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function(d, mb) {
    // Need extra info to make a tree
    var t = [];
    for(var i = 0; i < d.length; ++i)if (d[i]) t.push({
        s: i,
        f: d[i]
    });
    var s = t.length;
    var t2 = t.slice();
    if (!s) return [
        et,
        0
    ];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [
            v,
            1
        ];
    }
    t.sort(function(a, b) {
        return a.f - b.f;
    });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({
        s: -1,
        f: 25001
    });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = {
        s: -1,
        f: l.f + r.f,
        l: l,
        r: r
    };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while(i1 != s - 1){
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = {
            s: -1,
            f: l.f + r.f,
            l: l,
            r: r
        };
    }
    var maxSym = t2[0].s;
    for(var i = 1; i < s; ++i)if (t2[i].s > maxSym) maxSym = t2[i].s;
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
            return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for(; i < s; ++i){
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << mbt - tr[i2_1]);
                tr[i2_1] = mb;
            } else break;
        }
        dt >>>= lft;
        while(dt > 0){
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
            else ++i;
        }
        for(; i >= 0 && dt; --i){
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [
        new u8(tr),
        mbt
    ];
};
// get the max length and assign length codes
var ln = function(n, l, d) {
    return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
// length codes generation
var lc = function(c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while(s && !c[--s]);
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function(v) {
        cl[cli++] = v;
    };
    for(var i = 1; i <= s; ++i)if (c[i] == cln && i != s) ++cls;
    else {
        if (!cln && cls > 2) {
            for(; cls > 138; cls -= 138)w(32754);
            if (cls > 2) {
                w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
                cls = 0;
            }
        } else if (cls > 3) {
            w(cln), --cls;
            for(; cls > 6; cls -= 6)w(8304);
            if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
        }
        while(cls--)w(cln);
        cls = 1;
        cln = c[i];
    }
    return [
        cl.subarray(0, cli),
        s
    ];
};
// calculate the length of output from tree, code lengths
var clen = function(cf, cl) {
    var l = 0;
    for(var i = 0; i < cl.length; ++i)l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function(out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for(var i = 0; i < s; ++i)out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for(var i = 0; i < lclt.length; ++i)lcfreq[lclt[i] & 31]++;
    for(var i = 0; i < lcdt.length; ++i)lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for(; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for(var i = 0; i < nlcc; ++i)wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [
            lclt,
            lcdt
        ];
        for(var it = 0; it < 2; ++it){
            var clct = lcts[it];
            for(var i = 0; i < clct.length; ++i){
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
            }
        }
    } else lm = flm, ll = flt, dm = fdm, dl = fdt;
    for(var i = 0; i < li; ++i)if (syms[i] > 255) {
        var len = syms[i] >>> 18 & 31;
        wbits16(out, p, lm[len + 257]), p += ll[len + 257];
        if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
        var dst = syms[i] & 31;
        wbits16(out, p, dm[dst]), p += dl[dst];
        if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
    } else wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new u32([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function(dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) for(var i = 0; i <= s; i += 65535){
        // end
        var e = i + 65535;
        if (e < s) // write full block
        pos = wfblk(w, pos, dat.subarray(i, e));
        else {
            // write final block
            w[i] = lst;
            pos = wfblk(w, pos, dat.subarray(i, s));
        }
    }
    else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function(i) {
            return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
        };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for(; i < s; ++i){
            // hash value
            // deopt when i > s - 3 - at end, deopt acceptable
            var hv = hsh(i);
            // index mod 32768    previous index mod
            var imod = i & 32767, pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for(var j = 0; j < 286; ++j)lf[j] = 0;
                    for(var j = 0; j < 30; ++j)df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while(dif <= maxd && --ch_1 && imod != pimod){
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for(; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn) break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for(var j = 0; j < mmd; ++j){
                                    var ti = i - dif + j + 32768 & 32767;
                                    var pti = prev[ti];
                                    var cd = ti - pti + 32768 & 32767;
                                    if (cd > md) md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += imod - pimod + 32768 & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                } else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst && pos & 7) pos = wfblk(w, pos + 1, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// CRC32 table
var crct = /*#__PURE__*/ function() {
    var t = new u32(256);
    for(var i = 0; i < 256; ++i){
        var c = i, k = 9;
        while(--k)c = (c & 1 && 0xEDB88320) ^ c >>> 1;
        t[i] = c;
    }
    return t;
}();
// CRC32
var crc = function() {
    var c = -1;
    return {
        p: function(d) {
            // closures have awful performance
            var cr = c;
            for(var i = 0; i < d.length; ++i)cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
            c = cr;
        },
        d: function() {
            return ~c;
        }
    };
};
// Alder32
var adler = function() {
    var a = 1, b = 0;
    return {
        p: function(d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for(var i = 0; i != l;){
                var e = Math.min(i + 2655, l);
                for(; i < e; ++i)m += n += d[i];
                n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
            }
            a = n, b = m;
        },
        d: function() {
            a %= 65521, b %= 65521;
            return (a & 255) << 24 | a >>> 8 << 16 | (b & 255) << 8 | b >>> 8;
        }
    };
};
// deflate with opts
var dopt = function(dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
// Walmart object spread
var mrg = function(a, b) {
    var o = {};
    for(var k in a)o[k] = a[k];
    for(var k in b)o[k] = b[k];
    return o;
};
// worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.
var wcln = function(fn, fnStr, td) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/ /g, "").split(",");
    for(var i = 0; i < dt.length; ++i){
        var v = dt[i], k = ks[i];
        if (typeof v == "function") {
            fnStr += ";" + k + "=";
            var st_1 = v.toString();
            if (v.prototype) {
                // for global objects
                if (st_1.indexOf("[native code]") != -1) {
                    var spInd = st_1.indexOf(" ", 8) + 1;
                    fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
                } else {
                    fnStr += st_1;
                    for(var t in v.prototype)fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
                }
            } else fnStr += st_1;
        } else td[k] = v;
    }
    return [
        fnStr,
        td
    ];
};
var ch = [];
// clone bufs
var cbfs = function(v) {
    var tl = [];
    for(var k in v)if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32) tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    return tl;
};
// use a worker to execute code
var wrkr = function(fns, init, id, cb) {
    var _a;
    if (!ch[id]) {
        var fnStr = "", td_1 = {}, m = fns.length - 1;
        for(var i = 0; i < m; ++i)_a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];
        ch[id] = wcln(fns[m], fnStr, td_1);
    }
    var td = mrg({}, ch[id][1]);
    return wk(ch[id][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td, cbfs(td), cb);
};
// base async inflate fn
var bInflt = function() {
    return [
        u8,
        u16,
        u32,
        fleb,
        fdeb,
        clim,
        fl,
        fd,
        flrm,
        fdrm,
        rev,
        hMap,
        max,
        bits,
        bits16,
        shft,
        slc,
        inflt,
        inflateSync,
        pbf,
        gu8
    ];
};
var bDflt = function() {
    return [
        u8,
        u16,
        u32,
        fleb,
        fdeb,
        clim,
        revfl,
        revfd,
        flm,
        flt,
        fdm,
        fdt,
        rev,
        deo,
        et,
        hMap,
        wbits,
        wbits16,
        hTree,
        ln,
        lc,
        clen,
        wfblk,
        wblk,
        shft,
        slc,
        dflt,
        dopt,
        deflateSync,
        pbf
    ];
};
// gzip extra
var gze = function() {
    return [
        gzh,
        gzhl,
        wbytes,
        crc,
        crct
    ];
};
// gunzip extra
var guze = function() {
    return [
        gzs,
        gzl
    ];
};
// zlib extra
var zle = function() {
    return [
        zlh,
        wbytes,
        adler
    ];
};
// unzlib extra
var zule = function() {
    return [
        zlv
    ];
};
// post buf
var pbf = function(msg) {
    return postMessage(msg, [
        msg.buffer
    ]);
};
// get u8
var gu8 = function(o) {
    return o && o.size && new u8(o.size);
};
// async helper
var cbify = function(dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err, dat) {
        w.terminate();
        cb(err, dat);
    });
    w.postMessage([
        dat,
        opts
    ], opts.consume ? [
        dat.buffer
    ] : []);
    return function() {
        w.terminate();
    };
};
// auto stream
var astrm = function(strm) {
    strm.ondata = function(dat, final) {
        return postMessage([
            dat,
            final
        ], [
            dat.buffer
        ]);
    };
    return function(ev) {
        return strm.push(ev.data[0], ev.data[1]);
    };
};
// async stream attach
var astrmify = function(fns, strm, opts, init, id) {
    var t;
    var w = wrkr(fns, init, id, function(err, dat) {
        if (err) w.terminate(), strm.ondata.call(strm, err);
        else {
            if (dat[1]) w.terminate();
            strm.ondata.call(strm, err, dat[0], dat[1]);
        }
    });
    w.postMessage(opts);
    strm.push = function(d, f) {
        if (t) throw "stream finished";
        if (!strm.ondata) throw "no stream handler";
        w.postMessage([
            d,
            t = f
        ], [
            d.buffer
        ]);
    };
    strm.terminate = function() {
        w.terminate();
    };
};
// read 2 bytes
var b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
};
// read 4 bytes
var b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
    return b4(d, b) + b4(d, b + 4) * 4294967296;
};
// write bytes
var wbytes = function(d, b, v) {
    for(; v; ++b)d[b] = v, v >>>= 8;
};
// gzip header
var gzh = function(c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
    if (o.mtime != 0) wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
    if (fn) {
        c[3] = 8;
        for(var i = 0; i <= fn.length; ++i)c[i + 10] = fn.charCodeAt(i);
    }
};
// gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start
var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8) throw "invalid gzip data";
    var flg = d[3];
    var st = 10;
    if (flg & 4) st += d[10] | (d[11] << 8) + 2;
    for(var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);
    return st + (flg & 2);
};
// gzip length
var gzl = function(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
// gzip header length
var gzhl = function(o) {
    return 10 + (o.filename && o.filename.length + 1 || 0);
};
// zlib header
var zlh = function(c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = fl << 6 | (fl ? 32 - 2 * fl : 1);
};
// zlib valid
var zlv = function(d) {
    if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw "invalid zlib data";
    if (d[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function AsyncCmpStrm(opts, cb) {
    if (!cb && typeof opts == "function") cb = opts, opts = {};
    this.ondata = cb;
    return opts;
}
// zlib footer: -4 to -0 is Adler32
/**
 * Streaming DEFLATE compression
 */ var Deflate = /*#__PURE__*/ function() {
    function Deflate(opts, cb) {
        if (!cb && typeof opts == "function") cb = opts, opts = {};
        this.ondata = cb;
        this.o = opts || {};
    }
    Deflate.prototype.p = function(c, f) {
        this.ondata(dopt(c, this.o, 0, 0, !f), f);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Deflate.prototype.push = function(chunk, final) {
        if (this.d) throw "stream finished";
        if (!this.ondata) throw "no stream handler";
        this.d = final;
        this.p(chunk, final || false);
    };
    return Deflate;
}();
/**
 * Asynchronous streaming DEFLATE compression
 */ var AsyncDeflate = /*#__PURE__*/ function() {
    function AsyncDeflate(opts, cb) {
        astrmify([
            bDflt,
            function() {
                return [
                    astrm,
                    Deflate
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Deflate(ev.data);
            onmessage = astrm(strm);
        }, 6);
    }
    return AsyncDeflate;
}();
function deflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    return cbify(data, opts, [
        bDflt
    ], function(ev) {
        return pbf(deflateSync(ev.data[0], ev.data[1]));
    }, 0, cb);
}
function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
}
/**
 * Streaming DEFLATE decompression
 */ var Inflate = /*#__PURE__*/ function() {
    /**
     * Creates an inflation stream
     * @param cb The callback to call whenever data is inflated
     */ function Inflate(cb) {
        this.s = {};
        this.p = new u8(0);
        this.ondata = cb;
    }
    Inflate.prototype.e = function(c) {
        if (this.d) throw "stream finished";
        if (!this.ondata) throw "no stream handler";
        var l = this.p.length;
        var n = new u8(l + c.length);
        n.set(this.p), n.set(c, l), this.p = n;
    };
    Inflate.prototype.c = function(final) {
        this.d = this.s.i = final || false;
        var bts = this.s.b;
        var dt = inflt(this.p, this.o, this.s);
        this.ondata(slc(dt, bts, this.s.b), this.d);
        this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
    };
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */ Inflate.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
    };
    return Inflate;
}();
/**
 * Asynchronous streaming DEFLATE decompression
 */ var AsyncInflate = /*#__PURE__*/ function() {
    /**
     * Creates an asynchronous inflation stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncInflate(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            function() {
                return [
                    astrm,
                    Inflate
                ];
            }
        ], this, 0, function() {
            var strm = new Inflate();
            onmessage = astrm(strm);
        }, 7);
    }
    return AsyncInflate;
}();
function inflate(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    return cbify(data, opts, [
        bInflt
    ], function(ev) {
        return pbf(inflateSync(ev.data[0], gu8(ev.data[1])));
    }, 1, cb);
}
function inflateSync(data, out) {
    return inflt(data, out);
}
// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
/**
 * Streaming GZIP compression
 */ var Gzip = /*#__PURE__*/ function() {
    function Gzip(opts, cb) {
        this.c = crc();
        this.l = 0;
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gzip.prototype.push = function(chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Gzip.prototype.p = function(c, f) {
        this.c.p(c);
        this.l += c.length;
        var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
        if (this.v) gzh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
    };
    return Gzip;
}();
/**
 * Asynchronous streaming GZIP compression
 */ var AsyncGzip = /*#__PURE__*/ function() {
    function AsyncGzip(opts, cb) {
        astrmify([
            bDflt,
            gze,
            function() {
                return [
                    astrm,
                    Deflate,
                    Gzip
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Gzip(ev.data);
            onmessage = astrm(strm);
        }, 8);
    }
    return AsyncGzip;
}();
function gzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    return cbify(data, opts, [
        bDflt,
        gze,
        function() {
            return [
                gzipSync
            ];
        }
    ], function(ev) {
        return pbf(gzipSync(ev.data[0], ev.data[1]));
    }, 2, cb);
}
function gzipSync(data, opts) {
    if (!opts) opts = {};
    var c = crc(), l = data.length;
    c.p(data);
    var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
    return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
/**
 * Streaming GZIP decompression
 */ var Gunzip = /*#__PURE__*/ function() {
    /**
     * Creates a GUNZIP stream
     * @param cb The callback to call whenever data is inflated
     */ function Gunzip(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Gunzip.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            var s = this.p.length > 3 ? gzs(this.p) : 4;
            if (s >= this.p.length && !final) return;
            this.p = this.p.subarray(s), this.v = 0;
        }
        if (final) {
            if (this.p.length < 8) throw "invalid gzip stream";
            this.p = this.p.subarray(0, -8);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Gunzip;
}();
/**
 * Asynchronous streaming GZIP decompression
 */ var AsyncGunzip = /*#__PURE__*/ function() {
    /**
     * Creates an asynchronous GUNZIP stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncGunzip(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            guze,
            function() {
                return [
                    astrm,
                    Inflate,
                    Gunzip
                ];
            }
        ], this, 0, function() {
            var strm = new Gunzip();
            onmessage = astrm(strm);
        }, 9);
    }
    return AsyncGunzip;
}();
function gunzip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    return cbify(data, opts, [
        bInflt,
        guze,
        function() {
            return [
                gunzipSync
            ];
        }
    ], function(ev) {
        return pbf(gunzipSync(ev.data[0]));
    }, 3, cb);
}
function gunzipSync(data, out) {
    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
}
/**
 * Streaming Zlib compression
 */ var Zlib = /*#__PURE__*/ function() {
    function Zlib(opts, cb) {
        this.c = adler();
        this.v = 1;
        Deflate.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Zlib.prototype.push = function(chunk, final) {
        Deflate.prototype.push.call(this, chunk, final);
    };
    Zlib.prototype.p = function(c, f) {
        this.c.p(c);
        var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
        if (this.v) zlh(raw, this.o), this.v = 0;
        if (f) wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
    };
    return Zlib;
}();
/**
 * Asynchronous streaming Zlib compression
 */ var AsyncZlib = /*#__PURE__*/ function() {
    function AsyncZlib(opts, cb) {
        astrmify([
            bDflt,
            zle,
            function() {
                return [
                    astrm,
                    Deflate,
                    Zlib
                ];
            }
        ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new Zlib(ev.data);
            onmessage = astrm(strm);
        }, 10);
    }
    return AsyncZlib;
}();
function zlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    return cbify(data, opts, [
        bDflt,
        zle,
        function() {
            return [
                zlibSync
            ];
        }
    ], function(ev) {
        return pbf(zlibSync(ev.data[0], ev.data[1]));
    }, 4, cb);
}
function zlibSync(data, opts) {
    if (!opts) opts = {};
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Streaming Zlib decompression
 */ var Unzlib = /*#__PURE__*/ function() {
    /**
     * Creates a Zlib decompression stream
     * @param cb The callback to call whenever data is inflated
     */ function Unzlib(cb) {
        this.v = 1;
        Inflate.call(this, cb);
    }
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Unzlib.prototype.push = function(chunk, final) {
        Inflate.prototype.e.call(this, chunk);
        if (this.v) {
            if (this.p.length < 2 && !final) return;
            this.p = this.p.subarray(2), this.v = 0;
        }
        if (final) {
            if (this.p.length < 4) throw "invalid zlib stream";
            this.p = this.p.subarray(0, -4);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        Inflate.prototype.c.call(this, final);
    };
    return Unzlib;
}();
/**
 * Asynchronous streaming Zlib decompression
 */ var AsyncUnzlib = /*#__PURE__*/ function() {
    /**
     * Creates an asynchronous Zlib decompression stream
     * @param cb The callback to call whenever data is deflated
     */ function AsyncUnzlib(cb) {
        this.ondata = cb;
        astrmify([
            bInflt,
            zule,
            function() {
                return [
                    astrm,
                    Inflate,
                    Unzlib
                ];
            }
        ], this, 0, function() {
            var strm = new Unzlib();
            onmessage = astrm(strm);
        }, 11);
    }
    return AsyncUnzlib;
}();
function unzlib(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    return cbify(data, opts, [
        bInflt,
        zule,
        function() {
            return [
                unzlibSync
            ];
        }
    ], function(ev) {
        return pbf(unzlibSync(ev.data[0], gu8(ev.data[1])));
    }, 5, cb);
}
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var Decompress = /*#__PURE__*/ function() {
    /**
     * Creates a decompression stream
     * @param cb The callback to call whenever data is decompressed
     */ function Decompress(cb) {
        this.G = Gunzip;
        this.I = Inflate;
        this.Z = Unzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Decompress.prototype.push = function(chunk, final) {
        if (!this.ondata) throw "no stream handler";
        if (!this.s) {
            if (this.p && this.p.length) {
                var n = new u8(this.p.length + chunk.length);
                n.set(this.p), n.set(chunk, this.p.length);
            } else this.p = chunk;
            if (this.p.length > 2) {
                var _this_1 = this;
                var cb = function() {
                    _this_1.ondata.apply(_this_1, arguments);
                };
                this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(cb) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(cb) : new this.Z(cb);
                this.s.push(this.p, final);
                this.p = null;
            }
        } else this.s.push(chunk, final);
    };
    return Decompress;
}();
/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var AsyncDecompress = /*#__PURE__*/ function() {
    /**
   * Creates an asynchronous decompression stream
   * @param cb The callback to call whenever data is decompressed
   */ function AsyncDecompress(cb) {
        this.G = AsyncGunzip;
        this.I = AsyncInflate;
        this.Z = AsyncUnzlib;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ AsyncDecompress.prototype.push = function(chunk, final) {
        Decompress.prototype.push.call(this, chunk, final);
    };
    return AsyncDecompress;
}();
function decompress(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
}
function decompressSync(data, out) {
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, out) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, out) : unzlibSync(data, out);
}
// flatten a directory structure
var fltn = function(d, p, t, o) {
    for(var k in d){
        var val = d[k], n = p + k;
        if (val instanceof u8) t[n] = [
            val,
            o
        ];
        else if (Array.isArray(val)) t[n] = [
            val[0],
            mrg(o, val[1])
        ];
        else fltn(val, n + "/", t, o);
    }
};
// text encoder
var te = typeof TextEncoder != "undefined" && /*#__PURE__*/ new TextEncoder();
// text decoder
var td = typeof TextDecoder != "undefined" && /*#__PURE__*/ new TextDecoder();
// text decoder stream
var tds = 0;
try {
    td.decode(et, {
        stream: true
    });
    tds = 1;
} catch (e) {}
// decode UTF8
var dutf8 = function(d) {
    for(var r = "", i = 0;;){
        var c = d[i++];
        var eb = (c > 127) + (c > 223) + (c > 239);
        if (i + eb > d.length) return [
            r,
            slc(d, i - 1)
        ];
        if (!eb) r += String.fromCharCode(c);
        else if (eb == 3) c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        else if (eb & 1) r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
        else r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
    }
};
/**
 * Streaming UTF-8 decoding
 */ var DecodeUTF8 = /*#__PURE__*/ function() {
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is decoded
     */ function DecodeUTF8(cb) {
        this.ondata = cb;
        if (tds) this.t = new TextDecoder();
        else this.p = et;
    }
    /**
     * Pushes a chunk to be decoded from UTF-8 binary
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ DecodeUTF8.prototype.push = function(chunk, final) {
        if (!this.ondata) throw "no callback";
        final = !!final;
        if (this.t) {
            this.ondata(this.t.decode(chunk, {
                stream: true
            }), final);
            if (final) {
                if (this.t.decode().length) throw "invalid utf-8 data";
                this.t = null;
            }
            return;
        }
        if (!this.p) throw "stream finished";
        var dat = new u8(this.p.length + chunk.length);
        dat.set(this.p);
        dat.set(chunk, this.p.length);
        var _a = dutf8(dat), ch = _a[0], np = _a[1];
        if (final) {
            if (np.length) throw "invalid utf-8 data";
            this.p = null;
        } else this.p = np;
        this.ondata(ch, final);
    };
    return DecodeUTF8;
}();
/**
 * Streaming UTF-8 encoding
 */ var EncodeUTF8 = /*#__PURE__*/ function() {
    /**
     * Creates a UTF-8 decoding stream
     * @param cb The callback to call whenever data is encoded
     */ function EncodeUTF8(cb) {
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be encoded to UTF-8
     * @param chunk The string data to push
     * @param final Whether this is the last chunk
     */ EncodeUTF8.prototype.push = function(chunk, final) {
        if (!this.ondata) throw "no callback";
        if (this.d) throw "stream finished";
        this.ondata(strToU8(chunk), this.d = final || false);
    };
    return EncodeUTF8;
}();
function strToU8(str, latin1) {
    if (latin1) {
        var ar_1 = new u8(str.length);
        for(var i = 0; i < str.length; ++i)ar_1[i] = str.charCodeAt(i);
        return ar_1;
    }
    if (te) return te.encode(str);
    var l = str.length;
    var ar = new u8(str.length + (str.length >> 1));
    var ai = 0;
    var w = function(v) {
        ar[ai++] = v;
    };
    for(var i = 0; i < l; ++i){
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + (l - i << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1) w(c);
        else if (c < 2048) w(192 | c >> 6), w(128 | c & 63);
        else if (c > 55295 && c < 57344) c = 65536 + (c & 1047552) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
        else w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
    }
    return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
    if (latin1) {
        var r = "";
        for(var i = 0; i < dat.length; i += 16384)r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
        return r;
    } else if (td) return td.decode(dat);
    else {
        var _a = dutf8(dat), out = _a[0], ext = _a[1];
        if (ext.length) throw "invalid utf-8 data";
        return out;
    }
}
// deflate bit flag
var dbf = function(l) {
    return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
};
// skip local zip header
var slzh = function(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
// read zip header
var zh = function(d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
    var _a = z && bs == 4294967295 ? z64e(d, es) : [
        bs,
        b4(d, b + 24),
        b4(d, b + 42)
    ], sc = _a[0], su = _a[1], off = _a[2];
    return [
        b2(d, b + 10),
        sc,
        su,
        fn,
        es + b2(d, b + 30) + b2(d, b + 32),
        off
    ];
};
// read zip64 extra field
var z64e = function(d, b) {
    for(; b2(d, b) != 1; b += 4 + b2(d, b + 2));
    return [
        b8(d, b + 12),
        b8(d, b + 4),
        b8(d, b + 20)
    ];
};
// extra field length
var exfl = function(ex) {
    var le = 0;
    if (ex) for(var k in ex){
        var l = ex[k].length;
        if (l > 65535) throw "extra field too long";
        le += l + 4;
    }
    return le;
};
// write zip header
var wzh = function(d, b, f, fn, u, c, ce, co) {
    var fl = fn.length, ex = f.extra, col = co && co.length;
    var exl = exfl(ex);
    wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
    if (ce != null) d[b++] = 20, d[b++] = f.os;
    d[b] = 20, b += 2; // spec compliance? what's that?
    d[b++] = f.flag << 1 | (c == null && 8), d[b++] = u && 8;
    d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
    var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119) throw "date not in range 1980-2099";
    wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1), b += 4;
    if (c != null) {
        wbytes(d, b, f.crc);
        wbytes(d, b + 4, c);
        wbytes(d, b + 8, f.size);
    }
    wbytes(d, b + 12, fl);
    wbytes(d, b + 14, exl), b += 16;
    if (ce != null) {
        wbytes(d, b, col);
        wbytes(d, b + 6, f.attrs);
        wbytes(d, b + 10, ce), b += 14;
    }
    d.set(fn, b);
    b += fl;
    if (exl) for(var k in ex){
        var exf = ex[k], l = exf.length;
        wbytes(d, b, +k);
        wbytes(d, b + 2, l);
        d.set(exf, b + 4), b += 4 + l;
    }
    if (col) d.set(co, b), b += col;
    return b;
};
// write zip footer (end of central directory)
var wzf = function(o, b, c, d, e) {
    wbytes(o, b, 0x6054B50); // skip disk
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
};
/**
 * A pass-through stream to keep data uncompressed in a ZIP archive.
 */ var ZipPassThrough = /*#__PURE__*/ function() {
    /**
     * Creates a pass-through stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     */ function ZipPassThrough(filename) {
        this.filename = filename;
        this.c = crc();
        this.size = 0;
        this.compression = 0;
    }
    /**
     * Processes a chunk and pushes to the output stream. You can override this
     * method in a subclass for custom behavior, but by default this passes
     * the data through. You must call this.ondata(err, chunk, final) at some
     * point in this method.
     * @param chunk The chunk to process
     * @param final Whether this is the last chunk
     */ ZipPassThrough.prototype.process = function(chunk, final) {
        this.ondata(null, chunk, final);
    };
    /**
     * Pushes a chunk to be added. If you are subclassing this with a custom
     * compression algorithm, note that you must push data from the source
     * file only, pre-compression.
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ ZipPassThrough.prototype.push = function(chunk, final) {
        if (!this.ondata) throw "no callback - add to ZIP archive before pushing";
        this.c.p(chunk);
        this.size += chunk.length;
        if (final) this.crc = this.c.d();
        this.process(chunk, final || false);
    };
    return ZipPassThrough;
}();
// I don't extend because TypeScript extension adds 1kB of runtime bloat
/**
 * Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate
 * for better performance
 */ var ZipDeflate = /*#__PURE__*/ function() {
    /**
     * Creates a DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */ function ZipDeflate(filename, opts) {
        var _this_1 = this;
        if (!opts) opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new Deflate(opts, function(dat, final) {
            _this_1.ondata(null, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
    }
    ZipDeflate.prototype.process = function(chunk, final) {
        try {
            this.d.push(chunk, final);
        } catch (e) {
            this.ondata(e, null, final);
        }
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ ZipDeflate.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
    };
    return ZipDeflate;
}();
/**
 * Asynchronous streaming DEFLATE compression for ZIP archives
 */ var AsyncZipDeflate = /*#__PURE__*/ function() {
    /**
     * Creates a DEFLATE stream that can be added to ZIP archives
     * @param filename The filename to associate with this data stream
     * @param opts The compression options
     */ function AsyncZipDeflate(filename, opts) {
        var _this_1 = this;
        if (!opts) opts = {};
        ZipPassThrough.call(this, filename);
        this.d = new AsyncDeflate(opts, function(err, dat, final) {
            _this_1.ondata(err, dat, final);
        });
        this.compression = 8;
        this.flag = dbf(opts.level);
        this.terminate = this.d.terminate;
    }
    AsyncZipDeflate.prototype.process = function(chunk, final) {
        this.d.push(chunk, final);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ AsyncZipDeflate.prototype.push = function(chunk, final) {
        ZipPassThrough.prototype.push.call(this, chunk, final);
    };
    return AsyncZipDeflate;
}();
// TODO: Better tree shaking
/**
 * A zippable archive to which files can incrementally be added
 */ var Zip = /*#__PURE__*/ function() {
    /**
     * Creates an empty ZIP archive to which files can be added
     * @param cb The callback to call whenever data for the generated ZIP archive
     *           is available
     */ function Zip(cb) {
        this.ondata = cb;
        this.u = [];
        this.d = 1;
    }
    /**
     * Adds a file to the ZIP archive
     * @param file The file stream to add
     */ Zip.prototype.add = function(file) {
        var _this_1 = this;
        if (this.d & 2) throw "stream finished";
        var f = strToU8(file.filename), fl = f.length;
        var com = file.comment, o = com && strToU8(com);
        var u = fl != file.filename.length || o && com.length != o.length;
        var hl = fl + exfl(file.extra) + 30;
        if (fl > 65535) throw "filename too long";
        var header = new u8(hl);
        wzh(header, 0, file, f, u);
        var chks = [
            header
        ];
        var pAll = function() {
            for(var _i = 0, chks_1 = chks; _i < chks_1.length; _i++){
                var chk = chks_1[_i];
                _this_1.ondata(null, chk, false);
            }
            chks = [];
        };
        var tr = this.d;
        this.d = 0;
        var ind = this.u.length;
        var uf = mrg(file, {
            f: f,
            u: u,
            o: o,
            t: function() {
                if (file.terminate) file.terminate();
            },
            r: function() {
                pAll();
                if (tr) {
                    var nxt = _this_1.u[ind + 1];
                    if (nxt) nxt.r();
                    else _this_1.d = 1;
                }
                tr = 1;
            }
        });
        var cl = 0;
        file.ondata = function(err, dat, final) {
            if (err) {
                _this_1.ondata(err, dat, final);
                _this_1.terminate();
            } else {
                cl += dat.length;
                chks.push(dat);
                if (final) {
                    var dd = new u8(16);
                    wbytes(dd, 0, 0x8074B50);
                    wbytes(dd, 4, file.crc);
                    wbytes(dd, 8, cl);
                    wbytes(dd, 12, file.size);
                    chks.push(dd);
                    uf.c = cl, uf.b = hl + cl + 16, uf.crc = file.crc, uf.size = file.size;
                    if (tr) uf.r();
                    tr = 1;
                } else if (tr) pAll();
            }
        };
        this.u.push(uf);
    };
    /**
     * Ends the process of adding files and prepares to emit the final chunks.
     * This *must* be called after adding all desired files for the resulting
     * ZIP file to work properly.
     */ Zip.prototype.end = function() {
        var _this_1 = this;
        if (this.d & 2) {
            if (this.d & 1) throw "stream finishing";
            throw "stream finished";
        }
        if (this.d) this.e();
        else this.u.push({
            r: function() {
                if (!(_this_1.d & 1)) return;
                _this_1.u.splice(-1, 1);
                _this_1.e();
            },
            t: function() {}
        });
        this.d = 3;
    };
    Zip.prototype.e = function() {
        var bt = 0, l = 0, tl = 0;
        for(var _i = 0, _a = this.u; _i < _a.length; _i++){
            var f = _a[_i];
            tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
        }
        var out = new u8(tl + 22);
        for(var _b = 0, _c = this.u; _b < _c.length; _b++){
            var f = _c[_b];
            wzh(out, bt, f, f.f, f.u, f.c, l, f.o);
            bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
        }
        wzf(out, bt, this.u.length, tl, l);
        this.ondata(null, out, true);
        this.d = 2;
    };
    /**
     * A method to terminate any internal workers used by the stream. Subsequent
     * calls to add() will fail.
     */ Zip.prototype.terminate = function() {
        for(var _i = 0, _a = this.u; _i < _a.length; _i++){
            var f = _a[_i];
            f.t();
        }
        this.d = 2;
    };
    return Zip;
}();
function zip(data, opts, cb) {
    if (!cb) cb = opts, opts = {};
    if (typeof cb != "function") throw "no callback";
    var r = {};
    fltn(data, "", r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var cbf = function() {
        var out = new u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for(var i = 0; i < slft; ++i){
            var f = files[i];
            try {
                var l = f.c.length;
                wzh(out, tot, f, f.f, f.u, l);
                var badd = 30 + f.f.length + exfl(f.extra);
                var loc = tot + badd;
                out.set(f.c, loc);
                wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
            } catch (e) {
                return cb(e, null);
            }
        }
        wzf(out, o, files.length, cdl, oe);
        cb(null, out);
    };
    if (!lft) cbf();
    var _loop_1 = function(i) {
        var fn = k[i];
        var _a = r[fn], file = _a[0], p = _a[1];
        var c = crc(), size = file.length;
        c.p(file);
        var f = strToU8(fn), s = f.length;
        var com = p.comment, m = com && strToU8(com), ms = m && m.length;
        var exl = exfl(p.extra);
        var compression = p.level == 0 ? 0 : 8;
        var cbl = function(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                var l = d.length;
                files[i] = mrg(p, {
                    size: size,
                    crc: c.d(),
                    c: d,
                    f: f,
                    m: m,
                    u: s != fn.length || m && com.length != ms,
                    compression: compression
                });
                o += 30 + s + exl + l;
                tot += 76 + 2 * (s + exl) + (ms || 0) + l;
                if (!--lft) cbf();
            }
        };
        if (s > 65535) cbl("filename too long", null);
        if (!compression) cbl(null, file);
        else if (size < 160000) try {
            cbl(null, deflateSync(file, p));
        } catch (e) {
            cbl(e, null);
        }
        else term.push(deflate(file, p, cbl));
    };
    // Cannot use lft because it can decrease
    for(var i = 0; i < slft; ++i)_loop_1(i);
    return tAll;
}
function zipSync(data, opts) {
    if (!opts) opts = {};
    var r = {};
    var files = [];
    fltn(data, "", r, opts);
    var o = 0;
    var tot = 0;
    for(var fn in r){
        var _a = r[fn], file = _a[0], p = _a[1];
        var compression = p.level == 0 ? 0 : 8;
        var f = strToU8(fn), s = f.length;
        var com = p.comment, m = com && strToU8(com), ms = m && m.length;
        var exl = exfl(p.extra);
        if (s > 65535) throw "filename too long";
        var d = compression ? deflateSync(file, p) : file, l = d.length;
        var c = crc();
        c.p(file);
        files.push(mrg(p, {
            size: file.length,
            crc: c.d(),
            c: d,
            f: f,
            m: m,
            u: s != fn.length || m && com.length != ms,
            o: o,
            compression: compression
        }));
        o += 30 + s + exl + l;
        tot += 76 + 2 * (s + exl) + (ms || 0) + l;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for(var i = 0; i < files.length; ++i){
        var f = files[i];
        wzh(out, f.o, f, f.f, f.u, f.c.length);
        var badd = 30 + f.f.length + exfl(f.extra);
        out.set(f.c, f.o + badd);
        wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
    }
    wzf(out, o, files.length, cdl, oe);
    return out;
}
/**
 * Streaming pass-through decompression for ZIP archives
 */ var UnzipPassThrough = /*#__PURE__*/ function() {
    function UnzipPassThrough() {}
    UnzipPassThrough.prototype.push = function(data, final) {
        this.ondata(null, data, final);
    };
    UnzipPassThrough.compression = 0;
    return UnzipPassThrough;
}();
/**
 * Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for
 * better performance.
 */ var UnzipInflate = /*#__PURE__*/ function() {
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */ function UnzipInflate() {
        var _this_1 = this;
        this.i = new Inflate(function(dat, final) {
            _this_1.ondata(null, dat, final);
        });
    }
    UnzipInflate.prototype.push = function(data, final) {
        try {
            this.i.push(data, final);
        } catch (e) {
            this.ondata(e, data, final);
        }
    };
    UnzipInflate.compression = 8;
    return UnzipInflate;
}();
/**
 * Asynchronous streaming DEFLATE decompression for ZIP archives
 */ var AsyncUnzipInflate = /*#__PURE__*/ function() {
    /**
     * Creates a DEFLATE decompression that can be used in ZIP archives
     */ function AsyncUnzipInflate(_, sz) {
        var _this_1 = this;
        if (sz < 320000) this.i = new Inflate(function(dat, final) {
            _this_1.ondata(null, dat, final);
        });
        else {
            this.i = new AsyncInflate(function(err, dat, final) {
                _this_1.ondata(err, dat, final);
            });
            this.terminate = this.i.terminate;
        }
    }
    AsyncUnzipInflate.prototype.push = function(data, final) {
        if (this.i.terminate) data = slc(data, 0);
        this.i.push(data, final);
    };
    AsyncUnzipInflate.compression = 8;
    return AsyncUnzipInflate;
}();
/**
 * A ZIP archive decompression stream that emits files as they are discovered
 */ var Unzip = /*#__PURE__*/ function() {
    /**
     * Creates a ZIP decompression stream
     * @param cb The callback to call whenever a file in the ZIP archive is found
     */ function Unzip(cb) {
        this.onfile = cb;
        this.k = [];
        this.o = {
            0: UnzipPassThrough
        };
        this.p = et;
    }
    /**
     * Pushes a chunk to be unzipped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ Unzip.prototype.push = function(chunk, final) {
        var _this_1 = this;
        if (!this.onfile) throw "no callback";
        if (!this.p) throw "stream finished";
        if (this.c > 0) {
            var len = Math.min(this.c, chunk.length);
            var toAdd = chunk.subarray(0, len);
            this.c -= len;
            if (this.d) this.d.push(toAdd, !this.c);
            else this.k[0].push(toAdd);
            chunk = chunk.subarray(len);
            if (chunk.length) return this.push(chunk, final);
        } else {
            var f = 0, i = 0, is = void 0, buf = void 0;
            if (!this.p.length) buf = chunk;
            else if (!chunk.length) buf = this.p;
            else {
                buf = new u8(this.p.length + chunk.length);
                buf.set(this.p), buf.set(chunk, this.p.length);
            }
            var l = buf.length, oc = this.c, add = oc && this.d;
            var _loop_2 = function() {
                var _a;
                var sig = b4(buf, i);
                if (sig == 0x4034B50) {
                    f = 1, is = i;
                    this_1.d = null;
                    this_1.c = 0;
                    var bf = b2(buf, i + 6), cmp_1 = b2(buf, i + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i + 26), es = b2(buf, i + 28);
                    if (l > i + 30 + fnl + es) {
                        var chks_2 = [];
                        this_1.k.unshift(chks_2);
                        f = 2;
                        var sc_1 = b4(buf, i + 18), su_1 = b4(buf, i + 22);
                        var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);
                        if (sc_1 == 4294967295) _a = dd ? [
                            -2
                        ] : z64e(buf, i), sc_1 = _a[0], su_1 = _a[1];
                        else if (dd) sc_1 = -1;
                        i += es;
                        this_1.c = sc_1;
                        var d_1;
                        var file_1 = {
                            name: fn_1,
                            compression: cmp_1,
                            start: function() {
                                if (!file_1.ondata) throw "no callback";
                                if (!sc_1) file_1.ondata(null, et, true);
                                else {
                                    var ctr = _this_1.o[cmp_1];
                                    if (!ctr) throw "unknown compression type " + cmp_1;
                                    d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                                    d_1.ondata = function(err, dat, final) {
                                        file_1.ondata(err, dat, final);
                                    };
                                    for(var _i = 0, chks_3 = chks_2; _i < chks_3.length; _i++){
                                        var dat = chks_3[_i];
                                        d_1.push(dat, false);
                                    }
                                    if (_this_1.k[0] == chks_2 && _this_1.c) _this_1.d = d_1;
                                    else d_1.push(et, true);
                                }
                            },
                            terminate: function() {
                                if (d_1 && d_1.terminate) d_1.terminate();
                            }
                        };
                        if (sc_1 >= 0) file_1.size = sc_1, file_1.originalSize = su_1;
                        this_1.onfile(file_1);
                    }
                    return "break";
                } else if (oc) {
                    if (sig == 0x8074B50) {
                        is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
                        return "break";
                    } else if (sig == 0x2014B50) {
                        is = i -= 4, f = 3, this_1.c = 0;
                        return "break";
                    }
                }
            };
            var this_1 = this;
            for(; i < l - 4; ++i){
                var state_1 = _loop_2();
                if (state_1 === "break") break;
            }
            this.p = et;
            if (oc < 0) {
                var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 0x8074B50 && 4)) : buf.subarray(0, i);
                if (add) add.push(dat, !!f);
                else this.k[+(f == 2)].push(dat);
            }
            if (f & 2) return this.push(buf.subarray(i), final);
            this.p = buf.subarray(i);
        }
        if (final) {
            if (this.c) throw "invalid zip file";
            this.p = null;
        }
    };
    /**
     * Registers a decoder with the stream, allowing for files compressed with
     * the compression type provided to be expanded correctly
     * @param decoder The decoder constructor
     */ Unzip.prototype.register = function(decoder) {
        this.o[decoder.compression] = decoder;
    };
    return Unzip;
}();
function unzip(data, cb) {
    if (typeof cb != "function") throw "no callback";
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var files = {};
    var e = data.length - 22;
    for(; b4(data, e) != 0x6054B50; --e)if (!e || data.length - e > 65558) {
        cb("invalid zip file", null);
        return;
    }
    var lft = b2(data, e + 8);
    if (!lft) cb(null, {});
    var c = lft;
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50) {
            cb("invalid zip file", null);
            return;
        }
        c = lft = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    var _loop_3 = function(i) {
        var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        var cbl = function(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                files[fn] = d;
                if (!--lft) cb(null, files);
            }
        };
        if (!c_1) cbl(null, slc(data, b, b + sc));
        else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (sc < 320000) try {
                cbl(null, inflateSync(infl, new u8(su)));
            } catch (e) {
                cbl(e, null);
            }
            else term.push(inflate(infl, {
                size: su
            }, cbl));
        } else cbl("unknown compression type " + c_1, null);
    };
    for(var i = 0; i < c; ++i)_loop_3(i);
    return tAll;
}
function unzipSync(data) {
    var files = {};
    var e = data.length - 22;
    for(; b4(data, e) != 0x6054B50; --e){
        if (!e || data.length - e > 65558) throw "invalid zip file";
    }
    var c = b2(data, e + 8);
    if (!c) return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = b4(data, e - 12);
        if (b4(data, e) != 0x6064B50) throw "invalid zip file";
        c = b4(data, e + 32);
        o = b4(data, e + 48);
    }
    for(var i = 0; i < c; ++i){
        var _a = zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
        o = no;
        if (!c_2) files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8) files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
        else throw "unknown compression type " + c_2;
    }
    return files;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"guP5o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NURBSCurve", ()=>NURBSCurve);
var _three = require("three");
var _nurbsutilsJs = require("../curves/NURBSUtils.js");
/**
 * NURBS curve object
 *
 * Derives from Curve, overriding getPoint and getTangent.
 *
 * Implementation is based on (x, y [, z=0 [, w=1]]) control points with w=weight.
 *
 **/ class NURBSCurve extends (0, _three.Curve) {
    constructor(degree, knots /* array of reals */ , controlPoints /* array of Vector(2|3|4) */ , startKnot /* index in knots */ , endKnot /* index in knots */ ){
        super();
        this.degree = degree;
        this.knots = knots;
        this.controlPoints = [];
        // Used by periodic NURBS to remove hidden spans
        this.startKnot = startKnot || 0;
        this.endKnot = endKnot || this.knots.length - 1;
        for(let i = 0; i < controlPoints.length; ++i){
            // ensure Vector4 for control points
            const point = controlPoints[i];
            this.controlPoints[i] = new (0, _three.Vector4)(point.x, point.y, point.z, point.w);
        }
    }
    getPoint(t, optionalTarget = new (0, _three.Vector3)()) {
        const point = optionalTarget;
        const u = this.knots[this.startKnot] + t * (this.knots[this.endKnot] - this.knots[this.startKnot]); // linear mapping t->u
        // following results in (wx, wy, wz, w) homogeneous point
        const hpoint = _nurbsutilsJs.calcBSplinePoint(this.degree, this.knots, this.controlPoints, u);
        if (hpoint.w !== 1.0) // project to 3D space: (wx, wy, wz, w) -> (x, y, z, 1)
        hpoint.divideScalar(hpoint.w);
        return point.set(hpoint.x, hpoint.y, hpoint.z);
    }
    getTangent(t, optionalTarget = new (0, _three.Vector3)()) {
        const tangent = optionalTarget;
        const u = this.knots[0] + t * (this.knots[this.knots.length - 1] - this.knots[0]);
        const ders = _nurbsutilsJs.calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, u, 1);
        tangent.copy(ders[1]).normalize();
        return tangent;
    }
}

},{"three":"ktPTu","../curves/NURBSUtils.js":"lCV6c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCV6c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findSpan", ()=>findSpan);
parcelHelpers.export(exports, "calcBasisFunctions", ()=>calcBasisFunctions);
parcelHelpers.export(exports, "calcBSplinePoint", ()=>calcBSplinePoint);
parcelHelpers.export(exports, "calcBasisFunctionDerivatives", ()=>calcBasisFunctionDerivatives);
parcelHelpers.export(exports, "calcBSplineDerivatives", ()=>calcBSplineDerivatives);
parcelHelpers.export(exports, "calcKoverI", ()=>calcKoverI);
parcelHelpers.export(exports, "calcRationalCurveDerivatives", ()=>calcRationalCurveDerivatives);
parcelHelpers.export(exports, "calcNURBSDerivatives", ()=>calcNURBSDerivatives);
parcelHelpers.export(exports, "calcSurfacePoint", ()=>calcSurfacePoint);
var _three = require("three");
/**
 * NURBS utils
 *
 * See NURBSCurve and NURBSSurface.
 **/ /**************************************************************
 *	NURBS Utils
 **************************************************************/ /*
Finds knot vector span.

p : degree
u : parametric value
U : knot vector

returns the span
*/ function findSpan(p, u, U) {
    const n = U.length - p - 1;
    if (u >= U[n]) return n - 1;
    if (u <= U[p]) return p;
    let low = p;
    let high = n;
    let mid = Math.floor((low + high) / 2);
    while(u < U[mid] || u >= U[mid + 1]){
        if (u < U[mid]) high = mid;
        else low = mid;
        mid = Math.floor((low + high) / 2);
    }
    return mid;
}
/*
Calculate basis functions. See The NURBS Book, page 70, algorithm A2.2

span : span in which u lies
u    : parametric point
p    : degree
U    : knot vector

returns array[p+1] with basis functions values.
*/ function calcBasisFunctions(span, u, p, U) {
    const N = [];
    const left = [];
    const right = [];
    N[0] = 1.0;
    for(let j = 1; j <= p; ++j){
        left[j] = u - U[span + 1 - j];
        right[j] = U[span + j] - u;
        let saved = 0.0;
        for(let r = 0; r < j; ++r){
            const rv = right[r + 1];
            const lv = left[j - r];
            const temp = N[r] / (rv + lv);
            N[r] = saved + rv * temp;
            saved = lv * temp;
        }
        N[j] = saved;
    }
    return N;
}
/*
Calculate B-Spline curve points. See The NURBS Book, page 82, algorithm A3.1.

p : degree of B-Spline
U : knot vector
P : control points (x, y, z, w)
u : parametric point

returns point for given u
*/ function calcBSplinePoint(p, U, P, u) {
    const span = findSpan(p, u, U);
    const N = calcBasisFunctions(span, u, p, U);
    const C = new (0, _three.Vector4)(0, 0, 0, 0);
    for(let j = 0; j <= p; ++j){
        const point = P[span - p + j];
        const Nj = N[j];
        const wNj = point.w * Nj;
        C.x += point.x * wNj;
        C.y += point.y * wNj;
        C.z += point.z * wNj;
        C.w += point.w * Nj;
    }
    return C;
}
/*
Calculate basis functions derivatives. See The NURBS Book, page 72, algorithm A2.3.

span : span in which u lies
u    : parametric point
p    : degree
n    : number of derivatives to calculate
U    : knot vector

returns array[n+1][p+1] with basis functions derivatives
*/ function calcBasisFunctionDerivatives(span, u, p, n, U) {
    const zeroArr = [];
    for(let i = 0; i <= p; ++i)zeroArr[i] = 0.0;
    const ders = [];
    for(let i = 0; i <= n; ++i)ders[i] = zeroArr.slice(0);
    const ndu = [];
    for(let i = 0; i <= p; ++i)ndu[i] = zeroArr.slice(0);
    ndu[0][0] = 1.0;
    const left = zeroArr.slice(0);
    const right = zeroArr.slice(0);
    for(let j = 1; j <= p; ++j){
        left[j] = u - U[span + 1 - j];
        right[j] = U[span + j] - u;
        let saved = 0.0;
        for(let r = 0; r < j; ++r){
            const rv = right[r + 1];
            const lv = left[j - r];
            ndu[j][r] = rv + lv;
            const temp = ndu[r][j - 1] / ndu[j][r];
            ndu[r][j] = saved + rv * temp;
            saved = lv * temp;
        }
        ndu[j][j] = saved;
    }
    for(let j = 0; j <= p; ++j)ders[0][j] = ndu[j][p];
    for(let r = 0; r <= p; ++r){
        let s1 = 0;
        let s2 = 1;
        const a = [];
        for(let i = 0; i <= p; ++i)a[i] = zeroArr.slice(0);
        a[0][0] = 1.0;
        for(let k = 1; k <= n; ++k){
            let d = 0.0;
            const rk = r - k;
            const pk = p - k;
            if (r >= k) {
                a[s2][0] = a[s1][0] / ndu[pk + 1][rk];
                d = a[s2][0] * ndu[rk][pk];
            }
            const j1 = rk >= -1 ? 1 : -rk;
            const j2 = r - 1 <= pk ? k - 1 : p - r;
            for(let j = j1; j <= j2; ++j){
                a[s2][j] = (a[s1][j] - a[s1][j - 1]) / ndu[pk + 1][rk + j];
                d += a[s2][j] * ndu[rk + j][pk];
            }
            if (r <= pk) {
                a[s2][k] = -a[s1][k - 1] / ndu[pk + 1][r];
                d += a[s2][k] * ndu[r][pk];
            }
            ders[k][r] = d;
            const j = s1;
            s1 = s2;
            s2 = j;
        }
    }
    let r = p;
    for(let k = 1; k <= n; ++k){
        for(let j = 0; j <= p; ++j)ders[k][j] *= r;
        r *= p - k;
    }
    return ders;
}
/*
	Calculate derivatives of a B-Spline. See The NURBS Book, page 93, algorithm A3.2.

	p  : degree
	U  : knot vector
	P  : control points
	u  : Parametric points
	nd : number of derivatives

	returns array[d+1] with derivatives
	*/ function calcBSplineDerivatives(p, U, P, u, nd) {
    const du = nd < p ? nd : p;
    const CK = [];
    const span = findSpan(p, u, U);
    const nders = calcBasisFunctionDerivatives(span, u, p, du, U);
    const Pw = [];
    for(let i = 0; i < P.length; ++i){
        const point = P[i].clone();
        const w = point.w;
        point.x *= w;
        point.y *= w;
        point.z *= w;
        Pw[i] = point;
    }
    for(let k = 0; k <= du; ++k){
        const point = Pw[span - p].clone().multiplyScalar(nders[k][0]);
        for(let j = 1; j <= p; ++j)point.add(Pw[span - p + j].clone().multiplyScalar(nders[k][j]));
        CK[k] = point;
    }
    for(let k = du + 1; k <= nd + 1; ++k)CK[k] = new (0, _three.Vector4)(0, 0, 0);
    return CK;
}
/*
Calculate "K over I"

returns k!/(i!(k-i)!)
*/ function calcKoverI(k, i) {
    let nom = 1;
    for(let j = 2; j <= k; ++j)nom *= j;
    let denom = 1;
    for(let j = 2; j <= i; ++j)denom *= j;
    for(let j = 2; j <= k - i; ++j)denom *= j;
    return nom / denom;
}
/*
Calculate derivatives (0-nd) of rational curve. See The NURBS Book, page 127, algorithm A4.2.

Pders : result of function calcBSplineDerivatives

returns array with derivatives for rational curve.
*/ function calcRationalCurveDerivatives(Pders) {
    const nd = Pders.length;
    const Aders = [];
    const wders = [];
    for(let i = 0; i < nd; ++i){
        const point = Pders[i];
        Aders[i] = new (0, _three.Vector3)(point.x, point.y, point.z);
        wders[i] = point.w;
    }
    const CK = [];
    for(let k = 0; k < nd; ++k){
        const v = Aders[k].clone();
        for(let i = 1; i <= k; ++i)v.sub(CK[k - i].clone().multiplyScalar(calcKoverI(k, i) * wders[i]));
        CK[k] = v.divideScalar(wders[0]);
    }
    return CK;
}
/*
Calculate NURBS curve derivatives. See The NURBS Book, page 127, algorithm A4.2.

p  : degree
U  : knot vector
P  : control points in homogeneous space
u  : parametric points
nd : number of derivatives

returns array with derivatives.
*/ function calcNURBSDerivatives(p, U, P, u, nd) {
    const Pders = calcBSplineDerivatives(p, U, P, u, nd);
    return calcRationalCurveDerivatives(Pders);
}
/*
Calculate rational B-Spline surface point. See The NURBS Book, page 134, algorithm A4.3.

p1, p2 : degrees of B-Spline surface
U1, U2 : knot vectors
P      : control points (x, y, z, w)
u, v   : parametric values

returns point for given (u, v)
*/ function calcSurfacePoint(p, q, U, V, P, u, v, target) {
    const uspan = findSpan(p, u, U);
    const vspan = findSpan(q, v, V);
    const Nu = calcBasisFunctions(uspan, u, p, U);
    const Nv = calcBasisFunctions(vspan, v, q, V);
    const temp = [];
    for(let l = 0; l <= q; ++l){
        temp[l] = new (0, _three.Vector4)(0, 0, 0, 0);
        for(let k = 0; k <= p; ++k){
            const point = P[uspan - p + k][vspan - q + l].clone();
            const w = point.w;
            point.x *= w;
            point.y *= w;
            point.z *= w;
            temp[l].add(point.multiplyScalar(Nu[k]));
        }
    }
    const Sw = new (0, _three.Vector4)(0, 0, 0, 0);
    for(let l = 0; l <= q; ++l)Sw.add(temp[l].multiplyScalar(Nv[l]));
    Sw.divideScalar(Sw.w);
    target.set(Sw.x, Sw.y, Sw.z);
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"htIhD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OBJLoader", ()=>OBJLoader);
var _three = require("three");
// o object_name | g group_name
const _object_pattern = /^[og]\s*(.+)?/;
// mtllib file_reference
const _material_library_pattern = /^mtllib /;
// usemtl material_name
const _material_use_pattern = /^usemtl /;
// usemap map_name
const _map_use_pattern = /^usemap /;
const _face_vertex_data_separator_pattern = /\s+/;
const _vA = new (0, _three.Vector3)();
const _vB = new (0, _three.Vector3)();
const _vC = new (0, _three.Vector3)();
const _ab = new (0, _three.Vector3)();
const _cb = new (0, _three.Vector3)();
const _color = new (0, _three.Color)();
function ParserState() {
    const state = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materials: {},
        materialLibraries: [],
        startObject: function(name, fromDeclaration) {
            // If the current object (initial from reset) is not from a g/o declaration in the parsed
            // file. We need to use it for the first parsed g/o to keep things in sync.
            if (this.object && this.object.fromDeclaration === false) {
                this.object.name = name;
                this.object.fromDeclaration = fromDeclaration !== false;
                return;
            }
            const previousMaterial = this.object && typeof this.object.currentMaterial === "function" ? this.object.currentMaterial() : undefined;
            if (this.object && typeof this.object._finalize === "function") this.object._finalize(true);
            this.object = {
                name: name || "",
                fromDeclaration: fromDeclaration !== false,
                geometry: {
                    vertices: [],
                    normals: [],
                    colors: [],
                    uvs: [],
                    hasUVIndices: false
                },
                materials: [],
                smooth: true,
                startMaterial: function(name, libraries) {
                    const previous = this._finalize(false);
                    // New usemtl declaration overwrites an inherited material, except if faces were declared
                    // after the material, then it must be preserved for proper MultiMaterial continuation.
                    if (previous && (previous.inherited || previous.groupCount <= 0)) this.materials.splice(previous.index, 1);
                    const material = {
                        index: this.materials.length,
                        name: name || "",
                        mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : "",
                        smooth: previous !== undefined ? previous.smooth : this.smooth,
                        groupStart: previous !== undefined ? previous.groupEnd : 0,
                        groupEnd: -1,
                        groupCount: -1,
                        inherited: false,
                        clone: function(index) {
                            const cloned = {
                                index: typeof index === "number" ? index : this.index,
                                name: this.name,
                                mtllib: this.mtllib,
                                smooth: this.smooth,
                                groupStart: 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: false
                            };
                            cloned.clone = this.clone.bind(cloned);
                            return cloned;
                        }
                    };
                    this.materials.push(material);
                    return material;
                },
                currentMaterial: function() {
                    if (this.materials.length > 0) return this.materials[this.materials.length - 1];
                    return undefined;
                },
                _finalize: function(end) {
                    const lastMultiMaterial = this.currentMaterial();
                    if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {
                        lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
                        lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
                        lastMultiMaterial.inherited = false;
                    }
                    // Ignore objects tail materials if no face declarations followed them before a new o/g started.
                    if (end && this.materials.length > 1) {
                        for(let mi = this.materials.length - 1; mi >= 0; mi--)if (this.materials[mi].groupCount <= 0) this.materials.splice(mi, 1);
                    }
                    // Guarantee at least one empty material, this makes the creation later more straight forward.
                    if (end && this.materials.length === 0) this.materials.push({
                        name: "",
                        smooth: this.smooth
                    });
                    return lastMultiMaterial;
                }
            };
            // Inherit previous objects material.
            // Spec tells us that a declared material must be set to all objects until a new material is declared.
            // If a usemtl declaration is encountered while this new object is being parsed, it will
            // overwrite the inherited material. Exception being that there was already face declarations
            // to the inherited material, then it will be preserved for proper MultiMaterial continuation.
            if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function") {
                const declared = previousMaterial.clone(0);
                declared.inherited = true;
                this.object.materials.push(declared);
            }
            this.objects.push(this.object);
        },
        finalize: function() {
            if (this.object && typeof this.object._finalize === "function") this.object._finalize(true);
        },
        parseVertexIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseNormalIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 3) * 3;
        },
        parseUVIndex: function(value, len) {
            const index = parseInt(value, 10);
            return (index >= 0 ? index - 1 : index + len / 2) * 2;
        },
        addVertex: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addVertexPoint: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addVertexLine: function(a) {
            const src = this.vertices;
            const dst = this.object.geometry.vertices;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
        },
        addNormal: function(a, b, c) {
            const src = this.normals;
            const dst = this.object.geometry.normals;
            dst.push(src[a + 0], src[a + 1], src[a + 2]);
            dst.push(src[b + 0], src[b + 1], src[b + 2]);
            dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addFaceNormal: function(a, b, c) {
            const src = this.vertices;
            const dst = this.object.geometry.normals;
            _vA.fromArray(src, a);
            _vB.fromArray(src, b);
            _vC.fromArray(src, c);
            _cb.subVectors(_vC, _vB);
            _ab.subVectors(_vA, _vB);
            _cb.cross(_ab);
            _cb.normalize();
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
            dst.push(_cb.x, _cb.y, _cb.z);
        },
        addColor: function(a, b, c) {
            const src = this.colors;
            const dst = this.object.geometry.colors;
            if (src[a] !== undefined) dst.push(src[a + 0], src[a + 1], src[a + 2]);
            if (src[b] !== undefined) dst.push(src[b + 0], src[b + 1], src[b + 2]);
            if (src[c] !== undefined) dst.push(src[c + 0], src[c + 1], src[c + 2]);
        },
        addUV: function(a, b, c) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
            dst.push(src[b + 0], src[b + 1]);
            dst.push(src[c + 0], src[c + 1]);
        },
        addDefaultUV: function() {
            const dst = this.object.geometry.uvs;
            dst.push(0, 0);
            dst.push(0, 0);
            dst.push(0, 0);
        },
        addUVLine: function(a) {
            const src = this.uvs;
            const dst = this.object.geometry.uvs;
            dst.push(src[a + 0], src[a + 1]);
        },
        addFace: function(a, b, c, ua, ub, uc, na, nb, nc) {
            const vLen = this.vertices.length;
            let ia = this.parseVertexIndex(a, vLen);
            let ib = this.parseVertexIndex(b, vLen);
            let ic = this.parseVertexIndex(c, vLen);
            this.addVertex(ia, ib, ic);
            this.addColor(ia, ib, ic);
            // normals
            if (na !== undefined && na !== "") {
                const nLen = this.normals.length;
                ia = this.parseNormalIndex(na, nLen);
                ib = this.parseNormalIndex(nb, nLen);
                ic = this.parseNormalIndex(nc, nLen);
                this.addNormal(ia, ib, ic);
            } else this.addFaceNormal(ia, ib, ic);
            // uvs
            if (ua !== undefined && ua !== "") {
                const uvLen = this.uvs.length;
                ia = this.parseUVIndex(ua, uvLen);
                ib = this.parseUVIndex(ub, uvLen);
                ic = this.parseUVIndex(uc, uvLen);
                this.addUV(ia, ib, ic);
                this.object.geometry.hasUVIndices = true;
            } else // add placeholder values (for inconsistent face definitions)
            this.addDefaultUV();
        },
        addPointGeometry: function(vertices) {
            this.object.geometry.type = "Points";
            const vLen = this.vertices.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++){
                const index = this.parseVertexIndex(vertices[vi], vLen);
                this.addVertexPoint(index);
                this.addColor(index);
            }
        },
        addLineGeometry: function(vertices, uvs) {
            this.object.geometry.type = "Line";
            const vLen = this.vertices.length;
            const uvLen = this.uvs.length;
            for(let vi = 0, l = vertices.length; vi < l; vi++)this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
            for(let uvi = 0, l = uvs.length; uvi < l; uvi++)this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
        }
    };
    state.startObject("", false);
    return state;
}
//
class OBJLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
        this.materials = null;
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(text) {
            try {
                onLoad(scope.parse(text));
            } catch (e) {
                if (onError) onError(e);
                else console.error(e);
                scope.manager.itemError(url);
            }
        }, onProgress, onError);
    }
    setMaterials(materials) {
        this.materials = materials;
        return this;
    }
    parse(text) {
        const state = new ParserState();
        if (text.indexOf("\r\n") !== -1) // This is faster than String.split with regex that splits on both
        text = text.replace(/\r\n/g, "\n");
        if (text.indexOf("\\\n") !== -1) // join lines separated by a line continuation character (\)
        text = text.replace(/\\\n/g, "");
        const lines = text.split("\n");
        let result = [];
        for(let i = 0, l = lines.length; i < l; i++){
            const line = lines[i].trimStart();
            if (line.length === 0) continue;
            const lineFirstChar = line.charAt(0);
            // @todo invoke passed in handler if any
            if (lineFirstChar === "#") continue; // skip comments
            if (lineFirstChar === "v") {
                const data = line.split(_face_vertex_data_separator_pattern);
                switch(data[0]){
                    case "v":
                        state.vertices.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        if (data.length >= 7) {
                            _color.setRGB(parseFloat(data[4]), parseFloat(data[5]), parseFloat(data[6])).convertSRGBToLinear();
                            state.colors.push(_color.r, _color.g, _color.b);
                        } else // if no colors are defined, add placeholders so color and vertex indices match
                        state.colors.push(undefined, undefined, undefined);
                        break;
                    case "vn":
                        state.normals.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
                        break;
                    case "vt":
                        state.uvs.push(parseFloat(data[1]), parseFloat(data[2]));
                        break;
                }
            } else if (lineFirstChar === "f") {
                const lineData = line.slice(1).trim();
                const vertexData = lineData.split(_face_vertex_data_separator_pattern);
                const faceVertices = [];
                // Parse the face vertex data into an easy to work with format
                for(let j = 0, jl = vertexData.length; j < jl; j++){
                    const vertex = vertexData[j];
                    if (vertex.length > 0) {
                        const vertexParts = vertex.split("/");
                        faceVertices.push(vertexParts);
                    }
                }
                // Draw an edge between the first vertex and all subsequent vertices to form an n-gon
                const v1 = faceVertices[0];
                for(let j = 1, jl = faceVertices.length - 1; j < jl; j++){
                    const v2 = faceVertices[j];
                    const v3 = faceVertices[j + 1];
                    state.addFace(v1[0], v2[0], v3[0], v1[1], v2[1], v3[1], v1[2], v2[2], v3[2]);
                }
            } else if (lineFirstChar === "l") {
                const lineParts = line.substring(1).trim().split(" ");
                let lineVertices = [];
                const lineUVs = [];
                if (line.indexOf("/") === -1) lineVertices = lineParts;
                else for(let li = 0, llen = lineParts.length; li < llen; li++){
                    const parts = lineParts[li].split("/");
                    if (parts[0] !== "") lineVertices.push(parts[0]);
                    if (parts[1] !== "") lineUVs.push(parts[1]);
                }
                state.addLineGeometry(lineVertices, lineUVs);
            } else if (lineFirstChar === "p") {
                const lineData = line.slice(1).trim();
                const pointData = lineData.split(" ");
                state.addPointGeometry(pointData);
            } else if ((result = _object_pattern.exec(line)) !== null) {
                // o object_name
                // or
                // g group_name
                // WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
                // let name = result[ 0 ].slice( 1 ).trim();
                const name = (" " + result[0].slice(1).trim()).slice(1);
                state.startObject(name);
            } else if (_material_use_pattern.test(line)) // material
            state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
            else if (_material_library_pattern.test(line)) // mtl file
            state.materialLibraries.push(line.substring(7).trim());
            else if (_map_use_pattern.test(line)) // the line is parsed but ignored since the loader assumes textures are defined MTL files
            // (according to https://www.okino.com/conv/imp_wave.htm, 'usemap' is the old-style Wavefront texture reference method)
            console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
            else if (lineFirstChar === "s") {
                result = line.split(" ");
                // smooth shading
                // @todo Handle files that have varying smooth values for a set of faces inside one geometry,
                // but does not define a usemtl for each face set.
                // This should be detected and a dummy material created (later MultiMaterial and geometry groups).
                // This requires some care to not create extra material on each smooth value for "normal" obj files.
                // where explicit usemtl defines geometry groups.
                // Example asset: examples/models/obj/cerberus/Cerberus.obj
                /*
					 * http://paulbourke.net/dataformats/obj/
					 *
					 * From chapter "Grouping" Syntax explanation "s group_number":
					 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
					 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
					 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
					 * than 0."
					 */ if (result.length > 1) {
                    const value = result[1].trim().toLowerCase();
                    state.object.smooth = value !== "0" && value !== "off";
                } else // ZBrush can produce "s" lines #11707
                state.object.smooth = true;
                const material = state.object.currentMaterial();
                if (material) material.smooth = state.object.smooth;
            } else {
                // Handle null terminated files without exception
                if (line === "\x00") continue;
                console.warn('THREE.OBJLoader: Unexpected line: "' + line + '"');
            }
        }
        state.finalize();
        const container = new (0, _three.Group)();
        container.materialLibraries = [].concat(state.materialLibraries);
        const hasPrimitives = !(state.objects.length === 1 && state.objects[0].geometry.vertices.length === 0);
        if (hasPrimitives === true) for(let i = 0, l = state.objects.length; i < l; i++){
            const object = state.objects[i];
            const geometry = object.geometry;
            const materials = object.materials;
            const isLine = geometry.type === "Line";
            const isPoints = geometry.type === "Points";
            let hasVertexColors = false;
            // Skip o/g line declarations that did not follow with any faces
            if (geometry.vertices.length === 0) continue;
            const buffergeometry = new (0, _three.BufferGeometry)();
            buffergeometry.setAttribute("position", new (0, _three.Float32BufferAttribute)(geometry.vertices, 3));
            if (geometry.normals.length > 0) buffergeometry.setAttribute("normal", new (0, _three.Float32BufferAttribute)(geometry.normals, 3));
            if (geometry.colors.length > 0) {
                hasVertexColors = true;
                buffergeometry.setAttribute("color", new (0, _three.Float32BufferAttribute)(geometry.colors, 3));
            }
            if (geometry.hasUVIndices === true) buffergeometry.setAttribute("uv", new (0, _three.Float32BufferAttribute)(geometry.uvs, 2));
            // Create materials
            const createdMaterials = [];
            for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                const sourceMaterial = materials[mi];
                const materialHash = sourceMaterial.name + "_" + sourceMaterial.smooth + "_" + hasVertexColors;
                let material = state.materials[materialHash];
                if (this.materials !== null) {
                    material = this.materials.create(sourceMaterial.name);
                    // mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
                    if (isLine && material && !(material instanceof (0, _three.LineBasicMaterial))) {
                        const materialLine = new (0, _three.LineBasicMaterial)();
                        (0, _three.Material).prototype.copy.call(materialLine, material);
                        materialLine.color.copy(material.color);
                        material = materialLine;
                    } else if (isPoints && material && !(material instanceof (0, _three.PointsMaterial))) {
                        const materialPoints = new (0, _three.PointsMaterial)({
                            size: 10,
                            sizeAttenuation: false
                        });
                        (0, _three.Material).prototype.copy.call(materialPoints, material);
                        materialPoints.color.copy(material.color);
                        materialPoints.map = material.map;
                        material = materialPoints;
                    }
                }
                if (material === undefined) {
                    if (isLine) material = new (0, _three.LineBasicMaterial)();
                    else if (isPoints) material = new (0, _three.PointsMaterial)({
                        size: 1,
                        sizeAttenuation: false
                    });
                    else material = new (0, _three.MeshPhongMaterial)();
                    material.name = sourceMaterial.name;
                    material.flatShading = sourceMaterial.smooth ? false : true;
                    material.vertexColors = hasVertexColors;
                    state.materials[materialHash] = material;
                }
                createdMaterials.push(material);
            }
            // Create mesh
            let mesh;
            if (createdMaterials.length > 1) {
                for(let mi = 0, miLen = materials.length; mi < miLen; mi++){
                    const sourceMaterial = materials[mi];
                    buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
                }
                if (isLine) mesh = new (0, _three.LineSegments)(buffergeometry, createdMaterials);
                else if (isPoints) mesh = new (0, _three.Points)(buffergeometry, createdMaterials);
                else mesh = new (0, _three.Mesh)(buffergeometry, createdMaterials);
            } else {
                if (isLine) mesh = new (0, _three.LineSegments)(buffergeometry, createdMaterials[0]);
                else if (isPoints) mesh = new (0, _three.Points)(buffergeometry, createdMaterials[0]);
                else mesh = new (0, _three.Mesh)(buffergeometry, createdMaterials[0]);
            }
            mesh.name = object.name;
            container.add(mesh);
        }
        else // if there is only the default parser state object with no geometry data, interpret data as point cloud
        if (state.vertices.length > 0) {
            const material = new (0, _three.PointsMaterial)({
                size: 1,
                sizeAttenuation: false
            });
            const buffergeometry = new (0, _three.BufferGeometry)();
            buffergeometry.setAttribute("position", new (0, _three.Float32BufferAttribute)(state.vertices, 3));
            if (state.colors.length > 0 && state.colors[0] !== undefined) {
                buffergeometry.setAttribute("color", new (0, _three.Float32BufferAttribute)(state.colors, 3));
                material.vertexColors = true;
            }
            const points = new (0, _three.Points)(buffergeometry, material);
            container.add(points);
        }
        return container;
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6s9Yo":[function(require,module,exports) {
module.exports = require("7ec26b3720799e0f").getBundleURL("fRTfF") + "king.90e8d096.obj" + "?" + Date.now();

},{"7ec26b3720799e0f":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cybYM":[function(require,module,exports) {
module.exports = require("24fe9e5b1b46e44f").getBundleURL("fRTfF") + "table.fda9ca19.fbx" + "?" + Date.now();

},{"24fe9e5b1b46e44f":"lgJ39"}],"jTptE":[function(require,module,exports) {
module.exports = require("9009f902fc2654d8").getBundleURL("fRTfF") + "chessboard.f08f7e15.fbx" + "?" + Date.now();

},{"9009f902fc2654d8":"lgJ39"}],"cSt1Z":[function(require,module,exports) {
module.exports = require("e9f0585605b23be2").getBundleURL("fRTfF") + "full.cafdca94.fbx" + "?" + Date.now();

},{"e9f0585605b23be2":"lgJ39"}]},["7ZaY1","kIUz3"], "kIUz3", "parcelRequire94c2")

//# sourceMappingURL=index.a77b349d.js.map
