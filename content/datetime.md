<div class="pull-right">
    <a href="https://github.com/ressurectit/ng-datetime">
        <span class="fab fa-github"></span>
    </a>
</div>

@INCLUDEMD#https://raw.githubusercontent.com/ressurectit/ng-datetime/HEAD/readme.md@

## Samples

- [Basic](#basic)
- [Simple selector](#simple-selector)
- [Min max static](#min-max-static)

### Basic

Basic usage is using only html markup and default `DateTimeSelectorOptions` or options provided by DI.

- required module `DateTimeSelectorModule` from `@anglr/datetime` for *selector* component
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value
- `DateTimeSelectorOptions` initialized with default or DI provided defaults
- html `<date-time-selector>` is datetime selector component

@SAMPLE#basic-datetime&datetime/BasicComponent@

---

### Simple Selector

Simple datetime selector usage is using `DateTimeSelectorOptions` overriden option `selectorComponent`, rest of options are default or options provided by DI.

- required module `DateTimeSelectorModule` from `@anglr/datetime` for *selector* component
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value
- `DateTimeSelectorOptions` initialized with
    - `selectorComponent` option is set to `SimpleInputDateTimeSelectorComponent`
    - rest is default or DI provided defaults
- html `<date-time-selector>` is datetime selector component

@SAMPLE#simple-selector-datetime&datetime/SimpleSelectorComponent@

### Min Max Static

Datetime selector usage is using default `DateTimeSelectorOptions` or options provided by DI and is using min and max selectable values.

- required module `DateTimeSelectorModule` from `@anglr/datetime` for *selector* component
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value
- `DateTimeSelectorOptions` initialized with default or DI provided defaults
- html `<date-time-selector>` is datetime selector component
    - `minValue` attribute used to set static minimal value
    - `maxValue` attribute used to set static relative maximal value (relative to current date)

@SAMPLE#min-max-static-datetime&datetime/MinMaxStaticComponent@