(self.webpackChunkressurectit_github_io=self.webpackChunkressurectit_github_io||[]).push([[6787,9399],{66787:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ExternalSampleComponent:()=>C});var s=i(97758),a=i(60205),n=i(54241),l=i(1293),o=i(42521),r=i(85862),h=i(35540),c=i(57076),u=i(50435),p=i(30593),m=i(49399),v=i(38990),_=i(82193),g=i(63459);class C{constructor(){this.selectControl=new s.NI(null)}}C.ɵfac=function(e){return new(e||C)},C.ɵcmp=a.Xp({type:C,selectors:[["external-sample"]],decls:12,vars:8,consts:[[1,"bold","margin-top-small"],["external","cis",3,"formControl"],["external","cis",3,"formControl","onlyCodes"],["external","cis",3,"formControl","onlyTexts"]],template:function(e,t){1&e&&(n.Tg(0,"div"),l._(1),o.AL(2,"json"),n.qZ(),n.Tg(3,"div",0),l._(4,"Standard enum"),n.qZ(),n._U(5,"ng-select",1),n.Tg(6,"div",0),l._(7,"Only codes enum"),n.qZ(),n._U(8,"ng-select",2),n.Tg(9,"div",0),l._(10,"Only texts enum"),n.qZ(),n._U(11,"ng-select",3)),2&e&&(r.x(1),h.hi("Value: ",o.lc(2,6,null==t.selectControl?null:t.selectControl.value),""),r.x(4),c.Q("formControl",t.selectControl),r.x(3),c.Q("formControl",t.selectControl)("onlyCodes",!0),r.x(3),c.Q("formControl",t.selectControl)("onlyTexts",!0))},directives:[u.w9,m.ExternalSourceDirective,p.v,v.JJ,_.oH],pipes:[g.T],encapsulation:2,changeDetection:0})},49399:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ExternalSourceDirective:()=>m});var s=i(20244),a=i(45130),n=i(94989);class l{constructor(){this._availableOptions=[],this._options=[],this._availableOptionsChange=new a.v,this.optionsChange=new a.v}get options(){return this._options}set options(e){this._options=e,this._availableOptions=e}get availableOptions(){return this._availableOptions}get availableOptionsChange(){return this._availableOptionsChange}initializeGatherer(){let e=this.ngSelectPlugins[n.c];this._liveSearch&&this._liveSearch!=e&&(this._searchValueChangeSubscription.unsubscribe(),this._searchValueChangeSubscription=null,this._liveSearch=null),this._liveSearch||(this._liveSearch=e,this._searchValueChangeSubscription=this._liveSearch.searchValueChange.subscribe((()=>{if(!this._liveSearch.searchValue)return this._availableOptions=this.options,void this._availableOptionsChange.emit();this._availableOptions=this.options.filter(this.pluginBus.selectOptions.liveSearchFilter(this._liveSearch.searchValue,this.pluginBus.selectOptions.normalizer)),this._availableOptionsChange.emit()})))}destroyGatherer(){this._searchValueChangeSubscription&&(this._searchValueChangeSubscription.unsubscribe(),this._searchValueChangeSubscription=null)}}var o=i(81676),r=i(88690),h=i(84184),c=i(60205),u=i(89282),p=i(50435);class m{constructor(e,t){this._enums=e,this._select=t,this._codeOptionsGatherer=new l,this._select.selectOptions={autoInitialize:!1}}ngOnInit(){if((0,s.isBlank)(this.externalSourceName))throw new Error("No name was provided for external directive!");var e;let t;this._select.execute((e={optionsGatherer:this._codeOptionsGatherer},t=>{e&&(t.selectOptions=e),t.initOptions(),t.invalidateVisuals(),t.initialize()})),t=this._enums.getEnum(this.externalSourceName),t.subscribe((e=>{let t;t=this.mappingCallback?e.map(this.mappingCallback):e.map((e=>({value:e.kod,name:e.popis}))),this.onlyCodes?t=t.map((e=>({value:e.value,name:e.value}))):this.onlyTexts&&(t=t.map((e=>({value:e.name,name:e.name})))),t=t.filter((e=>(0,s.isPresent)(e))),this.emptyValueText&&(t=[{value:"",name:(0,s.isString)(this.emptyValueText)?this.emptyValueText:r.qX},...t]),this._codeOptionsGatherer.options=t.map((e=>({value:e.value,text:e.name}))),this._codeOptionsGatherer.optionsChange.emit(),this._codeOptionsGatherer.availableOptionsChange.emit()}))}}m.ɵfac=function(e){return new(e||m)(h.Y(o.D),h.Y(p.w9))},m.ɵdir=c.lG({type:m,selectors:[["ng-select","external",""]],inputs:{externalSourceName:["external","externalSourceName"],emptyValueText:"emptyValueText",onlyCodes:"onlyCodes",onlyTexts:"onlyTexts",mappingCallback:"mappingCallback"},features:[u._([o.D])]})}}]);
//# sourceMappingURL=6787.client.es2015.chunk.c860b05d2ea1e81d19fc.js.map