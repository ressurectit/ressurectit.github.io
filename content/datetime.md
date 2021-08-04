<div class="pull-right">
    <a href="https://github.com/ressurectit/ng-datetime">
        <span class="fab fa-github"></span>
    </a>
</div>

@INCLUDEMD#https://raw.githubusercontent.com/ressurectit/ng-datetime/HEAD/readme.md@

# Angular Datetime

- [API](/content/api/ng-datetime/datetime)

### Basic

Basic usage is using only html markup and default `DateTimeSelectorOptions` or options provided by DI.

- required module `DateTimeSelectorModule` from `@anglr/datetime` for *selector* component
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value
- `DateTimeSelectorOptions` initialized with default or DI provided defaults
- html `<date-time-selector>` is datetime selector component

@SAMPLE#basic-datetime&datetime/BasicComponent@

---