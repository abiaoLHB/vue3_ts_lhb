(()=>{var e={682:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".title {\n  background-color: orange;\n}\n",""]);const s=o},390:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".title{\r\n    color: blue;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    font-size: 20px;\r\n    background-color: rgba(18,52,86,0.47059) !important;\r\n}",""]);const s=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],l=s[u]||0,d="".concat(u," ").concat(l);s[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(t[f].references++,t[f].updater(p)):t.push({identifier:d,updater:o(p,n),references:1}),a.push(d)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var s=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=r(s[a]);t[i].references--}for(var c=n(e,o),u=0;u<s.length;u++){var l=r(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,s=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},466:e=>{e.exports={priceFormat:function(){return"99.808"}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(379),t=r.n(e),n=r(795),o=r.n(n),s=r(569),a=r.n(s),i=r(565),c=r.n(i),u=r(216),l=r.n(u),d=r(589),f=r.n(d),p=r(390),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var v=r(682),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const b=document.createElement("div");b.className="title",b.innerHTML="你好啊，哈哈",document.body.appendChild(b);const{priceFormat:g}=r(466);console.log(50),console.log(g())})()})();