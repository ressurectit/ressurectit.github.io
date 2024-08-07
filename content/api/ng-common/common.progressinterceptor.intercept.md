<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md) &gt; [ProgressInterceptor](./common.progressinterceptor.md) &gt; [intercept](./common.progressinterceptor.intercept.md)

## ProgressInterceptor.intercept() method

Intercepts http request

<b>Signature:</b>

```typescript
intercept(req: HttpRequest<any> & AdditionalInfo<LocalProgressIndicatorName & IgnoredInterceptorId>, next: HttpHandler): Observable<HttpEvent<any>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  req | HttpRequest&lt;any&gt; &amp; [AdditionalInfo](./common.additionalinfo.md)<!-- -->&lt;[LocalProgressIndicatorName](./common.localprogressindicatorname.md) &amp; [IgnoredInterceptorId](./common.ignoredinterceptorid.md)<!-- -->&gt; | Request to be intercepted |
|  next | HttpHandler | Next middleware that can be called for next processing |

<b>Returns:</b>

Observable&lt;HttpEvent&lt;any&gt;&gt;

