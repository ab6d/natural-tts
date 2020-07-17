function _possibleConstructorReturn(e,a){return!a||"object"!=typeof a&&"function"!=typeof a?_assertThisInitialized(e):a}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&_setPrototypeOf(e,a)}function _setPrototypeOf(e,a){return(_setPrototypeOf=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IRpt:function(e,a,t){"use strict";t.r(a);var n,i,s=t("ofXK"),r=t("tyNb"),o=t("3Pt+"),m=t("fXoL"),l=t("mrSG"),d=t("tk/3"),p=((n=function(){function e(a){_classCallCheck(this,e),this.httpClient=a,this.languages={}}return _createClass(e,[{key:"getAudioContent",value:function(a,t,n){return Object(l.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var s,r,o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s={audioConfig:{audioEncoding:n,pitch:a.pitch,speakingRate:a.speed},input:{text:t,ssml:void 0},voice:{languageCode:a.locale.split("-").slice(0,2).join("-"),name:a.locale}},e.isSSML(t)&&(s.input.ssml=s.input.text,delete s.input.text),i.next=4,fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=".concat(a.apiKey),{method:"POST",body:JSON.stringify(s)});case 4:return r=i.sent,i.next=7,r.json();case 7:if(o=i.sent,!r.ok){i.next=10;break}return i.abrupt("return",o.audioContent);case 10:alert(o.error.message);case 11:case"end":return i.stop()}}),i)})))}}],[{key:"isSSML",value:function(e){return e.startsWith("<speak>")&&e.endsWith("</speak>")}},{key:"validateSettings",value:function(e){return!(!e.apiKey||!e.locale)||(alert("You must add your Google Cloud's text-to-speech API Key in the extension's popup."),!1)}}]),e}()).\u0275fac=function(e){return new(e||n)(m.Wb(d.a))},n.\u0275prov=m.Jb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),c=t("2Vo4"),f=function(e){return e.LOADING="LOADING",e.ERROR="ERROR",e.OK="OK",e}({}),u=function e(a,t){_classCallCheck(this,e),this.status=a,this.message=t},h=t("Rea6"),y=((i=function(){function e(a,t){_classCallCheck(this,e),this.httpClient=a,this.snackService=t,this._apiKey=new c.a(""),this.apiKey$=this._apiKey.asObservable(),this._apiKeyState=new c.a(new u(f.OK)),this.apiKeyState$=this._apiKeyState.asObservable();var n=localStorage.getItem("apiKey");this.verifyAndSetApiKey(n)}return _createClass(e,[{key:"verifyAndSetApiKey",value:function(e){var a=this;e&&(e.length>5&&(this.apiKeyState=new u(f.LOADING),setTimeout((function(){localStorage.setItem("apiKey",e),a.apiKeyState=new u(f.OK),a._apiKey.next(e)}),1e3)),this.apiKeyState.status!==f.LOADING&&(this.apiKeyState=new u(f.LOADING),this.httpClient.get("https://texttospeech.googleapis.com/v1beta1/voices?key="+e).subscribe((function(t){console.log(t),localStorage.setItem("apiKey",e),a._apiKey.next(e),a.apiKeyState=new u(f.OK)}),(function(e){console.log(e),a.snackService.displayError("API Key is invalid."),a.apiKeyState=new u(f.ERROR,JSON.stringify(e))}))))}},{key:"apiKey",get:function(){return this._apiKey.getValue()}},{key:"apiKeyState",get:function(){return this._apiKeyState.getValue()},set:function(e){this._apiKeyState.next(e)}}]),e}()).\u0275fac=function(e){return new(e||i)(m.Wb(d.a),m.Wb(h.a))},i.\u0275prov=m.Jb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),g=t("Wp6s"),k=t("FKr1"),b=t("8LU1"),N=t("R1ws"),v=t("nLfN");function _(e,a){if(1&e&&(m.cc(),m.Ob(0,"circle",3)),2&e){var t=m.dc();m.sc("animation-name","mat-progress-spinner-stroke-rotate-"+t.diameter)("stroke-dashoffset",t._strokeDashOffset,"px")("stroke-dasharray",t._strokeCircumference,"px")("stroke-width",t._circleStrokeWidth,"%"),m.Db("r",t._circleRadius)}}function S(e,a){if(1&e&&(m.cc(),m.Ob(0,"circle",3)),2&e){var t=m.dc();m.sc("stroke-dashoffset",t._strokeDashOffset,"px")("stroke-dasharray",t._strokeCircumference,"px")("stroke-width",t._circleStrokeWidth,"%"),m.Db("r",t._circleRadius)}}function w(e,a){if(1&e&&(m.cc(),m.Ob(0,"circle",3)),2&e){var t=m.dc();m.sc("animation-name","mat-progress-spinner-stroke-rotate-"+t.diameter)("stroke-dashoffset",t._strokeDashOffset,"px")("stroke-dasharray",t._strokeCircumference,"px")("stroke-width",t._circleStrokeWidth,"%"),m.Db("r",t._circleRadius)}}function C(e,a){if(1&e&&(m.cc(),m.Ob(0,"circle",3)),2&e){var t=m.dc();m.sc("stroke-dashoffset",t._strokeDashOffset,"px")("stroke-dasharray",t._strokeCircumference,"px")("stroke-width",t._circleStrokeWidth,"%"),m.Db("r",t._circleRadius)}}var x,O,A,K=Object(k.l)((function e(a){_classCallCheck(this,e),this._elementRef=a}),"primary"),R=new m.q("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}}),E=((A=function(e){function a(e,t,n,i,s){var r;_classCallCheck(this,a),(r=_possibleConstructorReturn(this,_getPrototypeOf(a).call(this,e)))._elementRef=e,r._document=n,r._diameter=100,r._value=0,r._fallbackAnimation=!1,r.mode="determinate";var o=a._diameters;return o.has(n.head)||o.set(n.head,new Set([100])),r._fallbackAnimation=t.EDGE||t.TRIDENT,r._noopAnimations="NoopAnimations"===i&&!!s&&!s._forceAnimations,s&&(s.diameter&&(r.diameter=s.diameter),s.strokeWidth&&(r.strokeWidth=s.strokeWidth)),r}return _inherits(a,e),_createClass(a,[{key:"ngOnInit",value:function(){var e=this._elementRef.nativeElement;this._styleRoot=function(e,a){if("undefined"!=typeof window){var t=a.head;if(t&&(t.createShadowRoot||t.attachShadow)){var n=e.getRootNode?e.getRootNode():null;if(n instanceof window.ShadowRoot)return n}}return null}(e,this._document)||this._document.head,this._attachStyleNode(),e.classList.add("mat-progress-spinner-indeterminate".concat(this._fallbackAnimation?"-fallback":"","-animation"))}},{key:"_attachStyleNode",value:function(){var e=this._styleRoot,t=this._diameter,n=a._diameters,i=n.get(e);if(!i||!i.has(t)){var s=this._document.createElement("style");s.setAttribute("mat-spinner-animation",t+""),s.textContent=this._getAnimationText(),e.appendChild(s),i||(i=new Set,n.set(e,i)),i.add(t)}}},{key:"_getAnimationText",value:function(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,"".concat(.95*this._strokeCircumference)).replace(/END_VALUE/g,"".concat(.2*this._strokeCircumference)).replace(/DIAMETER/g,"".concat(this.diameter))}},{key:"diameter",get:function(){return this._diameter},set:function(e){this._diameter=Object(b.e)(e),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}},{key:"strokeWidth",get:function(){return this._strokeWidth||this.diameter/10},set:function(e){this._strokeWidth=Object(b.e)(e)}},{key:"value",get:function(){return"determinate"===this.mode?this._value:0},set:function(e){this._value=Math.max(0,Math.min(100,Object(b.e)(e)))}},{key:"_circleRadius",get:function(){return(this.diameter-10)/2}},{key:"_viewBox",get:function(){var e=2*this._circleRadius+this.strokeWidth;return"0 0 ".concat(e," ").concat(e)}},{key:"_strokeCircumference",get:function(){return 2*Math.PI*this._circleRadius}},{key:"_strokeDashOffset",get:function(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null}},{key:"_circleStrokeWidth",get:function(){return this.strokeWidth/this.diameter*100}}]),a}(K)).\u0275fac=function(e){return new(e||A)(m.Nb(m.l),m.Nb(v.a),m.Nb(s.d,8),m.Nb(N.a,8),m.Nb(R))},A.\u0275cmp=m.Hb({type:A,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,a){2&e&&(m.Db("aria-valuemin","determinate"===a.mode?0:null)("aria-valuemax","determinate"===a.mode?100:null)("aria-valuenow","determinate"===a.mode?a.value:null)("mode",a.mode),m.sc("width",a.diameter,"px")("height",a.diameter,"px"),m.Eb("_mat-animation-noopable",a._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[m.zb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,a){1&e&&(m.cc(),m.Sb(0,"svg",0),m.tc(1,_,1,9,"circle",1),m.tc(2,S,1,7,"circle",2),m.Rb()),2&e&&(m.sc("width",a.diameter,"px")("height",a.diameter,"px"),m.ic("ngSwitch","indeterminate"===a.mode),m.Db("viewBox",a._viewBox),m.Cb(1),m.ic("ngSwitchCase",!0),m.Cb(1),m.ic("ngSwitchCase",!1))},directives:[s.l,s.m],styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),A._diameters=new WeakMap,A),T=((O=function(e){function a(e,t,n,i,s){var r;return _classCallCheck(this,a),(r=_possibleConstructorReturn(this,_getPrototypeOf(a).call(this,e,t,n,i,s))).mode="indeterminate",r}return _inherits(a,e),a}(E)).\u0275fac=function(e){return new(e||O)(m.Nb(m.l),m.Nb(v.a),m.Nb(s.d,8),m.Nb(N.a,8),m.Nb(R))},O.\u0275cmp=m.Hb({type:O,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(e,a){2&e&&(m.sc("width",a.diameter,"px")("height",a.diameter,"px"),m.Eb("_mat-animation-noopable",a._noopAnimations))},inputs:{color:"color"},features:[m.zb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,a){1&e&&(m.cc(),m.Sb(0,"svg",0),m.tc(1,w,1,9,"circle",1),m.tc(2,C,1,7,"circle",2),m.Rb()),2&e&&(m.sc("width",a.diameter,"px")("height",a.diameter,"px"),m.ic("ngSwitch","indeterminate"===a.mode),m.Db("viewBox",a._viewBox),m.Cb(1),m.ic("ngSwitchCase",!0),m.Cb(1),m.ic("ngSwitchCase",!1))},directives:[s.l,s.m],styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),O),I=((x=function e(){_classCallCheck(this,e)}).\u0275mod=m.Lb({type:x}),x.\u0275inj=m.Kb({factory:function(e){return new(e||x)},imports:[[k.d,s.c],k.d]}),x),L=t("NFeN");function P(e,a){1&e&&(m.Qb(0),m.Ob(1,"mat-spinner",6),m.Pb()),2&e&&(m.Cb(1),m.ic("diameter",20))}function j(e,a){1&e&&(m.Sb(0,"mat-icon",9),m.vc(1,"check_circle"),m.Rb())}function D(e,a){1&e&&m.Ob(0,"mat-icon")}function G(e,a){if(1&e&&(m.tc(0,j,2,0,"mat-icon",7),m.tc(1,D,1,0,"ng-template",null,8,m.uc)),2&e){var t=m.mc(2),n=m.dc();m.ic("ngIf",n.apiKeyIsValid)("ngIfElse",t)}}var M,V=((M=function(){function e(a){var t=this;_classCallCheck(this,e),this.apiKeyService=a,this.apiKeyForm=new o.c(""),this.editing=!1,this.apiKeyService.apiKey$.subscribe((function(e){t.apiKeyForm.setValue(e)}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"saveApiKey",value:function(){this.apiKeyService.verifyAndSetApiKey(this.apiKeyForm.value)}},{key:"apiKeyIsValid",get:function(){return this.apiKeyForm.value&&this.apiKeyForm.value===this.apiKeyService.apiKey}}]),e}()).\u0275fac=function(e){return new(e||M)(m.Nb(y))},M.\u0275cmp=m.Hb({type:M,selectors:[["app-api-key"]],decls:13,vars:7,consts:[[3,"routerLink"],[1,"key-input-container"],["type","text","placeholder","API Key",3,"type","formControl","click"],[3,"click"],[4,"ngIf","ngIfElse"],["check",""],["strokeWidth","4",3,"diameter"],["style","color: lightgreen",4,"ngIf","ngIfElse"],["notValid",""],[2,"color","lightgreen"]],template:function(e,a){if(1&e&&(m.Sb(0,"mat-card"),m.Sb(1,"h3"),m.vc(2,"WaveNet API Key "),m.Sb(3,"sup",0),m.vc(4,"What is this ?"),m.Rb(),m.Rb(),m.Sb(5,"div",1),m.Sb(6,"input",2),m.ac("click",(function(e){return a.editing=!0})),m.Rb(),m.Sb(7,"button",3),m.ac("click",(function(e){return a.saveApiKey()})),m.vc(8,"Save"),m.Rb(),m.tc(9,P,2,1,"ng-container",4),m.ec(10,"async"),m.tc(11,G,3,2,"ng-template",null,5,m.uc),m.Rb(),m.Rb()),2&e){var t=m.mc(12);m.Cb(3),m.ic("routerLink","/help"),m.Cb(3),m.ic("type",!a.editing&&a.apiKeyIsValid?"password":"text")("formControl",a.apiKeyForm),m.Cb(3),m.ic("ngIf","LOADING"===m.fc(10,5,a.apiKeyService.apiKeyState$).status)("ngIfElse",t)}},directives:[g.a,r.b,o.a,o.j,o.d,s.k,T,L.a],pipes:[s.b],styles:[".key-input-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}sup[_ngcontent-%COMP%]{line-height:1;font-size:.6rem;color:#71deff;text-decoration:underline;cursor:pointer}"]}),M),z={aa:{name:"Afar",displayName:"Afaraf"},ab:{name:"Abkhaz",displayName:"\u0430\u04a7\u0441\u0443\u0430 \u0431\u044b\u0437\u0448\u04d9\u0430"},ae:{name:"Avestan",displayName:"avesta"},af:{name:"Afrikaans",displayName:"Afrikaans"},ak:{name:"Akan",displayName:"Akan"},am:{name:"Amharic",displayName:"\u12a0\u121b\u122d\u129b"},an:{name:"Aragonese",displayName:"aragon\xe9s"},ar:{name:"Arabic",displayName:"Arabic"},as:{name:"Assamese",displayName:"\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"},av:{name:"Avaric",displayName:"\u0430\u0432\u0430\u0440 \u043c\u0430\u0446\u04c0"},ay:{name:"Aymara",displayName:"aymar aru"},az:{name:"Azerbaijani",displayName:"az\u0259rbaycan dili"},ba:{name:"Bashkir",displayName:"\u0431\u0430\u0448\u04a1\u043e\u0440\u0442 \u0442\u0435\u043b\u0435"},be:{name:"Belarusian",displayName:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f \u043c\u043e\u0432\u0430"},bg:{name:"Bulgarian",displayName:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"},bh:{name:"Bihari",displayName:"\u092d\u094b\u091c\u092a\u0941\u0930\u0940"},bi:{name:"Bislama",displayName:"Bislama"},bm:{name:"Bambara",displayName:"bamanankan"},bn:{name:"Bengali",displayName:"\u09ac\u09be\u0982\u09b2\u09be"},bo:{name:"Tibetan Standard",displayName:"\u0f56\u0f7c\u0f51\u0f0b\u0f61\u0f72\u0f42"},br:{name:"Breton",displayName:"brezhoneg"},bs:{name:"Bosnian",displayName:"bosanski jezik"},ca:{name:"Catalan",displayName:"catal\xe0"},ce:{name:"Chechen",displayName:"\u043d\u043e\u0445\u0447\u0438\u0439\u043d \u043c\u043e\u0442\u0442"},ch:{name:"Chamorro",displayName:"Chamoru"},co:{name:"Corsican",displayName:"corsu"},cr:{name:"Cree",displayName:"\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"},cs:{name:"Czech",displayName:"\u010de\u0161tina"},cu:{name:"Old Church Slavonic",displayName:"\u0469\u0437\u044b\u043a\u044a \u0441\u043b\u043e\u0432\u0463\u043d\u044c\u0441\u043a\u044a"},cv:{name:"Chuvash",displayName:"\u0447\u04d1\u0432\u0430\u0448 \u0447\u04d7\u043b\u0445\u0438"},cy:{name:"Welsh",displayName:"Cymraeg"},da:{name:"Danish",displayName:"dansk"},de:{name:"German",displayName:"Deutsch"},dv:{name:"Divehi",displayName:"Dhivehi"},dz:{name:"Dzongkha",displayName:"\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41"},ee:{name:"Ewe",displayName:"E\u028begbe"},el:{name:"Greek",displayName:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"},en:{name:"English",displayName:"English"},eo:{name:"Esperanto",displayName:"Esperanto"},es:{name:"Spanish",displayName:"Espa\xf1ol"},et:{name:"Estonian",displayName:"eesti"},eu:{name:"Basque",displayName:"euskara"},fa:{name:"Persian",displayName:"\u0641\u0627\u0631\u0633\u06cc"},ff:{name:"Fula",displayName:"Fulfulde"},fi:{name:"Finnish",displayName:"suomi"},fil:{name:"Filipino",displayName:"Pilipino"},fj:{name:"Fijian",displayName:"Vakaviti"},fo:{name:"Faroese",displayName:"f\xf8royskt"},fr:{name:"French",displayName:"Fran\xe7ais"},fy:{name:"Western Frisian",displayName:"Frysk"},ga:{name:"Irish",displayName:"Gaeilge"},gd:{name:"Scottish Gaelic",displayName:"G\xe0idhlig"},gl:{name:"Galician",displayName:"galego"},gn:{name:"Guaran\xed",displayName:"Ava\xf1e'\u1ebd"},gu:{name:"Gujarati",displayName:"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"},gv:{name:"Manx",displayName:"Gaelg"},ha:{name:"Hausa",displayName:"\u0647\u064e\u0648\u064f\u0633\u064e"},he:{name:"Hebrew",displayName:"\u05e2\u05d1\u05e8\u05d9\u05ea"},hi:{name:"Hindi",displayName:"\u0939\u093f\u0928\u094d\u0926\u0940"},ho:{name:"Hiri Motu",displayName:"Hiri Motu"},hr:{name:"Croatian",displayName:"hrvatski jezik"},ht:{name:"Haitian",displayName:"Krey\xf2l ayisyen"},hu:{name:"Hungarian",displayName:"magyar"},hy:{name:"Armenian",displayName:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576"},hz:{name:"Herero",displayName:"Otjiherero"},ia:{name:"Interlingua",displayName:"Interlingua"},id:{name:"Indonesian",displayName:"Indonesian"},ie:{name:"Interlingue",displayName:"Interlingue"},ig:{name:"Igbo",displayName:"As\u1ee5s\u1ee5 Igbo"},ii:{name:"Nuosu",displayName:"\ua188\ua320\ua4bf Nuosuhxop"},ik:{name:"Inupiaq",displayName:"I\xf1upiaq"},io:{name:"Ido",displayName:"Ido"},is:{name:"Icelandic",displayName:"\xcdslenska"},it:{name:"Italian",displayName:"Italiano"},iu:{name:"Inuktitut",displayName:"\u1403\u14c4\u1483\u144e\u1450\u1466"},ja:{name:"Japanese",displayName:"\u65e5\u672c\u8a9e"},jv:{name:"Javanese",displayName:"basa Jawa"},ka:{name:"Georgian",displayName:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"},kg:{name:"Kongo",displayName:"Kikongo"},ki:{name:"Kikuyu",displayName:"G\u0129k\u0169y\u0169"},kj:{name:"Kwanyama",displayName:"Kuanyama"},kk:{name:"Kazakh",displayName:"\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"},kl:{name:"Kalaallisut",displayName:"kalaallisut"},km:{name:"Khmer",displayName:"\u1781\u17c1\u1798\u179a\u1797\u17b6\u179f\u17b6"},kn:{name:"Kannada",displayName:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"},ko:{name:"Korean",displayName:"\ud55c\uad6d\uc5b4"},kr:{name:"Kanuri",displayName:"Kanuri"},ks:{name:"Kashmiri",displayName:"\u0915\u0936\u094d\u092e\u0940\u0930\u0940"},ku:{name:"Kurdish",displayName:"Kurd\xee"},kv:{name:"Komi",displayName:"\u043a\u043e\u043c\u0438 \u043a\u044b\u0432"},kw:{name:"Cornish",displayName:"Kernewek"},ky:{name:"Kyrgyz",displayName:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"},la:{name:"Latin",displayName:"latine"},lb:{name:"Luxembourgish",displayName:"L\xebtzebuergesch"},lg:{name:"Ganda",displayName:"Luganda"},li:{name:"Limburgish",displayName:"Limburgs"},ln:{name:"Lingala",displayName:"Ling\xe1la"},lo:{name:"Lao",displayName:"\u0e9e\u0eb2\u0eaa\u0eb2"},lt:{name:"Lithuanian",displayName:"lietuvi\u0173 kalba"},lu:{name:"Luba-Katanga",displayName:"Tshiluba"},lv:{name:"Latvian",displayName:"latvie\u0161u valoda"},mg:{name:"Malagasy",displayName:"fiteny malagasy"},mh:{name:"Marshallese",displayName:"Kajin M\u0327aje\u013c"},mi:{name:"M\u0101ori",displayName:"te reo M\u0101ori"},mk:{name:"Macedonian",displayName:"\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a"},ml:{name:"Malayalam",displayName:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"},mn:{name:"Mongolian",displayName:"\u041c\u043e\u043d\u0433\u043e\u043b \u0445\u044d\u043b"},mr:{name:"Marathi",displayName:"\u092e\u0930\u093e\u0920\u0940"},ms:{name:"Malay",displayName:"\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e"},mt:{name:"Maltese",displayName:"Malti"},my:{name:"Burmese",displayName:"\u1017\u1019\u102c\u1005\u102c"},na:{name:"Nauru",displayName:"Ekakair\u0169 Naoero"},nb:{name:"Norwegian Bokm\xe5l",displayName:"Norsk bokm\xe5l"},nd:{name:"Northern Ndebele",displayName:"isiNdebele"},ne:{name:"Nepali",displayName:"\u0928\u0947\u092a\u093e\u0932\u0940"},ng:{name:"Ndonga",displayName:"Owambo"},nl:{name:"Dutch",displayName:"Nederlands"},nn:{name:"Norwegian Nynorsk",displayName:"Norsk nynorsk"},no:{name:"Norwegian",displayName:"Norsk"},nr:{name:"Southern Ndebele",displayName:"isiNdebele"},nv:{name:"Navajo",displayName:"Din\xe9 bizaad"},ny:{name:"Chichewa",displayName:"chiChe\u0175a"},oc:{name:"Occitan",displayName:"occitan"},oj:{name:"Ojibwe",displayName:"\u140a\u14c2\u1511\u14c8\u142f\u14a7\u140e\u14d0"},om:{name:"Oromo",displayName:"Afaan Oromoo"},or:{name:"Oriya",displayName:"\u0b13\u0b21\u0b3c\u0b3f\u0b06"},os:{name:"Ossetian",displayName:"\u0438\u0440\u043e\u043d \xe6\u0432\u0437\u0430\u0433"},pa:{name:"Panjabi",displayName:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"},pi:{name:"P\u0101li",displayName:"\u092a\u093e\u0934\u093f"},pl:{name:"Polish",displayName:"j\u0119zyk polski"},ps:{name:"Pashto",displayName:"\u067e\u069a\u062a\u0648"},pt:{name:"Portuguese",displayName:"Portugu\xeas"},qu:{name:"Quechua",displayName:"Runa Simi"},rm:{name:"Romansh",displayName:"rumantsch grischun"},rn:{name:"Kirundi",displayName:"Ikirundi"},ro:{name:"Romanian",displayName:"Rom\xe2n\u0103"},ru:{name:"Russian",displayName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},rw:{name:"Kinyarwanda",displayName:"Ikinyarwanda"},sa:{name:"Sanskrit",displayName:"\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"},sc:{name:"Sardinian",displayName:"sardu"},sd:{name:"Sindhi",displayName:"\u0938\u093f\u0928\u094d\u0927\u0940"},se:{name:"Northern Sami",displayName:"Davvis\xe1megiella"},sg:{name:"Sango",displayName:"y\xe2ng\xe2 t\xee s\xe4ng\xf6"},si:{name:"Sinhala",displayName:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"},sk:{name:"Slovak",displayName:"sloven\u010dina"},sl:{name:"Slovene",displayName:"slovenski jezik"},sm:{name:"Samoan",displayName:"gagana fa'a Samoa"},sn:{name:"Shona",displayName:"chiShona"},so:{name:"Somali",displayName:"Soomaaliga"},sq:{name:"Albanian",displayName:"Shqip"},sr:{name:"Serbian",displayName:"\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a"},ss:{name:"Swati",displayName:"SiSwati"},st:{name:"Southern Sotho",displayName:"Sesotho"},su:{name:"Sundanese",displayName:"Basa Sunda"},sv:{name:"Swedish",displayName:"svenska"},sw:{name:"Swahili",displayName:"Kiswahili"},ta:{name:"Tamil",displayName:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"},te:{name:"Telugu",displayName:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"},tg:{name:"Tajik",displayName:"\u0442\u043e\u04b7\u0438\u043a\u04e3"},th:{name:"Thai",displayName:"\u0e44\u0e17\u0e22"},ti:{name:"Tigrinya",displayName:"\u1275\u130d\u122d\u129b"},tk:{name:"Turkmen",displayName:"T\xfcrkmen"},tl:{name:"Tagalog",displayName:"Wikang Tagalog"},tn:{name:"Tswana",displayName:"Setswana"},to:{name:"Tonga",displayName:"faka Tonga"},tr:{name:"Turkish",displayName:"T\xfcrk\xe7e"},ts:{name:"Tsonga",displayName:"Xitsonga"},tt:{name:"Tatar",displayName:"\u0442\u0430\u0442\u0430\u0440 \u0442\u0435\u043b\u0435"},tw:{name:"Twi",displayName:"Twi"},ty:{name:"Tahitian",displayName:"Reo Tahiti"},ug:{name:"Uyghur",displayName:"\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5\u200e"},uk:{name:"Ukrainian",displayName:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},ur:{name:"Urdu",displayName:"\u0627\u0631\u062f\u0648"},uz:{name:"Uzbek",displayName:"\u040e\u0437\u0431\u0435\u043a"},ve:{name:"Venda",displayName:"Tshiven\u1e13a"},vi:{name:"Vietnamese",displayName:"Ti\u1ebfng Vi\u1ec7t"},vo:{name:"Volap\xfck",displayName:"Volap\xfck"},wa:{name:"Walloon",displayName:"walon"},wo:{name:"Wolof",displayName:"Wollof"},xh:{name:"Xhosa",displayName:"isiXhosa"},yi:{name:"Yiddish",displayName:"\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"},yo:{name:"Yoruba",displayName:"Yor\xf9b\xe1"},za:{name:"Zhuang",displayName:"Sa\u026f cue\u014b\u0185"},zh:{name:"Chinese",displayName:"\u4e2d\u6587"},cmn:{name:"Chinese Mandarin",displayName:"\u4e2d\u6587"},zu:{name:"Zulu",displayName:"isiZulu"}};function W(e,a){if(1&e&&(m.Qb(0),m.Sb(1,"option",8),m.vc(2),m.Rb(),m.Pb()),2&e){var t=a.$implicit;m.Cb(1),m.ic("value",t.key),m.Cb(1),m.wc(t.displayName)}}function X(e,a){if(1&e&&(m.Qb(0),m.Sb(1,"option",8),m.vc(2),m.Rb(),m.Pb()),2&e){var t=a.$implicit;m.Cb(1),m.ic("value",t.key),m.Cb(1),m.wc(t.displayName)}}var F,U,B,H,J=((U=function(){function e(a){_classCallCheck(this,e),this.apiKeyService=a,this.formGroup=new o.f({}),this.languages=z}return _createClass(e,[{key:"ngOnInit",value:function(){this.initFormGroup(),this.initSubs()}},{key:"initFormGroup",value:function(){this.formGroup.setControl("language",new o.c("")),this.formGroup.setControl("locale",new o.c("")),this.formGroup.setControl("speed",new o.c("")),this.formGroup.setControl("pitch",new o.c(""))}},{key:"initSubs",value:function(){var e=this;this.apiKeyService.apiKey$.subscribe((function(a){a?e.formGroup.enable():e.formGroup.disable()}))}},{key:"languageOptionList",get:function(){var e=this;return Object.keys(this.languages).map((function(a){return Object.assign(Object.assign({},e.languages[a]),{key:a})}))}},{key:"locales",get:function(){return[]}}]),e}()).\u0275fac=function(e){return new(e||U)(m.Nb(y))},U.\u0275cmp=m.Hb({type:U,selectors:[["app-voice-settings"]],inputs:{formGroup:"formGroup"},decls:21,vars:3,consts:[[1,"settings",3,"formGroup"],["formControlName","language","name","language"],["value","","disabled","","selected",""],[4,"ngFor","ngForOf"],["formControlName","locale","name","locale"],["for",""],["formControlName","speed","type","range","value","1","min","0.25","max","3","id","speed","step","0.01"],["formControlName","pitch","type","range","value","0","min","-15","max","15","id","pitch","step","0.1"],["disabled","","selected","",3,"value"]],template:function(e,a){1&e&&(m.Sb(0,"mat-card"),m.Sb(1,"h3"),m.vc(2,"Voice settings"),m.Rb(),m.Sb(3,"form",0),m.Qb(4),m.Sb(5,"select",1),m.Sb(6,"option",2),m.vc(7,"Language"),m.Rb(),m.tc(8,W,3,2,"ng-container",3),m.Rb(),m.Sb(9,"select",4),m.Sb(10,"option",2),m.vc(11,"Locale"),m.Rb(),m.tc(12,X,3,2,"ng-container",3),m.Rb(),m.Sb(13,"div"),m.Sb(14,"label",5),m.vc(15,"Speed"),m.Rb(),m.Ob(16,"input",6),m.Rb(),m.Sb(17,"div"),m.Sb(18,"label",5),m.vc(19,"Pitch"),m.Rb(),m.Ob(20,"input",7),m.Rb(),m.Pb(),m.Rb(),m.Rb()),2&e&&(m.Cb(3),m.ic("formGroup",a.formGroup),m.Cb(5),m.ic("ngForOf",a.languageOptionList),m.Cb(4),m.ic("ngForOf",a.locales))},directives:[g.a,o.s,o.k,o.g,o.p,o.j,o.e,o.m,o.r,s.j,o.a,o.n],styles:[""]}),U),q=((F=function(){function e(a){_classCallCheck(this,e),this.snackService=a}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"startTts",value:function(){this.snackService.displayMessage("Starting conversion...")}}]),e}()).\u0275fac=function(e){return new(e||F)(m.Nb(h.a))},F.\u0275cmp=m.Hb({type:F,selectors:[["app-text-input"]],decls:10,vars:0,consts:[["for","text"],["id","text","placeholder","Copy/Paste your text here !"],[3,"click"]],template:function(e,a){1&e&&(m.Sb(0,"mat-card"),m.Sb(1,"label",0),m.vc(2," Text to convert "),m.Rb(),m.Ob(3,"br"),m.Sb(4,"p"),m.vc(5," Advanced editor would go here. "),m.Rb(),m.Ob(6,"textarea",1),m.Ob(7,"br"),m.Sb(8,"button",2),m.ac("click",(function(e){return a.startTts()})),m.vc(9,"Start Text-to-speech"),m.Rb(),m.Rb())},directives:[g.a],styles:["textarea[_ngcontent-%COMP%]{width:60%;height:120px}@media screen and (max-width:700px){textarea[_ngcontent-%COMP%]{width:95%}}"]}),F),$=[{path:"",component:(B=function(){function e(a){_classCallCheck(this,e),this.waveNetService=a,this.formGroup=new o.f({})}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),B.\u0275fac=function(e){return new(e||B)(m.Nb(p))},B.\u0275cmp=m.Hb({type:B,selectors:[["app-tts-page"]],decls:6,vars:1,consts:[[1,"tts-page-section"],[1,"separator"],[3,"formGroup"]],template:function(e,a){1&e&&(m.Sb(0,"section",0),m.Ob(1,"app-api-key"),m.Ob(2,"div",1),m.Ob(3,"app-voice-settings",2),m.Ob(4,"div",1),m.Ob(5,"app-text-input"),m.Rb()),2&e&&(m.Cb(3),m.ic("formGroup",a.formGroup))},directives:[V,J,o.k,o.g,q],styles:[".tts-page-section[_ngcontent-%COMP%]{text-align:center}.separator[_ngcontent-%COMP%]{height:4px}"]}),B)}],Y=((H=function e(){_classCallCheck(this,e)}).\u0275mod=m.Lb({type:H}),H.\u0275inj=m.Kb({factory:function(e){return new(e||H)},imports:[[r.d.forChild($)],r.d]}),H),Q=t("PCNd"),Z=t("ZMxt");t.d(a,"TtsModule",(function(){return ae}));var ee,ae=((ee=function e(){_classCallCheck(this,e)}).\u0275mod=m.Lb({type:ee}),ee.\u0275inj=m.Kb({factory:function(e){return new(e||ee)},imports:[[s.c,r.d,Q.a,Y,o.o,I,Z.a]]}),ee)}}]);