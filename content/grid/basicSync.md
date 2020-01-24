# Basic synchronous data

Basic simple usage of *Grid* with data loaded synchronously. That means all data are provided to grid at once and grid will handle paging and ordering in *javascript*, on browser side. Data can be provided at initialization of grid, or later using extension method (see [Accessing from code](/grid/accessingFromCode)).

- `GridOptions` initialized with
    - `SyncDataLoaderComponent` with data provided from *DI*
        - custom ordering method specified, not required
    - default `BasicPagingComponent` initialized with intial items per page and available items per page, which will be offered to user
- html `<ng-grid>` is top level element
    - it contains `MetadataGatherer` (default `BasicTableMetadataGathererComponent`)
        - columns are displaying properties of each row objects and are defined inside `MetadataGatherer`
            - name of property that is displayed is provided by `name` attribute
            - `id` attribute is used for identification of column, its good to set it to unique string, used for column selection
            - `title` attribute contains text that is displayed in header of each column

[Live sample](/SAMPLES_URL/gridSamples/sync)