function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}var o=/*#__PURE__*/function(){function t(){this.baseUrl="https://search.imdbot.workers.dev/"}return t.prototype.request=function(t,n){try{var r=""+this.baseUrl+t,o=Object.assign({},n,{"Content-Type":"application/json"});return Promise.resolve(e.default(r,o)).then(function(t){var e;function n(n){if(e)return n;throw new Error(t.statusText)}var r=function(){if(t.ok)return Promise.resolve(t.json()).then(function(t){return e=1,t})}();return r&&r.then?r.then(n):n(r)})}catch(t){return Promise.reject(t)}},t}();function i(t,e,n){if(!t.s){if(n instanceof u){if(!n.s)return void(n.o=i.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(i.bind(null,t,e),i.bind(null,t,2));t.s=e,t.v=n;const r=t.o;r&&r(t)}}var u=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var u=1&o?e:n;if(u){try{i(r,1,u(this.v))}catch(t){i(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?i(r,1,e?e(o):o):n?i(r,1,n(o)):i(r,2,o)}catch(t){i(r,2,t)}},r},t}();function c(t){return t instanceof u&&1&t.s}var s,f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.getRandomMovies=function(){try{var t,e=function(){return Array.from(r.values()).slice(0,10)},n=this,r=new Map,o=function(t,e,n){for(var r;;){var o=t();if(c(o)&&(o=o.v),!o)return s;if(o.then){r=0;break}var s=n();if(s&&s.then){if(!c(s)){r=1;break}s=s.s}if(e){var f=e();if(f&&f.then&&!c(f)){r=2;break}}}var h=new u,a=i.bind(null,h,2);return(0===r?o.then(p):1===r?s.then(v):f.then(d)).then(void 0,a),h;function v(r){s=r;do{if(e&&(f=e())&&f.then&&!c(f))return void f.then(d).then(void 0,a);if(!(o=t())||c(o)&&!o.v)return void i(h,1,s);if(o.then)return void o.then(p).then(void 0,a);c(s=n())&&(s=s.v)}while(!s||!s.then);s.then(v).then(void 0,a)}function p(t){t?(s=n())&&s.then?s.then(v).then(void 0,a):v(s):i(h,1,s)}function d(){(o=t())?o.then?o.then(p).then(void 0,a):p(o):i(h,1,s)}}(function(){return!t&&r.size<10},void 0,function(){return Promise.resolve(n.request()).then(function(e){var n=e.description;n.forEach(function(t){r.has(t["#IMDB_ID"])||r.set(t["#IMDB_ID"],t)}),n.length<10&&(t=1)})});return Promise.resolve(o&&o.then?o.then(e):e())}catch(t){return Promise.reject(t)}},r.getMovieById=function(t){try{return Promise.resolve(this.request("?tt="+t))}catch(t){return Promise.reject(t)}},r.searchMovies=function(t){try{return Promise.resolve(this.request("q="+encodeURIComponent(t))).then(function(t){return t.description})}catch(t){return Promise.reject(t)}},e}(o),h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e}(o);s=h,[f].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(s.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})}),module.exports=h;
