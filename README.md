# countdown.js

<a href="https://pashakiz.github.io/countdown.js/" title="demo">demo</a>

## Documentation

1) Add HTML-code.

Set your date for countdown in `data-countdown-date` attribute (format: yyyy-m-d-h-m-s) **or** set time to `data-countdown-time` attribute (format: h-m-s).

```HTML
<div class="countdown-js" data-countdown-date="2021-8-4-10-0-0"></div>
```

```HTML
<div class="countdown-js" data-countdown-time="1-15-0"></div>
```
Class `countdown-js` is required. If you want more than one timer - just copy/paste this HTML-code with another date **or** time.

<br>

2) Add countdown.css

```HTML
<link rel="stylesheet" href="css/countdown.css">
```

You can customize this css-code. The full HTML-structure will be generated:
```HTML
<div class="countdown-js" data-countdown-date="2016-8-4-10-0-0">
  <div class="clockface">
    <div class="clockface-item clockface-item_days">
      <div class="clockface__value"></div>
      <div class="clockface__title"></div>
    </div>
    <div class="clockface__separator"></div>
    <div class="clockface-item clockface-item_hours">
      <div class="clockface__value"></div>
      <div class="clockface__title"></div>
    </div>
    <div class="clockface__separator"></div>
    <div class="clockface-item clockface-item_mins">
      <div class="clockface__value"></div>
      <div class="clockface__title"></div>
    </div>
    <div class="clockface__separator"></div>
    <div class="clockface-item clockface-item_seconds">
      <div class="clockface__value"></div>
      <div class="clockface__title"></div>
    </div>
  </div>
</div>
```

If you need to remove some part of clockface items - you can hide them using css. For example to remove the days section:
```CSS
.clockface-item.clockface-item_days {
  display: none;
}
.clockface-item.clockface-item_days + .clockface__separator {
  display: none;
}
```

3) Add countdown.js:

```HTML
<script src="js/countdown.js"></script>
```

4) When DOM is ready (or load) - init countdown!
```JS
document.addEventListener('DOMContentLoaded', initCountDown);
```

Enjoy it!


## Options:
Add attribute `data-show-titles="true"` for output titles likes *«days»*, *«hours»*, *«mins»*, *«secs»*:
```HTML
<div class="countdown-js" data-countdown-date="2021-8-4-10-0-0" data-show-titles="true"></div>
```

Add attribute `data-hide-left-zero="true"` for hide left zero of days/hours/mins/secs (for example: `1` instead `01`):
```HTML
<div class="countdown-js" data-countdown-date="2021-8-4-10-0-0" data-hide-left-zero="true"></div>
```
