<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/rest-avsc](./rest-avsc.md) &gt; [AvroRequest](./rest-avsc.avrorequest.md)

## AvroRequest() function

Enables AVRO encoding for request object sent in body

<b>Signature:</b>

```typescript
export declare function AvroRequest(namespace: string, typeName: string): (_target: RESTClient, _propertyKey: string, descriptor: AdditionalInfoPropertyDescriptor<AvroRequestType> & RestMethodMiddlewares) => AdditionalInfoPropertyDescriptor<AvroRequestType> & RestMethodMiddlewares;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  namespace | string | Name of namespace in which is type defined |
|  typeName | string | Name of type that should be used |

<b>Returns:</b>

(\_target: RESTClient, \_propertyKey: string, descriptor: AdditionalInfoPropertyDescriptor&lt;[AvroRequestType](./rest-avsc.avrorequesttype.md)<!-- -->&gt; &amp; RestMethodMiddlewares) =&gt; AdditionalInfoPropertyDescriptor&lt;[AvroRequestType](./rest-avsc.avrorequesttype.md)<!-- -->&gt; &amp; RestMethodMiddlewares

