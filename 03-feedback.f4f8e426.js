var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form"),n=document.querySelector(".feedback-form input"),o=document.querySelector(".feedback-form textarea");var r={},i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function b(e){return c=e,f=setTimeout(S,t),l?m(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=p();if(j(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?g(n,i-(e-c)):n}(e))}function T(e){return f=void 0,d&&o?m(e):(o=r=void 0,a)}function w(){var e=p(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return b(u);if(s)return f=setTimeout(S,t),m(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=h(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(h(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=f.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}r=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const j={};!function(){const e=localStorage.getItem("feedback-form-state");try{const t=JSON.parse(e);t&&(n.value=t.email,o.value=t.message)}catch(e){console.log(e.name),console.log(e.message)}}(),t.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),console.log(j)})),t.addEventListener("input",r((e=>{j.email=n.value,j.message=o.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500));
//# sourceMappingURL=03-feedback.f4f8e426.js.map
