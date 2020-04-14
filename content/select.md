<div class="pull-right">
    <a href="https://github.com/ressurectit/ng-select">
        <span class="fab fa-github"></span>
    </a>
</div>

@INCLUDEMD#https://raw.githubusercontent.com/ressurectit/ng-select/HEAD/readme.md@

## Samples

- [Basic](#basic)
- [Basic lazy](#basic-lazy)
- [Multiple](#multiple)
- [Readonly](#readonly)
- [Live search](#live-search)
- [Dynamic](#dynamic)
- [Custom template](#custom-template)
- [Custom readonly](#custom-readonly)
- [Config](#config)
- [External source](#external-source)
- [Absolute](#absolute)
- [Modal popup](#modal-popup)
- [Edit](#edit)

### Basic

Basic usage is using only html markup and default `NgSelectOptions` or options provided by DI. Options for select are provided as static values.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#basic-select&select/BasicComponent@

---

### Basic lazy

Very similar to basic usage. Only difference is that options are loaded delayed. They are rendered using `ngFor`.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#basic-lazy-select&select/BasicLazyComponent@

---

### Multiple

Very similar to basic usage. Only difference is that there is additional attribute `multiple` applied to `<ng-select>`.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - `multiple` attribute applied to this element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#multiple-select&select/MultipleComponent@

---

### Readonly

Very similar to basic usage. Only difference is that there is additional attribute `readonly` applied to `<ng-select>`.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - `readonly` attribute applied to this element, can be used as static or dynamic expression
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#readonly-select&select/ReadonlyComponent@

---

### Live search

Live search allows you to search and filter available options provided by `Valuehandler`. Needs to be set up by options `NgSelectOptions`.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized
    - `BasicLiveSearchComponent` used as *liveSearch* plugin
- html `<ng-select>` is top level element
    - `selectOptions` are set with these options
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#live-search-select&select/LiveSearchComponent@

---

### Dynamic

Options are loaded dynamically when user types inside *liveSearch* input.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized
    - `BasicLiveSearchComponent` used as *liveSearch* plugin
    - `DynamicValueHandlerComponent` used as *valueHandler* plugin
        - `dynamicOptionsCallback` is provided as option, callback method that obtains options from rest service
- html `<ng-select>` is top level element
    - `selectOptions` are set with these options
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#dynamic-select&select/DynamicComponent@

---

### Custom template

Customized template for *NormalState* and for *Options* in *Popup*.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - `selectOptions` are set with these options
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option
    - **templating**
        - normal state template `<ng-template>` with *id* `normalStateTemplate` with template context
            - `$implicit` - Instance of used `NormalState` plugin
        - popup option template `<ng-template>` with *id* `optionTemplate` with template context
            - `$implicit` - Instance of `NgOption` that should be displayed
            - `popup` - Instance of used `Popup` plugin

@SAMPLE#custom-template-select&select/CustomTemplateComponent@

---

### Custom readonly

Custom plugin for *ReadonlyState*. Readonly state displayed as `<div>`.

- required module `NgSelectModule` from `@anglr/select`
- custom implementation of `ReadonlyState` `CustomReadonlyStateComponent` that *extends* `BasicNormalStateComponent`
- `NgSelectOptions` initialized
    - `CustomReadonlyStateComponent` used as *readonlyState* plugin
- html `<ng-select>` is top level element
    - `selectOptions` are set with these options
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#custom-readonly-select&select/CustomReadonlyComponent@

---

### Config

Options for grid are provided in 3 ways.

 - default options defined for grid and plugins
 - options provided from *Angular DI*
 - options provided directly using `Input` *selectOptions*

You can provide *plugin* types using *DI* `InjectionToken`, you can provide options per *plugin* using *DI* `InjectionToken` or you can provide *options* for whole `NgSelect` using *DI* `InjectionToken`. Options provided by different ways are merged. You can dynamically update options using *extensions* method `reinitializeOptions`. If you provide options with same `InjectionToken` on different levels they are overwritten (this is how *Angualr DI* works). Using *Angular DI* allows you to easily setup customized look of `NgSelect` for whole application on one place.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized
    - `CustomReadonlyStateComponent` used as *readonlyState* plugin
- html `<ng-select>` is top level element
    - `selectOptions` are set with these options
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#config-select&select/ConfigComponent@

---

### External source

External source allows you to easily create `Directives` that sets *selectOptions* by just applying `Directive` to `<ng-select>`. You can use `CodeOptionsGatherer` to setup gathering of options using code in these directives.

- required module `NgSelectModule` from `@anglr/select`
- `NgSelectOptions` initialized with default or DI provided defaults, additinally changed in `Directive`
    - `CodeOptionsGatherer` used as *optionsGatherer*
- html `<ng-select>` is top level element
    - `ExternalSourceDirective` is applied to element allowing gather additional parameters using `Input`s

@SAMPLE#external-source-select&select/ExternalComponent@

---

### Absolute

Dialog with absolutely positioned popup.

@SAMPLE#absolute-select&select/AbsoluteComponent@

---

### Modal popup

Dialog popup is displayed as *modal dialog*. *Popup* plugin is set using *DialogPopupDirective*. Using default *dialog* content type and default options, this can be changed.

- required module `NgSelectModule` from `@anglr/select` and `NgSelectDialogPopupModule` from `@anglr/select/material`
- `NgSelectOptions` initialized with default or DI provided defaults, additinally changed in `Directive`
    - `DialogPopupDirective` applies *dialogPopup* component
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#modal-popup-select&select/ModalPopupComponent@

---

### Edit

Dialog using `Edit` plugins.

@SAMPLE#edit-select&select/EditComponent@