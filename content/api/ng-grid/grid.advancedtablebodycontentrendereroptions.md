<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/grid](./grid.md) &gt; [AdvancedTableBodyContentRendererOptions](./grid.advancedtablebodycontentrendereroptions.md)

## AdvancedTableBodyContentRendererOptions interface

Options for advanced table body content renderer

<b>Signature:</b>

```typescript
export interface AdvancedTableBodyContentRendererOptions<TData> extends TableBodyContentRendererOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [rowClick](./grid.advancedtablebodycontentrendereroptions.rowclick.md) | <code>(rowData: TData, index: number) =&gt; void</code> | Callback allows handle click on the row |
|  [rowCssClass](./grid.advancedtablebodycontentrendereroptions.rowcssclass.md) | <code>(rowData: TData) =&gt; string</code> | Callback called for each row with data for row returning css class, that will be applied to row element |
