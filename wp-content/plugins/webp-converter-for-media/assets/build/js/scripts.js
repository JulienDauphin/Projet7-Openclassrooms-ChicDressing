!function(){var e,t={669:function(e,t,r){e.exports=r(609)},448:function(e,t,r){"use strict";var n=r(867),s=r(26),i=r(372),o=r(327),a=r(97),u=r(109),c=r(985),l=r(61);e.exports=function(e){return new Promise((function(t,r){var f=e.data,h=e.headers,d=e.responseType;n.isFormData(f)&&delete h["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(v+":"+_)}var g=a(e.baseURL,e.url);function m(){if(p){var n="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,i={data:d&&"text"!==d&&"json"!==d?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};s(t,r,i),p=null}}if(p.open(e.method.toUpperCase(),o(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,"onloadend"in p?p.onloadend=m:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(m)},p.onabort=function(){p&&(r(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var b=(e.withCredentials||c(g))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;b&&(h[e.xsrfHeaderName]=b)}"setRequestHeader"in p&&n.forEach(h,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete h[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),d&&"json"!==d&&(p.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),f||(f=null),p.send(f)}))}},609:function(e,t,r){"use strict";var n=r(867),s=r(849),i=r(321),o=r(185);function a(e){var t=new i(e),r=s(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(r(655));u.Axios=i,u.create=function(e){return a(o(u.defaults,e))},u.Cancel=r(263),u.CancelToken=r(972),u.isCancel=r(502),u.all=function(e){return Promise.all(e)},u.spread=r(713),u.isAxiosError=r(268),e.exports=u,e.exports.default=u},263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:function(e,t,r){"use strict";var n=r(263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,r){"use strict";var n=r(867),s=r(327),i=r(782),o=r(572),a=r(185),u=r(875),c=u.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!n){var l=[o,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(i),s=Promise.resolve(e);l.length;)s=s.then(l.shift(),l.shift());return s}for(var f=e;r.length;){var h=r.shift(),d=r.shift();try{f=h(f)}catch(e){d(e);break}}try{s=o(f)}catch(e){return Promise.reject(e)}for(;i.length;)s=s.then(i.shift(),i.shift());return s},l.prototype.getUri=function(e){return e=a(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=l},782:function(e,t,r){"use strict";var n=r(867);function s(){this.handlers=[]}s.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},97:function(e,t,r){"use strict";var n=r(793),s=r(303);e.exports=function(e,t){return e&&!n(t)?s(e,t):t}},61:function(e,t,r){"use strict";var n=r(481);e.exports=function(e,t,r,s,i){var o=new Error(e);return n(o,t,r,s,i)}},572:function(e,t,r){"use strict";var n=r(867),s=r(527),i=r(502),o=r(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=s.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=s.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(a(e),t&&t.response&&(t.response.data=s.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:function(e){"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:function(e,t,r){"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},s=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function c(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=u(void 0,e[s])):r[s]=u(e[s],t[s])}n.forEach(s,(function(e){n.isUndefined(t[e])||(r[e]=u(void 0,t[e]))})),n.forEach(i,c),n.forEach(o,(function(s){n.isUndefined(t[s])?n.isUndefined(e[s])||(r[s]=u(void 0,e[s])):r[s]=u(void 0,t[s])})),n.forEach(a,(function(n){n in t?r[n]=u(e[n],t[n]):n in e&&(r[n]=u(void 0,e[n]))}));var l=s.concat(i).concat(o).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(f,c),r}},26:function(e,t,r){"use strict";var n=r(61);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:function(e,t,r){"use strict";var n=r(867),s=r(655);e.exports=function(e,t,r){var i=this||s;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},655:function(e,t,r){"use strict";var n=r(155),s=r(867),i=r(16),o=r(481),a={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(c=r(448)),c),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,r){if(s.isString(e))try{return(t||JSON.parse)(e),s.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!r&&"json"===this.responseType;if(i||n&&s.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw o(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};l.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),s.forEach(["post","put","patch"],(function(e){l.headers[e]=s.merge(a)})),e.exports=l},849:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:function(e,t,r){"use strict";var n=r(867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var o=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))})))})),i=o.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:function(e,t,r){"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,i,o){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(s)&&a.push("path="+s),n.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:function(e,t,r){"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:function(e,t,r){"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:function(e,t,r){"use strict";var n=r(867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,o={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(o[t]&&s.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o}},713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:function(e,t,r){"use strict";var n=r(593),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){s[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={},o=n.version.split(".");function a(e,t){for(var r=t?t.split("."):o,n=e.split("."),s=0;s<3;s++){if(r[s]>n[s])return!0;if(r[s]<n[s])return!1}return!1}s.transitional=function(e,t,r){var s=t&&a(t);return function(o,a,u){if(!1===e)throw new Error(function(e,t){return"[Axios v"+n.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}(a," has been removed in "+t));return s&&!i[a]&&(i[a]=!0),!e||e(o,a,u)}},e.exports={isOlderVersion:a,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),s=n.length;s-- >0;){var i=n[s],o=t[i];if(o){var a=e[i],u=void 0===a||o(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:s}},867:function(e,t,r){"use strict";var n=r(849),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===s.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:o,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,s=arguments.length;n<s;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,s){e[s]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},483:function(e,t,r){"use strict";var n=r(669),s=r.n(n);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){i(this,e),this.notice=t,this.set_vars()&&this.set_events()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){return this.settings={ajax_action:this.notice.getAttribute("data-notice-action"),ajax_url:this.notice.getAttribute("data-notice-url"),button_close_class:".notice-dismiss",button_hide_class:"[data-permanently]"},this.events={click_on_close:this.click_on_close.bind(this)},!0}},{key:"set_events",value:function(){this.notice.addEventListener("click",this.events.click_on_close)}},{key:"click_on_close",value:function(e){var t=this.settings,r=t.button_close_class,n=t.button_hide_class;this.notice.removeEventListener("click",this.events.click_on_close),e.target.matches(r)?this.hide_notice(!1):e.target.matches(n)&&this.hide_notice(!0)}},{key:"hide_notice",value:function(e){var t=this.settings.button_close_class;this.send_request(e),e&&this.notice.querySelector(t).click()}},{key:"send_request",value:function(e){var t=this.settings.ajax_url;s()({method:"POST",url:t,data:this.get_data_for_request(e)})}},{key:"get_data_for_request",value:function(e){var t=this.settings.ajax_action,r=new FormData;return r.append("action",t),r.append("is_permanently",e?1:0),r}}])&&o(t.prototype,r),n&&o(t,n),e}(),u=function e(){i(this,e);for(var t=document.querySelectorAll('.notice[data-notice="webp-converter-for-media"][data-notice-action]'),r=t.length,n=0;n<r;n++)new a(t[n])};function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=this.set_vars()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.counter_webp=document.querySelector('[data-counter="webp"]'),this.counter_avif=document.querySelector('[data-counter="avif"]'),this.counter_webp&&this.counter_avif)return this.counter_webp_percent=this.counter_webp.querySelector("[data-counter-percent]"),this.counter_webp_images=this.counter_webp.querySelector("[data-counter-left]"),this.counter_webp_loader=this.counter_webp.querySelector("[data-counter-loader]"),this.counter_avif_percent=this.counter_avif.querySelector("[data-counter-percent]"),this.counter_avif_images=this.counter_avif.querySelector("[data-counter-left]"),this.counter_avif_loader=this.counter_avif.querySelector("[data-counter-loader]"),this.data={webp_converted:0,webp_unconverted:0,webp_all:0,avif_converted:0,avif_unconverted:0,avif_all:0},this.atts={counter_percent:"data-percent"},!0}},{key:"set_files_webp",value:function(e,t){this.status&&(this.data.webp_converted+=e,this.data.webp_unconverted=t-e,this.data.webp_all=t||this.data.webp_all,this.refresh_stats())}},{key:"reset_files_webp",value:function(){this.status&&(this.data.webp_converted=0,this.data.webp_unconverted=this.data.webp_all,this.refresh_stats())}},{key:"set_files_avif",value:function(e,t){this.status&&(this.data.avif_converted+=e,this.data.avif_unconverted=t-e,this.data.avif_all=t,this.refresh_stats())}},{key:"set_error",value:function(){this.counter_webp_loader.setAttribute("hidden","hidden"),this.counter_avif_loader.setAttribute("hidden","hidden")}},{key:"reset_files_avif",value:function(){this.status&&(this.data.avif_converted=0,this.data.avif_unconverted=this.data.avif_all,this.refresh_stats())}},{key:"add_files_webp",value:function(e){this.status&&(this.data.webp_converted+=e,this.data.webp_unconverted-=e,this.refresh_stats())}},{key:"add_files_avif",value:function(e){this.status&&(this.data.avif_converted+=e,this.data.avif_unconverted-=e,this.refresh_stats())}},{key:"refresh_stats",value:function(){var e=this.data,t=e.webp_converted,r=e.webp_unconverted,n=e.webp_all,s=e.avif_converted,i=e.avif_unconverted,o=e.avif_all,a=this.atts.counter_percent,u=n>0?Math.floor(t/n*100):0,c=o>0?Math.floor(s/o*100):0;this.counter_webp.setAttribute(a,u),this.counter_webp_percent.innerText=u,this.counter_webp_images.innerText=Math.max(r,0).toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),this.counter_avif.setAttribute(a,c),this.counter_avif_percent.innerText=c,this.counter_avif_images.innerText=Math.max(i,0).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}])&&c(t.prototype,r),n&&c(t,n),e}();function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.set_vars()&&this.set_events()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){return this.triggers=document.querySelectorAll("[data-toggle-trigger]"),!!this.triggers.length&&(this.outputs=document.querySelectorAll("[data-toggle-output-values]"),!0)}},{key:"set_events",value:function(){for(var e=this.triggers.length,t=0;t<e;t++)this.triggers[t].addEventListener("change",this.toggle_output.bind(this))}},{key:"toggle_output",value:function(e){for(var t=e.currentTarget.getAttribute("name"),r="checkbox"===e.currentTarget.getAttribute("type")?this.get_checkbox_value(t):this.get_radio_value(t),n=this.outputs.length,s=0;s<n;s++)if(this.outputs[s].getAttribute("data-toggle-output")===t){var i=this.outputs[s].getAttribute("data-toggle-output-attr");this.validate_output(this.outputs[s],r)?this.outputs[s].removeAttribute(i):this.outputs[s].setAttribute(i,i)}}},{key:"get_checkbox_value",value:function(e){for(var t=[],r=this.triggers.length,n=0;n<r;n++)this.triggers[n].getAttribute("name")===e&&this.triggers[n].checked&&t.push(this.triggers[n].getAttribute("value"));return t}},{key:"get_radio_value",value:function(e){for(var t=this.triggers.length,r=0;r<t;r++)if(this.triggers[r].getAttribute("name")===e&&this.triggers[r].checked)return[this.triggers[r].getAttribute("value")];return[]}},{key:"validate_output",value:function(e,t){for(var r=e.getAttribute("data-toggle-output-values").split(";"),n=t.length,s=0;s<n;s++)if(r.indexOf(t[s])>=0)return!0;return!1}}])&&f(t.prototype,r),n&&f(t,n),e}();function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.conversion_stats_manager=t,this.set_vars()&&this.set_events()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.section=document.querySelector(".webpcLoader"),this.section)return this.wrapper_status=this.section.querySelector("[data-status]"),this.progress=this.wrapper_status.querySelector("[data-status-progress]"),this.progress_size=this.section.querySelector("[data-status-count-size]"),this.progress_success=this.section.querySelector("[data-status-count-success]"),this.progress_failed=this.section.querySelector("[data-status-count-error]"),this.wrapper_errors=this.section.querySelector("[data-errors]"),this.errors_output=this.wrapper_errors.querySelector("[data-errors-output]"),this.wrapper_success=this.section.querySelector("[data-success]"),this.option_force=this.section.querySelector('input[name="regenerate_force"]'),this.submit_button=this.section.querySelector("[data-submit]"),this.data={count:0,max:0,items:[],size:{before:0,after:0},files_counter:{all:0,converted:0},errors:0},this.settings={is_disabled:!1,ajax:{url_paths:this.section.getAttribute("data-api-paths").split("|")[0],url_paths_nonce:this.section.getAttribute("data-api-paths").split("|")[1],url_regenerate:this.section.getAttribute("data-api-regenerate").split("|")[0],url_regenerate_nonce:this.section.getAttribute("data-api-regenerate").split("|")[1],error_message:this.section.getAttribute("data-api-error-message")},units:["kB","MB","GB"],max_errors:1e3,connection_timeout:6e4},this.atts={progress:"data-percent",counter_percent:"data-percent"},this.classes={progress_error:"webpcLoader__statusProgress--error",button_disabled:"webpcLoader__button--disabled",error_message:"webpcLoader__errorsContentError"},!0}},{key:"set_events",value:function(){this.submit_button.addEventListener("click",this.init_regeneration.bind(this))}},{key:"init_regeneration",value:function(e){e.preventDefault(),this.settings.is_disabled||(this.settings.is_disabled=!0,this.submit_button.classList.add(this.classes.button_disabled),this.option_force.setAttribute("disabled","disabled"),this.wrapper_status.removeAttribute("hidden"),this.send_request_for_paths())}},{key:"send_request_for_paths",value:function(){var e=this,t=this.settings.ajax,r=t.url_paths,n=t.url_paths_nonce;s()({method:"POST",url:r,data:{regenerate_force:this.option_force.checked?1:0},headers:{"X-WP-Nonce":n}}).then((function(t){var r=e.parse_files_paths(t.data);e.data.items=r,e.data.max=r.length,e.option_force.checked&&(e.conversion_stats_manager.reset_files_webp(),e.conversion_stats_manager.reset_files_avif()),e.regenerate_next_images()})).catch((function(t){e.catch_request_error(t,!0)}))}},{key:"parse_files_paths",value:function(e){var t=[];for(var r in e)for(var n=e[r].files.length,s=0;s<n;s++){for(var i=[],o=0;o<e[r].files[s].length;o++)i.push(e[r].path+"/"+e[r].files[s][o]);t.push(i)}return t}},{key:"regenerate_next_images",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===this.data.max&&this.update_progress(),!(this.data.count>=this.data.max)){e>=3?e=0:e>0&&this.data.count--;var t=this.data.items[this.data.count];this.data.count++,this.send_request_for_regeneration(t,e)}}},{key:"send_request_for_regeneration",value:function(e,t){var r=this,n=this.settings.ajax,i=n.url_regenerate,o=n.url_regenerate_nonce;s()({method:"POST",url:i,data:{regenerate_force:this.option_force.checked?1:0,paths:e},headers:{"X-WP-Nonce":o},timeout:this.settings.connection_timeout}).then((function(e){var t=e.data.is_fatal_error;r.update_errors(e.data.errors,t),t||(r.update_size(e.data),r.update_files_count(e.data),r.update_progress(),r.regenerate_next_images())})).catch((function(n){n.response?(r.catch_request_error(n,!1,e),setTimeout(r.regenerate_next_images.bind(r),1e3)):setTimeout(r.regenerate_next_images.bind(r,t+1),1e3)}))}},{key:"update_errors",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.data.errors>this.settings.max_errors&&(this.data.errors=0,this.errors_output.innerHTML="");for(var r=this.get_date(),n=0;n<e.length;n++)this.print_error_message(e[n],t,!1,r),this.data.errors++;t&&this.set_fatal_error()}},{key:"get_date",value:function(){var e=new Date,t=("0"+e.getHours()).substr(-2),r=("0"+e.getMinutes()).substr(-2),n=("0"+e.getSeconds()).substr(-2);return"".concat(t,":").concat(r,":").concat(n)}},{key:"set_fatal_error",value:function(){this.progress.classList.add(this.classes.progress_error)}},{key:"catch_request_error",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t&&(this.print_error_message([this.settings.ajax.error_message],!0,!1),this.set_fatal_error());var n=null!==r?'["'.concat(r.join('", "'),'"]'):"";this.print_error_message("".concat(e.response.status," - ").concat(e.response.statusText," (").concat(e.response.config.url,") ").concat(n),!0,!0)}},{key:"print_error_message",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=document.createElement("p"),i=n||this.get_date();if(r){var o=document.createElement("pre");o.innerText=e,s.appendChild(o)}else s.innerHTML="<strong>".concat(i,"</strong> - ").concat(e);t&&s.classList.add(this.classes.error_message),this.wrapper_errors.removeAttribute("hidden"),this.errors_output.appendChild(s)}},{key:"update_size",value:function(e){var t=this.data.size;t.before+=e.size.before,t.after+=e.size.after;var r=t.before-t.after;if(r<0&&(r=0),0!==r){var n=Math.round(100*(1-t.after/t.before));n<0&&(n=0);var s=-1;do{s++,r/=1024}while(r>1024);var i=r.toFixed(2),o=this.settings.units[s];this.progress_size.innerHTML="".concat(i," ").concat(o," (").concat(n,"%)")}}},{key:"update_files_count",value:function(e){var t=this.data.files_counter,r=e.files;this.conversion_stats_manager.add_files_webp(r.webp_available),this.conversion_stats_manager.add_files_avif(r.avif_available),t.converted+=r.webp_converted+r.avif_converted,t.all+=r.webp_available+r.avif_available,this.progress_success.innerText=t.converted.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),this.progress_failed.innerText=(t.all-t.converted).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},{key:"update_progress",value:function(){var e=this.data.max>0?Math.floor(this.data.count/this.data.max*100):100;e>100&&(e=100),100===e&&this.wrapper_success.removeAttribute("hidden"),this.progress.setAttribute(this.atts.progress,e.toString())}}])&&d(t.prototype,r),n&&d(t,n),e}();function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.conversion_stats_manager=t,this.images_tree_generator=r,this.plans_button_generator=n,this.set_vars()&&this.send_request()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.section=document.querySelector("[data-api-stats]"),this.section)return this.error_output=this.section.querySelector("[data-api-stats-error]"),this.settings={ajax_url:this.section.getAttribute("data-api-stats").split("|")[0],ajax_nonce:this.section.getAttribute("data-api-stats").split("|")[1]},!0}},{key:"send_request",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t>=3)return this.conversion_stats_manager.set_error(),this.images_tree_generator.set_error(),void this.plans_button_generator.set_error();var r=new Date;s()({method:"GET",url:this.settings.ajax_url,headers:{"X-WP-Nonce":this.settings.ajax_nonce}}).then((function(n){if(n.data){var s=n.data.value_webp_all||0,i=n.data.value_webp_converted||0,o=n.data.value_avif_all||0,a=n.data.value_avif_converted||0;e.conversion_stats_manager.set_files_webp(i,s),e.conversion_stats_manager.set_files_avif(a,o),e.images_tree_generator.generate_tree(n.data.tree),e.plans_button_generator.show_button(s-i,o-a)}else e.send_request(t+1),e.show_request_error(r,n)})).catch((function(n){e.send_request(t+1),n.response&&e.show_request_error(r,n.response)}))}},{key:"show_request_error",value:function(e,t){var r=(new Date-e)/1e3,n=t.status,s=JSON.stringify(t.data);this.error_output.innerText="HTTP Error ".concat(n," (").concat(r,"s): ").concat(s),this.error_output.removeAttribute("hidden")}}])&&v(t.prototype,r),n&&v(t,n),e}();function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=this.set_vars()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.section=document.querySelector("[data-tree]"),this.section)return this.loader=this.section.querySelector("[data-tree-loader]"),!0}},{key:"generate_tree",value:function(e){if(this.status){this.loader=null,this.section.innerHTML=this.draw_tree(e);for(var t=this.section.querySelectorAll(".webpcTree__itemCheckbox"),r=0;r<t.length;r++)t[r].addEventListener("change",(function(e){if(!e.currentTarget.checked)for(var t=e.currentTarget.parentNode.querySelectorAll(".webpcTree__itemCheckbox"),r=0;r<t.length;r++)t[r].checked=!1}))}}},{key:"set_error",value:function(){this.loader&&this.loader.setAttribute("hidden","hidden")}},{key:"draw_tree",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"tree",n="",s=e.length;if(!s)return n;0===t&&(n+='<ul class="webpcTree__items">');for(var i=0;i<s;i++){var o="".concat(r,"-").concat(e[i].name).replace(/\s/g,"");n+='<li class="webpcTree__item">',n+='<input type="checkbox" id="'.concat(o,'" class="webpcTree__itemCheckbox">'),n+='<label for="'.concat(o,'" class="webpcTree__itemLabel">'),n+="".concat(e[i].name," <strong>(").concat(e[i].count.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),")</strong>"),n+="</label>",n+='<ul class="webpcTree__items">',e[i].items&&(n+=this.draw_tree(e[i].items,t+1,o));for(var a=0;a<e[i].files.length;a++)n+='<li class="webpcTree__item">',n+='<span class="webpcTree__itemName">'.concat(e[i].files[a],"</span>"),n+="</li>";n+="</ul>",n+="</li>"}return 0===t&&(n+="</ul>"),n}}])&&g(t.prototype,r),n&&g(t,n),e}();function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=this.set_vars()}var t,r,n;return t=e,(r=[{key:"set_vars",value:function(){if(this.section=document.querySelector("[data-plans]"),this.section)return this.button=this.section.querySelector("[data-plans-button]"),this.loader=this.section.querySelector("[data-plans-loader]"),this.settings={button_url:this.button.getAttribute("href")},!0}},{key:"show_button",value:function(e,t){if(this.status){var r=this.settings.button_url.replace("webp=0","webp=".concat(e)).replace("avif=0","avif=".concat(t));this.button.setAttribute("href",r),this.button.removeAttribute("hidden"),this.loader.setAttribute("hidden","hidden")}}},{key:"set_error",value:function(){this.button.removeAttribute("hidden"),this.loader.setAttribute("hidden","hidden")}}])&&b(t.prototype,r),n&&b(t,n),e}();new function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=new l,r=new m,n=new y;new u,new p(t),new _(t,r,n),new h}},694:function(){},155:function(e){var t,r,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,u=[],c=!1,l=-1;function f(){c&&a&&(c=!1,a.length?u=a.concat(u):l=-1,u.length&&h())}function h(){if(!c){var e=o(f);c=!0;for(var t=u.length;t;){for(a=u,u=[];++l<t;)a&&a[l].run();l=-1,t=u.length}a=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||c||o(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},593:function(e){"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,s,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],i=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,s,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={794:0,505:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,o=r[0],a=r[1],u=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(u)var l=u(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[o[c]]=0;return n.O(l)},r=self.webpackChunkwebp_converter_for_media=self.webpackChunkwebp_converter_for_media||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.O(void 0,[505],(function(){return n(483)}));var s=n.O(void 0,[505],(function(){return n(694)}));s=n.O(s)}();