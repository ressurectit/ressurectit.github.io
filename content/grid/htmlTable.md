# Html table

Basic simple usage of **new Matrix** *Grid* with data loaded asynchronously from *REST* service and simple columns. Changed default rendering from *Css Grid* to *Html Table*.

- required module `MatrixGridModule` from `@anglr/grid`
- required directive `UseTableDirective` from `@anglr/grid`
- `GridOptions` initialized with
    - default `AsyncDataLoaderComponent` with `dataCallback` for loading data asynchronously from rest
        - callback gets page and items per page which should be obtained
        - callback gets column that will be used for ordering or null if default ordering is set
- html `<table>` is top level element
    - top level element contains `ngGrid` *attribute*, which changes element to `MatrixGridComponent`, which configures `ContentRenderer` to `MatrixContentRenderer` and also uses custom `MetadataGatherer`
        - also `useTable` attribute is set which activates directive `UseTableDirective` which changes default rendering to *html table* and changes css classes
    - on `MatrixGridComponent` you can set `gridOptions`
    - it contains templates for *columns*
        - column definition is *template* with `id` (set by `matrixGridColumn` assignment) value (must be set to unique value if metadata selector should work)
            - it contains header and content cell templates
                - *content cell template* has template context containing `datum` which are row data
            - column definition contains `<th>` and `<td>` as it should for *html table*

@SAMPLE#html-table-grid&grid/HtmlTableComponent@