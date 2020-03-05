# Basic metadata (all)

Basic simple usage of *Grid* with all metadata options specified.

- required module `GridModule` from `@anglr/grid`
- html `<ng-grid>` is top level element
    - `<basic-table-column>` properties
        - name of property that is displayed is provided by `name` attribute, name is not required if custom template is provided, altough it is used as column *name* for ordering
        - `id` attribute is used for identification of column, its good to set it to unique string, used for column selection
        - `title` attribute contains text that is displayed in header of each column
        - `ordering` attribute indicates whether this column should be orderable (defaults to `false`)
        - `width` attribute specifies width of column, include units
        - `headerTooltip` attribute specifies tooltip that is displayed above column header
        - `visible` attribute indicates whether column should be visible in default display (defaults to `true`)
        - `titleVisible` attribute indicates whether to display title text in column header (defaults to `true`)
        - `headerClass` attribute contains css classes that will be added to column header element
        - `cellClass` attribute contains css classes that will be added to each column body cell element
        - **templating**
            - cell content templating `<ng-template>` with *id* `bodyTemplate` with template context
                - `$implicit` - Data of current row
                - `column` - Object of column metadata itself
                - `index` - Index of rendered row in current page
                - `startingIndex` - Starting index of currently displayed items
                - `rowIndex` - Row index of displayed item
            - cell header templating `<ng-template>` with *id* `headerTemplate` with template context
                - `column` - Object of column metadata itself

@SAMPLE#basic-metadata-grid&grid/BasicMetadataComponent@