(self.webpackChunkressurectit_github_io=self.webpackChunkressurectit_github_io||[]).push([[3562],{39592:(t,i,n)=>{"use strict";n.d(i,{I:()=>F});var s=n(89408),e=n(12007),o=n(14161),l=n(8193),p=n(20244),a=n(1293),u=n(35540),r=n(82219),c=n(54241),g=n(84925),h=n(57076),d=n(83824),_=n(59478),v=n(14258),m=n(3242),C=n(89942),b=n(10748),O=n(85862),f=n(22505),y=n(84184),P=n(60205),B=n(90779),D=n(52838),x=n(50651),T=n(55668),S=n(46846);function k(t,i){if(1&t&&a._(0),2&t){const t=i.$implicit;u.Oq(null==t?null:t.text)}}function I(t,i){1&t&&r.Gk(0)}function E(t,i){if(1&t&&c._U(0,"div",3),2&t){const t=g.o(2);h.Q("ngClass",null==t.options||null==t.options.cssClasses?null:t.options.cssClasses.optionChecked)}}const G=function(t,i){return{$implicit:t,popup:i}};function w(t,i){if(1&t){const t=d.E();c.Tg(0,"div",2),_.N("click",(function(){const i=v.CH(t).$implicit,n=g.o();return null==n.data||null==n.data.pluginBus||null==n.data.pluginBus.optionSelect?null:n.data.pluginBus.optionSelect.emit(i)})),c.Tg(1,"div",3),m.Y(2,I,1,0,"ng-container",4),c.qZ(),m.Y(3,E,1,1,"div",5),c.qZ()}if(2&t){const t=i.$implicit,n=g.o(),s=C.M(1);b.ek("selected",null==t?null:t.selected),h.Q("ngClass",null==n.options||null==n.options.cssClasses?null:n.options.cssClasses.optionItemDiv),O.x(1),h.Q("ngClass",null==n.options||null==n.options.cssClasses?null:n.options.cssClasses.optionItemTextDiv),O.x(1),h.Q("ngTemplateOutlet",(null==n.data||null==n.data.pluginBus||null==n.data.pluginBus.selectOptions||null==n.data.pluginBus.selectOptions.templateGatherer?null:n.data.pluginBus.selectOptions.templateGatherer.optionTemplate)||s)("ngTemplateOutletContext",f.WL(7,G,t,n)),O.x(1),h.Q("ngIf",(null==t?null:t.selected)&&(null==n.data||null==n.data.pluginBus||null==n.data.pluginBus.selectOptions?null:n.data.pluginBus.selectOptions.multiple))}}const Y={cssClasses:{optionChecked:"fa fa-check",optionItemDiv:"option-item",optionItemTextDiv:"option-item-text"}};class F{constructor(t,i,n){this.dialog=t,this._changeDetector=i,this.data=n,this.options=(0,p.extend)(!0,{},Y,n.options)}ngOnInit(){this._optionsGatherer&&this._optionsGatherer!=this.data.pluginBus.selectOptions.optionsGatherer&&(this._optionsChangeSubscription.unsubscribe(),this._optionsChangeSubscription=null,this._optionsGatherer=null),this._optionsGatherer||(this._optionsGatherer=this.data.pluginBus.selectOptions.optionsGatherer,this.selectOptions=this._optionsGatherer.availableOptions,this._optionsChangeSubscription=this._optionsGatherer.availableOptionsChange.subscribe((()=>{this.selectOptions=this._optionsGatherer.availableOptions,this._changeDetector.detectChanges()})))}ngOnDestroy(){var t;null===(t=this._optionsChangeSubscription)||void 0===t||t.unsubscribe(),this._optionsChangeSubscription=null}invalidateVisuals(){this._changeDetector.detectChanges()}}F.ɵfac=function(t){return new(t||F)(y.Y(l.s),y.Y(s.sB),y.Y(o.WI))},F.ɵcmp=P.Xp({type:F,selectors:[["ng-select-basic-dialog-popup"]],decls:3,vars:1,consts:[["defaultOptionTextLook",""],[3,"ngClass","selected","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"]],template:function(t,i){1&t&&(m.Y(0,k,1,1,"ng-template",null,0,B.W),m.Y(2,w,4,10,"div",1)),2&t&&(O.x(2),h.Q("ngForOf",i.selectOptions))},directives:[D.s,x.m,T.t,S.O],styles:[".option-item[_ngcontent-%COMP%]\r\n{\r\n    padding: 3px 12px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.option-item[_ngcontent-%COMP%]   .option-item-text[_ngcontent-%COMP%]\r\n{\r\n    min-width: 0;\r\n    flex: 1;\r\n    white-space: nowrap;\r\n}\r\n\r\n.option-item[_ngcontent-%COMP%]   .option-item-text[_ngcontent-%COMP%]:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n\r\n.option-item[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 8px;\r\n}\r\n\r\n.option-item.selected[_ngcontent-%COMP%], .option-item.active[_ngcontent-%COMP%]\r\n{\r\n    background-color: #E8E8E8;\r\n    background-image: linear-gradient(to bottom,#F5F5F5 0,#E8E8E8 100%);\r\n}\r\n\r\n.option-item[_ngcontent-%COMP%]:hover\r\n{\r\n    background-color: #E8E8E8;\r\n    background-image: linear-gradient(to bottom,#F5F5F5 0,#E8E8E8 100%);\r\n    cursor: pointer;\r\n}"],changeDetection:0}),F.ctorParameters=()=>[{type:l.s},{type:s.sB},{type:void 0,decorators:[{type:e.tB,args:[o.WI]}]}]},23562:(t,i,n)=>{"use strict";n.d(i,{H:()=>h});var s=n(72715),e=n(84885),o=n(50435),l=n(20244),p=n(55097),a=n(84184),u=n(60205),r=n(89282),c=n(7206);const g=p.Z;class h{constructor(t){this._select=t,this.popupType=null,this.dialogPopupOptions=null}ngOnChanges(t){let i={},n=!1;(0,l.nameof)("popupType")in t&&this.popupType&&(n=!0,i.dialogComponent=this.popupType),(0,l.nameof)("dialogPopupOptions")in t&&(n=!0,i.dialogOptions=this.dialogPopupOptions),n&&this._select.execute(function(t){return i=>{i.selectOptions=t,i.initOptions(),i.invalidateVisuals()}}({plugins:{popup:{options:i}}}))}}h.ɵfac=function(t){return new(t||h)(a.Y(o.w9))},h.ɵdir=u.lG({type:h,selectors:[["ng-select","dialogPopup",""]],inputs:{popupType:["dialogPopup","popupType"],dialogPopupOptions:"dialogPopupOptions"},features:[r._([{provide:e.Af,useValue:g}]),c.T]}),h.ctorParameters=()=>[{type:o.w9}],h.propDecorators={popupType:[{type:s.II,args:["dialogPopup"]}],dialogPopupOptions:[{type:s.II}]}},55097:(t,i,n)=>{"use strict";n.d(i,{Z:()=>m});var s=n(13644),e=n(5203),o=n(81679),l=n(54711),p=n(45130),a=n(12007),u=n(25349),r=n(89408),c=n(14161),g=n(20244),h=n(39592),d=n(84184),_=n(60205);const v={dialogComponent:(0,l.Gp)((()=>h.I)),dialogOptions:{},cssClasses:{dialogDiv:"popup-div"},visible:!1};class m{constructor(t,i,n,s,e,o){this.ngSelectPlugins=t,this.pluginBus=i,this.pluginElement=n,this._dialog=s,this._changeDetector=e,this.visibilityChange=new p.v,this._handleDialog=t=>{var i,n,s;t?this._dialogRef=this._dialog.open(this._dialogComponent,{panelClass:null===(n=null===(i=this.options)||void 0===i?void 0:i.cssClasses)||void 0===n?void 0:n.dialogDiv,data:{ngSelectPlugins:this.ngSelectPlugins,options:this.options.dialogOptions,pluginBus:this.pluginBus}}):(null===(s=this._dialogRef)||void 0===s||s.close(),this._dialogRef=null)},this._options=(0,g.extend)(!0,{},v,o)}get options(){return this._options}set options(t){this._options=(0,g.extend)(!0,this._options,t)}get popupElement(){return null}ngOnDestroy(){var t,i;null===(t=this._popupToggleSubscription)||void 0===t||t.unsubscribe(),this._popupToggleSubscription=null,null===(i=this._visibilityRequestSubscription)||void 0===i||i.unsubscribe(),this._visibilityRequestSubscription=null}initialize(){this._dialogComponent=(0,l.AM)(this.options.dialogComponent),this._popupToggleSubscription||(this._popupToggleSubscription=this.pluginBus.togglePopup.subscribe((()=>this.toggleDialog()))),this._visibilityRequestSubscription||(this._visibilityRequestSubscription=this.pluginBus.showHidePopup.subscribe(this._handleDialog)),this.options.visible&&this._handleDialog(!0)}initOptions(){}invalidateVisuals(){var t,i;this._changeDetector.detectChanges(),null===(i=null===(t=this._dialogRef)||void 0===t?void 0:t.componentInstance)||void 0===i||i.invalidateVisuals()}toggleDialog(){this._handleDialog(!0)}}m.ɵfac=function(t){return new(t||m)(d.Y(s.s,8),d.Y(o.D,8),d.Y(u.SB),d.Y(c.uw),d.Y(r.sB),d.Y(e.N,8))},m.ɵcmp=_.Xp({type:m,selectors:[["div",8,"ng-select-dialog-popup"]],attrs:["class","ng-select-dialog-popup"],decls:0,vars:0,template:function(t,i){},encapsulation:2,changeDetection:0}),m.ctorParameters=()=>[{type:void 0,decorators:[{type:a.tB,args:[s.s]},{type:a.Fi}]},{type:o.D,decorators:[{type:a.Fi}]},{type:u.SB},{type:c.uw},{type:r.sB},{type:void 0,decorators:[{type:a.tB,args:[e.N]},{type:a.Fi}]}]}}]);
//# sourceMappingURL=3562.client.es2015.chunk.91005ae6878e2aa13fe0.js.map