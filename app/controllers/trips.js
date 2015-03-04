import Ember from 'ember';

export default Ember.Controller.extend({
  firstRow: function() {
    return this.get('model').slice(0,3);
  }.property('model.@each'),

  secondRow: function() {
    return this.get('model').slice(3,6);
  }.property('model.@each')
});