(self.webpackJsonp=self.webpackJsonp||[]).push([[5],{1096:function(e,t,n){"use strict";n.r(t);var o=n(261),r=n(510),a=n(1094),c=n(459),l=n(1091),i=n(4),u=n(79),s=n(64),p=n(82),f=n(1074),d=n(300),g=n(41),m=n(1075),b=n(1076),y=n(138),h=n(24),v=n(15),O=n(50),j=n(12),M=function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e,t){return function(n,o){t(n,o,e)}};let _=class extends m.i{get(e){return null}getMenu(){return null}};_.ɵfac=function(e){return C(e||_)},_.ɵprov=v.h({token:_,factory:_.ɵfac}),M([Object(b.a)(),Object(m.h)(y.a.Text),Object(m.e)("{path}.md"),P(0,Object(m.g)("path")),x("design:type",Function),x("design:paramtypes",[String]),x("design:returntype",h.a)],_.prototype,"get",null),M([Object(b.a)(),Object(m.e)("menu.json"),x("design:type",Function),x("design:paramtypes",[]),x("design:returntype",h.a)],_.prototype,"getMenu",null),_=M([Object(m.a)("content/")],_);const C=O.j(_);j.a(_,[{type:g.a}],null,{get:[],getMenu:[]});var R=n(6);class w{constructor(e){this._contentSvc=e}resolve(e,t){return this._contentSvc.getMenu().toPromise()}}w.ɵfac=function(e){return new(e||w)(R.o(_))},w.ɵprov=v.h({token:w,factory:w.ɵfac}),j.a(w,[{type:g.a}],(function(){return[{type:_}]}),null);var T=n(319),S=n(73),D=n(86),J=n(460),F=n(45),I=n(91),U=n(14),k=n(181),$=n(52),E=n(128),L=n(10),A=n(7),H=n(358),q=n(398),z=n(256),B=n(279),G=n(153),K=n(162),N=n(403),Q=n(104);class V extends N.a{filterHtml(e){return e=e.replace(/content\/SAMPLES_URL\//g,""),Promise.resolve(e)}}V.ɵfac=function(e){return W(e||V)},V.ɵdir=A.i({type:V,selectors:[["","renderMd",""]],features:[Q.b]});const W=O.j(V);j.a(V,[{type:i.b,args:[{selector:"[renderMd]"}]}],null,null);var X=function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},Y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function Z(e,t){1&e&&T.a(0)}function ee(e,t){1&e&&T.a(0)}const te=function(e){return{$implicit:e}};function ne(e,t){if(1&e&&S.d(0,ee,1,0,"ng-container",3),2&e){const e=D.a().$implicit;D.a(2);const t=J.b(5);F.a("ngTemplateOutlet",t)("ngTemplateOutletContext",I.g(2,te,null==e?null:e.children))}}function oe(e,t){if(1&e&&(U.d(0,"li"),U.d(1,"a",7),k.a(2),U.b(),S.d(3,ne,1,4,"ng-template",8),U.b()),2&e){const e=t.$implicit;$.b(1),F.a("mdMenuItem",null==e?null:e.mdPath),$.b(1),E.a(null==e?null:e.title),$.b(1),F.a("ngIf",!(null==e||(null==e.children||!e.children.length)))}}function re(e,t){if(1&e&&(U.d(0,"ul"),S.d(1,oe,4,3,"li",6),U.b()),2&e){const e=t.$implicit;$.b(1),F.a("ngForOf",e)}}let ae=class{constructor(e,t){this._route=e,this._router=t,this.menu=[]}ngOnInit(){this.menu=this._route.snapshot.data.menu,this._routeChangeSubscription=this._route.url.subscribe(e=>{var t;(null===(t=e)||void 0===t?void 0:t.length)||this._router.navigate([d.b],{relativeTo:this._route})})}ngOnDestroy(){var e;null===(e=this._routeChangeSubscription)||void 0===e||e.unsubscribe(),this._routeChangeSubscription=null}};ae.ɵfac=function(e){return new(e||ae)(L.a(s.a),L.a(p.a))},ae.ɵcmp=A.h({type:ae,selectors:[["content-view"]],decls:7,vars:5,consts:[[1,"flex-row","flex-1"],["baseUrl","/content","activeCssClass","active",1,"thin-scrollbar","overflow-vertical-auto"],["mdMenu",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["menuTmpl",""],["renderMd","","baseUrl","content",1,"flex-1","md-content",3,"source"],[4,"ngFor","ngForOf"],[3,"mdMenuItem"],[3,"ngIf"]],template:function(e,t){if(1&e&&(U.d(0,"div",0),U.d(1,"md-menu",1,2),S.d(3,Z,1,0,"ng-container",3),S.d(4,re,2,1,"ng-template",null,4,H.b),U.b(),U.a(6,"div",5),U.b()),2&e){const e=J.b(2),n=J.b(5);$.b(3),F.a("ngTemplateOutlet",n)("ngTemplateOutletContext",I.g(3,te,t.menu)),$.b(3),F.a("source",null==e?null:e.activePath)}},directives:[q.a,B.a,V,G.a,z.a,K.a],styles:["md-menu[_ngcontent-%COMP%]{padding-top:5px;padding-right:15px}md-menu[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{padding-left:0}md-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:15px;list-style-type:none}.md-content[_ngcontent-%COMP%]{padding-right:10px;padding-left:10px}"],changeDetection:0}),ae=X([Object(f.a)({path:"**",resolve:{menu:w}}),Y("design:paramtypes",[s.a,p.a])],ae),j.a(ae,[{type:i.a,args:[{selector:"content-view",templateUrl:"content.component.html",styleUrls:["content.component.scss"],changeDetection:u.a.OnPush}]}],(function(){return[{type:s.a},{type:p.a}]}),null);var ce=[ae];class le{}le.ɵmod=A.j({type:le}),le.ɵinj=v.i({factory:function(e){return new(e||le)}}),("undefined"==typeof ngJitMode||ngJitMode)&&A.m(le,{declarations:[V],exports:[V]}),j.a(le,[{type:o.a,args:[{declarations:[V],exports:[V]}]}],null,null);n(425),n(426);n.d(t,"ContentModule",(function(){return ue}));var ie=function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};let ue=class{};ue.ɵmod=A.j({type:ue}),ue.ɵinj=v.i({factory:function(e){return new(e||ue)},providers:[{provide:c.a,useClass:_},{provide:_,useExisting:c.a},w],imports:[[le,r.a,l.a]]}),ue=ie([Object(a.a)(ce)],ue),("undefined"==typeof ngJitMode||ngJitMode)&&A.m(ue,{declarations:[ae],imports:[le,r.a,l.a]}),j.a(ue,[{type:o.a,args:[{declarations:[...ce],imports:[le,r.a,l.a],providers:[{provide:c.a,useClass:_},{provide:_,useExisting:c.a},w]}]}],null,null)}}]);
//# sourceMappingURL=5.client.es2015.chunk.ab8a46a02e2f7b6fc003.js.map