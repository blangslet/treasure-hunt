import Ember from 'ember';

export default Ember.Controller.extend({
	back: null,
	currentPath: null,
	navHistory: [],
	lastObject: null,

  //this is a horrible quick last-second implementation of a history stack for iOS - tis shameful indeed

  goBackRoute: function() {
    //return hasNavHistory ? hasNavHistory.get('lastObject') : 'trips';
    if (this.get('hasNavHistory')) {
      return this.get('navHistory.lastObject');
    } else {
      return 'trips';
    }
  }.property('currentPath'),

  hasNavHistory: Ember.computed.gt('navHistory.length', 0),

	_updateHistory: function() {
    this.get('navHistory').pushObject(this.get('currentPath'));
  }.observes('currentPath'),

	actions: {
		back: function() {
			if (this.get('hasNavHistory')){
        this.get('navHistory').popObject();
        if (this.get('goBackRoute') === 'nearby') {
        	this.transitionToRoute(this.get('goBackRoute'), this.get('lastObject'));
        } else {
        	this.transitionToRoute(this.get('goBackRoute'));
        }
        this.get('navHistory').popObject();
      }
		}
	}
});