(self.webpackJsonp=self.webpackJsonp||[]).push([[7],{1100:function(e,t,a){"use strict";a.r(t);var n=a(262),r=a(1097),c=a(417),s=a(4),o=a(72),i=a(1075),l=a(6),u=a(10),p=a(151),b=a(286),f=a(42),d=a(26),m=a(11),g=a(521),h=a(520),y=a(400),v=a(203),j=a(402),O=a(173),D=a(49),w=a(1076),R=a(99),S=a(39),P=a(24),k=a(73),_=a(17),M=a(53),T=function(e,t,a,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(c<3?r(s):c>3?r(t,a,s):r(t,a))||s);return c>3&&s&&Object.defineProperty(t,a,s),s},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},G=function(e,t){return function(a,n){t(a,n,e)}};let W=class extends w.l{getData(){return null}getWithParamsData(e,t,a){return null}_sampleFilterTransform(e){return(e=Object(R.a)(!0,{},e)).date=e.date.toISOString(),e}getWithParamsDataResponseTransform(e){return e.pipe(Object(k.a)(e=>(Object(S.g)(e.birthDate)&&(e.birthDate=O(e.birthDate),e.birthDate.isValid||(e.birthDate=null)),e)))}};W.ɵfac=function(e){return F(e||W)},W.ɵprov=_.h({token:W,factory:W.ɵfac}),T([Object(w.e)("5e3140eb3200000d00888393"),x("design:type",Function),x("design:paramtypes",[]),x("design:returntype",P.a)],W.prototype,"getData",null),T([Object(w.m)(),Object(w.e)("{id}"),G(0,Object(w.h)("id")),G(1,Object(w.j)("wow")),G(2,w.k),G(2,Object(w.g)("_sampleFilterTransform")),x("design:type",Function),x("design:paramtypes",[String,String,Object]),x("design:returntype",P.a)],W.prototype,"getWithParamsData",null),W=T([Object(w.a)("https://www.mocky.io/v2/")],W);const F=M.j(W);m.a(W,[{type:D.a}],null,{getData:[],getWithParamsData:[]});var J=a(7),E=a(32),C=a(320),U=a(111),I=a(110),V=a(345),q=function(e,t,a,n){return new(a||(a=Promise))((function(r,c){function s(e){try{i(n.next(e))}catch(e){c(e)}}function o(e){try{i(n.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,o)}i((n=n.apply(e,t||[])).next())}))};class z{constructor(e,t){this._sampleSvc=e,this._changeDetector=t}simpleGet(){return q(this,void 0,void 0,(function*(){this.result=yield this._sampleSvc.getData().toPromise(),this._changeDetector.detectChanges(),console.log(this.result)}))}advancedGet(){return q(this,void 0,void 0,(function*(){this.result=yield this._sampleSvc.getWithParamsData("5e3140eb3200000d00888393","test",{date:O(),name:"Test",age:33}).toPromise(),this._changeDetector.detectChanges(),console.log(this.result)}))}}z.ɵfac=function(e){return new(e||z)(J.a(W),J.a(E.a))},z.ɵcmp=l.h({type:z,selectors:[["usage-sample"]],features:[C.a([W])],decls:13,vars:3,consts:[[1,"flex-row"],[1,"margin-right-extra-small"],[1,"btn","btn-primary",3,"click"],[1,"bold","text-uppercase","margin-top-big"]],template:function(e,t){1&e&&(u.c(0,"div",0),u.c(1,"div",1),u.c(2,"button",2),U.b("click",(function(e){return t.simpleGet()})),p.a(3,"simple GET"),u.b(),u.b(),u.c(4,"div",1),u.c(5,"button",2),U.b("click",(function(e){return t.advancedGet()})),p.a(6,"advanced GET"),u.b(),u.b(),u.b(),u.c(7,"div",3),p.a(8,"result:"),u.b(),u.a(9,"hr"),u.c(10,"div"),p.a(11),b.a(12,"json"),u.b()),2&e&&(f.b(11),I.a(b.b(12,1,t.result)))},pipes:[V.a],encapsulation:2,changeDetection:0}),m.a(z,[{type:s.a,args:[{selector:"usage-sample",templateUrl:"usageSample.component.html",providers:[W],changeDetection:o.a.OnPush}]}],(function(){return[{type:W},{type:E.a}]}),null);var A=a(344),B=a(522),H=function(e,t,a,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(c<3?r(s):c>3?r(t,a,s):r(t,a))||s);return c>3&&s&&Object.defineProperty(t,a,s),s};let K=class{};K.ɵfac=function(e){return new(e||K)},K.ɵcmp=l.h({type:K,selectors:[["usage-view"]],decls:18,vars:16,consts:[["label","usageSample.component.ts"],[3,"renderMarkdown"],["label","usageSample.component.html"],["label","sample.service.ts"]],template:function(e,t){1&e&&(u.a(0,"go-back"),u.c(1,"h3"),p.a(2,"REST usage samples"),u.b(),u.c(3,"source-code"),u.c(4,"mat-tab-group"),u.c(5,"mat-tab",0),u.a(6,"div",1),b.a(7,"async"),b.a(8,"asSource"),u.b(),u.c(9,"mat-tab",2),u.a(10,"div",1),b.a(11,"async"),b.a(12,"asSource"),u.b(),u.c(13,"mat-tab",3),u.a(14,"div",1),b.a(15,"async"),b.a(16,"asSource"),u.b(),u.b(),u.b(),u.a(17,"usage-sample")),2&e&&(f.b(6),d.b("renderMarkdown",b.b(7,3,b.b(8,5,"pages/+sampleRest/usage/usageSample.component.ts"))),f.b(4),d.b("renderMarkdown",b.b(11,7,b.c(12,9,"pages/+sampleRest/usage/usageSample.component.html","html"))),f.b(4),d.b("renderMarkdown",b.b(15,12,b.b(16,14,"services/api/sample/sample.service.ts"))))},directives:[g.a,h.a,y.a,v.b,j.a,z],pipes:[A.a,B.a],encapsulation:2,changeDetection:0}),K=H([Object(i.a)({path:""})],K),m.a(K,[{type:s.a,args:[{selector:"usage-view",templateUrl:"usage.component.html",changeDetection:o.a.OnPush}]}],null,null);var L=[K];a.d(t,"SampleRestModule",(function(){return Q}));var N=function(e,t,a,n){var r,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(s=(c<3?r(s):c>3?r(t,a,s):r(t,a))||s);return c>3&&s&&Object.defineProperty(t,a,s),s};let Q=class{};Q.ɵmod=l.j({type:Q}),Q.ɵinj=_.i({factory:function(e){return new(e||Q)},imports:[[c.a]]}),Q=N([Object(r.a)(L)],Q),("undefined"==typeof ngJitMode||ngJitMode)&&l.m(Q,{declarations:[K,z],imports:[c.a]}),m.a(Q,[{type:n.a,args:[{imports:[c.a],declarations:[...L,z]}]}],null,null)}}]);
//# sourceMappingURL=7.client.es2015.chunk.8adc925fb64f0f308764.js.map