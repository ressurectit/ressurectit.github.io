<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select](./select.md) &gt; [ValueHandlerBase](./select.valuehandlerbase.md)

## ValueHandlerBase class

Base class for value handlers

<b>Signature:</b>

```typescript
export declare abstract class ValueHandlerBase<TValue, TOptions extends ValueHandlerOptions> implements ValueHandler<TValue>, NgSelectPluginGeneric<TOptions>, OnDestroy 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(ngSelectPlugins, pluginElement)](./select.valuehandlerbase._constructor_.md) |  | Constructs a new instance of the <code>ValueHandlerBase</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_cancelOptionSubscription](./select.valuehandlerbase._canceloptionsubscription.md) |  | <code>Subscription</code> | Subscription for canceling an option |
|  [\_cancelValue](./select.valuehandlerbase._cancelvalue.md) |  | <code>(option: ɵNgSelectOption&lt;TValue&gt;) =&gt; void</code> | Cancels, removes option from selected options |
|  [\_keyboardHandler](./select.valuehandlerbase._keyboardhandler.md) |  | <code>KeyboardHandler</code> | Keyboard handler that is used |
|  [\_normalState](./select.valuehandlerbase._normalstate.md) |  | <code>NormalState</code> | Normal state that is used |
|  [\_optionClickSubscription](./select.valuehandlerbase._optionclicksubscription.md) |  | <code>Subscription</code> | Subscription for option selection using mouse |
|  [\_options](./select.valuehandlerbase._options.md) |  | <code>TOptions</code> | Options for NgSelect plugin |
|  [\_optionsChangeSubscription](./select.valuehandlerbase._optionschangesubscription.md) |  | <code>Subscription</code> | Subscription for changes of options in options gatherer |
|  [\_optionSelectSubscription](./select.valuehandlerbase._optionselectsubscription.md) |  | <code>Subscription</code> | Subscription for option selection using keyboard |
|  [\_optionsGatherer](./select.valuehandlerbase._optionsgatherer.md) |  | <code>OptionsGatherer&lt;TValue&gt;</code> | Instance of previous options gatherer, that is used for obtaining available options |
|  [\_popup](./select.valuehandlerbase._popup.md) |  | <code>Popup</code> | Popup that is used |
|  [\_setValue](./select.valuehandlerbase._setvalue.md) |  | <code>(option: ɵNgSelectOption&lt;TValue&gt;) =&gt; void</code> | Sets value |
|  [liveSearchFilter](./select.valuehandlerbase.livesearchfilter.md) |  | <code>LiveSearchFilter&lt;TValue&gt;</code> | Function for filtering options |
|  [ngSelectPlugins](./select.valuehandlerbase.ngselectplugins.md) |  | <code>NgSelectPluginInstances</code> |  |
|  [normalizer](./select.valuehandlerbase.normalizer.md) |  | <code>NormalizeFunc&lt;TValue&gt;</code> | Normalizer used for normalizing values, usually when filtering |
|  [options](./select.valuehandlerbase.options.md) |  | <code>TOptions</code> | Options for NgSelect plugin |
|  [optionsGatherer](./select.valuehandlerbase.optionsgatherer.md) |  | <code>OptionsGatherer&lt;TValue&gt;</code> | Instance of options gatherer, that is used for obtaining available options |
|  [pluginElement](./select.valuehandlerbase.pluginelement.md) |  | <code>ElementRef</code> |  |
|  [popupVisibilityRequest](./select.valuehandlerbase.popupvisibilityrequest.md) |  | <code>EventEmitter&lt;boolean&gt;</code> | Occurs when there is requested for change of visibility of popup using keyboard |
|  [selectedOptions](./select.valuehandlerbase.selectedoptions.md) |  | <code>NgSelectOption&lt;TValue&gt; &#124; NgSelectOption&lt;TValue&gt;[]</code> | Current value of NgSelect |
|  [value](./select.valuehandlerbase.value.md) |  | <code>TValue &#124; TValue[]</code> | Current selected value of NgSelect |
|  [valueChange](./select.valuehandlerbase.valuechange.md) |  | <code>EventEmitter&lt;void&gt;</code> | Occurs when value of NgSelect changes |
|  [valueComparer](./select.valuehandlerbase.valuecomparer.md) |  | <code>CompareValueFunc&lt;TValue&gt;</code> | Function of value comparer that is used for comparison of values |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_clearSelected()](./select.valuehandlerbase._clearselected.md) |  | Clears all selected values |
|  [\_loadOptions()](./select.valuehandlerbase._loadoptions.md) |  | Loads options |
|  [\_markValueAsSelected()](./select.valuehandlerbase._markvalueasselected.md) |  | Marks current value as selected |
|  [findAvailableOption(text, exact)](./select.valuehandlerbase.findavailableoption.md) |  | Returns first found options or null |
|  [initialize()](./select.valuehandlerbase.initialize.md) |  | Initialize plugin, to be ready to use, initialize communication with other plugins |
|  [initOptions()](./select.valuehandlerbase.initoptions.md) |  | Initialize plugin options, all operations required to be done with plugin options are handled here |
|  [invalidateVisuals()](./select.valuehandlerbase.invalidatevisuals.md) |  | Explicitly runs invalidation of content (change detection) |
|  [ngOnDestroy()](./select.valuehandlerbase.ngondestroy.md) |  | Called when component is destroyed |
|  [setValue(value)](./select.valuehandlerbase.setvalue.md) |  | Sets value for NgSelect |
