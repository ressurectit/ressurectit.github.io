<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/authentication](./authentication.md) &gt; [AuthenticationService](./authentication.authenticationservice.md) &gt; [getUserIdentity](./authentication.authenticationservice.getuseridentity.md)

## AuthenticationService.getUserIdentity() method

Gets user identity

<b>Signature:</b>

```typescript
getUserIdentity(refresh?: boolean): Promise<UserIdentity<TUserInfo>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  refresh | <code>boolean</code> | Indication that server get user identity should be called, otherwise cached response will be used |

<b>Returns:</b>

`Promise<UserIdentity<TUserInfo>>`

Promise
