"use strict";(self.webpackChunksocial_group=self.webpackChunksocial_group||[]).push([[445],{"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls,mods,additional){return[cls].concat(_toConsumableArray(additional.filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var _ref2=_slicedToArray(_ref,2),value=(_ref2[0],_ref2[1]);return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,P:()=>ThemeButtonEnum});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.A,options);const Button_Button_module=Button_module.A&&Button_module.A.locals?Button_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ThemeButtonEnum=function(ThemeButtonEnum){return ThemeButtonEnum.CLEAR="clear",ThemeButtonEnum.OUTLINE="outline",ThemeButtonEnum}({}),Button=function Button(_ref){var className=_ref.className,children=_ref.children,theme=_ref.theme,restProps=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:(0,classNames.x)(Button_Button_module.Button,{},[className,Button_Button_module[theme]])},restProps),{},{children}))};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"ThemeButtonEnum"},description:""}},composes:["ButtonHTMLAttributes"]}},"./src/widgets/PageError/ui/PageError.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageError_stories});__webpack_require__("./node_modules/react/index.js");var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageError_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PageError_module.A,options);const ui_PageError_module=PageError_module.A&&PageError_module.A.locals?PageError_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PageError=function PageError(_ref){var className=_ref.className,t=(0,useTranslation.B)().t,navigate=(0,dist.Zp)();return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)(ui_PageError_module.PageError,{},[className]),children:[(0,jsx_runtime.jsx)("p",{children:t("Произошла непредвиденная ошибка")}),(0,jsx_runtime.jsx)(Button.$,{onClick:function handleReloadPage(){navigate(0)},children:t("Обновить страницу")})]})};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}PageError.__docgenInfo={description:"",methods:[],displayName:"PageError",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const PageError_stories={title:"widget/PageError",component:PageError,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(PageError,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))},Light=Template.bind({});Light.args={};var Dark=Template.bind({});Dark.args={},Dark.decorators=[(0,ThemeDecorator.n)(ThemeProvider.Sx.DARK)],Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"args => <PageError {...args} />",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"args => <PageError {...args} />",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Light","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--inverted-primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;margin:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;border:1px solid var(--primary-color);color:var(--primary-color);background:none}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACI,cAAA,CACA,mCAAA,CAGJ,kDACI,SAAA,CACA,QAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGJ,oDACI,iBAAA,CACA,qCAAA,CACA,0BAAA,CACA,eAAA",sourcesContent:[".Button {\n    cursor: pointer;\n    color: var(--inverted-primary-color);\n}\n\n.clear {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background: none;\n    outline: none;\n}\n\n.outline {\n    padding: 10px 15px;\n    border: 1px solid var(--primary-color);\n    color: var(--primary-color);\n    background: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-PageError-ui-PageError-module__PageError--HSFBb{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}","",{version:3,sources:["webpack://./src/widgets/PageError/ui/PageError.module.scss"],names:[],mappings:"AAAA,6DACI,UAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:[".PageError {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={PageError:"src-widgets-PageError-ui-PageError-module__PageError--HSFBb"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react-i18next/dist/es/useTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{B:()=>useTranslation});var react=__webpack_require__("./node_modules/react/index.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,toPropertyKey(descriptor.key),descriptor)}}var matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=function unescapeHtmlEntity(m){return htmlEntities[m]};var i18nInstance,defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function unescape(text){return text.replace(matchHtmlEntity,unescapeHtmlEntity)}},I18nContext=(0,react.createContext)();var ReportNamespaces=function(){function ReportNamespaces(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ReportNamespaces),this.usedNamespaces={}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ReportNamespaces,[{key:"addUsedNamespaces",value:function addUsedNamespaces(namespaces){var _this=this;namespaces.forEach((function(ns){_this.usedNamespaces[ns]||(_this.usedNamespaces[ns]=!0)}))}},{key:"getUsedNamespaces",value:function getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}]),ReportNamespaces}();function getI18n(){return i18nInstance}function warn(){if(console&&console.warn){for(var _console,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]="react-i18next:: ".concat(args[0])),(_console=console).warn.apply(_console,args)}}var alreadyWarned={};function warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),warn.apply(void 0,args))}function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,(function(){if(i18n.isInitialized)cb();else{i18n.on("initialized",(function initialized(){setTimeout((function(){i18n.off("initialized",initialized)}),0),cb()}))}}))}function useTranslation_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function useTranslation_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?useTranslation_ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):useTranslation_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var usePrevious=function usePrevious(value,ignore){var ref=(0,react.useRef)();return(0,react.useEffect)((function(){ref.current=ignore?ref.current:value}),[value,ignore]),ref.current};function useTranslation(ns){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i18nFromProps=props.i18n,_ref=(0,react.useContext)(I18nContext)||{},i18nFromContext=_ref.i18n,defaultNSFromContext=_ref.defaultNS,i18n=i18nFromProps||i18nFromContext||getI18n();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){warnOnce("You will need to pass in an i18next instance by using initReactI18next");var notReadyT=function notReadyT(k){return Array.isArray(k)?k[k.length-1]:k},retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var i18nOptions=useTranslation_objectSpread(useTranslation_objectSpread(useTranslation_objectSpread({},function getDefaults(){return defaultOptions}()),i18n.options.react),props),useSuspense=i18nOptions.useSuspense,keyPrefix=i18nOptions.keyPrefix,namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);var ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((function(n){return function hasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{precheck:function precheck(i18nInstance,loadNotPending){if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;var loadNotPending=function loadNotPending(l,n){var loadState=i18n.services.backendConnector.state["".concat(l,"|").concat(n)];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions)}));function getT(){return i18n.getFixedT(null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix)}var _useState2=_slicedToArray((0,react.useState)(getT),2),t=_useState2[0],setT=_useState2[1],joinedNS=namespaces.join(),previousJoinedNS=usePrevious(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){var bindI18n=i18nOptions.bindI18n,bindI18nStore=i18nOptions.bindI18nStore;function boundReset(){isMounted.current&&setT(getT)}return isMounted.current=!0,ready||useSuspense||loadNamespaces(i18n,namespaces,(function(){isMounted.current&&setT(getT)})),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),function(){isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((function(e){return i18n.off(e,boundReset)})),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((function(e){return i18n.store.off(e,boundReset)}))}}),[i18n,joinedNS]);var isInitial=(0,react.useRef)(!0);(0,react.useEffect)((function(){isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n,keyPrefix]);var ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((function(resolve){loadNamespaces(i18n,namespaces,(function(){resolve()}))}))}}}]);