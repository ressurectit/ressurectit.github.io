(self.webpackJsonp=self.webpackJsonp||[]).push([[8,23,46],{1118:function(e,t,a){"use strict";a.r(t),a.d(t,"ExternalSourceDirective",(function(){return v}));var n=a(4),s=a(36),l=a(44),i=a(133);class r{constructor(){this._availableOptions=[],this._options=[],this._availableOptionsChange=new l.a,this.optionsChange=new l.a}get options(){return this._options}set options(e){this._options=e,this._availableOptions=e}get availableOptions(){return this._availableOptions}get availableOptionsChange(){return this._availableOptionsChange}initializeGatherer(){let e=this.ngSelectPlugins[i.a];this._liveSearch&&this._liveSearch!=e&&(this._searchValueChangeSubscription.unsubscribe(),this._searchValueChangeSubscription=null,this._liveSearch=null),this._liveSearch||(this._liveSearch=e,this._searchValueChangeSubscription=this._liveSearch.searchValueChange.subscribe(()=>{if(!this._liveSearch.searchValue)return this._availableOptions=this.options,void this._availableOptionsChange.emit();this._availableOptions=this.options.filter(this.pluginBus.selectOptions.liveSearchFilter(this._liveSearch.searchValue,this.pluginBus.selectOptions.normalizer)),this._availableOptionsChange.emit()}))}destroyGatherer(){this._searchValueChangeSubscription&&(this._searchValueChangeSubscription.unsubscribe(),this._searchValueChangeSubscription=null)}}var o=a(1113),c=a(300),p=a(5),u=a(8),h=a(173),b=a(10),m=a(168);class v{constructor(e,t){this._enums=e,this._select=t,this._codeOptionsGatherer=new r,this._select.selectOptions={autoInitialize:!1}}ngOnInit(){if(Object(s.b)(this.externalSourceName))throw new Error("No name was provided for external directive!");var e;let t;this._select.execute((e={optionsGatherer:this._codeOptionsGatherer},t=>{e&&(t.selectOptions=e),t.initOptions(),t.invalidateVisuals(),t.initialize()})),t=this._enums.getEnum(this.externalSourceName),t.subscribe(e=>{let t;t=this.mappingCallback?e.map(this.mappingCallback):e.map(e=>({value:e.kod,name:e.popis})),this.onlyCodes?t=t.map(e=>({value:e.value,name:e.value})):this.onlyTexts&&(t=t.map(e=>({value:e.name,name:e.name}))),t=t.filter(e=>Object(s.g)(e)),this.emptyValueText&&(t=[{value:"",name:Object(s.h)(this.emptyValueText)?this.emptyValueText:c.c},...t]),this._codeOptionsGatherer.options=t.map(e=>({value:e.value,text:e.name})),this._codeOptionsGatherer.optionsChange.emit(),this._codeOptionsGatherer.availableOptionsChange.emit()})}}v.ɵfac=function(e){return new(e||v)(p.a(o.a),p.a(m.a))},v.ɵdir=u.i({type:v,selectors:[["ng-select","external",""]],inputs:{externalSourceName:["external","externalSourceName"],emptyValueText:"emptyValueText",onlyCodes:"onlyCodes",onlyTexts:"onlyTexts",mappingCallback:"mappingCallback"},features:[h.a([o.a])]}),b.a(v,[{type:n.b,args:[{selector:"ng-select[external]",providers:[o.a]}]}],(function(){return[{type:o.a},{type:m.a}]}),{externalSourceName:[{type:n.e,args:["external"]}],emptyValueText:[{type:n.e}],onlyCodes:[{type:n.e}],onlyTexts:[{type:n.e}],mappingCallback:[{type:n.e}]})},1132:function(e,t,a){"use strict";a.r(t),a.d(t,"ExternalSampleComponent",(function(){return y}));var n=a(4),s=a(55),l=a(147),i=a(8),r=a(6),o=a(104),c=a(299),p=a(23),u=a(132),h=a(14),b=a(10),m=a(168),v=a(409),d=a(1118),x=a(226),g=a(179),C=a(354);class y{constructor(){this.selectControl=new l.b(null)}}y.ɵfac=function(e){return new(e||y)},y.ɵcmp=i.h({type:y,selectors:[["external-sample"]],decls:12,vars:8,consts:[[1,"bold","margin-top-small"],["external","cis",3,"formControl"],["external","cis",3,"formControl","onlyCodes"],["external","cis",3,"formControl","onlyTexts"]],template:function(e,t){1&e&&(r.c(0,"div"),o.a(1),c.a(2,"json"),r.b(),r.c(3,"div",0),o.a(4,"Standard enum"),r.b(),r.a(5,"ng-select",1),r.c(6,"div",0),o.a(7,"Only codes enum"),r.b(),r.a(8,"ng-select",2),r.c(9,"div",0),o.a(10,"Only texts enum"),r.b(),r.a(11,"ng-select",3)),2&e&&(p.b(1),u.b("Value: ",c.b(2,6,null==t.selectControl?null:t.selectControl.value),""),p.b(4),h.b("formControl",t.selectControl),p.b(3),h.b("formControl",t.selectControl)("onlyCodes",!0),p.b(3),h.b("formControl",t.selectControl)("onlyTexts",!0))},directives:[m.a,d.ExternalSourceDirective,v.a,x.a,g.a],pipes:[C.a],encapsulation:2,changeDetection:0}),b.a(y,[{type:n.a,args:[{selector:"external-sample",templateUrl:"externalSample.component.html",changeDetection:s.a.OnPush}]}],null,null)},1152:function(e,t,a){"use strict";a.r(t),a.d(t,"ExternalComponent",(function(){return C}));var n=a(4),s=a(55),l=a(8),i=a(6),r=a(104),o=a(299),c=a(23),p=a(14),u=a(10),h=a(524),b=a(411),m=a(207),v=a(325),d=a(1132),x=a(353),g=a(525);class C{}C.ɵfac=function(e){return new(e||C)},C.ɵcmp=l.h({type:C,selectors:[["external-view"]],decls:25,vars:26,consts:[["label","externalSample.component.ts"],[3,"renderMarkdown"],["label","externalSample.component.html"],["label","externalSource.directive.ts"],["label","kodPopisValue.interface.ts"],["label","constants.ts"]],template:function(e,t){1&e&&(i.c(0,"h3"),r.a(1,"External Source Select"),i.b(),i.c(2,"source-code"),i.c(3,"mat-tab-group"),i.c(4,"mat-tab",0),i.a(5,"div",1),o.a(6,"async"),o.a(7,"asSource"),i.b(),i.c(8,"mat-tab",2),i.a(9,"div",1),o.a(10,"async"),o.a(11,"asSource"),i.b(),i.c(12,"mat-tab",3),i.a(13,"div",1),o.a(14,"async"),o.a(15,"asSource"),i.b(),i.c(16,"mat-tab",4),i.a(17,"div",1),o.a(18,"async"),o.a(19,"asSource"),i.b(),i.c(20,"mat-tab",5),i.a(21,"div",1),o.a(22,"async"),o.a(23,"asSource"),i.b(),i.b(),i.b(),i.a(24,"external-sample")),2&e&&(c.b(5),p.b("renderMarkdown",o.b(6,5,o.b(7,7,"samples/select/external/externalSample.component.ts"))),c.b(4),p.b("renderMarkdown",o.b(10,9,o.c(11,11,"samples/select/external/externalSample.component.html","html"))),c.b(4),p.b("renderMarkdown",o.b(14,14,o.b(15,16,"samples/select/external/externalSource.directive.ts"))),c.b(4),p.b("renderMarkdown",o.b(18,18,o.b(19,20,"misc/types/kodPopisValue.interface.ts"))),c.b(4),p.b("renderMarkdown",o.b(22,22,o.b(23,24,"misc/constants.ts"))))},directives:[h.a,b.a,m.b,v.a,d.ExternalSampleComponent],pipes:[x.a,g.a],encapsulation:2,changeDetection:0}),u.a(C,[{type:n.a,args:[{selector:"external-view",templateUrl:"external.component.html",changeDetection:s.a.OnPush}]}],null,null)}}]);
//# sourceMappingURL=8.client.es2015.chunk.86a897e876753fca1c8f.js.map