!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire294f;function o(e,t){var n=t.map((function(e){var t=e.data,n=function(e){var t=[];e.forEach((function(e){t.push(e.name)})),t.length>2&&(t=t.splice(0,2).join(", ")+", Other");return t}(t.genres);return'<li class="photo__card" data-modal-open id='.concat(t.id,'">\n            <img src="https://image.tmdb.org/t/p/w500/').concat(t.poster_path,'" alt="').concat(t.title,'" "loading="lazy" class="movie__image"/>\n          <div class="movie__info">\n            <h2 class="film__title">').concat(t.title,'</h2>\n            <div class="movie__details">\n            <p class="movie__genre">').concat(n,'</p>\n            <p class="movie__year">').concat(t.release_date.slice(0,4),'</p>\n\t\t\t\t<p class="movie__vote-average">').concat(t.vote_average.toFixed(1),"</p>\n          </div>\n          </div>\n      </li>\n    </ul>\n  </div>")})).join("");e.libraryList.insertAdjacentHTML("beforeend",n)}null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire294f=a),a("iUA6h"),a("5YnpJ"),a("9oodp"),a("9oodp"),a("gEbo1");var i=a("bpxeT"),c=a("2TvXO"),s=a("5YnpJ"),l=(s=a("5YnpJ"),a("9oodp")),u="watched",d="queue";localStorage.setItem(u,JSON.stringify([800815]));function f(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}localStorage.setItem(d,JSON.stringify([653851]));try{document.addEventListener("DOMContentLoaded",(function(){var e=f(u);if(void 0===e)return;p(e)})),l.ref.libraryWatchedBtn.addEventListener("click",(function(e){l.ref.libraryList.innerHTML="";var t=f(u);if(void 0===t)return;p(t)})),l.ref.libraryQueueBtn.addEventListener("click",(function(e){l.ref.libraryList.innerHTML="";var t=f(d);if(void 0===t)return;p(t)}))}catch(e){console.log(e)}function p(e){return v.apply(this,arguments)}function v(){return v=e(i)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n.map(function(){var t=e(i)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.fetchFilmById)(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=4,Promise.all(r);case 4:a=t.sent,o(l.ref,a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),v.apply(this,arguments)}a("5xtVg"),a("e5miy"),a("eOhzM"),a("78qpV"),a("dRVRr")}();
//# sourceMappingURL=my-library.daacade4.js.map