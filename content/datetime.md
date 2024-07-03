<div class="flex-row flex-end">
    <a href="https://github.com/ressurectit/ng-datetime">
        <span class="fab fa-github"></span>
    </a>
</div>

@INCLUDEMD#https://raw.githubusercontent.com/ressurectit/ng-datetime/HEAD/readme.md@

## Samples

- [Basic](#basic)
- [Basic picker](#basic-picker)
- [Data types](#data-types)
- [With time](#with-time)
- [Handlers](#handlers)
- [Today vs now](#today-vs-now)
- [Datetime picker customization](#datetime-picker-customization)

### Basic

Basic usage of input *text* transformed into *date time* input.

- required module `DateTimeModule` from `@anglr/datetime` for obtaining *date time directives*
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value using *pipes*
- html `<input>` with `dateTime` and `dateTimeInput` attributes transforms input into datetime input

@SAMPLE#basic-datetime&datetime/BasicComponent@

---

### Basic picker

Basic usage of input *text* transformed into *date time* input with attached *date time picker*.

- required module `DateTimeModule` from `@anglr/datetime` for obtaining *date time directives*
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value using *pipes*
- required module `DateTimePickerModule` from `@anglr/datetime` for obtaining *date time picker directives*
- html `<input>` with `dateTime` and `dateTimeInput` attributes transforms input into datetime input
    - attribute `withPicker` attaches date time picker

@SAMPLE#basic-picker-datetime&datetime/BasicPickerComponent@

---

### Data types

Showcase of data types supported by *date time picker*.

- required module `DateTimeModule` from `@anglr/datetime` for obtaining *date time directives*
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value using *pipes*
- required module `DateTimePickerModule` from `@anglr/datetime` for obtaining *date time picker directives*
- html `<input>` with `dateTime` and `dateTimeInput` attributes transforms input into datetime input
    - attribute `withPicker` attaches date time picker
    - 4 types of *date time pickers* (range is not supported **yet**)
        - `valueFormat="DateInstance"` sets *date time* to return `Date` instance, this is also default when omitted
        - `valueFormat="UnixTimestamp"` sets *date time* to return `number` (unix timestamp)
        - `valueFormat="FormattedString" customFormat="yyyyMMdd"` sets *date time* to return `string` in `yyyyMMdd` *format*, this format is also displayed to user, if `customFormat` is omitted, default *date* format will be used
        - `valueFormat="DataString" dataFormat="yyyy MM dd"` sets *date time* to return `string` in `yyyy MM dd` *format*, this format is only used for returned data

@SAMPLE#data-types-datetime&datetime/DataTypesComponent@

---

### With time

Showcase of usage with selecting also time *part*.

- required module `DateTimeModule` from `@anglr/datetime` for obtaining *date time directives*
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value using *pipes*
- required module `DateTimePickerModule` from `@anglr/datetime` for obtaining *date time picker directives*
- required directive `WithTimeSADirective` from `@anglr/datetime` for using *with time directive*
- html `<input>` with `dateTime` and `dateTimeInput` attributes transforms input into datetime input
    - attribute `withPicker` attaches date time picker
    - attribute `withTime` sets up also time picker and changes format to *dateTime*

@SAMPLE#with-time-datetime&datetime/WithTimeComponent@

---

### Handlers

Showcase of handlers that can help with keyboard manipulation

- required module `DateTimeModule` from `@anglr/datetime` for obtaining *date time directives*
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value using *pipes*
- required module `DateTimePickerModule` from `@anglr/datetime` for obtaining *date time picker directives*
- required directive `SimpleDateTimeInputHandlerSADirective` from `@anglr/datetime` for using *simple handler directive*
- required directive `DateTimeInputHandlerSADirective` from `@anglr/datetime` for using *handler directive* 
- html `<input>` with `dateTime` and `dateTimeInput` attributes transforms input into datetime input
    - attribute `withPicker` attaches date time picker
    - attribute `withSimpleHandler` attaches *simple handler*
        - enables use of arrow keys for navigation in *picker*
        - up/down arrow keys changes week, +/- 1 week
        - right/left arrow keys changes days, +/- day
    - attribute `withHandler` attaches *handler*
        - right/left arrow keys (tab/shift+tab) selection of date time parts
        - up/down arrow keys changes selected date time part, increases/decreases

@SAMPLE#handlers-datetime&datetime/HandlersComponent@

---

### Today vs now

Showcase of difference for *today* and for *now*

- required module `DateTimeModule` from `@anglr/datetime` for obtaining *date time directives*
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value using *pipes*
- required module `DateTimePickerModule` from `@anglr/datetime` for obtaining *date time picker directives*
- required directive `WithTimeSampleComponent` from `@anglr/datetime` for using *with time directive*
- required directive `WithTodaySADirective` from `@anglr/datetime` for using *with today directive* 
- required directive `WithNowSADirective` from `@anglr/datetime` for using *with now directive* 
- html `<input>` with `dateTime` and `dateTimeInput` attributes transforms input into datetime input
    - attribute `withPicker` attaches date time picker
    - attribute `withTime` sets up also time picker and changes format to *dateTime*
    - attribute `withToday` sets up input to be filled with *today* on *focus*
    - attribute `withNow` sets up input to be filled with *now* on *focus*
    - **difference between *now* and *today* is that *today* sets time to start of a day, *now* sets also time to current time**

@SAMPLE#today-vs-now-datetime&datetime/TodayVsNowComponent@

---

### Datetime picker customization

Showcase date time picker *customization*

- required module `DateTimeModule` from `@anglr/datetime` for obtaining *date time directives*
- required module `DatePipesModule` from `@anglr/datetime` for formatting current value using *pipes*
- required module `DateTimePickerModule` from `@anglr/datetime` for obtaining *date time picker directives*
- required directive `WithTimeSampleComponent` from `@anglr/datetime` for using *with time directive*
- html `<input>` with `dateTime` and `dateTimeInput` attributes transforms input into datetime input
    - attribute `withPicker` attaches date time picker
    - provided `pickerOptions` with custom date time picker options
        - customized displayed *parts* and their coresponding components
        - customized default displayed *part*

@SAMPLE#customized-picker-datetime&datetime/CustomizedPickerComponent@

---
