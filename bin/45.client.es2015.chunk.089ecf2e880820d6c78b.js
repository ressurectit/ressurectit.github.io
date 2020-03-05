(self.webpackJsonp=self.webpackJsonp||[]).push([[45],{1179:function(e,t){e.exports='<ng-grid [gridOptions]="gridOptions">\r\n    <basic-table-metadata>\r\n        \x3c!-- Simple column definition --\x3e\r\n        <basic-table-column id="country" name="country" title="Country"></basic-table-column>\r\n        \x3c!-- Simple column definition, with ordering enabled, specific width and title tooltip in header --\x3e\r\n        <basic-table-column id="city" name="city" title="City" [ordering]="true" width="70px" headerTooltip="City where citizen lives"></basic-table-column>\r\n        \x3c!-- Simple column definition, that is hidden as default, can be displayed using metadata selector --\x3e\r\n        <basic-table-column id="zip" name="zip" title="ZIP" [visible]="false"></basic-table-column>\r\n        \x3c!-- Simple column definition, with custom css classes for header and body cell --\x3e\r\n        <basic-table-column id="street" name="street" title="Street" headerClass="text-center" cellClass="text-right"></basic-table-column>\r\n        \x3c!-- Simple column definition, without visible title --\x3e\r\n        <basic-table-column id="houseNumber" name="houseNumber" title="House number" [titleVisible]="false"></basic-table-column>\r\n\r\n        \x3c!-- Custom column definition, custom body template with all available context data --\x3e\r\n        <basic-table-column id="citizenName" title="Citizen name">\r\n            <ng-template #bodyTemplate let-row let-column="column" let-index="index" let-rowIndex="rowIndex">\r\n                <div>\r\n                    {{row?.citizen?.name}} | column title: {{column?.title}} | index of row on current page: {{index}} | index of row: {{rowIndex}}\r\n                </div>\r\n            </ng-template>\r\n        </basic-table-column>\r\n\r\n        \x3c!-- Custom column definition, custom body and header template --\x3e\r\n        <basic-table-column id="citizenSurname" title="Citizen surname">\r\n            <ng-template #bodyTemplate let-row>\r\n                <div>\r\n                    {{row?.citizen?.surname}}\r\n                </div>\r\n            </ng-template>\r\n\r\n            <ng-template #headerTemplate let-column="column">\r\n                <div class="bold">\r\n                    {{column?.title}}\r\n                </div>\r\n            </ng-template>\r\n        </basic-table-column>\r\n\r\n        \x3c!-- Custom column definition, custom body template --\x3e\r\n        <basic-table-column id="citizenBirthDate" title="Citizen birth date">\r\n            <ng-template #bodyTemplate let-row>{{row?.citizen?.birthDate | momentConvert}}</ng-template>\r\n        </basic-table-column>\r\n    </basic-table-metadata>\r\n</ng-grid>'}}]);
//# sourceMappingURL=45.client.es2015.chunk.089ecf2e880820d6c78b.js.map