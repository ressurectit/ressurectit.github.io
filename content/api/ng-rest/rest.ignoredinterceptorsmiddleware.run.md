<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/rest](./rest.md) &gt; [IgnoredInterceptorsMiddleware](./rest.ignoredinterceptorsmiddleware.md) &gt; [run](./rest.ignoredinterceptorsmiddleware.run.md)

## IgnoredInterceptorsMiddleware.run() method

Runs code that is defined for this rest middleware, in this method you can modify request and response

<b>Signature:</b>

```typescript
run(this: ɵRESTClient & ɵIgnoredInterceptor, id: string, _target: any, _methodName: string, descriptor: RestDisabledInterceptors, _args: any[], request: HttpRequest<any> & AdditionalInfo<IgnoredInterceptorId>, next: (request: HttpRequest<any>) => Observable<any>): Observable<any>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  this | [ɵRESTClient](./rest._restclient.md) &amp; ɵIgnoredInterceptor | Method is bound to RESTClient |
|  id | string | Unique id that identifies request method |
|  \_target | any |  |
|  \_methodName | string |  |
|  descriptor | [RestDisabledInterceptors](./rest.restdisabledinterceptors.md) | Descriptor of method that is being modified |
|  \_args | any\[\] |  |
|  request | HttpRequest&lt;any&gt; &amp; AdditionalInfo&lt;IgnoredInterceptorId&gt; | Http request that you can modify |
|  next | (request: HttpRequest&lt;any&gt;) =&gt; Observable&lt;any&gt; | Used for calling next middleware with modified request |

<b>Returns:</b>

Observable&lt;any&gt;

