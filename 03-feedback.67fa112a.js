!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,s=c||m||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,m=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(h,t),m?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&o?b(e):(o=i=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(m=!!n.leading,a=(s="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var S="feedback-form-state",O={},h=localStorage.getItem(S),w=JSON.parse(h),T={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form  input"),textarea:document.querySelector(".feedback-form  textarea")};(null==w?void 0:w.email)&&(T.form.elements.email.value=w.email),(null==w?void 0:w.message)&&(T.form.elements.message.value=w.message),T.form.addEventListener("input",e(t)((function(){var e=T.form.elements.email.value,t=T.form.elements.message.value;e&&(O.email=e);t&&(O.message=t);localStorage.setItem(S,JSON.stringify(O))}),500)),T.form.addEventListener("submit",(function(e){e.preventDefault();var t=w;console.log("data",t),localStorage.removeItem(S),T.form.elements.email.value="",T.form.elements.message.value=""}))}();
//# sourceMappingURL=03-feedback.67fa112a.js.map