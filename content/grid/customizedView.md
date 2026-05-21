# Customized view

Customized usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service and displays data as completely different view.

- required module `MatrixGridModule` from `@anglr/grid`
- `GridOptions` initialized with
    - default `AsyncDataLoaderComponent` with `dataCallback` for loading data asynchronously from rest
        - callback gets page and items per page which should be obtained
        - callback gets column that will be used for ordering or null if default ordering is set
- sample **List view instead of grid view**
    - html `<div>` is top level element, can be any element
        - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
        - on `MatrixGridComponent` you can set `gridOptions`
        - it contains template for *headerContainerTemplate*, which is empty, column headers are not rendered
        - it contains template for *contentRowContainerTemplate*, which is template for each row, now each row does not render columns, but customized div
            - context `datum` holds data for rendered *row*
- sample **Gallery view instead of grid view**
    - html `<div>` is top level element, can be any element
        - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
        - on `MatrixGridComponent` you can set `gridOptions`
        - it contains template for *headerContainerTemplate*, which is empty, column headers are not rendered
        - it contains template for *contentContainerTemplate*, which holds what should be rendered as content of grid
            - context `data` holds all rendered data for current page


@SAMPLE#customized-view-grid&grid/CustomizedViewComponent@