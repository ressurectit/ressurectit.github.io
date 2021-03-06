<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common-material](./common-material.md) &gt; [TitledDialogService](./common-material.titleddialogservice.md) &gt; [open](./common-material.titleddialogservice.open.md)

## TitledDialogService.open() method

Opens a modal dialog containing the given component.

<b>Signature:</b>

```typescript
open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: TitledDialogConfig<D>): MatDialogRef<T, R>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  componentOrTemplateRef | <code>ComponentType&lt;T&gt; &#124; TemplateRef&lt;T&gt;</code> |  |
|  config | <code>TitledDialogConfig&lt;D&gt;</code> |  |

<b>Returns:</b>

`MatDialogRef<T, R>`

Reference to the newly-opened dialog.

