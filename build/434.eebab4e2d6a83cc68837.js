"use strict";(self.webpackChunksocial_group=self.webpackChunksocial_group||[]).push([[434],{3434:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var r=t(4848),a=t(7101),o=t(6142),l=t(895),c=t(6540);var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)},u=(0,c.memo)((function(e){var n=e.className,t=e.value,o=e.onChange,l=e.type,u=void 0===l?"text":l,s=e.placeholder,f=e.autofocus,d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["className","value","onChange","type","placeholder","autofocus"]),p=(0,c.useRef)(null),v=(0,c.useState)(!1),h=v[0],y=v[1],m=(0,c.useState)(0),b=m[0],g=m[1];return(0,c.useEffect)((function(){var e;f&&(y(!0),null===(e=p.current)||void 0===e||e.focus())}),[f]),(0,r.jsxs)("div",i({className:(0,a.x)("LuFDUWoP",{},[n])},{children:[s&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(s," >")})),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:p,type:u,value:t,onChange:function(e){null==o||o(e.target.value),g(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){y(!0)},onBlur:function(){y(!1)},onSelect:function(e){var n;g((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)}},d)),h&&(0,r.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*b,"px")}})]}))]}))})),s=t(9966);const f={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var d,p=function(){return p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},p.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(d||(d={}));var v=(0,c.memo)((function(e){var n,t=e.className,o=e.text,l=e.title,c=e.theme,i=void 0===c?d.PRIMARY:c;return(0,r.jsxs)("div",p({className:(0,a.x)(f.Text,(n={},n[f[i]]=!0,n),[t])},{children:[l&&(0,r.jsx)("p",p({className:f.title},{children:l})),o&&(0,r.jsx)("p",p({className:f.text},{children:o}))]}))})),h=t(3286),y=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.username)||""},m=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.password)||""},b=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.isLoading)||!1},g=function(e){var n;return null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.error},x=t(493),w=t(3889),j=t(1398),O=(0,x.zD)("login/loginByUsername",(function(e,n){return t=void 0,r=void 0,o=function(){var t,r,a,o,l;return function(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(l=0)),l;)try{if(t=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,r=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){l=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){l.label=c[1];break}if(6===c[0]&&l.label<a[1]){l.label=a[1],a=c;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(c);break}a[2]&&l.ops.pop(),l.trys.pop();continue}c=n.call(e,l)}catch(e){c=[6,e],r=0}finally{t=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(c){switch(c.label){case 0:t=n.extra,r=n.dispatch,a=n.rejectWithValue,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,t.api.post("/login",e)];case 2:if(!(o=c.sent()).data)throw new Error;return localStorage.setItem(j.P,JSON.stringify(o.data)),r(w.Xp.setAuthData(o.data)),[2,o.data];case 3:return l=c.sent(),console.error(l),[2,a("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,n){function l(e){try{i(o.next(e))}catch(e){n(e)}}function c(e){try{i(o.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}i((o=o.apply(t,r||[])).next())}));var t,r,a,o})),N=(0,x.Z0)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(O.fulfilled,(function(e,n){e.isLoading=!1})).addCase(O.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),P=N.actions,k=N.reducer;const C="PQPa1eB5";var S=function(){return S=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},S.apply(this,arguments)},E={loginForm:k};const R=(0,c.memo)((function(e){var n=e.className,t=e.onSuccess,i=(0,o.B)().t,f=(0,s.wA)(),p=(0,s.d4)(y),x=(0,s.d4)(m),w=(0,s.d4)(b),j=(0,s.d4)(g),N=(0,c.useCallback)((function(e){f(P.setUsername(e))}),[f]),k=(0,c.useCallback)((function(e){f(P.setPassword(e))}),[f]),R=(0,c.useCallback)((function(){return e=void 0,n=void 0,a=function(){return function(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(l=0)),l;)try{if(t=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,r=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){l=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){l.label=c[1];break}if(6===c[0]&&l.label<a[1]){l.label=a[1],a=c;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(c);break}a[2]&&l.ops.pop(),l.trys.pop();continue}c=n.call(e,l)}catch(e){c=[6,e],r=0}finally{t=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(e){switch(e.label){case 0:return[4,f(O({username:p,password:x}))];case 1:return"fulfilled"===e.sent().meta.requestStatus&&t(),[2]}}))},new((r=void 0)||(r=Promise))((function(t,o){function l(e){try{i(a.next(e))}catch(e){o(e)}}function c(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,c)}i((a=a.apply(e,n||[])).next())}));var e,n,r,a}),[t,f,x,p]);return(0,r.jsx)(h.H,S({removeAfterUnmount:!0,reducers:E},{children:(0,r.jsxs)("div",S({className:(0,a.x)("xYNEfcE9",{},[n])},{children:[(0,r.jsx)(v,{title:i("Форма авторизации")}),j&&(0,r.jsx)(v,{text:i("Вы ввели неверный логин или пароль"),theme:d.ERROR}),(0,r.jsx)(u,{autofocus:!0,type:"text",className:C,placeholder:i("Введите username"),onChange:N,value:p}),(0,r.jsx)(u,{type:"text",className:C,placeholder:i("Введите пароль"),onChange:k,value:x}),(0,r.jsx)(l.$n,S({theme:l.Ox.OUTLINE,className:"Ok_5amJo",onClick:R,disabled:w},{children:i("Войти")}))]}))}))}))},3286:(e,n,t)=>{t.d(n,{H:()=>l});var r=t(4848),a=t(6540),o=t(9966),l=function(e){var n=e.children,t=e.reducers,l=e.removeAfterUnmount,c=(0,o.Pj)(),i=(0,o.wA)();return(0,a.useEffect)((function(){return Object.entries(t).forEach((function(e){var n=e[0],t=e[1];c.reducerManager.add(n,t),i({type:"@INIT ".concat(n," reducer")})})),function(){l&&Object.entries(t).forEach((function(e){var n=e[0];e[1],c.reducerManager.remove(n),i({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,r.jsx)(r.Fragment,{children:n})}}}]);