(()=>{"use strict";const t=function(t){const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("h1");n.classList.add("content-headings"),n.innerText=`${t.title}`,e.appendChild(n);const r=document.createElement("p");r.innerText=`${t.description}`,e.appendChild(r);const a=document.createElement("button");a.innerText="Add todo",e.appendChild(a),a.addEventListener("click",(()=>{document.querySelector("#overlay").style.display="block",document.querySelector("#todo-form").style.display="block"}))};function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t){return e(1,arguments),t instanceof Date||"object"===n(t)&&"[object Date]"===Object.prototype.toString.call(t)}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"===a(t)&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(e(1,arguments),!r(t)&&"number"!=typeof t)return!1;var n=o(t);return!isNaN(Number(n))}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(t,n){e(2,arguments);var r=o(t).getTime(),a=u(n);return new Date(r+a)}function d(t,n){e(2,arguments);var r=u(n);return s(t,-r)}var c=864e5;function l(t){e(1,arguments);var n=1,r=o(t),a=r.getUTCDay(),i=(a<n?7:0)+a-n;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function m(t){e(1,arguments);var n=o(t),r=n.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var i=l(a),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=l(u);return n.getTime()>=i.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function h(t){e(1,arguments);var n=m(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=l(r);return a}var f=6048e5,g={};function v(){return g}function p(t,n){var r,a,i,s,d,c,l,m;e(1,arguments);var h=v(),f=u(null!==(r=null!==(a=null!==(i=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==i?i:h.weekStartsOn)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==r?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=o(t),p=g.getUTCDay(),b=(p<f?7:0)+p-f;return g.setUTCDate(g.getUTCDate()-b),g.setUTCHours(0,0,0,0),g}function b(t,n){var r,a,i,s,d,c,l,m;e(1,arguments);var h=o(t),f=h.getUTCFullYear(),g=v(),b=u(null!==(r=null!==(a=null!==(i=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==a?a:null===(l=g.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(f+1,0,b),w.setUTCHours(0,0,0,0);var y=p(w,n),C=new Date(0);C.setUTCFullYear(f,0,b),C.setUTCHours(0,0,0,0);var T=p(C,n);return h.getTime()>=y.getTime()?f+1:h.getTime()>=T.getTime()?f:f-1}function w(t,n){var r,a,o,i,s,d,c,l;e(1,arguments);var m=v(),h=u(null!==(r=null!==(a=null!==(o=null!==(i=null==n?void 0:n.firstWeekContainsDate)&&void 0!==i?i:null==n||null===(s=n.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==a?a:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),f=b(t,n),g=new Date(0);g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0);var w=p(g,n);return w}var y=6048e5;function C(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const T=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return C("yy"===e?r%100:r,e.length)},x=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):C(n+1,2)},M=function(t,e){return C(t.getUTCDate(),e.length)},S=function(t,e){return C(t.getUTCHours()%12||12,e.length)},k=function(t,e){return C(t.getUTCHours(),e.length)},E=function(t,e){return C(t.getUTCMinutes(),e.length)},D=function(t,e){return C(t.getUTCSeconds(),e.length)},U=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return C(Math.floor(r*Math.pow(10,n-3)),e.length)};function P(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+C(o,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+C(Math.abs(t)/60,2):A(t,e)}function A(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+C(Math.floor(a/60),2)+n+C(a%60,2)}const Y={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return T(t,e)},Y:function(t,e,n,r){var a=b(t,r),o=a>0?a:1-a;return"YY"===e?C(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):C(o,e.length)},R:function(t,e){return C(m(t),e.length)},u:function(t,e){return C(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return x(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,r,a){var i=function(t,n){e(1,arguments);var r=o(t),a=p(r,n).getTime()-w(r,n).getTime();return Math.round(a/y)+1}(t,a);return"wo"===n?r.ordinalNumber(i,{unit:"week"}):C(i,n.length)},I:function(t,n,r){var a=function(t){e(1,arguments);var n=o(t),r=l(n).getTime()-h(n).getTime();return Math.round(r/f)+1}(t);return"Io"===n?r.ordinalNumber(a,{unit:"week"}):C(a,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):M(t,e)},D:function(t,n,r){var a=function(t){e(1,arguments);var n=o(t),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var a=n.getTime(),i=r-a;return Math.floor(i/c)+1}(t);return"Do"===n?r.ordinalNumber(a,{unit:"dayOfYear"}):C(a,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return C(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return C(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return C(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return S(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):k(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):E(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):D(t,e)},S:function(t,e){return U(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return W(a);case"XXXX":case"XX":return A(a);default:return A(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(a);case"xxxx":case"xx":return A(a);default:return A(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+P(a,":");default:return"GMT"+A(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+P(a,":");default:return"GMT"+A(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return C(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return C((r._originalDate||t).getTime(),e.length)}};var q=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},L=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},N={p:L,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return q(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",q(a,e)).replace("{{time}}",L(o,e))}};const O=N;function j(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var H=["D","DD"],F=["YY","YYYY"];function z(t){return-1!==H.indexOf(t)}function G(t){return-1!==F.indexOf(t)}function Q(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function X(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var R,I={date:X({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:X({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:X({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},J={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function K(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?V(s,(function(t){return t.test(u)})):$(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(u.length);return{value:i,rest:c}}}function $(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function V(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const Z={code:"en-US",formatDistance:function(t,e,n){var r,a=B[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:I,formatRelative:function(t,e,n,r){return J[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(R={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(R.matchPattern);if(!n)return null;var r=n[0],a=t.match(R.parsePattern);if(!a)return null;var o=R.valueCallback?R.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:K({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:K({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:K({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:K({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nt=/^'([^]*?)'?$/,rt=/''/g,at=/[a-zA-Z]/;function ot(t,n,r){var a,s,c,l,m,h,f,g,p,b,w,y,C,T,x,M,S,k;e(2,arguments);var E=String(n),D=v(),U=null!==(a=null!==(s=null==r?void 0:r.locale)&&void 0!==s?s:D.locale)&&void 0!==a?a:Z,P=u(null!==(c=null!==(l=null!==(m=null!==(h=null==r?void 0:r.firstWeekContainsDate)&&void 0!==h?h:null==r||null===(f=r.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:D.firstWeekContainsDate)&&void 0!==l?l:null===(p=D.locale)||void 0===p||null===(b=p.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==c?c:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=u(null!==(w=null!==(y=null!==(C=null!==(T=null==r?void 0:r.weekStartsOn)&&void 0!==T?T:null==r||null===(x=r.locale)||void 0===x||null===(M=x.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==C?C:D.weekStartsOn)&&void 0!==y?y:null===(S=D.locale)||void 0===S||null===(k=S.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==w?w:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var A=o(t);if(!i(A))throw new RangeError("Invalid time value");var q=j(A),L=d(A,q),N={firstWeekContainsDate:P,weekStartsOn:W,locale:U,_originalDate:A},H=E.match(et).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,O[e])(t,U.formatLong):t})).join("").match(tt).map((function(e){if("''"===e)return"'";var a=e[0];if("'"===a)return it(e);var o=Y[a];if(o)return null!=r&&r.useAdditionalWeekYearTokens||!G(e)||Q(e,n,String(t)),null!=r&&r.useAdditionalDayOfYearTokens||!z(e)||Q(e,n,String(t)),o(L,e,U.localize,N);if(a.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return e})).join("");return H}function it(t){var e=t.match(nt);return e?e[1].replace(rt,"'"):t}const ut=JSON.parse(localStorage.getItem("projects"))||[];0===ut.length&&("Inbox","Tasks without an assigned project",ut.push(new class{constructor(t,e=""){this.title=t,this.description=e,this.todos=[]}addTodo(t){this.todos.push(t),this.saveUpdates()}removeTodo(t){for(let e=0;e<this.todos.length;e+=1)if(this.todos[e].title===t){this.todos.splice(e,1),this.saveUpdates();break}}editProject(t,e){this[t]=e,this.saveUpdates()}editTodo(t,e,n){for(let r=0;r<this.todos.length;r+=1)this.todos[r].title===t&&("dueDate"===e?(this.todos[r][e]=ot(n,"MM/dd/yyyy"),this.saveUpdates()):(this.todos[r][e]=n,this.saveUpdates()))}saveUpdates(){const t=JSON.parse(localStorage.getItem("projects"))||[];for(let e=0;e<t.length;e+=1)if(t[e].title===this.title){t[e]=this;break}localStorage.setItem("projects",JSON.stringify(t))}}("Inbox","Tasks without an assigned project")),localStorage.setItem("projects",JSON.stringify(ut))),function(){const e=ut[0];(function(){const t=document.querySelector("#content"),e=function(){const t=document.createElement("header"),e=document.createElement("img");e.setAttribute("src","images/logo-transparent.png"),e.setAttribute("alt","To-do, Will-do logo"),e.setAttribute("class","logo"),t.appendChild(e);const n=document.createElement("img");return n.setAttribute("src","images/menu.svg"),n.setAttribute("alt","open or close navigation sidebar"),n.setAttribute("class","hamburger"),t.appendChild(n),t}(),n=document.createElement("main"),r=function(){const t=document.createElement("footer"),e=document.createElement("div");e.classList.add("footer-text"),e.innerText="Kieran Garvey - Odin Project 2023",t.appendChild(e);const n=document.createElement("img");return n.setAttribute("src","images/icons/github.svg"),n.setAttribute("alt","Link to github"),n.setAttribute("title","Go to my Github page"),n.addEventListener("click",(()=>{window.location.href="https://github.com/KGarvey92"})),t.appendChild(n),t}();t.appendChild(e),t.appendChild(n),t.appendChild(r);const a=function(){const t=document.createElement("nav");t.classList.add("show-nav");const e=document.createElement("ul");e.classList.add("nav-btns");const n=document.createElement("li");n.setAttribute("id","nav-inbox"),n.innerText="Inbox",e.appendChild(n);const r=document.createElement("li");r.setAttribute("id","nav-todos"),r.innerText="All Todos",e.appendChild(r);const a=document.createElement("li");a.setAttribute("id","nav-projectBtn"),a.innerText="Projects",e.appendChild(a),t.appendChild(e);const o=document.createElement("ul");o.classList.add("nav-projects");const i=document.createElement("li");return i.innerText="+",o.appendChild(i),t.appendChild(o),t}();t.appendChild(a),document.querySelector(".hamburger").addEventListener("click",(()=>{const t=document.querySelector("nav");"none"===t.style.display?t.style.display="block":t.style.display="none",t.classList.toggle("show-nav")})),function(){const t=document.querySelector("body"),e=document.createElement("div");e.setAttribute("id","overlay"),t.appendChild(e);const n=document.createElement("form");n.setAttribute("id","todo-form");const r=document.createElement("div");r.setAttribute("id","form-inputs");const a=document.createElement("label");a.setAttribute("for","title-input"),a.textContent="Todo:",r.appendChild(a);const o=document.createElement("input");o.setAttribute("id","title-input"),o.setAttribute("type","text"),r.appendChild(o);const i=document.createElement("label");i.setAttribute("for","due-date-input"),i.textContent="Due Date:",r.appendChild(i);const u=document.createElement("input");u.setAttribute("id","due-date-input"),u.setAttribute("type","date"),r.appendChild(u);const s=document.createElement("label");s.setAttribute("for","description-input"),s.textContent="Description:",r.appendChild(s);const d=document.createElement("textarea");d.setAttribute("id","description-input"),d.setAttribute("rows","3"),r.appendChild(d);const c=document.createElement("label");c.setAttribute("for","priority-select"),c.textContent="Priority:",r.appendChild(c);const l=document.createElement("select");l.setAttribute("id","priority-select");const m=document.createElement("option");m.setAttribute("value","high"),m.textContent="High",l.appendChild(m);const h=document.createElement("option");h.setAttribute("value","normal"),h.setAttribute("selected",""),h.textContent="Normal",l.appendChild(h);const f=document.createElement("option");f.setAttribute("value","low"),f.textContent="Low",l.appendChild(f),r.appendChild(l),n.appendChild(r);const g=document.createElement("button");g.setAttribute("type","submit"),g.textContent="Submit",n.appendChild(g),t.appendChild(n),e.addEventListener("click",(t=>{t.target===e&&(e.style.display="none",n.style.display="none")})),g.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none",n.style.display="none"}))}()})(),t(e)}();const st=document.querySelector("#nav-inbox"),dt=document.querySelector("#nav-todos"),ct=document.querySelector("#nav-projectBtn"),lt=ut[0];st.addEventListener("click",(()=>t(lt))),dt.addEventListener("click",(function(){const t=document.querySelector("main");t.innerText="";const e=document.createElement("h1");e.classList.add("content-headings"),e.innerText="Todos",t.appendChild(e);const n=document.createElement("div");return n.classList.add("tasks"),n.innerText="Example todos here",t.appendChild(n),t})),ct.addEventListener("click",(function(){const t=document.querySelector("main");t.innerText="";const e=document.createElement("h1");e.classList.add("content-headings"),e.innerText="Projects",t.appendChild(e);const n=document.createElement("div");return n.classList.add("projects"),n.innerText="Example project here",t.appendChild(n),t}))})();