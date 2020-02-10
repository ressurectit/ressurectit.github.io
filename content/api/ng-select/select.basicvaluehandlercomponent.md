<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select](./select.md) &gt; [BasicValueHandlerComponent](./select.basicvaluehandlercomponent.md)

## BasicValueHandlerComponent class

Component used for handling current value of NgSelect

<b>Signature:</b>

```typescript
export declare class BasicValueHandlerComponent<TValue> extends ValueHandlerBase<TValue, BasicValueHandlerOptions> implements BasicValueHandler<TValue> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(ngSelectPlugins, pluginElement, options)](./select.basicvaluehandlercomponent._constructor_.md) |  | Constructs a new instance of the <code>BasicValueHandlerComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_setValue](./select.basicvaluehandlercomponent._setvalue.md) |  | <code>(option: ɵNgSelectOption&lt;TValue&gt;) =&gt; void</code> | Sets value |
|  [\_unmappedValue](./select.basicvaluehandlercomponent._unmappedvalue.md) |  | <code>TValue &#124; TValue[]</code> | Backed up unmapped value that was set before options were obtained |
|  [options](./select.basicvaluehandlercomponent.options.md) |  | <code>BasicValueHandlerOptions</code> | Options for NgSelect plugin |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_loadOptions()](./select.basicvaluehandlercomponent._loadoptions.md) |  | Loads options |
|  [\_useOptionsAsValue(value)](./select.basicvaluehandlercomponent._useoptionsasvalue.md) |  | Converts value to options |
|  [initOptions()](./select.basicvaluehandlercomponent.initoptions.md) |  | Initialize plugin options, all operations required to be done with plugin options are handled here |
|  [invalidateVisuals()](./select.basicvaluehandlercomponent.invalidatevisuals.md) |  | Explicitly runs invalidation of content (change detection) |
|  [setValue(value)](./select.basicvaluehandlercomponent.setvalue.md) |  | Sets value for NgSelect |
