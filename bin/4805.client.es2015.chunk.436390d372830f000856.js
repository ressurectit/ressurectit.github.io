(self.webpackChunkressurectit_github_io=self.webpackChunkressurectit_github_io||[]).push([[4805],{25048:(e,t,n)=>{var i={"./en.json":[41626,1626],"./sk.json":[65241,5241]};function o(e){if(!n.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,3)))}o.keys=()=>Object.keys(i),o.id=25048,e.exports=o},24805:(e,t,n)=>{"use strict";n.r(t),n(16266),n(67795),n(10235),n(78731),n(30402),n(46849);var i=n(45824),o=n(20244),s=n(84470),r=n(70343);(0,o.kH)(),(0,i.i)(),(0,o.yJ)((e=>{e.Konami||(e.Konami=function(){})}));const a=s.y.prototype.subscribe;s.y.prototype.subscribe=function(e,t,n){return!(0,o.isBlank)(t)&&(0,o.isFunction)(t)||(t=e=>{r.v.configuration.debug&&console.log(e)}),a.call(this,e,t,n)};var g=n(50537),c=n(78973),l=n(54042),u=n(77498),f=n(51391),d=n(52059),p=n(93377),h=n(55799),v=n(27100),m=n(73084),b=n(55607);const y=(0,b.X$)("routeAnimations",[(0,b.eR)("void <=> *, none <=> *",[(0,b.IO)(":enter",(0,b.pV)(),{optional:!0})]),(0,b.eR)("* => *",[(0,b.IO)(".main-content",[(0,b.oB)({position:"relative"}),(0,b.IO)(":enter, :leave",[(0,b.oB)({position:"absolute",top:0,left:0,width:"100%"})]),(0,b.IO)(":enter",[(0,b.oB)({left:"-100%"})]),(0,b.IO)(":leave",(0,b.pV)()),(0,b.ru)([(0,b.IO)(":leave",[(0,b.jt)("300ms ease-out",(0,b.oB)({left:"100%"}))]),(0,b.IO)(":enter",[(0,b.jt)("300ms ease-out",(0,b.oB)({left:"0%"}))])]),(0,b.IO)(":enter",(0,b.pV)())])])]);var _=n(58879),S=n(48188),L=n(54241),w=n(57076),x=n(84184),C=n(89408),O=n(60205),D=n(69016),k=n(1293),j=n(59478),T=n(3242),A=n(85862),q=n(15920),F=n(68062),Z=n(15576),U=n(18427),R=n(16352),P=n(4692),N=n(23412),Y=n(46846),I=n(53084);const E=["outlet"];function z(e,t){1&e&&L._U(0,"console"),2&e&&w.Q("@consoleAnimation",void 0)}class M{constructor(e,t,n,i,s,a,g){var c;this._changeDetector=a,this._dialog=g,this.consoleVisible=!1,this.routeComponentState="none",s.verbose("Application is starting, main component constructed."),i.body.classList.add("app-page",n.settings.theme),this._theme=n.settings.theme,i.body.classList.add("app-page",r.v.general.theme),this._settingsChangeSubscription=n.settingsChange.subscribe((t=>{t==(0,o.nameof)("theme")&&(i.body.classList.remove(this._theme),this._theme=n.settings.theme,i.body.classList.add(this._theme)),t==(0,o.nameof)("language")&&(e.use(n.settings.language),this._changeDetector.detectChanges())})),this._settingsDebuggingChangeSubscription=n.settingsDebuggingChange.subscribe((e=>{e==(0,o.nameof)("consoleEnabled")&&this._toggleConsoleHotkey()})),e.setDefaultLang("en"),e.use(r.v.general.language),i.location.pathname!=t.url&&t.navigateByUrl(t.parseUrl(i.location.href.replace((0,m.lE)(i),""))),(null===(c=n.settingsDebugging)||void 0===c?void 0:c.consoleEnabled)&&this._toggleConsoleHotkey()}ngAfterViewInit(){this._routerOutletActivatedSubscription=this.routerOutlet.activateEvents.subscribe((()=>{this.routeComponentState=this.routerOutlet.activatedRouteData.animation||this.routerOutlet.activatedRoute.component.name}))}ngOnDestroy(){var e,t,n,i;null===(e=this._routerOutletActivatedSubscription)||void 0===e||e.unsubscribe(),this._routerOutletActivatedSubscription=null,null===(t=this._routerOutletActivatedSubscription)||void 0===t||t.unsubscribe(),this._routerOutletActivatedSubscription=null,null===(n=this._settingsChangeSubscription)||void 0===n||n.unsubscribe(),this._settingsChangeSubscription=null,null===(i=this._settingsDebuggingChangeSubscription)||void 0===i||i.unsubscribe(),this._settingsDebuggingChangeSubscription=null}showUserSettings(){this._dialog.open(S.LC,{title:"User Settings",width:"35vw"})}_toggleConsoleHotkey(){}}M.ɵfac=function(e){return new(e||M)(x.Y(q.sK),x.Y(F.F0),x.Y(_.g),x.Y(h.K),x.Y(v.bZ),x.Y(C.sB),x.Y(U.J))},M.ɵcmp=O.Xp({type:M,selectors:[["app"]],viewQuery:function(e,t){if(1&e&&D.Gf(E,5),2&e){let e;D.iG(e=D.CR())&&(t.routerOutlet=e.first)}},decls:17,vars:2,consts:[[1,"flex-row","page-title"],[1,"title-text","flex-1"],[1,"btn-icon","margin-right-small",3,"click"],[1,"fas","fa-cog"],["href","https://github.com/ressurectit/ressurectit.github.io",1,"margin-right-small"],[1,"fab","fa-github"],[1,"container","main","relative"],[1,"content","relative"],[1,"main-content"],["outlet","outlet"],[4,"ngIf"]],template:function(e,t){1&e&&(L.Tg(0,"div",0),L.Tg(1,"div",1),k._(2,"Ressurect IT"),L.qZ(),L.Tg(3,"div"),L.Tg(4,"a",2),j.N("click",(function(){return t.showUserSettings()})),L._U(5,"span",3),L.qZ(),L.Tg(6,"a",4),L._U(7,"span",5),L.qZ(),L.qZ(),L.qZ(),L.Tg(8,"div",6),L._U(9,"progress-indicator"),L._U(10,"internal-server-error"),L._U(11,"global-notifications"),L.Tg(12,"div",7),L.Tg(13,"div",8),L._U(14,"router-outlet",null,9),L.qZ(),L.qZ(),T.Y(16,z,1,1,"console",10),L.qZ()),2&e&&(A.x(12),w.Q("@routeAnimations",t.routeComponentState),A.x(4),w.Q("ngIf",t.consoleVisible))},directives:[R.B,P.X,N.u,Z.l,Y.O,I.m],styles:[".container.main[_ngcontent-%COMP%]{padding:0;flex:1;width:100%;display:flex;flex-direction:row;min-height:0;min-width:0}.container.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;flex:1;min-height:0;min-width:0;overflow:hidden}.container.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:0;min-width:0}console[_ngcontent-%COMP%]{z-index:1}"],data:{animation:[y]},changeDetection:0});var J=n(68692),Q=n(20303),V=n(71452),B=n(81296),G=n(95263),H=n(62932),$=n(77552),X=n(43196),K=n(84451),W=n(74986),ee=n(61439),te=n(62001),ne=n(6316);let ie=class{constructor(e){e.setStatusCode(404)}};ie.ɵfac=function(e){return new(e||ie)(x.Y(ne.g))},ie.ɵcmp=O.Xp({type:ie,selectors:[["not-found-view"]],decls:8,vars:0,consts:[[1,"title","top-border-round","margin-none"],[1,"light-block","padding-top-small","bottom-border-round","full-height"],[1,"fa","fa-file-o","text-danger"]],template:function(e,t){1&e&&(L.Tg(0,"h3",0),k._(1,"STRÁNKA NENÁJDENÁ"),L.qZ(),L.Tg(2,"div",1),L.Tg(3,"h2"),L._U(4,"span",2),L.Tg(5,"span"),k._(6,"Stránka nebola nájdená!"),L.qZ(),L._U(7,"span",2),L.qZ(),L.qZ())},encapsulation:2,changeDetection:0}),ie=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}([(0,te.N)({path:"**"}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[ne.g])],ie);var oe=n(88690);const se=[ie],re={rootModule:!0,rootModuleConfig:{enableTracing:!1,useHash:!0,anchorScrolling:"enabled",scrollPositionRestoration:"enabled",onSameUrlNavigation:"reload"},staticRoutesBefore:[{path:"",redirectTo:`content/${oe.oC}`,pathMatch:"full"},{path:"content",loadChildren:()=>n.e(8638).then(n.bind(n,48638)).then((({ContentModule:e})=>e))},{path:"restSamples",loadChildren:()=>Promise.all([n.e(8938),n.e(7981),n.e(3562),n.e(8976),n.e(6115)]).then(n.bind(n,15658)).then((({SampleRestModule:e})=>e))}]};var ae=n(3252),ge=n(66341),ce=n(34855),le=n(63993),ue=n(32512),fe=n(95169),de=n(48390),pe=n(26398),he=n(24071),ve=n(85483),me=n(73),be=n(10158),ye=n(25226),_e=n(63070),Se=n(96113),Le=n(86437),we=n(81087),xe=n(82321),Ce=n(63977),Oe=n(8147),De=n(74587),ke=n(38181),je=n(77873),Te=n(52593),Ae=n(18882),qe=n(39309),Fe=n(73825),Ze=n(61131),Ue=n(48786),Re=n(55429),Pe=n(31298),Ne=n(6821),Ye=n(55495),Ie=n(59408),Ee=n(14660),ze=n(68642),Me=n(21873),Je=n(50547),Qe=n(78038),Ve=n(37277),Be=n(32861),Ge=n(50194),He=n(80510),$e=n(10047);const Xe=JSON.parse('{"$schema":"./permissions.schema.json","logging-settings":["anyone"],"debug-settings":["anyone"],"debug-info":["anyone"]}');var Ke=n(60862),We=n(17144),et=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},tt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let nt=class extends Ie.Z8{constructor(e,t,n,i,o,s){super(e,i,t,o,s),this._location=n,this._permissions={},this._computePermissionsForRoles()}login(e){var t;const n=(new Pe.L).append("j_username",e.userName).append("j_password",e.password).append("remember-me",null===(t=e.rememberMe)||void 0===t?void 0:t.toString());return this._login(n)}isAuthPage(){return 0==this._location.path().indexOf("/login")}logout(){return null}getUserIdentity(){return null}showAuthPage(){return this.injector.get(F.F0).navigate(["/login"],{queryParams:{returnUrl:this._location.path()}})}showAccessDenied(){return this.injector.get(F.F0).navigate(["/accessDenied"])}_login(e){return null}getUserIdentityResponseTransform(e){return e.pipe((0,He.K)((e=>{if(401==e.status)return new s.y((e=>{e.next({isAuthenticated:!1,userName:"",permissions:[],firstName:"",surname:""}),e.complete()}));switch(e.status){case 503:alert("Vzdialená služba je nedostupná. Skúste opätovne neskôr.");break;case 504:alert("Vypršal čas na spracovanie požiadavky cez http proxy. Skúste opätovne neskôr.");break;case 0:alert("Server je mimo prevádzky. Skúste opätovne neskôr.")}return(0,Ge._)(e)})),(0,$e.U)((e=>{if(e instanceof Ne.Zn){const t=e.body,n=this._roles2privileges(t.roles);return{isAuthenticated:!0,userName:t.login,firstName:"",surname:t.login,permissions:n.concat(["authenticated"])}}return e})))}_roles2privileges(e){const t={};return(null!=e?e:[]).forEach((e=>{var n;return(null!==(n=this._permissions[e])&&void 0!==n?n:[]).forEach((e=>t[e]=!0))})),Object.keys(t)}_computePermissionsForRoles(){Object.keys(Xe).forEach((e=>{const t=Xe[e];Array.isArray(t)&&t.forEach((t=>{(0,o.isBlank)(this._permissions[t])&&(this._permissions[t]=[]),this._permissions[t].push(e)}))}))}};var it,ot;nt.ɵfac=function(e){return new(e||nt)(Ke.LF(Ye.e),Ke.LF(Ue.zs),Ke.LF(Re.Y),Ke.LF(v.GL,8),Ke.LF(Ee.CK),Ke.LF(Ee.fD))},nt.ɵprov=We.Yz({token:nt,factory:nt.ɵfac}),et([(0,Ie.a4)("logout"),tt("design:type",Function),tt("design:paramtypes",[]),tt("design:returntype",s.y)],nt.prototype,"logout",null),et([(0,ze.S)(),(0,Me.i)(),(0,Je.S)(ge.$),(0,Je.S)(ce.sk),(0,Je.S)(Le.n),(0,Je.S)(Se.L),(0,Je.S)(xe.N),(0,Ie.HT)("account.json"),tt("design:type",Function),tt("design:paramtypes",[]),tt("design:returntype",s.y)],nt.prototype,"getUserIdentity",null),et([(0,Je.S)(ge.$),(0,Ie.a4)("authentication"),(it=0,ot=Qe.uT,function(e,t){ot(e,t,it)}),tt("design:type",Function),tt("design:paramtypes",[Pe.L]),tt("design:returntype",s.y)],nt.prototype,"_login",null),nt=et([(0,Ve.J)("content/"),(0,Be.S)(r.v.configuration.defaultApiHeaders),tt("design:paramtypes",[Ye.e,Ue.zs,Re.Y,String,Array,Array])],nt);var st=n(59919),rt=n(32221);class at extends pe.v{get locale(){return"sk"}get localeChange(){return(0,st.c)()}}at.ɵfac=function(){let e;return function(t){return(e||(e=rt.n5(at)))(t||at)}}(),at.ɵprov=We.Yz({token:at,factory:at.ɵfac});var gt=n(9543),ct=n(53675),lt=n(49148);const ut=[{provide:gt.u,useValue:{texts:{noData:"No data found !!!",loading:"Data are currently loading!",notLoaded:"Data are not loaded yet"}}},{provide:ct.T,useValue:{}},{provide:lt.P,useValue:{itemsPerPageValues:[5,15,30],initialItemsPerPage:15}}],ft=[{provide:n(13380).M,useValue:{texts:{nothingSelected:oe.qX}}}];var dt=n(6537),pt=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},ht=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let vt=class extends Ie.Z8{log(e){return null}};vt.ɵfac=function(){let e;return function(t){return(e||(e=rt.n5(vt)))(t||vt)}}(),vt.ɵprov=We.Yz({token:vt,factory:vt.ɵfac}),pt([(0,dt.g)(),(0,Je.S)(we.n_),(0,Je.S)(ce.sk),(0,Je.S)(ge.$),(0,Ie.a4)("logger"),function(e,t){return function(n,i){t(n,i,e)}}(0,Qe.uT),ht("design:type",Function),ht("design:paramtypes",[Array]),ht("design:returntype",s.y)],vt.prototype,"log",null),vt=pt([(0,Ve.J)(r.v.configuration.apiBaseUrl),(0,Be.S)(r.v.configuration.defaultApiHeaders)],vt);var mt=n(59741);const bt=[Se.t,Le.H,we.b5,xe.Q,ge.B,ce.XX,de.B,{useFactory:function(){return new _e.b("Server je mimo prevádzky.")},provide:_e.b},{useFactory:function(){return new ye.R("Server neodpovedal v stanovenom čase.")},provide:ye.R},{provide:pe.v,useClass:at},{provide:le.k,useClass:nt},{provide:be.A,useFactory:function(){return new be.A(r.v.configuration.debug)}},Ce.o,Oe.E,De.B,{useFactory:function(e){return()=>{return t=this,n=void 0,o=function*(){try{yield e.getUserIdentity()}catch(e){throw alert(`Authentication failed: ${e}`),e}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{g(o.next(e))}catch(e){s(e)}}function a(e){try{g(o.throw(e))}catch(e){s(e)}}function g(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}g((o=o.apply(t,n||[])).next())}));var t,n,i,o}},provide:ae.i,deps:[ue.$],multi:!0},...ut,...ft,{provide:v.oF,useClass:ve.H},{provide:v.T0,useClass:fe.w},ke._0,{provide:je.b,useFactory:e=>{var t;return new je.b(null,Ze.ke[null===(t=null==e?void 0:e.settingsLogging)||void 0===t?void 0:t.consoleLogLevel])},deps:[_.g]},{provide:ke.rx,useClass:vt},{provide:mt.L,useClass:_.l},me.z,{provide:he.H,useFactory:e=>{var t;const n=new he.H;return n.setEnabled(null===(t=e.settingsDebugging)||void 0===t?void 0:t.debugData),n},deps:[_.g]},{provide:Te.R,useClass:Ae.F},qe.hK,{provide:qe.vm,useValue:{locale:Fe.sk}}];class yt{getTranslation(e){return s.y.create((t=>{return i=this,o=void 0,r=function*(){const i=yield n(25048)(`./${e}.json`);t.next(i.default),t.complete()},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{g(r.next(e))}catch(e){t(e)}}function a(e){try{g(r.throw(e))}catch(e){t(e)}}function g(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(n,a)}g((r=r.apply(i,o||[])).next())}));var i,o,s,r}))}}yt.ɵfac=function(e){return new(e||yt)},yt.ɵprov=We.Yz({token:yt,factory:yt.ɵfac});let _t,St=class{};St.ɵfac=function(e){return new(e||St)},St.ɵmod=O.oA({type:St}),St.ɵinj=We.cJ({providers:bt,imports:[[g.b2.withServerTransition({appId:oe.jg}),J.JF,B.m,G._,$.F,Q.Bz,ee.m,X.R.forRoot(),H.V,S.No,K.aw.forRoot({loader:{provide:W.Z,useClass:yt}})]]}),St=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}([(0,V.Pn)(se,re)],St);class Lt{}Lt.ɵfac=function(e){return new(e||Lt)},Lt.ɵmod=O.oA({type:Lt,bootstrap:[M]}),Lt.ɵinj=We.cJ({providers:[{provide:p.g,useFactory:function(){return new p.g(r.v.configuration.debug,!1)}}],imports:[[St,f.P,d.Cu]]}),(0,c.G)(),_t=(0,g.q6)([]),(0,l.ZA)(_t.bootstrapModule(Lt),(e=>{var t;null===(t=e.injector.get(u.I))||void 0===t||t.clearAndDeactivate()}),r.v.configuration.debug)},88690:(e,t,n)=>{"use strict";n.d(t,{jg:()=>i,qX:()=>o,oC:()=>s});const i="my-app-id",o="Nothing selected !!!",s="home"},59741:(e,t,n)=>{"use strict";n.d(t,{L:()=>i});const i=new(n(96303).O)("SETTINGS_STORAGE")},55094:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var i=n(60205),o=n(17144);class s{}s.ɵfac=function(e){return new(e||s)},s.ɵmod=i.oA({type:s}),s.ɵinj=o.cJ({})},48188:(e,t,n)=>{"use strict";n.d(t,{No:()=>w,kw:()=>q,LC:()=>Se,eo:()=>k});var i=n(51632),o=n(29453),s=n(60205),r=n(17144);class a{}a.ɵfac=function(e){return new(e||a)},a.ɵmod=s.oA({type:a}),a.ɵinj=r.cJ({imports:[i.I,o.k]});var g=n(39946),c=n(20303),l=n(76947),u=n(54727),f=n(29358),d=n(46838),p=n(94022),h=n(84451);class v{}v.ɵfac=function(e){return new(e||v)},v.ɵmod=s.oA({type:v}),v.ɵinj=r.cJ({imports:[g.e,c.Bz,l.e,u.L,f.z,h.aw,p.N,d.o]});var m=n(28950),b=n(22029),y=n(29129),_=n(97258),S=n(78283),L=n(29200);class w{}w.ɵfac=function(e){return new(e||w)},w.ɵmod=s.oA({type:w}),w.ɵinj=r.cJ({imports:[m.U,b.r,S.F,y.A,_.r,L.k]});var x=n(54976);class C{}C.ɵfac=function(e){return new(e||C)},C.ɵmod=s.oA({type:C}),C.ɵinj=r.cJ({imports:[x.z]});var O=n(42638);class D{}D.ɵfac=function(e){return new(e||D)},D.ɵmod=s.oA({type:D}),D.ɵinj=r.cJ({});class k{}k.ɵfac=function(e){return new(e||k)},k.ɵmod=s.oA({type:k}),k.ɵinj=r.cJ({imports:[O.J,D]});var j=n(51286),T=n(14008),A=n(55094);class q{}q.ɵfac=function(e){return new(e||q)},q.ɵmod=s.oA({type:q}),q.ɵinj=r.cJ({imports:[k,T.d,A.A,j.N]});class F{}F.ɵfac=function(e){return new(e||F)},F.ɵmod=s.oA({type:F}),F.ɵinj=r.cJ({imports:[[v,w]]});var Z,U=n(61131),R=n(70343),P=n(58879),N=n(83824),Y=n(54241),I=n(59478),E=n(14258),z=n(84925),M=n(1293),J=n(42521),Q=n(10748),V=n(85862),B=n(35540),G=n(57076),H=n(3242),$=n(84184),X=n(77099),K=n(38990),W=n(10808),ee=n(58884),te=n(77873),ne=n(24071),ie=n(53059),oe=n(46846),se=n(52838),re=n(50435),ae=n(30593),ge=n(48096),ce=n(16738),le=n(71917);function ue(e,t){if(1&e){const e=N.E();Y.Tg(0,"a",1),I.N("click",(function(){E.CH(e);const t=z.o();return t.activeSection=t.UserSettingsSections.Logging})),Y._U(1,"span",5),Y.Tg(2,"span"),M._(3),J.AL(4,"translate"),Y.qZ(),Y.qZ()}if(2&e){const e=z.o();Q.ek("active",e.activeSection==e.UserSettingsSections.Logging),V.x(3),B.Oq(J.lc(4,3,"logging"))}}function fe(e,t){if(1&e){const e=N.E();Y.Tg(0,"a",1),I.N("click",(function(){E.CH(e);const t=z.o();return t.activeSection=t.UserSettingsSections.Debugging})),Y._U(1,"span",6),Y.Tg(2,"span"),M._(3),J.AL(4,"translate"),Y.qZ(),Y.qZ()}if(2&e){const e=z.o();Q.ek("active",e.activeSection==e.UserSettingsSections.Debugging),V.x(3),B.Oq(J.lc(4,3,"debug"))}}function de(e,t){if(1&e&&(Y._U(0,"ng-option",12),J.AL(1,"translate")),2&e){const e=t.$implicit;G.Q("text",J.lc(1,2,e))("value",e)}}function pe(e,t){if(1&e&&Y._U(0,"ng-option",12),2&e){const e=t.$implicit;G.Q("text",null==e?null:e.name)("value",null==e?null:e.lang)}}function he(e,t){if(1&e&&(Y.Tg(0,"div",7),Y.Tg(1,"div",8),M._(2),J.AL(3,"translate"),Y.qZ(),Y.Tg(4,"div"),Y.Tg(5,"ng-select",9),H.Y(6,de,2,4,"ng-option",10),Y.qZ(),Y.qZ(),Y.Tg(7,"div",8),M._(8),J.AL(9,"translate"),Y.qZ(),Y.Tg(10,"div"),Y.Tg(11,"ng-select",11),H.Y(12,pe,1,2,"ng-option",10),Y.qZ(),Y.qZ(),Y.qZ()),2&e){const e=z.o();G.Q("formGroup",e.generalSettingsForm),V.x(2),B.Oq(J.lc(3,5,"theme")),V.x(4),G.Q("ngForOf",e.themes),V.x(2),B.Oq(J.lc(9,7,"language")),V.x(4),G.Q("ngForOf",e.languages)}}function ve(e,t){if(1&e&&Y._U(0,"ng-option",12),2&e){const e=t.$implicit;G.Q("text",null==e?null:e.name)("value",null==e?null:e.value)}}function me(e,t){if(1&e&&Y._U(0,"ng-option",12),2&e){const e=t.$implicit;G.Q("text",null==e?null:e.name)("value",null==e?null:e.value)}}function be(e,t){if(1&e&&(Y.Tg(0,"div",8),M._(1),J.AL(2,"translate"),Y.qZ(),Y.Tg(3,"div"),Y.Tg(4,"ng-select",15),H.Y(5,me,1,2,"ng-option",10),Y.qZ(),Y.qZ()),2&e){const e=z.o(2);V.x(1),B.Oq(J.lc(2,2,"file log")),V.x(4),G.Q("ngForOf",e.logLevels)}}function ye(e,t){if(1&e&&(Y.Tg(0,"div",7),Y.Tg(1,"div",8),M._(2),J.AL(3,"translate"),Y.qZ(),Y.Tg(4,"div"),Y.Tg(5,"ng-select",13),H.Y(6,ve,1,2,"ng-option",10),Y.qZ(),Y.qZ(),H.Y(7,be,6,4,"ng-template",14),Y.qZ()),2&e){const e=z.o();G.Q("formGroup",e.loggingSettingsForm),V.x(2),B.Oq(J.lc(3,4,"console log")),V.x(4),G.Q("ngForOf",e.logLevels),V.x(1),G.Q("authorize","authorized-electron")}}function _e(e,t){if(1&e&&(Y.Tg(0,"div",7),Y.Tg(1,"div",8),M._(2),J.AL(3,"translate"),Y.qZ(),Y.Tg(4,"div"),Y._U(5,"mat-slide-toggle",16),Y.qZ(),Y.Tg(6,"div",8),M._(7),J.AL(8,"translate"),Y.qZ(),Y.Tg(9,"div"),Y._U(10,"mat-slide-toggle",17),Y.qZ(),Y.qZ()),2&e){const e=z.o();G.Q("formGroup",e.debuggingSettingsForm),V.x(2),B.Oq(J.lc(3,3,"console")),V.x(5),B.Oq(J.lc(8,5,"debug data"))}}!function(e){e[e.General=0]="General",e[e.Logging=1]="Logging",e[e.Debugging=2]="Debugging"}(Z||(Z={}));class Se{constructor(e,t,n,i){this.themes=R.v.configuration.themes,this.languages=R.v.configuration.languages,this.logLevels=[],this.activeSection=Z.General,this.UserSettingsSections=Z;const o=e.settings,s=e.settingsDebugging,r=e.settingsLogging;this._getLogLevels(),this.generalSettingsForm=t.group({language:o.language,theme:o.theme}),this.debuggingSettingsForm=t.group({consoleEnabled:s.consoleEnabled,debugData:s.debugData}),this.loggingSettingsForm=t.group({consoleLogLevel:U.ke[r.consoleLogLevel],fileLogLevel:U.ke[r.fileLogLevel]}),this.generalSettingsForm.valueChanges.subscribe((t=>{e.setSettings(t)})),this.debuggingSettingsForm.valueChanges.subscribe((t=>{i.setEnabled(t.debugData),e.setDebuggingSettings(t)})),this.loggingSettingsForm.valueChanges.subscribe((t=>{n.restrictToLevel=+t.consoleLogLevel,e.setLoggingSettings({consoleLogLevel:U.ke[+t.consoleLogLevel],fileLogLevel:U.ke[+t.fileLogLevel]})}))}_getLogLevels(){Object.keys(U.ke).forEach((e=>{isNaN(+e)||this.logLevels.push({name:U.ke[e],value:e})}))}}Se.ɵfac=function(e){return new(e||Se)($.Y(P.g),$.Y(X.q),$.Y(te.b),$.Y(ne.H))},Se.ɵcmp=s.Xp({type:Se,selectors:[["user-settings"]],decls:12,vars:10,consts:[[1,"flex-column","settings-menu"],[1,"btn-line",3,"click"],[1,"fas","fa-cog"],["class","btn-line",3,"active","click",4,"authorize"],["class","settings-items",3,"formGroup",4,"ngIf"],[1,"fas","fa-pen"],[1,"fas","fa-bug"],[1,"settings-items",3,"formGroup"],[1,"text-capitalize"],["formControlName","theme"],[3,"text","value",4,"ngFor","ngForOf"],["formControlName","language"],[3,"text","value"],["formControlName","consoleLogLevel"],[3,"authorize"],["formControlName","fileLogLevel"],["formControlName","consoleEnabled"],["formControlName","debugData"]],template:function(e,t){1&e&&(Y.Tg(0,"div",0),Y.Tg(1,"a",1),I.N("click",(function(){return t.activeSection=t.UserSettingsSections.General})),Y._U(2,"span",2),Y.Tg(3,"span"),M._(4),J.AL(5,"translate"),Y.qZ(),Y.qZ(),H.Y(6,ue,5,5,"a",3),H.Y(7,fe,5,5,"a",3),Y.qZ(),Y.Tg(8,"div"),H.Y(9,he,13,9,"div",4),H.Y(10,ye,8,6,"div",4),H.Y(11,_e,11,7,"div",4),Y.qZ()),2&e&&(V.x(1),Q.ek("active",t.activeSection==t.UserSettingsSections.General),V.x(3),B.Oq(J.lc(5,8,"general")),V.x(2),G.Q("authorize","logging-settings"),V.x(1),G.Q("authorize","debug-settings"),V.x(2),G.Q("ngIf",t.activeSection==t.UserSettingsSections.General),V.x(1),G.Q("ngIf",t.activeSection==t.UserSettingsSections.Logging),V.x(1),G.Q("ngIf",t.activeSection==t.UserSettingsSections.Debugging))},directives:[ie.K,oe.O,K.JL,W.s,re.w9,ae.v,K.JJ,ee.u,se.s,ge.x,ce.Rr],pipes:[le.X],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row}.settings-menu[_ngcontent-%COMP%]{width:120px;font-size:1.1em;margin-right:48px}.settings-menu[_ngcontent-%COMP%]   span[class^=fa][_ngcontent-%COMP%], .settings-menu[_ngcontent-%COMP%]   span[class^=fas][_ngcontent-%COMP%], .settings-menu[_ngcontent-%COMP%]   span[class^=glyphicon][_ngcontent-%COMP%]{margin-right:10px}.settings-items[_ngcontent-%COMP%]{width:300px;display:grid;grid-template-columns:auto 160px;grid-template-rows:auto;column-gap:10px;row-gap:4px;align-items:center}"],changeDetection:0});class Le{}Le.ɵfac=function(e){return new(e||Le)},Le.ɵmod=s.oA({type:Le}),Le.ɵinj=r.cJ({imports:[[g.e]]})},14008:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var i=n(39946),o=n(60205),s=n(17144);class r{}r.ɵfac=function(e){return new(e||r)},r.ɵmod=o.oA({type:r}),r.ɵinj=s.cJ({imports:[[i.e]]})},58879:(e,t,n)=>{"use strict";n.d(t,{l:()=>v,g:()=>c});var i=n(20244),o=n(54236),s=n(59741),r=n(60862),a=n(45668),g=n(17144);class c{constructor(e,t){this._storage=t,this._settings=this._storage.get(),this._settingsDebugging=this._storage.getDebugging(),this._settingsLogging=this._storage.getLogging(),this._settingsChangeSubject=new o.xQ,this._settingsDebuggingChangeSubject=new o.xQ,this._settingsValueDiff=e.find(this._settings).create(),this._settingsValueDiff.diff(this._settings),this._settingsDebuggingValueDiff=e.find(this._settingsDebugging).create(),this._settingsDebuggingValueDiff.diff(this._settingsDebugging)}get settings(){return this._settings}get settingsDebugging(){return this._settingsDebugging}get settingsLogging(){return this._settingsLogging}get settingsChange(){return this._settingsChangeSubject.asObservable()}get settingsDebuggingChange(){return this._settingsDebuggingChangeSubject.asObservable()}setSettings(e){this._settings=(0,i.extend)(!0,{},this._settings,e),this._storage.set(e);const t=this._settingsValueDiff.diff(e);t&&t.forEachChangedItem((e=>{this._settingsChangeSubject.next(e.key)}))}setDebuggingSettings(e){this._settingsDebugging=(0,i.extend)(!0,{},this._settingsDebugging,e),this._storage.setDebugging(e);const t=this._settingsDebuggingValueDiff.diff(e);t&&t.forEachChangedItem((e=>{this._settingsDebuggingChangeSubject.next(e.key)}))}setLoggingSettings(e){this._settingsLogging=(0,i.extend)(!0,{},this._settingsLogging,e),this._storage.setLogging(e)}}c.ɵfac=function(e){return new(e||c)(r.LF(a.a),r.LF(s.L))},c.ɵprov=g.Yz({token:c,factory:c.ɵfac,providedIn:"root"});var l=n(58971),u=n.n(l),f=n(70343);const d="general-settings",p="debugging-settings",h="logging-settings";class v{get(){let e=u().get(d);return e=(0,i.extend)(!0,{},{theme:f.v.general.theme,language:f.v.general.language},e),e}set(e){u().set(d,e)}getDebugging(){let e=u().get(p);return e=(0,i.extend)(!0,{},{consoleEnabled:f.v.debug.consoleEnabled,debugData:f.v.debug.debugData},e),e}setDebugging(e){u().set(p,e)}getLogging(){let e=u().get(h);return e=(0,i.extend)(!0,{},{consoleLogLevel:f.v.logging.consoleLogLevel,fileLogLevel:f.v.logging.fileLogLevel},e),e}setLogging(e){u().set(h,e)}}v.ɵfac=function(e){return new(e||v)},v.ɵprov=g.Yz({token:v,factory:v.ɵfac})}}]);
//# sourceMappingURL=4805.client.es2015.chunk.436390d372830f000856.js.map