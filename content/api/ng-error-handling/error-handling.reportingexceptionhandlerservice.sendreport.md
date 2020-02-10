<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/error-handling](./error-handling.md) &gt; [ReportingExceptionHandlerService](./error-handling.reportingexceptionhandlerservice.md) &gt; [sendReport](./error-handling.reportingexceptionhandlerservice.sendreport.md)

## ReportingExceptionHandlerService.sendReport() method

Sends report to server for loging purposes

<b>Signature:</b>

```typescript
sendReport(_exceptionMessage: string, _exceptionStackTrace: string, _pageHtml: string, _pageScreenShotBase64: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  \_exceptionMessage | <code>string</code> | Message of occured exception |
|  \_exceptionStackTrace | <code>string</code> | Stack trace to occured exception |
|  \_pageHtml | <code>string</code> | Html of captured page state in time of exception |
|  \_pageScreenShotBase64 | <code>string</code> | Screenshot of captured page in time of exception as of base64 string |

<b>Returns:</b>

`void`
