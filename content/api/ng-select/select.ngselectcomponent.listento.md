<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/select](./select.md) &gt; [NgSelectComponent](./select.ngselectcomponent.md) &gt; [listenTo](./select.ngselectcomponent.listento.md)

## NgSelectComponent.listenTo() method

Subscribes for event

<b>Signature:</b>

```typescript
listenTo<TParam = void>(eventName: keyof PluginBusEvents, handler: (data: TParam) => void): Subscription;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  eventName | keyof [PluginBusEvents](./select.pluginbusevents.md) | Name of event that should be listened to |
|  handler | (data: TParam) =&gt; void | Function used for handling event |

<b>Returns:</b>

Subscription

