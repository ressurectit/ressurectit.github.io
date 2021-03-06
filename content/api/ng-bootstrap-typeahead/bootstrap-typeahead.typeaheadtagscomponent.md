<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@anglr/bootstrap-typeahead](./bootstrap-typeahead.md) &gt; [TypeaheadTagsComponent](./bootstrap-typeahead.typeaheadtagscomponent.md)

## TypeaheadTagsComponent class

Component that is used for creating autocomplete (typeahead.js) with tags

<b>Signature:</b>

```typescript
export declare class TypeaheadTagsComponent implements OnInit, OnDestroy, AfterViewInit 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(\_changeDetector)](./bootstrap-typeahead.typeaheadtagscomponent._constructor_.md) |  | Constructs a new instance of the <code>TypeaheadTagsComponent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [allowDuplicates](./bootstrap-typeahead.typeaheadtagscomponent.allowduplicates.md) |  | <code>boolean</code> | Indication whether duplicates are allowed |
|  [cssClasses](./bootstrap-typeahead.typeaheadtagscomponent.cssclasses.md) |  | <code>TypeaheadTagsCssClasses</code> | Css classes applied to inner elements |
|  [freeInput](./bootstrap-typeahead.typeaheadtagscomponent.freeinput.md) |  | <code>boolean</code> | Indication that also non existing value from options will be accepted as value, it is always as string value |
|  [maxValues](./bootstrap-typeahead.typeaheadtagscomponent.maxvalues.md) |  | <code>number</code> | Count of maximal number of values contained in this input |
|  [placeholder](./bootstrap-typeahead.typeaheadtagscomponent.placeholder.md) |  | <code>string</code> | Placeholder for typeahead input |
|  [removeOnBackspace](./bootstrap-typeahead.typeaheadtagscomponent.removeonbackspace.md) |  | <code>boolean</code> | Indication whether item should be removed on backspace |
|  [serializationFn](./bootstrap-typeahead.typeaheadtagscomponent.serializationfn.md) |  | <code>(item: any) =&gt; string</code> | Function that is used for serialization |
|  [tagContentTemplate](./bootstrap-typeahead.typeaheadtagscomponent.tagcontenttemplate.md) |  | <code>TemplateRef&lt;any&gt;</code> | Custom template for tag content |
|  [tagsDisabled](./bootstrap-typeahead.typeaheadtagscomponent.tagsdisabled.md) |  | <code>boolean</code> | Indication that this component should be tagsDisabled |
|  [typeahead](./bootstrap-typeahead.typeaheadtagscomponent.typeahead.md) |  | <code>TypeaheadDirective</code> | Typeahead directive instance |
|  [typeaheadDebounceTime](./bootstrap-typeahead.typeaheadtagscomponent.typeaheaddebouncetime.md) |  | <code>number</code> | Debounce time that indicates after which time of idle perform search |
|  [typeaheadDisplayedProperty](./bootstrap-typeahead.typeaheadtagscomponent.typeaheaddisplayedproperty.md) |  | <code>string &#124; ((suggestion: any) =&gt; string) &#124; null</code> | Name of displayed property as selected value |
|  [typeaheadMaxItems](./bootstrap-typeahead.typeaheadtagscomponent.typeaheadmaxitems.md) |  | <code>number</code> | Maximal number of displayed items |
|  [typeaheadMinLength](./bootstrap-typeahead.typeaheadtagscomponent.typeaheadminlength.md) |  | <code>number</code> | Minimal number of characters to start search |
|  [typeaheadSource](./bootstrap-typeahead.typeaheadtagscomponent.typeaheadsource.md) |  | <code>((query: any) =&gt; Observable&lt;any&gt;) &#124; null</code> | Function that is called to obtain data for search |
|  [typeaheadTemplate](./bootstrap-typeahead.typeaheadtagscomponent.typeaheadtemplate.md) |  | <code>string &#124; null</code> | Template that is used for suggestion, using handlebar syntax |
|  [typeaheadValueProperty](./bootstrap-typeahead.typeaheadtagscomponent.typeaheadvalueproperty.md) |  | <code>string &#124; null</code> | Name of property that is used for extracting value from object |
|  [value](./bootstrap-typeahead.typeaheadtagscomponent.value.md) |  | <code>any[]</code> | Gets or sets currently set value |
|  [valueChanged](./bootstrap-typeahead.typeaheadtagscomponent.valuechanged.md) |  | <code>Observable&lt;any[]&gt;</code> | Gets observable that emits changes of value |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [getTagDisplayedValue(value)](./bootstrap-typeahead.typeaheadtagscomponent.gettagdisplayedvalue.md) |  | Gets displayed value for tag |
|  [handleKeyDown(event)](./bootstrap-typeahead.typeaheadtagscomponent.handlekeydown.md) |  | Process key down |
|  [handleKeyPress(keyCode)](./bootstrap-typeahead.typeaheadtagscomponent.handlekeypress.md) |  | Process confirmation keys |
|  [ngAfterViewInit()](./bootstrap-typeahead.typeaheadtagscomponent.ngafterviewinit.md) |  | Called when view was initialized |
|  [ngOnDestroy()](./bootstrap-typeahead.typeaheadtagscomponent.ngondestroy.md) |  | Called when component is destroyed |
|  [ngOnInit()](./bootstrap-typeahead.typeaheadtagscomponent.ngoninit.md) |  | Initialize component |
|  [removeTag(index)](./bootstrap-typeahead.typeaheadtagscomponent.removetag.md) |  | Removes tag at specified index |

