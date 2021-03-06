<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/grid-material](./grid-material.md) &gt; [BasicDialogPopupComponent](./grid-material.basicdialogpopupcomponent.md)

## BasicDialogPopupComponent class

Basic dialog popup

<b>Signature:</b>

```typescript
export declare class BasicDialogPopupComponent<TValue = any> implements DialogPopupContentComponent<BasicDialogPopupOptions, TValue, CssClassesBasicDialogPopup>, OnInit, OnDestroy 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(dialog, \_changeDetector, data)](./grid-material.basicdialogpopupcomponent._constructor_.md) |  | Constructs a new instance of the <code>BasicDialogPopupComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_changeDetector](./grid-material.basicdialogpopupcomponent._changedetector.md) |  | <code>ChangeDetectorRef</code> |  |
|  [\_optionsChangeSubscription](./grid-material.basicdialogpopupcomponent._optionschangesubscription.md) |  | <code>Subscription</code> | Subscription for available options change |
|  [\_optionsGatherer](./grid-material.basicdialogpopupcomponent._optionsgatherer.md) |  | <code>OptionsGatherer&lt;TValue&gt;</code> | Instance of options gatherer, that is used for obtaining available options |
|  [data](./grid-material.basicdialogpopupcomponent.data.md) |  | <code>DialogPopupComponentData&lt;BasicDialogPopupOptions, TValue, CssClassesBasicDialogPopup&gt;</code> |  |
|  [dialog](./grid-material.basicdialogpopupcomponent.dialog.md) |  | <code>MatDialogRef&lt;BasicDialogPopupComponent&lt;TValue&gt;&gt;</code> |  |
|  [options](./grid-material.basicdialogpopupcomponent.options.md) |  | <code>BasicDialogPopupOptions</code> | Options for NgSelect plugin |
|  [selectOptions](./grid-material.basicdialogpopupcomponent.selectoptions.md) |  | <code>ɵNgSelectOption&lt;TValue&gt;[]</code> | Array of provided options for select |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [invalidateVisuals()](./grid-material.basicdialogpopupcomponent.invalidatevisuals.md) |  | Explicitly runs invalidation of content (change detection) |
|  [ngOnDestroy()](./grid-material.basicdialogpopupcomponent.ngondestroy.md) |  | Called when component is destroyed |
|  [ngOnInit()](./grid-material.basicdialogpopupcomponent.ngoninit.md) |  | Initialize component |

