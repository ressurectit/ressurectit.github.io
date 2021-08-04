<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/common-forms](./common-forms.md) &gt; [DefaultValidationErrorRenderer](./common-forms.defaultvalidationerrorrenderer.md)

## DefaultValidationErrorRenderer class

Default implementation of validation error renderer

<b>Signature:</b>

```typescript
export declare class DefaultValidationErrorRenderer implements ValidationErrorRenderer 
```
<b>Implements:</b> [ValidationErrorRenderer](./common-forms.validationerrorrenderer.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_errorMessagesExtractor, \_control, \_controlElement, \_document, \_injector, \_isSubmittedOrDirty, \_options)](./common-forms.defaultvalidationerrorrenderer._constructor_.md) |  | Constructs a new instance of the <code>DefaultValidationErrorRenderer</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [\_component](./common-forms.defaultvalidationerrorrenderer._component.md) |  | ComponentRef&lt;[ValidationErrorsComponent](./common-forms.validationerrorscomponent.md)<!-- -->&gt; | Component used for displaying errors |
|  [\_control](./common-forms.defaultvalidationerrorrenderer._control.md) |  | FormControl |  |
|  [\_controlElement](./common-forms.defaultvalidationerrorrenderer._controlelement.md) |  | HTMLElement |  |
|  [\_document](./common-forms.defaultvalidationerrorrenderer._document.md) |  | HTMLDocument |  |
|  [\_errorMessageAttr](./common-forms.defaultvalidationerrorrenderer._errormessageattr.md) |  | Attr | Html element attribute storing error messages |
|  [\_errorMessagesExtractor](./common-forms.defaultvalidationerrorrenderer._errormessagesextractor.md) |  | [ErrorMessagesExtractor](./common-forms.errormessagesextractor.md) |  |
|  [\_injector](./common-forms.defaultvalidationerrorrenderer._injector.md) |  | Injector |  |
|  [\_isSubmittedOrDirty](./common-forms.defaultvalidationerrorrenderer._issubmittedordirty.md) |  | [IsSubmittedOrDirtyFunc](./common-forms.issubmittedordirtyfunc.md) |  |
|  [\_lastErrors](./common-forms.defaultvalidationerrorrenderer._lasterrors.md) |  | [ValidationErrorsResult](./common-forms.validationerrorsresult.md) | Object storing last obtained errors |
|  [\_options](./common-forms.defaultvalidationerrorrenderer._options.md) |  | [ValidationErrorsRendererOptions](./common-forms.validationerrorsrendereroptions.md) |  |
|  [wrapperElement](./common-forms.defaultvalidationerrorrenderer.wrapperelement.md) |  | HTMLElement | Html element that is wrapping errors |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_hide()](./common-forms.defaultvalidationerrorrenderer._hide.md) |  | Hides wrapper element |
|  [\_initialize()](./common-forms.defaultvalidationerrorrenderer._initialize.md) |  | Initialize renderer |
|  [\_render(add)](./common-forms.defaultvalidationerrorrenderer._render.md) |  | Renders error messages |
|  [\_renderComponent(add)](./common-forms.defaultvalidationerrorrenderer._rendercomponent.md) |  | Renders component with errors |
|  [\_renderDivs(add)](./common-forms.defaultvalidationerrorrenderer._renderdivs.md) |  | Renders divs with errors |
|  [\_renderTemplate(\_add)](./common-forms.defaultvalidationerrorrenderer._rendertemplate.md) |  | Renders template with errors |
|  [\_show()](./common-forms.defaultvalidationerrorrenderer._show.md) |  | Shows wrapper element |
|  [\_toggleErrors(add)](./common-forms.defaultvalidationerrorrenderer._toggleerrors.md) |  | Toggles css classes for errors that are currently set |
|  [destroy()](./common-forms.defaultvalidationerrorrenderer.destroy.md) |  | Destroys renderer and everything that was rendered |
|  [update(errorMessages, onlyShow)](./common-forms.defaultvalidationerrorrenderer.update.md) |  | Updates rendered errors for current state and returns true if errors were rendered, otherwise false |
