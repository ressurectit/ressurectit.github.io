# Legacy basic asynchronous data

Basic simple usage of **legacy** *Grid* with data loaded asynchronously from *REST* service and simple columns.

- required module `GridModule` from `@anglr/grid`
- `GridOptions` initialized with
    - default `AsyncDataLoaderComponent` with `dataCallback` for loading data asynchronously from rest
        - callback gets page and items per page which should be obtained
        - callback gets column that will be used for ordering or null if default ordering is set
    - default `BasicPagingComponent` initialized with intial items per page and available items per page, which will be offered to user
- html `<ng-grid>` is top level element
    - it contains `MetadataGatherer` (default `BasicTableMetadataGathererComponent`)
        - columns are displaying properties of each row objects and are defined inside `MetadataGatherer`
            - name of property that is displayed is provided by `name` attribute
            - `id` attribute is used for identification of column, its good to set it to unique string, used for column selection
            - `title` attribute contains text that is displayed in header of each column

@SAMPLE#legacy-basic-grid&grid/LegacyBasicComponent@