parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sncH":[function(require,module,exports) {
module.exports="/sytw-c-herramientas/burger.af2cd381.jpg";
},{}],"A9XF":[function(require,module,exports) {
module.exports="/sytw-c-herramientas/salad.4e702d86.jpeg";
},{}],"IhjU":[function(require,module,exports) {
module.exports="/sytw-c-herramientas/pizza.908ef9f1.jpeg";
},{}],"BVGV":[function(require,module,exports) {
module.exports="/sytw-c-herramientas/dessert.1038abb2.jpeg";
},{}],"yTJL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayNews=o;var e=r(require("../images/burger.jpg")),t=r(require("../images/salad.jpeg")),a=r(require("../images/pizza.jpeg")),i=r(require("../images/dessert.jpeg"));function r(e){return e&&e.__esModule?e:{default:e}}var n=[{title:"Classic Cheeseburger",description:"A juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomatoes, and our special sauce, served on a toasted brioche bun. Comes with crispy fries.",img:e.default},{title:"Mediterranean Salad",description:"Fresh mixed greens, cherry tomatoes, cucumber, red onions, Kalamata olives, and feta cheese, drizzled with our house-made vinaigrette.",img:t.default},{title:"Margherita Pizza",description:"Hand-stretched dough topped with San Marzano tomato sauce, fresh mozzarella, basil leaves, and extra virgin olive oil. Baked in our wood-fired oven.",img:a.default},{title:"Chocolate Lava Cake",description:"Warm chocolate cake with a molten center, served with vanilla ice cream and fresh berries. A chocolate lover's dream.",img:i.default}];function o(){var e=document.getElementById("articlesContainer");e.innerHTML="",n.forEach(function(t,a){var i='\n            <div class="article">\n                <img src="'.concat(t.img,'" class="poster">\n                <h3 class="title">').concat(t.title,"</h3>\n                <p>").concat(t.description,"</p>\n            </div>\n        ");e.innerHTML+=i})}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("fetchNewsButton");console.log("Calling displayNews"),e.addEventListener("click",o)});
},{"../images/burger.jpg":"sncH","../images/salad.jpeg":"A9XF","../images/pizza.jpeg":"IhjU","../images/dessert.jpeg":"BVGV"}]},{},["yTJL"], null)
//# sourceMappingURL=/sytw-c-herramientas/script1.46934d65.js.map