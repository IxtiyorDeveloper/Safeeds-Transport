"use strict";(self.webpackChunklogistics=self.webpackChunklogistics||[]).push([[891],{29396:function(n,t,e){e.d(t,{z:function(){return s}});var r=e(74165),o=e(1413),a=e(15861),u=e(74569),i=e.n(u),c=e(35625),s="http://safeeds.us/api/",l=i().create({baseURL:s});l.interceptors.request.use(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.headers.Authorization="Bearer ".concat((0,c.ej)()),t.headers=(0,o.Z)((0,o.Z)({},t.headers),{},{"Content-Type":"application/json"}),n.abrupt("return",t);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),(function(n){return Promise.reject(n.response)})),l.interceptors.response.use((function(n){return n}),(function(n){return Promise.reject(n.response)})),t.Z=l},46930:function(n,t,e){e.d(t,{Z:function(){return j}});var r,o,a,u,i=e(1413),c=e(29439),s=e(44925),l=e(72791),d=e(23695),f=e(10215),p=e(77106),v=e(79286),h=e(30168),Z=e(16444),m=Z.ZP.div(r||(r=(0,h.Z)(["\n  .avatar-uploader > .ant-upload {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    overflow: hidden;\n  }\n"]))),x=Z.ZP.div(o||(o=(0,h.Z)(["\n  background-color: ",";\n  z-index: 100;\n"])),(function(n){return n.forEdit?"rgba(0,0,0,0.9)":"transparent"})),g=Z.ZP.div(a||(a=(0,h.Z)(["\n  background-color: white;\n"]))),w=Z.ZP.img(u||(u=(0,h.Z)(["\n  width: 50%;\n  z-index: 10;\n  height: 100%;\n  object-position: center !important;\n  object-fit: cover !important;\n"]))),b=e(51570),y=e(80184),k=["onSetImage","url","forEdit","imgLoading","isCreate"];function S(n){var t="image/jpeg"===n.type||"image/png"===n.type;return t||d.ZP.error("You can only upload images file!"),t}var j=function(n){var t=n.onSetImage,e=n.url,r=n.forEdit,o=n.imgLoading,a=n.isCreate,u=void 0!==a&&a,d=(0,s.Z)(n,k),h=(0,l.useState)(!1),Z=(0,c.Z)(h,2),j=Z[0],E=Z[1],C=(0,l.useState)(e),P=(0,c.Z)(C,2),F=P[0],M=P[1],L=(0,b.kR)({onSuccess:function(){console.log("success")},onError:function(n){console.log("err",n)}}),N=(0,y.jsxs)(g,{children:[(u?(!u||(null===L||void 0===L?void 0:L.isLoading))&&o:(null===L||void 0===L?void 0:L.isLoading)||o)?(0,y.jsx)(p.Z,{}):(0,y.jsx)(v.Z,{}),(0,y.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,l.useEffect)((function(){var n,e,r;null!==L&&void 0!==L&&L.data&&t(null===L||void 0===L||null===(n=L.data)||void 0===n||null===(e=n.data)||void 0===e||null===(r=e.result)||void 0===r?void 0:r.url)}),[L]),(0,y.jsx)(m,(0,i.Z)((0,i.Z)({},d),{},{children:(0,y.jsx)(f.Z,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:S,onChange:function(n){var t=new FormData;"uploading"!==n.file.status&&"done"===n.file.status&&(!function(n,t){var e=new FileReader;e.addEventListener("load",(function(){return t(e.result)})),e.readAsDataURL(n)}(n.file.originFileObj,(function(n){M(n),E(!0)})),t.append("file",n.file.originFileObj),L.mutate(t))},customRequest:function(n){n.file;var t=n.onSuccess;setTimeout((function(){t("ok")}),0)},disabled:!r,accept:"image/*",children:(0,y.jsx)(x,{forEdit:r,children:!F&&!e||o||null!==L&&void 0!==L&&L.isLoading?N:(0,y.jsx)(w,{src:j?F:e,alt:"avatar",height:"100px"})})})}))}},64258:function(n,t,e){e.d(t,{Z:function(){return p}});var r,o,a,u=e(3515),i=e(30168),c=e(16444),s=c.ZP.div(r||(r=(0,i.Z)([""]))),l=c.ZP.div(o||(o=(0,i.Z)(["\n  margin: 0 5px;\n  cursor: pointer;\n  transition: all 0.4s ease;\n  display: inline-block;\n\n  & > span {\n    font-size: 20px;\n  }\n\n  &:hover {\n    opacity: 0.6;\n    transform: scale(1.05);\n  }\n"]))),d=c.ZP.span(a||(a=(0,i.Z)(["\n   position: relative;\n"]))),f=e(80184),p=function(n){var t=n.tabs,e=n.index,r=n.tabRightContent,o=n.setIndex,a={right:null===r||void 0===r?void 0:r.map((function(n,t){return(0,f.jsx)(d,{children:(0,f.jsx)(l,{onClick:function(){var t;return null===n||void 0===n||null===(t=n.onClick)||void 0===t?void 0:t.call(n)},children:n.icon},t)},t)}))};return(0,f.jsx)(s,{children:(0,f.jsx)(u.Z,{animated:!0,activeKey:e.toString(),onChange:function(n){return o(parseInt(n))},tabBarExtraContent:a,children:t.map((function(n,t){return(0,f.jsx)(u.Z.TabPane,{tab:n.title,children:n.content},t)}))})})}},51570:function(n,t,e){e.d(t,{ug:function(){return h},lN:function(){return v},QZ:function(){return x},hC:function(){return F},Gx:function(){return m},yG:function(){return P},rg:function(){return E},FL:function(){return j},lB:function(){return L},P0:function(){return Z},Oe:function(){return C},kR:function(){return g}});e(17834);var r=e(74165),o=e(15861),a=e(91933),u=e(57689),i=e(29396),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/article");case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/article/".concat(t));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.put("/article/".concat(t),e);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.delete("/article/".concat(t));case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.post("/article",t);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.post("/image-upload",t);case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){return(0,a.useQuery)(["rates"],(function(){return c()}))},h=function(){var n=(0,u.UO)().id;return(0,a.useQuery)(["rate",n],(function(){return s(n)}),{enabled:!!n})},Z=function(n){var t=n.onSuccess,e=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(n){return l(r,n)}),{onSuccess:t,onError:e})},m=function(n){var t=n.onSuccess,e=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(){return d(r)}),{onSuccess:t,onError:e})},x=function(n){var t=n.onSuccess,e=n.onError;return(0,a.useMutation)((function(n){return f(n)}),{onSuccess:t,onError:e})},g=function(n){var t=n.onSuccess,e=n.onError;return(0,a.useMutation)((function(n){return p(n)}),{onSuccess:t,onError:e})},w=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/satisfied");case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),b=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/satisfied/".concat(t));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),n.t0;case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t,e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.put("/satisfied/".concat(t),e);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t,e){return n.apply(this,arguments)}}(),k=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.delete("/satisfied/".concat(t));case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),S=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.post("/satisfied",t);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),j=function(){return(0,a.useQuery)(["satisfieds"],(function(){return w()}))},E=function(){var n=(0,u.UO)().id;return(0,a.useQuery)(["satisfied",n],(function(){return b(n)}),{enabled:!!n})},C=function(n){var t=n.onSuccess,e=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(n){return y(r,n)}),{onSuccess:t,onError:e})},P=function(n){var t=n.onSuccess,e=n.onError,r=(0,u.UO)().id;return(0,a.useMutation)((function(){return k(r)}),{onSuccess:t,onError:e})},F=function(n){var t=n.onSuccess,e=n.onError;return(0,a.useMutation)((function(n){return S(n)}),{onSuccess:t,onError:e})},M=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.post("/email/send",t);case 3:n.next=8;break;case 5:throw n.prev=5,n.t0=n.catch(0),n.t0;case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(t){return n.apply(this,arguments)}}(),L=function(n){var t=n.onSuccess,e=n.onError;return(0,a.useMutation)((function(n){return M(n)}),{onSuccess:t,onError:e})}},17834:function(n,t,e){e.d(t,{z:function(){return c}});var r=e(74165),o=e(15861),a=e(91933),u=e(29396),i=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.post("/auth/login",null===t||void 0===t?void 0:t.data);case 3:e=n.sent,null===t||void 0===t||t.dispatch({type:"user/login",payload:null===e||void 0===e?void 0:e.data}),n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(0),n.t0.response;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),c=function(n){var t=n.onSuccess,e=n.onError;return(0,a.useMutation)((function(n){return i(n)}),{onSuccess:t,onError:e})}},13891:function(n,t,e){e.r(t);var r=e(29439),o=e(72791),a=e(51570),u=e(11095),i=e(70478),c=e(37083),s=e(66106),l=e(30914),d=e(68678),f=e(87309),p=e(51802),v=e(72010),h=e(199),Z=e.n(h),m=e(1701),x=e.n(m),g=e(46930),w=e(29396),b=e(9085),y=e(35796),k=e(82622),S=e(64258),j=e(57689),E=e(80184);t.default=function(n){var t,e=(0,o.useState)(),h=(0,r.Z)(e,2),m=h[0],C=h[1],P=(0,a.rg)(),F=P.data,M=P.isLoading,L=(0,o.useState)(""),N=(0,r.Z)(L,2),O=N[0],U=N[1],I=(0,o.useState)(0),A=(0,r.Z)(I,2),R=A[0],z=A[1],T=u.Z.useForm(),B=(0,r.Z)(T,1)[0],q=(0,j.s0)(),Q=(0,a.Oe)({onSuccess:function(){b.Am.success("Successfully updated")},onError:function(n){console.log(n)}}),G=(0,a.yG)({onSuccess:function(){b.Am.success("Successfully deleted"),q("/satisfied-customers")},onError:function(n){var t;b.Am.error(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.error)}}),D=x()(null!==(t=null===m||void 0===m?void 0:m.comment)&&void 0!==t?t:""),V=D.contentBlocks,W=D.entityMap,K=v.ContentState.createFromBlockArray(V,W),Y=(0,o.useState)((function(){return v.EditorState.createWithContent(K)})),H=(0,r.Z)(Y,2),J=H[0],X=H[1];return(0,o.useEffect)((function(){var n,t,e,r,o,a,u;B.setFieldsValue(null===F||void 0===F||null===(n=F.data)||void 0===n?void 0:n.data),C(null===F||void 0===F||null===(t=F.data)||void 0===t?void 0:t.data),U(null===F||void 0===F||null===(e=F.data)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.icon);var i=x()(null!==(o=null===F||void 0===F||null===(a=F.data)||void 0===a||null===(u=a.data)||void 0===u?void 0:u.commment)&&void 0!==o?o:""),c=i.contentBlocks,s=i.entityMap,l=v.ContentState.createFromBlockArray(c,s);X(v.EditorState.createWithContent(l))}),[F,B]),(0,E.jsx)(S.Z,{index:R,setIndex:z,tabs:[{title:"Satisfied Customer",content:(0,E.jsx)(c.Z,{spinning:M,children:(0,E.jsx)("div",{children:(0,E.jsxs)(u.Z,{name:"basic",initialValues:{remember:!0},onFinish:function(n){Q.mutate({commment:Z()((0,v.convertToRaw)(J.getCurrentContent())).toString(),name:null===n||void 0===n?void 0:n.name,star:null===n||void 0===n?void 0:n.star,icon:O})},onFinishFailed:function(n){console.log("Failed:",n)},autoComplete:"off",layout:"vertical",form:B,children:[(0,E.jsxs)(s.Z,{gutter:[20,20],className:"alce",children:[(0,E.jsx)(l.Z,{span:4,children:(0,E.jsx)(g.Z,{onSetImage:function(n){return U(n)},url:"".concat(w.z,"/").concat(O),forEdit:!0,imgLoading:!O})}),(0,E.jsx)(l.Z,{span:9,children:(0,E.jsx)(u.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:(0,E.jsx)(d.Z,{})})}),(0,E.jsx)(l.Z,{span:9,children:(0,E.jsx)("div",{children:(0,E.jsx)(u.Z.Item,{label:"Star",name:"star",rules:[{required:!0,message:"Please input your star!"}],children:(0,E.jsx)(d.Z,{type:"number"})})})})]}),(0,E.jsx)(s.Z,{children:(0,E.jsx)(u.Z.Item,{label:"Comment",name:"commment",rules:[{required:!0,message:"Please input your comment!"}],children:(0,E.jsx)(p.Editor,{editorState:J,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(n){X(n)},toolbar:{options:["inline","blockType","fontSize","fontFamily","list","textAlign","colorPicker","link","embedded","emoji","image","remove","history"],colorPicker:{popupClassName:"colorModal"},link:{popupClassName:"colorModal"},image:{popupClassName:"colorModal"}}})})}),(0,E.jsx)(u.Z.Item,{children:(0,E.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:null===Q||void 0===Q?void 0:Q.isLoading,children:"Submit"})})]})})})}],tabRightContent:[{icon:(0,E.jsx)(k.Z,{}),onClick:function(){i.Z.confirm({centered:!0,title:"Are you sure to delete?",icon:(0,E.jsx)(y.Z,{}),onOk:function(){G.mutate()}})}}]})}}}]);
//# sourceMappingURL=891.8544918c.chunk.js.map