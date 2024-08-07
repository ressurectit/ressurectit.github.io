<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common](./common.md)

## common package

## Classes

|  Class | Description |
|  --- | --- |
|  [ClickOutsideDirective](./common.clickoutsidedirective.md) | Directive that handles click outside of element |
|  [ClickOutsideModule](./common.clickoutsidemodule.md) | Module for ClickOutside directive |
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
|  [MemoryTemporaryStorageService](./common.memorytemporarystorageservice.md) | Implementation of temporary storage using process memory |
|  [MultiButtonComponent](./common.multibuttoncomponent.md) | Component used for displaying multibutton |
|  [MultiButtonModule](./common.multibuttonmodule.md) | Module containing components for displaying multi button |
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
|  [updateHttpRequestClone()](./common.updatehttprequestclone.md) | Updates HttpRequest.clone() method, adds support for cloning also additionalInfo |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [AdditionalInfo](./common.additionalinfo.md) | Object containing additional info/data |
|  [IgnoredInterceptorId](./common.ignoredinterceptorid.md) | Contains id of request, used for IgnoredInterceptorsService |
|  [LocalProgressIndicatorName](./common.localprogressindicatorname.md) | Contains name of progress indicator group |
|  [Logger](./common.logger.md) | Interface for general logger |
|  [MultiButtonCssClasses](./common.multibuttoncssclasses.md) | Describes multi button css classes |
|  [PermanentStorage](./common.permanentstorage.md) | Provides api for implementing permanent storage |
|  [StringLocalization](./common.stringlocalization.md) | Provides api to localize strings |
|  [TemporaryStorage](./common.temporarystorage.md) | Provides api for implementing temporary storage |

## Variables

|  Variable | Description |
|  --- | --- |
|  [APP\_STABLE](./common.app_stable.md) | Injection token used for obtaining promise that is resolved when application is first time stable |
|  [HTTP\_REQUEST\_AUTH\_HEADER](./common.http_request_auth_header.md) | Token is used to transfer http request authentication header |
|  [HTTP\_REQUEST\_BASE\_URL](./common.http_request_base_url.md) | Base url when using HTTP (example: http://localhost:8888/) |
|  [HTTP\_REQUEST\_COOKIE\_HEADER](./common.http_request_cookie_header.md) | Token is used to transfer http request cookie header |
|  [LOGGER](./common.logger.md) | Token used for injecting Logger implementation |
|  [MULTI\_BUTTON\_CSS\_CLASSES](./common.multi_button_css_classes.md) | Injection token for default css classes for multibutton |
|  [PERMANENT\_STORAGE](./common.permanent_storage.md) | Token used for injecting permanent storage |
|  [PROGRESS\_INTERCEPTOR\_PROVIDER](./common.progress_interceptor_provider.md) | Progress interceptor provider |
|  [STRING\_LOCALIZATION](./common.string_localization.md) | Token used for injecting StringLocalization service implementation |
|  [TEMPORARY\_STORAGE](./common.temporary_storage.md) | Token used for injecting temporary storage |

