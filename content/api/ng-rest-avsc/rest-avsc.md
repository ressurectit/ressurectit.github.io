<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/rest-avsc](./rest-avsc.md)

## rest-avsc package

## Classes

|  Class | Description |
|  --- | --- |
|  [AvroAdapterInterceptor](./rest-avsc.avroadapterinterceptor.md) | Interceptor that will enable usage of AVRO for request and response data streams (binary format) |
|  [AvroAdapterInterceptorOptions](./rest-avsc.avroadapterinterceptoroptions.md) | Options for AvroAdapterInterceptor |

## Functions

|  Function | Description |
|  --- | --- |
|  [AvroRequest(namespace, typeName)](./rest-avsc.avrorequest.md) | Enables AVRO encoding for request object sent in body |
|  [AvroResponse(namespace, typeName)](./rest-avsc.avroresponse.md) | Enables AVRO encoding for response object received in body |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [AvroAdapterSchemaProvider](./rest-avsc.avroadapterschemaprovider.md) | Service used for obtaining AVRO schema types |
|  [AvroRequestObj](./rest-avsc.avrorequestobj.md) | Defines AVRO request definition |
|  [AvroRequestType](./rest-avsc.avrorequesttype.md) | Contains name of AVRO type for request |
|  [AvroResponseObj](./rest-avsc.avroresponseobj.md) | Defines AVRO response definition |
|  [AvroResponseType](./rest-avsc.avroresponsetype.md) | Contains name of AVRO type for response |

## Variables

|  Variable | Description |
|  --- | --- |
|  [AVRO\_ADAPTER\_INTERCEPTOR\_PROVIDER](./rest-avsc.avro_adapter_interceptor_provider.md) | Provider for proper use of AvroAdapterInterceptor, use this provider to inject this interceptor |
|  [AVRO\_ADAPTER\_SCHEMA\_PROVIDER](./rest-avsc.avro_adapter_schema_provider.md) | Injection token used for providing AvroAdapterSchemaProvider |

