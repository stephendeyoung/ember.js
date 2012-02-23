var get = Ember.get, set = Ember.set;

function xform(target, method, params) {
  var args = [].slice.call(params, 2);
  method.apply(target, args);
}

Ember.Evented = Ember.Mixin.create({
  bindEvent: function(name, target, method) {
    if (!method) {
      method = target;
      target = null;
    }

    Ember.addListener(this, name, target, method, xform);
  },

  triggerEvent: function(name) {
    Ember.sendEvent.apply(null, [this, name].concat([].slice.call(arguments, 1)));
  },

  unbindEvent: function(name, target, method) {
    Ember.removeListener(this, name, target, method);
  }
});
