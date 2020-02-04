<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/rest](./rest.md) &gt; [DisableInterceptor](./rest.disableinterceptor.md)

## DisableInterceptor() function

Disables specified type of http client interceptor for all calls of applied method

<b>Signature:</b>

```typescript
export declare function DisableInterceptor<TType>(interceptorType: Type<TType>): (_target: RESTClient, _propertyKey: string, descriptor: any) => any;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  interceptorType | <code>Type&lt;TType&gt;</code> | Type of interceptor that will be disabled for method to which is this attached |

<b>Returns:</b>

`(_target: RESTClient, _propertyKey: string, descriptor: any) => any`
