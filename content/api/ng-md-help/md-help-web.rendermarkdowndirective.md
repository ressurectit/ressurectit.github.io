<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/md-help-web](./md-help-web.md) &gt; [RenderMarkdownDirective](./md-help-web.rendermarkdowndirective.md)

## RenderMarkdownDirective class

Directive that renders markdown inside

<b>Signature:</b>

```typescript
export declare class RenderMarkdownDirective implements OnChanges 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_helpSvc, \_element, \_router, \_route, \_notifications, \_document, \_platformId)](./md-help-web.rendermarkdowndirective._constructor_.md) |  | Constructs a new instance of the <code>RenderMarkdownDirective</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_document](./md-help-web.rendermarkdowndirective._document.md) |  | <code>HTMLDocument</code> |  |
|  [\_element](./md-help-web.rendermarkdowndirective._element.md) |  | <code>ElementRef&lt;HTMLElement&gt;</code> |  |
|  [\_helpSvc](./md-help-web.rendermarkdowndirective._helpsvc.md) |  | <code>HelpService</code> |  |
|  [\_isBrowser](./md-help-web.rendermarkdowndirective._isbrowser.md) |  | <code>boolean</code> | Indication whether is code running in browser |
|  [\_notifications](./md-help-web.rendermarkdowndirective._notifications.md) |  | <code>GlobalNotificationsService</code> |  |
|  [\_platformId](./md-help-web.rendermarkdowndirective._platformid.md) |  | <code>Object</code> |  |
|  [\_route](./md-help-web.rendermarkdowndirective._route.md) |  | <code>ActivatedRoute</code> |  |
|  [\_router](./md-help-web.rendermarkdowndirective._router.md) |  | <code>Router</code> |  |
|  [assetsPathPrefix](./md-help-web.rendermarkdowndirective.assetspathprefix.md) |  | <code>string</code> | Path for static assets |
|  [baseUrl](./md-help-web.rendermarkdowndirective.baseurl.md) |  | <code>string</code> | Base url for md |
|  [renderMarkdown](./md-help-web.rendermarkdowndirective.rendermarkdown.md) |  | <code>string</code> | Markdown string to be rendered |
|  [source](./md-help-web.rendermarkdowndirective.source.md) |  | <code>string</code> | Source string, used for obtaining markdown, using help service |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_loadMarkdown()](./md-help-web.rendermarkdowndirective._loadmarkdown.md) |  | Loads markdown using source |
|  [\_renderMarkdown(markdown)](./md-help-web.rendermarkdowndirective._rendermarkdown.md) |  | Renders markdown |
|  [\_scrollIntoView()](./md-help-web.rendermarkdowndirective._scrollintoview.md) |  | Scrolls into view fragment element |
|  [filterHtml(html)](./md-help-web.rendermarkdowndirective.filterhtml.md) |  | Filters out parts of html that should not be rendered |
|  [filterMd(md)](./md-help-web.rendermarkdowndirective.filtermd.md) |  | Filters out parts of markdown that should not be processed |
|  [ngOnChanges(changes)](./md-help-web.rendermarkdowndirective.ngonchanges.md) |  | Called when input value changes |
|  [processClick(target)](./md-help-web.rendermarkdowndirective.processclick.md) |  | Process click for anchors |
|  [showNotFound()](./md-help-web.rendermarkdowndirective.shownotfound.md) |  | Redirects to not found page |
