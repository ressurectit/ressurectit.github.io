(self.webpackJsonp=self.webpackJsonp||[]).push([[33],{1139:function(e,t,i){"use strict";i.r(t);var a=i(4),s=i(38),n=i(45),l=i(148);class r{constructor(e,t){this._liveSearchFilter=e,this._normalizer=t,this._availableOptions=[],this._options=[],this._availableOptionsChange=new n.a,this.optionsChange=new n.a,Object(s.b)(this._normalizer)&&(this._normalizer=e=>e),Object(s.b)(this._liveSearchFilter)&&(this._liveSearchFilter=(e,t)=>i=>t(i.text).indexOf(t(e))>=0)}get options(){return this._options}set options(e){this._options=e,this._availableOptions=e}get availableOptions(){return this._availableOptions}get availableOptionsChange(){return this._availableOptionsChange}initializeGatherer(){let e=this.ngSelectPlugins[l.a];this._liveSearch&&this._liveSearch!=e&&(this._searchValueChangeSubscription.unsubscribe(),this._searchValueChangeSubscription=null,this._liveSearch=null),this._liveSearch||(this._liveSearch=e,this._searchValueChangeSubscription=this._liveSearch.searchValueChange.subscribe(()=>{if(!this._liveSearch.searchValue)return this._availableOptions=this.options,void this._availableOptionsChange.emit();this._availableOptions=this.options.filter(this._liveSearchFilter(this._liveSearch.searchValue,this._normalizer)),this._availableOptionsChange.emit()}))}destroyGatherer(){this._searchValueChangeSubscription&&(this._searchValueChangeSubscription.unsubscribe(),this._searchValueChangeSubscription=null)}}var h=i(1137),o=i(322),c=i(5),p=i(6),u=i(165),_=i(8),b=i(288);i.d(t,"ExternalSourceDirective",(function(){return v}));class v{constructor(e,t){this._enums=e,this._select=t,this._codeOptionsGatherer=new r,this._select.selectOptions={autoInitialize:!1}}ngOnInit(){if(Object(s.b)(this.externalSourceName))throw new Error("No name was provided for external directive!");var e;let t;this._select.execute((e={optionsGatherer:this._codeOptionsGatherer},t=>{e&&(t.selectOptions=e),t.initOptions(),t.invalidateVisuals(),t.initialize()})),t=this._enums.getEnum(this.externalSourceName),t.subscribe(e=>{let t;t=this.mappingCallback?e.map(this.mappingCallback):e.map(e=>({value:e.kod,name:e.popis})),this.onlyCodes?t=t.map(e=>({value:e.value,name:e.value})):this.onlyTexts&&(t=t.map(e=>({value:e.name,name:e.name}))),t=t.filter(e=>Object(s.g)(e)),this.emptyValueText&&(t=[{value:"",name:Object(s.h)(this.emptyValueText)?this.emptyValueText:o.c},...t]),this._codeOptionsGatherer.options=t.map(e=>({value:e.value,text:e.name})),this._codeOptionsGatherer.optionsChange.emit(),this._codeOptionsGatherer.availableOptionsChange.emit()})}}v.ɵfac=function(e){return new(e||v)(c.a(h.a),c.a(b.a))},v.ɵdir=p.i({type:v,selectors:[["ng-select","external",""]],inputs:{externalSourceName:["external","externalSourceName"],emptyValueText:"emptyValueText",onlyCodes:"onlyCodes",onlyTexts:"onlyTexts",mappingCallback:"mappingCallback"},features:[u.a([h.a])]}),_.a(v,[{type:a.b,args:[{selector:"ng-select[external]",providers:[h.a]}]}],(function(){return[{type:h.a},{type:b.a}]}),{externalSourceName:[{type:a.e,args:["external"]}],emptyValueText:[{type:a.e}],onlyCodes:[{type:a.e}],onlyTexts:[{type:a.e}],mappingCallback:[{type:a.e}]})}}]);
//# sourceMappingURL=33.client.es2015.chunk.5d5e8bcc7daa3a4a5260.js.map