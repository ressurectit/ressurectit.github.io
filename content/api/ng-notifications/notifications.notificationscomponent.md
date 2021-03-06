<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/notifications](./notifications.md) &gt; [NotificationsComponent](./notifications.notificationscomponent.md)

## NotificationsComponent class

Notifications component for local messages

<b>Signature:</b>

```typescript
export declare class NotificationsComponent implements OnDestroy 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(service, \_changeDetector, platformId, options)](./notifications.notificationscomponent._constructor_.md) |  | Constructs a new instance of the <code>NotificationsComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_clearingSubscription](./notifications.notificationscomponent._clearingsubscription.md) |  | <code>Subscription &#124; null</code> | Subscription for clearing event |
|  [\_notifyingSubscription](./notifications.notificationscomponent._notifyingsubscription.md) |  | <code>Subscription &#124; null</code> | Subscription for notifying event |
|  [\_options](./notifications.notificationscomponent._options.md) |  | <code>NotificationsOptions&lt;any, NotificationMessageOptions&lt;any&gt;&gt;</code> | Represents notification options instance |
|  [\_timeouts](./notifications.notificationscomponent._timeouts.md) |  | <code>{</code><br/><code>        [index: number]: any;</code><br/><code>    }</code> | Array of active timeouts |
|  [options](./notifications.notificationscomponent.options.md) |  | <code>NotificationsOptions&lt;any, NotificationMessageOptions&lt;any&gt;&gt;</code> | Options used for notification message |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [addItem(item)](./notifications.notificationscomponent.additem.md) |  | Adds notification item to list |
|  [ngOnDestroy()](./notifications.notificationscomponent.ngondestroy.md) |  | Called when component is destroyed |
|  [removeItem(item)](./notifications.notificationscomponent.removeitem.md) |  | Removes notification item from list |

