(self.webpackJsonp=self.webpackJsonp||[]).push([[64],{1196:function(t,e){t.exports='<div>Value: {{selectControl?.value | json}}</div>\r\n\r\n<ng-select [formControl]="selectControl">\r\n    <ng-option value="first" text="First value text"></ng-option>\r\n    <ng-option value="second" text="Second value text"></ng-option>\r\n    <ng-option value="third" text="Third value text"></ng-option>\r\n    <ng-option value="fourth" text="Fourth value text"></ng-option>\r\n    <ng-option value="fifth" text="Fifth value text"></ng-option>\r\n\r\n    <ng-template #normalStateTemplate let-normalState>{{normalState?.valueHandler?.selectedOptions?.value}} => {{normalState?.valueHandler?.selectedOptions | ngSelectValue: normalState?.texts?.nothingSelected}}</ng-template>\r\n    <ng-template #optionTemplate let-option>{{option?.value}} - {{option?.text}}</ng-template>\r\n</ng-select>'}}]);
//# sourceMappingURL=64.client.es2015.chunk.7bf3519a99d7c89a04ae.js.map