<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/grid](./grid.md) &gt; [PreviousNextPagingComponent](./grid.previousnextpagingcomponent.md)

## PreviousNextPagingComponent class

Component used for rendering paging with next and previous buttons

<b>Signature:</b>

```typescript
export declare class PreviousNextPagingComponent extends PagingAbstractComponent<CssClassesPreviousNextPaging, PreviousNextPagingOptions> implements PreviousNextPaging 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(pluginElement, changeDetector, gridPlugins, options)](./grid.previousnextpagingcomponent._constructor_.md) |  | Constructs a new instance of the <code>PreviousNextPagingComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_itemsPerPage](./grid.previousnextpagingcomponent._itemsperpage.md) |  | <code>number</code> | Number of items currently used for paging |
|  [\_page](./grid.previousnextpagingcomponent._page.md) |  | <code>number</code> | Index of currently selected page |
|  [\_paginator](./grid.previousnextpagingcomponent._paginator.md) |  | <code>Paginator</code> | Paginator used for getting page numbers |
|  [\_totalCount](./grid.previousnextpagingcomponent._totalcount.md) |  | <code>number</code> | Number of all items that are paged with current filter criteria |
|  [firstItemIndex](./grid.previousnextpagingcomponent.firstitemindex.md) |  | <code>number</code> | Zero based index of first displayed item on page |
|  [initialized](./grid.previousnextpagingcomponent.initialized.md) |  | <code>boolean</code> | Indication whether plugin is already initialized |
|  [itemsPerPage](./grid.previousnextpagingcomponent.itemsperpage.md) |  | <code>number</code> | Gets or sets number of items currently used for paging |
|  [page](./grid.previousnextpagingcomponent.page.md) |  | <code>number</code> | Gets or sets index of currently selected page |
|  [totalCount](./grid.previousnextpagingcomponent.totalcount.md) |  | <code>number</code> | Gets or sets number of all items that are paged with current filter criteria |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [initialize()](./grid.previousnextpagingcomponent.initialize.md) |  | Method that initialize paging component, this method can be used for initialization if paging used dynamicaly |
|  [optionsSet()](./grid.previousnextpagingcomponent.optionsset.md) |  | Method called when options are set, allowing to do something after that when overriden |
|  [renderItemsPerPageText(value)](./grid.previousnextpagingcomponent.renderitemsperpagetext.md) |  | Converts number to text that is going to be rendered for ItemsPerPage |

