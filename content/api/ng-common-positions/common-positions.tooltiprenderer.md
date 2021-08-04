<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common-positions](./common-positions.md) &gt; [TooltipRenderer](./common-positions.tooltiprenderer.md)

## TooltipRenderer interface

Represents component that is used for rendering tooltip

<b>Signature:</b>

```typescript
export interface TooltipRenderer<TData = any> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [allowHtml](./common-positions.tooltiprenderer.allowhtml.md) | boolean | Indication whether are html tags allowed in tooltip text |
|  [cssClass](./common-positions.tooltiprenderer.cssclass.md) | string \| null | Css class that is applied to tooltip renderer component |
|  [data](./common-positions.tooltiprenderer.data.md) | TData \| null | Data that are rendered in tooltip |
|  [template](./common-positions.tooltiprenderer.template.md) | TemplateRef&lt;TData&gt; \| null | Template used for rendering tooltip |

## Methods

|  Method | Description |
|  --- | --- |
|  [invalidateVisuals()](./common-positions.tooltiprenderer.invalidatevisuals.md) | Explicitly runs invalidation of content (change detection) |
|  [registerHoverEvents(enter, leave)](./common-positions.tooltiprenderer.registerhoverevents.md) | Registers handlers that allows reaction to entering or leaving tooltip |
