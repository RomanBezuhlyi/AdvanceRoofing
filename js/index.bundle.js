!function(){var e={222:function(){const e=document.querySelector(".header__burger"),n=document.querySelector(".header__nav-close"),t=document.querySelector(".header__nav"),o=document.querySelector("body");e.addEventListener("click",(()=>{t.classList.add("open"),o.classList.add("no-scroll")})),n.addEventListener("click",(()=>{t.classList.remove("open"),o.classList.remove("no-scroll")}))},495:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".video-main"),n=document.querySelector(".video-main-play");setTimeout((function(){e.play(),n.style.display="none"}),2e3),n.addEventListener("click",(function(){e.paused||e.ended?(e.play(),n.style.display="none"):(e.pause(),n.style.display="block")})),e.addEventListener("click",(function(){e.paused||e.ended?(e.play(),n.style.display="none"):(e.pause(),n.style.display="block")})),e.addEventListener("ended",(function(){e.currentTime=0,e.play()}))}))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={exports:{}};return e[o](c,c.exports,t),c.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";t(222),t(495)}()}();