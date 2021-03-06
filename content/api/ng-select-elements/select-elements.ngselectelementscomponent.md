<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select-elements](./select-elements.md) &gt; [NgSelectElementsComponent](./select-elements.ngselectelementscomponent.md)

## NgSelectElementsComponent class

Component that represents WebComponent implementation of NgSelect

<b>Signature:</b>

```typescript
export declare class NgSelectElementsComponent<TValue = any> extends NgSelectComponent<TValue> implements NgSelectWebComponent<TValue> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(changeDetector, element, componentFactoryResolver, appRef, injector, pluginBus, pluginInstances, readonly, disabled, multiple)](./select-elements.ngselectelementscomponent._constructor_.md) |  | Constructs a new instance of the <code>NgSelectElementsComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_codeOptionsGatherer](./select-elements.ngselectelementscomponent._codeoptionsgatherer.md) |  | <code>CodeOptionsGatherer&lt;TValue&gt;</code> | Options gatherer used for NgSelect WebComponent |
|  [\_optionsObserver](./select-elements.ngselectelementscomponent._optionsobserver.md) |  | <code>MutationObserver</code> | Mutation observer, that observes ng-options |
|  [executeAndReturnWC](./select-elements.ngselectelementscomponent.executeandreturnwc.md) |  | <code>&lt;TResult&gt;(func: NgSelectFunction&lt;TResult, TValue&gt;) =&gt; TResult</code> | Executes function on NgSelect and returns result |
|  [executeWC](./select-elements.ngselectelementscomponent.executewc.md) |  | <code>(...actions: NgSelectAction&lt;TValue&gt;[]) =&gt; void</code> | Executes actions on NgSelect |
|  [getPluginWC](./select-elements.ngselectelementscomponent.getpluginwc.md) |  | <code>&lt;PluginType extends NgSelectPlugin&lt;any, any&gt;&gt;(pluginId: string) =&gt; PluginType</code> | Gets instance of plugin by its id |
|  [initializedWC](./select-elements.ngselectelementscomponent.initializedwc.md) |  | <code>Observable&lt;boolean&gt;</code> | Occurs every time when NgSelect is initialized or reinitialized, if value is false NgSelect was not initialized yet |
|  [initializeWC](./select-elements.ngselectelementscomponent.initializewc.md) |  | <code>() =&gt; void</code> | Initialize component, automatically called once if not blocked by options |
|  [initOptionsWC](./select-elements.ngselectelementscomponent.initoptionswc.md) |  | <code>() =&gt; void</code> | Initialize options, automaticaly called during init phase, but can be used to reinitialize NgSelectOptions |
|  [invalidateVisualsWC](./select-elements.ngselectelementscomponent.invalidatevisualswc.md) |  | <code>() =&gt; void</code> | Explicitly runs invalidation of content (change detection) |
|  [isInitializedWC](./select-elements.ngselectelementscomponent.isinitializedwc.md) |  | <code>boolean</code> | Gets current state of initialization |
|  [pluginInstances](./select-elements.ngselectelementscomponent.plugininstances.md) |  | <code>NgSelectPluginInstances</code> |  |
|  [selectOptionsWC](./select-elements.ngselectelementscomponent.selectoptionswc.md) |  | <code>NgSelectOptions&lt;TValue&gt;</code> | Gets or sets NgSelect options |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [ngOnDestroy()](./select-elements.ngselectelementscomponent.ngondestroy.md) |  | Called when component is destroyed |

