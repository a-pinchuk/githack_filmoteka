function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequire294f;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequire294f=o),o("30vMJ"),o("i2Aqx"),o("3IenU");var a=o("i2Aqx");function r(t,e,n){const i=e.map((t=>{const e=t.genre_ids,i=function(t,e){let n=[];if(t.forEach((t=>{e.includes(t.id)&&n.push(t.name)})),n.length>3)return n=n.splice(0,2).join(", ")+", Other",n;return n.join(", ")}(n,e);return`\n      <li class="photo__card" data-modal-open id="${t.id}">\n            <img src="https://image.tmdb.org/t/p/w500/${t.poster_path}" alt="" "loading="lazy" class="movie__image"/>\n            <span class="movie__rating">${t.vote_average.toFixed(1)}</span>\n          <div class="movie__info">\n            <h2 class="film__title">${t.title}</h2>\n            <div class="movie__details">\n            <p class="movie__genre">${i}</p>\n            <p class="movie__year">| ${t.release_date.slice(0,4)}</p>\n          </div>\n          </div>\n      </li>`})).join("");t.galleryList.insertAdjacentHTML("beforeend",i)}var s,c=o("3IenU"),u=o("gjiCh"),l={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
s=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,o,a,r=Object.prototype.hasOwnProperty;for(o=1,a=arguments.length;o<a;o+=1)for(i in n=arguments[o])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),o=n(17),a=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):a(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var o,a;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,o=n;n>=0&&o<a;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){var i=n(29),o=n(30),a=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=a(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),o=n(7),a=n(0),r=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=a({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),a=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(a/2),(n=(e=Math.max(t-i,1))+a-1)>o&&(e=Math.max(o-a+1,1),n=o)):(e=(r-1)*a+1,n=r*a,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){var i=n(0),o=n(14),a=n(4),r=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;a(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):r(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(r(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,a=e===i.context,r=o&&a;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):a(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),o=n(7),a=n(21),r=n(22),s=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],_=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(d,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(d,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,i,o=a(e);s(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),o=n(3),a=n(23);function r(t,e,n,i){function r(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,i){var r=a(t,e),s=!1;o(r,(function(t){return t.handler!==n||(s=!0,!1)})),s||r.push({handler:n,wrappedHandler:i})}(t,e,n,r)}t.exports=function(t,e,n,a){i(e)?o(e.split(/\s+/g),(function(e){r(t,e,n,a)})):o(e,(function(e,i){r(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),o=n(8),a=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?i(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,c)<0&&c.push(t)})),r(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),o=n(3),a=n(2),r=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,_={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],a=0,r=0;return o(e,(function(t,o){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(r,o)),r=o+1)})),i.push(e.slice(r)),{exps:n,sourcesInsideIf:i}}(t,e),a=!1,r="";return o(i.exps,(function(t,e){return(a=y(t,n))&&(r=b(i.sourcesInsideIf[e],n)),!a})),r},each:function(t,e,n){var i=y(t,n),r=a(i)?"@index":"@key",c={},u="";return o(i,(function(t,i){c[r]=i,c["@this"]=t,s(n,c),u+=b(e.slice(),n)})),u},with:function(t,e,n){var o=i("as",t),a=t[o+1],r=y(t.slice(0,o),n),c={};return c[a]=r,b(e,s(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(a,i)),a=i+n[0].length,n=e.exec(t);return o.push(t.slice(a)),o};function m(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(d,""):u.test(t)?i=m((n=t.split(l))[0],e)[m(n[1],e)]:p.test(t)?i=m((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function x(t,e,n){for(var i,o,a,s,c=_[t],u=1,l=2,p=e[l];u&&r(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,a=i,(s=e.splice(o+1,a-o)).pop(),s),n),e}function y(t,e){var n=m(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(m(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function b(t,e){for(var n,i,o,a=1,s=t[a];r(s);)i=(n=s.split(" "))[0],_[i]?(o=x(i,t.splice(a,t.length-a),e),t=t.concat(o)):t[a]=y(n,e),s=t[a+=2];return t.join("")}t.exports=function(t,e){return b(v(t,c),e)}},function(t,e,n){var i=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},l=s();var p=o("ccLkp"),f=(a=o("i2Aqx"),c=o("3IenU"),o("eWCmQ"));o("30vMJ");u=o("gjiCh");let h="";async function d(t){try{const e=await(0,a.fetchSearchedFilms)(h,t),n=e.data.results;return 0===n.length?((0,u.loaderHide)(),c.ref.alertMessage.textContent="Search result not successful. Enter the correct movie name and ",f.Notify.warning("Search result not successful. Enter the correct movie name and ")):(c.ref.alertMessage.textContent="",c.ref.loader.style.display="flex",c.ref.galleryList.innerHTML="",(0,p.createMarkUp)(c.ref,n),(0,u.loaderHide)(),e)}catch(t){console.log(t)}}c.ref.form.addEventListener("submit",(function(t){if(t.preventDefault(),h=c.ref.input.value.trim(),c.ref.loader.style.display="flex",""===h)return(0,u.loaderHide)(),c.ref.alertMessage.textContent="Searching starts after providing data to search",void f.Notify.warning("Searching starts after providing data to search.");h.length>0?(c.ref.alertMessage.textContent="",c.ref.input.value="",d().then((t=>{b(t.data.total_pages)}))):r()}));c=o("3IenU");var g=o("1iCTa");const _=document.getElementById("pagination"),v=document.getElementById("pagination-search");g.darkmode&&(c.ref.paginationRef.classList.add("pagination-btns-dark-theme"),c.ref.paginationSearchRef.classList.add("pagination-btns-dark-theme"));const m={totalItems:200,itemsPerPage:1,visiblePages:8,page:1,centerAlign:!0,firstItemClassName:"pagination-first-button",lastItemClassName:"pagination-last-button",template:{page:'<a href="#" class="pagination-page-button">{{page}}</a>',currentPage:'<a class="pagination-active-button">{{page}}</a>',moveButton:'<a href="#" class="pagination-next-button"><span class="pag-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="pagination-disabled-button"><span class="pag-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="pagination-more-button"><span class="pag-ico-more"> </span></a>'}},x=new(t(l))(_,m);x.on("afterMove",(function({page:t}){P(t),window.scrollTo({top:0,behavior:"smooth"})}));const y=new(t(l))(v,m);function b(t){y.setTotalItems(t),y.movePageTo(m.page),c.ref.paginationRef.style.display="none",c.ref.paginationSearchRef.style.display="flex"}async function P(t){try{c.ref.galleryList.innerHTML="",c.ref.loader.style.display="flex";const e=await(0,a.fetchTrendedFilms)(t),n=await(0,a.fetchFilmGenres)(),i=e.data.results,o=n.data.genres;return r(c.ref,i,o),(0,u.loaderHide)(),e}catch(t){console.log(t)}}y.on("afterMove",(function({page:t}){d(t),window.scrollTo({top:0,behavior:"smooth"})})),P(1).then((t=>{var e;e=t.data.total_pages,x.setTotalItems(e),x.movePageTo(m.page),c.ref.paginationRef.style.display="flex",c.ref.paginationSearchRef.style.display="none"})),o("klbR5"),o("bTcpz"),o("31u3U"),o("ccLkp");const C=document.querySelector(".scroll-up"),E=document.querySelector(".scroll-up__sircle-path"),M=E.getTotalLength();function w(){return window.pageYOffset||document.documentElement.scrollTop}E.style.strokeDasharray=`${M} ${M}`,E.style.transition="stroke-dashoffset 20ms",C.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){(function(){const t=document.documentElement.scrollHeight-window.innerHeight,e=M-w()*M/t;E.style.strokeDashoffset=e})(),w()>=400?C.classList.add("scroll-up--active"):C.classList.remove("scroll-up--active")})),o("1iCTa"),o("8Ww9Z");
//# sourceMappingURL=index.b7b9b8b3.js.map
