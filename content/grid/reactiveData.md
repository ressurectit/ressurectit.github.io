# Reactive data

Basic simple usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service using *reactive data loader* and simple columns.

- required module `MatrixGridModule` from `@anglr/grid`
- `GridOptions` initialized with
    - *data loader type* set to `ReactiveDataLoaderComponent` with `data` for loading data, runs in reactive context
        - `data` gets plugin instances
- html `<div>` is top level element, can be any element
    - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
    - on `MatrixGridComponent` you can set `gridOptions`
    - it contains templates for *columns*
        - column definition is *template* with `id` (set by `matrixGridColumn` assignment) value (must be set to unique value if metadata selector should work)
            - it contains header and content cell templates
                - *content cell template* has template context containing `datum` which are row data

@SAMPLE#reactive-data-grid&grid/ReactiveDataComponent@