# Basic asynchronous data

Basic simple usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service and simple columns.

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
        - column definition is *template* with `id` value (must be set to unique value if metadata selector should work)
            - it contains header and content cell templates
                - *content cell template* has template context containing `datum` which are row data

@SAMPLE#basic-grid&grid/BasicComponent@