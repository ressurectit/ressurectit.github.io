<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select](./select.md) &gt; [PluginDescription](./select.plugindescription.md)

## PluginDescription interface

Defines interface, that describes minimal set of parameters for specifying plugin for NgSelect

<b>Signature:</b>

```typescript
export interface PluginDescription<PluginType = any> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [instanceCallback](./select.plugindescription.instancecallback.md) | (instance: [NgSelectPlugin](./select.ngselectplugin.md) \| null) =&gt; void | Optional callback used for obtaining dynamic instance of plugin (allows direct communication with plugin) |
|  [options](./select.plugindescription.options.md) | [PluginOptions](./select.pluginoptions.md) | Options that will be passed to dynamically instantiated plugin |
|  [type](./select.plugindescription.type.md) | Type&lt;PluginType&gt; | Type of plugin that will be dynamically instantiated |

