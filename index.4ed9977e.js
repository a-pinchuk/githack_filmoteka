!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire294f;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequire294f=n),n("iUA6h"),n("5YnpJ"),n("9oodp"),n("9YQhV"),n("gEbo1"),n("5xtVg"),n("e5miy"),n("eOhzM");var r=document.querySelector(".scroll-up"),l=document.querySelector(".scroll-up__sircle-path"),i=l.getTotalLength();function s(){return window.pageYOffset||document.documentElement.scrollTop}l.style.strokeDasharray="".concat(i," ").concat(i),l.style.transition="stroke-dashoffset 20ms",r.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){e=document.documentElement.scrollHeight-window.innerHeight,o=i-s()*i/e,void(l.style.strokeDashoffset=o),s()>=400?r.classList.add("scroll-up--active"):r.classList.remove("scroll-up--active");var e,o})),n("78qpV"),n("dRVRr")}();
//# sourceMappingURL=index.4ed9977e.js.map
