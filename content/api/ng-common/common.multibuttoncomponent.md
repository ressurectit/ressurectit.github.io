<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md) &gt; [MultiButtonComponent](./common.multibuttoncomponent.md)

## MultiButtonComponent class

Component used for displaying multibutton

<b>Signature:</b>

```typescript
export declare class MultiButtonComponent implements OnDestroy 
```
<b>Implements:</b> OnDestroy

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_document, \_cssClasess, \_element, \_changeDetector)](./common.multibuttoncomponent._constructor_.md) |  | Constructs a new instance of the <code>MultiButtonComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_changeDetector](./common.multibuttoncomponent._changedetector.md) |  | ChangeDetectorRef |  |
|  [\_document](./common.multibuttoncomponent._document.md) |  | HTMLDocument |  |
|  [\_element](./common.multibuttoncomponent._element.md) |  | ElementRef&lt;HTMLElement&gt; |  |
|  [\_handleClickOutside](./common.multibuttoncomponent._handleclickoutside.md) |  | () =&gt; void | Handles click outside of multi button element |
|  [\_usedCssClasses](./common.multibuttoncomponent._usedcssclasses.md) |  | [MultiButtonCssClasses](./common.multibuttoncssclasses.md) | Used css classes within component |
|  [click](./common.multibuttoncomponent.click.md) |  | EventEmitter&lt;MouseEvent&gt; | Occurs when user clicks on button |
|  [cssClass](./common.multibuttoncomponent.cssclass.md) |  | string | Css class applied to main displayed element |
|  [cssClasses](./common.multibuttoncomponent.cssclasses.md) |  | [MultiButtonCssClasses](./common.multibuttoncssclasses.md) | Css classes used within component, allows to change specific class |
|  [subButtonsContent](./common.multibuttoncomponent.subbuttonscontent.md) |  | TemplateRef&lt;void&gt; | Template that is used for rendering sub buttons content |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_removeRegistration()](./common.multibuttoncomponent._removeregistration.md) |  | Removes event registration |
|  [ngOnDestroy()](./common.multibuttoncomponent.ngondestroy.md) |  | Called when component is destroyed |
|  [showSubButtons(event)](./common.multibuttoncomponent.showsubbuttons.md) |  | Method called when sub buttons should be shown |
