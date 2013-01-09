// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==
// see http://closure-compiler.appspot.com/home

galytics = (function(_gaq) {
  "use strict";

  var undef, o = {
    // Record an event occurance with (optional) associated metadata.
    // options.value must be a value that can be converted to an integer.
    trackEvent: function(name, options) {
      var args;
      options = options || {};

      args = ['_trackEvent', options.category, name];

      // if you include a value, you must include a label (even if it's undefined)
      if (!undef(options.label) || !undef(options.value)) args.push(options.label || undefined);
      if (!undef(options.value)) args.push(+options.value);

      _gaq.push(args);
      this.log(args);
    },

    // Call to set up tracking on annotated elements.
    // Must be called after GA setup code but the GA library doesn't actually need to be initialized yet.
    init: function() {
      var els = document.querySelectorAll('*[data-ga-event]'),
        i, event, m, name, el, label, value, category, options, m;

      for (i=0; i<els.length; i++) {
        el = els[i];
        name = el.getAttribute('data-ga-event');
        event = "click";

        if (!undef(m = name.match(/^([^:]+):(.+)$/))) {
          event = m[1];
          name = m[2];
        }

        label = el.getAttribute('data-ga-event-label');
        value = el.getAttribute('data-ga-event-value');
        category = el.getAttribute('data-ga-event-category');
        if (!undef(value)) value = +value;

        options = {"label": label, "value": value, "category":category};
        el.addEventListener(event, (function(name, options, o) {
          return function() { o.trackEvent(name, options); };
        })(name, options, this));
      }
    }
  };

  undef = function(o) { return typeof o == "undefined" || o == null; }

  if (undef(_gaq)) throw "Must be loaded after the GA loading code";

  if (undef(console) || undef(console.log))
    o.log = function() {};
  else
    o.log = function(o) { console.log(o); }

  o.init();
  
  return o;
})(_gaq);
