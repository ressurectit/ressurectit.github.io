(self.webpackChunkressurectit_github_io=self.webpackChunkressurectit_github_io||[]).push([[6135],{33086:(t,i,e)=>{"use strict";e.d(i,{H:()=>u});var s=e(45130),n=e(20244),l=e(65426),o=e(94989),a=e(5203),r=e(91087),h=function(t,i,e,s){return new(e||(e=Promise))((function(n,l){function o(t){try{r(s.next(t))}catch(t){l(t)}}function a(t){try{r(s.throw(t))}catch(t){l(t)}}function r(t){var i;t.done?n(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(o,a)}r((s=s.apply(t,i||[])).next())}))};class u{constructor(t){if(this._options=t,this._minLength=1,this._initialized=!1,this.options=[],this.optionsChange=new s.v,!this._options)throw new Error("Options can not be null!");this._options&&(0,n.isPresent)(this._options.minLength)&&(this._minLength=this._options.minLength)}get availableOptions(){return this.options}get availableOptionsChange(){return this.optionsChange}initializeGatherer(){let t=this.ngSelectPlugins[o.c];this._liveSearch&&this._liveSearch!=t&&(this._searchValueChangeSubscription.unsubscribe(),this._searchValueChangeSubscription=null,this._liveSearch=null);let i=this.ngSelectPlugins[a.D];if(this._popup&&this._popup!=i&&(this._visibilitySubscription.unsubscribe(),this._visibilitySubscription=null,this._popup=null),this._valueHandler=this.ngSelectPlugins[r.K],this._popup||(this._popup=i,this._visibilitySubscription=this._popup.visibilityChange.subscribe((()=>h(this,void 0,void 0,(function*(){this._initialized||(yield this._processOptionsChange())}))))),!this._liveSearch){this._liveSearch=t;let i=this._liveSearch.searchValueChange;this._options.delay&&(i=i.pipe((0,l.b)(this._options.delay))),this._searchValueChangeSubscription=i.subscribe((()=>h(this,void 0,void 0,(function*(){return yield this._processOptionsChange()}))))}}destroyGatherer(){var t,i;null===(t=this._searchValueChangeSubscription)||void 0===t||t.unsubscribe(),this._searchValueChangeSubscription=null,null===(i=this._visibilitySubscription)||void 0===i||i.unsubscribe(),this._visibilitySubscription=null}_processOptionsChange(){var t,i;return h(this,void 0,void 0,(function*(){let e=this._liveSearch.searchValue;this._initialized||this.pluginBus.selectOptions.multiple||Array.isArray(this._valueHandler.selectedOptions)||!(0,n.isPresent)(this._valueHandler.selectedOptions)||(e=null!==(t=this._liveSearch.searchValue)&&void 0!==t?t:this._valueHandler.selectedOptions.text),this._initialized=!0,(null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0)<this._minLength?((0,n.isPresent)(e)||this.pluginBus.selectOptions.multiple)&&(this.options=[],this.optionsChange.emit()):(this.options=yield this._options.dynamicOptionsCallback(null!=e?e:""),this.optionsChange.emit())}))}}},41714:(t,i,e)=>{"use strict";e.d(i,{z:()=>v});var s=e(84184),n=e(25349),l=e(60205),o=e(90496),a=e(81679),r=e(12007),h=e(20244),u=e(13644),c=e(91087),p=e(97614),d=function(t,i,e,s){return new(e||(e=Promise))((function(n,l){function o(t){try{r(s.next(t))}catch(t){l(t)}}function a(t){try{r(s.throw(t))}catch(t){l(t)}}function r(t){var i;t.done?n(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(o,a)}r((s=s.apply(t,i||[])).next())}))};const _={textExtractor:t=>t};class v extends p.z{constructor(t,i,e,s){super(t,e,i),this._setValue=t=>{if(this.pluginBus.selectOptions.multiple){if(Array.isArray(this.selectedOptions)||(this.selectedOptions=[]),Array.isArray(this.selectedOptions)){if(this.selectedOptions.find((i=>this.valueComparer(i.value,t.value)))){let i=this.selectedOptions.indexOf(t);this.selectedOptions.splice(i,1)}else this.selectedOptions.push(t);this.selectedOptions=[...this.selectedOptions]}}else this.selectedOptions=t;this._clearSelected(),this._markValueAsSelected(),this._normalState.invalidateVisuals(),this.valueChange.emit()},this._options=(0,h.extend)(!0,{},_,s)}get options(){return this._options}set options(t){this._options=(0,h.extend)(!0,this._options,t)}setValue(t){this._useOptionsAsValue(t)}initOptions(){}invalidateVisuals(){}_loadOptions(){}_useOptionsAsValue(t){return d(this,void 0,void 0,(function*(){if((0,h.isBlank)(t)||Array.isArray(t)&&!t.length)return this.selectedOptions=t,this._clearSelected(),this._normalState.invalidateVisuals(),void this.valueChange.emit();if(this.pluginBus.selectOptions.multiple){if(!Array.isArray(t))throw new Error('Don`t you have redundant "multiple"?');{let i=t,e=[];for(let t of i)e.push(yield this._loadText(t));this.selectedOptions=e}}else{if(Array.isArray(t))throw new Error('Are you missing attribute "multiple"?');{let i=t;this.selectedOptions=yield this._loadText(i)}}this._clearSelected(),this._markValueAsSelected(),this._normalState.invalidateVisuals(),this.valueChange.emit()}))}_loadText(t){return d(this,void 0,void 0,(function*(){if(this.options.dynamicOptionsCallback){let i=yield this.options.dynamicOptionsCallback(t);if(i&&i.length){let e=i[0];return e.value=t,e.selected=!0,e}}return{selected:!0,active:!1,value:t,text:this.options.textExtractor(t)}}))}}v.ɵfac=function(t){return new(t||v)(s.Y(u.s,8),s.Y(a.D,8),s.Y(n.SB),s.Y(c.$,8))},v.ɵcmp=l.Xp({type:v,selectors:[["ng-dynamic-value-handler"]],features:[o.q],decls:0,vars:0,template:function(t,i){},encapsulation:2,changeDetection:0}),v.ctorParameters=()=>[{type:void 0,decorators:[{type:r.tB,args:[u.s]},{type:r.Fi}]},{type:a.D,decorators:[{type:r.Fi}]},{type:n.SB},{type:void 0,decorators:[{type:r.tB,args:[c.$]},{type:r.Fi}]}]}}]);
//# sourceMappingURL=6135.client.es2015.chunk.d33eecabd49b558097ea.js.map