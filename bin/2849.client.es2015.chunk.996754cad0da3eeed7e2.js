(self.webpackChunkressurectit_github_io=self.webpackChunkressurectit_github_io||[]).push([[2849,9490],{89268:(e,t,n)=>{"use strict";n.d(t,{i:()=>_});var c=n(59408),o=n(21211),s=n(58161),i=n(19362),r=n(78038),a=n(37277),l=n(84470),u=n(32221),p=n(17144),f=function(e,t,n,c){var o,s=arguments.length,i=s<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,n):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,c);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends c.Z8{getSource(e){return null}};var h,y;m.ɵfac=function(){let e;return function(t){return(e||(e=u.n5(m)))(t||m)}}(),m.ɵprov=p.Yz({token:m,factory:m.ɵfac,providedIn:"root"}),f([(0,o.C)(),(0,s.n)(i.UN.Text),(0,c.HT)("{path}"),(h=0,y=(0,r.y$)("path"),function(e,t){y(e,t,h)}),d("design:type",Function),d("design:paramtypes",[String]),d("design:returntype",l.y)],m.prototype,"getSource",null),m=f([(0,a.J)("https://raw.githubusercontent.com/ressurectit/ressurectit.github.io.src/master/app/")],m);var v=n(30223),g=n(50194),w=n(80510),S=n(84184),x=n(60205);class _{constructor(e){this._sourceSvc=e}transform(e,t="typescript"){return n=this,c=void 0,s=function*(){let n=yield this._sourceSvc.getSource(e).pipe((e=>e.pipe((0,w.K)((e=>404==e.status?(0,v.of)(null):(0,g._)(e)))))).toPromise();return`\`\`\` ${t}\n${null!=n?n:"not found "+e}\n\`\`\``},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{a(s.next(e))}catch(e){t(e)}}function r(e){try{a(s.throw(e))}catch(e){t(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,r)}a((s=s.apply(n,c||[])).next())}));var n,c,o,s}}_.ɵfac=function(e){return new(e||_)(S.Y(m,16))},_.ɵpipe=x.Yj({name:"asSource",type:_,pure:!0})},67518:(e,t,n)=>{"use strict";n.d(t,{f:()=>m});var c=n(53711),o=n(54241),s=n(62182),i=n(57076),r=n(60205),a=n(3242),l=n(59478),u=n(85862),p=n(10748),f=n(46846);function d(e,t){1&e&&(o.Tg(0,"div",3),s.Hs(1),o.qZ()),2&e&&i.Q("@slideInOut",void 0)}class m{constructor(){this.showSources=!1}}m.ɵfac=function(e){return new(e||m)},m.ɵcmp=r.Xp({type:m,selectors:[["source-code"]],ngContentSelectors:["*"],decls:3,vars:3,consts:[["class","flex-1",4,"ngIf"],["title","Show / hide sources",1,"show-icon",3,"click"],[1,"fas","fa-code"],[1,"flex-1"]],template:function(e,t){1&e&&(s.F$(),a.Y(0,d,2,1,"div",0),o.Tg(1,"a",1),l.N("click",(function(){return t.showSources=!t.showSources})),o._U(2,"span",2),o.qZ()),2&e&&(i.Q("ngIf",t.showSources),u.x(1),p.ek("absolute",t.showSources))},directives:[f.O],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.show-icon[_ngcontent-%COMP%]{z-index:10;margin-right:3px;margin-top:3px;font-size:22px}"],data:{animation:[c.x]},changeDetection:0})},92849:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DynamicComponent:()=>y});var c=n(60205),o=n(54241),s=n(1293),i=n(42521),r=n(85862),a=n(57076),l=n(67518),u=n(69425),p=n(20169),f=n(57672),d=n(89490),m=n(70823),h=n(89268);class y{}y.ɵfac=function(e){return new(e||y)},y.ɵcmp=c.Xp({type:y,selectors:[["dynamic-view"]],decls:17,vars:16,consts:[["label","dynamicSample.component.ts"],[3,"renderMarkdown"],["label","dynamicSample.component.html"],["label","kodPopisValue.interface.ts"]],template:function(e,t){1&e&&(o.Tg(0,"h3"),s._(1,"Dynamic Select"),o.qZ(),o.Tg(2,"source-code"),o.Tg(3,"mat-tab-group"),o.Tg(4,"mat-tab",0),o._U(5,"div",1),i.AL(6,"async"),i.AL(7,"asSource"),o.qZ(),o.Tg(8,"mat-tab",2),o._U(9,"div",1),i.AL(10,"async"),i.AL(11,"asSource"),o.qZ(),o.Tg(12,"mat-tab",3),o._U(13,"div",1),i.AL(14,"async"),i.AL(15,"asSource"),o.qZ(),o.qZ(),o.qZ(),o._U(16,"dynamic-sample")),2&e&&(r.x(5),a.Q("renderMarkdown",i.lc(6,3,i.lc(7,5,"samples/select/dynamic/dynamicSample.component.ts"))),r.x(4),a.Q("renderMarkdown",i.lc(10,7,i.xi(11,9,"samples/select/dynamic/dynamicSample.component.html","html"))),r.x(4),a.Q("renderMarkdown",i.lc(14,12,i.lc(15,14,"misc/types/kodPopisValue.interface.ts"))))},directives:[l.f,u.SP,p.u,f.c,d.DynamicSampleComponent],pipes:[m.O,h.i],encapsulation:2,changeDetection:0})},89490:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DynamicSampleComponent:()=>b});var c=n(97758),o=n(82479),s=n(41714),i=n(33086),r=n(20244),a=n(81676),l=n(84184),u=n(60205),p=n(89282),f=n(54241),d=n(1293),m=n(42521),h=n(85862),y=n(35540),v=n(57076),g=n(50435),w=n(30593),S=n(38990),x=n(82193),_=n(63459);class b{constructor(e){this._dataSvc=e,this.selectControl=new c.NI(null),this._getData=e=>{return t=this,n=void 0,o=function*(){(0,r.isString)(e)||(e=e.kod);let t=yield this._dataSvc.getCis(e).toPromise();return t&&t.content&&t.content.length?t.content.map((e=>({value:e.kod,text:e.popis}))):[]},new((c=void 0)||(c=Promise))((function(e,s){function i(e){try{a(o.next(e))}catch(e){s(e)}}function r(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,r)}a((o=o.apply(t,n||[])).next())}));var t,n,c,o},this.selectOptions={plugins:{liveSearch:{type:o.f},valueHandler:{type:s.z,options:{dynamicOptionsCallback:this._getData}}},optionsGatherer:new i.H({dynamicOptionsCallback:this._getData})}}}b.ɵfac=function(e){return new(e||b)(l.Y(a.D))},b.ɵcmp=u.Xp({type:b,selectors:[["dynamic-sample"]],features:[p._([a.D])],decls:4,vars:5,consts:[[3,"selectOptions","formControl"]],template:function(e,t){1&e&&(f.Tg(0,"div"),d._(1),m.AL(2,"json"),f.qZ(),f._U(3,"ng-select",0)),2&e&&(h.x(1),y.hi("Value: ",m.lc(2,3,null==t.selectControl?null:t.selectControl.value),""),h.x(2),v.Q("selectOptions",t.selectOptions)("formControl",t.selectControl))},directives:[g.w9,w.v,S.JJ,x.oH],pipes:[_.T],encapsulation:2,changeDetection:0})}}]);
//# sourceMappingURL=2849.client.es2015.chunk.996754cad0da3eeed7e2.js.map