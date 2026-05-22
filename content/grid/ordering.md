# Ordering

Basic simple usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service and simple columns and enabled ordering on specified columns.

- required module `MatrixGridModule` from `@anglr/grid`
- required directive `OrderableDirective` from `@anglr/grid`
- `GridOptions` initialized with
    - default `AsyncDataLoaderComponent` with `dataCallback` for loading data asynchronously from rest
        - callback gets page and items per page which should be obtained
        - callback gets column that will be used for ordering or null if default ordering is set
- html `<div>` is top level element, can be any element
    - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
    - on `MatrixGridComponent` you can set `gridOptions`
    - it contains templates for *columns*
        - column definition is *template* with `id` (set by `matrixGridColumn` assignment) value (must be set to unique value if metadata selector should work)
            - it contains header and content cell templates
                - *header cell template* has `orderable` attribute (`OrderableDirective` from `@anglr/grid`) which enables ordering for column and it uses `matrixGridColumn` `id` as key for ordering
                - *content cell template* has template context containing `datum` which are row data

@SAMPLE#ordering-grid&grid/OrderingComponent@