<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md) &gt; [CookieService](./common.cookieservice.md) &gt; [setCookie](./common.cookieservice.setcookie.md)

## CookieService.setCookie() method

Save the Cookie

<b>Signature:</b>

```typescript
setCookie(name: string, value: any, expires?: number, path?: string, domain?: string, skipSerialization?: boolean): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string | Cookie's identification |
|  value | any | Cookie's value |
|  expires | number | Cookie's expiration date in days from now. If it's undefined the cookie is a session Cookie |
|  path | string | Path relative to the domain where the cookie should be avaiable. Default / |
|  domain | string | Domain where the cookie should be avaiable. Default current domain |
|  skipSerialization | boolean | Indication whether skip serialization to json string |

<b>Returns:</b>

void

