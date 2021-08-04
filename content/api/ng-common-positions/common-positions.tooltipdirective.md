<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common-positions](./common-positions.md) &gt; [TooltipDirective](./common-positions.tooltipdirective.md)

## TooltipDirective class

Directive used for rendering tooltip

<b>Signature:</b>

```typescript
export declare class TooltipDirective<TData = any> implements OnChanges, OnDestroy 
```
<b>Implements:</b> OnChanges, OnDestroy

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_componentFactoryResolver, \_appRef, \_injector, \_element, options)](./common-positions.tooltipdirective._constructor_.md) |  | Constructs a new instance of the <code>TooltipDirective</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_appRef](./common-positions.tooltipdirective._appref.md) |  | ApplicationRef |  |
|  [\_componentFactoryResolver](./common-positions.tooltipdirective._componentfactoryresolver.md) |  | ComponentFactoryResolver |  |
|  [\_element](./common-positions.tooltipdirective._element.md) |  | ElementRef&lt;HTMLElement&gt; |  |
|  [\_injector](./common-positions.tooltipdirective._injector.md) |  | Injector |  |
|  [\_keepOpen](./common-positions.tooltipdirective._keepopen.md) |  | boolean | Indication whether keep open tooltip component |
|  [\_options](./common-positions.tooltipdirective._options.md) |  | [TooltipOptions](./common-positions.tooltipoptions.md) | Instance of options provided for this tooltip |
|  [\_showRequest](./common-positions.tooltipdirective._showrequest.md) |  | boolean | Indication whether there is active show tooltip request |
|  [\_timeout](./common-positions.tooltipdirective._timeout.md) |  | number \| null | Timeout that is used for handling mouse move |
|  [\_tooltipComponent?](./common-positions.tooltipdirective._tooltipcomponent.md) |  | ComponentRef&lt;[TooltipRenderer](./common-positions.tooltiprenderer.md)<!-- -->&gt; | <i>(Optional)</i> Instance of component used for rendering tooltip |
|  [\_tooltipElement?](./common-positions.tooltipdirective._tooltipelement.md) |  | HTMLElement | <i>(Optional)</i> Instance of HTML element for tooltip renderer |
|  [allowHtml](./common-positions.tooltipdirective.allowhtml.md) |  | boolean | Indication whether are html tags allowed in tooltip text |
|  [tooltip?](./common-positions.tooltipdirective.tooltip.md) |  | TData \| string | <i>(Optional)</i> Tooltip text that is displayed, or any data that could be passed to template |
|  [tooltipOptions](./common-positions.tooltipdirective.tooltipoptions.md) |  | [TooltipOptions](./common-positions.tooltipoptions.md) | Options used for displaying tooltip |
|  [tooltipTemplate?](./common-positions.tooltipdirective.tooltiptemplate.md) |  | TemplateRef&lt;any&gt; | <i>(Optional)</i> Instance of tooltip template that is used for rendering |
|  [tooltipTemplateChild?](./common-positions.tooltipdirective.tooltiptemplatechild.md) |  | TemplateRef&lt;any&gt; | <i>(Optional)</i> Instance of template from element content, used for rendering |
|  [tooltipVisible?](./common-positions.tooltipdirective.tooltipvisible.md) |  | boolean | <i>(Optional)</i> Gets or sets indication whether is tooltip visible, if has boolean value, mouse events cant override this |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_createTooltip()](./common-positions.tooltipdirective._createtooltip.md) |  | Creates tooltip renderer component |
|  [\_destroyTooltip()](./common-positions.tooltipdirective._destroytooltip.md) |  | Destroys tooltip component |
|  [\_hideTooltip()](./common-positions.tooltipdirective._hidetooltip.md) |  | Hides tooltip |
|  [\_showData()](./common-positions.tooltipdirective._showdata.md) |  | Sets data to tooltip component and shows them |
|  [\_showTooltip(xCoordinate)](./common-positions.tooltipdirective._showtooltip.md) |  | Shows tooltip |
|  [ngOnChanges(changes)](./common-positions.tooltipdirective.ngonchanges.md) |  | Called when input value changes |
|  [ngOnDestroy()](./common-positions.tooltipdirective.ngondestroy.md) |  | Called when component is destroyed |
