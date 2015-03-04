import Ember from "ember";

export default Ember.Route.extend({
  actions: {
  	back: function() {
  		var backRoute = this.controllerFor('application').get('goBackRoute');
      this.transitionTo(backRoute);
		}
  }
});