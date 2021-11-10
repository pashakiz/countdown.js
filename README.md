# countdown.js

<a href="https://pashakiz.github.io/countdown.js/" title="demo">demo1</a> <a href="http://lubus.ru/d/countdown/" title="demo">demo2</a> 

## Documentation

Add HTML-code (put your date for countdown in `data-countdown-date` attribute). Class `countdown-js` is required. If you want more than one timer - just copy/paste this HTML-code with another date.

```
<div class="countdown-js" data-countdown-date="2021-8-4-10-0-0"></div>
```
Add attribute `data-show-titles="true"` for output titles likes *«days»*, *«hours»*, *«mins»*, *«secs»*:
```
<div class="countdown-js" data-countdown-date="2021-8-4-10-0-0" data-show-titles="true"></div>
```

Add countdown.css

```
<link rel="stylesheet" href="css/countdown.css" />
```

You can customize this css-code. The full HTML-structure will be generated:
```
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

Add countdown.js:

```
<script src="js/countdown.js"></script>
```

When DOM is ready (or load) - init countdown!
```
document.addEventListener('DOMContentLoaded', initCountDown);
```

Enjoy it!
