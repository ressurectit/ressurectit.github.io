(self.webpackJsonp=self.webpackJsonp||[]).push([[5],{1136:function(e,t,a){"use strict";var n=a(51),l=a(1114),o=a(532),c=a(70),r=a(555),s=a(28),i=a(80),p=a(17),u=a(55),m=a(8),b=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t){return function(a,n){t(a,n,e)}};let h=class extends l.l{getData(e,t){return this.getAllData().pipe(Object(i.a)(a=>{let n=new o.a;return n.setPage(e.page).setItemsPerPage(e.size).setItemCount(a.length),t&&(a=a.sort((e,a)=>{let n=Object(c.c)(e,t.sort),l=Object(c.c)(a,t.sort),o=+n,s=+l;return isNaN(o)||isNaN(s)||(n=o,l=s),n<l?t.direction==r.a.Ascendant?-1:1:n>l?t.direction==r.a.Ascendant?1:-1:0})),{content:a.slice(n.getOffset(),n.getOffset()+e.size),totalElements:a.length}}))}getCis(e){return this.getCisData().pipe(Object(i.a)(t=>({content:t=t.filter(t=>t.kod.toLowerCase().indexOf(e.toLowerCase())>=0||t.popis.toLowerCase().indexOf(e.toLowerCase())>=0),totalElements:t.length})))}getAllData(){return null}getCisData(){return null}getEnum(e){return null}};h.ɵfac=function(e){return v(e||h)},h.ɵprov=p.h({token:h,factory:h.ɵfac}),b([Object(l.e)("data.json"),d("design:type",Function),d("design:paramtypes",[]),d("design:returntype",s.a)],h.prototype,"getAllData",null),b([Object(l.e)("cis.json"),d("design:type",Function),d("design:paramtypes",[]),d("design:returntype",s.a)],h.prototype,"getCisData",null),b([Object(l.e)("{name}.json"),f(0,Object(l.h)("name")),d("design:type",Function),d("design:paramtypes",[String]),d("design:returntype",s.a)],h.prototype,"getEnum",null),h=b([Object(l.a)("content/")],h);const v=u.j(h);m.a(h,[{type:n.a}],null,{getAllData:[],getCisData:[],getEnum:[]}),a.d(t,"a",(function(){return h}))},1142:function(e,t,a){"use strict";a.r(t);var n=a(291),l=a(1135),o=a(446),c=a(4),r=a(61),s=a(1113),i=a(6),p=a(9),u=a(145),m=a(207),b=a(34),d=a(21),f=a(8),h=a(558),v=a(431),g=a(557),y=a(429),S=a(226),x=a(170),O=a(113),w=a(286),C=a(427),k=a(187),M=a(247),j=a(193),D=a(374);class P{constructor(){this.selectControl=new x.b(null)}}P.ɵfac=function(e){return new(e||P)},P.ɵcmp=i.h({type:P,selectors:[["basic-sample"]],decls:9,vars:4,consts:[[3,"formControl"],["value","first","text","First value text"],["value","second","text","Second value text"],["value","third","text","Third value text"],["value","fourth","text","Fourth value text"],["value","fifth","text","Fifth value text"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"ng-select",0),p.a(4,"ng-option",1),p.a(5,"ng-option",2),p.a(6,"ng-option",3),p.a(7,"ng-option",4),p.a(8,"ng-option",5),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,2,null==t.selectControl?null:t.selectControl.value),""),b.b(2),d.b("formControl",t.selectControl))},directives:[w.a,C.a,M.a,j.a,k.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(P,[{type:c.a,args:[{selector:"basic-sample",templateUrl:"basicSample.component.html",changeDetection:r.a.OnPush}]}],null,null);var R=a(373),T=a(559),V=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let U=class{};U.ɵfac=function(e){return new(e||U)},U.ɵcmp=i.h({type:U,selectors:[["basic-view"]],decls:17,vars:11,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","basicSample.component.ts"],[3,"renderMarkdown"],["label","basicSample.component.html"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Basic Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.b(),p.b(),p.a(16,"basic-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,2,m.b(11,4,"pages/+sampleSelect/basic/basicSample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,6,m.c(15,8,"pages/+sampleSelect/basic/basicSample.component.html","html"))))},directives:[h.a,v.a,g.a,y.a,S.b,P],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),U=V([Object(s.a)({path:""})],U),f.a(U,[{type:c.a,args:[{selector:"basic-view",templateUrl:"basic.component.html",changeDetection:r.a.OnPush}]}],null,null);var F=a(5),L=a(27),z=a(52),N=a(152);function E(e,t){if(1&e&&p.a(0,"ng-option",2),2&e){const e=t.$implicit;d.b("value",null==e?null:e.kod)("text",null==e?null:e.popis)}}class I{constructor(e){this.selectControl=new x.b(null),this.lazyOptions=[],setTimeout(()=>{this.lazyOptions=[{kod:"first-x",popis:"First value text"},{kod:"second-x",popis:"Second value text"},{kod:"third-x",popis:"Third value text"},{kod:"fourth-x",popis:"Fourth value text"},{kod:"fifth-x",popis:"Fifth value text"}],e.detectChanges()},2500)}}I.ɵfac=function(e){return new(e||I)(F.a(L.a))},I.ɵcmp=i.h({type:I,selectors:[["basic-lazy-sample"]],decls:5,vars:5,consts:[[3,"formControl"],[3,"value","text",4,"ngFor","ngForOf"],[3,"value","text"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"ng-select",0),z.d(4,E,1,2,"ng-option",1),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,3,null==t.selectControl?null:t.selectControl.value),""),b.b(2),d.b("formControl",t.selectControl),b.b(1),d.b("ngForOf",t.lazyOptions))},directives:[w.a,C.a,M.a,j.a,N.a,k.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(I,[{type:c.a,args:[{selector:"basic-lazy-sample",templateUrl:"basicLazySample.component.html",changeDetection:r.a.OnPush}]}],(function(){return[{type:L.a}]}),null);var _=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let H=class{};H.ɵfac=function(e){return new(e||H)},H.ɵcmp=i.h({type:H,selectors:[["basic-lazy-view"]],decls:21,vars:16,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","basicLazySample.component.ts"],[3,"renderMarkdown"],["label","basicLazySample.component.html"],["label","kodPopisValue.interface.ts"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Basic Lazy Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.c(16,"mat-tab",5),p.a(17,"div",3),m.a(18,"async"),m.a(19,"asSource"),p.b(),p.b(),p.b(),p.a(20,"basic-lazy-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,3,m.b(11,5,"pages/+sampleSelect/basicLazy/basicLazySample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,7,m.c(15,9,"pages/+sampleSelect/basicLazy/basicLazySample.component.html","html"))),b.b(4),d.b("renderMarkdown",m.b(18,12,m.b(19,14,"misc/types/kodPopisValue.interface.ts"))))},directives:[h.a,v.a,g.a,y.a,S.b,I],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),H=_([Object(s.a)({path:"basicLazy"})],H),f.a(H,[{type:c.a,args:[{selector:"basic-lazy-view",templateUrl:"basicLazy.component.html",changeDetection:r.a.OnPush}]}],null,null);var A=a(543),G=a(102),J=a(55),$=a(270);class B extends A.a{}B.ɵfac=function(e){return q(e||B)},B.ɵcmp=i.h({type:B,selectors:[["custom-readonly-state"]],features:[G.b],decls:3,vars:4,consts:[[1,"form-control"]],template:function(e,t){1&e&&(p.c(0,"div",0),u.a(1),m.a(2,"ngSelectValue"),p.b()),2&e&&(b.b(1),O.a(m.c(2,1,null==t.valueHandler?null:t.valueHandler.selectedOptions,null==t.texts?null:t.texts.nothingSelected)))},pipes:[$.a],encapsulation:2,changeDetection:0});const q=J.j(B);f.a(B,[{type:c.a,args:[{selector:"custom-readonly-state",templateUrl:"customReadonlyState.component.html",changeDetection:r.a.OnPush}]}],null,null);var K=a(87);class Q{constructor(){this.selectControl=new x.b(null),this.readonly=!1,this.selectOptions={plugins:{readonlyState:{type:B}}}}}Q.ɵfac=function(e){return new(e||Q)},Q.ɵcmp=i.h({type:Q,selectors:[["custom-readonly-sample"]],decls:12,vars:7,consts:[[1,"btn","btn-primary",3,"click"],[3,"readonly","selectOptions","formControl"],["value","first","text","First value text"],["value","second","text","Second value text"],["value","third","text","Third value text"],["value","fourth","text","Fourth value text"],["value","fifth","text","Fifth value text"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"button",0),K.b("click",(function(e){return t.readonly=!t.readonly})),p.c(4,"span"),u.a(5),p.b(),p.b(),p.c(6,"ng-select",1),p.a(7,"ng-option",2),p.a(8,"ng-option",3),p.a(9,"ng-option",4),p.a(10,"ng-option",5),p.a(11,"ng-option",6),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,5,null==t.selectControl?null:t.selectControl.value),""),b.b(4),O.a(t.readonly?"to normal":"to readonly"),b.b(1),d.b("readonly",t.readonly)("selectOptions",t.selectOptions)("formControl",t.selectControl))},directives:[w.a,C.a,M.a,j.a,k.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(Q,[{type:c.a,args:[{selector:"custom-readonly-sample",templateUrl:"customReadonlySample.component.html",changeDetection:r.a.OnPush}]}],(function(){return[]}),null);var W=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let X=class{};X.ɵfac=function(e){return new(e||X)},X.ɵcmp=i.h({type:X,selectors:[["custom-readonly-view"]],decls:29,vars:27,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","customReadonlySample.component.ts"],[3,"renderMarkdown"],["label","customReadonlySample.component.html"],["label","kodPopisValue.interface.ts"],["label","customReadonlyState.component.ts"],["label","customReadonlyState.component.html"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Custom Readonly Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.c(16,"mat-tab",5),p.a(17,"div",3),m.a(18,"async"),m.a(19,"asSource"),p.b(),p.c(20,"mat-tab",6),p.a(21,"div",3),m.a(22,"async"),m.a(23,"asSource"),p.b(),p.c(24,"mat-tab",7),p.a(25,"div",3),m.a(26,"async"),m.a(27,"asSource"),p.b(),p.b(),p.b(),p.a(28,"custom-readonly-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,5,m.b(11,7,"pages/+sampleSelect/customReadonly/customReadonlySample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,9,m.c(15,11,"pages/+sampleSelect/customReadonly/customReadonlySample.component.html","html"))),b.b(4),d.b("renderMarkdown",m.b(18,14,m.b(19,16,"misc/types/kodPopisValue.interface.ts"))),b.b(4),d.b("renderMarkdown",m.b(22,18,m.b(23,20,"pages/+sampleSelect/customReadonly/customReadonlyState.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(26,22,m.c(27,24,"pages/+sampleSelect/customReadonly/customReadonlyState.component.html","html"))))},directives:[h.a,v.a,g.a,y.a,S.b,Q],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),X=W([Object(s.a)({path:"customReadonly"})],X),f.a(X,[{type:c.a,args:[{selector:"custom-readonly-view",templateUrl:"customReadonly.component.html",changeDetection:r.a.OnPush}]}],null,null);var Y=a(255);function Z(e,t){if(1&e&&(u.a(0),m.a(1,"ngSelectValue")),2&e){const e=t.$implicit;O.c("",null==e?null:null==e.valueHandler?null:null==e.valueHandler.selectedOptions?null:e.valueHandler.selectedOptions.value," => ",m.c(1,2,null==e?null:null==e.valueHandler?null:e.valueHandler.selectedOptions,null==e?null:null==e.texts?null:e.texts.nothingSelected),"")}}function ee(e,t){if(1&e&&u.a(0),2&e){const e=t.$implicit;O.c("",null==e?null:e.value," - ",null==e?null:e.text,"")}}class te{constructor(){this.selectControl=new x.b(null)}}te.ɵfac=function(e){return new(e||te)},te.ɵcmp=i.h({type:te,selectors:[["custom-template-sample"]],decls:13,vars:4,consts:[[3,"formControl"],["value","first","text","First value text"],["value","second","text","Second value text"],["value","third","text","Third value text"],["value","fourth","text","Fourth value text"],["value","fifth","text","Fifth value text"],["normalStateTemplate",""],["optionTemplate",""]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"ng-select",0),p.a(4,"ng-option",1),p.a(5,"ng-option",2),p.a(6,"ng-option",3),p.a(7,"ng-option",4),p.a(8,"ng-option",5),z.d(9,Z,2,5,"ng-template",null,6,Y.b),z.d(11,ee,1,2,"ng-template",null,7,Y.b),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,2,null==t.selectControl?null:t.selectControl.value),""),b.b(2),d.b("formControl",t.selectControl))},directives:[w.a,C.a,M.a,j.a,k.a],pipes:[D.a,$.a],encapsulation:2,changeDetection:0}),f.a(te,[{type:c.a,args:[{selector:"custom-template-sample",templateUrl:"customTemplateSample.component.html",changeDetection:r.a.OnPush}]}],null,null);var ae=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let ne=class{};ne.ɵfac=function(e){return new(e||ne)},ne.ɵcmp=i.h({type:ne,selectors:[["custom-template-view"]],decls:17,vars:11,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","customTemplateSample.component.ts"],[3,"renderMarkdown"],["label","customTemplateSample.component.html"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Custom Template Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.b(),p.b(),p.a(16,"custom-template-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,2,m.b(11,4,"pages/+sampleSelect/customTemplate/customTemplateSample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,6,m.c(15,8,"pages/+sampleSelect/customTemplate/customTemplateSample.component.html","html"))))},directives:[h.a,v.a,g.a,y.a,S.b,te],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),ne=ae([Object(s.a)({path:"customTemplate"})],ne),f.a(ne,[{type:c.a,args:[{selector:"custom-template-view",templateUrl:"customTemplate.component.html",changeDetection:r.a.OnPush}]}],null,null);var le=a(549),oe=a(1138),ce=a(1139),re=a(38),se=a(1136),ie=a(165),pe=function(e,t,a,n){return new(a||(a=Promise))((function(l,o){function c(e){try{s(n.next(e))}catch(e){o(e)}}function r(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,r)}s((n=n.apply(e,t||[])).next())}))};class ue{constructor(e){this._dataSvc=e,this.selectControl=new x.b(null),this._getData=e=>pe(this,void 0,void 0,(function*(){Object(re.h)(e)||(e=e.kod);let t=yield this._dataSvc.getCis(e).toPromise();return t&&t.content&&t.content.length?t.content.map(e=>({value:e.kod,text:e.popis})):[]})),this.selectOptions={plugins:{liveSearch:{type:le.a},valueHandler:{type:oe.a,options:{dynamicOptionsCallback:this._getData}}},optionsGatherer:new ce.a({dynamicOptionsCallback:this._getData})}}}ue.ɵfac=function(e){return new(e||ue)(F.a(se.a))},ue.ɵcmp=i.h({type:ue,selectors:[["dynamic-sample"]],features:[ie.a([se.a])],decls:4,vars:5,consts:[[3,"selectOptions","formControl"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.a(3,"ng-select",0)),2&e&&(b.b(1),O.b("Value: ",m.b(2,3,null==t.selectControl?null:t.selectControl.value),""),b.b(2),d.b("selectOptions",t.selectOptions)("formControl",t.selectControl))},directives:[w.a,C.a,M.a,j.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(ue,[{type:c.a,args:[{selector:"dynamic-sample",templateUrl:"dynamicSample.component.html",providers:[se.a],changeDetection:r.a.OnPush}]}],(function(){return[{type:se.a}]}),null);var me=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let be=class{};be.ɵfac=function(e){return new(e||be)},be.ɵcmp=i.h({type:be,selectors:[["dynamic-view"]],decls:21,vars:16,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","dynamicSample.component.ts"],[3,"renderMarkdown"],["label","dynamicSample.component.html"],["label","kodPopisValue.interface.ts"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Dynamic Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.c(16,"mat-tab",5),p.a(17,"div",3),m.a(18,"async"),m.a(19,"asSource"),p.b(),p.b(),p.b(),p.a(20,"dynamic-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,3,m.b(11,5,"pages/+sampleSelect/dynamic/dynamicSample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,7,m.c(15,9,"pages/+sampleSelect/dynamic/dynamicSample.component.html","html"))),b.b(4),d.b("renderMarkdown",m.b(18,12,m.b(19,14,"misc/types/kodPopisValue.interface.ts"))))},directives:[h.a,v.a,g.a,y.a,S.b,ue],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),be=me([Object(s.a)({path:"dynamic"})],be),f.a(be,[{type:c.a,args:[{selector:"dynamic-view",templateUrl:"dynamic.component.html",changeDetection:r.a.OnPush}]}],null,null);class de{constructor(){this.selectControl=new x.b(null),this.selectOptions={plugins:{liveSearch:{type:le.a}}}}}de.ɵfac=function(e){return new(e||de)},de.ɵcmp=i.h({type:de,selectors:[["live-search-sample"]],decls:9,vars:5,consts:[[3,"selectOptions","formControl"],["value","first","text","First value text"],["value","second","text","Second value text"],["value","third","text","Third value text"],["value","fourth","text","Fourth value text"],["value","fifth","text","Fifth value text"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"ng-select",0),p.a(4,"ng-option",1),p.a(5,"ng-option",2),p.a(6,"ng-option",3),p.a(7,"ng-option",4),p.a(8,"ng-option",5),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,3,null==t.selectControl?null:t.selectControl.value),""),b.b(2),d.b("selectOptions",t.selectOptions)("formControl",t.selectControl))},directives:[w.a,C.a,M.a,j.a,k.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(de,[{type:c.a,args:[{selector:"live-search-sample",templateUrl:"liveSearchSample.component.html",changeDetection:r.a.OnPush}]}],(function(){return[]}),null);var fe=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let he=class{};he.ɵfac=function(e){return new(e||he)},he.ɵcmp=i.h({type:he,selectors:[["live-search-view"]],decls:21,vars:16,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","liveSearchSample.component.ts"],[3,"renderMarkdown"],["label","liveSearchSample.component.html"],["label","kodPopisValue.interface.ts"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Live Search Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.c(16,"mat-tab",5),p.a(17,"div",3),m.a(18,"async"),m.a(19,"asSource"),p.b(),p.b(),p.b(),p.a(20,"live-search-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,3,m.b(11,5,"pages/+sampleSelect/liveSearch/liveSearchSample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,7,m.c(15,9,"pages/+sampleSelect/liveSearch/liveSearchSample.component.html","html"))),b.b(4),d.b("renderMarkdown",m.b(18,12,m.b(19,14,"misc/types/kodPopisValue.interface.ts"))))},directives:[h.a,v.a,g.a,y.a,S.b,de],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),he=fe([Object(s.a)({path:"liveSearch"})],he),f.a(he,[{type:c.a,args:[{selector:"live-search-view",templateUrl:"liveSearch.component.html",changeDetection:r.a.OnPush}]}],null,null);class ve{constructor(){this.selectControl=new x.b(null)}}ve.ɵfac=function(e){return new(e||ve)},ve.ɵcmp=i.h({type:ve,selectors:[["multiple-sample"]],decls:9,vars:4,consts:[["multiple","",3,"formControl"],["value","first","text","First value text"],["value","second","text","Second value text"],["value","third","text","Third value text"],["value","fourth","text","Fourth value text"],["value","fifth","text","Fifth value text"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"ng-select",0),p.a(4,"ng-option",1),p.a(5,"ng-option",2),p.a(6,"ng-option",3),p.a(7,"ng-option",4),p.a(8,"ng-option",5),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,2,null==t.selectControl?null:t.selectControl.value),""),b.b(2),d.b("formControl",t.selectControl))},directives:[w.a,C.a,M.a,j.a,k.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(ve,[{type:c.a,args:[{selector:"multiple-sample",templateUrl:"multipleSample.component.html",changeDetection:r.a.OnPush}]}],null,null);var ge=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let ye=class{};ye.ɵfac=function(e){return new(e||ye)},ye.ɵcmp=i.h({type:ye,selectors:[["multiple-view"]],decls:17,vars:11,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","multipleSample.component.ts"],[3,"renderMarkdown"],["label","multipleSample.component.html"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Multiple Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.b(),p.b(),p.a(16,"multiple-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,2,m.b(11,4,"pages/+sampleSelect/multiple/multipleSample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,6,m.c(15,8,"pages/+sampleSelect/multiple/multipleSample.component.html","html"))))},directives:[h.a,v.a,g.a,y.a,S.b,ve],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),ye=ge([Object(s.a)({path:"multiple"})],ye),f.a(ye,[{type:c.a,args:[{selector:"multiple-view",templateUrl:"multiple.component.html",changeDetection:r.a.OnPush}]}],null,null);class Se{constructor(){this.selectControl=new x.b(null),this.readonly=!1}}Se.ɵfac=function(e){return new(e||Se)},Se.ɵcmp=i.h({type:Se,selectors:[["readonly-sample"]],decls:12,vars:6,consts:[[1,"btn","btn-primary",3,"click"],[3,"readonly","formControl"],["value","first","text","First value text"],["value","second","text","Second value text"],["value","third","text","Third value text"],["value","fourth","text","Fourth value text"],["value","fifth","text","Fifth value text"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"button",0),K.b("click",(function(e){return t.readonly=!t.readonly})),p.c(4,"span"),u.a(5),p.b(),p.b(),p.c(6,"ng-select",1),p.a(7,"ng-option",2),p.a(8,"ng-option",3),p.a(9,"ng-option",4),p.a(10,"ng-option",5),p.a(11,"ng-option",6),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,4,null==t.selectControl?null:t.selectControl.value),""),b.b(4),O.a(t.readonly?"to normal":"to readonly"),b.b(1),d.b("readonly",t.readonly)("formControl",t.selectControl))},directives:[w.a,C.a,M.a,j.a,k.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(Se,[{type:c.a,args:[{selector:"readonly-sample",templateUrl:"readonlySample.component.html",changeDetection:r.a.OnPush}]}],null,null);var xe=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let Oe=class{};Oe.ɵfac=function(e){return new(e||Oe)},Oe.ɵcmp=i.h({type:Oe,selectors:[["readonly-view"]],decls:17,vars:11,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","readonlySample.component.ts"],[3,"renderMarkdown"],["label","readonlySample.component.html"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Readonly Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.b(),p.b(),p.a(16,"readonly-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,2,m.b(11,4,"pages/+sampleSelect/readonly/readonlySample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,6,m.c(15,8,"pages/+sampleSelect/readonly/readonlySample.component.html","html"))))},directives:[h.a,v.a,g.a,y.a,S.b,Se],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),Oe=xe([Object(s.a)({path:"readonly"})],Oe),f.a(Oe,[{type:c.a,args:[{selector:"readonly-view",templateUrl:"readonly.component.html",changeDetection:r.a.OnPush}]}],null,null);var we=a(96);class Ce{constructor(){this.selectControl=new x.b(null),this.selectOptions={plugins:{normalState:{options:{texts:{nothingSelected:"Nič nevybraté"}}}}}}}Ce.ɵfac=function(e){return new(e||Ce)},Ce.ɵcmp=i.h({type:Ce,selectors:[["config-sample"]],features:[ie.a([{provide:we.b,useValue:{texts:{nothingSelected:"There is nothing :)"}}}])],decls:21,vars:6,consts:[[1,"bold","margin-top-small"],[3,"formControl"],["value","first","text","First value text"],["value","second","text","Second value text"],["value","third","text","Third value text"],["value","fourth","text","Fourth value text"],["value","fifth","text","Fifth value text"],[3,"formControl","selectOptions"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"div",0),u.a(4,"DI provided options"),p.b(),p.c(5,"ng-select",1),p.a(6,"ng-option",2),p.a(7,"ng-option",3),p.a(8,"ng-option",4),p.a(9,"ng-option",5),p.a(10,"ng-option",6),p.b(),p.c(11,"div",0),u.a(12,"Locally overriden options"),p.b(),p.c(13,"ng-select",7),p.a(14,"ng-option",2),p.a(15,"ng-option",3),p.a(16,"ng-option",4),p.a(17,"ng-option",5),p.a(18,"ng-option",6),p.b(),p.c(19,"div",0),u.a(20,"All other select samples are using global DI provided options"),p.b()),2&e&&(b.b(1),O.b("Value: ",m.b(2,4,null==t.selectControl?null:t.selectControl.value),""),b.b(4),d.b("formControl",t.selectControl),b.b(8),d.b("formControl",t.selectControl)("selectOptions",t.selectOptions))},directives:[w.a,C.a,M.a,j.a,k.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(Ce,[{type:c.a,args:[{selector:"config-sample",templateUrl:"configSample.component.html",providers:[{provide:we.b,useValue:{texts:{nothingSelected:"There is nothing :)"}}}],changeDetection:r.a.OnPush}]}],(function(){return[]}),null);var ke=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let Me=class{};Me.ɵfac=function(e){return new(e||Me)},Me.ɵcmp=i.h({type:Me,selectors:[["config-view"]],decls:29,vars:26,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","configSample.component.ts"],[3,"renderMarkdown"],["label","configSample.component.html"],["label","kodPopisValue.interface.ts"],["label","select.global.conf.ts"],["label","constants.ts"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"Configuration Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.c(16,"mat-tab",5),p.a(17,"div",3),m.a(18,"async"),m.a(19,"asSource"),p.b(),p.c(20,"mat-tab",6),p.a(21,"div",3),m.a(22,"async"),m.a(23,"asSource"),p.b(),p.c(24,"mat-tab",7),p.a(25,"div",3),m.a(26,"async"),m.a(27,"asSource"),p.b(),p.b(),p.b(),p.a(28,"config-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,5,m.b(11,7,"pages/+sampleSelect/config/configSample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,9,m.c(15,11,"pages/+sampleSelect/config/configSample.component.html","html"))),b.b(4),d.b("renderMarkdown",m.b(18,14,m.b(19,16,"misc/types/kodPopisValue.interface.ts"))),b.b(4),d.b("renderMarkdown",m.b(22,18,m.b(23,20,"boot/select.global.conf.ts"))),b.b(4),d.b("renderMarkdown",m.b(26,22,m.b(27,24,"misc/constants.ts"))))},directives:[h.a,v.a,g.a,y.a,S.b,Ce],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),Me=ke([Object(s.a)({path:"config"})],Me),f.a(Me,[{type:c.a,args:[{selector:"config-view",templateUrl:"config.component.html",changeDetection:r.a.OnPush}]}],null,null);var je=a(1140),De=a(1141),Pe=a(328);class Re{constructor(e,t){this._enums=e,this._select=t,this._codeOptionsGatherer=new je.a,this._select.selectOptions={autoInitialize:!1}}ngOnInit(){if(Object(re.b)(this.externalSourceName))throw new Error("No name was provided for external directive!");let e;this._select.execute(Object(De.a)({optionsGatherer:this._codeOptionsGatherer})),e=this._enums.getEnum(this.externalSourceName),e.subscribe(e=>{let t;t=this.mappingCallback?e.map(this.mappingCallback):e.map(e=>({value:e.kod,name:e.popis})),this.onlyCodes?t=t.map(e=>({value:e.value,name:e.value})):this.onlyTexts&&(t=t.map(e=>({value:e.name,name:e.name}))),t=t.filter(e=>Object(re.g)(e)),this.emptyValueText&&(t=[{value:"",name:Object(re.h)(this.emptyValueText)?this.emptyValueText:Pe.c},...t]),this._codeOptionsGatherer.options=t.map(e=>({value:e.value,text:e.name})),this._codeOptionsGatherer.optionsChange.emit(),this._codeOptionsGatherer.availableOptionsChange.emit()})}}Re.ɵfac=function(e){return new(e||Re)(F.a(se.a),F.a(w.a))},Re.ɵdir=i.i({type:Re,selectors:[["ng-select","external",""]],inputs:{externalSourceName:["external","externalSourceName"],emptyValueText:"emptyValueText",onlyCodes:"onlyCodes",onlyTexts:"onlyTexts",mappingCallback:"mappingCallback"},features:[ie.a([se.a])]}),f.a(Re,[{type:c.b,args:[{selector:"ng-select[external]",providers:[se.a]}]}],(function(){return[{type:se.a},{type:w.a}]}),{externalSourceName:[{type:c.e,args:["external"]}],emptyValueText:[{type:c.e}],onlyCodes:[{type:c.e}],onlyTexts:[{type:c.e}],mappingCallback:[{type:c.e}]});class Te{constructor(){this.selectControl=new x.b(null)}}Te.ɵfac=function(e){return new(e||Te)},Te.ɵcmp=i.h({type:Te,selectors:[["external-sample"]],decls:12,vars:8,consts:[[1,"bold","margin-top-small"],["external","cis",3,"formControl"],["external","cis",3,"formControl","onlyCodes"],["external","cis",3,"formControl","onlyTexts"]],template:function(e,t){1&e&&(p.c(0,"div"),u.a(1),m.a(2,"json"),p.b(),p.c(3,"div",0),u.a(4,"Standard enum"),p.b(),p.a(5,"ng-select",1),p.c(6,"div",0),u.a(7,"Only codes enum"),p.b(),p.a(8,"ng-select",2),p.c(9,"div",0),u.a(10,"Only texts enum"),p.b(),p.a(11,"ng-select",3)),2&e&&(b.b(1),O.b("Value: ",m.b(2,6,null==t.selectControl?null:t.selectControl.value),""),b.b(4),d.b("formControl",t.selectControl),b.b(3),d.b("formControl",t.selectControl)("onlyCodes",!0),b.b(3),d.b("formControl",t.selectControl)("onlyTexts",!0))},directives:[w.a,Re,C.a,M.a,j.a],pipes:[D.a],encapsulation:2,changeDetection:0}),f.a(Te,[{type:c.a,args:[{selector:"external-sample",templateUrl:"externalSample.component.html",changeDetection:r.a.OnPush}]}],null,null);var Ve=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let Ue=class{};Ue.ɵfac=function(e){return new(e||Ue)},Ue.ɵcmp=i.h({type:Ue,selectors:[["external-view"]],decls:29,vars:26,consts:[[1,"bold","spread-text"],["renderMarkdown","`import {NgSelectModule} from '@anglr/select';`"],["label","externalSample.component.ts"],[3,"renderMarkdown"],["label","externalSample.component.html"],["label","externalSource.directive.ts"],["label","kodPopisValue.interface.ts"],["label","constants.ts"]],template:function(e,t){1&e&&(p.a(0,"go-back"),p.c(1,"h3"),u.a(2,"External Source Select Sample"),p.b(),p.c(3,"div",0),u.a(4,"IMPORT MODULE"),p.b(),p.a(5,"div",1),p.c(6,"source-code"),p.c(7,"mat-tab-group"),p.c(8,"mat-tab",2),p.a(9,"div",3),m.a(10,"async"),m.a(11,"asSource"),p.b(),p.c(12,"mat-tab",4),p.a(13,"div",3),m.a(14,"async"),m.a(15,"asSource"),p.b(),p.c(16,"mat-tab",5),p.a(17,"div",3),m.a(18,"async"),m.a(19,"asSource"),p.b(),p.c(20,"mat-tab",6),p.a(21,"div",3),m.a(22,"async"),m.a(23,"asSource"),p.b(),p.c(24,"mat-tab",7),p.a(25,"div",3),m.a(26,"async"),m.a(27,"asSource"),p.b(),p.b(),p.b(),p.a(28,"external-sample")),2&e&&(b.b(9),d.b("renderMarkdown",m.b(10,5,m.b(11,7,"pages/+sampleSelect/external/externalSample.component.ts"))),b.b(4),d.b("renderMarkdown",m.b(14,9,m.c(15,11,"pages/+sampleSelect/external/externalSample.component.html","html"))),b.b(4),d.b("renderMarkdown",m.b(18,14,m.b(19,16,"pages/+sampleSelect/external/externalSource.directive.ts"))),b.b(4),d.b("renderMarkdown",m.b(22,18,m.b(23,20,"misc/types/kodPopisValue.interface.ts"))),b.b(4),d.b("renderMarkdown",m.b(26,22,m.b(27,24,"misc/constants.ts"))))},directives:[h.a,v.a,g.a,y.a,S.b,Te],pipes:[R.a,T.a],encapsulation:2,changeDetection:0}),Ue=Ve([Object(s.a)({path:"external"})],Ue),f.a(Ue,[{type:c.a,args:[{selector:"external-view",templateUrl:"external.component.html",changeDetection:r.a.OnPush}]}],null,null);var Fe=[U,H,X,ne,be,he,ye,Oe,Me,Ue],Le=a(17);a.d(t,"SampleSelectModule",(function(){return Ne}));var ze=function(e,t,a,n){var l,o=arguments.length,c=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(c=(o<3?l(c):o>3?l(t,a,c):l(t,a))||c);return o>3&&c&&Object.defineProperty(t,a,c),c};let Ne=class{};Ne.ɵmod=i.j({type:Ne}),Ne.ɵinj=Le.i({factory:function(e){return new(e||Ne)},imports:[[o.a]]}),Ne=ze([Object(l.a)(Fe)],Ne),("undefined"==typeof ngJitMode||ngJitMode)&&i.m(Ne,{declarations:[P,I,Q,B,te,ue,de,ve,Se,Ce,Te,Re,U,H,X,ne,be,he,ye,Oe,Me,Ue],imports:[o.a]}),f.a(Ne,[{type:n.a,args:[{imports:[o.a],declarations:[P,I,Q,B,te,ue,de,ve,Se,Ce,Te,Re,...Fe]}]}],null,null)}}]);
//# sourceMappingURL=5.client.es2015.chunk.fc9f87c6b8e372631213.js.map