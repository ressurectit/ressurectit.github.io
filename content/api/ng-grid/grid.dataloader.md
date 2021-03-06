<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/grid](./grid.md) &gt; [DataLoader](./grid.dataloader.md)

## DataLoader interface

Data loader plugin interface

<b>Signature:</b>

```typescript
export interface DataLoader<TResult = any> extends GridPlugin 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [result](./grid.dataloader.result.md) | <code>TResult</code> | Current result of data loader |
|  [resultChange](./grid.dataloader.resultchange.md) | <code>EventEmitter&lt;void&gt;</code> | Indication that data has changed |
|  [state](./grid.dataloader.state.md) | <code>DataLoaderState</code> | Current state of data loader |
|  [stateChange](./grid.dataloader.statechange.md) | <code>EventEmitter&lt;void&gt;</code> | Indication that data loader state has changed |

## Methods

|  Method | Description |
|  --- | --- |
|  [loadData(force)](./grid.dataloader.loaddata.md) | Loads data from 'source' |

