!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelectorAll(".project");t.forEach((function(e,n,o){const r=t[n];r.querySelector(".project-expand").addEventListener("click",()=>{r.querySelector(".project-info").classList.toggle("show")})}));const e=document.querySelector("#larosa");e.addEventListener("mouseover",()=>{document.body.classList.add("bg-larosa")}),e.addEventListener("mouseleave",()=>{document.body.classList.remove("bg-larosa")});const n=document.querySelector("#titanCBD");n.addEventListener("mouseover",()=>{document.body.classList.add("bg-titanCBD")}),n.addEventListener("mouseleave",()=>{document.body.classList.remove("bg-titanCBD")});const o=document.querySelector("#becky-stylist");o.addEventListener("mouseover",()=>{document.body.classList.add("bg-becky-stylist")}),o.addEventListener("mouseleave",()=>{document.body.classList.remove("bg-becky-stylist")});const r=document.querySelector("#mt-blog");r.addEventListener("mouseover",()=>{document.body.classList.add("bg-mt-blog")}),r.addEventListener("mouseleave",()=>{document.body.classList.remove("bg-mt-blog")});const a=document.querySelector("#sortagram");a.addEventListener("mouseover",()=>{document.body.classList.add("bg-sortagram")}),a.addEventListener("mouseleave",()=>{document.body.classList.remove("bg-sortagram")})}))},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(10)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(3)(!1);var o=n(4),r=o(n(5)),a=o(n(6)),i=o(n(7)),c=o(n(8)),s=o(n(9));e.push([t.i,'h1{font-size:4rem;font-family:"Acme",sans-serif}h2{font-size:3rem;font-family:"Acme",sans-serif}h3{font-size:1.6rem;font-family:"Acme",sans-serif}a,p{font-size:1.6em;font-family:"Lato",sans-serif;text-decoration:none;color:#fff}section{width:90%;min-height:100vh;margin:0 auto}.btn{color:#fff;background:#1a3759;font-size:1.4rem;padding:0.5em;border:3px solid #fff;border-radius:20rem}*{margin:0;padding:0;box-sizing:border-box}.bg-larosa{background:#c59d5f}.bg-titanCBD{background:#00aeff}.bg-becky-stylist{background:#eb0eb4}.bg-mt-blog{background:#00637c}.bg-cocina-ama{background:#eb3007}.bg-sortagram{background:#333}html{font-size:10px;line-height:1.5rem}body{background:black;transition:all .5s ease-in}header{padding:1rem;height:50vh;position:fixed;z-index:2;width:100%;background:#000;background:linear-gradient(163deg, rgba(0,0,0,0.860973) 20%, #111050 40%, #d76108 80%);color:#fff}header #header-logo{width:25em}header #header-text-box{position:absolute;height:50vh;width:50%;right:0;top:0;display:flex;flex-direction:column;justify-content:center}header #header-text-box h1{padding:1rem 0;font-size:3.5em;text-transform:uppercase}header #header-text-box p{margin-bottom:.5em}header #header-text-box .resume-link{padding:.5em;color:#fff;background:#d76108;background:linear-gradient(167deg, #d76108 0%, #1a3759 100%);transition:all .4s ease}header #header-text-box .resume-link:hover{background:#1a3759;background:linear-gradient(167deg, #1a3759 0%, #d76108 100%)}header .social-icons{position:absolute;bottom:1rem}header .social-icons .social-icon{margin:0 1rem;font-size:4em;color:#fff;transition:all .5s ease-out}header .social-icons .social-icon:hover{color:#1a3759;cursor:pointer}.main-content{position:absolute;margin:48vh 5% 5% 5%;width:90%;z-index:10;background:transparent;display:flex;flex-direction:row}.main-content .about-content{padding-bottom:100px;width:40%;color:#fff}.main-content .about-content .about-me{padding:3em;background:#1a3759}.main-content .about-content .about-me h1{margin-bottom:1em}.main-content .about-content .skills{padding:3em;width:100%;background:#d76108}.main-content .about-content .skills h1{margin:0 0 1em 0}.main-content .projects-content{width:60%;background:#fff}.main-content .projects-content .latest-projects{right:5rem;padding:1.2rem;position:absolute;z-index:2;background:#1a3759;background:linear-gradient(167deg, #1a3759 0%, #d76108 100%);color:#fff;transform:translateY(-50%)}.main-content .projects-content .project{height:50vh;color:white;position:relative}.main-content .projects-content .project .container{height:100%;width:100%;overflow:hidden}.main-content .projects-content .project .project-buttons{position:absolute;top:10%;right:0;z-index:51;display:flex;flex-direction:column;transform:translateX(50%)}.main-content .projects-content .project .project-buttons .project-btn{margin:1.5rem 0;padding:.5rem;font-size:2rem;display:flex;flex-direction:row;color:#fff;background:#1a3759;background:linear-gradient(167deg, #1a3759 0%, #d76108 100%);border:5px solid #1a3759;border-radius:20px;cursor:pointer}.main-content .projects-content .project .project-buttons .project-btn:hover{background:#d76108;background:linear-gradient(167deg, #d76108 0%, #1a3759 100%)}.main-content .projects-content .project .project-info{height:100%;width:100%;z-index:0;display:flex;flex-direction:row;justify-content:space-around;align-items:center;color:white;transform:translateX(100%);transition:all .6s ease-in}.main-content .projects-content .project .project-info img{max-height:80%;width:30%;object-fit:contain}.main-content .projects-content .project .project-info .project-info-text{padding:0.5em;width:70%}.main-content .projects-content .project .project-info .project-info-text .project-stack{padding:.5em;top:0;left:0;max-width:70%;position:absolute;background:#1a3759;font-size:1.2em}.main-content .projects-content .project .project-info .project-info-text p{margin-bottom:0.5em}.main-content .projects-content .project .project-info .project-info-text .project-links{width:60%;display:flex;justify-content:space-around;position:absolute;bottom:.5em}.main-content .projects-content .project .project-info.show{transform:translateX(0)}.main-content .projects-content #larosa{border:10px solid #c59d5f;background:url('+r+") no-repeat center top;background-size:cover}.main-content .projects-content #larosa .project-info{background:#c59d5f}.main-content .projects-content #titanCBD{border:10px solid #00aeff;background:url("+a+') no-repeat center top;background-size:cover}.main-content .projects-content #titanCBD .project-info{background:#00aeff}.main-content .projects-content #becky-stylist{border:10px solid #eb0eb4;background:url("/assets/images/becky.png") no-repeat center top;background-size:cover}.main-content .projects-content #becky-stylist .project-info{background:#eb0eb4}.main-content .projects-content #mt-blog{border:10px solid #00637c;background:url('+i+") no-repeat center;background-size:cover}.main-content .projects-content #mt-blog .project-info{background:#00637c}.main-content .projects-content #cocina-ama{border:10px solid #eb3007;background:url("+c+") no-repeat center top;background-size:cover}.main-content .projects-content #cocina-ama .project-info{background:#eb3007}.main-content .projects-content #sortagram{border:10px solid #333;background:url("+s+") no-repeat center top;background-size:cover}.main-content .projects-content #sortagram .project-info{background:#333}@media screen and (min-width: 486px) and (max-width: 925px){.main-content{flex-direction:column;padding-bottom:10vh}.main-content .about-content{width:100%}.main-content .projects-content{width:100%}}@media screen and (max-width: 485px){.main-content{flex-direction:column;padding-bottom:10vh}.main-content .about-content{width:100%}.main-content .projects-content{width:100%}}footer{width:100%;color:black;position:fixed;bottom:1rem;display:flex;justify-content:center;align-items:center;font-size:2rem}footer #footer-logo{position:absolute;left:10rem;bottom:0;width:25rem;transform:translateY(30%)}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<t.length;i++){var c=t[i];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e){t.exports="images/larosa.png"},function(t,e){t.exports="images/titanCBD.png"},function(t,e){t.exports="images/mt-blog.png"},function(t,e){t.exports="images/cocina-ama.png"},function(t,e){t.exports="images/sortagram.png"},function(t,e,n){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],i=e.base?a[0]+e.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var o=t[n],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(g(o.parts[i],e))}else{for(var c=[];i<o.parts.length;i++)c.push(g(o.parts[i],e));r[o.id]={id:o.id,refs:1,parts:c}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var o=n.nc;o&&(t.attributes.nonce=o)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var r=i(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=l(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function f(t,e,n){var o=n.css,r=n.media,a=n.sourceMap;if(r&&t.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,b=0;function g(t,e){var n,o,r;if(e.singleton){var a=b++;n=m||(m=d(e)),o=p.bind(null,n,a,!1),r=p.bind(null,n,a,!0)}else n=d(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=c(t,e);return s(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var i=n[a],d=r[i.id];d&&(d.refs--,o.push(d))}t&&s(c(t,e),e);for(var u=0;u<o.length;u++){var l=o[u];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete r[l.id]}}}}}]);