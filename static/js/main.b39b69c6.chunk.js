(this.webpackJsonpapi_clima=this.webpackJsonpapi_clima||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),a=t.n(i),r=t(6),s=t.n(r),o=(t(13),t(7)),d=t(4);t(14);function l(e){var n=e.onSearch,t=Object(i.useState)(""),a=Object(d.a)(t,2),r=a[0],s=a[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(r)},children:[Object(c.jsx)("input",{type:"text",placeholder:"Ciudad...",value:r,onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Agregar"})]})}t(15);var u=function(e){var n=e.onSearch;return Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsx)(l,{onSearch:n})})};t(16),t(17);function j(e){var n=e.min,t=e.max,i=e.name,a=e.img,r=e.onClose;e.id;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{id:"closeIcon",className:"row",children:Object(c.jsx)("button",{onClick:r,className:"btn-close",children:"X"})}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:i}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"card-items-internos",children:[Object(c.jsx)("p",{children:"Min"}),Object(c.jsxs)("p",{children:[n,"\xb0"]})]}),Object(c.jsxs)("div",{className:"card-items-internos",children:[Object(c.jsx)("p",{children:"Max"}),Object(c.jsxs)("p",{children:[t,"\xb0"]})]}),Object(c.jsx)("div",{className:"card-items-internos",children:Object(c.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+a+"@2x.png",width:"80",height:"80",alt:""})})]})]})]})}function m(e){var n=e.cities,t=e.onClose;return console.log("onClose",t),n?Object(c.jsx)("div",{className:"cards",children:n.map((function(e){return Object(c.jsx)(j,{max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return t(e.id)},id:e.id})}))}):Object(c.jsx)("div",{children:"Sin ciudades"})}var h=function(){var e=Object(i.useState)([]),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"App del Clima"}),Object(c.jsx)("p",{children:"Escriba alguna ciudad en el buscador para conocer la temperatura."}),Object(c.jsx)(u,{onSearch:function(e){console.log("ciudad",e),fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat("5b709346262108a1389e88c72facf8e6")).then((function(e){return e.json()})).then((function(n){if(void 0!==n.main){var t={min:Math.round(n.main.temp_min),max:Math.round(n.main.temp_max),img:n.weather[0].icon,id:n.id,wind:n.wind.speed,temp:n.main.temp,name:n.name,weather:n.weather[0].main,clouds:n.clouds.all,latitud:n.coord.lat,longitud:n.coord.lon};a((function(e){return[].concat(Object(o.a)(e),[t])}))}else alert(e+" no se encuentra")}))}}),Object(c.jsx)(m,{cities:t,onClose:function(e){a((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.b39b69c6.chunk.js.map