import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var model = this.modelFor('nearby');
    this.controllerFor('application').set('lastObject', model);
  }
});