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
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
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
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _stepOneViewJs = require("./views/stepOneView.js");
var _stepOneViewJsDefault = parcelHelpers.interopDefault(_stepOneViewJs);
var _stepTwoViewJs = require("./views/stepTwoView.js");
var _stepTwoViewJsDefault = parcelHelpers.interopDefault(_stepTwoViewJs);
var _sessionViewJs = require("./views/sessionView.js");
var _sessionViewJsDefault = parcelHelpers.interopDefault(_sessionViewJs);
var _outputViewJs = require("./views/outputView.js");
var _outputViewJsDefault = parcelHelpers.interopDefault(_outputViewJs);
function controlSessionWatch() {
    if (!sessionStorage.getItem(`CheckingFor`)) (0, _stepOneViewJsDefault.default).stepScreenInit();
    else {
        (0, _stepTwoViewJsDefault.default).stepScreenInit();
        (0, _stepTwoViewJsDefault.default).setCheckingForBlogname(_modelJs.sessionData.getBlogname());
    }
}
function controlStepWatch(mutationList) {
    (0, _sessionViewJsDefault.default).stepWatch(mutationList);
}
function controlStoreScroll() {
    (0, _sessionViewJsDefault.default).debounce((0, _sessionViewJsDefault.default).storeScroll);
    (0, _sessionViewJsDefault.default).storeScroll();
}
async function controlBlognameForm(blognameInput) {
    try {
        (0, _sessionViewJsDefault.default).renderSpinner();
        const blogBasics = await _modelJs.retrieveBlogBasics(blognameInput);
        (0, _stepOneViewJsDefault.default).inputValidation(true);
        await _modelJs.retrieveBlogPosts(blogBasics);
        (0, _sessionViewJsDefault.default).loadStopAnimation().then(()=>{
            (0, _stepOneViewJsDefault.default).resetScreen(false);
            (0, _stepTwoViewJsDefault.default).stepScreenInit();
            (0, _stepTwoViewJsDefault.default).setCheckingForBlogname(_modelJs.sessionData.getBlogname());
        });
    } catch (error) {
        console.error(error);
        (0, _stepOneViewJsDefault.default).errorManager(error);
    }
}
async function controlPostForm(postInput) {
    try {
        (0, _sessionViewJsDefault.default).renderSpinner();
        const postCredentials = await _modelJs.extractPostCredentials(postInput);
        const postRootID = await _modelJs.retrievePostRootID(postCredentials);
        (0, _stepTwoViewJsDefault.default).inputValidation(true);
        _modelJs.sessionData.postRootID = postRootID;
        (0, _sessionViewJsDefault.default).loadStopAnimation().then(()=>{
            (0, _stepTwoViewJsDefault.default).resetScreen(false);
            (0, _stepTwoViewJsDefault.default).stepScreenInit();
            controlCheckResult();
        });
    } catch (error) {
        console.error(error);
        (0, _stepTwoViewJsDefault.default).errorManager(error);
    }
}
function controlCheckResult() {
    const reblogCheckData = _modelJs.reblogCheck(_modelJs.sessionData.getBlogname(), _modelJs.sessionData.postRootID);
    if (!reblogCheckData) {
        (0, _outputViewJsDefault.default).showResult("negative");
        return;
    }
    const [numberOfInstances, instancesURLs] = reblogCheckData;
    (0, _outputViewJsDefault.default).setReblogInstances(numberOfInstances);
    (0, _outputViewJsDefault.default).setReblogURLs(instancesURLs);
    (0, _outputViewJsDefault.default).showResult("positive");
}
function controlStepBackward() {
    if (window.confirm(`Done checking for ${_modelJs.sessionData.getBlogname()}? This will take you back to the previous step.`)) {
        sessionStorage.clear();
        (0, _sessionViewJsDefault.default).resetForm();
        (0, _sessionViewJsDefault.default).resetScreen();
        (0, _stepOneViewJsDefault.default).stepScreenInit();
    }
}
function init() {
    (0, _sessionViewJsDefault.default).addHandlerSessionWatch(controlSessionWatch);
    (0, _sessionViewJsDefault.default).addHandlerAttributeWatch(controlStepWatch);
    (0, _sessionViewJsDefault.default).addHandlerStoreScroll(controlStoreScroll);
    (0, _stepOneViewJsDefault.default).addHandlerBlognameForm(controlBlognameForm);
    (0, _stepTwoViewJsDefault.default).addHandlerPostForm(controlPostForm);
    (0, _stepTwoViewJsDefault.default).addHandlerStepBackward(controlStepBackward);
}
init();

},{"./model.js":"Y4A21","./views/stepOneView.js":"eU6El","./views/stepTwoView.js":"dWhOp","./views/sessionView.js":"01INf","./views/outputView.js":"aYsGc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sessionData", ()=>sessionData);
/* STEP 0.5: RETRIEVE BASIC BLOG INFORMATION */ parcelHelpers.export(exports, "retrieveBlogBasics", ()=>retrieveBlogBasics);
/* STEP 1: RETRIEVE AND STORE ALL POSTS'S ROOT IDS FROM PROVIDED BLOGNAME */ parcelHelpers.export(exports, "retrieveBlogPosts", ()=>retrieveBlogPosts);
/* STEP 2: EXTRACT CREDENTIALS (BLOGNAME, USER UUID, POST ID) FROM PROVIDED POST URL */ parcelHelpers.export(exports, "extractPostCredentials", ()=>extractPostCredentials);
/* STEP 3: LOOK INTO PROVIDED POST'S INFORMATION FOR POST ROOT ID */ parcelHelpers.export(exports, "retrievePostRootID", ()=>retrievePostRootID);
/* STEP 4: PERFORM REBLOG CHECK BY COMPARING RETRIEVED POST'S ROOT ID WITH USER'S STORED ROOT IDS */ parcelHelpers.export(exports, "reblogCheck", ()=>reblogCheck);
var _configJs = require("./config.js");
var _helpersJs = require("./helpers.js");
const sessionData = {
    getBlogname () {
        return JSON.parse(sessionStorage.getItem(`CheckingFor`));
    },
    postRootID: ""
};
async function retrieveBlogBasics(blognameInput) {
    try {
        const blogname = (0, _helpersJs.blognameValidation)(blognameInput);
        const response = await fetch(`${(0, _configJs.API_URL)}${blogname}.tumblr.com/info?api_key=${(0, _configJs.API_KEY)}`);
        if (response.status === 404) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrieveBlogBasics} ${(0, _helpersJs.errorMessage).error.notFound.blogname}`);
        if (response.status === 429) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrieveBlogBasics} ${(0, _helpersJs.errorMessage).error.limitExceeded} ${(0, _helpersJs.errorMessage).ending.generic}`);
        if (!response.ok) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrieveBlogBasics} ${(0, _helpersJs.errorMessage).error.notOK} ${(0, _helpersJs.errorMessage).ending.generic}`);
        const infoBasics = await response.json();
        const blogUUID = infoBasics.response.blog.uuid;
        const totalPosts = infoBasics.response.blog.total_posts;
        return [
            blogname,
            blogUUID,
            totalPosts
        ];
    } catch (error) {
        throw error;
    }
}
async function retrieveBlogPosts([blogname, blogUUID, totalPosts]) {
    try {
        const requestPromises = [];
        for(let offset = 0; offset <= totalPosts; offset += (0, _configJs.POSTS_PER_PAGE))requestPromises.push(await fetch(`${(0, _configJs.API_URL)}${blogUUID}/posts?api_key=${(0, _configJs.API_KEY)}&limit=${(0, _configJs.POSTS_PER_PAGE)}&offset=${offset}&reblog_info=true`));
        const requestStatus = requestPromises.map((request)=>request.status);
        if (requestStatus.includes(404)) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrieveBlogPosts} ${(0, _helpersJs.errorMessage).error.notFound.blogname} ${(0, _helpersJs.errorMessage).ending.specific}`);
        if (requestStatus.includes(429)) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrieveBlogPosts} ${(0, _helpersJs.errorMessage).error.limitExceeded} ${(0, _helpersJs.errorMessage).ending.specific}`);
        if (!requestStatus.every((status)=>status === 200)) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrieveBlogPosts} ${(0, _helpersJs.errorMessage).error.notOK} ${(0, _helpersJs.errorMessage).ending.specific}`);
        const response = await Promise.all(requestPromises.map(async (response)=>await response.json()));
        const postsInfo = response.flatMap((request)=>{
            return request.response.posts.map((post)=>{
                return {
                    rootID: post.reblogged_root_id ?? post.id_string,
                    postURL: post.post_url
                };
            });
        });
        if (!(0, _helpersJs.storageAvailable)("sessionStorage")) throw new Error(`Sorry! Seems like you don't have enough space in your session storage or it isn't altogether available in the browser you're using. Reblog Checker needs access to it in order to work.`);
        sessionStorage.setItem(`CheckingFor`, JSON.stringify(`${blogname}`));
        sessionStorage.setItem(`${blogname}PostsInfo`, JSON.stringify(postsInfo));
        console.log(`${blogname}'s posts root IDs and reblogs URLs retrieved and stored in ${blogname}PostsInfo!`);
    } catch (error) {
        throw error;
    }
}
async function extractPostCredentials(URL) {
    try {
        /* NEW URL FORMAT */ if ((0, _helpersJs.isNewFormat)(URL)) {
            const URLToTreat = (0, _helpersJs.URLTrimmer)(URL).replace("/", " ").split(" ");
            const [blogname, postID] = URLToTreat;
            /* INVALID POST URL ERROR TAKES PRECEDENCE OVER BLOG UUID NOT FOUND */ if (!postID) throw new Error(`${(0, _helpersJs.errorMessage).origin.extractPostCredentials} ${(0, _helpersJs.errorMessage).error.notFound.postURL} ${(0, _helpersJs.errorMessage).error.noPostId}`);
            const [, blogUUID] = await retrieveBlogBasics(blogname);
            if (!blogUUID) return;
            if (postID.includes("/")) {
                const postIDClean = (0, _helpersJs.postURLTrimmer)(postID, "/");
                return [
                    blogname,
                    blogUUID,
                    postIDClean
                ];
            }
            if (postID.includes("?")) {
                const postIDClean = (0, _helpersJs.postURLTrimmer)(postID, "?");
                return [
                    blogname,
                    blogUUID,
                    postIDClean
                ];
            }
            return [
                blogname,
                blogUUID,
                postID
            ];
        }
        /* OLD URL FORMAT */ if (!(0, _helpersJs.isNewFormat)(URL)) {
            const URLToTreat = (0, _helpersJs.URLTrimmer)(URL).replace("post/", "").split(" ");
            const [blogname, postID] = URLToTreat;
            /* INVALID POST URL ERROR TAKES PRECEDENCE OVER BLOG UUID NOT FOUND */ if (!postID) throw new Error(`${(0, _helpersJs.errorMessage).origin.extractPostCredentials} ${(0, _helpersJs.errorMessage).error.notFound.postURL} ${(0, _helpersJs.errorMessage).error.noPostId}`);
            const [, blogUUID] = await retrieveBlogBasics(blogname);
            if (!blogUUID) return;
            if (postID.includes("/")) {
                const postIDClean = (0, _helpersJs.postURLTrimmer)(postID, "/");
                return [
                    blogname,
                    blogUUID,
                    postIDClean
                ];
            }
            if (postID.includes("?")) {
                const postIDClean = (0, _helpersJs.postURLTrimmer)(postID, "?");
                return [
                    blogname,
                    blogUUID,
                    postIDClean
                ];
            }
            return [
                blogname,
                blogUUID,
                postID
            ];
        }
        return;
    } catch (error) {
        throw error;
    }
}
async function retrievePostRootID([, blogUUID, postID]) {
    try {
        const response = await fetch(`${(0, _configJs.API_URL)}${blogUUID}/posts?api_key=${(0, _configJs.API_KEY)}&id=${postID}&reblog_info=true`);
        if (response.status === 404) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrievePostRootID} ${(0, _helpersJs.errorMessage).error.notFound.postURL} ${(0, _helpersJs.errorMessage).error.noRootId}`);
        if (response.status === 429) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrievePostRootID} ${(0, _helpersJs.errorMessage).error.limitExceeded} ${(0, _helpersJs.errorMessage).ending.generic}`);
        if (!response.ok) throw new Error(`${(0, _helpersJs.errorMessage).origin.retrievePostRootID} ${(0, _helpersJs.errorMessage).error.notOK} ${(0, _helpersJs.errorMessage).ending.generic}`);
        const postInfo = await response.json();
        const rootID = postInfo.response.posts.at(0).reblogged_root_id ?? postInfo.response.posts.at(0).id_string;
        return rootID;
    } catch (error) {
        throw error;
    }
}
function reblogCheck(blogname, postRootID) {
    const postsInfo = JSON.parse(sessionStorage.getItem(`${blogname}PostsInfo`));
    if (!postsInfo) return;
    const targetedPosts = postsInfo.filter((post)=>post.rootID === postRootID);
    const numberOfInstances = targetedPosts.length;
    if (numberOfInstances) {
        const instancesURLs = targetedPosts.map((instance)=>instance.postURL);
        return [
            numberOfInstances,
            instancesURLs
        ];
    } else return;
}

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "POSTS_PER_PAGE", ()=>POSTS_PER_PAGE);
const API_KEY = "nhEAeubCSI57GS2pbE5CzllVrXQ9IRzKwU4wDn2EkWZFqnsk1T";
const API_URL = "https://api.tumblr.com/v2/blog/";
const POSTS_PER_PAGE = 50;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
/* ERROR MESSAGES GENERATOR */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorMessage", ()=>errorMessage);
parcelHelpers.export(exports, "isNewFormat", ()=>isNewFormat);
parcelHelpers.export(exports, "URLTrimmer", ()=>URLTrimmer);
parcelHelpers.export(exports, "blognameTrimmer", ()=>blognameTrimmer);
parcelHelpers.export(exports, "blognameValidation", ()=>blognameValidation);
parcelHelpers.export(exports, "postURLTrimmer", ()=>postURLTrimmer);
/* CHECKING SESSION STORAGE AVAILABILITY */ parcelHelpers.export(exports, "storageAvailable", ()=>storageAvailable);
const errorMessage = {
    origin: {
        retrieveBlogBasics: "Sorry, I was unable to get any blog credentials:",
        retrieveBlogPosts: "Sorry, I was unable to get your blog posts:",
        extractPostCredentials: `Sorry, I was unable to find this post's ID:`,
        retrievePostRootID: `Sorry, I was unable to find this post's original ID:`,
        blognameValidation: "Whoops! Unexpected format or spelling:"
    },
    error: {
        notFound: {
            blogname: `I couldn't get any information from the blogname you provided. If you're pretty sure it's spelled correctly, then make sure it's not hidden from people without an account too.`,
            postURL: `I couldn't get any information from the URL you provided.`
        },
        limitExceeded: `Looks like we made too many requests to Tumblr in a short span of time.`,
        notOK: `Something weird happened, either on our own end or yours.`,
        noPostId: `Make sure you entered a valid post URL (E.g.: https://www.tumblr.com/blogname/123456789101112 or https://blogname.tumblr.com/post/123456789101112).`,
        noRootId: `Is the original poster's blog not hidden from people without an account and the post ID correct?`,
        unexpectedError: `Please check if you entered a valid blogname/URL in the appropriate field.`
    },
    ending: {
        generic: `Try again a little later!`,
        specific: `Please either choose another blog to search or try again a little later.`
    }
};
/* ACCOUNTING FOR AS MANY USER INPUT VARIATIONS AND ERRORS AS POSSIBLE */ const newFormatStandard = "https://www.tumblr.com/";
const newFormatIncomplete = "www.tumblr.com/";
const newFormatInformal = "tumblr.com/";
const oldFormatStandard = ".tumblr.com/";
const oldFormatIncomplete = ".tumblr.com";
function isNewFormat(input) {
    if (input.startsWith(newFormatStandard) || input.startsWith(newFormatIncomplete) || input.startsWith(newFormatInformal)) return true;
    if (input.endsWith(oldFormatStandard) || input.endsWith(oldFormatIncomplete) || input.includes("/post/")) return false;
}
function URLTrimmer(input) {
    if (isNewFormat(input)) return input.trim().replace(newFormatStandard, "").replace(newFormatIncomplete, "").replace(newFormatInformal, "");
    if (!isNewFormat(input)) return input.trim().replace("https://", "").replace(oldFormatStandard, " ").replace(oldFormatIncomplete, " ");
}
function blognameTrimmer(input) {
    function typoCheck(input) {
        const URLSignifiers = /[.\/:]/g;
        return URLSignifiers.test(input) ? undefined : input;
    }
    if (isNewFormat(input)) {
        const trimmedInput = URLTrimmer(input);
        return typoCheck(trimmedInput);
    }
    if (!isNewFormat(input)) {
        const trimmedInput = URLTrimmer(input).trim();
        return typoCheck(trimmedInput);
    }
    return typoCheck(input);
}
function blognameValidation(input) {
    if (!blognameTrimmer(input)) throw new Error(`${errorMessage.origin.blognameValidation} ${errorMessage.error.unexpectedError}`);
    else return blognameTrimmer(input);
}
function postURLTrimmer(postID, symbol) {
    return postID.slice(-postID.length, postID.indexOf(symbol));
}
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (error) {
        return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && storage && storage.length !== 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eU6El":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class StepOneView extends (0, _viewDefault.default) {
    activeStep = "step-one";
    activeScreen = document.querySelector("#step-one");
    stepForm = document.querySelector(".blogname-form");
    constructor(){
        super();
        this.addHandlerScreenReset();
    }
    addHandlerBlognameForm(handler) {
        this.stepForm.addEventListener("submit", (event)=>{
            event.preventDefault();
            const formData = new FormData(event.target);
            const blognameInput = Object.fromEntries(formData).blognameForm;
            handler(blognameInput);
        });
    }
}
exports.default = new StepOneView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    inputSet = [
        ".input",
        "input"
    ];
    errorMessage = '.message[data-type="error"]';
    mainScreen = document.querySelector("main");
    stepHeading = document.querySelector(".step-heading");
    iconHeading = document.querySelector(".icon-heading");
    checkingForWindow = document.querySelector(".checking-for");
    addHandlerScreenReset(activeScreen = this.activeScreen) {
        activeScreen.querySelectorAll("input").forEach(()=>addEventListener("input", this.resetScreen.bind(this)));
    }
    stepScreenInit(activeStep = this.activeStep) {
        [
            this.mainScreen,
            this.stepHeading,
            this.checkingForWindow
        ].forEach((element)=>element.setAttribute("data-state", activeStep));
    }
    loadStopAnimation() {
        const loadingSpinnerAnimation = this.stepHeading.getAnimations({
            subtree: true
        }).find((animation)=>animation.animationName === "loadingSpinner");
        loadingSpinnerAnimation.pause();
        const currentFrame = getComputedStyle(this.stepHeading).transform;
        const loadingStopAnimation = this.stepHeading.animate([
            {
                transform: currentFrame
            },
            {
                transform: "matrix(1, 0, 0, 1, 0, 0)"
            }
        ], {
            duration: 300,
            fill: "forwards"
        });
        return loadingStopAnimation.finished;
    }
    renderSpinner() {
        this.stepHeading.setAttribute("data-state", "loading-spinner");
    }
    inputValidation(entryValidity, activeScreen = this.activeScreen) {
        this.inputSet.forEach((element)=>activeScreen.querySelector(element).setAttribute("data-valid", entryValidity));
        if (!entryValidity) activeScreen.querySelector("button").setAttribute("disabled", true);
    }
    renderError(activeScreen, error) {
        const activeErrorMessage = activeScreen.querySelector(this.errorMessage);
        activeErrorMessage.setAttribute("data-active", true);
        activeErrorMessage.querySelector("p").innerText = `${error.message}`;
    }
    errorManager(error, activeScreen = this.activeScreen) {
        this.loadStopAnimation().then(()=>{
            this.renderError(activeScreen, error);
            this.stepScreenInit();
            this.inputValidation(false);
        });
    }
    resetForm() {
        this.stepForm[1].localName !== "button" ? this.stepForm.forEach((form)=>form.reset()) : this.stepForm.reset();
    }
    resetScreen(resetEverything = true) {
        const resettableAttributes = [
            "data-active",
            "data-valid",
            "disabled"
        ];
        if (!resetEverything) resettableAttributes.shift();
        resettableAttributes.forEach((attribute)=>this.mainScreen.querySelectorAll(`[${attribute}]`).forEach((activeElement)=>activeElement.removeAttribute(attribute)));
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWhOp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class StepTwoView extends (0, _viewDefault.default) {
    activeStep = "step-two";
    activeScreen = document.querySelector("#step-two");
    stepForm = document.querySelector(".post-form");
    buttonTag = document.querySelector(".button-tag");
    constructor(){
        super();
        this.addHandlerScreenReset();
    }
    addHandlerPostForm(handler) {
        this.stepForm.addEventListener("submit", (event)=>{
            event.preventDefault();
            const formData = new FormData(event.target);
            const postInput = Object.fromEntries(formData).postForm;
            handler(postInput);
        });
    }
    addHandlerStepBackward(handler) {
        this.buttonTag.addEventListener("click", handler);
    }
    setCheckingForBlogname(blogname) {
        this.buttonTag.innerText = blogname;
    }
}
exports.default = new StepTwoView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01INf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SessionView extends (0, _viewDefault.default) {
    stepForm = document.querySelectorAll("form");
    scrollIntoView = document.querySelector("header button");
    constructor(){
        super();
        this.addHandlerScrollIntoView();
    }
    addHandlerScrollIntoView() {
        this.scrollIntoView.addEventListener("click", ()=>this.mainScreen.scrollIntoView({
                behavior: "smooth"
            }));
    }
    addHandlerSessionWatch(handler) {
        window.addEventListener("load", handler);
    }
    addHandlerAttributeWatch(handler) {
        const observer = new MutationObserver(handler);
        observer.observe(this.mainScreen, {
            attributeFilter: [
                "data-state"
            ],
            attributeOldValue: true
        });
    }
    addHandlerStoreScroll(handler) {
        document.addEventListener("scroll", handler, {
            passive: true
        });
    }
    stepWatch(mutationList) {
        const stepIcons = [
            "bi-1-circle",
            "bi-2-circle"
        ];
        mutationList.forEach((mutation)=>{
            if (mutation.target.dataset.state !== mutation.oldValue) stepIcons.forEach((stepIcon)=>this.iconHeading.classList.toggle(stepIcon));
        });
    }
    debounce(someFunction) {
        let frame;
        return (...parameters)=>{
            if (frame) cancelAnimationFrame(frame);
            frame = requestAnimationFrame(()=>{
                someFunction(...parameters);
            });
        };
    }
    storeScroll() {
        const elements = [
            this.stepHeading,
            this.checkingForWindow
        ];
        document.documentElement.dataset.scroll = window.scrollY;
        if (window.scrollY >= window.innerHeight - window.innerHeight / 3) elements.forEach((element)=>element.setAttribute("data-visible", true));
        else elements.forEach((element)=>element.setAttribute("data-visible", false));
    }
}
exports.default = new SessionView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYsGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class OutputView extends (0, _viewDefault.default) {
    outputWindow = document.querySelectorAll(".output");
    numberOfInstances = document.querySelector(".instances");
    postURLs = document.querySelector(".post-urls");
    setReblogInstances(numberOfInstances) {
        this.numberOfInstances.innerText = numberOfInstances > 1 ? `${numberOfInstances} times` : `${numberOfInstances} time`;
    }
    setURLAttributes(element, attributes) {
        Object.keys(attributes).forEach((attribute)=>{
            element.setAttribute(attribute, attributes[attribute]);
        });
    }
    setReblogURLs(instancesURLs) {
        instancesURLs.forEach((URL)=>{
            const hrefAttributes = {
                href: URL,
                target: "_blank",
                rel: "noopener noreferrer"
            };
            const aHref = document.createElement("a");
            aHref.innerText = URL;
            this.setURLAttributes(aHref, hrefAttributes);
            this.postURLs.appendChild(aHref);
        });
    }
    showResult(outcome) {
        this.outputWindow.forEach((output)=>output.dataset.result === outcome && output.setAttribute("data-active", true));
    }
}
exports.default = new OutputView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aD7Zm","aenu9"], "aenu9", "parcelRequire47a9")

//# sourceMappingURL=index.e37f48ea.js.map
