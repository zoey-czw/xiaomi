"use strict";function getStyle(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e,null)[t]}function getNextNode(e){return e.nextElementSibling?e.nextElementSibling:e.nextSibling}function getPrevNode(e){return e.previousElementSibling?e.previousElementSibling:e.previousSibling}function getFirstNode(e){return e.firstElementChild?e.firstElementChild:e.firstChild}function getLastNode(e){return e.lastElementChild?e.lastElementChild:e.lastChild}function randomCode(){var e=[1,1,1,1,1,1];for(var t in e){do{var n=randomInt(48,122)}while(57<n&&n<65||90<n&&n<97);e[t]=String.fromCharCode(n)}return e.join("")}function randomInt(e,t){return Math.round(Math.random()*(t-e))+e}function randomColor(){for(var e="#",t=0;t<6;t++){e+="0123456789abcdef"[randomInt(0,15)]}return e}function addEvent(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)}function removeEvent(e,t,n){e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n)}function on(e,t,o,i){addEvent(e,t,function(e){var t=e||event,n=t.target||t.srcElement,a=null,r=null;switch(o.substr(0,1)){case".":a=o.slice(1),r="className";break;case"#":a=o.slice(1),r="id";break;default:a=o,r="tagName"}"tagName"===r&&(a=a.toUpperCase()),n[r]===a&&i.call(n,t)})}function animate(o,i,s){for(var e in i){var t,n;n="opacity"===e?(t=parseInt(100*getComputedStyle(o,null)[e]),100*i[e]):(t=-1!==e.indexOf("scroll")?o[e]:parseInt(getComputedStyle(o,null)[e]),i[e]),i[e]={current:t,target:n}}clearInterval(o.timer),o.timer=setInterval(function(){for(var e in i){var t=i[e].current,n=i[e].target,a=0<(a=(n-t)/10)?Math.ceil(a):Math.floor(a);if(Math.abs(n-t)<=Math.abs(a)){for(var r in"opacity"===e?o.style[e]=n/100:-1!==e.indexOf("scroll")?o[e]=n:o.style[e]=n+"px",delete i[e],i)return;clearInterval(o.timer),"function"==typeof s&&s()}else i[e].current+=a,"opacity"===e?o.style[e]=i[e].current/100:-1!==e.indexOf("scroll")?o[e]=i[e].current:o.style[e]=i[e].current+"px"}},20)}function offset(e,t){for(var n=0,a=0,r=e.clientLeft,o=e.clientTop;e;)n=n+e.offsetLeft+e.clientLeft,a=a+e.offsetTop+e.clientTop,e=e.offsetParent;return t?{left:n-r,top:a-o}:{left:n,top:a}}function getQueryString(e){var t=location.href.split("?")[1],n=new RegExp("[&]?"+e+"=([^&#]*)[&]?","i");t.match(n);return RegExp.$1}function isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function ajax(e){var t=new XMLHttpRequest,n="";if("string"==typeof e.data&&(n=e.data),isObject(e.data)){for(var a in e.data)n+=a+"="+e.data[a]+"&";n=n.substring(0,n.length-1)}if("get"===e.type.toLowerCase())t.open(e.type,e.url+"?"+n+"&_="+Date.now()),t.send(null);else{if("post"!==e.type.toLowerCase())return alert("目前只支持get和post请求方式"),!1;t.open(e.type,e.url),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(n)}t.onreadystatechange=function(){4===t.readyState&&(200<=t.status&&t.status<300?"xml"===e.dataType?e.success(t.responseXML):e.success(t.responseText):e.error(t.status))}}function pajax(o){return new Promise(function(e,t){var n=new XMLHttpRequest,a="";if("string"==typeof o.data&&(a=o.data),isObject(o.data)){for(var r in o.data)a+=r+"="+o.data[r]+"&";a=a.substring(0,a.length-1)}if("get"===o.type.toLowerCase())n.open(o.type,o.url+"?"+a+"&_="+Date.now()),n.send(null);else{if("post"!==o.type.toLowerCase())return alert("目前只支持get和post请求方式"),!1;n.open(o.type,o.url),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(a)}n.onreadystatechange=function(){4===n.readyState&&(200<=n.status&&n.status<300?"xml"===o.dataType?e(n.responseXML):e(n.responseText):t(n.status))}})}function jsonp(e){window[e.jsonpCallback]=e.success;var t="";if("string"==typeof e.data&&(t=e.data),isObject(e.data)){for(var n in e.data)t+=n+"="+e.data[n]+"&";t=t.substring(0,t.length-1)}var a=document.createElement("script");a.src=e.url+"?"+t+"&"+e.jsonp+"="+e.jsonpCallback,document.body.appendChild(a),a.onload=function(){document.body.removeChild(a)}}function setCookie(e){if(!e.key||!e.val)throw new Error("设置失败，缺少重要参数");var t;e.key=e.key||"",e.days=e.days||0,e.domain=e.domain||"",e.path=e.path||"",0===e.days?document.cookie=e.key+"="+escape(e.val)+"; domain="+e.domain+"; path="+e.path:((t=new Date).setDate(t.getDate()+e.days),document.cookie=e.key+"="+escape(e.val)+"; domain="+e.domain+"; path="+e.path+"; expires="+t)}function getCookie(e){for(var t=document.cookie.split("; "),n=0,a=t.length;n<a;n++)if(e==t[n].split("=")[0])return t[n].split("=")[1];return null}function removeCookie(e){setCookie({key:e,val:"*",days:-5})}