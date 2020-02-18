<div class="pull-right">
    <a href="https://github.com/ressurectit/ng-select">
        <span class="fab fa-github"></span>
    </a>
</div>

# Angular Select

- [API](/api/ng-select/select)
- [API Extensions](/api/ng-select-extensions/select-extensions)

This is very modular select component where every part can be replaced. Main component is using *plugins* (`KeyboardHandler`, `LiveSearch`, `NormalState`, `Popup`, `Positioner`, `ReadonlyState`, `ValueHandler`) for rendering select itself or just for handling certain events. Main component `NgSelectComponent` also implements `OptionsGatherer` and `TemplateGatherer`.

- `OptionsGatherer` - Used for obtaining options
- `TemplateGatherer` - Used for obtaining templates that can be used within plugins

#### Plugins

 - `KeyboardHandler`- This plugin is responsible for handling keyboard events within `Popup` and `NormalState`
 - `LiveSearch` - This plugin is responsible for rendering live search input
 - `NormalState` - This plugin is responsible for rendering of normal state for select, currently selected option(s), this is what you see when select is closed
 - `Popup` - This plugin is responsible for rendering of popup window, available options are visible when select is open
 - `Positioner` - This plugin is responsible for positioning of `Popup`
 - `ReadonlyState` - This plugin can be used for displaying custom readonly state if select is set as readonly or as disabled
 - `ValueHandler` - This plugin is responsible for handling selected value

## Samples

### Basic

Basic usage is using only html markup and default `NgSelectOptions` or options provided by DI. Options for select are provided as static values.

- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

[Live sample](/SAMPLES_URL/selectSamples)

---

### Basic lazy

Very similar to basic usage. Only difference is that options are loaded delayed. They are rendered using `ngFor`.

- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

[Live sample](/SAMPLES_URL/selectSamples/basicLazy)

---

### Multiple

Very similar to basic usage. Only difference is that there is additional attribute `multiple` applied to `<ng-select>`.

- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - `multiple` attribute applied to this element
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

[Live sample](/SAMPLES_URL/selectSamples/multiple)

---

### Readonly

Very similar to basic usage. Only difference is that there is additional attribute `readonly` applied to `<ng-select>`.

- `NgSelectOptions` initialized with default or DI provided defaults
- html `<ng-select>` is top level element
    - `readonly` attribute applied to this element, can be used as static or dynamic expression
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

[Live sample](/SAMPLES_URL/selectSamples/readonly)

---

### Live search

Live search allows you to search and filter available options provided by `Valuehandler`. Needs to be set up by options `NgSelectOptions`.

- `NgSelectOptions` initialized
    - `BasicLiveSearchComponent` used as *liveSearch* plugin
- html `<ng-select>` is top level element
    - `selectOptions` are set with these options
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

[Live sample](/SAMPLES_URL/selectSamples/liveSearch)

---

### Dynamic

Options are loaded dynamically when user types inside *liveSearch* input.

- `NgSelectOptions` initialized
    - `BasicLiveSearchComponent` used as *liveSearch* plugin
    - `DynamicValueHandlerComponent` used as *valueHandler* plugin
        - `dynamicOptionsCallback` is provided as option, callback method that obtains options from rest service
- html `<ng-select>` is top level element
    - `selectOptions` are set with these options
    - it contains static `<ng-option>` elements
        - `value` - value that is assigned to this option, if selected this value will be used
        - `text` - text that is displayed for option

[Live sample](/SAMPLES_URL/selectSamples/dynamic)

---

### Custom template

[Live sample](/SAMPLES_URL/selectSamples/customTemplate)

---

### Custom readonly

[Live sample](/SAMPLES_URL/selectSamples/customReadonly)

---

### Config

[Live sample](/SAMPLES_URL/selectSamples/config)

---

### External source

[Live sample](/SAMPLES_URL/selectSamples/external)