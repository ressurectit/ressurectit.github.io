<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md) &gt; [IgnoredInterceptorsService](./common.ignoredinterceptorsservice.md)

## IgnoredInterceptorsService class

Service used for disabling specific http client interceptor for one call, if you add interceptor you want to disable before call it will be disabled

<b>Signature:</b>

```typescript
export declare class IgnoredInterceptorsService 
```

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [addInterceptor(interceptorType, requestId)](./common.ignoredinterceptorsservice.addinterceptor.md) |  | Adds interceptor type that should be ignored for specified url |
|  [clear()](./common.ignoredinterceptorsservice.clear.md) |  | Clears all ignored interceptors from service |
|  [isIgnored(interceptorType, requestId)](./common.ignoredinterceptorsservice.isignored.md) |  | Checks specified interceptor whether is ingored |
