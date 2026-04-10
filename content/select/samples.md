## Samples

- [Basic](#basic)
- [Form usage](#form-usage)
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
- [Edit](#edit)
- [Popover popup](#popover-popup)

### Basic

Basic usage is using only html markup and default `SelectOptions` or options provided by DI. Options for select are provided as static values.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectControlValueAccessor` control value accessor for *reactive forms*
- data binding using *reactive forms*
- `SelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#basic-select&select/BasicComponent@

---

### Form usage

Same as basic usage but displaying *reactive forms* and *signal forms* approach.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectControlValueAccessor` control value accessor for *reactive forms*
    - `SelectFormControl` form control for *signal forms*
- first select data binding using *reactive forms*
- second select data binding using *signal forms*
- `SelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements rendered using `@for`
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#form-usage-select&select/FormUsageComponent@

---

### Basic lazy

Very similar to basic usage. Only difference is that options are loaded delayed. They are rendered using `@for`.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
- data binding using *signal forms*
- `SelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements rendered using `@for`
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#basic-lazy-select&select/BasicLazyComponent@

---

### Multiple

Very similar to basic usage. Only difference is that there is additional attribute `multiple` applied to `<ng-select>`.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectMultipleKeepPopup` directive that applied to *multiple* select and keeps popup open after selection of option
    - `SelectFormControl` form control for *signal forms*
- `SelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - `multiple` attribute applied to this element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#multiple-select&select/MultipleComponent@

---

### Readonly

Very similar to basic usage. Only difference is that there is `readonly` restriction applied using *signal forms schema*.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
- `SelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#readonly-select&select/ReadonlyComponent@

---

### Live search

Live search allows you to search and filter available options provided by `OptionsGatherer`. Needs to be set up by options `SelectOptions`.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
- `SelectOptions` initialized
    - `FilterLiveSearch` used as *liveSearch* plugin
    - `liveSearchEnabled` must be enabled (set to `true`) for `popup` plugin options
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#live-search-select&select/LiveSearchComponent@

---

### Dynamic

Options are loaded dynamically when user types inside *liveSearch* input.

- imports from `@anglr/select`
    - `Select` select component itself
    - `SelectFormControl` form control for *signal forms*
- `SelectOptions` initialized
    - `FilterLiveSearch` used as *liveSearch* plugin
    - `DynamicValueHandler` used as *valueHandler* plugin
    - `CodeOptionsGatherer` used as *optionsGatherer*
- in reactive context (`effect`) set available options for *options gatherer* when search value changes
- html `<ng-select>` is top level element

@SAMPLE#dynamic-select&select/DynamicComponent@

---

### Custom template

Customized template for *NormalState* and for every *Option* in *Popup*.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
    - `DisplayValue` pipe that is used for formatting selected value
    - `OptionTemplate` structural directive used for obtaining template for *Option*
    - `NormalStateTemplate` structural directive used for obtaining template for *NormalState* displayed content
- `SelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option
    - **templates**
        - normal state template using *normalStateTemplate* with template context
            - `$implicit` - Instance of used `NormalState` plugin
        - popup option template using *optionTemplate* with template context
            - `$implicit` - Instance of `SelectOptionState` that should be displayed
            - `popup` - Instance of used `Popup` plugin

@SAMPLE#custom-template-select&select/CustomTemplateComponent@

---

### Custom readonly

Custom plugin for *ReadonlyState*. Readonly state displayed as `<div>`.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
- custom implementation of `ReadonlyState` `CustomReadonlyStateComponent` that *extends* `SimpleNormalState`
- `SelectOptions` initialized
    - `CustomReadonlyStateComponent` used as *readonlyState* plugin
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#custom-readonly-select&select/CustomReadonlyComponent@

---

### Config

Options for select are provided in 3 ways.

 - default options defined for select and plugins
 - options provided from *Angular DI*
 - options provided directly using `Input` *selectOptions*

You can provide *plugin* types using *DI provide methods*, you can provide options per *plugin* using *DI provide methods* or you can provide *options* for whole `Select` using *DI provide methods* . Options provided by different ways are merged. If you provide options on different levels they are overwritten (this is how *Angualr DI* works). Using *Angular DI* allows you to easily setup customized look of `Select` for whole application in one place.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
- `SelectOptions` initialized
    - using *DI*
        - `placeholder` is set
    - using *component property*
        - `placeholder` is set
- html `<ng-select>` is top level element (two selects, one without *selectOptions*, configured using *DI*)
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#config-select&select/ConfigComponent@

---

### External source

External source allows you to easily create `Directives` that sets *selectOptions* by just applying `Directive` to `<ng-select>`. You can use `CodeOptionsGatherer` to setup gathering of options using code in these directives.

- imports from `@anglr/select`
    - `Select` select component itself
    - `SelectFormControl` form control for *signal forms*
- `SelectOptions` initialized with default or DI provided defaults, additinally changed in `Directive`
    - `CodeOptionsGatherer` used as *optionsGatherer*
- html `<ng-select>` is top level element
    - `ExternalSourceDirective` is applied to element allowing gather additional parameters using `Input`s

@SAMPLE#external-source-select&select/ExternalComponent@

---

### Absolute

Demonstration of dialog with standard `popup` plugin and with absolutely positioned `popup` plugin in *html body*, which solves problems with overflowing of popup.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
    - `SelectAbsolute` directive to setup absolute select
- `SelectOptions` initialized with default or DI provided defaults, additinally changed in `SelectAbsolute`
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#absolute-select&select/AbsoluteComponent@

---

### Edit

Select with *liveSearch* plugin placed in *normalState* plugin. Using specialized *normalState* plugin implementation and *liveSearch* plugin implementation and preconfigured *keyboardHandler* plugin handling also *liveSearch* plugin events and disabling `alphanumericSearch`. It can be used as *autocomplete*.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
    - `SelectEdit` directive to setup *liveSearch* type, *normalState* type and *keyboardHandler* options
    - `SelectMultipleKeepPopup` directive that applied to *multiple* select and keeps popup open after selection of option
- `SelectOptions` initialized with default or DI provided defaults, additinally changed in `SelectEdit`
- html `<ng-select>` is top level element
    - applied `edit` attribute for `SelectEdit` directive
    - second select has `multiple` attribute
    - it contains static `<ng-option>` elements 
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#edit-select&select/EditComponent@

---

### Popover popup

Select with *liveSearch* plugin placed in *normalState* plugin. Using specialized *normalState* plugin implementation and *liveSearch* plugin implementation and preconfigured *keyboardHandler* plugin handling also *liveSearch* plugin events and disabling `alphanumericSearch`. It can be used as *autocomplete*.

- imports from `@anglr/select`
    - `Select` select component itself
    - `Option` option component
    - `SelectFormControl` form control for *signal forms*
    - `SelectEdit` directive to setup *liveSearch* type, *normalState* type and *keyboardHandler* options
    - `SelectMultipleKeepPopup` directive that applied to *multiple* select and keeps popup open after selection of option
- `SelectOptions` initialized with default or DI provided defaults, additinally changed in `SelectEdit`
- html `<ng-select>` is top level element
    - applied `edit` attribute for `SelectEdit` directive
    - second select has `multiple` attribute
    - it contains static `<ng-option>` elements 
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

@SAMPLE#popover-popup-select&select/PopoverPopupComponent@