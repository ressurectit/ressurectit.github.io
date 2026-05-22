# Basic synchronous data

Basic simple usage of **new Matrix** *Grid* with data loaded synchronously. That means all data are provided to grid at once and grid will handle paging and ordering in *javascript*, on browser side. Data can be provided at initialization of grid, or later using extension method (see [Accessing from code](/grid/accessingFromCode)).

- required module `MatrixGridModule` from `@anglr/grid`
- `GridOptions` initialized with
    - `SyncDataLoaderComponent` with data provided from *DI*
        - custom ordering method specified, not required
    - default `BasicPagingComponent` initialized with intial items per page and available items per page, which will be offered to user
- html `<div>` is top level element, can be any element
    - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
    - on `MatrixGridComponent` you can set `gridOptions`
    - it contains templates for *columns*
        - column definition is *template* with `id` (set by `matrixGridColumn` assignment) value (must be set to unique value if metadata selector should work)
            - it contains header and content cell templates
                - *content cell template* has template context containing `datum` which are row data
- alternatively you can pass all data to grid using `data` attribute (`GridDataDirective` directive from `@anglr/grid`) see second grid in sample

@SAMPLE#basic-sync-grid&grid/BasicSyncComponent@