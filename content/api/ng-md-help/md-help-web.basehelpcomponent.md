<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/md-help-web](./md-help-web.md) &gt; [BaseHelpComponent](./md-help-web.basehelpcomponent.md)

## BaseHelpComponent class

Base component for displaying help pages

<b>Signature:</b>

```typescript
export declare abstract class BaseHelpComponent implements AfterViewInit 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_route, \_helpSvc, \_router, \_notifications, \_document, \_platformId)](./md-help-web.basehelpcomponent._constructor_.md) |  | Constructs a new instance of the <code>BaseHelpComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_assetsPathPrefix](./md-help-web.basehelpcomponent._assetspathprefix.md) |  | <code>string</code> | Path for static assets |
|  [\_baseUrl](./md-help-web.basehelpcomponent._baseurl.md) |  | <code>string</code> | Base url for md |
|  [\_charMap](./md-help-web.basehelpcomponent._charmap.md) |  | <code>Object</code> | Charmap used for normalization |
|  [\_document](./md-help-web.basehelpcomponent._document.md) |  | <code>HTMLDocument</code> |  |
|  [\_helpSvc](./md-help-web.basehelpcomponent._helpsvc.md) |  | <code>HelpService</code> |  |
|  [\_isBrowser](./md-help-web.basehelpcomponent._isbrowser.md) |  | <code>boolean</code> | Indication whether is code running in browser |
|  [\_notifications](./md-help-web.basehelpcomponent._notifications.md) |  | <code>GlobalNotificationsService</code> |  |
|  [\_platformId](./md-help-web.basehelpcomponent._platformid.md) |  | <code>Object</code> |  |
|  [\_route](./md-help-web.basehelpcomponent._route.md) |  | <code>ActivatedRoute</code> |  |
|  [\_router](./md-help-web.basehelpcomponent._router.md) |  | <code>Router</code> |  |
|  [content](./md-help-web.basehelpcomponent.content.md) |  | <code>ElementRef</code> | Div that is used for displaying content |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_filterHtml(html)](./md-help-web.basehelpcomponent._filterhtml.md) |  | Filters out parts of html that should not be rendered |
|  [\_filterMd(md)](./md-help-web.basehelpcomponent._filtermd.md) |  | Filters out parts of markdown that should not be processed |
|  [\_renderContent(url)](./md-help-web.basehelpcomponent._rendercontent.md) |  | Renders content |
|  [\_scrollIntoView()](./md-help-web.basehelpcomponent._scrollintoview.md) |  | Scrolls into view fragment element |
|  [\_showNotFound()](./md-help-web.basehelpcomponent._shownotfound.md) |  | Redirects to not found page |
|  [ngAfterViewInit()](./md-help-web.basehelpcomponent.ngafterviewinit.md) |  | Called when view was initialized |
|  [processClick(target)](./md-help-web.basehelpcomponent.processclick.md) |  | Process click for anchors |

