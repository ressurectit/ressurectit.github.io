# Metadata selection

Basic simple usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service, simple columns and enabled metadata selection.

- recommended `MetadataSelector` that should be used is `DialogMetadataSelectorComponent` from `@anglr/grid/material`, provide it globaly
- required module `MatrixGridModule` from `@anglr/grid`
- `GridOptions` initialized with
    - default `AsyncDataLoaderComponent` with `dataCallback` for loading data asynchronously from rest
        - callback gets page and items per page which should be obtained
        - callback gets column that will be used for ordering or null if default ordering is set
    - if you want to have persistent changes in metadata selection you have to set `storageName` property directly in `GridOptiosn` or using `selectionStore` (`SelectionStoreDirective` from `@anglr/grid/material`)
- html `<div>` is top level element, can be any element
    - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
    - on `MatrixGridComponent` you can set `gridOptions`
    - it contains templates for *columns*
        - column definition is *template* with `id` (set by `matrixGridColumn` assignment) value (must be set to unique value if metadata selector should work)
            - it contains header and content cell templates
                - *content cell template* has template context containing `datum` which are row data
- html button that opens metadata selection (or you can enable default metadata selection in `GridOptions`, see comment in component)
    - button has `showMetadataSelectorFor` directive (`ShowMetadataSelectorForDirective` from `@anglr/grid`) attached to it and takes instance of grid for which should enable metadata selection

@SAMPLE#metadata-selection-grid&grid/MetadataSelectionComponent@