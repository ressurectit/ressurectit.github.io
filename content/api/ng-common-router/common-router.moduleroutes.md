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
|  routedComponents | <code>Type&lt;any&gt;[]</code> | Array of components that will be used for routes extration |
|  options | <code>ModuleRoutesOptions</code> | Optional options for defining routes |

<b>Returns:</b>

`<TFunction extends Function>(target: TFunction) => TFunction`

