<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select](./select.md) &gt; [NoLiveSearchComponent](./select.nolivesearchcomponent.md)

## NoLiveSearchComponent class

Component used for no live search

<b>Signature:</b>

```typescript
export declare class NoLiveSearchComponent implements NoLiveSearch, NgSelectPluginGeneric<NoLiveSearchOptions> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(ngSelectPlugins, pluginElement, \_document)](./select.nolivesearchcomponent._constructor_.md) |  | Constructs a new instance of the <code>NoLiveSearchComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_options](./select.nolivesearchcomponent._options.md) |  | <code>NoLiveSearchOptions</code> | Options for NgSelect plugin |
|  [liveSearchElement](./select.nolivesearchcomponent.livesearchelement.md) |  | <code>HTMLElement</code> | HTML element that represents live search |
|  [ngSelectPlugins](./select.nolivesearchcomponent.ngselectplugins.md) |  | <code>NgSelectPluginInstances</code> |  |
|  [options](./select.nolivesearchcomponent.options.md) |  | <code>NoLiveSearchOptions</code> | Options for NgSelect plugin |
|  [pluginElement](./select.nolivesearchcomponent.pluginelement.md) |  | <code>ElementRef</code> |  |
|  [searchValue](./select.nolivesearchcomponent.searchvalue.md) |  | <code>string</code> | Current value of live search |
|  [searchValueChange](./select.nolivesearchcomponent.searchvaluechange.md) |  | <code>EventEmitter&lt;void&gt;</code> | Occurs when current value of live search changes |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [initialize()](./select.nolivesearchcomponent.initialize.md) |  | Initialize plugin, to be ready to use, initialize communication with other plugins |
|  [initOptions()](./select.nolivesearchcomponent.initoptions.md) |  | Initialize plugin options, all operations required to be done with plugin options are handled here |
|  [invalidateVisuals()](./select.nolivesearchcomponent.invalidatevisuals.md) |  | Explicitly runs invalidation of content (change detection) |
