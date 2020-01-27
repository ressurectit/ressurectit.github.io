# Grouped metadata

Grouped metadata usage of *Grid*.

- html `<ng-grid>` is top level element
    - `<grouped-table-metadata>` used as `MetadataGatherer`
        - `<basic-table-column>` are specified as usual
        - `<table-group>` is used for specifying group of columns
            - `title` displayed for column group
            - `<table-group-column>` are specified inside of `<table-group>`
                - `id` of column that will be inside of group
            - **templating**
                - content of grouped column can be templated with `<ng-template>` without id, with template context
                    - `$implicit` - Object of table group itself
- `GridOptions` initialized with
    - `GroupedTableHeaderContentRendererComponent` as `headerRenderer` *plugin* option for `contentRenderer` *plugin*

Usage of Grid with `<grouped-table-metadata>` which represents GroupedTableMetadataGathererComponent. Allows to define and gather metadata for grouped header columns in table. Rest of metadata for columns is same as basic metadata. For now only one level of grouped header is supported.

- every column must be part of some group
- group columns metadata in groups are paired by id with columns metadata
- to display grouped header you must use custom header content renderer GroupedTableHeaderContentRendererComponent


[Live sample](/SAMPLES_URL/gridSamples/grouped)