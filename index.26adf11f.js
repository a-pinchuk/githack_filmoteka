var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire294f;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequire294f=n),n("edYM8"),n("i2Aqx"),n("3IenU"),n("58nxT"),n("klbR5"),n("bTcpz"),n("7mw0q"),n("ccLkp");const r=document.querySelector(".scroll-up"),l=document.querySelector(".scroll-up__sircle-path"),s=l.getTotalLength();function i(){return window.pageYOffset||document.documentElement.scrollTop}l.style.strokeDasharray=`${s} ${s}`,l.style.transition="stroke-dashoffset 20ms",r.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){(function(){const e=document.documentElement.scrollHeight-window.innerHeight,o=s-i()*s/e;l.style.strokeDashoffset=o})(),i()>=400?r.classList.add("scroll-up--active"):r.classList.remove("scroll-up--active")})),n("1iCTa"),n("8Ww9Z");
//# sourceMappingURL=index.26adf11f.js.map