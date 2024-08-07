<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common-router](./common-router.md) &gt; [ModuleRoutes](./common-router.moduleroutes.md)

## ModuleRoutes() function

Registers routes for module to which is attached

<b>Signature:</b>

```typescript
export declare function ModuleRoutes(routedComponents: Type<any>[], options?: ModuleRoutesOptions): <TFunction extends Function>(target: TFunction) => TFunction;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  routedComponents | Type&lt;any&gt;\[\] | Array of components that will be used for routes extration |
|  options | [ModuleRoutesOptions](./common-router.moduleroutesoptions.md) | Optional options for defining routes |

<b>Returns:</b>

&lt;TFunction extends Function&gt;(target: TFunction) =&gt; TFunction

