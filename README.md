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

Add jQuery and countdown.js:

```
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/countdown.js"></script>
```

When DOM is ready - init countdown!
```
$(document).ready(function() {
	InitCountDown(); 
});
```

Enjoy it!