"use strict";(self.webpackChunklogistics=self.webpackChunklogistics||[]).push([[337],{29396:function(n,e,t){t.d(e,{z:function(){return s}});var r=t(74165),c=t(1413),a=t(15861),u=t(74569),i=t.n(u),o=t(35625),s="http://67.205.154.71/api",l=i().create({baseURL:s});l.interceptors.request.use(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.headers.Authorization="Bearer ".concat((0,o.ej)()),e.headers=(0,c.Z)((0,c.Z)({},e.headers),{},{"Content-Type":"application/json"}),n.abrupt("return",e);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(n){return Promise.reject(n.response)})),l.interceptors.response.use((function(n){return n}),(function(n){return Promise.reject(n.response)})),e.Z=l},12003:function(n,e,t){t.d(e,{Z:function(){return c}});t(72791);var r=t(80184);var c=function(n){var e=n.title,t=n.onClick,c=n.size,a=void 0===c?"24px":c;return(0,r.jsx)("div",{style:{fontSize:a},className:"ubutton",onClick:t,children:e})}},13770:function(n,e,t){var r=t(29439),c=t(72791),a=t(83734),u=t(37083),i=t(69421),o=t(48573),s=t.n(o),l=t(80184);e.Z=function(n){var e=n.fetchOptions,t=n.afterFetch,o=n.debounceTimeout,d=void 0===o?400:o,v=n.placeholder,p=n.setD,f=n.setP,h=n.type,x=n.defaultValue,Z=(0,c.useState)(!1),m=(0,r.Z)(Z,2),w=m[0],j=m[1],g=(0,c.useState)([]),N=(0,r.Z)(g,2),y=N[0],b=N[1],S=(0,c.useRef)(0),k=(0,c.useState)(void 0),E=(0,r.Z)(k,2),D=E[0],O=E[1],C=(0,c.useMemo)((function(){return s()((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";S.current+=1;var r=S.current;b([]),j(!0),e(n).then((function(n){r===S.current&&(b(n),null===t||void 0===t||t(y[0]),j(!1))}))}),d)}),[d,e,t,y]);return(0,l.jsx)(a.Z,{showSearch:!0,className:"sl",style:{width:"100%",height:"40px"},placeholder:v,allowClear:!0,filterOption:!1,onSearch:C,onFocus:function(){return!y.length&&C("")},notFoundContent:w?(0,l.jsx)(u.Z,{size:"small"}):(0,l.jsx)(i.Z,{}),options:y,onChange:function(n){O(n),"pickup"===h&&f(n),"delivery"===h&&p(n)},value:D,defaultValue:x})}},85898:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(29439),c=t(72791),a=t(73231),u=t(12003),i=t(13770),o=t(66744),s=t(80184);var l=function(n){n.setStep;var e=(0,c.useState)("Open"),t=(0,r.Z)(e,2),l=t[0],d=t[1];return(0,s.jsxs)("div",{className:"mcard",children:[(0,s.jsx)("div",{className:"qu",children:"Start your free quote"}),(0,s.jsxs)("div",{className:"inputs",children:[(0,s.jsxs)("div",{className:"on1",children:[(0,s.jsx)("div",{className:"t1",children:"Origin State"}),(0,s.jsx)(i.Z,{fetchOptions:function(n){return(0,o.r)(n,"zipcode")},placeholder:"ENTER ZIP CODE OR CITY"})]}),(0,s.jsxs)("div",{className:"on2",children:[(0,s.jsx)("div",{className:"t1",children:"Destination"}),(0,s.jsx)(i.Z,{fetchOptions:function(n){return(0,o.r)(n,"zipcode")},placeholder:"ENTER ZIP CODE OR CITY"})]}),(0,s.jsxs)("div",{className:"txt",children:[(0,s.jsxs)("div",{className:"t1",children:["Select ",(0,s.jsx)("span",{children:"Transport Type"})]}),(0,s.jsx)("div",{className:"rd",children:(0,s.jsxs)(a.ZP.Group,{onChange:function(n){d(n.target.value)},value:l,children:[(0,s.jsx)(a.ZP,{value:"Open",children:"Open"}),(0,s.jsx)(a.ZP,{value:"Enclosed",children:"Enclosed"})]})})]}),(0,s.jsx)("div",{className:"on3",children:(0,s.jsx)(u.Z,{title:"Continue",type:"primary",onClick:function(){}})})]})]})};var d=function(n){var e=(0,c.useState)("f1"),t=(0,r.Z)(e,2),a=t[0],u=t[1],i=function(){return{f1:(0,s.jsx)(l,{setStep:u}),f2:(0,s.jsx)("div",{children:"some"}),f3:(0,s.jsx)("div",{children:"some 2"})}[a]};return(0,s.jsx)(i,{})}},79919:function(n,e,t){t.d(e,{ug:function(){return h},lN:function(){return f},QZ:function(){return m},hC:function(){return O},Gx:function(){return Z},yG:function(){return D},rg:function(){return k},FL:function(){return S},P0:function(){return x},Oe:function(){return E},kR:function(){return w}});t(17834);var r=t(74165),c=t(15861),a=t(91933),u=t(57689),i=t(29396),o=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/article");case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/article/".concat(e));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.put("/article/".concat(e),t);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.delete("/article/".concat(e));case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.post("/article",e);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.post("/image-upload",e);case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){return(0,a.useQuery)(["rates"],(function(){return o()}))},h=function(){var n=(0,u.UO)().id;return(0,a.useQuery)(["rate",n],(function(){return s(n)}),{enabled:!!n})},x=function(n){var e=n.onSuccess,t=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(n){return l(r,n)}),{onSuccess:e,onError:t})},Z=function(n){var e=n.onSuccess,t=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(){return d(r)}),{onSuccess:e,onError:t})},m=function(n){var e=n.onSuccess,t=n.onError;return(0,a.useMutation)((function(n){return v(n)}),{onSuccess:e,onError:t})},w=function(n){var e=n.onSuccess,t=n.onError;return(0,a.useMutation)((function(n){return p(n)}),{onSuccess:e,onError:t})},j=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/satisfied");case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/satisfied/".concat(e));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),N=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.put("/satisfied/".concat(e),t);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e,t){return n.apply(this,arguments)}}(),y=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.delete("/satisfied/".concat(e));case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.post("/satisfied",e);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}(),S=function(){return(0,a.useQuery)(["satisfieds"],(function(){return j()}))},k=function(){var n=(0,u.UO)().id;return(0,a.useQuery)(["satisfied",n],(function(){return g(n)}),{enabled:!!n})},E=function(n){var e=n.onSuccess,t=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(n){return N(r,n)}),{onSuccess:e,onError:t})},D=function(n){var e=n.onSuccess,t=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(){return y(r)}),{onSuccess:e,onError:t})},O=function(n){var e=n.onSuccess,t=n.onError;return(0,a.useMutation)((function(n){return b(n)}),{onSuccess:e,onError:t})}},17834:function(n,e,t){t.d(e,{z:function(){return o}});var r=t(74165),c=t(15861),a=t(91933),u=t(29396),i=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.post("/auth/login",null===e||void 0===e?void 0:e.data);case 3:t=n.sent,null===e||void 0===e||e.dispatch({type:"user/login",payload:null===t||void 0===t?void 0:t.data}),n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(0),n.t0.response;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),o=function(n){var e=n.onSuccess,t=n.onError;return(0,a.useMutation)((function(n){return i(n)}),{onSuccess:e,onError:t})}},20961:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});t(72791);var r=t.p+"static/media/banner.0f8697c9ef9d7473098a.webp",c=t(39126),a=t(78820),u=t(80184);var i=function(n){var e,t=n.article,i=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data;return(0,u.jsx)("div",{className:"bbanner",style:{backgroundImage:'url("'.concat(r,'")')},children:(0,u.jsx)("div",{className:"bg",children:(0,u.jsxs)("div",{className:"con",children:[(0,u.jsx)("div",{className:"title",children:null===i||void 0===i?void 0:i.title}),(0,u.jsxs)("div",{className:"nrw",children:[(0,u.jsxs)("div",{className:"name",children:[(0,u.jsx)(c._Tb,{})," ",null===i||void 0===i?void 0:i.name]}),(0,u.jsxs)("div",{className:"date",children:[(0,u.jsx)(a.xHR,{}),"".concat(new Date(null===i||void 0===i?void 0:i.createdAt).getUTCFullYear(),"-").concat(new Date(null===i||void 0===i?void 0:i.createdAt).getMonth()>9?new Date(null===i||void 0===i?void 0:i.createdAt).getMonth():"0".concat(new Date(null===i||void 0===i?void 0:i.createdAt).getMonth()),"-").concat(new Date(null===i||void 0===i?void 0:i.createdAt).getDate()>9?new Date(null===i||void 0===i?void 0:i.createdAt).getDate():"0".concat(new Date(null===i||void 0===i?void 0:i.createdAt).getDate()),"\n                            ")]})]})]})})})},o=t(85898),s=t(29396),l=t(79919),d=t(37083);var v=function(n){var e,t,r,c,a,i=n.article,v=null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.data,p=null===v||void 0===v||null===(t=v.body)||void 0===t?void 0:t.split(/\./);null===p||void 0===p||p.shift();var f=null===p||void 0===p?void 0:p.join(". "),h=(0,l.lN)(),x=h.data,Z=h.isLoading;return(0,u.jsx)(d.Z,{spinning:Z,children:(0,u.jsxs)("div",{className:"text-section pd",children:[(0,u.jsxs)("div",{className:"iancard",children:[(0,u.jsx)("div",{className:"iwr",children:(0,u.jsx)("img",{src:"".concat(s.z,"/").concat(null===v||void 0===v?void 0:v.image),alt:"images"})}),(0,u.jsx)("div",{className:"cwr",children:(0,u.jsx)(o.Z,{})})]}),(0,u.jsxs)("div",{className:"iancard",children:[(0,u.jsxs)("div",{className:"iwr",children:[(0,u.jsx)("div",{className:"title",dangerouslySetInnerHTML:{__html:"".concat(null===v||void 0===v||null===(r=v.body)||void 0===r?void 0:r.split(".",1)[0],".")}}),(0,u.jsx)("div",{className:"body",dangerouslySetInnerHTML:{__html:"".concat(f,".")}})]}),(0,u.jsxs)("div",{className:"cwr",children:[(0,u.jsx)("div",{className:"t12",children:"RECENT POST"}),(0,u.jsx)("div",{className:"posts",children:(0,u.jsx)("ul",{children:null===x||void 0===x||null===(c=x.data)||void 0===c||null===(a=c.data)||void 0===a?void 0:a.map((function(n,e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("p",{className:"lit",children:null===n||void 0===n?void 0:n.title}),(0,u.jsx)("p",{className:"lid",children:"".concat(new Date(null===n||void 0===n?void 0:n.createdAt).getUTCFullYear(),"-").concat(new Date(null===n||void 0===n?void 0:n.createdAt).getMonth()>9?new Date(null===n||void 0===n?void 0:n.createdAt).getMonth():"0".concat(new Date(null===n||void 0===n?void 0:n.createdAt).getMonth()),"-").concat(new Date(null===n||void 0===n?void 0:n.createdAt).getDate()>9?new Date(null===n||void 0===n?void 0:n.createdAt).getDate():"0".concat(new Date(null===n||void 0===n?void 0:n.createdAt).getDate()),"\n                            ")})]})}))})})]})]})]})})},p=t(20270),f=t(82436);var h=function(n){var e=(0,l.ug)(),t=e.data,r=e.isLoading;return(0,u.jsx)("div",{className:"blog",children:(0,u.jsxs)(d.Z,{spinning:r,children:[(0,u.jsx)(i,{article:t}),(0,u.jsx)(v,{article:t}),(0,u.jsx)(p.Z,{}),(0,u.jsx)(f.Z,{})]})})}},66744:function(n,e,t){t.d(e,{r:function(){return i}});var r=t(74165),c=t(15861),a=t(74569),u=t.n(a)().create({baseURL:"http://147.182.130.242:3001"}),i=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(e,t){var c,a,i,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.post("/".concat(t,"?search=").concat(e));case 3:return o=n.sent,n.abrupt("return",null===o||void 0===o||null===(c=o.data)||void 0===c||null===(a=c.city_state)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.options.map((function(n){return{value:null===n||void 0===n?void 0:n.text,label:null===n||void 0===n?void 0:n.text}})));case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=337.d418b157.chunk.js.map