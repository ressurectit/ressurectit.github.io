## Styling

Styling and using css for `@anglr/select`. 

### Using SCSS

Select provides scss classes and predefined themes *light* and *dark*. It is possible to customize select using *scss maps*. 

**Creating css styles using mixin**

To create css styles provided by select use following scss code.

```scss
@use '@anglr/select/styles' as selectPackage;

@include selectPackage.buildThemeCss;
```

This will create all neceseary css styles for *default* css classes in select. These css styles are using *css variables* which must be also included. 

**Creating css variables using mixin**

To create css variables provided by select use following scss code.

```scss
@use '@anglr/select/styles/themes/light' as selectTheme;
@use '@anglr/select/styles' as select;

@include select.buildThemeVars(selectTheme.defineTheme());
```

for default light theme or when you want to customize you overwrite predefined values using following scss code.

```scss
@use '@anglr/select/styles/themes/light' as selectTheme;
@use '@anglr/select/styles' as select;

.select-override
{
    @include select.buildThemeVars(selectTheme.defineTheme(14px, 
    (
        select:
        (
            normalState:
            (
                borderColor: #aaaaaa,
                background: #ffffff,
                foreground: #4b4b4b,
                borderWidth: var(--size-1px-fixed),
                padding: var(--size-4px) var(--size-6px),
            ),
            liveSearch:
            (
                placeholder: #4b4b4b,
            )
        ),
    )));
}
```

@SAMPLE#styling-select&select/StylingComponent@