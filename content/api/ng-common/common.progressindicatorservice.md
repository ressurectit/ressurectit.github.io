<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md) &gt; [ProgressIndicatorService](./common.progressindicatorservice.md)

## ProgressIndicatorService class

Service that is used for displaying and hiding progress indicator

<b>Signature:</b>

```typescript
export declare class ProgressIndicatorService 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_platformId, config)](./common.progressindicatorservice._constructor_.md) |  | Constructs a new instance of the <code>ProgressIndicatorService</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [config?](./common.progressindicatorservice.config.md) |  | [ProgressIndicatorOptions](./common.progressindicatoroptions.md) | <i>(Optional)</i> |
|  [messages](./common.progressindicatorservice.messages.md) |  | { \[group: string\]: string\[\]; } | Messages for each group |
|  [running](./common.progressindicatorservice.running.md) |  | { \[group: string\]: boolean; } | Indications that progress is running for each group |
|  [stateChange](./common.progressindicatorservice.statechange.md) |  | Observable&lt;string&gt; | Occurs when state of one of progress groups have changed, passing name of group as parameter |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [addMessage(message)](./common.progressindicatorservice.addmessage.md) |  | Adds message to progress indicator group |
|  [addMessage(name, message)](./common.progressindicatorservice.addmessage_1.md) |  | Adds message to progress indicator group |
|  [clearMessages(name)](./common.progressindicatorservice.clearmessages.md) |  | Clears all messages for progress group |
|  [hideProgress()](./common.progressindicatorservice.hideprogress.md) |  | Hides progress indicator |
|  [hideProgress(name)](./common.progressindicatorservice.hideprogress_1.md) |  | Hides progress indicator |
|  [hideProgress(force)](./common.progressindicatorservice.hideprogress_2.md) |  | Hides progress indicator |
|  [hideProgress(name, force)](./common.progressindicatorservice.hideprogress_3.md) |  | Hides progress indicator |
|  [showProgress()](./common.progressindicatorservice.showprogress.md) |  | Displays progress indicator after short delay |
|  [showProgress(name)](./common.progressindicatorservice.showprogress_1.md) |  | Displays progress indicator after short delay |
|  [showProgress(messages)](./common.progressindicatorservice.showprogress_2.md) |  | Displays progress indicator after short delay |
|  [showProgress(name, messages)](./common.progressindicatorservice.showprogress_3.md) |  | Displays progress indicator after short delay |

