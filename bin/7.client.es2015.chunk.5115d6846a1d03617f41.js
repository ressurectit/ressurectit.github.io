(self.webpackJsonp=self.webpackJsonp||[]).push([[7,22],{1141:function(t,e,a){"use strict";a.r(e),a.d(e,"BasicMetadataSampleComponent",(function(){return k}));var n=a(4),i=a(64),c=a(1137),l=a(10),s=a(145),o=a(34),r=a(113),b=a(209),u=a(5),d=a(6),m=a(165),p=a(52),h=a(257),f=a(21),g=a(8),v=a(433),y=a(424),w=a(189),M=a(1118),z=a(423),C=function(t,e,a,n){return new(a||(a=Promise))((function(i,c){function l(t){try{o(n.next(t))}catch(t){c(t)}}function s(t){try{o(n.throw(t))}catch(t){c(t)}}function o(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(l,s)}o((n=n.apply(t,e||[])).next())}))};function S(t,e){if(1&t&&(l.c(0,"div"),s.a(1),l.b()),2&t){const t=e.$implicit,a=e.column,n=e.index,i=e.rowIndex;o.b(1),r.e(" ",null==t||null==t.citizen?null:t.citizen.name," | column title: ",null==a?null:a.title," | index of row on current page: ",n," | index of row: ",i," ")}}function D(t,e){if(1&t&&(l.c(0,"div"),s.a(1),l.b()),2&t){const t=e.$implicit;o.b(1),r.b(" ",null==t||null==t.citizen?null:t.citizen.surname," ")}}function x(t,e){if(1&t&&(l.c(0,"div",11),s.a(1),l.b()),2&t){const t=e.column;o.b(1),r.b(" ",null==t?null:t.title," ")}}function P(t,e){if(1&t&&(s.a(0),b.a(1,"momentConvert")),2&t){const t=e.$implicit;r.a(b.b(1,1,null==t||null==t.citizen?null:t.citizen.birthDate))}}class k{constructor(t){this._dataSvc=t,this.gridOptions={plugins:{dataLoader:{options:{dataCallback:this._getData.bind(this)}},paging:{options:{itemsPerPageValues:[10,20,40],initialItemsPerPage:10}}}}}_getData(t,e,a){return C(this,void 0,void 0,(function*(){let n=null;a&&(n={direction:a.orderByDirection,sort:a.orderBy});let i=yield this._dataSvc.getData({page:t,size:e},n).toPromise();return{data:i.content,totalCount:i.totalElements}}))}}k.ɵfac=function(t){return new(t||k)(u.a(c.a))},k.ɵcmp=d.h({type:k,selectors:[["basic-metadata-sample"]],features:[m.a([c.a])],decls:18,vars:4,consts:[[3,"gridOptions"],["id","country","name","country","title","Country"],["id","city","name","city","title","City","width","70px","headerTooltip","City where citizen lives",3,"ordering"],["id","zip","name","zip","title","ZIP",3,"visible"],["id","street","name","street","title","Street","headerClass","text-center","cellClass","text-right"],["id","houseNumber","name","houseNumber","title","House number",3,"titleVisible"],["id","citizenName","title","Citizen name"],["bodyTemplate",""],["id","citizenSurname","title","Citizen surname"],["headerTemplate",""],["id","citizenBirthDate","title","Citizen birth date"],[1,"bold"]],template:function(t,e){1&t&&(l.c(0,"ng-grid",0),l.c(1,"basic-table-metadata"),l.a(2,"basic-table-column",1),l.a(3,"basic-table-column",2),l.a(4,"basic-table-column",3),l.a(5,"basic-table-column",4),l.a(6,"basic-table-column",5),l.c(7,"basic-table-column",6),p.d(8,S,2,4,"ng-template",null,7,h.b),l.b(),l.c(10,"basic-table-column",8),p.d(11,D,2,1,"ng-template",null,7,h.b),p.d(13,x,2,1,"ng-template",null,9,h.b),l.b(),l.c(15,"basic-table-column",10),p.d(16,P,2,3,"ng-template",null,7,h.b),l.b(),l.b(),l.b()),2&t&&(f.b("gridOptions",e.gridOptions),o.b(3),f.b("ordering",!0),o.b(1),f.b("visible",!1),o.b(2),f.b("titleVisible",!1))},directives:[v.a,y.a,w.a,M.a],pipes:[z.a],encapsulation:2,changeDetection:0}),g.a(k,[{type:n.a,args:[{selector:"basic-metadata-sample",templateUrl:"basicMetadataSample.component.html",providers:[c.a],changeDetection:i.a.OnPush}]}],(function(){return[{type:c.a}]}),null)},1156:function(t,e,a){"use strict";a.r(e),a.d(e,"BasicMetadataComponent",(function(){return y}));var n=a(4),i=a(64),c=a(6),l=a(10),s=a(145),o=a(209),r=a(34),b=a(21),u=a(8),d=a(557),m=a(432),p=a(227),h=a(348),f=a(1141),g=a(376),v=a(558);class y{}y.ɵfac=function(t){return new(t||y)},y.ɵcmp=c.h({type:y,selectors:[["basicMetadata-view"]],decls:17,vars:16,consts:[["label","basicMetadataSample.component.ts"],[3,"renderMarkdown"],["label","basicMetadataSample.component.html"],["label","data.interface.ts"]],template:function(t,e){1&t&&(l.c(0,"h3"),s.a(1,"Basic Metadata Grid"),l.b(),l.c(2,"source-code"),l.c(3,"mat-tab-group"),l.c(4,"mat-tab",0),l.a(5,"div",1),o.a(6,"async"),o.a(7,"asSource"),l.b(),l.c(8,"mat-tab",2),l.a(9,"div",1),o.a(10,"async"),o.a(11,"asSource"),l.b(),l.c(12,"mat-tab",3),l.a(13,"div",1),o.a(14,"async"),o.a(15,"asSource"),l.b(),l.b(),l.b(),l.a(16,"basic-metadata-sample")),2&t&&(r.b(5),b.b("renderMarkdown",o.b(6,3,o.b(7,5,"samples/grid/basicMetadata/basicMetadataSample.component.ts"))),r.b(4),b.b("renderMarkdown",o.b(10,7,o.c(11,9,"samples/grid/basicMetadata/basicMetadataSample.component.html","html"))),r.b(4),b.b("renderMarkdown",o.b(14,12,o.b(15,14,"services/api/data/data.interface.ts"))))},directives:[d.a,m.a,p.b,h.a,f.BasicMetadataSampleComponent],pipes:[g.a,v.a],encapsulation:2,changeDetection:0}),u.a(y,[{type:n.a,args:[{selector:"basicMetadata-view",templateUrl:"basicMetadata.component.html",changeDetection:i.a.OnPush}]}],null,null)}}]);
//# sourceMappingURL=7.client.es2015.chunk.5115d6846a1d03617f41.js.map