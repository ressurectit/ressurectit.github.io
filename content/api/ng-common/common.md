<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md)

## common package

## Classes

|  Class | Description |
|  --- | --- |
|  [CommonModule](./common.commonmodule.md) | Module for common components, pipes and directives |
|  [CookiePermanentStorageService](./common.cookiepermanentstorageservice.md) | Implementation of permanent storage using cookies |
|  [CookieService](./common.cookieservice.md) | Class that is used as wrapper for working with cookies |
|  [DebugDataComponent](./common.debugdatacomponent.md) | Component used for displaying debug data |
|  [DebugDataEnabledService](./common.debugdataenabledservice.md) | Service used for handling enabled state for debug data component |
|  [DebugDataModule](./common.debugdatamodule.md) | Module that contains debug data component |
|  [GlobalizationService](./common.globalizationservice.md) | Globalization service for handling globalization changes |
|  [IgnoredInterceptorsService](./common.ignoredinterceptorsservice.md) | Service used for disabling specific http client interceptor for one call, if you add interceptor you want to disable before call it will be disabled |
|  [IsNaNPipe](./common.isnanpipe.md) | Returns true if object is NaN |
|  [IsPresentPipe](./common.ispresentpipe.md) | Returns true if object is different from null or undefined |
|  [LocalizePipe](./common.localizepipe.md) | Localize strings using 'StringLocalization' |
|  [NgComponentOutletEx](./common.ngcomponentoutletex.md) | Instantiates a single Component type and inserts its Host View into current View. |
|  [NoStringLocalizationService](./common.nostringlocalizationservice.md) | Default implementation of StringLocalization, which uses 'key' as localization text |
|  [ɵa](./common._a.md) | Directive that is used for displaying progress indicator as overlay |
|  [ProgressIndicatorComponent](./common.progressindicatorcomponent.md) | Component that is used for displaying global progress indicator |
|  [ProgressIndicatorModule](./common.progressindicatormodule.md) | Module for progress indicator |
|  [ProgressIndicatorOptions](./common.progressindicatoroptions.md) | Configuration object that is used by ProgressIndicatorService, overriding its properties allows you to customize configuration |
|  [ProgressIndicatorService](./common.progressindicatorservice.md) | Service that is used for displaying and hiding progress indicator |
|  [ProgressInterceptor](./common.progressinterceptor.md) | ProgressInterceptor used for intercepting http requests and displaying progress indicatior |
|  [StatusCodeService](./common.statuscodeservice.md) | Service used for transfering http status code for response |
|  [UrlEncodePipe](./common.urlencodepipe.md) | Pipe that encodes data for url |

## Functions

|  Function | Description |
|  --- | --- |
|  [extractAppStableResolve(appStablePromise)](./common.extractappstableresolve.md) | Method used for extraction of resolve method for promise |
|  [HmrData()](./common.hmrdata.md) | Indicates that property value is stored during webpack HMR |
|  [HmrServiceData()](./common.hmrservicedata.md) | Indicates that property value of service is stored during webpack HMR |
|  [HmrServiceDataConstructor()](./common.hmrservicedataconstructor.md) | Indicates that service class has properties values stored during webpack HMR |
|  [runWhenModuleStable(moduleRefPromise, callback, angularProfiler)](./common.runwhenmodulestable.md) | Runs callback function when angular module is bootstrapped and stable |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [HttpRequestIgnoredInterceptorId](./common.httprequestignoredinterceptorid.md) | Http request with request id for IgnoredInterceptorsService |
|  [IgnoredInterceptorId](./common.ignoredinterceptorid.md) | Contains id of request, used for IgnoredInterceptorsService |
|  [Logger](./common.logger.md) | Interface for general logger |
|  [PermanentStorage](./common.permanentstorage.md) | Provides api for implementing permanent storage |
|  [StringLocalization](./common.stringlocalization.md) | Provides api to localize strings |

## Variables

|  Variable | Description |
|  --- | --- |
|  [APP\_STABLE](./common.app_stable.md) | Injection token used for obtaining promise that is resolved when application is first time stable |
|  [LOGGER](./common.logger.md) | Token used for injecting Logger implementation |
|  [PERMANENT\_STORAGE](./common.permanent_storage.md) | Token used for injecting permanent storage |
|  [PROGRESS\_INTERCEPTOR\_PROVIDER](./common.progress_interceptor_provider.md) | Progress interceptor provider |
|  [SERVER\_AUTH\_HEADER](./common.server_auth_header.md) | Token is used to transfer server authentication header |
|  [SERVER\_BASE\_URL](./common.server_base_url.md) | Base url used during SSR when using HTTP (example: http://localhost:8888/) |
|  [SERVER\_COOKIE\_HEADER](./common.server_cookie_header.md) | Token is used to transfer server cookie header |
|  [STRING\_LOCALIZATION](./common.string_localization.md) | Token used for injecting StringLocalization service implementation |

