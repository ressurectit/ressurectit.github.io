# Template metadata

Basic simple usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service and simple columns, example shows all possible template metadata that you can set and also some of context data.

- required module `MatrixGridModule` from `@anglr/grid`
- `GridOptions` initialized with
    - default `AsyncDataLoaderComponent` with `dataCallback` for loading data asynchronously from rest
        - callback gets page and items per page which should be obtained
        - callback gets column that will be used for ordering or null if default ordering is set
    - default `BasicPagingComponent` initialized with intial items per page and available items per page, which will be offered to user
- html `<div>` is top level element, can be any element
    - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
    - on `MatrixGridComponent` you can set `gridOptions`
    - it contains templates for *columns*
        - column definition is *template* with `id` (set by `matrixGridColumn` assignment) value (must be set to unique value if metadata selector should work)
            - you can set also `title` for each column, title is displayed during metadata selection
            - you can set also `width` which can be any valid css value for *css grid column* (`1fr`, `20px`, ...)
            - you can set also `visible` attribute which sets default visibility of column
            - it contains header and content cell templates
                - *content cell template* has template context containing `datum` which are row data, `rowIndex` which is index of row in whole dataset, `index` which is index of row on current page, `startingIndex` which is index of row on current page in whole dataset, there are also other context properties available, see documentation for info

@SAMPLE#template-metadata-grid&grid/TemplateMetadataComponent@