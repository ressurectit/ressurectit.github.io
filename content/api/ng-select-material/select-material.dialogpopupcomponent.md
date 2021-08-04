<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select-material](./select-material.md) &gt; [DialogPopupComponent](./select-material.dialogpopupcomponent.md)

## DialogPopupComponent class

Component used for rendering basic popup with options

<b>Signature:</b>

```typescript
export declare class DialogPopupComponent<TComponent extends DialogPopupContentComponent<TDialogOptions, TValue, TCssClasses> = any, TValue = any, TDialogOptions = any, TCssClasses = any> implements DialogPopup, NgSelectPlugin<DialogPopupOptions<TComponent, TDialogOptions, TValue, TCssClasses>, TValue>, OnDestroy 
```
<b>Implements:</b> [DialogPopup](./select-material.dialogpopup.md)<!-- -->, NgSelectPlugin&lt;[DialogPopupOptions](./select-material.dialogpopupoptions.md)<!-- -->&lt;TComponent, TDialogOptions, TValue, TCssClasses&gt;, TValue&gt;, OnDestroy

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(ngSelectPlugins, pluginBus, pluginElement, \_dialog, \_changeDetector, options)](./select-material.dialogpopupcomponent._constructor_.md) |  | Constructs a new instance of the <code>DialogPopupComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_changeDetector](./select-material.dialogpopupcomponent._changedetector.md) |  | ChangeDetectorRef |  |
|  [\_dialog](./select-material.dialogpopupcomponent._dialog.md) |  | MatDialog |  |
|  [\_dialogComponent](./select-material.dialogpopupcomponent._dialogcomponent.md) |  | ComponentType&lt;TComponent&gt; | Component that is used for handling metadata selection itself |
|  [\_dialogRef](./select-material.dialogpopupcomponent._dialogref.md) |  | MatDialogRef&lt;TComponent&gt; | Popup dialog reference |
|  [\_handleDialog](./select-material.dialogpopupcomponent._handledialog.md) |  | (visible: boolean) =&gt; void | Handles dialog visibility change |
|  [\_options](./select-material.dialogpopupcomponent._options.md) |  | [DialogPopupOptions](./select-material.dialogpopupoptions.md)<!-- -->&lt;TComponent, TDialogOptions, TValue, TCssClasses&gt; | Options for NgSelect plugin |
|  [\_popupToggleSubscription](./select-material.dialogpopupcomponent._popuptogglesubscription.md) |  | Subscription | Subscription for toggle popup event |
|  [\_visibilityRequestSubscription](./select-material.dialogpopupcomponent._visibilityrequestsubscription.md) |  | Subscription | Subscription for popup visibility change request |
|  [ngSelectPlugins](./select-material.dialogpopupcomponent.ngselectplugins.md) |  | NgSelectPluginInstances |  |
|  [options](./select-material.dialogpopupcomponent.options.md) |  | [DialogPopupOptions](./select-material.dialogpopupoptions.md)<!-- -->&lt;TComponent, TDialogOptions, TValue, TCssClasses&gt; | Options for NgSelect plugin |
|  [pluginBus](./select-material.dialogpopupcomponent.pluginbus.md) |  | PluginBus&lt;TValue&gt; |  |
|  [pluginElement](./select-material.dialogpopupcomponent.pluginelement.md) |  | ElementRef |  |
|  [popupElement](./select-material.dialogpopupcomponent.popupelement.md) |  | HTMLElement | Html element that represents popup itself |
|  [visibilityChange](./select-material.dialogpopupcomponent.visibilitychange.md) |  | EventEmitter&lt;void&gt; | Occurs when visibility of popup has changed |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [initialize()](./select-material.dialogpopupcomponent.initialize.md) |  | Initialize plugin, to be ready to use, initialize communication with other plugins |
|  [initOptions()](./select-material.dialogpopupcomponent.initoptions.md) |  | Initialize plugin options, all operations required to be done with plugin options are handled here |
|  [invalidateVisuals()](./select-material.dialogpopupcomponent.invalidatevisuals.md) |  | Explicitly runs invalidation of content (change detection) |
|  [ngOnDestroy()](./select-material.dialogpopupcomponent.ngondestroy.md) |  | Called when component is destroyed |
|  [toggleDialog()](./select-material.dialogpopupcomponent.toggledialog.md) |  | Toggles dialog visibility |
