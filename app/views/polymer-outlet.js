import Ember from "ember";

export default Ember.ContainerView.extend({
  classNames: ['polymer-container'],
  tagName: 'core-animated-pages',
  animations: '',

  didInsertElement: function() {
    var self = this;
    var view = this.$();
    var animations = this.get('animations');

    view[0].setAttribute('selected', 0);
    if (animations) {
      view[0].setAttribute('transitions', animations);
    }

    view.on('core-animated-pages-transition-end', function(e) {
      e.stopPropagation();
      var i;

      if (self._childViews.length > 1) {
        for (i = self._childViews.length; i > 1; i--) {
          self.removeChild(self._childViews[0]);
        }
      }

      view[0].setAttribute('selected', self._childViews.length - 1);
    });
  },

  _currentViewWillChange: Ember.beforeObserver('currentView', function() {}),

  _currentViewDidChange: Ember.observer('currentView', function() {
    var oldView = this.get('childViews.lastObject');
    var newView = this.get('currentView');
    var isSlide = this.get('slide');
    var view = this.$();

    this._super();
    if (!oldView || (!oldView && !newView) || (oldView && oldView.get('currentView') === newView)) {
      return;
    }

    if (isSlide && oldView && newView) {
      var oldOrder = oldView.get('order');
      var newOrder = newView.get('order');
      var transitions = this.get('animations').split(' ');

      if (oldOrder <= newOrder) {
        transitions.push('slide-from-right-fo-shizzle');
      } else {
        transitions.push('slide-from-left-fo-shizzle');
      }

      view[0].setAttribute('transitions', transitions.join(' ') + ' hero-transition');
    }

    view[0].setAttribute('selected', 1);

  })
});

