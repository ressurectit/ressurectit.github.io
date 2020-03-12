(self.webpackJsonp=self.webpackJsonp||[]).push([[5,6,13,29,32],{1077:function(e,t,a){"use strict";a.r(t),a.d(t,"GalleryItemComponent",(function(){return l}));var n=a(4),r=a(59),s=a(7),o=a(11);class l{}l.ɵfac=function(e){return new(e||l)},l.ɵcmp=s.h({type:l,selectors:[["gallery-item"]],inputs:{source:"source"},decls:0,vars:0,template:function(e,t){},encapsulation:2,changeDetection:0}),o.a(l,[{type:n.a,args:[{selector:"gallery-item",template:"",changeDetection:r.a.OnPush}]}],null,{source:[{type:n.e}]})},1078:function(e,t,a){"use strict";a.r(t),a.d(t,"GalleryContentRendererComponent",(function(){return w}));var n=a(41),r=a(4),s=a(59),o=a(3),l=a(999),c=a(149),i=a(58),d=a(22),u=a(36),m=a(68),p=a(8),g=a(33),b=a(17),h=a(141),y=a(5),f=a(6),v=a(26),C=a(7),R=a(53),O=a(11),S=a(131);function _(e,t){if(1&e&&(p.c(0,"div",2),p.a(1,"img",3),p.b()),2&e){const e=t.$implicit;g.b(1),b.b("src",null==e?null:e.source,h.g)}}const j={cssClasses:{}};class w{constructor(e,t,a,r){this.pluginElement=e,this._changeDetector=t,this.gridPlugins=a,this.orderingChange=new n.a,this._options=Object(m.a)(!0,{},j,r)}get options(){return this._options}set options(e){this._options=Object(m.a)(!0,this._options,e)}get data(){var e,t;return null===(t=null===(e=this._dataLoader)||void 0===e?void 0:e.result)||void 0===t?void 0:t.data}ngOnDestroy(){var e,t;null===(e=this._dataChangedSubscription)||void 0===e||e.unsubscribe(),this._dataChangedSubscription=null,null===(t=this._metadataChangedSubscription)||void 0===t||t.unsubscribe(),this._metadataChangedSubscription=null}initialize(){let e=this.gridPlugins[c.a];this._metadataSelector&&this._metadataSelector!=e&&(this._metadataChangedSubscription.unsubscribe(),this._metadataChangedSubscription=null,this._metadataSelector=null),this._metadataSelector||(this._metadataSelector=e,this._metadataChangedSubscription=this._metadataSelector.metadataChange.subscribe(()=>this.invalidateVisuals()));let t=this.gridPlugins[i.a];this._dataLoader&&this._dataLoader!=t&&(this._dataChangedSubscription.unsubscribe(),this._dataChangedSubscription=null,this._dataLoader=null),this._dataLoader||(this._dataLoader=t,this._dataChangedSubscription=this._dataLoader.resultChange.subscribe(()=>this.invalidateVisuals())),this.invalidateVisuals()}initOptions(){}invalidateVisuals(){this._changeDetector.detectChanges()}}w.ɵfac=function(e){return new(e||w)(y.a(f.a),y.a(v.a),y.a(d.a,8),y.a(u.d,8))},w.ɵcmp=C.h({type:w,selectors:[["div",8,"gallery-renderer"]],attrs:["class","gallery-renderer"],decls:2,vars:1,consts:[[1,"gallery-content"],["class","gallery-item",4,"ngFor","ngForOf"],[1,"gallery-item"],[3,"src"]],template:function(e,t){1&e&&(p.c(0,"div",0),R.d(1,_,2,1,"div",1),p.b()),2&e&&(g.b(1),b.b("ngForOf",t.data))},directives:[S.a],styles:[".gallery-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, max-content));grid-auto-rows:200px;column-gap:20px;row-gap:20px}img[_ngcontent-%COMP%]{object-fit:cover;width:100%;height:100%}"],data:{animation:[Object(l.l)("showGallery",[Object(l.k)(":enter",[Object(l.f)(".gallery-item",[Object(l.j)({opacity:0,transform:"translateY(-100px)"}),Object(l.h)(-30,[Object(l.b)("500ms cubic-bezier(0.35, 0, 0.25, 1)",Object(l.j)({opacity:1,transform:"none"}))])])])])]},changeDetection:0}),O.a(w,[{type:r.a,args:[{selector:"div.gallery-renderer",templateUrl:"galleryContentRenderer.component.html",styleUrls:["galleryContentRenderer.component.scss"],animations:[Object(l.l)("showGallery",[Object(l.k)(":enter",[Object(l.f)(".gallery-item",[Object(l.j)({opacity:0,transform:"translateY(-100px)"}),Object(l.h)(-30,[Object(l.b)("500ms cubic-bezier(0.35, 0, 0.25, 1)",Object(l.j)({opacity:1,transform:"none"}))])])])])],changeDetection:s.a.OnPush}]}],(function(){return[{type:f.a},{type:v.a},{type:void 0,decorators:[{type:o.c,args:[d.a]},{type:o.d}]},{type:void 0,decorators:[{type:o.c,args:[u.d]},{type:o.d}]}]}),null)},1079:function(e,t,a){"use strict";a.r(t),a.d(t,"GalleryMetadataGathererComponent",(function(){return g}));var n=a(41),r=a(20),s=a(4),o=a(59),l=a(54),c=a(156),i=a(1077),d=a(7),u=a(28),m=a(164),p=a(11);class g{constructor(){this.metadataChange=new n.a}getMetadata(){var e;return{item:null===(e=this.items)||void 0===e?void 0:e.first}}ngAfterContentInit(){this.items.changes.subscribe(()=>{this.metadataChange.emit()})}}g.ɵfac=function(e){return new(e||g)},g.ɵcmp=d.h({type:g,selectors:[["gallery-metadata"]],contentQueries:function(e,t,a){var n;(1&e&&u.a(a,i.GalleryItemComponent,!1),2&e)&&(u.c(n=u.b())&&(t.items=n))},features:[m.a([{provide:c.a,useExisting:Object(r.a)(()=>g)}])],decls:0,vars:0,template:function(e,t){},encapsulation:2,changeDetection:0}),p.a(g,[{type:s.a,args:[{selector:"gallery-metadata",template:"",changeDetection:o.a.OnPush,providers:[{provide:c.a,useExisting:Object(r.a)(()=>g)}]}]}],null,{items:[{type:l.c,args:[i.GalleryItemComponent]}]})},1097:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(59),s=a(1078),o=a(51),l=a(1052),c=a(476),i=a(50),d=a(91),u=a(14),m=a(56),p=a(11),g=function(e,t,a,n){var r,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(o=(s<3?r(o):s>3?r(t,a,o):r(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends l.l{getGallery(e){return this.getAllGallery().pipe(Object(d.a)(t=>{let a=new c.a;return a.setPage(e.page).setItemsPerPage(e.size).setItemCount(t.length),{content:t.slice(a.getOffset(),a.getOffset()+e.size),totalElements:t.length}}))}getAllGallery(){return null}};h.ɵfac=function(e){return y(e||h)},h.ɵprov=u.g({token:h,factory:h.ɵfac}),g([Object(l.e)("gallery.json"),b("design:type",Function),b("design:paramtypes",[]),b("design:returntype",i.a)],h.prototype,"getAllGallery",null),h=g([Object(l.a)("content/")],h);const y=m.j(h);p.a(h,[{type:o.a}],null,{getAllGallery:[]});var f=a(5),v=a(7),C=a(164),R=a(8),O=a(17),S=a(391),_=a(1079),j=a(1077);a.d(t,"CustomRendererSampleComponent",(function(){return G}));var w=function(e,t,a,n){return new(a||(a=Promise))((function(r,s){function o(e){try{c(n.next(e))}catch(e){s(e)}}function l(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}c((n=n.apply(e,t||[])).next())}))};class G{constructor(e){this._dataSvc=e,this.gridOptions={plugins:{dataLoader:{options:{dataCallback:this._getData.bind(this)}},contentRenderer:{type:s.GalleryContentRendererComponent}}}}_getData(e,t,a){return w(this,void 0,void 0,(function*(){let a=yield this._dataSvc.getGallery({page:e,size:t}).toPromise();return{data:a.content,totalCount:a.totalElements}}))}}G.ɵfac=function(e){return new(e||G)(f.a(h))},G.ɵcmp=v.h({type:G,selectors:[["custom-renderer-sample"]],features:[C.a([h])],decls:3,vars:1,consts:[[3,"gridOptions"],["source","test"]],template:function(e,t){1&e&&(R.c(0,"ng-grid",0),R.c(1,"gallery-metadata"),R.a(2,"gallery-item",1),R.b(),R.b()),2&e&&O.b("gridOptions",t.gridOptions)},directives:[S.a,_.GalleryMetadataGathererComponent,j.GalleryItemComponent],encapsulation:2,changeDetection:0}),p.a(G,[{type:n.a,args:[{selector:"custom-renderer-sample",templateUrl:"customRendererSample.component.html",providers:[h],changeDetection:r.a.OnPush}]}],(function(){return[{type:h}]}),null)},1102:function(e,t,a){"use strict";a.r(t),a.d(t,"CustomRendererComponent",(function(){return v}));var n=a(4),r=a(59),s=a(7),o=a(8),l=a(135),c=a(355),i=a(33),d=a(17),u=a(11),m=a(496),p=a(390),g=a(197),b=a(305),h=a(1097),y=a(334),f=a(497);class v{}v.ɵfac=function(e){return new(e||v)},v.ɵcmp=s.h({type:v,selectors:[["custom-renderer-view"]],decls:45,vars:53,consts:[["label","customRendererSample.component.ts"],[3,"renderMarkdown"],["label","customRendererSample.component.html"],["label","gallery.interface.ts"],["label","galleryItem.component.ts"],["label","galleryItem.context.ts"],["label","galleryMetadataGatherer.component.ts"],["label","galleryContentRenderer.component.ts"],["label","galleryContentRenderer.component.html"],["label","galleryContentRenderer.component.scss"],["label","galleryContentRenderer.interface.ts"]],template:function(e,t){1&e&&(o.c(0,"h3"),l.a(1,"Custom Renderer Grid"),o.b(),o.c(2,"source-code"),o.c(3,"mat-tab-group"),o.c(4,"mat-tab",0),o.a(5,"div",1),c.a(6,"async"),c.a(7,"asSource"),o.b(),o.c(8,"mat-tab",2),o.a(9,"div",1),c.a(10,"async"),c.a(11,"asSource"),o.b(),o.c(12,"mat-tab",3),o.a(13,"div",1),c.a(14,"async"),c.a(15,"asSource"),o.b(),o.c(16,"mat-tab",4),o.a(17,"div",1),c.a(18,"async"),c.a(19,"asSource"),o.b(),o.c(20,"mat-tab",5),o.a(21,"div",1),c.a(22,"async"),c.a(23,"asSource"),o.b(),o.c(24,"mat-tab",6),o.a(25,"div",1),c.a(26,"async"),c.a(27,"asSource"),o.b(),o.c(28,"mat-tab",7),o.a(29,"div",1),c.a(30,"async"),c.a(31,"asSource"),o.b(),o.c(32,"mat-tab",8),o.a(33,"div",1),c.a(34,"async"),c.a(35,"asSource"),o.b(),o.c(36,"mat-tab",9),o.a(37,"div",1),c.a(38,"async"),c.a(39,"asSource"),o.b(),o.c(40,"mat-tab",10),o.a(41,"div",1),c.a(42,"async"),c.a(43,"asSource"),o.b(),o.b(),o.b(),o.a(44,"custom-renderer-sample")),2&e&&(i.b(5),d.b("renderMarkdown",c.b(6,10,c.b(7,12,"samples/grid/customRenderer/customRendererSample.component.ts"))),i.b(4),d.b("renderMarkdown",c.b(10,14,c.c(11,16,"samples/grid/customRenderer/customRendererSample.component.html","html"))),i.b(4),d.b("renderMarkdown",c.b(14,19,c.b(15,21,"samples/grid/customRenderer/gallery/gallery.interface.ts"))),i.b(4),d.b("renderMarkdown",c.b(18,23,c.b(19,25,"samples/grid/customRenderer/gallery/galleryItem.component.ts"))),i.b(4),d.b("renderMarkdown",c.b(22,27,c.b(23,29,"samples/grid/customRenderer/gallery/galleryItem.context.ts"))),i.b(4),d.b("renderMarkdown",c.b(26,31,c.b(27,33,"samples/grid/customRenderer/gallery/galleryMetadataGatherer.component.ts"))),i.b(4),d.b("renderMarkdown",c.b(30,35,c.b(31,37,"samples/grid/customRenderer/galleryRenderer/galleryContentRenderer.component.ts"))),i.b(4),d.b("renderMarkdown",c.b(34,39,c.c(35,41,"samples/grid/customRenderer/galleryRenderer/galleryContentRenderer.component.html","html"))),i.b(4),d.b("renderMarkdown",c.b(38,44,c.c(39,46,"samples/grid/customRenderer/galleryRenderer/galleryContentRenderer.component.scss","scss"))),i.b(4),d.b("renderMarkdown",c.b(42,49,c.b(43,51,"samples/grid/customRenderer/galleryRenderer/galleryContentRenderer.interface.ts"))))},directives:[m.a,p.a,g.b,b.a,h.CustomRendererSampleComponent],pipes:[y.a,f.a],encapsulation:2,changeDetection:0}),u.a(v,[{type:n.a,args:[{selector:"custom-renderer-view",templateUrl:"customRenderer.component.html",changeDetection:r.a.OnPush}]}],null,null)}}]);
//# sourceMappingURL=5.client.es2015.chunk.9f93cd22d88cd1ffba17.js.map