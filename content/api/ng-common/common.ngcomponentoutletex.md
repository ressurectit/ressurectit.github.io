<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md) &gt; [NgComponentOutletEx](./common.ngcomponentoutletex.md)

## NgComponentOutletEx class

Instantiates a single Component type and inserts its Host View into current View.

<b>Signature:</b>

```typescript
export declare class NgComponentOutletEx<TComponent> implements OnChanges, OnDestroy 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_viewContainerRef)](./common.ngcomponentoutletex._constructor_.md) |  | Constructs a new instance of the <code>NgComponentOutletEx</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [component](./common.ngcomponentoutletex.component.md) |  | <code>TComponent &#124; null</code> | Instance of dynamically created component |
|  [ngComponentOutletEx](./common.ngcomponentoutletex.ngcomponentoutletex.md) |  | <code>Type&lt;TComponent&gt;</code> | Type that should be dynamically created into current container |
|  [ngComponentOutletExContent](./common.ngcomponentoutletex.ngcomponentoutletexcontent.md) |  | <code>any[][]</code> | Projectable nodes that can be injected into component |
|  [ngComponentOutletExCreated](./common.ngcomponentoutletex.ngcomponentoutletexcreated.md) |  | <code>EventEmitter&lt;TComponent &#124; null&gt;</code> | Occurs when component is created or destroyed, it can send instance of component, or null |
|  [ngComponentOutletExInjector](./common.ngcomponentoutletex.ngcomponentoutletexinjector.md) |  | <code>Injector</code> | Custom injector that will be used for newly created component |
|  [ngComponentOutletExNgModuleFactory](./common.ngcomponentoutletex.ngcomponentoutletexngmodulefactory.md) |  | <code>NgModuleFactory&lt;any&gt;</code> | Different module factory that is used for creation of new component |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [ngOnChanges(changes)](./common.ngcomponentoutletex.ngonchanges.md) |  |  |
|  [ngOnDestroy()](./common.ngcomponentoutletex.ngondestroy.md) |  |  |
