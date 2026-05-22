# Detail view

Basic simple usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service and simple columns and for each row also detail view which is collapsible.

- required module `MatrixGridModule` from `@anglr/grid`
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
                - *content cell template* has template context containing `datum` which are row data
    - since multiple *content rows* will be rendered, both must be defined
        - first one (`contentRowContainerTemplate`) is default one which renders columns into it
        - second one (`contentRowContainerTemplate`) is detail *row*

@SAMPLE#detail-view-grid&grid/DetailViewComponent@