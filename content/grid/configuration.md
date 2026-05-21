## Configuration

Grid and its plugins allows configuration. There are several ways of providing configuration. You can provide configuration options using *Angular DI providers* or directly passing options to `gridOptions` property of *Grid*. When using *Angular DI* you use hiearchy of providers. That means you can override provided configuration on closer injector. This allows you to create *customized* grid for whole application in one place and possibility to override this in specific cases. Or you can simply provide *options* directly for instance of *Grid*.

Each plugin has its own options. You can provide type of *plugin* or *options* using *Angular DI providers*, or you can provide whole `GridOptions` as object. All options provided anyway are merged, that means you can provide only *part* of options and it is merged. Merging only happens between *DI provided* and `gridOptions`. 

Order of merging options is following (from lowest priority):
 - default options and *plugin* types
 - *Angular DI* provided `GridOptions`
 - *Angular DI* provided *plugin* types and *plugin* options
 - localy provided *options* directly to grid instance using `Input` or extension method for setting *options*

Options provided to `Input` are used only as a object used for merging containing *options* that are used for overriding current options. Since *Grid* is set to `ChangeDetectionStrategy.OnPush`, you have to create new `Object` with only *options* that you want to use as a *patch*. Changing values of existing *options* has no effect.

@SAMPLE#configuration-grid&grid/ConfigurationComponent@