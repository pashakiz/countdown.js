# countdown.js

<a href="http://lubus.ru/d/countdown/" title="demo">demo.</a>

##Documentation

Add HTML-code (put your date for countdown in `data-countdown-date`)

```
<div class="countdown" data-countdown-date="2016-8-4-10-0-0"></div>
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

Add jQuery and countdown.js:

```
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/countdown.js"></script>
```

When DOM is ready (or load) - init countdown!
```
$(document).ready(function() {
	InitCountDown(); 
});
```

Enjoy it!