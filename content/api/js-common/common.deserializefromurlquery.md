<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@jscrpt/common](./common.md) &gt; [deserializeFromUrlQuery](./common.deserializefromurlquery.md)

## deserializeFromUrlQuery() function

Deserialize value from url query string into object

<b>Signature:</b>

```typescript
export declare function deserializeFromUrlQuery<TObj>(queryParamValue: string, reviver?: (this: any, key: string, value: any) => any): TObj;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  queryParamValue | string | Query param string value |
|  reviver | (this: any, key: string, value: any) =&gt; any | Function that can be used for correctly deserializing value |

<b>Returns:</b>

TObj

