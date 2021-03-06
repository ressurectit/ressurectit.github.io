<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select](./select.md) &gt; [ValueHandler](./select.valuehandler.md)

## ValueHandler interface

Value handler plugin interface

<b>Signature:</b>

```typescript
export interface ValueHandler<TValue = any> extends NgSelectPlugin 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [selectedOptions](./select.valuehandler.selectedoptions.md) | <code>NgSelectOption&lt;TValue&gt; &#124; NgSelectOption&lt;TValue&gt;[]</code> | Current selected options of NgSelect |
|  [value](./select.valuehandler.value.md) | <code>TValue &#124; TValue[]</code> | Current selected value of NgSelect |
|  [valueChange](./select.valuehandler.valuechange.md) | <code>EventEmitter&lt;void&gt;</code> | Occurs when value of NgSelect changes |

## Methods

|  Method | Description |
|  --- | --- |
|  [setValue(value)](./select.valuehandler.setvalue.md) | Sets value for NgSelect |

