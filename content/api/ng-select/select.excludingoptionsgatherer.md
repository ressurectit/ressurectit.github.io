<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select](./select.md) &gt; [ExcludingOptionsGatherer](./select.excludingoptionsgatherer.md)

## ExcludingOptionsGatherer class

Options gatherer using default build in gatherer extended with exclusion of selected options

<b>Signature:</b>

```typescript
export declare class ExcludingOptionsGatherer<TValue = any> implements OptionsGatherer<TValue> 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_availableOptions](./select.excludingoptionsgatherer._availableoptions.md) |  | <code>NgSelectOption&lt;TValue&gt;[]</code> | Array of visible, displayed options for select |
|  [\_availableOptionsChange](./select.excludingoptionsgatherer._availableoptionschange.md) |  | <code>EventEmitter&lt;void&gt;</code> | Occurs when array of visible, displayed options has changed |
|  [\_availableOptionsChangeSubscription](./select.excludingoptionsgatherer._availableoptionschangesubscription.md) |  | <code>Subscription</code> | Subscription for change of available options |
|  [\_valueChangedSubscription](./select.excludingoptionsgatherer._valuechangedsubscription.md) |  | <code>Subscription</code> | Subscription for change of value in value handler |
|  [\_valueHandler](./select.excludingoptionsgatherer._valuehandler.md) |  | <code>ValueHandler</code> | Value handler plugin used within <code>NgSelect</code> |
|  [availableOptions](./select.excludingoptionsgatherer.availableoptions.md) |  | <code>NgSelectOption&lt;TValue&gt;[]</code> | Array of visible, displayed options for select |
|  [availableOptionsChange](./select.excludingoptionsgatherer.availableoptionschange.md) |  | <code>EventEmitter&lt;void&gt;</code> | Occurs when array of visible, displayed options has changed |
|  [ngSelectPlugins](./select.excludingoptionsgatherer.ngselectplugins.md) |  | <code>NgSelectPluginInstances</code> | NgSelect plugin instances available for gatherer |
|  [options](./select.excludingoptionsgatherer.options.md) |  | <code>NgSelectOption&lt;TValue&gt;[]</code> | Array of provided options for select |
|  [optionsChange](./select.excludingoptionsgatherer.optionschange.md) |  | <code>EventEmitter&lt;void&gt;</code> | Occurs when array of provided options has changed |
|  [pluginBus](./select.excludingoptionsgatherer.pluginbus.md) |  | <code>PluginBus&lt;TValue&gt;</code> | Plugin bus used for inter plugin shared events |
|  [select](./select.excludingoptionsgatherer.select.md) |  | <code>NgSelect&lt;TValue&gt;</code> | Select element that implements default gatherers |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_excludeSelected()](./select.excludingoptionsgatherer._excludeselected.md) |  | Exclude selected options |
|  [destroyGatherer()](./select.excludingoptionsgatherer.destroygatherer.md) |  | Called when gatherer needs to be destroyed |
|  [initializeGatherer()](./select.excludingoptionsgatherer.initializegatherer.md) |  | Initialize gatherer during initialization phase |

