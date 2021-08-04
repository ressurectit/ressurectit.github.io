<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common-positions](./common-positions.md) &gt; [PositionToDirective](./common-positions.positiontodirective.md)

## PositionToDirective class

Sets position of attached element relative to provided element

<b>Signature:</b>

```typescript
export declare class PositionToDirective implements OnChanges 
```
<b>Implements:</b> OnChanges

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_element, \_document)](./common-positions.positiontodirective._constructor_.md) |  | Constructs a new instance of the <code>PositionToDirective</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [elementCoordinates](./common-positions.positiontodirective.elementcoordinates.md) |  | Positions.PositionsCoordinates | Relative coordinates of element |
|  [flip](./common-positions.positiontodirective.flip.md) |  | EventEmitter&lt;void&gt; | Occurs when flip occurs during positioning |
|  [target](./common-positions.positiontodirective.target.md) |  | HTMLElement | Html element which is used as target for positioning against it |
|  [targetCoordinates](./common-positions.positiontodirective.targetcoordinates.md) |  | Positions.PositionsCoordinates | Relative coordinates of target element |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [ngOnChanges(changes)](./common-positions.positiontodirective.ngonchanges.md) |  | Called when input value changes |
