// ==UserScript==
// @name         Linkvertise Bypass by amboss.dev
// @version      1.1
// @description  Bypasses Linkvertise urls and redirects to the target url.
// @namespace https://amboss.dev/
// @author       amboss.dev
// @license GNU GPLv3
// @match        *://*.linkvertise.com/*
// @match        *://*.linkvertise.net/*
// @match        *://*.linkvertise.download/*
// @match        *://*.link-to.net/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://cdn.linkvertise.com/*
// @exclude      *://link-mutation.linkvertise.com/*
// @exclude      *://linkvertise.com
// @exclude      *://linkvertise.com/search*
// @exclude      *://linkvertise.com/assets*
// @exclude      *://linkvertise.com/profile*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      https://linkvertise.com/
// @run-at       document-end
// @icon         https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://linkvertise.com&size=64
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// ==/UserScript==

function reqListener () {
    console.log(this.responseText);
    var obj = JSON.parse(this.responseText);
    console.log(obj.destination);
    location.href = obj.destination;
}

setTimeout(function(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://bypass.cx/api.php?url=" + location.href);
    oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    oReq.send();
},50);
