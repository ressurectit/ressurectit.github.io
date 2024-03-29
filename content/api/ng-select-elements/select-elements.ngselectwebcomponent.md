<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select-elements](./select-elements.md) &gt; [NgSelectWebComponent](./select-elements.ngselectwebcomponent.md)

## NgSelectWebComponent interface

Public API for NgSelect WebComponent

<b>Signature:</b>

```typescript
export interface NgSelectWebComponent<TValue = any> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [initializedWC](./select-elements.ngselectwebcomponent.initializedwc.md) | Observable&lt;boolean&gt; | Occurs every time when NgSelect is initialized or reinitialized, if value is false NgSelect was not initialized yet |
|  [isInitializedWC](./select-elements.ngselectwebcomponent.isinitializedwc.md) | boolean | Gets current state of initialization |
|  [selectOptionsWC](./select-elements.ngselectwebcomponent.selectoptionswc.md) | NgSelectOptions&lt;TValue&gt; | Gets or sets NgSelect options |

## Methods

|  Method | Description |
|  --- | --- |
|  [executeAndReturnWC(func)](./select-elements.ngselectwebcomponent.executeandreturnwc.md) | Executes function on NgSelect and returns result |
|  [executeWC(actions)](./select-elements.ngselectwebcomponent.executewc.md) | Executes actions on NgSelect |
|  [getPluginWC(pluginId)](./select-elements.ngselectwebcomponent.getpluginwc.md) | Gets instance of plugin by its id |
|  [initializeWC()](./select-elements.ngselectwebcomponent.initializewc.md) | Initialize component, automatically called once if not blocked by options |
|  [initOptionsWC()](./select-elements.ngselectwebcomponent.initoptionswc.md) | Initialize options, automaticaly called during init phase, but can be used to reinitialize NgSelectOptions |
|  [invalidateVisualsWC()](./select-elements.ngselectwebcomponent.invalidatevisualswc.md) | Explicitly runs invalidation of content (change detection) |

