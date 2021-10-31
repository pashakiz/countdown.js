# countdown.js

<a href="https://pashakiz.github.io/countdown.js/" title="demo">demo1</a> <a href="http://lubus.ru/d/countdown/" title="demo">demo2</a> 

## Documentation

Add HTML-code (put your date for countdown in `data-countdown-date` attribute)

```
<div class="countdown" data-countdown-date="2021-8-4-10-0-0"></div>
```

Add countdown.css

```
<link rel="stylesheet" href="css/countdown.css" />
```

You can customize this css-code. The full HTML-structure will be:
```
<div class="countdown" data-countdown-date="2016-8-4-10-0-0">
	<div class="count-block count-days">
		<div class="value"></div>
		<div class="title"></div>
	</div>
	<div class="count-separator"></div>
	<div class="count-block count-hours">
		<div class="value"></div>
		<div class="title"></div>
	</div>
	<div class="count-separator"></div>
	<div class="count-block count-mins">
		<div class="value"></div>
		<div class="title"></div>
	</div>
	<div class="count-separator"></div>
	<div class="count-block count-seconds">
		<div class="value"></div>
		<div class="title"></div>
	</div>
</div>
```

```
<div class="countdown" data-countdown-date="2016-8-4-10-0-0">
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
document.addEventListener('DOMContentLoaded', InitCountDown);
```

Enjoy it!
