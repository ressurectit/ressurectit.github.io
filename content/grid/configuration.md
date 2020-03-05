## Configuration

Grid and its plugins allows configuration. There are several ways of providing configuration. That means you can provide configuration options using *Angular DI providers*. You can provide options on `'root'` level, or for requested *lazy* `NgModules`, or on `Component` level. You can also override them as any other *Angular providers*. This allows you to create *customized* grid for whole application in one place and possibility to override this in specific cases. Or you can simple provide *options* directly for instance of *Grid*.

Each plugin has its own options. You can provide type of *plugin* or *options* using *Angular DI providers*, or you can provide whole `GridOptions` as object. All options provided anyway are merged, that means you can provide only *part* of options and it is merged.

Order of merging options is following (from lowest priority):
 - default options and *plugin* types
 - *Angular DI* provided `GridOptions`
 - *Angular DI* provided *plugin* types and *plugin* options
 - localy provided *options* directly to grid instance using `Input` or extension method for setting *options*

Options provided to `Input` are used only as a object used for merging containing *options* that are used for overriding current options. Since *Grid* is set to `ChangeDetectionStrategy.OnPush`, you have to create new `Object` with only *options* that you want to use as a *patch*. Changing values of existing *options* has no effect.

@SAMPLE#configuration-grid&grid/ConfigurationComponent@