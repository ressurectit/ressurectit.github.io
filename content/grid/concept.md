# Basic concept

Basic features of grid are:
 - *plugins* split grid into parts that can be changed and replaced
 - *metadata* are defined and gathered from *html* using *Metadata Gatherer*, which can be replaced
 - *options* are defined in code, can be provided globaly using *DI*, or use advantages of *angular hierarchical DI*
 - *grid* does not contains methods for working with *grid* and *plugins* (only basic methods), but complex methods are defined as *extensions*
 - *options* and *plugins* can be changed anytime
 - *grid* itself and *plugins* have defined order of initialization methods: `initOptions`, then `initialize`
 - each *plugin* you can be accessed from any other *plugin*, obtain plugin`s *html element*, its *options*, possible to invalidate its visuals by explicit running of *change detection*
 - plugins communication is *event* based, that means no plugin explicitly sets anything on different plugin, but it just triggers event that something on itself was changed and other plugins (which wants to) listens to these changes
 - each part of *grid* (components, plugins ... anything) is defined as `interface`, this should be used for using *grid* from code, because each `interface` contains public API

## Grid options

In grid options each plugin can be defined as `Type<>`, which will instantiate plugin inside of grid. Or you can possible provide `instance` of plugin which allows you to create plugin outside of grid. For example, if you want to have paging on very specific location on your page, not directly under grid, you can do it quite easily. For each plugin options can be provided. Each type, options have strongly typed `interface` for easier use.

## Plugins

Grid consists of plugins that handles different parts of grid functionality. There are visual and non visual plugins. Each plugin has to implement `GridPlugin`. In addition to this, each plugin adds specific functionality based on purpose of plugin. Communication between plugins is via `interface`s, so plugin can be changed without affecting rest of grid. Sometimes there are plugins that have to be set together, because they only work with specific type of other plugin.

### Content Renderer

Content renderer plugin is used for displaying data. Defaults to `<table>` renderer, which means that if you dont change type of content renderer grid will be rendered as table. This content renderer consists of 2 *visual subplugins*, that means you can separately change rendering of `<thead>` and `<tbody>` without affecting other one. This does not have to be this way, if you use completely custom non-table like layout.

### Data Loader

Data loader plugin is used for obtaining data for grid. This plugin reacts to changes of page, or ordering and retrieves data for grid.

### Metadata Selector

Metadata selector plugin reads metadata from *Metadata Gatherer* and allows selection of metadata that are used for displaying data.

### No Data Renderer

No data renderer plugin can be used for displaying *something* that you want to display, if no data are available from *Data Loader*.

### Paging

Paging plugin is used for changing of displayed page and items per page from whole set of data. Allows you to split your whole set of data in smaller parts.

### Paging Initializer

Paging initializer plugin can be used inside of *Paging* and its purpose is to get *default* values of page and items per page during initialization of grid. For example loading items per page from *cookies*, or page from *query string*.

### Row Selector

Row selector plugin can be used for handling row selection. This means, that this plugin holds information about selected rows and gives you ability to retrieve this information, or change selection.

## Metadata Gatherer

Metadata gatherer is used for obtaining metadata for grid. Defaults to metadata gatherer which is used for table like layout, that means gathering definitions of columns. But can be replaced with any other metadata type. This usually means that also some plugins has to be changed, since they are working with table like metadata.