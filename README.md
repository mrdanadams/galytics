# GAlytics: Micro JavaScript library for easy Google Analytics event tracking

[https://github.com/mrdanadams/galytics](https://github.com/mrdanadams/galytics) by [Dan Adams](http://mrdanadams.com)

GAlytics is a really, really small JavaScript library (~800 bytes minified, ~450 bytes gzipped) for tracking Google Analytics events declaratively. Simply add `data` attributes to your elements and the library will do the rest.

It's a plain old JS with no dependencies (other than ga.js).

## Usage

Include galytics.js after your GA init script:

```html
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-9999999-9']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
  <script src="galytics.js" async></script>
```

Annotate links with data attributes:

* _data-ga-event_: The event name to be tracked when clicked.
* _data-ga-event-label_: (optional) The event label.
* _data-ga-event-value_: (optional) The event value (must be an integer).
* _data-ga-event-category_: (optional) The event category.

Ex:

```html
  <a href="#" data-ga-event="simple">A simple event</a>
  <a href="#" data-ga-event="with-label" data-ga-event-label="Captain America">One with a label</a>
  <a href="#" data-ga-event="with-value" data-ga-event-value="42">One with a value</a>
  <a href="#" data-ga-event="with-value-and-label" data-ga-event-label="Thanks for all the fish!" data-ga-event-value="42">Both label and value</a>
  <a href="#" data-ga-event="with-category" data-ga-event-label="Thanks for all the fish!" data-ga-event-value="42" data-ga-event-category="interesting-events">Label, value, and category</a>
```

You can also track non-click events like so:

```html
<div data-ga-event="mouseover:i-got-hovered">Mouse over me</div>
```

## License

MIT

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/c207935261bdb3f548121c20da77abc9 "githalytics.com")](http://githalytics.com/mrdanadams/galytics)
